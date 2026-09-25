"""Optimizador de colocación de imágenes (CryCat).

Empaqueta instancias (copias normales y minis) en el área recortable de
Cricut (polígono escalonado) con:

  * MaxRects con heurísticas BSSF / BAF / BL
  * múltiples órdenes de inserción y reinicios aleatorios dentro de un
    presupuesto de tiempo -> método "auto" elige el mejor resultado
  * rotación: no / 90º / cualquier ángulo (bbox conservadora del giro)
  * espacio entre elementos configurable (se infla cada elemento spacing/2
    por lado, con lo que el hueco real entre elementos es `spacing`)
  * minis: rellenan el espacio sobrante tras las copias normales, con
    tamaño mínimo, tope de reescalado y política (iguales / grandes)
  * elementos fijados por el usuario (pin) que se respetan
  * multipágina: first-fit; mínimo número de páginas posible

Trabaja en mm, con origen (0,0) en la esquina superior izquierda del bbox
del área recortable de cada página.
"""

from __future__ import annotations

import random
import time
from dataclasses import dataclass, field

from .geometry import CutArea, rect_inside_polygon, rotated_size
from .i18n import tr

EPS = 1e-7
FREE_ANGLES = (45, 30, 60, 15, 75, 135, 120, 150, 105, 165)


@dataclass
class Instance:
    """Una copia (normal o mini) que colocar."""

    uid: str
    asset_id: str
    name: str
    w: float          # mm sin rotar (recortada)
    h: float
    mini: bool = False


@dataclass
class Placement:
    uid: str
    asset_id: str
    page: int
    x: float          # mm, coords bbox (0,0 = esquina sup-izq del área útil)
    y: float
    w: float          # tamaño colocado (bbox del giro ya aplicado)
    h: float
    angle: float = 0.0
    mini: bool = False
    scale: float = 1.0
    pinned: bool = False
    rot90: bool = False


@dataclass
class PackResult:
    placements: list[Placement] = field(default_factory=list)
    pages: int = 0
    efficiency: float = 0.0
    method: str = ""
    elapsed_s: float = 0.0
    unplaced: list[str] = field(default_factory=list)
    warnings: list[str] = field(default_factory=list)


def _inflate(w: float, h: float, spacing: float) -> tuple[float, float]:
    return w + spacing, h + spacing


class Bin:
    """Una página: rects libres (MaxRects) + colocaciones."""

    def __init__(self, area: CutArea, spacing: float):
        self.area = area
        self.spacing = spacing
        bx, by, bw, bh = area.bbox
        # Contenedor único = bbox del área recortable; las muescas de las
        # esquinas se restan como obstáculos (invariantes MaxRects intactos).
        self.free: list[list[float]] = [[bx, by, bw, bh]]
        for nx, ny, nw, nh in area.notches:
            self.subtract(nx, ny, nw, nh)
        self.placed: list[Placement] = []

    def subtract(self, rx: float, ry: float, rw: float, rh: float) -> None:
        """Resta un rect ocupado de todos los libres (split MaxRects)."""
        new_free: list[list[float]] = []
        for fx, fy, fw, fh in self.free:
            if rx >= fx + fw - EPS or rx + rw <= fx + EPS or \
               ry >= fy + fh - EPS or ry + rh <= fy + EPS:
                new_free.append([fx, fy, fw, fh])
                continue
            if rx > fx:
                new_free.append([fx, fy, rx - fx, fh])
            if rx + rw < fx + fw:
                new_free.append([rx + rw, fy, fx + fw - (rx + rw), fh])
            if ry > fy:
                new_free.append([fx, fy, fw, ry - fy])
            if ry + rh < fy + fh:
                new_free.append([fx, ry + rh, fw, fy + fh - (ry + rh)])
        kept: list[list[float]] = []
        for i, a in enumerate(new_free):
            contained = False
            for j, b in enumerate(new_free):
                if i != j and a[0] >= b[0] - EPS and a[1] >= b[1] - EPS and \
                   a[0] + a[2] <= b[0] + b[2] + EPS and a[1] + a[3] <= b[1] + b[3] + EPS:
                    contained = True
                    break
            if not contained and a[2] > EPS and a[3] > EPS:
                kept.append(a)
        self.free = kept

    def best_position_score(self, w: float, h: float, heuristic: str = "bssf"
                            ) -> tuple[float, float, object] | None:
        """Mejor (x, y, score) para un rect w x h (ya inflado)."""
        best = None
        best_score = None
        for fx, fy, fw, fh in self.free:
            if fw + EPS < w or fh + EPS < h:
                continue
            if not rect_inside_polygon(self.area.poly, [], fx, fy, w, h):
                continue
            if heuristic == "baf":
                score: object = fw * fh
            elif heuristic == "bl":
                score = (fy, fx)
            else:  # bssf
                score = (min(fw - w, fh - h), fw * fh)
            if best_score is None or score < best_score:
                best, best_score = (fx, fy, score), score
        return best

    def best_position(self, w: float, h: float, heuristic: str = "bssf"
                      ) -> tuple[float, float] | None:
        """Mejor (x, y) para un rect w x h (ya inflado), o None si no cabe."""
        got = self.best_position_score(w, h, heuristic)
        return (got[0], got[1]) if got else None

    def add(self, inst: Instance, x: float, y: float, w: float, h: float,
            angle: float, scale: float, rot90: bool) -> Placement:
        iw, ih = _inflate(w, h, self.spacing)
        self.subtract(x, y, iw, ih)
        p = Placement(uid=inst.uid, asset_id=inst.asset_id, page=0,
                      x=x + self.spacing / 2, y=y + self.spacing / 2,
                      w=w, h=h, angle=angle, mini=inst.mini, scale=scale,
                      rot90=rot90)
        self.placed.append(p)
        return p

    def is_free_for(self, x: float, y: float, w: float, h: float,
                    skip_uid: str | None = None) -> bool:
        """¿Un elemento w x h en (x,y) respeta polígono, muescas y vecinos?"""
        px, py = x - self.spacing / 2, y - self.spacing / 2
        pw, ph = _inflate(w, h, self.spacing)
        if not rect_inside_polygon(self.area.poly, self.area.notches, px, py, pw, ph):
            return False
        for p in self.placed:
            if skip_uid and p.uid == skip_uid:
                continue
            ox, oy = p.x - self.spacing / 2, p.y - self.spacing / 2
            ow, oh = _inflate(p.w, p.h, self.spacing)
            if not (px + pw <= ox + EPS or px >= ox + ow - EPS or
                    py + ph <= oy + EPS or py >= oy + oh - EPS):
                return False
        return True


def _candidate_sizes(inst: Instance, rot_mode: str
                     ) -> list[tuple[float, float, float, bool]]:
    """Tamaños del bbox ya rotado: (w, h, ángulo visual, es_giro90).

    Modos:  * "no"        -> 0º
            * "90"/"cuadrantes" -> 0, 90, 180 y 270 º
            * "libre"     -> cualquier ángulo (pasos de 15º)
    Nota: al empaquetar por bbox, 180º/270º tienen la misma huella que
    0º/90º, así que solo cambian la orientación visual del resultado.
    """
    sizes: list[tuple[float, float, float, bool]] = [(inst.w, inst.h, 0.0, False)]
    if rot_mode in ("90", "cuadrantes", "cuadrantes4"):
        sizes.append((inst.h, inst.w, 90.0, True))
        sizes.append((inst.w, inst.h, 180.0, False))
        sizes.append((inst.h, inst.w, 270.0, True))
    elif rot_mode == "libre":
        for a in FREE_ANGLES:
            w, h = rotated_size(inst.w, inst.h, a)
            sizes.append((w, h, float(a), False))
    return sizes


def _expand_items(assets: list[dict], settings: dict
                  ) -> tuple[list[Instance], list[dict]]:
    """Normales = TODAS las copias indicadas.

    Los minis van APARTE: no consumen copias; solo rellenan los huecos que
    sobran tras colocar las copias, respetando los límites establecidos
    (mini_min_mm, mini_max_rescale, espaciado y polígono recortable).
    Devuelve (instancias_normales, peticiones_mini).
    """
    normals: list[Instance] = []
    mini_requests: list[dict] = []
    usar_minis = bool(settings.get("usar_minis"))
    for a in assets:
        copies = int(a.get("copies", 1))
        if copies <= 0:
            continue
        for k in range(copies):
            normals.append(Instance(uid=f"{a['id']}#{k}", asset_id=a["id"],
                                    name=a.get("name", ""),
                                    w=a["w_mm"], h=a["h_mm"]))
        if usar_minis and bool(a.get("mini_enabled")):
            mini_requests.append({
                "asset_id": a["id"], "name": a.get("name", ""),
                "w": a["w_mm"], "h": a["h_mm"],
                # el % es la PROPORCIÓN del elemento respecto a los demás
                "weight": max(1e-6, float(a.get("mini_pct", 50.0))),
            })
    return normals, mini_requests


def _sort_instances(insts: list[Instance], order: str) -> list[Instance]:
    keyfun = {
        "area": lambda i: (i.w * i.h, max(i.w, i.h), i.uid),
        "alto": lambda i: (i.h, i.w, i.uid),
        "ancho": lambda i: (i.w, i.h, i.uid),
        "perimetro": lambda i: (i.w + i.h, i.w * i.h, i.uid),
    }[order]
    return sorted(insts, key=keyfun, reverse=True)


def _pack_normals(bins: list[Bin], insts: list[Instance], rot_mode: str,
                  heuristic: str, deadline: float | None = None) -> list[str]:
    """Coloca las copias (first-fit entre páginas) eligiendo para CADA objeto
    su mejor combinación de hoja y rotación (pueden ser distintas entre sí).

    Devuelve la lista de uids no colocadas. Llena primero la hoja 1, luego la
    2, etc. Si se pasa `deadline` (tiempo límite) deja de colocar al superarlo.
    """
    unplaced: list[str] = []
    for inst in insts:
        if deadline is not None and time.time() > deadline:
            unplaced.append(inst.uid)
            continue
        best = None  # (score, bin, x, y, w, h, angle, r90)
        for bin_ in bins:
            for (w, h, angle, r90) in _candidate_sizes(inst, rot_mode):
                iw, ih = _inflate(w, h, bin_.spacing)
                got = bin_.best_position_score(iw, ih, heuristic)
                if got is None:
                    continue
                x, y, score = got
                if best is None or score < best[0]:
                    best = (score, bin_, x, y, w, h, angle, r90)
        if best is None:
            unplaced.append(inst.uid)
            continue
        _, bin_, x, y, w, h, angle, r90 = best
        bin_.add(inst, x, y, w, h, angle, 1.0, r90)
    return unplaced


def _open_bin_for(bins: list[Bin], area: CutArea, spacing: float) -> Bin:
    b = Bin(area, spacing)
    bins.append(b)
    return b


def _place_minis(bins: list[Bin], requests: list[dict], settings: dict,
                 result: PackResult) -> None:
    """Rellena los huecos con minis (copias EXTRA que no cuentan).

    El porcentaje de cada elemento es su PROPORCIÓN respecto a los demás: se
    va colocando el más subrepresentado. El TAMAÑO lo elige el optimizador
    (lo mayor que quepa en cada hueco), acotado por `mini_min_mm` y
    `mini_max_rescale`. Política 'iguales' reutiliza una escala común por
    elemento; 'grandes' usa el mayor tamaño posible en cada hueco.
    """
    if not requests:
        return
    min_mm = float(settings.get("mini_min_mm", 5.0))
    max_res = max(0.01, float(settings.get("mini_max_rescale", 1000.0))) / 100.0
    policy = settings.get("mini_tamanos", "grandes")
    rot_mode = settings.get("mini_rotacion", "no")
    usar_lista = bool(settings.get("mini_usar_lista"))
    lista = [max(0.01, float(v) / 100.0)
             for v in (settings.get("mini_tamanos_lista") or [])]
    peso_total = sum(r["weight"] for r in requests)
    counts = {r["asset_id"]: 0 for r in requests}
    comunes: dict[str, float] = {}
    total = 0
    cap = 5000

    while total < cap:
        requests.sort(
            key=lambda r: r["weight"] / peso_total
            - counts[r["asset_id"]] / (total + 1.0), reverse=True)
        hecho = False
        for req in requests:
            base = max(min(req["w"], req["h"]), 1e-6)
            s_floor = min_mm / base
            if s_floor > max_res:
                continue
            got = None
            if policy == "iguales" and req["asset_id"] in comunes:
                got = _try_place_scaled(bins, req["w"], req["h"],
                                        comunes[req["asset_id"]], min_mm,
                                        rot_mode)
            else:
                for s in _escalas_mini(s_floor, max_res, usar_lista, lista):
                    got = _try_place_scaled(bins, req["w"], req["h"], s,
                                            min_mm, rot_mode)
                    if got:
                        comunes.setdefault(req["asset_id"], s)
                        break
            if got is None:
                continue
            bin_, x, y, ws, hs, angle, s, r90 = got
            inst = Instance(uid=f"{req['asset_id']}#mini{total}",
                            asset_id=req["asset_id"],
                            name=req.get("name", ""), w=req["w"],
                            h=req["h"], mini=True)
            bin_.add(inst, x, y, ws, hs, angle, s, r90)
            counts[req["asset_id"]] += 1
            total += 1
            hecho = True
            break
        if not hecho:
            break


def _min_scale_for(w: float, h: float, min_mm: float) -> float:
    base = max(min(w, h), 1e-6)
    return min_mm / base


def _escalas_mini(s_floor: float, max_res: float, usar_lista: bool,
                  lista: list[float]) -> list[float]:
    """Escalas a probar para un mini (lista deseada o descendente automática)."""
    if usar_lista and lista:
        out = sorted({min(max_res, max(s_floor, s)) for s in lista}, reverse=True)
        return [s for s in out if s >= s_floor - 1e-9]
    out: list[float] = []
    s = max_res
    while s >= s_floor - 1e-9 and len(out) < 12:
        out.append(s)
        s *= 0.75
    return out


def _try_place_scaled(bins: list[Bin], w0: float, h0: float, s: float,
                      min_mm: float, rot_mode: str):
    """Intenta colocar un mini de tamaño base (w0, h0) a escala uniforme s.
    Devuelve (bin, x, y, ws, hs, angle, s, r90) o None. La escala es siempre
    uniforme: nunca se deforma la imagen."""
    ws0, hs0 = w0 * s, h0 * s
    if min(ws0, hs0) < min_mm - 1e-6:
        return None
    for bin_ in bins:
        for (w, h, angle, r90) in _candidate_sizes(
                Instance("t", "", "", w0, h0), rot_mode):
            ws, hs = w * s, h * s
            if min(ws, hs) < min_mm - 1e-6:
                continue
            iw, ih = _inflate(ws, hs, bin_.spacing)
            pos = bin_.best_position(iw, ih, "bssf")
            if pos is not None:
                return (bin_, pos[0], pos[1], ws, hs, angle, s, r90)
    return None


def _run_pack(assets: list[dict], area: CutArea, settings: dict,
              pinned: list[Placement], ordered: list[Instance],
              heuristic: str, method_label: str,
              deadline: float | None = None) -> PackResult:
    spacing = max(0.0, float(settings.get("espacio_mm", 2.0)))
    rot_mode = settings.get("rotacion", "no")
    _, mini_requests = _expand_items(assets, settings)

    bins: list[Bin] = [Bin(area, spacing)]
    for p in pinned:
        iw, ih = _inflate(p.w, p.h, spacing)
        bins[0].subtract(p.x - spacing / 2, p.y - spacing / 2, iw, ih)
        bins[0].placed.append(Placement(
            uid=p.uid, asset_id=p.asset_id, page=0, x=p.x, y=p.y, w=p.w, h=p.h,
            angle=p.angle, mini=p.mini, scale=p.scale, pinned=True, rot90=p.rot90))

    # los fijados ya están pre-colocados: no se reempaquetan
    pinned_uids = {p.uid for p in pinned}
    ordered = [i for i in ordered if i.uid not in pinned_uids]

    unplaced = _pack_normals(bins, ordered, rot_mode, heuristic, deadline)
    if unplaced:
        pending = [i for i in ordered if i.uid in set(unplaced)]
        while pending:
            extra = _open_bin_for(bins, area, spacing)
            still = _pack_normals([extra], pending, rot_mode, heuristic,
                                  deadline)
            if len(still) == len(pending):
                bins.pop()          # ni en página nueva: imposible
                break
            pending = [i for i in pending if i.uid in set(still)]
        unplaced = [i.uid for i in pending]

    result = PackResult(method=method_label, unplaced=list(unplaced))
    _place_minis(bins, mini_requests, settings, result)
    for bi, b in enumerate(bins):
        for p in b.placed:
            p.page = bi
    result.pages = len(bins)
    result.placements = [p for b in bins for p in b.placed]
    used = sum(b.area.area_mm2 for b in bins)
    item_area = sum(p.w * p.h for p in result.placements)
    result.efficiency = item_area / used if used > 0 else 0.0
    if result.unplaced:
        result.warnings.append(
            tr("{n} copias no caben en el área recortable",
               n=len(result.unplaced)))
    return result


def optimize(assets: list[dict], area: CutArea, settings: dict,
             pinned: list[Placement] | None = None,
             progress=None, masks=None) -> PackResult:
    """Optimiza la colocación.

    assets: [{id, name, w_mm, h_mm, copies, mini_enabled, mini_pct}]
    masks:  {asset_id: PIL RGBA} para el empaquetado por silueta real
    pinned: placements fijos (se reubican en páginas nuevas).
    progress(frac 0..1, pages) para la barra de estado.
    """
    t0 = time.time()
    method = settings.get("opt_metodo", "silueta")
    margen = max(0.0, float(settings.get("margen_mm", 0.0)))
    if margen > 0:
        from .geometry import inset_area
        area = inset_area(area, margen)

    # Empaquetado por SILUETA REAL (usa la forma no transparente, no la caja)
    if method in ("silueta", "silueta_rapido", "silueta_optimo") and masks:
        try:
            from .silhouette import pack as sil_pack
            return sil_pack(assets, masks, area, settings, pinned, progress)
        except Exception:
            pass  # ante cualquier problema, cae al empaquetado por caja

    pinned = [p for p in (pinned or []) if p.pinned]
    t_max = max(0.5, float(settings.get("opt_tiempo_max_s", 8.0)))
    normals, _ = _expand_items(assets, settings)

    if method == "maxrects":
        # las tres heurísticas MaxRects (baratas y complementarias)
        variants = [(o, h) for o in ("area", "alto") for h in ("bssf", "baf", "bl")]
    elif method == "skyline":
        variants = [("area", "bl")]
    else:
        variants = [(o, h) for o in ("area", "alto", "ancho", "perimetro")
                    for h in ("bssf", "baf", "bl")]

    best: PackResult | None = None
    rnd = random.Random(20260925)
    deadline = t0 + t_max
    i = 0
    while True:
        if i < len(variants):
            order, heur = variants[i]
            ordered = _sort_instances(normals, order)
            label = f"{heur}/{order}"
        else:
            heur = ("bssf", "baf", "bl")[i % 3]
            shuffled = normals[:]
            rnd.shuffle(shuffled)
            ordered = shuffled
            label = f"{heur}/random{i}"
        res = _run_pack(assets, area, settings, pinned, ordered, heur, label,
                        deadline)
        key = (len(res.unplaced), res.pages, -res.efficiency)
        if best is None or key < (len(best.unplaced), best.pages, -best.efficiency):
            best = res
        i += 1
        if progress:
            progress(min(0.99, i / (i + 2)), best.pages)
        # mientras la hoja no esté llenísima, basta con un resultado rápido
        if (method == "auto" and not best.unplaced and best.efficiency < 0.80):
            break
        if method != "auto":
            if i >= len(variants):
                break
        elif time.time() > deadline or i >= 120:
            break
    assert best is not None
    best.elapsed_s = time.time() - t0
    return best


def try_move(placements: list[Placement], uid: str, x: float, y: float,
             area: CutArea, spacing: float) -> Placement | None:
    """Mueve (y fija) un elemento si la posición es válida."""
    target = next((p for p in placements if p.uid == uid), None)
    if target is None:
        return None
    probe = Bin(area, spacing)
    probe.placed = [p for p in placements
                    if p.page == target.page and p.uid != uid]
    if not probe.is_free_for(x, y, target.w, target.h):
        return None
    target.x, target.y = x, y
    target.pinned = True
    return target
