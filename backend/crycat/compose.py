"""Composición de páginas y exportación de máxima calidad."""

from __future__ import annotations

import io
import math
import re
from functools import lru_cache
from pathlib import Path

from PIL import Image

from .geometry import CutArea, marks_adaptadas, marks_rect_for, mm_to_px
from .imaging import trim
from .packer import Placement

MARCAS_DIR = Path(__file__).parent / "web" / "marcas"


def _marcas_dir() -> Path:
    """Carpeta de las marcas negras de Cricut.

    En el ejecutable/web vienen dentro del paquete (crycat/web/marcas); al
    correr desde el código fuente (tests, CI, modo dev) esa carpeta aún no
    existe: se usa entonces la copia del repositorio (frontend/public/marcas).
    """
    candidatas = [MARCAS_DIR,
                  Path(__file__).resolve().parents[2] / "frontend"
                  / "public" / "marcas"]
    for c in candidatas:
        try:
            if c.is_dir() and any(c.glob("*.png")):
                return c
        except Exception:
            continue
    return MARCAS_DIR


def marcas_mm() -> dict[str, tuple[float, float]]:
    """Tamaño REAL (mm) de cada marca de Cricut, según la hoja oficial."""
    salida: dict[str, tuple[float, float]] = {}
    for nombre in ("esquina_flecha", "esquina_sd", "esquina_ii", "esquina_id"):
        try:
            with Image.open(_marcas_dir() / f"{nombre}.png") as im:
                salida[nombre] = (im.width / MARCAS_PPP,
                                  im.height / MARCAS_PPP)
        except Exception:
            continue
    return salida
MARCAS_PPP = 11.811  # px/mm de las marcas (300 ppp)


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


def _content_trimmed(asset_img: Image.Image, p: Placement,
                     px: float = 0.0, objetivo: bool = True) -> Image.Image:
    """Contenido REAL de la pieza: rotada y recortada a su alfa.

    Al girar con `expand=True` el marco crece con esquinas transparentes; si
    se escala el marco (y no el contenido) la pieza queda más pequeña que su
    caja y desplazada, y el contorno deja de cuadrar con el dibujo. Por eso
    render y contornos parten SIEMPRE de este contenido recortado.

    `px`: píxeles por mm del lienzo. Con `objetivo=True` y el tamaño pedido
    (`w0`/`h0`) la imagen se escala ANTES de girar a ese tamaño — el mismo
    que usa la máscara del optimizador —, así la pieza mide exacto lo pedido
    aunque la caja del giro libre sea conservadora.
    """
    img = asset_img
    if objetivo and px > 0 and p.w0 > 0 and p.h0 > 0:
        tw = max(1, round(p.w0 * px))
        th = max(1, round(p.h0 * px))
        if (tw, th) != img.size:
            k = min(tw / img.width, th / img.height)
            nw = max(1, round(img.width * k))
            nh = max(1, round(img.height * k))
            if (nw, nh) != img.size:
                img = img.resize((nw, nh), Image.Resampling.LANCZOS)
    return trim(_content_image(img, p))


def _fit_box(img: Image.Image, tw: int, th: int) -> tuple[Image.Image, float]:
    """Encaja el contenido en la caja SIN deformar y SIN agrandarlo.

    La caja del optimizador es conservadora en los giros libres (el bbox del
    rectángulo girado, mayor que el contenido real). Si se escalara el
    contenido hacia arriba para "llenar" la caja, la pieza se imprimiría más
    grande de lo pedido y podría pisar a las vecinas (el optimizador reservó
    la caja del tamaño REAL). Por eso solo se REDUCE (minis) o se deja igual.
    """
    k = min(1.0, tw / img.width, th / img.height)
    if k >= 1.0 - 1e-9:
        return img, 1.0
    nw = max(1, round(img.width * k))
    nh = max(1, round(img.height * k))
    return img.resize((nw, nh), Image.Resampling.LANCZOS), k


def cajas_delimitar(area: CutArea, lado_mm: float = 1.0
                    ) -> list[tuple[float, float]]:
    """Posiciones de los dos cuadrados de referencia (esquina sup. izq. y der.).

    Uno SIEMPRE pegado al límite más izquierdo y otro al más derecho, en la
    parte de arriba, independientemente de márgenes y configuración.
    """
    bx, by, bw, bh = area.bbox
    # a la altura del centro (donde el área SÍ llega a los extremos: las
    # esquinas del polígono están escalonadas) y pegados a los límites
    # (0,1 mm hacia dentro para que el redondeo a píxeles no se salga)
    cy = by + bh / 2.0 - lado_mm / 2.0
    return [(bx + 0.1, cy), (bx + bw - lado_mm - 0.1, cy)]


def marcas_delimitar(canvas: Image.Image, area: CutArea, dpi: float,
                     lado_mm: float = 1.0,
                     off_x: float = 0.0, off_y: float = 0.0,
                     margen_mm: float = 0.0) -> Image.Image:
    """Dos cuadrados BLANCOS de `lado_mm` en las esquinas de los LÍMITES.

    Sirven de referencia para que la colocación quede EXACTA siempre en
    Cricut Design Space (una arriba-izquierda y otra abajo-derecha). Van en
    los extremos del área YA RECORTADA por el margen (los límites marcados
    para las piezas), no en las marcas negras de la máquina. No forman parte
    de la optimización: solo se pintan al final sobre la página.
    """
    px = dpi / 25.4
    # posiciones fijas: pegados a los límites izquierdo y derecho (los mismos
    # que reserva el optimizador como elementos)
    posiciones = cajas_delimitar(area, lado_mm)
    lado = max(1, int(round(lado_mm * px)))
    base = canvas.convert("RGBA")
    blanco = Image.new("RGBA", (lado, lado), (255, 255, 255, 255))
    for (bx, by) in posiciones:
        x = int(round((bx - off_x) * px))
        y = int(round((by - off_y) * px))
        base.alpha_composite(blanco, (max(0, x), max(0, y)))
    return base


def _erosionar_alfa(img: Image.Image, radio_px: float) -> Image.Image:
    """Encoge el alfa `radio_px` píxeles (con medios píxeles).

    Se usa la distancia al borde: el recorte es EQUIDISTANTE en todas las
    direcciones (entre dos círculos iguales la separación queda una recta).
    Cada pieza pierde la MITAD de la separación pedida, así entre dos piezas
    queda exactamente `separacion_px` píxeles.
    """
    if radio_px <= 0:
        return img
    import numpy as np
    from scipy import ndimage
    arr = np.asarray(img.convert("RGBA")).copy()
    alfa = arr[..., 3].astype(np.float32) / 255.0
    dentro = alfa > 0.35
    if not dentro.any():
        return img
    dist = ndimage.distance_transform_edt(dentro)
    nuevo = np.clip((dist - radio_px + 0.5) * 255.0, 0, 255)
    arr[..., 3] = np.minimum(arr[..., 3].astype(np.float32),
                             nuevo).astype(np.uint8)
    return Image.fromarray(arr, "RGBA")


def render_page(area: CutArea, placements: list[Placement], images: dict[str, Image.Image],
                dpi: float, full_page: bool = False, color: str = "rgba",
                delimitar_mm: float = 0.0,
                delimitar_margen_mm: float = 0.0,
                separacion_px: int = 0,
                marcas_cricut: bool = False,
                ratas: bool = False) -> Image.Image:
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
    tinta = None      # caja de la TINTA de las piezas (px del lienzo)
    for p in placements:
        if getattr(p, "rata", False) and not ratas:
            continue     # las ratas solo salen en la vista y en la impresión
        src = images.get(p.asset_id)
        # minis y ratas pueden llevar una imagen propia por escala (borde
        # «igual» en mm o «sin borde»): se busca la variante (asset, escala)
        if p.mini or getattr(p, "rata", False):
            alt = images.get((p.asset_id, round(float(p.scale or 1.0), 3)))
            if alt is not None:
                src = alt
        if src is None:
            continue
        img = _content_trimmed(src, p, px_per_mm)
        tw = max(1, round(p.w * px_per_mm))
        th = max(1, round(p.h * px_per_mm))
        # Escala SIEMPRE uniforme: se ajusta a la caja sin deformar la
        # imagen (la proporción del original se conserva). El contenido se
        # ancla a la esquina de su caja (igual que los contornos).
        img, _ = _fit_box(img, tw, th)
        # separación artificial: aunque las piezas se solapen un poco, siempre
        # queda una línea entre ellas para que la Cricut las corte separadas
        if separacion_px > 0:
            # cada pieza pierde la MITAD: entre dos queda la separación pedida
            img = _erosionar_alfa(img, float(separacion_px) / 2.0)
        x = round(p.x * px_per_mm - off_x * px_per_mm)
        y = round(p.y * px_per_mm - off_y * px_per_mm)
        canvas.alpha_composite(img, (max(0, x), max(0, y)))
        # caja de la TINTA de las PIEZAS (sin ratas ni cuadrados guía): las
        # marcas abrazan el contenido sin taparlo
        if marcas_cricut and not getattr(p, "rata", False) \
                and not str(p.asset_id).startswith("__delim"):
            try:
                bb = img.convert("RGBA").getchannel("A").getbbox()
            except Exception:
                bb = None
            if bb:
                rect = (max(0, x) + bb[0], max(0, y) + bb[1],
                        max(0, x) + bb[2], max(0, y) + bb[3])
                tinta = rect if tinta is None else (
                    min(tinta[0], rect[0]), min(tinta[1], rect[1]),
                    max(tinta[2], rect[2]), max(tinta[3], rect[3]))
    if delimitar_mm > 0:
        canvas = marcas_delimitar(canvas, area, dpi, float(delimitar_mm),
                                  off_x, off_y, float(delimitar_margen_mm))
    if marcas_cricut:
        # las marcas abrazan el contenido (hueco garantizado) sin meterse más
        # que las posiciones oficiales; sin contenido, las oficiales
        caja = None
        if tinta is not None:
            caja = tuple(v / px_per_mm for v in tinta)   # mm del lienzo
        canvas = con_marcas_cricut(canvas, area, dpi, caja, off_x, off_y)
    if color == "rgb":
        white = Image.new("RGBA", canvas.size, (255, 255, 255, 255))
        white.alpha_composite(canvas)
        return white.convert("RGB")
    return canvas


def contornos_bordes(canvas: Image.Image, placements: list[Placement],
                     con_borde: dict[str, Image.Image],
                     sin_borde: dict[str, Image.Image],
                     area: CutArea, dpi: float,
                     color_final: tuple[int, int, int] = (226, 18, 94),
                     color_sin: tuple[int, int, int] = (0, 148, 211),
                     grosor_px: int = 0,
                     fase: int = 0,
                     full_page: bool = False,
                     modo: str = "final",
                     ) -> Image.Image:
    """Vista de comprobación: contorno REAL de cada pieza.

    En `color_final` va la silueta que de verdad se corta (con el borde y
    todas las modificaciones aplicadas) y en `color_sin` la del dibujo sin
    borde. Sirve para ver de un vistazo qué se corta y qué se solapa.
    No se usa nunca al exportar: es solo para la vista previa.
    """
    import numpy as np
    from scipy import ndimage

    if modo == "ninguno":
        return canvas
    px = dpi / 25.4
    # trazo fino (~0,4 mm): antes eran 8 px fijos y a 300 ppp quedaba grueso
    if grosor_px <= 0:
        grosor_px = max(2, int(round(0.4 * px)))
    # OJO con el sistema de coordenadas del lienzo:
    #  · lienzo "recortable" → el origen es el bbox del área (se resta)
    #  · lienzo "página"     → las coordenadas son ABSOLUTAS de la página
    #    (restar el bbox desplazaba los contornos por el margen del límite,
    #     justo el fallo de X/Y que se veía en la hoja)
    bx, by = (0.0, 0.0) if full_page else (area.bbox[0], area.bbox[1])
    base = canvas.convert("RGBA")
    for p in placements:
        fin = con_borde.get(p.asset_id)
        orig = sin_borde.get(p.asset_id)
        tw = max(1, round(p.w * px))
        th = max(1, round(p.h * px))
        x = int(round(p.x * px - bx * px))
        y = int(round(p.y * px - by * px))

        # la silueta final (con borde) manda: su contenido recortado se ancla
        # a la caja, igual que en el render
        fin_img = None
        k = 1.0
        if fin is not None and modo in ("final", "ambos"):
            try:
                fin_img, k = _fit_box(
                    _content_trimmed(fin, p, px), tw, th)
            except Exception:
                fin_img = None
        if fin_img is not None:
            base = _dibujar_contorno(base, fin_img, color_final, x, y,
                                     fase, grosor_px, guiones=True)

        if orig is not None and modo in ("orig", "ambos"):
            try:
                o_img = _content_trimmed(orig, p, px, objetivo=False)
            except Exception:
                continue
            if fin_img is not None:
                # el dibujo sin borde va CENTRADO dentro de la pieza final
                # (el borde crece por igual a los cuatro lados) y con el
                # MISMO factor de escala, para que el trazo sea uniforme
                ow = max(1, round(o_img.width * k))
                oh = max(1, round(o_img.height * k))
                o_img = o_img.resize((ow, oh), Image.Resampling.LANCZOS)
                ox_ = x + (fin_img.width - ow) // 2
                oy_ = y + (fin_img.height - oh) // 2
            else:
                o_img, _ = _fit_box(o_img, tw, th)
                ox_, oy_ = x, y
            base = _dibujar_contorno(base, o_img, color_sin, ox_, oy_,
                                     fase, grosor_px, guiones=False)
    return base


def _dibujar_contorno(base: Image.Image, img: Image.Image,
                      color: tuple[int, int, int], x: int, y: int,
                      fase: int, grosor_px: int,
                      guiones: bool = True) -> Image.Image:
    """Dibuja el contorno punteado del contenido `img` en (x, y)."""
    import numpy as np
    from scipy import ndimage

    m = np.asarray(img.convert("RGBA").getchannel("A")) > 1
    if not m.any():
        return base
    cont = m & ~ndimage.binary_erosion(m, iterations=1)
    if not cont.any():
        return base
    # trazo GRUESO y PUNTEADO: la silueta final en guiones y la del
    # dibujo sin borde en puntos complementarios (se alternan)
    if grosor_px > 1:
        cont = ndimage.binary_dilation(cont, iterations=grosor_px - 1)
    yy, xx = np.mgrid[0:m.shape[0], 0:m.shape[1]]
    # periodo 12 (el mismo de las cartas): los fotogramas avanzan de 3
    # en 3 y los puntos "caminan" por el contorno (hormigas marchando)
    desfase = (xx + yy + fase) % 12
    if guiones:
        cont = cont & (desfase < 8)       # guiones
    else:
        cont = cont & (desfase >= 8)      # puntos (la otra mitad)
    if not cont.any():
        return base
    parche = np.zeros((m.shape[0], m.shape[1], 4), dtype=np.uint8)
    parche[cont] = (color[0], color[1], color[2], 255)
    base.alpha_composite(Image.fromarray(parche, "RGBA"), (x, y))
    return base


def safe_name(name: str) -> str:
    """Nombre de carpeta seguro. Vacío -> "" (se usará solo la fecha)."""
    name = re.sub(r"[^\w\-.]+", "_", (name or "").strip())
    return name.strip("_")[:60]


def _recorte_contenido(img: Image.Image, area: CutArea, placements: list,
                       dpi: float, full_page: bool,
                       pad_mm: float = 0.5) -> Image.Image:
    """Recorta la página a la zona que OCUPA EL CONTENIDO (+ un pelín).

    Al guardar ya no se exporta la hoja entera: solo lo que tiene elementos.
    La impresión (PDF) sigue sacando la página completa.
    """
    # las ratas (extra de impresión, en los márgenes) no cuentan: el recorte
    # es de las piezas de verdad
    reales = [p for p in placements if not getattr(p, "rata", False)]
    if not reales:
        return img
    px = dpi / 25.4
    x0 = min(p.x for p in reales)
    y0 = min(p.y for p in reales)
    x1 = max(p.x + p.w for p in reales)
    y1 = max(p.y + p.h for p in reales)
    if not full_page:
        bx, by = area.bbox[0], area.bbox[1]
        x0 -= bx
        x1 -= bx
        y0 -= by
        y1 -= by
    x0 = max(0.0, x0 - pad_mm)
    y0 = max(0.0, y0 - pad_mm)
    x1 = min(img.width / px, x1 + pad_mm)
    y1 = min(img.height / px, y1 + pad_mm)
    caja = (int(x0 * px), int(y0 * px),
            max(int(x0 * px) + 1, int(x1 * px)),
            max(int(y0 * px) + 1, int(y1 * px)))
    return img.crop(caja)


def _resample_export(img: Image.Image, dpi_render: float,
                     dpi_export: float | None) -> Image.Image:
    """Reescala al ppp de SALIDA (p. ej. 144 para Cricut Design Space).

    Conserva el tamaño físico en mm: solo cambia la densidad de píxeles, así
    Design Space (que interpreta las imágenes a 144 ppp) importa el archivo
    al tamaño exacto sin pedir redimensionar.
    """
    if not dpi_export or dpi_export <= 0 or abs(dpi_export - dpi_render) < 0.5:
        return img
    esc = float(dpi_export) / float(dpi_render)
    return img.resize(
        (max(1, int(round(img.width * esc))),
         max(1, int(round(img.height * esc)))),
        Image.Resampling.LANCZOS)


def export_pages(area: CutArea, placements: list[Placement],
                 images: dict[str, Image.Image], out_dir: Path, name: str,
                 dpi: float, full_page: bool = False, color: str = "rgba",
                 perfil: str = "srgb", bleed_mm: float = 0.0,
                 delimitar_mm: float = 0.0,
                 delimitar_margen_mm: float = 0.0,
                 separacion_px: int = 0,
                 export_dpi: float | None = None) -> list[Path]:
    """Guarda las páginas en PNG máxima calidad (pHYs = dpi, sin guías).

    PNG es sin pérdidas: no hay cuantización ni recompresión con pérdida; se
    escribe a la resolución pedida (300 ppp por defecto), con alfa intacto y
    perfil sRGB. Con `export_dpi` (p. ej. 144 para Design Space) se reescala
    conservando el tamaño físico en mm.
    """
    out_dir.mkdir(parents=True, exist_ok=True)
    pages = sorted({p.page for p in placements})
    written: list[Path] = []
    for i in pages:
        pls_pag = [p for p in placements if p.page == i]
        img = render_page(area, pls_pag, images,
                          dpi, full_page, color, delimitar_mm,
                          delimitar_margen_mm, separacion_px)
        # al guardar se recorta a la zona con elementos (la impresión no).
        # Para Design Space el recorte va SIN margen extra: el PNG debe
        # caber EXACTO en el máximo rectangular (167.31 x 254.10 en A4).
        img = _recorte_contenido(img, area, pls_pag, dpi, full_page,
                                 0.0 if export_dpi else 0.5)
        if bleed_mm > 0:
            img = con_bleed(img, int(round(bleed_mm / 25.4 * dpi)))
        img = _resample_export(img, dpi, export_dpi)
        fp = out_dir / f"pagina-{i + 1:02d}.png"
        _save_png(img, fp, export_dpi or dpi, perfil)
        written.append(fp)
    return written


def export_single(area: CutArea, placements: list[Placement],
                  images: dict[str, Image.Image], path: Path, dpi: float,
                  full_page: bool = False, color: str = "rgba",
                  perfil: str = "srgb", bleed_mm: float = 0.0,
                  delimitar_mm: float = 0.0,
                  delimitar_margen_mm: float = 0.0,
                  separacion_px: int = 0,
                  export_dpi: float | None = None) -> Path:
    """Guarda UNA página directamente en un PNG concreto (sin carpeta)."""
    img = render_page(area, placements, images, dpi, full_page, color,
                      delimitar_mm, delimitar_margen_mm, separacion_px)
    # al guardar se recorta a la zona con elementos (la impresión no).
    # Para Design Space el recorte va SIN margen extra (caber EXACTO).
    img = _recorte_contenido(img, area, placements, dpi, full_page,
                             0.0 if export_dpi else 0.5)
    if bleed_mm > 0:
        img = con_bleed(img, int(round(bleed_mm / 25.4 * dpi)))
    img = _resample_export(img, dpi, export_dpi)
    path.parent.mkdir(parents=True, exist_ok=True)
    _save_png(img, path, export_dpi or dpi, perfil)
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


def caja_tinta_piezas(placements: list[Placement],
                       images: dict[str, Image.Image],
                       dpi: float,
                       separacion_px: int = 0
                       ) -> tuple[float, float, float, float] | None:
    """Caja (mm ABSOLUTOS de la página) de la TINTA real de las piezas.

    Es la misma caja que usan las marcas negras: píxel exterior de lo
    colocado de verdad (giros libres recortados a su alfa y con la misma
    separación artificial que al renderizar), SIN los cuadrados guía y SIN
    las ratas (van fuera). Devuelve None si no hay tinta.
    """
    px = dpi / 25.4
    caja = None
    for p in placements:
        if getattr(p, "rata", False):
            continue
        if str(p.asset_id).startswith("__delim"):
            continue
        src = images.get(p.asset_id)
        if src is None:
            continue
        img = _content_trimmed(src, p, px)
        tw = max(1, round(p.w * px))
        th = max(1, round(p.h * px))
        img, _ = _fit_box(img, tw, th)
        if separacion_px > 0:
            img = _erosionar_alfa(img, float(separacion_px) / 2.0)
        try:
            bb = img.convert("RGBA").getchannel("A").getbbox()
        except Exception:
            bb = None
        if not bb:
            continue
        x = round(p.x * px)
        y = round(p.y * px)
        rect = (x + bb[0], y + bb[1], x + bb[2], y + bb[3])
        caja = rect if caja is None else (
            min(caja[0], rect[0]), min(caja[1], rect[1]),
            max(caja[2], rect[2]), max(caja[3], rect[3]))
    if caja is None:
        return None
    return tuple(round(v / px, 3) for v in caja)


def con_marcas_cricut(img: Image.Image, area: CutArea,
                      dpi: float, caja: tuple | None = None,
                      off_x: float = 0.0, off_y: float = 0.0) -> Image.Image:
    """Superpone SOLO las marcas negras de Cricut (4 esquinas + flecha).

    La TINTA de las marcas abraza el contenido (`caja`, en mm absolutos de la
    página) dejando un hueco: la L de cada esquina queda pegada a su borde
    (izquierda/derecha/arriba/abajo), sin taparlo nunca. Los soportes son
    transparentes y pueden salirse de la hoja; la tinta no. Sin `caja`, las
    posiciones oficiales.
    """
    px = dpi / 25.4
    # `caja` viene en mm del LIENZO (ya restado su origen): las oficiales se
    # pasan también a coordenadas del lienzo para que todo cuadre
    oficial = marks_rect_for(area)
    oficial = (oficial[0] - off_x, oficial[1] - off_y,
               oficial[2] - off_x, oficial[3] - off_y)
    bx, by, bx1, by1 = marks_adaptadas(caja, oficial)
    bw, bh = max(0.0, bx1 - bx), max(0.0, by1 - by)
    esc = px / MARCAS_PPP
    # cada soporte se ancla a su esquina EXTERIOR de la marca
    esquinas = [
        ("esquina_flecha", False, False),   # superior izquierda (con flecha)
        ("esquina_sd", True, False),        # superior derecha
        ("esquina_ii", False, True),        # inferior izquierda
        ("esquina_id", True, True),         # inferior derecha
    ]
    base = img.convert("RGBA")
    for nombre, derecha, abajo in esquinas:
        try:
            marca = Image.open(_marcas_dir() / f"{nombre}.png").convert("RGBA")
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
               marcas: bool = False, bleed_mm: float = 0.0,
               delimitar_mm: float = 0.0,
               delimitar_margen_mm: float = 0.0,
               separacion_px: int = 0) -> bytes:
    """PDF a tamaño real para imprimir (una página por hoja, sin márgenes).

    El PDF se genera con el tamaño físico exacto de la hoja (A4/A3/…) y la
    imagen ocupando toda la página, de modo que al imprimir sale a sangre,
    sin bordes añadidos por el visor.
    """
    pages = sorted({p.page for p in placements})
    imgs = []
    for i in pages:
        # el PDF es la IMPRESIÓN: aquí las ratas SÍ salen (van en los márgenes
        # de la página completa); en los PNG normales no. Las marcas negras se
        # anclan a la TINTA real de las piezas (las dibuja render_page)
        img = render_page(area, [p for p in placements if p.page == i], images,
                          dpi, True if marcas else full_page, color,
                          delimitar_mm, delimitar_margen_mm, separacion_px,
                          marcas, True)
        if bleed_mm > 0:
            img = con_bleed(img, int(round(bleed_mm / 25.4 * dpi)))
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
