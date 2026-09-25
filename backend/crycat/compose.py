"""Composición de páginas y exportación de máxima calidad."""

from __future__ import annotations

import io
import math
import re
from functools import lru_cache
from pathlib import Path

from PIL import Image

from .geometry import CutArea, mm_to_px
from .packer import Placement


@lru_cache(maxsize=1)
def _srgb_bytes() -> bytes | None:
    """Perfil sRGB para etiquetar los PNG/PDF exportados (calidad de color)."""
    try:
        from PIL import ImageCms
        return ImageCms.ImageCmsProfile(ImageCms.createProfile("sRGB")).tobytes()
    except Exception:  # pragma: no cover
        return None


def _save_png(img: Image.Image, path: Path, dpi: float) -> None:
    """PNG sin pérdidas a máxima calidad: sin cuantizar, con pHYs (ppp) y
    perfil sRGB embebido."""
    kwargs: dict = {"format": "PNG", "dpi": (dpi, dpi), "optimize": False}
    icc = _srgb_bytes()
    if icc:
        kwargs["icc_profile"] = icc
    img.save(path, **kwargs)


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
                 dpi: float, full_page: bool = False, color: str = "rgba"
                 ) -> list[Path]:
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
        fp = out_dir / f"pagina-{i + 1:02d}.png"
        _save_png(img, fp, dpi)
        written.append(fp)
    return written


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


def export_pdf(area: CutArea, placements: list[Placement],
               images: dict[str, Image.Image], dpi: float,
               full_page: bool = False, color: str = "rgba") -> bytes:
    """PDF a tamaño real para imprimir (una página por hoja, sin márgenes).

    El PDF se genera con el tamaño físico exacto de la hoja (A4/A3/…) y la
    imagen ocupando toda la página, de modo que al imprimir sale a sangre,
    sin bordes añadidos por el visor.
    """
    pages = sorted({p.page for p in placements})
    imgs = []
    for i in pages:
        img = render_page(area, [p for p in placements if p.page == i], images,
                          dpi, full_page, color)
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
