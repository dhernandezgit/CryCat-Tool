"""Importación y procesado de imágenes para CryCat.

Formatos: PNG, JPG/JPEG, WEBP, BMP, TIFF, GIF (1er fotograma) vía Pillow;
PSD vía psd-tools; AI/PDF (AI compatible con PDF) vía pypdfium2.
Todo se normaliza a RGBA sin recalcular píxeles (recorte por canal alfa,
sin reescalado) para preservar colores y resolución al máximo.
"""

from __future__ import annotations

import io
from pathlib import Path

import numpy as np
from PIL import Image

from .i18n import tr

Image.MAX_IMAGE_PIXELS = None  # las imágenes pueden ser grandes; confianza local

RASTER_EXTS = {".png", ".jpg", ".jpeg", ".webp", ".bmp", ".tif", ".tiff", ".gif"}


class ImportInfo:
    __slots__ = ("w", "h", "trimmed_w", "trimmed_h", "bbox", "dpi_src", "warnings", "color_mode")

    def __init__(self, w: int, h: int, trimmed_w: int, trimmed_h: int,
                 bbox: tuple[int, int, int, int], dpi_src: float,
                 warnings: list[str], color_mode: str):
        self.w = w
        self.h = h
        self.trimmed_w = trimmed_w
        self.trimmed_h = trimmed_h
        self.bbox = bbox
        self.dpi_src = dpi_src
        self.warnings = warnings
        self.color_mode = color_mode


def load_image(data: bytes, filename: str, render_dpi: float = 300.0) -> tuple[Image.Image, ImportInfo]:
    """Carga cualquier formato soportado y devuelve (RGBA recortada, info).

    - Raster: se abre con Pillow y se convierte a RGBA (sin reescalar).
    - PSD: composición aplanada vía psd-tools.
    - AI/PDF: rasterizado con pypdfium2 a render_dpi.
    - SVG: debe rasterizarse en el navegador (frontend); aquí se avisa.
    """
    ext = Path(filename).suffix.lower()
    warnings: list[str] = []
    dpi_src = 300.0

    if ext == ".svg":
        raise ValueError(tr("SVG: rasteriza en el navegador o exporta a PNG"))
    if ext == ".psd":
        img, mode = _load_psd(data)
    elif ext in {".ai", ".pdf"}:
        img, mode = _load_pdf(data, render_dpi)
        warnings.append(tr("AI/PDF rasterizado a {dpi} ppp", dpi=f"{render_dpi:.0f}"))
    else:
        img, mode = _load_raster(data, filename)

    return _analyze(img, dpi_src, warnings, mode)


def _load_raster(data: bytes, filename: str) -> tuple[Image.Image, str]:
    try:
        img = Image.open(io.BytesIO(data))
        img.load()
    except Exception as e:  # pragma: no cover
        raise ValueError(tr("No se pudo abrir {filename}: {e}", filename=filename, e=e)) from e
    mode = img.mode
    if getattr(img, "is_animated", False):
        img.seek(0)  # GIF animado: primer fotograma
    return img, mode


def _load_psd(data: bytes) -> tuple[Image.Image, str]:
    try:
        from psd_tools import PSDImage
    except ImportError as e:  # pragma: no cover
        raise ValueError(tr("Soporte PSD no disponible")) from e
    try:
        psd = PSDImage.open(io.BytesIO(data))
        comp = psd.composite()
        if comp is None:
            raise ValueError(tr("PSD sin composición"))
        comp.load()
        return comp, "psd"
    except ValueError:
        raise
    except Exception as e:
        raise ValueError(tr("PSD no válido: {e}", e=e)) from e


def _load_pdf(data: bytes, dpi: float) -> tuple[Image.Image, str]:
    try:
        import pypdfium2 as pdfium
    except ImportError as e:  # pragma: no cover
        raise ValueError(tr("Soporte AI/PDF no disponible")) from e
    try:
        pdf = pdfium.PdfDocument(io.BytesIO(data))
        page = pdf[0]
        scale = dpi / 72.0
        bitmap = page.render(scale=scale)
        img = bitmap.to_pil()
        page.close()
        pdf.close()
        return img, "pdf"
    except ValueError:
        raise
    except Exception as e:
        raise ValueError(tr("AI/PDF no válido: {e}", e=e)) from e


def _to_srgb(rgba: Image.Image, icc_bytes: bytes | None) -> Image.Image:
    """Convierte a sRGB si el original trae perfil ICC (conserva el color y el
    alfa). Sin perfil se asume sRGB (el denominador común al exportar)."""
    if not icc_bytes:
        return rgba
    try:
        from PIL import ImageCms
        src = ImageCms.ImageCmsProfile(io.BytesIO(icc_bytes))
        dst = ImageCms.createProfile("sRGB")
        r, g, b, a = rgba.split()
        rgb = Image.merge("RGB", (r, g, b))
        rgb = ImageCms.profileToProfile(rgb, src, dst, renderingIntent=0)
        r2, g2, b2 = rgb.split()
        return Image.merge("RGBA", (r2, g2, b2, a))
    except Exception:
        return rgba  # ante la duda, no tocar los píxeles


def _analyze(img: Image.Image, dpi_src: float, warnings: list[str],
             mode: str) -> tuple[Image.Image, ImportInfo]:
    icc = None
    try:
        icc = img.info.get("icc_profile")
    except Exception:
        icc = None
    rgba = img.convert("RGBA")
    # calidad de color: todo se normaliza a sRGB para no mezclar espacios
    rgba = _to_srgb(rgba, icc)
    w, h = rgba.size
    # DPI de origen desde metadatos
    try:
        info_dpi = rgba.info.get("dpi", None)
        if info_dpi and info_dpi[0] and 10 < float(info_dpi[0]) <= 2400:
            dpi_src = float(info_dpi[0])
    except Exception:
        pass
    alpha = rgba.getchannel("A")
    bbox = alpha.getbbox() or (0, 0, w, h)
    trimmed = rgba.crop(bbox)
    return trimmed, ImportInfo(w, h, trimmed.size[0], trimmed.size[1], bbox,
                               dpi_src, warnings, mode)


def trim(img: Image.Image) -> Image.Image:
    """Recorta al bbox del canal alfa (sin reescalar píxeles)."""
    rgba = img.convert("RGBA")
    bbox = rgba.getchannel("A").getbbox() or (0, 0, img.size[0], img.size[1])
    return rgba.crop(bbox)


def thumbnail(img: Image.Image, max_side: int = 320) -> Image.Image:
    rgba = img.convert("RGBA")
    rgba.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    return rgba


def png_bytes(img: Image.Image, dpi: float | None = None) -> bytes:
    """PNG sin pérdidas; escribe pHYs si se da dpi."""
    buf = io.BytesIO()
    save_kwargs: dict = {"format": "PNG", "optimize": False}
    if dpi:
        save_kwargs["dpi"] = (dpi, dpi)
    img.save(buf, **save_kwargs)
    return buf.getvalue()


# ---------------------------------------------------------------- fondo ----

def detectar_blobs(img: Image.Image, min_area_px: int = 8) -> list[dict]:
    """Detecta los trozos (blobs) del canal alfa desconectados del principal.

    Devuelve una lista ordenada por área (mayor primero); el primero es el
    contorno principal. Cada blob: {id, area_px, bbox, principal}.
    """
    from scipy import ndimage

    rgba = img.convert("RGBA")
    alpha = np.asarray(rgba.getchannel("A"))
    mask = alpha > 20
    if not mask.any():
        return []
    etiquetas, n = ndimage.label(mask)
    if n <= 1:
        return []
    areas = ndimage.sum(mask, etiquetas, index=range(1, n + 1))
    orden = sorted(range(1, n + 1), key=lambda i: -areas[i - 1])
    out: list[dict] = []
    for idx, lbl in enumerate(orden):
        if areas[lbl - 1] < min_area_px:
            continue
        ys, xs = np.where(etiquetas == lbl)
        out.append({
            "id": int(lbl),
            "area_px": int(areas[lbl - 1]),
            "bbox": [int(xs.min()), int(ys.min()), int(xs.max()) + 1,
                     int(ys.max()) + 1],
            "principal": idx == 0,
        })
    return out


def quitar_blobs(img: Image.Image, quitar: list[int],
                 min_area_px: int = 8) -> Image.Image:
    """Elimina del canal alfa las componentes indicadas (por id de blob).

    El contorno principal nunca se elimina. Trabaja sobre una copia; no toca
    el archivo original.
    """
    from scipy import ndimage

    rgba = img.convert("RGBA")
    arr = np.asarray(rgba).copy()
    alpha = arr[..., 3]
    mask = alpha > 20
    etiquetas, n = ndimage.label(mask)
    if n == 0:
        return rgba
    areas = ndimage.sum(mask, etiquetas, index=range(1, n + 1))
    principal = 1 + int(np.argmax(areas))
    quitar_set = {int(x) for x in quitar if int(x) != principal}
    for lbl in quitar_set:
        alpha[etiquetas == lbl] = 0
    out = Image.fromarray(arr, "RGBA")
    return trim(out)


def remove_background(img: Image.Image, tolerance: float = 26.0,
                      feather_px: float = 0.8) -> Image.Image:
    """Elimina el fondo de forma inteligente.

    Detecta el color de fondo muestreando el borde de la imagen y propaga
    (reconstrucción por dilatación, scipy.ndimage.binary_propagation) desde
    los píxeles del borde que se parecen a él. Así el interior de la
    pegatina se respeta aunque tenga colores iguales al fondo (un hueco solo
    se vacía si conecta con el borde). Después suaviza (feather) la banda del
    borde del alfa para evitar dientes de sierra.
    """
    from scipy import ndimage

    rgba = img.convert("RGBA")
    arr = np.asarray(rgba)
    h, w = arr.shape[:2]
    rgb = arr[..., :3].astype(np.int16)

    # Color de fondo: mediana del anillo de borde (2 px)
    border = np.zeros((h, w), dtype=bool)
    border[:2, :] = border[-2:, :] = True
    border[:, :2] = border[:, -2:] = True
    br = arr[..., :3][border].astype(np.float32)
    bg = np.median(br, axis=0) if len(br) else np.array([255, 255, 255])

    dist = np.sqrt(((rgb - bg) ** 2).sum(axis=2))
    similar = dist <= tolerance * 2.0  # umbral por canal

    seed = similar & border
    if not seed.any():
        return rgba  # borde nada parecido a un color de fondo plano
    background = ndimage.binary_propagation(seed, mask=similar)

    alpha = arr[..., 3].astype(np.float32)
    alpha[background] = 0.0

    # feather solo en la banda entre fondo nuevo y resto
    band = ndimage.binary_dilation(background) & ~background
    if feather_px > 0 and band.any():
        blurred = ndimage.gaussian_filter(alpha, sigma=feather_px)
        alpha[band] = blurred[band]

    out = arr.copy()
    out[..., 3] = np.clip(alpha, 0, 255).astype(np.uint8)
    return trim(Image.fromarray(out, "RGBA"))


def detect_anomalous_lines(img: Image.Image, min_span: float = 0.8,
                           contrast: float = 60.0) -> list[str]:
    """Comprueba líneas anómalas: filas o columnas de 1 px claramente
    distintas de sus vecinas y que atraviesan casi toda la imagen
    (artefactos típicos de capturas o impresiones escaneadas).
    Devuelve lista de avisos (vacía si todo bien)."""
    warnings: list[str] = []
    rgba = img.convert("RGBA")
    arr = np.asarray(rgba).astype(np.float32)
    lum = arr[..., :3].mean(axis=2) * (arr[..., 3] / 255.0)
    h, w = lum.shape
    if h < 8 or w < 8:
        return warnings
    row_diff = np.abs(np.diff(lum, axis=0)).mean(axis=1)  # entre fila i y i+1
    col_diff = np.abs(np.diff(lum, axis=1)).mean(axis=0)
    for i in np.where(row_diff > contrast)[0]:
        if 0 < i < h - 2:
            span = (np.abs(lum[i + 1] - lum[i]).mean() > contrast * 0.5)
            if span:
                warnings.append(tr("Línea anómala horizontal en fila {i}", i=i))
    for j in np.where(col_diff > contrast)[0]:
        if 0 < j < w - 2:
            span = (np.abs(lum[:, j + 1] - lum[:, j]).mean() > contrast * 0.5)
            if span:
                warnings.append(tr("Línea anómala vertical en columna {j}", j=j))
    return warnings


# ---------------------------------------------------------------- offset ----

def aplicar_offset(img: Image.Image, radio_px: float,
                   modo: str = "extender",
                   color: tuple[int, int, int] = (255, 255, 255)
                   ) -> Image.Image:
    """Añade un borde (offset) al recorte de la silueta.

    Modos:
      * 'extender': el borde continúa los colores del contorno de la imagen
        (se propaga el color más cercano del borde hacia fuera).
      * 'blanco'  : borde blanco.
      * 'color'   : borde de un color concreto.

    `radio_px` es el grosor del borde en píxeles de ESTA imagen.
    Devuelve una copia nueva (nunca modifica la original).
    """
    from scipy import ndimage

    r = int(round(radio_px))
    if r <= 0:
        return trim(img.convert("RGBA"))

    rgba = img.convert("RGBA")
    arr = np.asarray(rgba).copy()
    alpha = arr[..., 3]
    mask = alpha > 20

    if modo == "extender":
        # color del píxel opaco más cercano para "extender" el contorno
        _dist, (iy, ix) = ndimage.distance_transform_edt(
            ~mask, return_indices=True)
        colores = arr[..., :3][iy, ix]
    elif modo == "blanco":
        colores = np.full_like(arr[..., :3], 255)
    else:
        colores = np.zeros_like(arr[..., :3])
        colores[..., 0], colores[..., 1], colores[..., 2] = color

    # alfa del borde: dilatación euclídea de radio r
    yy, xx = np.mgrid[-r:r + 1, -r:r + 1]
    struct = (xx * xx + yy * yy) <= (r * r + r)
    borde = ndimage.binary_dilation(mask, structure=struct)

    nuevo = np.zeros_like(arr)
    nuevo[..., :3] = colores
    nuevo[..., 3] = (borde * 255).astype(np.uint8)
    # pega encima la imagen original (conserva sus píxeles exactos)
    sobre = arr[..., 3] > 0
    nuevo[sobre] = arr[sobre]
    return trim(Image.fromarray(nuevo, "RGBA"))
