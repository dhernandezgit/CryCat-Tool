"""Composición de páginas y exportación de máxima calidad."""

from __future__ import annotations

import io
import math
import re
from functools import lru_cache
from pathlib import Path

from PIL import Image

from .geometry import CutArea, mm_to_px
from .imaging import trim
from .packer import Placement

MARCAS_DIR = Path(__file__).parent / "web" / "marcas"
MARCAS_PPP = 6.239   # resolución de los recortes (px/mm)


@lru_cache(maxsize=1)
def _srgb_bytes() -> bytes | None:
    """Perfil sRGB para etiquetar los PNG/PDF exportados (calidad de color)."""
    try:
        from PIL import ImageCms
        return ImageCms.ImageCmsProfile(ImageCms.createProfile("sRGB")).tobytes()
    except Exception:  # pragma: no cover
        return None


def _icc_bytes(perfil: str = "srgb") -> bytes | None:
    """Perfil ICC de salida: sRGB o AdobeRGB (si Pillow lo conoce)."""
    nombre = (perfil or "srgb").lower()
    if nombre in ("adobergb", "adobe-rgb", "a98"):
        for candidato in ("Adobe RGB (1998)", "AdobeRGB1998"):
            try:
                paletas = {p.name.encode(): p for p in
                           __import__("PIL.ImageCms", fromlist=["x"])
                           .ImageCmsProfile.__dict__.get("_cms", [])}
            except Exception:
                paletas = {}
            try:
                from PIL import ImageCms
                ruta = ImageCms.getOpenProfile(candidato)
                return ImageCms.ImageCmsProfile(ruta).tobytes()
            except Exception:
                continue
    return _srgb_bytes()


def _save_png(img: Image.Image, path: Path, dpi: float,
              perfil: str = "srgb") -> None:
    """PNG sin pérdidas a máxima calidad: sin cuantizar, con pHYs (ppp) y
    perfil de color embebido (sRGB o AdobeRGB)."""
    kwargs: dict = {"format": "PNG", "dpi": (dpi, dpi), "optimize": False}
    icc = _icc_bytes(perfil)
    if icc:
        kwargs["icc_profile"] = icc
    img.save(path, **kwargs)


def con_bleed(img: Image.Image, pixeles: int = 0) -> Image.Image:
    """Sangrado de impresión: repite el color del borde hacia fuera.

    Evita el reborde blanco si la impresora no está perfectamente alineada.
    """
    if pixeles <= 0:
        return img
    from scipy import ndimage
    import numpy as np
    rgba = trim(img.convert("RGBA"))
    # lienzo ampliado para que el sangrado tenga sitio
    lienzo = Image.new("RGBA", (rgba.width + 2 * pixeles,
                                rgba.height + 2 * pixeles), (0, 0, 0, 0))
    lienzo.paste(rgba, (pixeles, pixeles))
    arr = np.asarray(lienzo).copy()
    mask = arr[..., 3] > 20
    if not mask.any():
        return rgba
    _d, (iy, ix) = ndimage.distance_transform_edt(~mask, return_indices=True)
    nuevo = arr[iy, ix].copy()
    yy, xx = np.mgrid[-pixeles:pixeles + 1, -pixeles:pixeles + 1]
    struct = (xx * xx + yy * yy) <= (pixeles * pixeles + pixeles)
    fuera = ndimage.binary_dilation(mask, structure=struct)
    nuevo[..., 3] = np.where(fuera, 255, 0)
    nuevo[mask] = arr[mask]
    return trim(Image.fromarray(nuevo, "RGBA"))


def simular_impresion(img: Image.Image, espacio: str = "srgb",
                      saturacion: float = 1.0, contraste: float = 1.0,
                      brillo: float = 1.0) -> Image.Image:
    """Simula cómo se verá al imprimir en otro espacio (CMYK/AdobeRGB).

    No toca el archivo: solo ajusta la VISTA PREVIA para que el cambio de
    espacio no mate los colores (sube saturación/contraste si hace falta).
    """
    from PIL import ImageEnhance
    out = img.convert("RGBA")
    if saturacion != 1.0:
        out = ImageEnhance.Color(out).enhance(max(0.0, saturacion))
    if contraste != 1.0:
        out = ImageEnhance.Contrast(out).enhance(max(0.0, contraste))
    if brillo != 1.0:
        out = ImageEnhance.Brightness(out).enhance(max(0.0, brillo))
    # el CMYK no reproduce los verdes/azules puros: se recorta un poco el canal
    if str(espacio).lower() in ("cmyk", "adobe-cmyk"):
        import numpy as np
        a = np.asarray(out).astype(np.float32)
        a[..., 2] *= 0.94          # el azul sufre más en CMYK
        a[..., 1] *= 0.97
        out = Image.fromarray(np.clip(a, 0, 255).astype("uint8"), "RGBA")
    return out


def _content_image(asset_img: Image.Image, p: Placement) -> Image.Image:
    """Imagen del asset rotada según la colocación (sin escalar todavía).

    El ángulo es la fuente de verdad (`p.angle`); los giros exactos de
    0/90/180/270 se hacen con transposiciones (sin pérdida) y el resto con
    rotación interpolada. No se combina con `rot90` para no girar dos veces.
    """
    img = asset_img
    ang = float(p.angle or 0.0) % 360.0
    if math.isclose(ang, 90.0):
        img = img.transpose(Image.Transpose.ROTATE_90)
    elif math.isclose(ang, 180.0):
        img = img.transpose(Image.Transpose.ROTATE_180)
    elif math.isclose(ang, 270.0):
        img = img.transpose(Image.Transpose.ROTATE_270)
    elif not math.isclose(ang, 0.0):
        img = img.rotate(ang, expand=True, resample=Image.Resampling.BICUBIC)
    return img


def render_page(area: CutArea, placements: list[Placement], images: dict[str, Image.Image],
                dpi: float, full_page: bool = False, color: str = "rgba") -> Image.Image:
    """Renderiza una página a PIL RGBA (fondo transparente).

    images: asset_id -> RGBA recortada. Con dpi igual al de origen y sin
    giro/mini no hay reescalado: los píxeles se copian 1:1.
    """
    if full_page:
        W = mm_to_px(area.page_w, dpi)
        H = mm_to_px(area.page_h, dpi)
        off_x = off_y = 0.0
        bx, by, _, _ = area.bbox
    else:
        bx, by, bw, bh = area.bbox
        W = mm_to_px(bw, dpi)
        H = mm_to_px(bh, dpi)
        off_x, off_y = bx, by

    canvas = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    px_per_mm = dpi / 25.4
    for p in placements:
        src = images.get(p.asset_id)
        if src is None:
            continue
        img = _content_image(src, p)
        tw = max(1, round(p.w * px_per_mm))
        th = max(1, round(p.h * px_per_mm))
        if (tw, th) != img.size:
            # Escala SIEMPRE uniforme: se ajusta a la caja sin deformar la
            # imagen (se mantiene el factor de forma exacto del original).
            k = min(tw / img.width, th / img.height)
            nw = max(1, round(img.width * k))
            nh = max(1, round(img.height * k))
            img = img.resize((nw, nh), Image.Resampling.LANCZOS)
        x = round(p.x * px_per_mm - off_x * px_per_mm)
        y = round(p.y * px_per_mm - off_y * px_per_mm)
        canvas.alpha_composite(img, (max(0, x), max(0, y)))
    if color == "rgb":
        white = Image.new("RGBA", canvas.size, (255, 255, 255, 255))
        white.alpha_composite(canvas)
        return white.convert("RGB")
    return canvas


def safe_name(name: str) -> str:
    """Nombre de carpeta seguro. Vacío -> "" (se usará solo la fecha)."""
    name = re.sub(r"[^\w\-.]+", "_", (name or "").strip())
    return name.strip("_")[:60]


def export_pages(area: CutArea, placements: list[Placement],
                 images: dict[str, Image.Image], out_dir: Path, name: str,
                 dpi: float, full_page: bool = False, color: str = "rgba",
                 perfil: str = "srgb", bleed_mm: float = 0.0) -> list[Path]:
    """Guarda las páginas en PNG máxima calidad (pHYs = dpi, sin guías).

    PNG es sin pérdidas: no hay cuantización ni recompresión con pérdida; se
    escribe a la resolución pedida (300 ppp por defecto), con alfa intacto y
    perfil sRGB.
    """
    out_dir.mkdir(parents=True, exist_ok=True)
    pages = sorted({p.page for p in placements})
    written: list[Path] = []
    for i in pages:
        img = render_page(area, [p for p in placements if p.page == i], images,
                          dpi, full_page, color)
        if bleed_mm > 0:
            img = con_bleed(img, int(round(bleed_mm / 25.4 * dpi)))
        fp = out_dir / f"pagina-{i + 1:02d}.png"
        _save_png(img, fp, dpi, perfil)
        written.append(fp)
    return written


def export_single(area: CutArea, placements: list[Placement],
                  images: dict[str, Image.Image], path: Path, dpi: float,
                  full_page: bool = False, color: str = "rgba",
                  perfil: str = "srgb", bleed_mm: float = 0.0) -> Path:
    """Guarda UNA página directamente en un PNG concreto (sin carpeta)."""
    img = render_page(area, placements, images, dpi, full_page, color)
    if bleed_mm > 0:
        img = con_bleed(img, int(round(bleed_mm / 25.4 * dpi)))
    path.parent.mkdir(parents=True, exist_ok=True)
    _save_png(img, path, dpi, perfil)
    return path


def export_layout(area: CutArea, placements: list[Placement], out_dir: Path,
                  dpi: float, settings: dict) -> Path:
    """JSON con la colocación (útil para reproducir el proyecto)."""
    import json
    fp = out_dir / "colocacion.json"
    data = {
        "app": "CryCat",
        "pagina_mm": [area.page_w, area.page_h],
        "area_recortable_mm": list(area.bbox),
        "dpi": dpi,
        "ajustes": {k: settings.get(k) for k in (
            "espacio_mm", "rotacion", "dpi_salida", "usar_minis")},
        "paginas": [],
    }
    pages = sorted({p.page for p in placements})
    for i in pages:
        data["paginas"].append([
            {"uid": p.uid, "asset": p.asset_id, "x_mm": round(p.x, 3),
             "y_mm": round(p.y, 3), "w_mm": round(p.w, 3),
             "h_mm": round(p.h, 3), "angle": p.angle, "mini": p.mini,
             "escala": round(p.scale, 4), "fijado": p.pinned}
            for p in placements if p.page == i])
    fp.write_text(json.dumps(data, ensure_ascii=False, indent=2), "utf-8")
    return fp


def con_marcas_cricut(img: Image.Image, area: CutArea,
                      dpi: float) -> Image.Image:
    """Superpone SOLO las marcas negras de Cricut (4 esquinas + flecha).

    Las marcas salen de la hoja oficial (recortadas en negro puro, con alfa) y
    se anclan a las esquinas del área recortable al tamaño real en mm.
    """
    px = dpi / 25.4
    bx, by, bw, bh = area.bbox
    esc = px / MARCAS_PPP
    # cada soporte se ancla a su esquina del área recortable
    esquinas = [
        ("esquina_flecha", False, False),   # superior izquierda (con flecha)
        ("esquina_sd", True, False),        # superior derecha
        ("esquina_ii", False, True),        # inferior izquierda
        ("esquina_id", True, True),         # inferior derecha
    ]
    base = img.convert("RGBA")
    for nombre, derecha, abajo in esquinas:
        try:
            marca = Image.open(MARCAS_DIR / f"{nombre}.png").convert("RGBA")
        except Exception:
            continue
        w = max(1, int(round(marca.width * esc)))
        h = max(1, int(round(marca.height * esc)))
        marca = marca.resize((w, h), Image.Resampling.LANCZOS)
        x = int(round((bx + (bw if derecha else 0.0)) * px)) - (w if derecha else 0)
        y = int(round((by + (bh if abajo else 0.0)) * px)) - (h if abajo else 0)
        base.alpha_composite(marca, (x, y))
    return base


def export_pdf(area: CutArea, placements: list[Placement],
               images: dict[str, Image.Image], dpi: float,
               full_page: bool = False, color: str = "rgba",
               marcas: bool = False, bleed_mm: float = 0.0) -> bytes:
    """PDF a tamaño real para imprimir (una página por hoja, sin márgenes).

    El PDF se genera con el tamaño físico exacto de la hoja (A4/A3/…) y la
    imagen ocupando toda la página, de modo que al imprimir sale a sangre,
    sin bordes añadidos por el visor.
    """
    pages = sorted({p.page for p in placements})
    imgs = []
    for i in pages:
        img = render_page(area, [p for p in placements if p.page == i], images,
                          dpi, True if marcas else full_page, color)
        if bleed_mm > 0:
            img = con_bleed(img, int(round(bleed_mm / 25.4 * dpi)))
        if marcas:
            img = con_marcas_cricut(img, area, dpi)
        if img.mode == "RGBA":
            bg = Image.new("RGBA", img.size, (255, 255, 255, 255))
            bg.alpha_composite(img)
            img = bg.convert("RGB")
        imgs.append(img)
    if not imgs:
        # hoja vacía con el tamaño de página correcto
        imgs = [Image.new("RGB", (max(1, int(area.page_w / 25.4 * dpi)),
                                  max(1, int(area.page_h / 25.4 * dpi))),
                          "white")]
    buf = io.BytesIO()
    imgs[0].save(buf, format="PDF", resolution=dpi,
                 save_all=True, append_images=imgs[1:])
    return buf.getvalue()
