"""Geometría de páginas y del área recortable de Cricut.

Modelo del área recortable (Print Then Cut):

El área recortable NO es un rectángulo: Cricut reserva las esquinas de la
página para las marcas de registro del sensor. La guía roja de Design Space
("Área recortable" / "Cuttable area") es un polígono escalonado de **5
bandas** (2 escalones por esquina, 20 vértices):

    *  banda central (fila superior): ancho reducido (~0.67 del bbox)
    *  banda intermedia: ~0.92 del bbox
    *  banda central: todo el ancho / toda la altura (máximos oficiales)
    *  y su reflejo abajo

Un diseño rectangular que use la altura máxima no puede usar a la vez la
anchura máxima (documentado por Cricut) -> escalones en las esquinas.

Dimensiones máximas oficiales (help.cricut.com, "How large can I Print Then
Cut?", revisado 2026-08; serie Maker = Cricut Maker 5 incluida) y, para A4,
calibradas directamente sobre la referencia del usuario
`assets/Cricut_A5_Limites_300ppp.png` (la imagen es un A4 completo: el negro
es el límite y el blanco la superficie útil):

    A4      (210 x 297)   -> max horizontal 186.0  x max vertical 272.3
                              (márgenes ~12 mm, medidos en la referencia)
    Letter  (215.9x279.4) -> max horizontal 189.0  x max vertical 252.5
    Legal   (215.9x355.6) -> max horizontal 189.0  x max vertical 328.7
    Tabloid (279.4x431.8) -> max horizontal 252.5  x max vertical 404.9
    A3      (297 x 420)   -> max horizontal 270.0  x max vertical 392.0
    A5      (148 x 210)   -> max horizontal 131.0  x max vertical 192.5

Las fracciones de las bandas se midieron píxel a píxel sobre esa referencia.
"""

from __future__ import annotations

import math
from dataclasses import dataclass, field

from .i18n import tr

# Máximos oficiales por tamaño de papel (retrato): (max_ancho, max_alto) en mm
OFFICIAL_MAX: dict[str, tuple[float, float]] = {
    "A4": (186.0, 272.3),  # calibrado sobre la referencia A4 del usuario
    "Letter": (189.0, 252.5),
    "Legal": (189.0, 328.7),
    "Tabloid": (252.5, 404.9),
    "A3": (270.0, 392.0),
    "A5": (131.0, 192.5),  # proporcional (A4/√2)
}

# Tamaños de papel en mm (retrato): (ancho, alto)
PAPER_SIZES: dict[str, tuple[float, float]] = {
    "A4": (210.0, 297.0),
    "Letter": (215.9, 279.4),
    "Legal": (215.9, 355.6),
    "Tabloid": (279.4, 431.8),
    "A3": (297.0, 420.0),
    "A5": (148.0, 210.0),
}

# Fracciones del polígono escalonado de 5 bandas, medidas píxel a píxel
# sobre la referencia del usuario `assets/Cricut_A5_Limites_300ppp.png`
# (la imagen completa = la hoja; el negro NO es recortable):
#   * ancho de la banda superior/inferior (centro):       0.653 del bbox
#   * ancho de la banda intermedia:                       0.912 del bbox
#   * alto de cada escalón exterior/interior:             0.028 / 0.088 del alto
# (valores ligeramente conservadores para no invadir nunca el margen negro)
STEP_W_INNER = 0.653   # banda central (centro) respecto al ancho del bbox
STEP_W_OUTER = 0.912   # banda intermedia respecto al ancho del bbox
STEP_H_INNER = 0.028   # primer escalón (arriba/abajo) respecto al alto
STEP_H_OUTER = 0.088   # segundo escalón respecto al alto

# Perfiles de máquina (máximos de A4 en mm); None = usa los estándar.
MACHINE_A4_OVERRIDE: dict[str, tuple[float, float] | None] = {
    "estandar": None,          # Joy Xtra / Explore / Venture
    "maker5": None,            # Cricut Maker 5 = serie Maker (mismos números)
    "joy": (78.0, 269.8),      # Cricut Joy 2: máx horizontal 3.07 in
}

MACHINE_LABELS: dict[str, str] = {
    "maker5": "Cricut Maker 5",
    "estandar": "Explore / Joy Xtra / Venture (estándar)",
    "joy": "Cricut Joy 2",
}


@dataclass(frozen=True)
class CutArea:
    """Área recortable de una página: polígono escalonado + bbox."""

    page_w: float          # mm, página completa (orientación elegida)
    page_h: float
    poly: list[tuple[float, float]]   # vértices en mm, origen = esquina sup-izq de la página
    bbox: tuple[float, float, float, float]  # (x0, y0, w, h) en mm, centrado en la página
    notches: list[tuple[float, float, float, float]]  # rects prohibidos (esquinas), mm
    machine: str = "estandar"

    @property
    def bbox_w(self) -> float:
        return self.bbox[2]

    @property
    def bbox_h(self) -> float:
        return self.bbox[3]

    @property
    def area_mm2(self) -> float:
        return polygon_area(self.poly)


def polygon_area(poly: list[tuple[float, float]]) -> float:
    """Área de un polígono simple (fórmula del zapato), en mm²."""
    n = len(poly)
    s = 0.0
    for i in range(n):
        x1, y1 = poly[i]
        x2, y2 = poly[(i + 1) % n]
        s += x1 * y2 - x2 * y1
    return abs(s) / 2.0


def polygon_contains(poly: list[tuple[float, float]], x: float, y: float) -> bool:
    """Point-in-polygon (ray casting). Para polígonos rectilíneos convexos por
    tramos también vale la comprobación por rectángulos, pero se usa el test
    general para robustez."""
    inside = False
    n = len(poly)
    j = n - 1
    for i in range(n):
        xi, yi = poly[i]
        xj, yj = poly[j]
        if (yi > y) != (yj > y):
            x_int = (xj - xi) * (y - yi) / (yj - yi) + xi
            if x < x_int:
                inside = not inside
        j = i
    return inside


def rect_inside_polygon(poly: list[tuple[float, float]],
                        notches: list[tuple[float, float, float, float]],
                        x: float, y: float, w: float, h: float,
                        eps: float = 1e-6) -> bool:
    """Cierto si el rectángulo [x, x+w] x [y, y+h] queda dentro del polígono.

    Como el polígono es el bbox menos muescas rectangulares (notches), basta
    con comprobar que el rect está en el bbox y no intersecta ninguna muesca.
    """
    for nx, ny, nw, nh in notches:
        if x < nx + nw - eps and x + w > nx + eps and y < ny + nh - eps and y + h > ny + eps:
            return False
    return True


def _bands_polygon(x0: float, y0: float, bw: float, bh: float
                   ) -> tuple[list[tuple[float, float]], list[tuple[float, float, float, float]]]:
    """Polígono escalonado de 5 bandas (2 escalones por esquina) y sus muescas
    para una caja (x0, y0, bw, bh)."""
    inner_w = bw * STEP_W_INNER
    outer_w = bw * STEP_W_OUTER
    cx0 = x0 + (bw - inner_w) / 2.0
    cx1 = cx0 + inner_w
    wx0 = x0 + (bw - outer_w) / 2.0
    wx1 = wx0 + outer_w
    x1 = x0 + bw
    y1 = y0 + bh
    t1 = y0 + bh * STEP_H_INNER
    t2 = y0 + bh * (STEP_H_INNER + STEP_H_OUTER)
    t3 = y1 - bh * (STEP_H_INNER + STEP_H_OUTER)
    t4 = y1 - bh * STEP_H_INNER
    poly = [
        (cx0, y0), (cx1, y0),
        (cx1, t1), (wx1, t1),
        (wx1, t2), (x1, t2),
        (x1, t3), (wx1, t3),
        (wx1, t4), (cx1, t4),
        (cx1, y1), (cx0, y1),
        (cx0, t4), (wx0, t4),
        (wx0, t3), (x0, t3),
        (x0, t2), (wx0, t2),
        (wx0, t1), (cx0, t1),
    ]
    notches = [
        (x0, y0, cx0 - x0, t1 - y0),
        (x0, t1, wx0 - x0, t2 - t1),
        (cx1, y0, x1 - cx1, t1 - y0),
        (wx1, t1, x1 - wx1, t2 - t1),
        (x0, t3, wx0 - x0, t4 - t3),
        (x0, t4, cx0 - x0, y1 - t4),
        (wx1, t3, x1 - wx1, t4 - t3),
        (cx1, t4, x1 - cx1, y1 - t4),
    ]
    return poly, notches


def inset_area(area: CutArea, margin: float) -> CutArea:
    """Área recortable con un margen de seguridad extra por todos los lados."""
    if margin <= 0:
        return area
    x0, y0, bw, bh = area.bbox
    nbw = max(1.0, bw - 2 * margin)
    nbh = max(1.0, bh - 2 * margin)
    nx0 = x0 + (bw - nbw) / 2.0
    ny0 = y0 + (bh - nbh) / 2.0
    poly, notches = _bands_polygon(nx0, ny0, nbw, nbh)
    return CutArea(page_w=area.page_w, page_h=area.page_h, poly=poly,
                   bbox=(nx0, ny0, nbw, nbh), notches=notches,
                   machine=area.machine)


def cut_area(page_w: float, page_h: float, machine: str = "estandar",
             paper_key: str | None = None) -> CutArea:
    """Calcula el área recortable para una página (mm) y máquina.

    `paper_key` indica el tamaño base para buscar los máximos oficiales
    (A4, A3, ...). Si es None se intenta deducir por coincidencia de
    dimensiones (con la página en cualquier orientación).
    """
    if paper_key is None:
        paper_key = _match_paper(page_w, page_h)
    portrait_w, portrait_h = PAPER_SIZES.get(paper_key, (page_w, page_h))
    max_h, max_v = OFFICIAL_MAX.get(paper_key, _derive_max(page_w, page_h))
    if machine == "joy":
        # Cricut Joy 2: el máximo horizontal del papel se reduce mucho
        override = MACHINE_A4_OVERRIDE.get("joy")
        if override:
            max_h, max_v = override

    landscape = page_w >= page_h
    # En vertical del papel: max_v va a lo largo del lado largo (portrait_h).
    # En apaisado se intercambian.
    bw = max_v if landscape else max_h   # extensión horizontal del área útil
    bh = max_h if landscape else max_v   # extensión vertical del área útil
    bw = min(bw, page_w)
    bh = min(bh, page_h)

    x0 = (page_w - bw) / 2.0
    y0 = (page_h - bh) / 2.0

    x1 = x0 + bw
    y1 = y0 + bh

    # --- polígono de 5 bandas (2 escalones por esquina, 20 vértices) ---
    # Anchos de banda centrados en el bbox:
    inner_w = bw * STEP_W_INNER          # banda central (centro)
    outer_w = bw * STEP_W_OUTER          # banda intermedia
    cx0 = x0 + (bw - inner_w) / 2.0
    cx1 = cx0 + inner_w
    wx0 = x0 + (bw - outer_w) / 2.0
    wx1 = wx0 + outer_w
    # Cortes horizontales (arriba y abajo, simétricos):
    t1 = y0 + bh * STEP_H_INNER          # fin de la banda central superior
    t2 = y0 + bh * (STEP_H_INNER + STEP_H_OUTER)  # fin de la intermedia sup.
    t3 = y1 - bh * (STEP_H_INNER + STEP_H_OUTER)  # inicio de la intermedia inf.
    t4 = y1 - bh * STEP_H_INNER          # inicio de la banda central inferior

    # Sentido horario desde la esquina sup-izquierda de la banda central
    poly = [
        (cx0, y0), (cx1, y0),           # borde superior de la banda central
        (cx1, t1), (wx1, t1),           # primer escalón (hacia fuera)
        (wx1, t2), (x1, t2),            # segundo escalón (hasta el borde)
        (x1, t3), (wx1, t3),            # lado derecho completo
        (wx1, t4), (cx1, t4),           # escalones inferiores (derecha)
        (cx1, y1), (cx0, y1),           # borde inferior de la banda central
        (cx0, t4), (wx0, t4),           # escalones inferiores (izquierda)
        (wx0, t3), (x0, t3),
        (x0, t2), (wx0, t2),            # lado izquierdo completo
        (wx0, t1), (cx0, t1),           # escalones superiores (izquierda)
    ]

    # Muescas prohibidas: 2 rectángulos por esquina (fuera del polígono)
    notches = [
        # superiores (izquierda)
        (x0, y0, cx0 - x0, t1 - y0),
        (x0, t1, wx0 - x0, t2 - t1),
        # superiores (derecha)
        (cx1, y0, x1 - cx1, t1 - y0),
        (wx1, t1, x1 - wx1, t2 - t1),
        # inferiores (izquierda)
        (x0, t3, wx0 - x0, t4 - t3),
        (x0, t4, cx0 - x0, y1 - t4),
        # inferiores (derecha)
        (wx1, t3, x1 - wx1, t4 - t3),
        (cx1, t4, x1 - cx1, y1 - t4),
    ]
    return CutArea(page_w=page_w, page_h=page_h, poly=poly, bbox=(x0, y0, bw, bh),
                   notches=notches, machine=machine)


def _match_paper(page_w: float, page_h: float) -> str:
    for key, (pw, ph) in PAPER_SIZES.items():
        if (abs(pw - page_w) < 0.5 and abs(ph - page_h) < 0.5) or \
           (abs(ph - page_w) < 0.5 and abs(pw - page_h) < 0.5):
            return key
    return ""


def _derive_max(page_w: float, page_h: float) -> tuple[float, float]:
    """Para tamaños sin entrada oficial (p. ej. personalizados) se aplican los
    márgenes equivalentes de A4 (~13.5 mm por lado)."""
    margin_x, margin_y = 13.5, 13.6
    portrait = page_h >= page_w
    if not portrait:
        page_w, page_h = page_h, page_w
    max_h = max(10.0, page_w - 2 * margin_x)
    max_v = max(10.0, page_h - 2 * margin_y)
    return (max_h, max_v) if portrait else (max_v, max_h)


def page_pixel_size(page_w_mm: float, page_h_mm: float, dpi: float) -> tuple[int, int]:
    """Píxeles de la página completa a la resolución dada."""
    return (max(1, round(page_w_mm / 25.4 * dpi)),
            max(1, round(page_h_mm / 25.4 * dpi)))


def mm_to_px(mm: float, dpi: float) -> int:
    return max(1, int(round(mm / 25.4 * dpi)))


def px_to_mm(px: float, dpi: float) -> float:
    return px / dpi * 25.4


def rotated_size(w: float, h: float, angle_deg: float) -> tuple[float, float]:
    """Tamaño del bbox de un rect w x h rotado angle_deg grados."""
    a = math.radians(angle_deg)
    c, s = abs(math.cos(a)), abs(math.sin(a))
    return (w * c + h * s, w * s + h * c)


def page_options() -> list[dict]:
    """Opciones de tamaño de página para la UI (la orientación se elige aparte)."""
    out = []
    for key, (pw, ph) in PAPER_SIZES.items():
        out.append({"key": key, "label": f"{key} ({pw:g}×{ph:g} mm)",
                    "w": pw, "h": ph})
    out.append({"key": "custom", "label": tr("Personalizado"), "w": 0, "h": 0})
    return out
