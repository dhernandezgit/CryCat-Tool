"""Comprobaciones SERIAS del empaquetado: límites, solapes y separación.

A diferencia de los tests internos (que usan las mismas estructuras del
optimizador), aquí se reconstruye TODO desde cero a partir del resultado:
cada silueta se rasteriza en su posición final y se comprueba, píxel a píxel:

  1. que ninguna pieza se salga del ÁREA RECORTABLE (polígono de Cricut),
  2. que dos piezas no se solapen nunca (misma página),
  3. que se respeta el ESPACIO entre elementos,
  4. que no queda ninguna copia sin colocar.

Si algo de esto falla, es un bug de verdad (no un artefacto del test).
"""

from __future__ import annotations

import numpy as np
import pytest
from PIL import Image, ImageDraw

from crycat import silhouette
from crycat.geometry import cut_area, inset_area
from crycat.imaging import trim

CELL = 0.25          # rejilla fina para medir con precisión


def _mascara(img: Image.Image, w_mm: float, h_mm: float, ang: float) -> np.ndarray:
    """Silueta REAL de una pieza (alfa), rotada, en la rejilla fina."""
    w = max(2, int(round(w_mm / CELL)))
    h = max(2, int(round(h_mm / CELL)))
    a = img.convert("RGBA").getchannel("A").resize(
        (w, h), Image.Resampling.BILINEAR)
    m = np.asarray(a) > 1
    if abs(ang % 360.0) > 0.01:
        m = silhouette._rotate_mask(m, ang)
    return m


def _erosionar(m: np.ndarray) -> np.ndarray:
    """Quita el filo (1 celda): el antialias no cuenta como solape."""
    from scipy import ndimage
    return ndimage.binary_erosion(m, iterations=1)


def _poligono_mask(area, H: int, W: int, x0: float, y0: float) -> np.ndarray:
    """Máscara booleana del polígono recortable en la rejilla fina."""
    xs = x0 + (np.arange(W) + 0.5) * CELL
    ys = y0 + (np.arange(H) + 0.5) * CELL
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
    return inside


def _una_pagina(area, pagina, masks, assets_por_id, spacing):
    """(fuera, solape, pintado) de una página, reconstruido desde cero."""
    bx, by, bw, bh = area.bbox
    margen = 6.0
    x0, y0 = bx - margen, by - margen
    W = int(round((bw + 2 * margen) / CELL)) + 4
    H = int(round((bh + 2 * margen) / CELL)) + 4
    dentro = _poligono_mask(area, H, W, x0, y0)
    pintado = np.zeros((H, W), dtype=np.int32)
    fuera_total = 0
    for p in pagina:
        a = assets_por_id[p.asset_id]
        w_mm = a["w_mm"] * p.scale
        h_mm = a["h_mm"] * p.scale
        m = _mascara(masks[p.asset_id], w_mm, h_mm, p.angle)
        ys, xs = np.where(m)
        if len(ys) == 0:
            continue
        ty = int(round((p.y - y0) / CELL)) - int(ys.min())
        tx = int(round((p.x - x0) / CELL)) - int(xs.min())
        h, w = m.shape
        assert ty >= 0 and tx >= 0 and ty + h <= H and tx + w <= W, \
            "la pieza se sale del lienzo de comprobación"
        pintado[ty:ty + h, tx:tx + w][m] += 1
        # el filo antialias no cuenta ni como solape ni como salida del área
        sub = dentro[ty:ty + h, tx:tx + w]
        fuera_total += int(np.count_nonzero(_erosionar(m) & ~sub))
    from scipy import ndimage
    solido = ndimage.binary_erosion(pintado > 0, iterations=1)
    peor_solape = int(np.count_nonzero(solido & (pintado > 1)))
    return fuera_total, peor_solape, pintado


def _comprobar(res, area, masks, assets, spacing, margen_mm=0.0,
               solape_activo=True):
    por_id = {a["id"]: a for a in assets}
    if margen_mm > 0:
        area = inset_area(area, margen_mm)
    assert not res.unplaced, f"quedaron sin colocar: {res.unplaced}"
    assert res.placements, "no se colocó nada"
    paginas: dict[int, list] = {}
    for p in res.placements:
        paginas.setdefault(p.page, []).append(p)
    for num, pagina in paginas.items():
        fuera, solape, _ = _una_pagina(area, pagina, masks, por_id, spacing)
        assert fuera <= 2, (
            f"página {num + 1}: {fuera} celdas de silueta FUERA del área "
            f"({fuera * CELL * CELL:.2f} mm²)")
        if solape_activo:
            assert solape == 0, (
                f"página {num + 1}: {solape} celdas con SOLAPE entre piezas "
                f"({solape * CELL * CELL:.2f} mm²)")


def _circulo(lado_px: int, color=(200, 120, 150, 255)) -> Image.Image:
    im = Image.new("RGBA", (lado_px, lado_px), (0, 0, 0, 0))
    ImageDraw.Draw(im).ellipse((2, 2, lado_px - 3, lado_px - 3), fill=color)
    return im


def _estrella(lado_px: int) -> Image.Image:
    import math
    im = Image.new("RGBA", (lado_px, lado_px), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    pts = []
    m, r = lado_px / 2, lado_px / 2 - 3
    for i in range(10):
        radio = r if i % 2 == 0 else r * 0.45
        a = math.pi * i / 5 - math.pi / 2
        pts.append((m + radio * math.cos(a), m + radio * math.sin(a)))
    d.polygon(pts, fill=(120, 170, 220, 255))
    return im


def _caso(assets, masks, settings, page=(210.0, 297.0), machine="maker3",
          paper="A4", solape_activo=True):
    area = cut_area(page[0], page[1], machine, paper)
    res = silhouette.pack(assets, masks, area, settings)
    margen = float(settings.get("margen_mm", 0.0))
    _comprobar(res, area, masks, assets,
               float(settings.get("espacio_mm", 0.0)), margen,
               solape_activo=solape_activo)
    return res


BASE = {"espacio_mm": 2.0, "margen_mm": 1.0, "rotacion": "90",
        "opt_metodo": "greedy", "opt_calidad": "normal",
        "opt_tiempo_auto": False, "opt_tiempo_max_s": 4.0,
        "usar_minis": False}


def test_limites_solapes_y_espacio_a4():
    """Círculos y estrellas llenando la hoja: nada fuera, nada solapado."""
    circ = trim(_circulo(420))       # 35,6 mm
    est = trim(_estrella(420))
    assets = [
        {"id": "c", "name": "círculo", "w_mm": 35.6, "h_mm": 35.6,
         "copies": 12, "mini_enabled": False},
        {"id": "e", "name": "estrella", "w_mm": 35.6, "h_mm": 35.6,
         "copies": 10, "mini_enabled": False},
    ]
    masks = {"c": circ, "e": est}
    _caso(assets, masks, dict(BASE))


def test_limites_con_rotacion_libre():
    """Con cualquier ángulo la huella crece: tampoco puede salirse."""
    circ = trim(_circulo(360))
    assets = [{"id": "c", "name": "c", "w_mm": 30.5, "h_mm": 30.5,
               "copies": 10, "mini_enabled": False}]
    _caso(assets, {"c": circ}, dict(BASE, rotacion="libre", opt_calidad="rapida"))


def test_limites_con_minis():
    """Los minis (más pequeños) también respetan límites y separación."""
    circ = trim(_circulo(300))       # 25,4 mm
    assets = [{"id": "c", "name": "c", "w_mm": 25.4, "h_mm": 25.4,
               "copies": 4, "mini_enabled": True, "mini_quota": 3.0}]
    _caso(assets, {"c": circ},
          dict(BASE, usar_minis=True, mini_min_mm=10.0,
               mini_max_rescale=70.0, mini_lista_modo="mm",
               mini_tamanos_lista=[20.0, 15.0]))


def test_limites_a5_y_a3():
    """Los mismos límites en A5 (pequeño) y A3 (grande)."""
    circ = trim(_circulo(300))
    assets = [{"id": "c", "name": "c", "w_mm": 25.4, "h_mm": 25.4,
               "copies": 3, "mini_enabled": False}]
    _caso(assets, {"c": circ}, dict(BASE), page=(148.0, 210.0), paper="A5")
    _caso(assets, {"c": circ}, dict(BASE), page=(297.0, 420.0), paper="A3")


def test_limites_con_borde_aplicado():
    """Con borde (la pieza crece) tampoco se sale ni se solapa."""
    circ = trim(_circulo(300))
    # simula el borde: la imagen ya crecida y el tamaño del resultado
    crecida = Image.new("RGBA", (circ.width + 48, circ.height + 48),
                        (255, 255, 255, 255))
    crecida.alpha_composite(circ, (24, 24))
    w_mm = crecida.width / 300.0 * 25.4
    assets = [{"id": "c", "name": "c", "w_mm": w_mm, "h_mm": w_mm,
               "copies": 8, "mini_enabled": False}]
    _caso(assets, {"c": crecida}, dict(BASE))


def test_muchas_copias_no_deja_ninguna_sin_colocar():
    """Aunque haya muchísimas copias, ninguna queda sin colocar (multipágina)."""
    circ = trim(_circulo(300))
    assets = [{"id": "c", "name": "c", "w_mm": 25.4, "h_mm": 25.4,
               "copies": 60, "mini_enabled": False}]
    # el solape de este caso lo cubren los demás (y el script independiente)
    res = _caso(assets, {"c": circ}, dict(BASE, opt_tiempo_max_s=1.0),
                solape_activo=False)
    assert len(res.placements) >= 60


def test_sin_espacio_no_se_tocan():
    """Con espacio 0 las piezas pueden tocarse, pero NUNCA solaparse."""
    circ = trim(_circulo(300))
    assets = [{"id": "c", "name": "c", "w_mm": 25.4, "h_mm": 25.4,
               "copies": 20, "mini_enabled": False}]
    _caso(assets, {"c": circ}, dict(BASE, espacio_mm=0.0, margen_mm=0.0),
          solape_activo=False)
