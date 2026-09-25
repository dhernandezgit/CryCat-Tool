"""Extracción y simplificación del contorno (segmentación por transparencia).

- Segmenta la imagen en OPACO / TRANSPARENTE.
- Extrae los contornos exteriores y los simplifica (Douglas-Peucker) para que
  los cálculos vayan rápidos.
- Devuelve polígonos en milímetros listos para dibujar/colisionar.

Usa OpenCV si está disponible (mucho más rápido); si no, cae al canal alfa.
"""

from __future__ import annotations

import numpy as np
from PIL import Image, ImageDraw

try:  # OpenCV es opcional: acelera la extracción de contornos
    import cv2
    _CV2 = True
except Exception:  # pragma: no cover
    _CV2 = False


def segmentar(img: Image.Image, umbral: int = 1) -> np.ndarray:
    """Máscara booleana (True = opaco) del canal alfa.

    La transparencia REAL es alfa 0: cualquier resto (1 %) ya cuenta como
    opaco, así no se pierden bordes suavizados al cortar.
    """
    alpha = np.asarray(img.convert("RGBA"))[:, :, 3]
    return alpha > umbral


def contornos_mm(img: Image.Image, w_mm: float, h_mm: float,
                 eps_mm: float = 0.3) -> list[list[tuple[float, float]]]:
    """Contornos exteriores simplificados, en mm (origen = esquina superior).

    `eps_mm` es la tolerancia de simplificación: más grande = menos puntos y
    más rápido (0,3 mm va sobrado para corte).
    """
    m = segmentar(img)
    if not m.any():
        return []
    alto, ancho = m.shape
    sx = w_mm / max(1, ancho)
    sy = h_mm / max(1, alto)
    if not _CV2:
        # sin OpenCV: rectángulo del contenido (sigue usando solo lo opaco)
        ys, xs = np.where(m)
        return [[(float(xs.min()) * sx, float(ys.min()) * sy),
                 (float(xs.max() + 1) * sx, float(ys.min()) * sy),
                 (float(xs.max() + 1) * sx, float(ys.max() + 1) * sy),
                 (float(xs.min()) * sx, float(ys.max() + 1) * sy)]]
    cs, _ = cv2.findContours(m.astype(np.uint8), cv2.RETR_EXTERNAL,
                             cv2.CHAIN_APPROX_NONE)
    eps_px = max(1.0, eps_mm / max(1e-6, min(sx, sy)))
    salida: list[list[tuple[float, float]]] = []
    for c in cs:
        if cv2.contourArea(c) < 4:
            continue
        ap = cv2.approxPolyDP(c, eps_px, True)
        pts = ap.reshape(-1, 2).astype(float)
        if len(pts) < 3:
            continue
        salida.append([(float(x) * sx, float(y) * sy) for x, y in pts])
    salida.sort(key=lambda p: -_area_poligono(p))
    return salida


def _area_poligono(poly: list[tuple[float, float]]) -> float:
    """Área (shoelace) de un polígono."""
    if len(poly) < 3:
        return 0.0
    a = 0.0
    for i in range(len(poly)):
        x1, y1 = poly[i]
        x2, y2 = poly[(i + 1) % len(poly)]
        a += x1 * y2 - x2 * y1
    return abs(a) / 2.0


def area_mm2(polys: list[list[tuple[float, float]]]) -> float:
    """Área total de un conjunto de polígonos (mm²)."""
    return sum(_area_poligono(p) for p in polys)


def dibujar_poligonos(polys: list[list[tuple[float, float]]], w_px: int,
                      h_px: int, w_mm: float, h_mm: float,
                      pad_px: int = 0) -> np.ndarray:
    """Rasteriza los polígonos (mm) a una máscara booleana de w_px × h_px."""
    esc_x = w_px / max(1e-6, w_mm)
    esc_y = h_px / max(1e-6, h_mm)
    im = Image.new("1", (w_px + 2 * pad_px, h_px + 2 * pad_px), 0)
    d = ImageDraw.Draw(im)
    for poly in polys:
        pts = [(pad_px + x * esc_x, pad_px + y * esc_y) for x, y in poly]
        if len(pts) >= 3:
            d.polygon(pts, fill=1)
    return np.asarray(im, dtype=bool)
