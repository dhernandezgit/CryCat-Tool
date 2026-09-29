"""Empaquetado por silueta real (mask-based) con posición y ángulo óptimos.

En lugar de tratar cada imagen como su rectángulo envolvente, se rasteriza su
canal alfa (la parte NO transparente) y se encajan las siluetas entre sí,
buscando para cada una la posición y el ángulo que permiten meter el máximo
posible dentro de los límites del área recortable de Cricut.

* Resolución de trabajo: celdas de CELL mm (0.5 mm).
* Colisión: correlación cruzada por FFT (rápida) -> offset válido que no
  solapa ninguna silueta y queda dentro del polígono.
* Espaciado: se dilata cada silueta spacing/2 por lado, con lo que el hueco
  entre figuras (y hasta el borde útil) es `spacing`.
* Rotación: por objeto e independiente (0/90/180/270 o cualquier ángulo).
* Minis: rellenan huecos tras las copias, respetando los límites.
* Multipágina: se llena la hoja 1, luego la 2, etc.
"""

from __future__ import annotations

import math
import time

import numpy as np
from PIL import Image

from .geometry import CutArea
from .i18n import tr
from .packer import PackResult, Placement

CELL = 0.5
# "cualquier ángulo": pasos de 15º INCLUYENDO 90/180/270 (antes faltaban y
# el modo libre no podía usar los giros rectos, que son los más útiles)
FREE_ANGLES = (15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 270)


# --------------------------------------------------------------- utilidades --
def _dentro_poly(poly, X: np.ndarray, Y: np.ndarray) -> np.ndarray:
    """Punto en polígono (ray casting) vectorizado."""
    inside = np.zeros(X.shape, dtype=bool)
    n = len(poly)
    j = n - 1
    for i in range(n):
        xi, yi = poly[i]
        xj, yj = poly[j]
        cond = (yi > Y) != (yj > Y)
        xint = (xj - xi) * (Y - yi) / (yj - yi + 1e-12) + xi
        inside ^= cond & (X < xint)
        j = i
    return inside


def _grid(area: CutArea, cell: float):
    """Rejilla de celdas PERMITIDAS (conservadora).

    Una celda solo cuenta si TODA ella está dentro del polígono (se prueban
    sus cuatro esquinas). Así la silueta nunca puede asomar por el borde del
    área recortable: el resultado jamás pisa los límites de la Cricut.
    """
    x0, y0, bw, bh = area.bbox
    W = max(1, int(math.ceil(bw / cell)))
    H = max(1, int(math.ceil(bh / cell)))
    xs = x0 + (np.arange(W) + 0.5) * cell
    ys = y0 + (np.arange(H) + 0.5) * cell
    X, Y = np.meshgrid(xs, ys)
    h = cell / 2.0
    poly = area.poly
    inside = (_dentro_poly(poly, X - h, Y - h) &
              _dentro_poly(poly, X + h, Y - h) &
              _dentro_poly(poly, X - h, Y + h) &
              _dentro_poly(poly, X + h, Y + h))
    return inside, W, H


def _dilate(m: np.ndarray, r: int) -> np.ndarray:
    """Dilatación EUCLÍDEA (disco) de radio r celdas.

    Garantiza que dos siluetas cuyos discos no se solapan queden separadas al
    menos 2*r celdas en distancia euclídea (el `spacing` pedido)."""
    if r <= 0:
        return m
    from scipy import ndimage
    yy, xx = np.mgrid[-r:r + 1, -r:r + 1]
    disk = (xx * xx + yy * yy) <= (r * r + 0.5)
    return ndimage.binary_dilation(m, structure=disk)


def _mascaras_redondas(assets: list[dict], masks: dict[str, Image.Image],
                       dpi: float = 300.0) -> dict[str, Image.Image]:
    """Máscaras SINTÉTICAS de círculo para el modo chapas.

    Las chapas son redondas: empaquetarlas como círculos es exacto y mucho
    más rápido que rasterizar cada imagen. El diámetro es el lado MENOR de la
    pieza (conservador si algún día el dibujo no fuese un círculo perfecto);
    la red de seguridad final valida con las siluetas REALES.
    """
    from PIL import ImageDraw
    por_id = {a["id"]: a for a in assets}
    out: dict[str, Image.Image] = {}
    for aid, img in (masks or {}).items():
        a = por_id.get(aid)
        if a is None:
            out[aid] = img
            continue
        w_mm = float(a["w_mm"])
        h_mm = float(a["h_mm"])
        W = max(4, int(round(w_mm / 25.4 * dpi)))
        H = max(4, int(round(h_mm / 25.4 * dpi)))
        d = max(4, min(W, H))
        im = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ImageDraw.Draw(im).ellipse(
            ((W - d) // 2, (H - d) // 2,
             (W - d) // 2 + d - 1, (H - d) // 2 + d - 1),
            fill=(255, 255, 255, 255))
        out[aid] = im
    return out


# Formas simples: ángulos que merece la pena probar (el resto son simetrías)
_ANGULOS_FORMA = {
    "circulo": [0.0],
    "rectangulo": [0.0, 90.0, 180.0, 270.0],
    "triangulo": [0.0, 90.0, 180.0, 270.0],
}


def _forma_simple(mask: np.ndarray, cell: float,
                  umbral: float = 0.96, max_vertices: int = 12
                  ) -> tuple[str, list] | None:
    """¿La silueta es una forma geométrica simple? Devuelve (tipo, polígono).

    Se mide sobre la máscara real: si es un círculo, un rectángulo (aunque
    tenga las esquinas redondeadas), un triángulo o un POLÍGONO CONVEXO de
    pocos lados, se puede empaquetar con su forma analítica y menos ángulos.
    `umbral` (0..1) decide cuánto tiene que parecerse (área/casco y área/caja)
    y `max_vertices` cuántos lados se admiten en el polígono.

    La forma analítica CONTIENE a la silueta salvo el círculo, que usa el
    mismo ÁREA (un pelín más pequeño si la forma no es perfecta): la red de
    seguridad final valida con el alfa real y recoloca si hiciera falta.
    """
    try:
        ys, xs = np.where(mask)
        if len(ys) < 50:
            return None
        area = float(len(ys))
        x0, x1 = int(xs.min()), int(xs.max())
        y0, y1 = int(ys.min()), int(ys.max())
        w = x1 - x0 + 1
        h = y1 - y0 + 1
        r_bbox = area / float(w * h)
        cx, cy = float(xs.mean()), float(ys.mean())
        # círculo: mismo ÁREA INTERIOR (sin el filo conservador de la máscara)
        # -> queda del tamaño real que se corta, liso y sin crecer. La red de
        # seguridad final valida con el alfa real y recoloca si hiciera falta.
        from scipy import ndimage
        area_int = float(ndimage.binary_erosion(mask, iterations=1).sum()) \
            or area
        r_eq = math.sqrt(area_int / math.pi)
        r_max = float(np.sqrt(((xs - cx) ** 2 + (ys - cy) ** 2).max()))
        if r_max > 0 and r_eq / r_max > 0.90 and r_max > 0.3 * max(w, h):
            poly = [(cx + r_eq * math.cos(2 * math.pi * k / 24),
                     cy + r_eq * math.sin(2 * math.pi * k / 24))
                    for k in range(24)]
            return "circulo", poly
        if r_bbox > 0.97:
            return "rectangulo", [(x0, y0), (x1, y0), (x1, y1), (x0, y1)]
        # convexidad: si el casco es casi el área, no hay recovecos
        try:
            from scipy.spatial import ConvexHull
            pts = np.column_stack([xs, ys]).astype(np.float64)
            hull = ConvexHull(pts)
            area_hull = float(hull.volume)
            r_hull = area / max(1.0, area_hull)
            vh = hull.points[hull.vertices]
        except Exception:
            return None
        if r_hull < umbral:
            return None
        # rectángulo REDONDEADO: casco que llena casi el bbox pero con las
        # esquinas cortadas -> se usa el PROPIO CASCO (más fino que la caja)
        if r_bbox > 0.86 and len(vh) <= 8:
            return "rectangulo", [(float(px), float(py)) for px, py in vh]
        # triángulo: casco de 3 lados (algún vértice extra por el pixelado)
        if len(vh) <= 8 and 0.30 < r_bbox < 0.68:
            return "triangulo", [(float(px), float(py)) for px, py in vh]
        # POLÍGONO convexo de pocos lados: también se simplifica
        if len(vh) <= max_vertices:
            return "poligono", [(float(px), float(py)) for px, py in vh]
        return None
    except Exception:
        return None


def _simplificar_simples(assets: list[dict], masks: dict[str, Image.Image],
                         cell: float = 0.25, dpi: float = 300.0,
                         umbral: float = 0.96, max_vertices: int = 12
                         ) -> tuple[dict[str, Image.Image],
                                    dict[str, list[float]]]:
    """Máscaras analíticas y ángulos reducidos para las siluetas simples.

    Devuelve (mascaras, angulos_por_asset): solo se tocan los elementos con
    `simplificar` activado (por defecto sí) cuya silueta es claramente un
    círculo, un rectángulo (aunque sea redondeado), un triángulo o un
    polígono convexo de pocos lados; el resto se queda igual (alfa real y
    todos los ángulos). Las formas analíticas contienen a la silueta (el
    círculo usa el mismo área) y la red final valida con el alfa real.
    """
    from PIL import ImageDraw
    por_id = {a["id"]: a for a in assets}
    out = dict(masks)
    angulos: dict[str, list[float]] = {}
    k = dpi / 25.4 * cell            # píxeles de imagen por celda de máscara
    for aid, img in (masks or {}).items():
        a = por_id.get(aid)
        if a is None or a.get("simplificar") is False:
            continue
        try:
            w_mm = float(a["w_mm"])
            h_mm = float(a["h_mm"])
            m = _asset_mask(img, w_mm, h_mm, cell)
            forma = _forma_simple(m, cell, umbral, max_vertices)
            if forma is None:
                continue
            tipo, poly = forma
            W = max(4, int(round(w_mm / 25.4 * dpi)))
            H = max(4, int(round(h_mm / 25.4 * dpi)))
            im = Image.new("RGBA", (W, H), (0, 0, 0, 0))
            d = ImageDraw.Draw(im)
            if tipo == "circulo":
                xs = [p[0] for p in poly]
                ys = [p[1] for p in poly]
                d.ellipse((min(xs) * k, min(ys) * k,
                           max(xs) * k, max(ys) * k),
                          fill=(255, 255, 255, 255))
            else:
                d.polygon([(px * k, py * k) for px, py in poly],
                          fill=(255, 255, 255, 255))
            out[aid] = im
            angulos[aid] = list(_ANGULOS_FORMA.get(tipo, [0.0, 90.0, 180.0,
                                                          270.0]))
        except Exception:
            continue
    return out, angulos


def _asset_mask(img: Image.Image, w_mm: float, h_mm: float, cell: float,
                pad: int = 0) -> np.ndarray:
    """Máscara booleana de la SILUETA REAL (el canal alfa tal cual).

    Antes se usaba el contorno simplificado (más rápido) pero mentía: la
    simplificación recortaba las partes cóncavas y perdía los AGUJEROS
    (un anillo quedaba como un disco). Con el alfa, el empaquetado respeta
    la forma exacta: nada se solapa y las piezas pequeñas pueden anidarse
    dentro de los huecos (donuts, marcos…). El alfa incluye los bordes
    suavizados (cualquier píxel > 1 cuenta como opaco), así que es
    ligeramente conservadora: nunca coloca de menos.
    """
    w = max(2, int(round(w_mm / cell)))
    h = max(2, int(round(h_mm / cell)))
    # Reducción CONSERVADORA: se binariza a resolución completa y se reduce
    # con BOX; cualquier píxel opaco hace la celda opaca. Así la máscara es
    # SIEMPRE un superconjunto de la silueta real (las partes finas no se
    # pierden) y nunca se coloca de menos ni se solapa nada.
    alpha = img.convert("RGBA").getchannel("A")
    llena = np.asarray(alpha) > 1
    if (w, h) != llena.shape[::-1]:
        im = Image.fromarray((llena * 255).astype(np.uint8), "L").resize(
            (w, h), Image.Resampling.BOX)
        m = np.asarray(im) > 0
    else:
        m = llena
    if pad > 0:
        # relleno transparente para que la dilatación no se recorte
        p = np.zeros((h + 2 * pad, w + 2 * pad), dtype=bool)
        p[pad:pad + h, pad:pad + w] = m
        m = p
    return m


def _rotate_mask(m: np.ndarray, angle: float) -> np.ndarray:
    a = float(angle) % 360.0
    q = round(a / 90.0)
    im = Image.fromarray((m * 255).astype(np.uint8), "L")
    if abs(a - q * 90.0) < 0.01:
        q = int(q) % 4
        if q == 1:
            im = im.transpose(Image.Transpose.ROTATE_90)
        elif q == 2:
            im = im.transpose(Image.Transpose.ROTATE_180)
        elif q == 3:
            im = im.transpose(Image.Transpose.ROTATE_270)
    else:
        im = im.rotate(a, expand=True, resample=Image.Resampling.NEAREST)
    return np.asarray(im) > 128


def _content_bbox_mm(mask: np.ndarray, cell: float) -> tuple[float, float]:
    ys, xs = np.where(mask)
    return (float(xs.max() - xs.min() + 1) * cell,
            float(ys.max() - ys.min() + 1) * cell)


def _correlate(occ: np.ndarray, m: np.ndarray) -> np.ndarray:
    """corr[ty,tx] = nº de celdas de m (con su esquina en ty,tx) sobre occ."""
    H, W = occ.shape
    h, w = m.shape
    sh, sw = H + h - 1, W + w - 1
    F = np.fft.rfft2(occ.astype(np.float32), s=(sh, sw))
    G = np.fft.rfft2(m[::-1, ::-1].astype(np.float32), s=(sh, sw))
    corr = np.fft.irfft2(F * G, s=(sh, sw))
    return corr[h - 1:h - 1 + H, w - 1:w - 1 + W]


def _best_offset(occ: np.ndarray, m: np.ndarray, out_corr: np.ndarray,
                 occ_contact: np.ndarray | None = None,
                 rm: np.ndarray | None = None):
    """Mejor ((y, x), contacto) para colocar m sin solapar ni salir del área.

    `out_corr` es la correlación (cacheada) de la máscara con lo NO permitido:
    vale 0 sólo en los offsets en los que la máscara cabe dentro del área.
    El CONTACTO se mide contra las siluetas REALES (`rm`, sin dilatar): así se
    premia encajar piezas sin comerse la separación pedida.
    """
    H, W = occ.shape
    h, w = m.shape
    if h > H or w > W:
        return None
    ov = _correlate(occ, m)
    # tolerancia SOLO de rasterización (la FFT deja ~1e-4 de ruido): una
    # celda entera de solape ya se rechaza, así nunca se pisan dos piezas
    tol = 0.5
    valid = (ov <= tol) & (out_corr < 0.5)
    valid[H - h + 1:, :] = False
    valid[:, W - w + 1:] = False
    if not valid.any():
        return None
    ys, xs = np.where(valid)
    if occ_contact is not None:
        if rm is not None and rm.shape == m.shape:
            # anillo fino alrededor de la silueta real (proximidad, no solape)
            anillo = _dilate(rm, 2)
            contact = _correlate(occ_contact, anillo)
        else:
            contact = _correlate(occ_contact, m)
        scores = contact[ys, xs]
        # Bottom-Left: manda la y más baja; el contacto desempata la misma fila
        order = np.lexsort((xs, -scores, ys))
        k = int(order[0])
        return (int(ys[k]), int(xs[k])), int(round(float(scores[k])))
    order = np.lexsort((xs, ys))
    k = int(order[0])
    return (int(ys[k]), int(xs[k])), 0


def _angles(rot_mode: str) -> list[float]:
    if rot_mode == "no":
        return [0.0]
    if rot_mode in ("90", "cuadrantes", "cuadrantes4"):
        return [0.0, 90.0, 180.0, 270.0]
    return [0.0] + list(FREE_ANGLES)


# ángulos de la pasada SEMILLA en modo libre: unos pocos (45º de paso) para
# que sea RÁPIDA; los giros finos (30/60/…) los prueban las pasadas de refino
ANGULOS_SEMILLA_LIBRE = (0.0, 45.0, 90.0, 135.0)


def _angles_semilla(rot_mode: str) -> list[float]:
    """Ángulos reducidos de la semilla (siempre dentro de los permitidos)."""
    if rot_mode == "no":
        return [0.0]
    if rot_mode in ("90", "cuadrantes", "cuadrantes4"):
        return [0.0, 90.0]
    return list(ANGULOS_SEMILLA_LIBRE)


def _angles_mini(rot_mode: str) -> list[float]:
    """Ángulos de los MINIS: los MISMOS permitidos que las piezas.

    En modo libre se prueban TODOS (cualquier ángulo), pero empezando por los
    más habituales (0/90/45/135): la mayoría de huecos se rellenan con los
    primeros y así la fase de minis no se eterniza.
    """
    if rot_mode == "no":
        return [0.0]
    if rot_mode in ("90", "cuadrantes", "cuadrantes4"):
        return [0.0, 90.0, 180.0, 270.0]
    orden = [0.0, 90.0, 45.0, 135.0]
    vistos = set(orden)
    return orden + [a for a in _angles("libre") if a not in vistos]


def _mask_for_placement(p: Placement, a: dict, img: Image.Image, cell: float,
                        r: int):
    """(rm, dm, ox, oy) para una colocación: máscara, dilatada y desplazamiento
    del contenido dentro del array."""
    # OJO: los minis van a escala (`p.scale`); usar el tamaño del original
    # agrandaba su máscara y la validación los movía sin motivo (bug real).
    s = float(p.scale or 1.0)
    base = _asset_mask(img, float(a["w_mm"]) * s, float(a["h_mm"]) * s, cell,
                       pad=r + 2)
    rm = _rotate_mask(base, p.angle)
    ys, xs = np.where(rm)
    ox, oy = int(xs.min()), int(ys.min())
    return rm, _dilate(rm, r), ox, oy


def try_move_sil(placements: list[Placement], uid: str, x: float, y: float,
                 area: CutArea, spacing: float,
                 masks: dict[str, Image.Image],
                 assets_by_id: dict[str, dict]) -> Placement | None:
    """Mueve (y fija) un elemento validando con su SILUETA real.

    Se permite el movimiento si el elemento no se solapa con otras siluetas
    (el solape es estricto: algo de solape con los MÁRGENES de separación es
    tolerable al recolocar a mano) y su contenido cabe dentro del área.
    Así el arrastre manual funciona también en colocaciones muy apretadas.
    """
    target = next((p for p in placements if p.uid == uid), None)
    if target is None:
        return None
    a = assets_by_id.get(target.asset_id)
    img = masks.get(target.asset_id)
    if a is None or img is None:
        return None
    cell = CELL
    # Al mover A MANO se valida SOLO la silueta real (sin dilatar por el
    # espacio de separación): así se puede apretar más que el hueco
    # automático, que es justo lo que busca el que coloca a mano. Antes se
    # dilataban los vecinos y NINGÚN movimiento era válido en una hoja llena.
    r = 0
    allowed, W, H = _grid(area, cell)
    x0, y0 = area.bbox[0], area.bbox[1]

    occ = np.zeros((H, W), dtype=np.uint8)
    for p in placements:
        if p.uid == uid or p.page != target.page:
            continue
        aa = assets_by_id.get(p.asset_id)
        ii = masks.get(p.asset_id)
        if aa is None or ii is None:
            continue
        _, dm, ox, oy = _mask_for_placement(p, aa, ii, cell, r)
        ty = int(round((p.y - y0) / cell)) - oy
        tx = int(round((p.x - x0) / cell)) - ox
        h, w = dm.shape
        if 0 <= ty and 0 <= tx and ty + h <= H and tx + w <= W:
            occ[ty:ty + h, tx:tx + w] = np.maximum(
                occ[ty:ty + h, tx:tx + w], dm.astype(np.uint8))

    _, dm, ox, oy = _mask_for_placement(target, a, img, cell, r)
    ty = int(round((y - y0) / cell)) - oy
    tx = int(round((x - x0) / cell)) - ox
    h, w = dm.shape
    if not (0 <= ty and 0 <= tx and ty + h <= H and tx + w <= W):
        return None
    # 1) El solape SE PERMITE al mover a mano: si pisa otra pieza, el usuario
    #    la moverá después. Antes se rechazaba y en una hoja llena NINGÚN
    #    movimiento era válido (el arrastre parecía roto).
    # 2) el CONTENIDO (sin márgenes) debe caber dentro del área recortable
    ys, xs = np.where(dm)
    cy0, cy1 = ty + int(ys.min()), ty + int(ys.max())
    cx0, cx1 = tx + int(xs.min()), tx + int(xs.max())
    zona = allowed[cy0:cy1 + 1, cx0:cx1 + 1]
    interior = dm[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
    fuera = int(np.count_nonzero(interior & (~zona)))
    if fuera > 1:
        return None
    target.x, target.y = x, y
    target.pinned = True
    return target


# ------------------------------------------------------------------- packer --
class _Ctx:
    def __init__(self, area: CutArea, settings: dict, cell: float = CELL):
        self.cell = cell
        self.spacing = float(settings.get("espacio_mm", 2.0))
        # ceil (no round): garantiza que el hueco nunca sea menor que `spacing`
        self.r = int(math.ceil((self.spacing / 2.0) / self.cell)) if self.spacing > 0 else 0
        # espacio NEGATIVO: solapamiento controlado → se EROSIONAN las
        # siluetas para permitir ese solape sin que la validación lo bloquee
        self.erode = (int(math.ceil((-self.spacing / 2.0) / self.cell))
                      if self.spacing < 0 else 0)
        self.allowed, self.W, self.H = _grid(area, self.cell)
        self.x0, self.y0 = area.bbox[0], area.bbox[1]
        self.limites = (area.bbox[0], area.bbox[1],
                        area.bbox[0] + area.bbox[2], area.bbox[1] + area.bbox[3])
        self.pages: list[np.ndarray] = []        # siluetas DILATADAS (separación)
        self.pages_sil: list[np.ndarray] = []    # siluetas reales (contacto)
        self.placements: list[Placement] = []
        self.cache: dict = {}
        self.out_cache: dict = {}
        self.rot_cache: dict = {}   # (aid, tamaño, ángulo) → (rm, dm) cacheado
        self.mask_cells = 0

    def out_corr(self, dm: np.ndarray) -> np.ndarray:
        """Correlación cacheada de la máscara dilatada con lo NO permitido.

        La clave incluye la forma de la rejilla de área: la caché se comparte
        entre pasadas con celdas distintas, y sin esto chocarían.
        """
        key = (dm.shape, self.allowed.shape, hash(dm.tobytes()))
        c = self.out_cache.get(key)
        if c is None:
            c = _correlate((~self.allowed).astype(np.float32), dm)
            self.out_cache[key] = c
        return c

    def best_for(self, pi: int, dm: np.ndarray,
                 rm: np.ndarray | None = None):
        """Mejor posición en la página `pi`, buscando sólo en la ventana
        ocupada (mucho más rápido) con reserva a la búsqueda completa.

        Con `rm` el contacto se mide contra las siluetas REALES; sin él se
        aplica Bottom-Left puro (la posición válida más baja)."""
        occ = self.pages[pi]
        occ_sil = self.pages_sil[pi] if rm is not None else None
        oc = self.out_corr(dm)
        h, w = dm.shape
        rows = np.any(occ > 0, axis=1)
        cols = np.any(occ > 0, axis=0)
        if rows.any():
            rmax = int(np.where(rows)[0][-1])
            cmax = int(np.where(cols)[0][-1])
            wr = min(self.H, rmax + h + 1)
            wc = min(self.W, cmax + w + 1)
        else:
            wr = min(self.H, h)
            wc = min(self.W, w)
        got = _best_offset(occ[:wr, :wc], dm, oc[:wr, :wc],
                           occ_sil[:wr, :wc] if occ_sil is not None else None,
                           rm)
        if got is None:
            got = _best_offset(occ, dm, oc, occ_sil, rm)
        return got

    def base_mask(self, aid: str, w_mm: float, h_mm: float,
                  img: Image.Image) -> np.ndarray:
        # la celda forma parte de la clave: la caché se comparte entre pasadas
        # con celdas distintas (semilla gruesa + refinados finos)
        key = (aid, round(w_mm, 3), round(h_mm, 3), self.cell)
        b = self.cache.get(key)
        if b is None:
            b = _asset_mask(img, w_mm, h_mm, self.cell, pad=self.r + 2)
            if self.erode > 0:
                from scipy import ndimage
                b = ndimage.binary_erosion(b, iterations=self.erode)
            self.cache[key] = b
        return b

    def rotated(self, aid: str, w_mm: float, h_mm: float, angle: float,
                img: Image.Image) -> tuple[np.ndarray, np.ndarray]:
        # caché por (elemento, tamaño, ángulo): los minis repiten MUCHÍSIMO
        # la misma máscara (mismo tamaño y ángulos) y rotar+dilatar cada vez
        # era el cuello de botella (por eso salían tan pocos)
        clave = (aid, round(w_mm, 3), round(h_mm, 3), float(angle))
        c = self.rot_cache.get(clave)
        if c is not None:
            return c
        base = self.base_mask(aid, w_mm, h_mm, img)
        rm = _rotate_mask(base, angle)
        dm = _dilate(rm, self.r)
        self.rot_cache[clave] = (rm, dm)
        return rm, dm

    def new_page(self) -> int:
        self.pages.append(np.zeros((self.H, self.W), dtype=np.float32))
        self.pages_sil.append(np.zeros((self.H, self.W), dtype=np.float32))
        return len(self.pages) - 1


def _try_place(ctx: _Ctx, aid: str, name: str, w_mm: float, h_mm: float,
               scale: float, mini: bool, img: Image.Image,
               rot_angles: list[float], new_page_ok: bool,
               contacto: bool = True, voronoi: bool = False,
               first_fit: bool = False) -> bool:
    """Evalúa TODOS los ángulos y hojas y coloca en la mejor posición (la de
    más contacto con lo ya puesto). Así los giros simples (0/90/180/270) se
    aprovechan de verdad para encajar más.

    Con `voronoi=True` las posiciones candidatas son los centros de los
    huecos libres más grandes (aproximación Voronoi).
    Con `first_fit=True` se acepta la PRIMERA posición válida (mucho más
    rápido; se usa para los minis, que son relleno).
    """
    if voronoi:
        return _try_place_voronoi(ctx, aid, name, w_mm, h_mm, scale, mini,
                                  img, rot_angles, new_page_ok)
    if first_fit:
        for ang in rot_angles:
            rm, dm = ctx.rotated(aid, w_mm, h_mm, ang, img)
            h, w = dm.shape
            if h > ctx.H or w > ctx.W:
                continue
            for pi in range(len(ctx.pages)):
                got = ctx.best_for(pi, dm, rm)
                if got is not None:
                    return _commit_offset(ctx, aid, name, pi, ang, scale, mini,
                                          rm, dm, got[0], w_mm, h_mm)
        if new_page_ok:
            pi = ctx.new_page()
            for ang in rot_angles:
                rm, dm = ctx.rotated(aid, w_mm, h_mm, ang, img)
                h, w = dm.shape
                if h > ctx.H or w > ctx.W:
                    continue
                got = ctx.best_for(pi, dm, rm)
                if got is not None:
                    return _commit_offset(ctx, aid, name, pi, ang, scale,
                                          mini, rm, dm, got[0], w_mm, h_mm)
            ctx.pages.pop()
        return False
    best = None  # (score, page, ang, off, rm, dm)
    for ang in rot_angles:
        rm, dm = ctx.rotated(aid, w_mm, h_mm, ang, img)
        h, w = dm.shape
        if h > ctx.H or w > ctx.W:
            continue
        for pi in range(len(ctx.pages)):
            got = ctx.best_for(pi, dm, rm if contacto else None)
            if got is None:
                continue
            off, score = got
            # DESEMPATE por profundidad (reactivado): a igual contacto gana
            # el ángulo que coloque más abajo/izquierda. La red fina de
            # seguridad (0,25 mm, ya corrigida) garantiza que no cuele solapes.
            clave = (score, -off[0], -off[1])
            if best is None or clave > best[0]:
                best = (clave, pi, ang, off, rm, dm)
    if best is not None:
        _, pi, ang, off, rm, dm = best
        return _commit_offset(ctx, aid, name, pi, ang, scale, mini,
                              rm, dm, off, w_mm, h_mm)
    if new_page_ok:
        pi = ctx.new_page()
        for ang in rot_angles:
            rm, dm = ctx.rotated(aid, w_mm, h_mm, ang, img)
            h, w = dm.shape
            if h > ctx.H or w > ctx.W:
                continue
            got = ctx.best_for(pi, dm, rm if contacto else None)
            if got is not None:
                return _commit_offset(ctx, aid, name, pi, ang, scale, mini,
                                      rm, dm, got[0], w_mm, h_mm)
        ctx.pages.pop()
    return False


def _try_place_voronoi(ctx: _Ctx, aid: str, name: str, w_mm: float,
                       h_mm: float, scale: float, mini: bool,
                       img: Image.Image, rot_angles: list[float],
                       new_page_ok: bool) -> bool:
    """Coloca en el HUECO MÁS GRANDE (aprox. Voronoi del espacio libre).

    La transformada de distancia del espacio libre da, en cada punto, el radio
    del mayor círculo vacío: sus máximos locales son los centros de los huecos
    (vértices de Voronoi). Se prueban los huecos de mayor a menor y se acepta
    el primero donde la silueta encaja.
    """
    from scipy import ndimage
    mejor = None  # (radio_mm, pi, ang, off, rm, dm)
    for ang in rot_angles:
        rm, dm = ctx.rotated(aid, w_mm, h_mm, ang, img)
        hh, ww = dm.shape
        if hh > ctx.H or ww > ctx.W:
            continue
        ys, xs = np.where(rm)
        if len(ys) == 0:
            continue
        oy, ox = int(ys.min()), int(xs.min())
        alto = int(ys.max()) - oy
        ancho = int(xs.max()) - ox
        for pi in range(len(ctx.pages)):
            occ = ctx.pages[pi]
            libre = ((ctx.allowed) & (occ <= 0)).astype(np.uint8)
            if not libre.any():
                continue
            dist = ndimage.distance_transform_edt(libre) * ctx.cell
            maximos = ndimage.maximum_filter(dist, size=5)
            cys, cxs = np.where((dist >= maximos - 1e-6) & (dist > 0.5))
            if len(cys) == 0:
                continue
            oc = ctx.out_corr(dm)
            tol = 0
            orden = np.argsort(-dist[cys, cxs])[:80]   # huecos mayores
            for k in orden:
                cy, cx = int(cys[k]), int(cxs[k])
                radio = float(dist[cy, cx])
                # dos anclajes por hueco: centrado y pegado abajo-izquierda
                colocado = None
                for ty, tx in ((cy - oy - alto // 2, cx - ox - ancho // 2),
                               (cy - oy, cx - ox)):
                    if not (0 <= ty and 0 <= tx and
                            ty + hh <= ctx.H and tx + ww <= ctx.W):
                        continue
                    if float(oc[ty, tx]) >= 0.5:
                        continue
                    zona = occ[ty:ty + hh, tx:tx + ww]
                    if int(np.count_nonzero((zona > 0) & dm)) > tol:
                        continue
                    colocado = (ty, tx)
                    break
                if colocado is not None:
                    if mejor is None or radio > mejor[0]:
                        mejor = (radio, pi, ang, colocado, rm, dm)
                    break      # el mayor hueco aprovechable de esta página
    if mejor is not None:
        _, pi, ang, off, rm, dm = mejor
        return _commit_offset(ctx, aid, name, pi, ang, scale, mini,
                              rm, dm, off, w_mm, h_mm)
    # reserva: colocación Bottom-Left normal (nunca peor que greedy)
    return _try_place(ctx, aid, name, w_mm, h_mm, scale, mini, img,
                      rot_angles, new_page_ok, contacto=True, voronoi=False)




def _ref_medida(w_mm: float, h_mm: float, medida: str) -> float:
    """Tamaño de referencia según cómo se mide (igual que en importación)."""
    if medida == "mayor":
        return max(max(w_mm, h_mm), 1e-6)
    if medida == "circulo":
        return max(2.0 * math.sqrt(max(0.0, w_mm * h_mm) / math.pi), 1e-6)
    return max(min(w_mm, h_mm), 1e-6)


def _escalas_lista(valores: list[float], modo: str, w_mm: float,
                   h_mm: float, medida: str = "circulo",
                   mm_borde: float = 0.0,
                   borde_mini: str = "proporcional") -> list[float]:
    """Lista de tamaños deseados → escalas del elemento.

    En modo "mm" cada valor es el tamaño FINAL del mini MEDIDO como indique
    `medida` (igual que en el menú de importación):
      · menor   → lado menor
      · mayor   → lado mayor
      · circulo → diámetro del círculo equivalente (2·√(w·h/π))
    Según el borde del mini, la referencia cambia: "sin" quita el borde del
    mini, "igual" lo mantiene en mm (se descuenta del tamaño pedido) y
    "proporcional" lo lleva dentro (referencia = el tamaño real).
    En modo "pct" el valor ya es el porcentaje respecto al original.
    """
    if modo != "mm":
        return [v / 100.0 for v in valores]
    b = max(0.0, float(mm_borde or 0.0))
    quita = 2.0 * b if borde_mini in ("sin", "igual") else 0.0
    anade = 2.0 * b if borde_mini == "igual" else 0.0
    base = _ref_medida(max(0.5, w_mm - quita), max(0.5, h_mm - quita), medida)
    return [max(1e-6, v - anade) / base for v in valores]


def _escalas_candidatas(s_floor: float, max_res: float, usar_lista: bool,
                        lista: list[float]) -> list[float]:
    """Escalas a probar para un mini: la lista dada (mayor a menor) o,
    automáticamente, descendiendo desde el tope de reescalado.

    Con la LISTA activa el tope `mini_max_rescale` se IGNORA (en la interfaz
    ni se muestra): mandan los tamaños pedidos. Antes lo recortaba en
    silencio y un mini de 20 mm en un elemento reducido salía a 15 mm.
    """
    if usar_lista and lista:
        # la lista MANDA: ni el tope de reescalado ni el 99% del original.
        # Un mini de 20 mm en un elemento de 14 mm debe medir 20 mm (antes
        # se quedaba en 13,9 y parecía que la lista no se aplicaba). Tope de
        # seguridad 3× para no construir máscaras enormes sin sentido.
        max_res = 3.0
        out = sorted({min(max_res, max(s_floor, s)) for s in lista},
                     reverse=True)
        return [s for s in out if s >= s_floor - 1e-9]
    out: list[float] = []
    s = max_res
    while s >= s_floor - 1e-9 and len(out) < 12:
        out.append(s)
        s *= 0.75
    return out


def _exact_size(w_mm: float, h_mm: float, angle: float) -> tuple[float, float]:
    a = float(angle) % 360.0
    if abs(a) < 0.01 or abs(a - 180.0) < 0.01:
        return w_mm, h_mm
    if abs(a - 90.0) < 0.01 or abs(a - 270.0) < 0.01:
        return h_mm, w_mm
    from .geometry import rotated_size
    return rotated_size(w_mm, h_mm, a)


def _commit_offset(ctx, aid, name, pi, ang, scale, mini, rm, dm, off,
                   w_mm: float, h_mm: float) -> bool:
    ty, tx = off
    h, w = dm.shape
    occ = ctx.pages[pi]
    occ[ty:ty + h, tx:tx + w] = np.maximum(occ[ty:ty + h, tx:tx + w],
                                           dm.astype(np.float32))
    occ_sil = ctx.pages_sil[pi]
    occ_sil[ty:ty + h, tx:tx + w] = np.maximum(
        occ_sil[ty:ty + h, tx:tx + w], rm.astype(np.float32))
    # posición = esquina del contenido real (compensando transparencias)
    ys, xs = np.where(rm)
    x_mm = (tx + xs.min()) * ctx.cell + ctx.x0
    y_mm = (ty + ys.min()) * ctx.cell + ctx.y0
    # tamaño EXACTO (no el de la rejilla): escala uniforme + giro
    we, he = _exact_size(w_mm, h_mm, ang)
    ctx.placements.append(Placement(
        uid=f"{aid}#{len(ctx.placements)}", asset_id=aid, page=pi,
        x=x_mm, y=y_mm, w=we, h=he, angle=ang, mini=mini, scale=scale,
        rot90=False, w0=w_mm, h0=h_mm))
    ctx.mask_cells += int(np.count_nonzero(rm))
    return True


def _angulos_unicos(ctx, aid: str, w_mm: float, h_mm: float,
                    img: Image.Image, angles: list[float]) -> list[float]:
    """Quita ángulos que producen la misma máscara (imágenes simétricas).

    Un círculo girado 0/90/180/270 es el mismo: probar los cuatro solo gasta
    tiempo. Si las máscaras coinciden (≤1 % de celdas distintas) se descarta
    el ángulo repetido.
    """
    unicos: list[float] = []
    refs: list[np.ndarray] = []
    for ang in angles:
        try:
            _, dm = ctx.rotated(aid, w_mm, h_mm, ang, img)
        except Exception:
            unicos.append(ang)
            continue
        repetido = False
        for r in refs:
            if r.shape == dm.shape and float(np.mean(r != dm)) < 0.01:
                repetido = True
                break
        if not repetido:
            refs.append(dm)
            unicos.append(ang)
    return unicos


def _cell_para(n_total: int, calidad: str) -> float:
    """Tamaño de celda (mm) de la rejilla de silueta según la calidad pedida.

    exacta  → más fina (mejor encaje, más lento)
    normal  → equilibrio (por defecto)
    rapida  → más gruesa (muy rápido, algo menos fino)
    """
    if calidad == "exacta":
        return 0.15 if n_total <= 40 else (0.25 if n_total <= 120 else 0.35)
    if calidad == "rapida":
        # la semilla solo tiene que COLOCAR TODO rápido: en trabajos grandes
        # una rejilla gruesa es mucho más rápida (la completitud se recupera
        # con una semilla fina extra si hiciera falta)
        return 0.5 if n_total <= 60 else (0.75 if n_total <= 120 else 1.0)
    return 0.25 if n_total <= 90 else (0.35 if n_total <= 250 else 0.5)


MAX_CELDAS = 420_000   # tope de celdas de la rejilla: acota el coste de las FFT


def _celda_ajustada(cell: float, area: CutArea) -> float:
    """Sube la celda (si hace falta) para no pasar de MAX_CELDAS.

    Las correlaciones por FFT cuestan O(N log N) con N = celdas del área. En
    hojas grandes una celda fina dispara el tiempo sin mejorar el encaje; con
    este tope el presupuesto se reparte mejor entre pasadas.
    """
    _, _, bw, bh = area.bbox
    if bw <= 0 or bh <= 0:
        return cell
    n = (bw / cell) * (bh / cell)
    if n > MAX_CELDAS:
        return math.sqrt(bw * bh / MAX_CELDAS)
    return cell


def _rellenar_minis(ctx: _Ctx, assets: list[dict], masks: dict,
                    settings: dict, deadline: float | None = None,
                    progress=None) -> int:
    """Rellena los HUECOS de una colocación ya hecha con minis.

    Se ejecuta UNA vez, sobre el resultado final de las copias: así activar
    los minis no cambia NADA de la colocación normal (mismas hojas, mismas
    posiciones) — los minis solo AÑADEN piezas en lo que sobra. Devuelve
    cuántos minis se colocaron.
    """
    min_mm = float(settings.get("mini_min_mm", 5.0))
    max_res = min(0.99, max(0.01, float(
        settings.get("mini_max_rescale", 100.0))) / 100.0)
    policy = settings.get("mini_tamanos", "grandes")
    usar_lista = bool(settings.get("mini_usar_lista"))
    lista_modo = str(settings.get("mini_lista_modo", "mm"))
    lista_mm = [max(0.5, float(v)) for v in
                (settings.get("mini_tamanos_lista") or [])]
    medida = str(settings.get("mini_lista_medida", "circulo") or "circulo")
    borde_mini = str(settings.get("mini_borde_modo", "proporcional"))
    sin_borde = settings.get("_sin_borde") or {}
    off_glob = settings.get("_offset_global")
    rot_mini = settings.get("mini_rotacion", "90")
    angles_m = _angles_mini(rot_mini)

    cache_mini: dict = {}

    def imagen_mini(a, s_escala):
        """Imagen del mini según el modo de borde elegido (cacheada)."""
        clave_m = (a["id"], round(s_escala, 3), borde_mini)
        if clave_m in cache_mini:
            return cache_mini[clave_m]
        base = sin_borde.get(a["id"])
        propio = float(a.get("offset_mm", 0) or 0)
        mm = propio if propio > 0 else (off_glob[0] if off_glob else 0.0)
        modo_b = (a.get("offset_modo") or (off_glob[1] if off_glob
                  else "extender"))
        color_b = off_glob[2] if off_glob else (255, 255, 255)
        if base is None or mm <= 0 or borde_mini == "proporcional":
            out = (masks[a["id"]], a["w_mm"] * s_escala,
                   a["h_mm"] * s_escala)
            cache_mini[clave_m] = out
            return out
        if borde_mini == "sin":
            out = (base, (a["w_mm"] - 2 * mm) * s_escala,
                   (a["h_mm"] - 2 * mm) * s_escala)
            cache_mini[clave_m] = out
            return out
        # "igual": mismo borde en mm que el original, aunque el mini sea más
        # pequeño: se aplica con radio mm/(escala del mini)
        escala_total = max(0.01, s_escala * (a.get("scale_pct", 100) / 100.0))
        dpi = float(a.get("dpi_origen", 300.0) or 300.0)
        radio = (mm / escala_total) / 25.4 * dpi
        tope = 0.45 * min(base.width, base.height)
        if not (radio > 0) or radio > tope:
            out = (masks[a["id"]], a["w_mm"] * s_escala,
                   a["h_mm"] * s_escala)
            cache_mini[clave_m] = out
            return out
        from .imaging import aplicar_offset
        img = aplicar_offset(base, radio, modo_b, color_b)
        out = (img, img.width / dpi * 25.4 * escala_total,
               img.height / dpi * 25.4 * escala_total)
        cache_mini[clave_m] = out
        return out

    cand = [a for a in assets if a.get("mini_enabled") and a["id"] in masks]
    if not cand:
        return 0
    # los minis son RELLENO: nunca pueden eternizar el trabajo (pero con
    # margen para llenar de verdad: 4 s)
    fin_minis = time.time() + 4.0
    if deadline is not None:
        fin_minis = min(fin_minis, deadline)
    pesos = {a["id"]: min(100.0, max(1.0, float(a.get("mini_quota", 1.0))))
             for a in cand}
    peso_total = sum(pesos.values())
    counts = {a["id"]: 0 for a in cand}
    comunes: dict[str, float] = {}
    viables: dict[str, list[float]] = {}   # tamaños que aún pueden caber
    total = 0
    while total < 800:
        if time.time() > fin_minis:
            break
        # primero el elemento más subrepresentado según su cuota
        cand.sort(key=lambda a: pesos[a["id"]] / peso_total
                  - counts[a["id"]] / (total + 1.0), reverse=True)
        hecho = False
        for a in cand:
            if time.time() > fin_minis:
                break
            img = masks[a["id"]]
            base = max(min(a["w_mm"], a["h_mm"]), 1e-6)
            # con lista activa el mínimo se IGNORA: manda la lista
            s_floor = (1e-6 if usar_lista else min_mm / base)
            if s_floor > max_res:
                continue
            colocado = False
            intentos = viables.get(a["id"])
            if intentos is None:
                propio_a = float(a.get("offset_mm", 0) or 0)
                mm_borde_a = (propio_a if propio_a > 0
                              else (off_glob[0] if off_glob else 0.0))
                escala_lista = _escalas_lista(lista_mm, lista_modo,
                                              a["w_mm"], a["h_mm"], medida,
                                              mm_borde_a, borde_mini)
                intentos = []
                if policy == "iguales" and a["id"] in comunes:
                    intentos.append(comunes[a["id"]])
                for s in _escalas_candidatas(s_floor, max_res, usar_lista,
                                             escala_lista):
                    if s not in intentos:
                        intentos.append(s)
                viables[a["id"]] = intentos
            for s in list(intentos):
                if time.time() > fin_minis:
                    break
                img_m, w_m, h_m = imagen_mini(a, s)
                # la PRIMERA posición válida (mucho más rápido: con la mejor
                # posición se colocaban MUCHOS menos minis)
                if _try_place(ctx, a["id"], a.get("name", ""), w_m, h_m,
                              s, True, img_m, angles_m,
                              new_page_ok=False, first_fit=True):
                    colocado = True
                    comunes.setdefault(a["id"], s)
                    # los tamaños MAYORES ya fallaron: no se vuelven a probar
                    viables[a["id"]] = [x for x in intentos
                                        if x <= s + 1e-9]
                    break
            if not colocado and len(intentos) > 1:
                # los tamaños grandes ya no caben (y el hueco solo encoge):
                # a partir de aquí se prueba directamente el más pequeño
                viables[a["id"]] = intentos[-1:]
            if colocado:
                counts[a["id"]] += 1
                total += 1
                hecho = True
                if progress and total % 3 == 0:
                    progress(0.80, len(ctx.pages))
                break
        if not hecho:
            break
    return total


def _one_pass(assets: list[dict], masks: dict[str, Image.Image], area: CutArea,
              settings: dict, pinned: list[Placement] | None, order: str,
              rnd, progress=None, frac=(0.0, 1.0),
              deadline: float | None = None,
              orden_idx: list[int] | None = None, contacto: bool = True,
              voronoi: bool = False, cache: dict | None = None,
              out_cache: dict | None = None,
              grid_cache: dict | None = None,
              angles_override: list[float] | None = None) -> PackResult:
    """Una pasada constructiva con un orden de inserción dado.

    `orden_idx` permite imponer una permutación explícita (algoritmo genético).
    `contacto=False` usa Bottom-Left puro; `voronoi=True` coloca en el hueco
    libre más grande.
    """
    # presupuesto agotado: mejor devolver vacío que hacer esperar
    if deadline is not None and time.time() > deadline:
        return PackResult(method="silueta")
    # rejilla adaptativa: más gruesa cuantos más objetos (mantiene la rapidez)
    n_total = sum(int(a.get("copies", 1)) for a in assets) + len(pinned or [])
    cell = _celda_ajustada(
        _cell_para(n_total, str(settings.get("opt_calidad", "normal"))), area)
    if settings.get("web_inline_jobs"):
        # en el navegador (Pyodide) cada FFT cuesta ~20x más: rejilla gruesa
        cell = max(cell, 1.0)
    ctx = _Ctx(area, settings, cell=cell)
    # cachés compartidas: las máscaras y correlaciones se calculan UNA vez
    if cache is not None:
        ctx.cache = cache
    if out_cache is not None:
        ctx.out_cache = out_cache
    if grid_cache is not None:
        k = (round(area.bbox[0], 3), round(area.bbox[1], 3),
             round(area.bbox[2], 3), round(area.bbox[3], 3), cell)
        if k not in grid_cache:
            grid_cache[k] = (ctx.allowed, ctx.W, ctx.H)
        ctx.allowed, ctx.W, ctx.H = grid_cache[k]
    result = PackResult(method="silueta", cell=cell)
    by_id = {a["id"]: a for a in assets}
    # Si solo hay minis (elementos con 0 copias normales), hay que abrir ya la
    # primera hoja: sin ella los minis no tendrían dónde colocarse (bug real)
    rot_norm = settings.get("rotacion", "90")
    rot_mini = settings.get("mini_rotacion", "90")

    # 1) fijados: ocupan SU sitio (respetando la página); el resto se
    #    optimiza a su alrededor
    for p in (pinned or []):
        if not p.pinned:
            continue
        a = by_id.get(p.asset_id)
        img = masks.get(p.asset_id)
        if a is None or img is None:
            continue
        while len(ctx.pages) <= max(0, p.page):
            ctx.new_page()
        pi = max(0, p.page)
        esc = float(p.scale or 1.0)
        rm, dm = ctx.rotated(p.asset_id, a["w_mm"] * esc, a["h_mm"] * esc,
                             p.angle, img)
        ty = int(round((p.y - ctx.y0) / ctx.cell))
        tx = int(round((p.x - ctx.x0) / ctx.cell))
        h, w = dm.shape
        occ = ctx.pages[pi]
        if 0 <= ty and 0 <= tx and ty + h <= ctx.H and tx + w <= ctx.W:
            occ[ty:ty + h, tx:tx + w] = np.maximum(
                occ[ty:ty + h, tx:tx + w], dm.astype(np.float32))
            occ_sil = ctx.pages_sil[pi]
            occ_sil[ty:ty + h, tx:tx + w] = np.maximum(
                occ_sil[ty:ty + h, tx:tx + w], rm.astype(np.float32))
            ctx.mask_cells += int(np.count_nonzero(rm))
        we, he = _exact_size(a["w_mm"] * esc, a["h_mm"] * esc, p.angle)
        ctx.placements.append(Placement(
            uid=p.uid, asset_id=p.asset_id, page=pi, x=p.x, y=p.y,
            w=we, h=he, angle=p.angle, mini=p.mini, scale=p.scale,
            pinned=True, rot90=False, w0=p.w0 or a["w_mm"] * esc,
            h0=p.h0 or a["h_mm"] * esc))

    # 2) copias normales (todas menos las ya fijadas)
    from collections import Counter
    fijadas = Counter(p.asset_id for p in (pinned or []) if p.pinned)
    inst: list[tuple[float, dict]] = []
    for a in assets:
        copies = int(a.get("copies", 1)) - int(fijadas.get(a["id"], 0))
        if copies <= 0 or a["id"] not in masks:
            continue
        area_mm = a["w_mm"] * a["h_mm"]
        inst += [(area_mm, a)] * copies
    if order == "area":
        inst.sort(key=lambda t: t[0], reverse=True)
    elif order == "alto":
        inst.sort(key=lambda t: max(t[1]["w_mm"], t[1]["h_mm"]), reverse=True)
    elif order == "ancho":
        inst.sort(key=lambda t: min(t[1]["w_mm"], t[1]["h_mm"]), reverse=True)
    else:
        rnd.shuffle(inst)
    if orden_idx is not None and len(orden_idx) == len(inst):
        inst = [inst[i] for i in orden_idx]

    unplaced: list[str] = []
    angles_n = list(angles_override) if angles_override else _angles(rot_norm)
    angulos_fijos = settings.get("_angulos_por_asset") or {}
    angulos_cache: dict[str, list[float]] = {}
    # la rejilla de progreso de esta pasada: 85% para las copias y 15% para
    # los minis (que rellenan después); así la barra avanza SIEMPRE
    p_lo, p_hi = frac
    p_med = p_lo + (p_hi - p_lo) * 0.85
    if progress:
        progress(p_lo, len(ctx.pages))
    for k, (_, a) in enumerate(inst):
        if deadline is not None and time.time() > deadline:
            # presupuesto agotado: el resto queda sin colocar (mejor parcial)
            unplaced += [x["id"] for _, x in inst[k:]]
            break
        if a["id"] not in angulos_cache:
            angs = angulos_fijos.get(a["id"]) or angles_n
            angulos_cache[a["id"]] = _angulos_unicos(
                ctx, a["id"], a["w_mm"], a["h_mm"], masks[a["id"]], angs)
        ok = _try_place(ctx, a["id"], a.get("name", ""), a["w_mm"], a["h_mm"],
                        1.0, False, masks[a["id"]],
                        angulos_cache[a["id"]], new_page_ok=True,
                        contacto=contacto, voronoi=voronoi)
        if not ok:
            unplaced.append(a["id"])
        if progress and (k % 4 == 0 or k == len(inst) - 1):
            progress(p_lo + (p_med - p_lo) * (k + 1) / max(1, len(inst)),
                     len(ctx.pages))
    if progress:
        progress(p_med, len(ctx.pages))

    # 3) minis: rellenan huecos (no cuentan como copias; dan eficiencia y
    #    pegatinas extra). La cuota de cada elemento decide CUÁNTOS minis
    #    recibe respecto a los demás (1 = equitativo; 3 = el triple) y el
    #    TAMAÑO lo elige el optimizador (siempre menor que el original).
    # compacidad: área del bbox ocupado en cada página (desempate de calidad)
    comp = 0.0
    for occ in ctx.pages:
        filas = np.any(occ > 0, axis=1)
        cols = np.any(occ > 0, axis=0)
        if filas.any():
            r0, r1 = int(np.where(filas)[0][0]), int(np.where(filas)[0][-1])
            c0, c1 = int(np.where(cols)[0][0]), int(np.where(cols)[0][-1])
            comp += ((r1 - r0 + 1) * (c1 - c0 + 1)
                     * ctx.cell * ctx.cell)
    result.compacidad = comp

    result.placements = ctx.placements
    result.pages = max(1, len(ctx.pages)) if ctx.pages else 0
    result.unplaced = unplaced
    page_area = ctx.cell * ctx.cell * float(np.count_nonzero(ctx.allowed))
    used = page_area * max(1, len(ctx.pages))
    sil_area = ctx.mask_cells * ctx.cell * ctx.cell
    result.efficiency = min(1.0, sil_area / used) if used > 0 else 0.0
    # densidad media de las siluetas colocadas (1 = lleno, 0.5 = formas finas):
    # sirve para juzgar la eficiencia según la complejidad de las piezas
    if ctx.placements and ctx.mask_cells:
        area_caja = sum(p.w * p.h for p in ctx.placements) or 1.0
        result.densidad = min(1.0, max(0.05, sil_area / area_caja))
    if unplaced:
        result.warnings.append(
            tr("{n} copias no caben en el área recortable", n=len(unplaced)))
    return result


def _clave_estanca(res: PackResult) -> tuple:
    """Clave para detectar ESTANCAMIENTO (sin compacidad, que casi siempre
    cambia y haría creer que cada pasada mejora)."""
    return (len(res.unplaced), max(0, res.pages), round(res.efficiency, 4))


def _clave(res: PackResult) -> tuple:
    """Orden de calidad de un resultado: primero los VÁLIDOS (con páginas),
    luego menos sin colocar, menos páginas, más eficiencia y, a igualdad,
    la colocación más RECOGIDA (bbox ocupado menor).

    La compacidad importa porque con el mismo número de piezas en la misma
    página la eficiencia es idéntica: sin este desempate, cualquier
    colocación válida valdría igual y el resultado podía quedar desparramado.
    """
    vacio = 0 if res.pages > 0 else 1
    return (vacio, len(res.unplaced), max(0, res.pages), -res.efficiency,
            res.compacidad)


def _cruce_orden(a: list[int], b: list[int], rnd) -> list[int]:
    """Cruce de orden (OX) para el algoritmo genético."""
    n = len(a)
    if n < 2:
        return list(a)
    i, j = sorted(rnd.sample(range(n), 2))
    hijo: list[int | None] = [None] * n
    hijo[i:j] = a[i:j]
    resto = [x for x in b if x not in hijo]
    k = 0
    for t in range(n):
        if hijo[t] is None:
            hijo[t] = resto[k]
            k += 1
    return [int(x) for x in hijo]


def _pase_genetico(assets: list[dict], masks: dict[str, Image.Image],
                   area: CutArea, settings: dict,
                   pinned: list[Placement] | None, deadline: float,
                   progress=None,
                   masks_reales: dict | None = None) -> PackResult | None:
    """Algoritmo GENÉTICO sobre el orden de inserción.

    Cada individuo es un orden de colocación; se evalúa con el colocador por
    silueta y se evoluciona (élite + cruce OX + mutación) hasta agotar el
    tiempo. Es el método más lento pero el que mejor aprovecha la hoja.
    """
    import random as _random
    rnd = _random.Random(20260925)
    n = sum(int(a.get("copies", 1)) for a in assets
            if a["id"] in masks and int(a.get("copies", 1)) > 0)
    if n <= 0:
        return None

    # La POBLACIÓN se evalúa en rejilla gruesa (rápida): el orden de inserción
    # importa más que el milímetro exacto. Al final, el mejor orden se
    # reevalúa con la calidad pedida y solo se cambia si mejora de verdad.
    ajustes_rapidos = dict(settings)
    ajustes_rapidos["opt_calidad"] = "rapida"

    def evaluar(perm: list[int], st: dict) -> PackResult:
        return _one_pass(assets, masks, area, st, pinned, "area", rnd,
                         None, (0.05, 0.95), deadline=deadline,
                         orden_idx=perm)

    clave = _clave

    poblacion: list[list[int]] = [list(range(n)),
                                  list(range(n - 1, -1, -1))]
    while len(poblacion) < 8:
        q = list(range(n))
        rnd.shuffle(q)
        poblacion.append(q)

    mejores: list[tuple] = []
    sin_mejora = 0
    for generacion in range(60):
        if time.time() > deadline and mejores:
            break
        if sin_mejora >= 4:
            break                # estancado: no gastar el presupuesto entero
        resultados = []
        for perm in poblacion:
            r = evaluar(perm, ajustes_rapidos)
            resultados.append((clave(r), tuple(perm), r))
        resultados.sort(key=lambda t: t[0])
        anterior = (_clave_estanca(mejores[0][2]) if mejores else None)
        mejores = resultados[:4]
        sin_mejora = 0 if (anterior is None
                           or _clave_estanca(mejores[0][2]) < anterior) \
            else sin_mejora + 1
        if progress:
            progress(min(0.80, 0.30 + 0.50 * (generacion + 1) / 12.0),
                     mejores[0][2].pages)
        if not mejores[0][2].unplaced and mejores[0][2].pages == 1:
            break                               # objetivo cumplido
        nueva = [list(t[1]) for t in mejores]
        while len(nueva) < len(poblacion):
            a = list(rnd.choice(mejores)[1])
            b = list(rnd.choice(mejores)[1])
            hijo = _cruce_orden(a, b, rnd)
            if rnd.random() < 0.6 and n > 1:
                i, j = rnd.sample(range(n), 2)
                hijo[i], hijo[j] = hijo[j], hijo[i]
            nueva.append(hijo)
        poblacion = nueva
    if not mejores:
        return None
    # refino final con la calidad REAL: si mejora, se devuelve; si no, el
    # resultado grueso (que ya es válido y completo)
    if time.time() < deadline:
        fino = evaluar(list(mejores[0][1]), settings)
        _recalcular_eficiencia(fino, masks_reales or masks, area, assets)
        _recalcular_eficiencia(mejores[0][2], masks_reales or masks, area,
                               assets)
        if clave(fino) < clave(mejores[0][2]):
            return fino
    return mejores[0][2]


def _sin_solapes(res: PackResult, assets: list[dict],
                 masks: dict[str, Image.Image], area: CutArea,
                 settings: dict, extra: dict,
                 cell_hint: float | None = None) -> PackResult:
    """RED DE SEGURIDAD: garantiza que ninguna pieza solape a otra.

    Reconstruye la rejilla fina con las máscaras REALES y revalida cada
    colocación contra las anteriores. Si alguna solapara (por cualquier
    motivo: redondeos, celdas, bordes…), se recoloca con el colocador normal
    y, si no cabe en ninguna hoja, se le abre una NUEVA hoja para ella sola
    (una pieza sin compañía nunca puede solapar). Así el resultado SIEMPRE
    cumple: nada fuera del área, nada solapado y nada sin colocar.

    REGLA DE LOS MINIS: se validan DESPUÉS de todas las copias normales y,
    si un mini no cabe sin abrir una hoja nueva, se DESCARTA. Los minis son
    relleno: nunca pueden quitar una copia de su página ni añadir páginas.

    `cell_hint`: si las colocaciones se hicieron en una rejilla más gruesa,
    se valida con ESA rejilla (mismo criterio) para no "corregir" piezas que
    solo difieren por el redondeo de la rejilla (eso movía piezas sin motivo).
    """
    por_id = {a["id"]: a for a in assets}
    # MULTINIVEL mínimo: el cálculo va con su celda, la VALIDACIÓN de
    # contactos a 0,25 mm (media resolución de salida)
    if cell_hint and cell_hint > 0:
        cell = min(0.5, max(0.25, float(cell_hint)))
    elif res.cell:
        # misma rejilla con la que se calculó: mismo criterio (sin falsos
        # positivos por redondeo al revalidar en una rejilla más fina)
        cell = min(0.5, max(0.25, float(res.cell)))
    else:
        cell = min(0.25, _cell_para(len(res.placements) or 1,
                                    str(settings.get("opt_calidad", "normal"))))
    ctx = _Ctx(area, settings, cell=cell)
    ctx.cache = extra.get("cache", {})
    ctx.out_cache = extra.get("out_cache", {})
    ctx.new_page()
    movidas = 0
    descartados = 0
    conservadas: list[Placement] = []
    # primero TODAS las copias normales y luego los minis: así un mini nunca
    # puede desplazar a una copia (los minis solo rellenan lo que sobra)
    for p in sorted(res.placements,
                    key=lambda q: (bool(q.mini), q.page, q.y, q.x)):
        a = por_id.get(p.asset_id)
        img = masks.get(p.asset_id)
        if a is None or img is None:
            continue
        while len(ctx.pages) <= p.page:
            ctx.new_page()
        # ¿cabe donde está, sin tocar lo ya validado? (los minis, a escala)
        esc = float(p.scale or 1.0)
        rm, dm = ctx.rotated(p.asset_id, a["w_mm"] * esc, a["h_mm"] * esc,
                             p.angle, img)
        h, w = dm.shape
        # OJO: la máscara lleva relleno (pad), así que hay que descontar el
        # desplazamiento del CONTENIDO dentro del array. Sin esto la red
        # comparaba celdas equivocadas y no veía los solapes (bug).
        ys_rm, xs_rm = np.where(rm)
        if len(ys_rm) == 0:
            continue
        oy_rm, ox_rm = int(ys_rm.min()), int(xs_rm.min())
        ty = int(round((p.y - ctx.y0) / cell)) - oy_rm
        tx = int(round((p.x - ctx.x0) / cell)) - ox_rm
        ok = (0 <= ty and 0 <= tx and ty + h <= ctx.H and tx + w <= ctx.W)
        if ok:
            occ = ctx.pages[p.page]
            oc = ctx.out_corr(dm)
            ok = (float(oc[ty, tx]) < 0.5 and
                  int(np.count_nonzero((occ[ty:ty + h, tx:tx + w] > 0) & dm)) == 0)
        if not ok:
            # recolocar en el primer hueco válido de las hojas que ya hay
            colocado = False
            for pi in range(len(ctx.pages)):
                got = ctx.best_for(pi, dm, rm)
                if got is None:
                    continue
                off, _score = got
                pi_ok = pi
                colocado = True
                break
            if not colocado and p.mini:
                # un mini que no cabe sin hoja nueva se DESCARTA (es relleno)
                descartados += 1
                continue
            if not colocado:
                # una copia normal: última red, hoja nueva para ella sola
                pi_ok = ctx.new_page()
                got = ctx.best_for(pi_ok, dm, rm)
                if got is None:
                    continue
                off, _score = got
            ty, tx = off
            p.page = pi_ok
            p.x = (tx + ox_rm) * cell + ctx.x0
            p.y = (ty + oy_rm) * cell + ctx.y0
            movidas += 1
        occ = ctx.pages[p.page]
        occ[ty:ty + h, tx:tx + w] = np.maximum(occ[ty:ty + h, tx:tx + w],
                                               dm.astype(np.float32))
        occ_sil = ctx.pages_sil[p.page]
        occ_sil[ty:ty + h, tx:tx + w] = np.maximum(
            occ_sil[ty:ty + h, tx:tx + w], rm.astype(np.float32))
        conservadas.append(p)
    if descartados:
        res.placements = conservadas
    if movidas:
        res.warnings.append(
            tr("se recolocaron {n} piezas para garantizar que no haya solapes",
               n=movidas))
    res.pages = max(1, len(ctx.pages))
    return res


def pack(assets: list[dict], masks: dict[str, Image.Image], area: CutArea,
         settings: dict, pinned: list[Placement] | None = None,
         progress=None, presupuesto_s: float | None = None) -> PackResult:
    """Empaqueta por silueta eligiendo método de optimización.

    Métodos (ajuste `opt_metodo`):
      * greedy   – Bottom-Left voraz con contacto y varias órdenes (rápido)
      * largest  – Largest First (mayor primero, una pasada)
      * voronoi  – coloca en el mayor hueco libre (Voronoi del espacio libre)
      * genetic  – algoritmo genético del orden de inserción (mejor calidad)

    Todos usan SIEMPRE la silueta real y prueban los ángulos permitidos.
    `presupuesto_s` permite acotar el tiempo (p. ej. cuando ya se gastó parte
    del presupuesto en un intento previo por cajas).
    """
    import random as _random
    from .config import tiempo_optimo

    # MODO CHAPAS (redondas): las piezas son círculos y el ángulo da igual.
    # Se empaqueta con máscaras SINTÉTICAS de círculo (exacto y rápido) y se
    # fuerza ángulo 0; la validación final usa las siluetas REALES.
    masks_reales = masks
    angulos_por_asset: dict[str, list[float]] = {}
    forma_piezas = str(settings.get("modo_forma", "siluetas"))
    if forma_piezas == "redondas" and masks:
        masks = _mascaras_redondas(assets, masks)
        settings = dict(settings, rotacion="no", mini_rotacion="no")
    elif forma_piezas == "siluetas" and masks:
        # SILUETAS SIMPLES (círculo / rectángulo aunque sea redondeado /
        # triángulo): se empaquetan con su forma ANALÍTICA y menos ángulos;
        # así encajan mucho mejor (a veces una página menos) sin solapes,
        # porque la red final valida con el alfa REAL.
        try:
            masks, angulos_por_asset = _simplificar_simples(
                assets, masks,
                umbral=float(settings.get("simplificar_threshold", 0.96)),
                max_vertices=int(settings.get("simplificar_max_vertices",
                                              12) or 12))
        except Exception:
            masks, angulos_por_asset = masks_reales, {}
    if angulos_por_asset:
        settings = dict(settings, _angulos_por_asset=angulos_por_asset)
    settings = dict(settings, _masks_reales=masks_reales)

    def _rellenar_si_toca(res: PackResult) -> PackResult:
        """Rellena huecos con minis DESPUÉS de cerrar la colocación normal.

        Así activar los minis no cambia NADA de las copias (mismas hojas y
        posiciones): los minis solo AÑADEN piezas en lo que sobra.
        """
        if not settings.get("usar_minis") or res.unplaced or not res.placements:
            return res
        try:
            # celda media para los minis (0,5 mm): llenar huecos no necesita
            # precisión de décimas y así caben más intentos por segundo (con
            # la celda del refinado se quedaba en muy pocos minis)
            celda_mini = max(0.5, res.cell or 0.5)
            ctx_mini = _reconstruir(assets, masks, area, settings,
                                    res.placements, celda_mini)
            n0 = len(ctx_mini.placements)
            if progress:
                progress(0.86, res.pages)
            _rellenar_minis(ctx_mini, assets, masks, settings,
                            deadline=time.time() + 4.0, progress=progress)
            nuevos = ctx_mini.placements[n0:]
            if nuevos:
                res.placements.extend(nuevos)
                _recalcular_eficiencia(res, masks_reales, area, assets)
        except Exception:
            pass
        return res

    t0 = time.time()
    n_prev = sum(max(0, int(a.get("copies", 1))) for a in assets) + \
        len(pinned or [])
    if presupuesto_s is not None:
        t_max = max(0.5, float(presupuesto_s))
    else:
        t_max = max(0.5, tiempo_optimo(settings, n_prev))
    metodo = str(settings.get("opt_metodo", "auto")).lower()
    # compatibilidad con los nombres antiguos
    if metodo in ("silueta_rapido", "silueta", "maxrects", "skyline"):
        metodo = "greedy"
    elif metodo == "silueta_optimo":
        metodo = "genetic"
    # AUTOMÁTICO: se elige según el ESPACIO DISPONIBLE. Si sobra sitio, la
    # pasada rápida de silueta basta (instantánea); si se va llenando, greedy
    # con contacto; y si está muy lleno, voronoi (aprovecha los huecos).
    if metodo == "auto":
        total = 0.0
        for a in assets:
            n = max(0, int(a.get("copies", 1)))
            extra = 3 if (a.get("mini_enabled")
                          and settings.get("usar_minis")) else 0
            total += a["w_mm"] * a["h_mm"] * max(0, n + extra)
        ratio = total / max(1.0, area.area_mm2)
        # NUNCA se devuelve solo la semilla: los trabajos holgados también se
        # refinan (greedy con el presupuesto restante). Antes se quedaba en la
        # semilla, que fuerza 0/90 y sin contacto → eficiencia mínima y sin
        # girar. Ese era el bug.
        metodo = "greedy" if ratio < 0.85 else "voronoi"
    deadline = t0 + t_max
    rnd = _random.Random(20260925)
    n_total = sum(int(a.get("copies", 1)) for a in assets) + len(pinned or [])
    # La PRIMERA pasada completa SIEMPRE (colocar es barato): el presupuesto
    # solo limita la búsqueda de una colocación MEJOR, nunca deja piezas sin
    # colocar por tiempo. Así el resultado siempre es válido y completo.
    deadline_1 = deadline

    # cachés compartidas por TODAS las pasadas (máscaras, correlaciones y
    # rejilla de área): es la mayor ganancia de velocidad sin tocar nada más
    cache_compartida: dict = {}
    out_compartida: dict = {}
    grid_compartida: dict = {}
    extra = dict(cache=cache_compartida, out_cache=out_compartida,
                 grid_cache=grid_compartida)

    # 0) SEMILLA rápida y COMPLETA: celda gruesa, sin contacto y ángulos
    #    básicos. Coloca TODO en muy poco tiempo y garantiza que nunca queden
    #    copias sin colocar; las pasadas finas de después solo pueden mejorar.
    semilla = dict(settings)
    semilla["opt_calidad"] = "rapida"
    # la semilla usa la MISMA rotación que se ha pedido (libre = todos los
    # ángulos); antes la forzaba a 90 y se perdían los giros
    t_seed = time.time()
    best = _one_pass(assets, masks, area, semilla, pinned, "area", rnd,
                     progress, (0.02, 0.30), deadline=None, contacto=False,
                     angles_override=_angles_semilla(
                         str(settings.get("rotacion", "90"))),
                     **extra)
    t_seed = max(0.02, time.time() - t_seed)
    # eficiencia JUSTA (a resolución de las máscaras, no de la rejilla): así
    # se pueden comparar resultados calculados con celdas distintas
    _recalcular_eficiencia(best, masks_reales, area, assets)
    if best.unplaced:
        # la semilla reducida no bastó (giros finos): segunda pasada completa
        # con TODOS los ángulos permitidos (misma rejilla gruesa, rápida)
        alt = _one_pass(assets, masks, area, semilla, pinned, "area", rnd,
                        progress, (0.02, 0.30), deadline=None, contacto=False,
                        **extra)
        _recalcular_eficiencia(alt, masks_reales, area, assets)
        if _clave(alt) < _clave(best):
            best = alt
    if best.unplaced:
        # COMPLETITUD: si con la rejilla gruesa no cabe todo (casos muy
        # apretados), una pasada fina SIN límite lo intenta de verdad
        fino = dict(settings, opt_calidad="normal")
        alt3 = _one_pass(assets, masks, area, fino, pinned, "area", rnd,
                         progress, (0.02, 0.30), deadline=None, contacto=False,
                         **extra)
        _recalcular_eficiencia(alt3, masks_reales, area, assets)
        if _clave(alt3) < _clave(best):
            best = alt3
    if best.pages > 1 and str(settings.get("rotacion", "90")) == "libre":
        # los giros RECTOS suelen necesitar menos hojas que los libres: una
        # segunda semilla con 0/90/180/270 evita perder una página por probar
        # solo ángulos intermedios
        alt2 = _one_pass(assets, masks, area, semilla, pinned, "area", rnd,
                         progress, (0.02, 0.30), deadline=None, contacto=False,
                         angles_override=[0.0, 90.0, 180.0, 270.0], **extra)
        _recalcular_eficiencia(alt2, masks_reales, area, assets)
        if _clave(alt2) < _clave(best):
            best = alt2

    if metodo == "rapido":
        # la semilla (celda gruesa, completa) ya es válida y rapidísima
        best.method = "rapido"
        best.elapsed_s = time.time() - t0
        return best

    # ---- CAMINO RÁPIDO: trabajo HOLGADO (todo cabe en una hoja) ----------
    # Si la semilla ya coloca TODO en una sola página, no tiene sentido gastar
    # el presupuesto entero: un refino ACOTADO y se devuelve. Así los trabajos
    # fáciles responden en 2-3 s (antes agotaban el tope aunque sobrara sitio).
    if (metodo in ("auto", "greedy", "largest", "voronoi")
            and not best.unplaced and best.pages <= 1):
        # variantes RÁPIDAS en paralelo (misma rejilla gruesa, otras órdenes):
        # dan una base mejor sin gastar presupuesto. En modo libre se añade
        # una variante con los giros rectos, que suele quedar más recogida.
        # Con minis NO se hacen (cada pasada ya es cara) y con semillas lentas
        # tampoco: en esos casos manda la rapidez (el presupuesto es corto).
        if t_seed < 0.9 and time.time() < deadline - 0.5:
            if progress:
                progress(0.33, best.pages)
            try:
                from concurrent.futures import (ThreadPoolExecutor,
                                                as_completed)
                import random as _r
                import os as _os
                sem_ang = _angles_semilla(str(settings.get("rotacion", "90")))
                variantes: list[tuple[str, list[float] | None]] = [
                    ("alto", sem_ang), ("ancho", sem_ang)]
                if str(settings.get("rotacion", "90")) == "libre":
                    # los giros rectos suelen dejar la colocación más recogida
                    variantes.append(("area", [0.0, 90.0, 180.0, 270.0]))
                n_hilos = max(2, min(6, (_os.cpu_count() or 4)))
                fin_var = min(deadline, time.time() + 1.5)
                with ThreadPoolExecutor(max_workers=n_hilos) as ex:
                    futuros = [
                        ex.submit(_one_pass, assets, masks, area, semilla,
                                  pinned, o, _r.Random(777 + i), None,
                                  (0.30, 0.45), fin_var, None, False, False,
                                  cache_compartida, out_compartida,
                                  grid_compartida, ang)
                        for i, (o, ang) in enumerate(variantes)]
                    for f in as_completed(futuros):
                        try:
                            res = f.result()
                        except Exception:
                            continue
                        _recalcular_eficiencia(res, masks_reales, area, assets)
                        if (res.placements and not res.unplaced
                                and res.pages <= best.pages
                                and _clave(res) < _clave(best)):
                            best = res
            except Exception:
                pass
        if progress:
            progress(0.45, best.pages)
        cell_sem = _celda_ajustada(
            _cell_para(n_total, "rapida"), area)
        cell_fin = _celda_ajustada(
            _cell_para(n_total, str(settings.get("opt_calidad", "normal"))),
            area)
        # estimación del coste del refino (la rejilla fina cuesta ~(c1/c2)²)
        coste = t_seed * (cell_sem / cell_fin) ** 2
        if time.time() + coste <= min(deadline, time.time() + 1.2):
            ref = _one_pass(assets, masks, area, settings, pinned, "area",
                            rnd, progress, (0.45, 0.78),
                            deadline=min(deadline, time.time() + 1.2), **extra)
            _recalcular_eficiencia(ref, masks_reales, area, assets)
            if (ref.placements and not ref.unplaced and ref.pages <= best.pages
                    and _clave(ref) < _clave(best)):
                best = ref
        elif progress:
            progress(0.60, best.pages)   # refino omitido: la barra no se para
        if best.placements and not pinned and time.time() < deadline:
            try:
                if progress:
                    progress(0.82, best.pages)
                if compactar(assets, masks, area, settings, best.placements,
                             cell_fin, deadline=min(deadline,
                                                    time.time() + 0.5)):
                    _recalcular_eficiencia(best, masks_reales, area, assets)
            except Exception:
                pass
        best = _rellenar_si_toca(best)
        try:
            if progress:
                progress(0.94, best.pages)
            best = _sin_solapes(best, assets, masks_reales, area,
                                settings, extra)
        except Exception:
            pass
        if progress:
            progress(0.99, best.pages)
        best.method = metodo
        best.elapsed_s = time.time() - t0
        return best

    if metodo == "largest":
        res_l = _one_pass(assets, masks, area, settings, pinned, "area", rnd,
                          progress, (0.30, 0.80), deadline=deadline_1,
                          contacto=False, **extra)
        _recalcular_eficiencia(res_l, masks_reales, area, assets)
        if _clave(res_l) < _clave(best):
            best = res_l
    elif metodo == "voronoi":
        res_v = _one_pass(assets, masks, area, settings, pinned, "area", rnd,
                          progress, (0.30, 0.80), deadline=deadline_1,
                          voronoi=True, **extra)
        _recalcular_eficiencia(res_v, masks_reales, area, assets)
        if _clave(res_v) < _clave(best):
            best = res_v
    elif metodo == "genetic":
        # NUNCA peor que la semilla: si el genético se queda sin tiempo a
        # medias (o deja piezas fuera), gana la semilla, que es completa
        res_gen = _pase_genetico(assets, masks, area, settings, pinned,
                                 deadline, progress,
                                 masks_reales=masks_reales)
        if res_gen is not None:
            _recalcular_eficiencia(res_gen, masks_reales, area, assets)
            if _clave(res_gen) < _clave(best):
                best = res_gen
    else:  # greedy: Largest First como solución inicial + multi-arranque paralelo
        # ENFOQUE SEGÚN EL NÚMERO DE ELEMENTOS: en trabajos grandes (o con
        # semilla lenta) la rejilla fina tarda demasiado por pasada, así que
        # se hacen MUCHAS pasadas GRUESAS en paralelo (más intentos, mejor
        # resultado y menos tiempo). En trabajos pequeños se afina como siempre.
        lento = n_total > 50 or t_seed > 1.0
        ajustes_pase = semilla if lento else settings
        if not lento:
            res_g = _one_pass(assets, masks, area, settings, pinned, "area",
                              rnd, progress, (0.30, 0.55),
                              deadline=deadline_1, **extra)
            _recalcular_eficiencia(res_g, masks_reales, area, assets)
            if _clave(res_g) < _clave(best):
                best = res_g
        if (not (not best.unplaced and best.pages == 1)
                and time.time() < deadline):
            ordenes = ["alto", "ancho"] + \
                [f"random{i}" for i in range(1, 9)]
            try:
                from concurrent.futures import (ThreadPoolExecutor,
                                                as_completed)
                import random as _r
                import os as _os
                n_hilos = max(2, min(8, (_os.cpu_count() or 4)))
                ex = ThreadPoolExecutor(max_workers=n_hilos)
                futuros = {
                    ex.submit(_one_pass, assets, masks, area, ajustes_pase,
                              pinned, o, _r.Random(20260925 + i), None,
                              (0.55, 0.80), deadline, None, contacto,
                              voronoi, cache_compartida, out_compartida,
                              grid_compartida): o
                    for i, o in enumerate(ordenes)
                }
                sin_mejora = 0
                for f in as_completed(futuros):
                    try:
                        res = f.result()
                    except Exception:
                        continue
                    _recalcular_eficiencia(res, masks_reales, area, assets)
                    if _clave(res) < _clave(best):
                        best = res
                    if _clave_estanca(res) < _clave_estanca(best):
                        sin_mejora = 0
                    else:
                        sin_mejora += 1
                    if not best.unplaced and best.pages == 1:
                        break            # objetivo cumplido: una hoja
                    # ESTANCAMIENTO: si varias pasadas seguidas no mejoran,
                    # seguir es tirar tiempo (el resultado ya no cambia)
                    if sin_mejora >= 6:
                        break
                    if time.time() > deadline:
                        break
                ex.shutdown(wait=False, cancel_futures=True)
            except Exception:
                pass
            if progress:
                try:
                    progress(0.95, best.pages)
                except Exception:
                    pass

    assert best is not None
    # fase de compactación (estilo DeepNest): acerca cada pieza al borde,
    # pero SOLO con el tiempo que quede (nunca se pasa del presupuesto)
    if progress:
        progress(0.82, best.pages)
    if best.placements and not pinned:
        fin = min(deadline, time.time() + 1.5)
        if time.time() < fin:
            try:
                cell = _celda_ajustada(
                    _cell_para(n_total,
                               str(settings.get("opt_calidad", "normal"))),
                    area)
                if compactar(assets, masks, area, settings, best.placements,
                             cell, deadline=fin):
                    _recalcular_eficiencia(best, masks_reales, area, assets)
            except Exception:
                pass
    best = _rellenar_si_toca(best)
    # RED DE SEGURIDAD final: nada solapado, pase lo que pase
    if progress:
        progress(0.93, best.pages)
    try:
        best = _sin_solapes(best, assets, masks_reales, area, settings,
                            extra)
    except Exception:
        pass
    if progress:
        progress(0.99, best.pages)
    best.method = metodo
    best.elapsed_s = time.time() - t0
    return best

def _reconstruir(assets: list[dict], masks: dict, area: CutArea, settings: dict,
                 placements: list, cell: float, saltar: str | None = None):
    """Contexto con las colocaciones dadas (menos la que se salte).

    Se usa para COMPACTAR (estilo DeepNest): quitar una pieza y volver a
    colocarla en su mejor posición válida sobre el resto.
    """
    ctx = _Ctx(area, settings, cell=cell)
    by_id = {a["id"]: a for a in assets}
    for p in placements:
        if saltar is not None and p.uid == saltar:
            continue
        a = by_id.get(p.asset_id)
        img = masks.get(p.asset_id)
        if a is None or img is None:
            continue
        while len(ctx.pages) <= max(0, p.page):
            ctx.new_page()
        pi = max(0, p.page)
        esc = float(p.scale or 1.0)
        rm, dm = ctx.rotated(p.asset_id, a["w_mm"] * esc, a["h_mm"] * esc,
                             p.angle, img)
        ty = int(round((p.y - ctx.y0) / cell)) - _offset_rm(rm)
        tx = int(round((p.x - ctx.x0) / cell)) - _offset_rm(rm, True)
        h, w = dm.shape
        if 0 <= ty and 0 <= tx and ty + h <= ctx.H and tx + w <= ctx.W:
            occ = ctx.pages[pi]
            occ[ty:ty + h, tx:tx + w] = np.maximum(
                occ[ty:ty + h, tx:tx + w], dm.astype(np.float32))
            occ_sil = ctx.pages_sil[pi]
            occ_sil[ty:ty + h, tx:tx + w] = np.maximum(
                occ_sil[ty:ty + h, tx:tx + w], rm.astype(np.float32))
        ctx.placements.append(p)
    if not ctx.pages:
        ctx.new_page()
    return ctx


def _offset_rm(rm: np.ndarray, x: bool = False) -> int:
    """Desplazamiento del contenido dentro de la máscara (por el relleno)."""
    idx = np.where(rm.any(axis=0 if x else 1))[0]
    return int(idx.min()) if len(idx) else 0


def compactar(assets: list[dict], masks: dict, area: CutArea, settings: dict,
              placements: list, cell: float,
              deadline: float | None = None, rondas: int = 2) -> bool:
    """Compacta la colocación moviendo cada pieza a su hueco más bajo.

    Recorre las piezas de abajo arriba, las quita y las vuelve a colocar con
    Bottom-Left + contacto. Es la fase de mejora local que usa DeepNest.
    Devuelve True si hubo algún movimiento.
    """
    by_id = {a["id"]: a for a in assets}
    rot = settings.get("rotacion", "90")
    hubo = False
    for _ in range(rondas):
        mejoro = False
        for p in sorted(placements, key=lambda q: (-q.y, q.x)):
            if deadline is not None and time.time() > deadline:
                return hubo
            a = by_id.get(p.asset_id)
            img = masks.get(p.asset_id)
            if a is None or img is None:
                continue
            ctx = _reconstruir(assets, masks, area, settings, placements, cell,
                               saltar=p.uid)
            esc = float(p.scale or 1.0)
            angs = (settings.get("_angulos_por_asset") or {}).get(a["id"]) \
                or _angles(rot)
            angulos = _angulos_unicos(ctx, a["id"], a["w_mm"] * esc,
                                      a["h_mm"] * esc, img, angs)
            mejor = None
            for ang in angulos:
                rm, dm = ctx.rotated(a["id"], a["w_mm"] * esc,
                                     a["h_mm"] * esc, ang, img)
                h, w = dm.shape
                if h > ctx.H or w > ctx.W:
                    continue
                for pi in range(len(ctx.pages)):
                    got = ctx.best_for(pi, dm, rm)
                    if got is None:
                        continue
                    off, score = got
                    ty, tx = off
                    oy = _offset_rm(rm)
                    ox = _offset_rm(rm, True)
                    y_mm = (ty + oy) * cell + ctx.y0
                    x_mm = (tx + ox) * cell + ctx.x0
                    # nos interesa lo MÁS BAJO posible (y luego lo más a la izq.)
                    clave = (round(y_mm, 3), round(x_mm, 3))
                    if mejor is None or clave < mejor[0]:
                        mejor = (clave, y_mm, x_mm, ang)
            if mejor is None:
                continue
            _, y_mm, x_mm, ang = mejor
            if y_mm < p.y - 1e-6 or (abs(y_mm - p.y) < 1e-6 and x_mm < p.x - 1e-6):
                p.y, p.x, p.angle = y_mm, x_mm, ang
                we, he = _exact_size(a["w_mm"] * esc, a["h_mm"] * esc, ang)
                p.w, p.h = we, he
                mejoro = hubo = True
        if not mejoro:
            break
    return hubo

def _recalcular_eficiencia(result, masks: dict, area: CutArea,
                           assets: list[dict] | None = None) -> None:
    """Recalcula páginas y eficiencia REAL (área de siluetas / área usada)."""
    # un resultado VACÍO no es válido: se queda en 0 páginas para que nunca
    # pueda ganar a uno completo en las comparaciones (bug real: una pasada
    # cortada por tiempo parecía "perfecta" por no tener nada sin colocar)
    if not result.placements:
        result.pages = 0
        result.efficiency = 0.0
        return
    fracs = {}
    for aid, img in masks.items():
        try:
            a = np.asarray(img.getchannel("A"))
            fracs[aid] = float(np.count_nonzero(a > 1)) / max(1, a.size)
        except Exception:
            fracs[aid] = 1.0
    por_id = {a["id"]: a for a in (assets or [])}
    paginas = max((p.page for p in result.placements), default=0) + 1
    result.pages = paginas
    # área ÚTIL de verdad: el polígono recortable (con sus esquinas), no el bbox
    usada = area.area_mm2 * paginas
    # OJO: la silueta NO cambia de área al girar. Usar el bbox rotado
    # (p.w·p.h) inflaba la eficiencia en los giros libres; se usa el tamaño
    # ORIGINAL del elemento (con su escala) por la fracción de silueta.
    area_sil = 0.0
    for p in result.placements:
        a = por_id.get(p.asset_id)
        if a is not None:
            s = float(p.scale or 1.0)
            area_sil += (float(a["w_mm"]) * float(a["h_mm"]) * s * s
                         * fracs.get(p.asset_id, 1.0))
        else:
            area_sil += p.w * p.h * fracs.get(p.asset_id, 1.0)
    result.efficiency = min(1.0, area_sil / usada) if usada > 0 else 0.0
