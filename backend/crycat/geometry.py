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

# Máximos OFICIALES de Print Then Cut por tamaño de papel (retrato):
# (max_ancho, max_alto) en mm, del help oficial de Cricut («How large can I
# Print Then Cut?», exactos desde pulgadas):
#   A4      7.2   x 10.62  in = 182.88 x 269.75 mm
#   Letter  7.44  x  9.94  in = 188.98 x 252.48 mm
#   Legal   7.44  x 12.94  in = 188.98 x 328.68 mm
#   Tabloid 9.94  x 15.94  in = 252.48 x 404.88 mm
#   A3      10.64 x 15.44  in = 270.26 x 392.18 mm
# A5 no es tamaño oficial de PTC: se mantiene la referencia del usuario.
OFFICIAL_MAX: dict[str, tuple[float, float]] = {
    "A4": (182.88, 269.75),
    "Letter": (188.98, 252.48),
    "Legal": (188.98, 328.68),
    "Tabloid": (252.48, 404.88),
    "A3": (270.26, 392.18),
    "A5": (131.0, 192.5),
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

# --- marcas de registro (sensor) de Cricut ------------------------------
# Las marcas son las MISMAS para todos los tamaños de papel (fiduciales del
# sensor). Medidas sobre la referencia del usuario `assets/CricutMarcas.png`
# (un A4 a 300 ppp impreso por Design Space):
#   * soporte de cada marca (cuadrado que ocupa):  25.32 mm
#   * grosor de las barras en L:                    1.44 mm
#   * esquina exterior de las marcas (A4 vertical): (13.63, 13.21) arriba
#     izquierda y (196.09, 280.08) abajo derecha
MARK_SIZE = 25.32      # lado del soporte de cada marca (mm)
MARK_THICK = 1.44      # grosor de las barras (mm)
MARK_GAP = 0.5         # margen extra para que nada toque la tinta
# distancia de la esquina EXTERIOR del soporte al FILO INTERIOR de la L
# (medida sobre las marcas reales que se imprimen): es lo que se usa para
# abrazar el contenido con la TINTA, no con el soporte (transparente)
MARK_INK = 1.72
MARKS_A4 = (13.63, 13.21, 196.09, 280.08)   # A4 vertical (referencia real)

# --- escalones de la GUÍA DE CORTE oficial ------------------------------
# El escalón pequeño se deduce de los datos reales de DS: el máximo
# RECTANGULAR (= área escalonada menos ese escalón por lado) del A4 oficial
# (182.88 x 269.75) es 167.31 x 254.10 → escalón mínimo = 7.85 mm por lado.
# El grande mantiene la proporción del documento del usuario (22.5/5.5).
# Se escalan con el tamaño del papel: en A5 salen ~5.6/22.7, que coinciden
# con su referencia (5.5/22.5).
# Margen EXTRA en las esquinas (+2 mm el pequeño, +4 mm el grande) para que
# Design Space no recorte el ancho útil por las esquinas (detectaba 17.98
# en vez de 18.28): así el diseño se queda más adentro en las esquinas.
STEP1_A4 = 9.85
STEP2_A4 = 36.1

# --- margen de borde de Design Space ------------------------------------
# DS deja ~0,9 mm entre el diseño y el borde de su guía y auto-redimensiona
# si el contenido llega justo al límite. Se deja a 0: el diseño ocupa TODO
# el máximo oficial (ancho y alto) y, si DS lo encaja (su regla para diseños
# altos), lo hace conservando la proporción. Poniéndolo a ~0.93 el diseño se
# importa tal cual pero mide 18.09 en vez de 18.28.
DS_EDGE_MM = 0.0

# Referencia (por si hace falta): el mayor RECTÁNGULO interior del área de
# PTC de DS (lo que DS usa para auto-redimensionar un bloque macizo), en mm.
# CryCat NO lo usa para colocar: la forma escalonada completa se aprovecha
# entera (DS acepta el diseño si las esquinas quedan libres, como en la guía
# roja). Tabla verificada por la comunidad:
#   A4      167.31 x 254.10 | Letter 173.30 x 236.80 | Legal 173.30 x 312.93
#   Tabloid 236.73 x 389.13 | A3     254.61 x 376.43


def marks_rect(page_w: float, page_h: float,
               bbox: tuple[float, float, float, float],
               paper_key: str | None = None
               ) -> tuple[float, float, float, float]:
    """Rectángulo EXTERIOR de las 4 marcas de registro (mm).

    Para A4 vertical se usan las posiciones OFICIALES medidas sobre la
    referencia (como las imprime Design Space); en el resto de tamaños y en
    apaisado se anclan a las esquinas del área máxima (mismo tamaño de
    marca). El área recortable se deriva de aquí, así las piezas NUNCA tocan
    las marcas.
    """
    if (paper_key == "A4" and page_w < page_h
            and abs(page_w - 210.0) < 0.5 and abs(page_h - 297.0) < 0.5):
        return MARKS_A4
    x0, y0, bw, bh = bbox
    return (x0, y0, x0 + bw, y0 + bh)


def marks_rect_for(area: "CutArea") -> tuple[float, float, float, float]:
    """Marcas de una `CutArea` ya calculada (posiciones oficiales)."""
    return marks_rect(area.page_w, area.page_h, area.bbox,
                      _match_paper(area.page_w, area.page_h))


def marks_adaptadas(caja_contenido: tuple[float, float, float, float] | None,
                    oficial: tuple[float, float, float, float],
                    gap: float = 1.0
                    ) -> tuple[float, float, float, float]:
    """Marcas cuyo FILO INTERIOR abraza el contenido (sin taparlo).

    La L de cada marca queda a `gap` mm del píxel más externo del contenido:
    la barra vertical izquierda delimita el borde izquierdo, la horizontal
    superior el borde superior, etc. Las 4 a la vez, así los CUATRO lados
    quedan delimitados por la tinta (como en una impresión de Design Space).

    Los soportes son transparentes y pueden salirse de la hoja; la TINTA (la
    L) siempre queda dentro porque el área recortable deja más de
    `gap + MARK_INK` mm a cada lado. Sin contenido, devuelve las oficiales.
    """
    if caja_contenido is None:
        return oficial
    cx0, cy0, cx1, cy1 = caja_contenido
    t = MARK_INK
    return (cx0 - gap - t, cy0 - gap - t, cx1 + gap + t, cy1 + gap + t)

# Perfiles de máquina (máximos de A4 en mm); None = usa los estándar.
# Toda la serie Maker (Maker, Maker 3, Maker 5) comparte el mismo patrón de
# área recortable y de marcas: solo cambia el nombre.
MACHINE_A4_OVERRIDE: dict[str, tuple[float, float] | None] = {
    "maker3": None,            # Cricut Maker 3 (por defecto)
    "maker": None,             # Cricut Maker (original)
    "maker5": None,            # Cricut Maker 5 (serie Maker)
    "estandar": None,          # Joy Xtra / Explore / Venture
    "joy": (78.0, 269.8),      # Cricut Joy 2: máx horizontal 3.07 in
}

MACHINE_LABELS: dict[str, str] = {
    "maker3": "Cricut Maker 3",
    "maker": "Cricut Maker",
    "maker5": "Cricut Maker 5",
    "estandar": "Explore / Joy Xtra / Venture (estándar)",
    "joy": "Cricut Joy 2",
}

MAQUINA_POR_DEFECTO = "maker3"


def machine_label(m: str | None) -> str:
    """Nombre visible de la máquina (Maker 3 si no se reconoce)."""
    return MACHINE_LABELS.get(str(m or ""), MACHINE_LABELS[MAQUINA_POR_DEFECTO])


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
    para una caja (x0, y0, bw, bh), con los escalones OFICIALES medidos sobre
    la referencia del usuario (`STEP1`/`STEP2`)."""
    x1 = x0 + bw
    y1 = y0 + bh
    # escalones escalados con el tamaño del papel (base: el A4 oficial)
    esc = math.sqrt(max(1e-9, bw * bh) / (182.88 * 269.75))
    s1, s2 = STEP1_A4 * esc, STEP2_A4 * esc
    # escalón 1 (el pequeño, ~7.85 mm en A4) y escalón 2 (el grande, ~32.1)
    wx0 = x0 + s1
    wx1 = x1 - s1
    cx0 = x0 + s2
    cx1 = x1 - s2
    t1 = y0 + s1
    t2 = y0 + s2
    t3 = y1 - s2
    t4 = y1 - s1
    # acotar a la caja y ordenar (por cajas muy pequeñas)
    cx0, cx1 = sorted((min(max(cx0, x0), x1), min(max(cx1, x0), x1)))
    wx0, wx1 = sorted((min(max(wx0, x0), x1), min(max(wx1, x0), x1)))
    t1, t2 = sorted((min(max(t1, y0), y1), min(max(t2, y0), y1)))
    t3, t4 = sorted((min(max(t3, y0), y1), min(max(t4, y0), y1)))
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

    El área es la forma ESCALONADA oficial de Print Then Cut (máximos
    oficiales + escalones reales): se aprovecha entera (bandas anchas del
    centro y altas incluidas) y las esquinas quedan libres, que es lo que
    Design Space necesita para no pedir redimensionar.
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
    # margen de borde de DS: el contenido (y los cuadrados guía) se quedan
    # ~0,93 mm dentro del máximo oficial; así DS NO auto-redimensiona y las
    # piezas se importan con su tamaño exacto (en A4: 18.09 x 26.79 cm)
    bw = max(10.0, bw - 2 * DS_EDGE_MM)
    bh = max(10.0, bh - 2 * DS_EDGE_MM)
    x0 += DS_EDGE_MM
    y0 += DS_EDGE_MM

    # --- límites OFICIALES + ESCALONES reales ---------------------------
    # El área útil es el máximo oficial de Print Then Cut por tamaño (menos
    # el margen de borde de DS) y los escalones salen del máximo rectangular
    # real (STEP1_A4/STEP2_A4, escalados por papel). El contenido puede
    # llegar a toda la forma; las marcas se colocan abrazándolo por fuera.
    poly, notches = _bands_polygon(x0, y0, bw, bh)
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
