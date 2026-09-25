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
FREE_ANGLES = (45, 30, 60, 15, 75, 135, 120, 150, 105, 165)


# --------------------------------------------------------------- utilidades --
def _grid(area: CutArea, cell: float):
    x0, y0, bw, bh = area.bbox
    W = max(1, int(math.ceil(bw / cell)))
    H = max(1, int(math.ceil(bh / cell)))
    xs = x0 + (np.arange(W) + 0.5) * cell
    ys = y0 + (np.arange(H) + 0.5) * cell
    X, Y = np.meshgrid(xs, ys)
    inside = np.zeros(X.shape, dtype=bool)
    poly = area.poly
    n = len(poly)
    j = n - 1
    for i in range(n):
        xi, yi = poly[i]
        xj, yj = poly[j]
        cond = (yi > Y) != (yj > Y)
        xint = (xj - xi) * (Y - yi) / (yj - yi + 1e-12) + xi
        inside ^= cond & (X < xint)
        j = i
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


def _asset_mask(img: Image.Image, w_mm: float, h_mm: float, cell: float,
                pad: int = 0) -> np.ndarray:
    """Máscara booleana del CONTORNO simplificado (o del alfa si no hay)."""
    w = max(2, int(round(w_mm / cell)))
    h = max(2, int(round(h_mm / cell)))
    try:
        from .contour import contornos_mm, dibujar_poligonos
        polys = contornos_mm(img, w_mm, h_mm, eps_mm=max(0.2, cell * 0.6))
        if polys:
            return dibujar_poligonos(polys, w, h, w_mm, h_mm, pad)
    except Exception:
        pass
    alpha = img.convert("RGBA").getchannel("A").resize(
        (w, h), Image.Resampling.BILINEAR)
    m = np.asarray(alpha) > 1
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
    # tolerancia mínima de rasterización: las posiciones tangentes son válidas
    # pero no se admite un solape apreciable (la separación se respeta)
    tol = 1.0
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


def _mask_for_placement(p: Placement, a: dict, img: Image.Image, cell: float,
                        r: int):
    """(rm, dm, ox, oy) para una colocación: máscara, dilatada y desplazamiento
    del contenido dentro del array."""
    base = _asset_mask(img, a["w_mm"], a["h_mm"], cell, pad=r + 2)
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
    # holgura: se exige no solapar con el contenido (sin el margen completo)
    r = max(0, int(round((spacing * 0.5) / cell))) if spacing > 0 else 0
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
    # 1) solape con otras siluetas: se rechaza sólo si es apreciable (>margen)
    sub_occ = occ[ty:ty + h, tx:tx + w]
    solape = int(np.count_nonzero((sub_occ > 0) & dm))
    area_m = int(np.count_nonzero(dm))
    if solape > max(2, int(0.02 * max(1, area_m))):
        return None
    # 2) el CONTENIDO (sin márgenes) debe caber dentro del área recortable
    ys, xs = np.where(dm)
    cy0, cy1 = ty + int(ys.min()), ty + int(ys.max())
    cx0, cx1 = tx + int(xs.min()), tx + int(xs.max())
    zona = allowed[cy0:cy1 + 1, cx0:cx1 + 1]
    interior = dm[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
    fuera = int(np.count_nonzero(interior & (~zona)))
    if fuera > max(2, int(0.02 * max(1, area_m))):
        return None
    target.x, target.y = x, y
    target.pinned = True
    return target


# ------------------------------------------------------------------- packer --
class _Ctx:
    def __init__(self, area: CutArea, settings: dict, cell: float = CELL):
        self.cell = cell
        self.spacing = max(0.0, float(settings.get("espacio_mm", 2.0)))
        # ceil (no round): garantiza que el hueco nunca sea menor que `spacing`
        self.r = int(math.ceil((self.spacing / 2.0) / self.cell)) if self.spacing > 0 else 0
        self.allowed, self.W, self.H = _grid(area, self.cell)
        self.x0, self.y0 = area.bbox[0], area.bbox[1]
        self.limites = (area.bbox[0], area.bbox[1],
                        area.bbox[0] + area.bbox[2], area.bbox[1] + area.bbox[3])
        self.pages: list[np.ndarray] = []        # siluetas DILATADAS (separación)
        self.pages_sil: list[np.ndarray] = []    # siluetas reales (contacto)
        self.placements: list[Placement] = []
        self.cache: dict = {}
        self.out_cache: dict = {}
        self.mask_cells = 0

    def out_corr(self, dm: np.ndarray) -> np.ndarray:
        """Correlación cacheada de la máscara dilatada con lo NO permitido."""
        key = (dm.shape, hash(dm.tobytes()))
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
        key = (aid, round(w_mm, 3), round(h_mm, 3))
        b = self.cache.get(key)
        if b is None:
            b = _asset_mask(img, w_mm, h_mm, self.cell, pad=self.r + 2)
            self.cache[key] = b
        return b

    def rotated(self, aid: str, w_mm: float, h_mm: float, angle: float,
                img: Image.Image) -> tuple[np.ndarray, np.ndarray]:
        base = self.base_mask(aid, w_mm, h_mm, img)
        rm = _rotate_mask(base, angle)
        return rm, _dilate(rm, self.r)

    def new_page(self) -> int:
        self.pages.append(np.zeros((self.H, self.W), dtype=np.float32))
        self.pages_sil.append(np.zeros((self.H, self.W), dtype=np.float32))
        return len(self.pages) - 1


def _try_place(ctx: _Ctx, aid: str, name: str, w_mm: float, h_mm: float,
               scale: float, mini: bool, img: Image.Image,
               rot_angles: list[float], new_page_ok: bool,
               contacto: bool = True, voronoi: bool = False) -> bool:
    """Evalúa TODOS los ángulos y hojas y coloca en la mejor posición (la de
    más contacto con lo ya puesto). Así los giros simples (0/90/180/270) se
    aprovechan de verdad para encajar más.

    Con `voronoi=True` las posiciones candidatas son los centros de los
    huecos libres más grandes (aproximación Voronoi).
    """
    if voronoi:
        return _try_place_voronoi(ctx, aid, name, w_mm, h_mm, scale, mini,
                                  img, rot_angles, new_page_ok)
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
            if best is None or score > best[0]:
                best = (score, pi, ang, off, rm, dm)
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
            tol = 1.0
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




def _escalas_candidatas(s_floor: float, max_res: float, usar_lista: bool,
                        lista: list[float]) -> list[float]:
    """Escalas a probar para un mini: la lista dada (mayor a menor) o,
    automáticamente, descendiendo desde el tope de reescalado."""
    if usar_lista and lista:
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
        rot90=False))
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
        return 0.25 if n_total <= 40 else (0.5 if n_total <= 120 else 0.75)
    if calidad == "rapida":
        return 0.75 if n_total <= 120 else (1.0 if n_total <= 300 else 1.5)
    return 0.5 if n_total <= 90 else (0.75 if n_total <= 250 else 1.0)


def _one_pass(assets: list[dict], masks: dict[str, Image.Image], area: CutArea,
              settings: dict, pinned: list[Placement] | None, order: str,
              rnd, progress=None, frac=(0.0, 1.0),
              deadline: float | None = None,
              orden_idx: list[int] | None = None, contacto: bool = True,
              voronoi: bool = False) -> PackResult:
    """Una pasada constructiva con un orden de inserción dado.

    `orden_idx` permite imponer una permutación explícita (algoritmo genético).
    `contacto=False` usa Bottom-Left puro; `voronoi=True` coloca en el hueco
    libre más grande.
    """
    # rejilla adaptativa: más gruesa cuantos más objetos (mantiene la rapidez)
    n_total = sum(int(a.get("copies", 1)) for a in assets) + len(pinned or [])
    cell = _cell_para(n_total, str(settings.get("opt_calidad", "normal")))
    ctx = _Ctx(area, settings, cell=cell)
    result = PackResult(method="silueta")
    by_id = {a["id"]: a for a in assets}
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
        rm, dm = ctx.rotated(p.asset_id, a["w_mm"], a["h_mm"], p.angle, img)
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
        we, he = _exact_size(a["w_mm"], a["h_mm"], p.angle)
        ctx.placements.append(Placement(
            uid=p.uid, asset_id=p.asset_id, page=pi, x=p.x, y=p.y,
            w=we, h=he, angle=p.angle, mini=p.mini, scale=p.scale,
            pinned=True, rot90=False))

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
    angles_n = _angles(rot_norm)
    angulos_cache: dict[str, list[float]] = {}
    for k, (_, a) in enumerate(inst):
        if deadline is not None and time.time() > deadline:
            # presupuesto agotado: el resto queda sin colocar (mejor parcial)
            unplaced += [x["id"] for _, x in inst[k:]]
            break
        if a["id"] not in angulos_cache:
            angulos_cache[a["id"]] = _angulos_unicos(
                ctx, a["id"], a["w_mm"], a["h_mm"], masks[a["id"]], angles_n)
        ok = _try_place(ctx, a["id"], a.get("name", ""), a["w_mm"], a["h_mm"],
                        1.0, False, masks[a["id"]],
                        angulos_cache[a["id"]], new_page_ok=True,
                        contacto=contacto, voronoi=voronoi)
        if not ok:
            unplaced.append(a["id"])
        if progress and (k % 4 == 0 or k == len(inst) - 1):
            lo, hi = frac
            progress(lo + (hi - lo) * (k + 1) / max(1, len(inst)),
                     len(ctx.pages))

    # 3) minis: rellenan huecos (no cuentan como copias; dan eficiencia y
    #    pegatinas extra). La cuota de cada elemento decide CUÁNTOS minis
    #    recibe respecto a los demás (1 = equitativo; 3 = el triple) y el
    #    TAMAÑO lo elige el optimizador (siempre menor que el original).
    if settings.get("usar_minis"):
        min_mm = float(settings.get("mini_min_mm", 5.0))
        max_res = min(0.99, max(0.01, float(
            settings.get("mini_max_rescale", 100.0))) / 100.0)
        policy = settings.get("mini_tamanos", "grandes")
        usar_lista = bool(settings.get("mini_usar_lista"))
        lista = [max(0.01, min(0.99, float(v) / 100.0))
                 for v in (settings.get("mini_tamanos_lista") or [])]
        angles_m = _angles(rot_mini)
        cand = [a for a in assets if a.get("mini_enabled") and a["id"] in masks]
        if cand:
            pesos = {a["id"]: min(100.0, max(1.0, float(a.get("mini_quota", 1.0))))
                     for a in cand}
            peso_total = sum(pesos.values())
            counts = {a["id"]: 0 for a in cand}
            comunes: dict[str, float] = {}
            total = 0
            while total < 800:
                if deadline is not None and time.time() > deadline:
                    break
                # primero el elemento más subrepresentado según su cuota
                cand.sort(key=lambda a: pesos[a["id"]] / peso_total
                          - counts[a["id"]] / (total + 1.0), reverse=True)
                hecho = False
                for a in cand:
                    img = masks[a["id"]]
                    base = max(min(a["w_mm"], a["h_mm"]), 1e-6)
                    s_floor = min_mm / base
                    if s_floor > max_res:
                        continue
                    colocado = False
                    if policy == "iguales" and a["id"] in comunes:
                        s = comunes[a["id"]]
                        colocado = _try_place(
                            ctx, a["id"], a.get("name", ""), a["w_mm"] * s,
                            a["h_mm"] * s, s, True, img, angles_m,
                            new_page_ok=False)
                    else:
                        # lista de tamaños deseada o mayor que quepa (desc.)
                        for s in _escalas_candidatas(s_floor, max_res, usar_lista,
                                                     lista):
                            if _try_place(ctx, a["id"], a.get("name", ""),
                                          a["w_mm"] * s, a["h_mm"] * s, s,
                                          True, img, angles_m,
                                          new_page_ok=False):
                                colocado = True
                                comunes.setdefault(a["id"], s)
                                break
                    if colocado:
                        counts[a["id"]] += 1
                        total += 1
                        hecho = True
                        break
                if not hecho:
                    break

    result.placements = ctx.placements
    result.pages = max(1, len(ctx.pages)) if ctx.pages else 0
    result.unplaced = unplaced
    page_area = ctx.cell * ctx.cell * float(np.count_nonzero(ctx.allowed))
    used = page_area * max(1, len(ctx.pages))
    sil_area = ctx.mask_cells * ctx.cell * ctx.cell
    result.efficiency = min(1.0, sil_area / used) if used > 0 else 0.0
    if unplaced:
        result.warnings.append(
            tr("{n} copias no caben en el área recortable", n=len(unplaced)))
    return result


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
                   progress=None) -> PackResult | None:
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

    def evaluar(perm: list[int]) -> PackResult:
        return _one_pass(assets, masks, area, settings, pinned, "area", rnd,
                         None, (0.05, 0.95), deadline=deadline,
                         orden_idx=perm)

    def clave(r: PackResult) -> tuple:
        return (len(r.unplaced), r.pages, -r.efficiency)

    poblacion: list[list[int]] = [list(range(n)),
                                  list(range(n - 1, -1, -1))]
    while len(poblacion) < 8:
        q = list(range(n))
        rnd.shuffle(q)
        poblacion.append(q)

    mejores: list[tuple] = []
    for generacion in range(60):
        if time.time() > deadline and mejores:
            break
        resultados = []
        for perm in poblacion:
            r = evaluar(perm)
            resultados.append((clave(r), tuple(perm), r))
        resultados.sort(key=lambda t: t[0])
        mejores = resultados[:4]
        if progress:
            progress(min(0.95, 0.1 + 0.85 * (generacion + 1) / 12.0),
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
    return mejores[0][2] if mejores else None


def pack(assets: list[dict], masks: dict[str, Image.Image], area: CutArea,
         settings: dict, pinned: list[Placement] | None = None,
         progress=None) -> PackResult:
    """Empaqueta por silueta eligiendo método de optimización.

    Métodos (ajuste `opt_metodo`):
      * greedy   – Bottom-Left voraz con contacto y varias órdenes (rápido)
      * largest  – Largest First (mayor primero, una pasada)
      * voronoi  – coloca en el mayor hueco libre (Voronoi del espacio libre)
      * genetic  – algoritmo genético del orden de inserción (mejor calidad)

    Todos usan SIEMPRE la silueta real y prueban los ángulos permitidos.
    """
    import random as _random
    t0 = time.time()
    t_max = max(0.5, float(settings.get("opt_tiempo_max_s", 8.0)))
    metodo = str(settings.get("opt_metodo", "greedy")).lower()
    # compatibilidad con los nombres antiguos
    if metodo in ("silueta_rapido", "silueta", "maxrects", "skyline", "auto"):
        metodo = "greedy"
    elif metodo == "silueta_optimo":
        metodo = "genetic"
    deadline = t0 + t_max
    rnd = _random.Random(20260925)
    n_total = sum(int(a.get("copies", 1)) for a in assets) + len(pinned or [])
    deadline_1 = None if n_total <= 40 else deadline

    if metodo == "largest":
        best = _one_pass(assets, masks, area, settings, pinned, "area", rnd,
                         progress, (0.05, 0.95), deadline=deadline_1,
                         contacto=False)
    elif metodo == "voronoi":
        best = _one_pass(assets, masks, area, settings, pinned, "area", rnd,
                         progress, (0.05, 0.95), deadline=deadline_1,
                         voronoi=True)
    elif metodo == "genetic":
        best = _pase_genetico(assets, masks, area, settings, pinned, deadline,
                              progress)
        if best is None:
            best = _one_pass(assets, masks, area, settings, pinned, "area",
                             rnd, progress, (0.05, 0.95), deadline=deadline_1)
    else:  # greedy: Largest First como solución inicial + multi-arranque paralelo
        best = _one_pass(assets, masks, area, settings, pinned, "area", rnd,
                         progress, (0.05, 0.35), deadline=deadline_1)
        if not (not best.unplaced and best.pages == 1):
            ordenes = ["alto", "ancho"] + \
                [f"random{i}" for i in range(1, 9)]
            try:
                from concurrent.futures import (ThreadPoolExecutor,
                                                as_completed)
                import random as _r
                with ThreadPoolExecutor(max_workers=3) as ex:
                    futuros = {
                        ex.submit(_one_pass, assets, masks, area, settings,
                                  pinned, o, _r.Random(20260925 + i), None,
                                  (0.35, 0.95), deadline): o
                        for i, o in enumerate(ordenes)
                    }
                    for f in as_completed(futuros):
                        try:
                            res = f.result()
                        except Exception:
                            continue
                        key = (len(res.unplaced), res.pages, -res.efficiency)
                        if key < (len(best.unplaced), best.pages,
                                  -best.efficiency):
                            best = res
                        if not best.unplaced and best.pages == 1:
                            break            # objetivo cumplido: una hoja
                        if time.time() > deadline:
                            break
            except Exception:
                pass
            if progress:
                try:
                    progress(0.95, best.pages)
                except Exception:
                    pass

    assert best is not None
    # fase de compactación (estilo DeepNest): acerca cada pieza al borde
    if best.placements and not pinned:
        try:
            cell = _cell_para(n_total, str(settings.get("opt_calidad", "normal")))
            if compactar(assets, masks, area, settings, best.placements, cell,
                         deadline=max(deadline, time.time() + 2.0)):
                _recalcular_eficiencia(best, masks, area)
        except Exception:
            pass
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
        rm, dm = ctx.rotated(p.asset_id, a["w_mm"], a["h_mm"], p.angle, img)
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
            angulos = _angulos_unicos(ctx, a["id"], a["w_mm"], a["h_mm"], img,
                                      _angles(rot))
            mejor = None
            for ang in angulos:
                rm, dm = ctx.rotated(a["id"], a["w_mm"], a["h_mm"], ang, img)
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
                we, he = _exact_size(a["w_mm"], a["h_mm"], ang)
                p.w, p.h = we, he
                mejoro = hubo = True
        if not mejoro:
            break
    return hubo

def _recalcular_eficiencia(result, masks: dict, area: CutArea) -> None:
    """Recalcula páginas y eficiencia REAL (área de siluetas / área usada)."""
    fracs = {}
    for aid, img in masks.items():
        try:
            a = np.asarray(img.getchannel("A"))
            fracs[aid] = float(np.count_nonzero(a > 1)) / max(1, a.size)
        except Exception:
            fracs[aid] = 1.0
    paginas = max((p.page for p in result.placements), default=0) + 1
    result.pages = paginas
    usada = area.bbox[2] * area.bbox[3] * paginas
    area_sil = sum(p.w * p.h * fracs.get(p.asset_id, 1.0)
                   for p in result.placements)
    result.efficiency = min(1.0, area_sil / usada) if usada > 0 else 0.0
