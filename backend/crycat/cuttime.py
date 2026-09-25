"""Estimación del tiempo de corte de la Cricut (p. ej. Maker 5).

El modelo usa la geometría real de las siluetas y el recorrido de la máquina:

    tiempo = (perímetro_total / velocidad_corte
              + recorrido_total / velocidad_viaje
              + nº_formas * tiempo_extra_por_forma) * factor

* perímetro: longitud del contorno de cada silueta (rasterizada) a su escala.
* recorrido: distancia del camino en orden de vecino-más-cercano entre formas
  (aproxima los desplazamientos sin cortar del cabezal).
* factor ajustable para calibrar con la máquina real (se guarda).
"""

from __future__ import annotations

import math

import numpy as np
from PIL import Image

CELL = 0.35  # mm por celda (fino: el cálculo de corte no necesita velocidad)


def _mask(img: Image.Image, w_mm: float, h_mm: float, cell: float = CELL) -> np.ndarray:
    w = max(2, int(round(w_mm / cell)))
    h = max(2, int(round(h_mm / cell)))
    alpha = img.convert("RGBA").getchannel("A").resize(
        (w, h), Image.Resampling.BILINEAR)
    return np.asarray(alpha) > 100


def silhouette_stats(img: Image.Image, w_mm: float, h_mm: float,
                     cell: float = CELL) -> tuple[float, float]:
    """(área_mm2, perímetro_mm) de la silueta a su tamaño actual.

    El perímetro se mide con la fórmula de Crofton (número de intersecciones
    horizontales, verticales y diagonales), que es una estimación insesgada
    de la longitud del contorno para cualquier forma (círculos incluidos).
    """
    m = _mask(img, w_mm, h_mm, cell)
    if not m.any():
        return 0.0, 0.0
    area = float(m.sum()) * cell * cell

    # bordes horizontales/verticales: transiciones a lo largo de filas y cols
    h_edges = int(np.count_nonzero(m[:, 1:] != m[:, :-1]))
    v_edges = int(np.count_nonzero(m[1:, :] != m[:-1, :]))
    # diagonales (45º): transiciones en las dos diagonales
    d1 = int(np.count_nonzero(m[1:, 1:] != m[:-1, :-1]))
    d2 = int(np.count_nonzero(m[1:, :-1] != m[:-1, 1:]))
    # Crofton: L ≈ (pi/4)·[ (N0 + N90)·cell + (N45 + N135)·cell/√2 ] ... 
    # forma práctica y estable:
    per = (math.pi / 4.0) * (h_edges + v_edges) * cell + \
          (math.pi / 4.0) * (d1 + d2) * cell / math.sqrt(2.0)
    return area, per


def estimate(placements, assets_by_id: dict, images: dict,
             settings: dict) -> dict:
    """Devuelve la estimación de tiempo de corte (segundos) y su desglose."""
    cut_speed = max(1.0, float(settings.get("corte_velocidad_mm_s", 50.0)))
    trav_speed = max(1.0, float(settings.get("corte_viaje_mm_s", 120.0)))
    extra = max(0.0, float(settings.get("corte_extra_forma_s", 0.4)))
    factor = max(0.01, float(settings.get("corte_factor", 1.0)))

    cache: dict = {}
    per_page: dict = {}
    for p in placements:
        a = assets_by_id.get(p.asset_id)
        img = images.get(p.asset_id)
        if a is None or img is None:
            continue
        key = (p.asset_id, round(float(a["w_mm"]), 2), round(float(a["h_mm"]), 2))
        if key not in cache:
            cache[key] = silhouette_stats(img, a["w_mm"], a["h_mm"])
        _area, per = cache[key]
        s = float(p.scale or 1.0)
        d = per_page.setdefault(p.page, {"formas": 0, "perimetro": 0.0,
                                         "centros": []})
        d["formas"] += 1
        d["perimetro"] += per * s
        d["centros"].append((p.x + p.w / 2.0, p.y + p.h / 2.0))

    paginas = []
    total = 0.0
    for page in sorted(per_page):
        d = per_page[page]
        # recorrido por vecino más cercano desde el origen de la hoja
        pts = list(d["centros"])
        travel = 0.0
        cx = cy = 0.0
        while pts:
            i = min(range(len(pts)),
                    key=lambda k: (pts[k][0] - cx) ** 2 + (pts[k][1] - cy) ** 2)
            nx, ny = pts.pop(i)
            travel += ((nx - cx) ** 2 + (ny - cy) ** 2) ** 0.5
            cx, cy = nx, ny
        corte_s = d["perimetro"] / cut_speed
        viaje_s = travel / trav_speed
        extra_s = d["formas"] * extra
        seg = (corte_s + viaje_s + extra_s) * factor
        total += seg
        paginas.append({
            "pagina": page + 1, "formas": d["formas"],
            "perimetro_mm": round(d["perimetro"], 1),
            "viaje_mm": round(travel, 1),
            "corte_s": round(corte_s, 1), "viaje_s": round(viaje_s, 1),
            "extra_s": round(extra_s, 1), "segundos": round(seg, 1),
        })

    return {
        "maquina": "Cricut Maker 5",
        "segundos": round(total, 1),
        "factor": factor,
        "velocidad_corte_mm_s": cut_speed,
        "velocidad_viaje_mm_s": trav_speed,
        "paginas": paginas,
        "desglose": {
            "corte_s": round(sum(p["corte_s"] for p in paginas), 1),
            "viaje_s": round(sum(p["viaje_s"] for p in paginas), 1),
            "extra_s": round(sum(p["extra_s"] for p in paginas), 1),
        },
    }
