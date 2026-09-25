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
    w = max(2, int(round(w_mm / cell)))
    h = max(2, int(round(h_mm / cell)))
    alpha = img.convert("RGBA").getchannel("A").resize(
        (w, h), Image.Resampling.BILINEAR)
    m = np.asarray(alpha) > 100
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
                 occ_contact: np.ndarray | None = None):
    """Mejor ((y, x), contacto) para colocar m sin solapar ni salir del área.

    `out_corr` es la correlación (cacheada) de la máscara con lo NO permitido:
    vale 0 sólo en los offsets en los que la máscara cabe dentro del área.
    """
    H, W = occ.shape
    h, w = m.shape
    if h > H or w > W:
        return None
    ov = _correlate(occ, m)
    valid = (ov < 0.5) & (out_corr < 0.5)
    valid[H - h + 1:, :] = False
    valid[:, W - w + 1:] = False
    if not valid.any():
        return None
    ys, xs = np.where(valid)
    if occ_contact is not None:
        contact = _correlate(occ_contact, _dilate(m, 1))
        scores = contact[ys, xs]
        order = np.lexsort((xs, ys, -scores))   # más contacto, luego arriba-izq
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
        self.pages: list[np.ndarray] = []
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

    def best_for(self, pi: int, dm: np.ndarray):
        """Mejor posición en la página `pi`, buscando sólo en la ventana
        ocupada (mucho más rápido) con reserva a la búsqueda completa."""
        occ = self.pages[pi]
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
        got = _best_offset(occ[:wr, :wc], dm, oc[:wr, :wc], occ[:wr, :wc])
        if got is None:
            got = _best_offset(occ, dm, oc, occ)
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
        return len(self.pages) - 1


def _try_place(ctx: _Ctx, aid: str, name: str, w_mm: float, h_mm: float,
               scale: float, mini: bool, img: Image.Image,
               rot_angles: list[float], new_page_ok: bool) -> bool:
    """Evalúa TODOS los ángulos y hojas y coloca en la mejor posición (la de
    más contacto con lo ya puesto). Así los giros simples (0/90/180/270) se
    aprovechan de verdad para encajar más."""
    best = None  # (score, page, ang, off, rm, dm)
    for ang in rot_angles:
        rm, dm = ctx.rotated(aid, w_mm, h_mm, ang, img)
        h, w = dm.shape
        if h > ctx.H or w > ctx.W:
            continue
        for pi in range(len(ctx.pages)):
            got = ctx.best_for(pi, dm)
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
            got = ctx.best_for(pi, dm)
            if got is not None:
                return _commit_offset(ctx, aid, name, pi, ang, scale, mini,
                                      rm, dm, got[0], w_mm, h_mm)
        ctx.pages.pop()
    return False




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


def _one_pass(assets: list[dict], masks: dict[str, Image.Image], area: CutArea,
              settings: dict, pinned: list[Placement] | None, order: str,
              rnd, progress=None, frac=(0.0, 1.0),
              deadline: float | None = None) -> PackResult:
    """Una pasada constructiva con un orden de inserción dado."""
    # rejilla adaptativa: más gruesa cuantos más objetos (mantiene la rapidez)
    n_total = sum(int(a.get("copies", 1)) for a in assets) + len(pinned or [])
    cell = 0.5 if n_total <= 90 else (0.75 if n_total <= 250 else 1.0)
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

    unplaced: list[str] = []
    angles_n = _angles(rot_norm)
    for k, (_, a) in enumerate(inst):
        if deadline is not None and time.time() > deadline:
            # presupuesto agotado: el resto queda sin colocar (mejor parcial)
            unplaced += [x["id"] for _, x in inst[k:]]
            break
        ok = _try_place(ctx, a["id"], a.get("name", ""), a["w_mm"], a["h_mm"],
                        1.0, False, masks[a["id"]], angles_n, new_page_ok=True)
        if not ok:
            unplaced.append(a["id"])
        if progress and (k % 4 == 0 or k == len(inst) - 1):
            lo, hi = frac
            progress(lo + (hi - lo) * (k + 1) / max(1, len(inst)),
                     len(ctx.pages))

    # 3) minis: rellenan huecos (no cuentan como copias; dan eficiencia y
    #    pegatinas extra). El porcentaje de cada elemento es su PROPORCIÓN
    #    respecto a los demás, y el tamaño lo elige el optimizador (lo mayor
    #    que quepa en cada hueco, acotado por mini_min_mm y max_rescale).
    if settings.get("usar_minis"):
        min_mm = float(settings.get("mini_min_mm", 5.0))
        max_res = max(0.01, float(settings.get("mini_max_rescale", 1000.0))) / 100.0
        policy = settings.get("mini_tamanos", "grandes")
        usar_lista = bool(settings.get("mini_usar_lista"))
        lista = [max(0.01, float(v) / 100.0)
                 for v in (settings.get("mini_tamanos_lista") or [])]
        angles_m = _angles(rot_mini)
        cand = [a for a in assets if a.get("mini_enabled") and a["id"] in masks]
        if cand:
            pesos = {a["id"]: max(1e-6, float(a.get("mini_pct", 50.0)))
                     for a in cand}
            peso_total = sum(pesos.values())
            counts = {a["id"]: 0 for a in cand}
            comunes: dict[str, float] = {}
            total = 0
            while total < 800:
                if deadline is not None and time.time() > deadline:
                    break
                # primero el elemento más subrepresentado según su proporción
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


def pack(assets: list[dict], masks: dict[str, Image.Image], area: CutArea,
         settings: dict, pinned: list[Placement] | None = None,
         progress=None) -> PackResult:
    """Empaqueta por silueta con multi-arranque.

    Prueba varias ordenaciones de inserción (por área, por tamaño y aleatorias)
    dentro del presupuesto de tiempo y devuelve la mejor (menos páginas, mayor
    aprovechamiento). Esto sigue las recomendaciones de la literatura de
    nesting (método de píxeles + optimización de secuencia).
    """
    import random as _random
    t0 = time.time()
    t_max = max(0.5, float(settings.get("opt_tiempo_max_s", 8.0)))
    metodo = settings.get("opt_metodo", "silueta")
    if metodo == "silueta_rapido":
        ordenes = ["area"]
        early_stop = False               # una sola pasada (rápido)
    elif metodo == "silueta_optimo":
        ordenes = ["area", "alto", "ancho", "random1", "random2"]
        early_stop = False               # óptimo: agota el presupuesto
        t_max = max(t_max, 10.0)
    else:                                # silueta (adaptativo)
        ordenes = ["area", "alto", "ancho", "random1", "random2"]
        early_stop = True
    deadline = t0 + t_max
    rnd = _random.Random(20260925)

    best: PackResult | None = None
    for i, order in enumerate(ordenes):
        lo = 0.05 + 0.9 * i / len(ordenes)
        hi = 0.05 + 0.9 * (i + 1) / len(ordenes)
        res = _one_pass(assets, masks, area, settings, pinned, order, rnd,
                        progress, (lo, hi), deadline=deadline)
        key = (len(res.unplaced), res.pages, -res.efficiency)
        if best is None or key < (len(best.unplaced), best.pages,
                                  -best.efficiency):
            best = res
        # Mientras la hoja no esté llenísima, cualquier colocación válida
        # sirve: se devuelve ya el resultado rápido de la primera pasada.
        if early_stop and not best.unplaced and best.efficiency < 0.80:
            break
        if time.time() > deadline:
            break
    assert best is not None
    best.elapsed_s = time.time() - t0
    return best
