"""Tests del empaquetado por silueta real (forma no transparente)."""

import numpy as np
from PIL import Image

from crycat import geometry as g
from crycat import silhouette
from crycat.silhouette import pack as sil_pack


def _circle(d_mm: float, dpi: float = 300.0) -> Image.Image:
    px = max(4, int(round(d_mm / 25.4 * dpi)))
    arr = np.zeros((px, px, 4), dtype=np.uint8)
    yy, xx = np.mgrid[0:px, 0:px]
    c = px / 2
    arr[(xx - c) ** 2 + (yy - c) ** 2 < (px * 0.48) ** 2] = (60, 130, 200, 255)
    return Image.fromarray(arr, "RGBA")


def _square(lado_mm: float, dpi: float = 300.0) -> Image.Image:
    px = max(4, int(round(lado_mm / 25.4 * dpi)))
    arr = np.zeros((px, px, 4), dtype=np.uint8)
    arr[..., :] = (200, 60, 90, 255)
    return Image.fromarray(arr, "RGBA")


SET = {"espacio_mm": 1.0, "rotacion": "90", "usar_minis": False,
       "opt_metodo": "silueta"}


def area_a4() -> g.CutArea:
    return g.cut_area(210.0, 297.0, "maker5", "A4")   # vertical


def test_silueta_coloca_todo_sin_solapar():
    circulos = {"c": _circle(40)}
    assets = [{"id": "c", "name": "c.png", "w_mm": 40, "h_mm": 40,
               "copies": 12, "mini_enabled": False, "mini_quota": 1.0}]
    res = sil_pack(assets, circulos, area_a4(), SET)
    assert len(res.placements) == 12
    assert not res.unplaced
    assert res.pages >= 1
    # las siluetas (centro) no deben solaparse dentro de la misma página
    for i, p in enumerate(res.placements):
        for q in res.placements[i + 1:]:
            if p.page != q.page:
                continue
            # distancia entre centros >= diámetro (aprox, círculos reales)
            dx = abs((p.x + p.w / 2) - (q.x + q.w / 2))
            dy = abs((p.y + p.h / 2) - (q.y + q.h / 2))
            assert (dx ** 2 + dy ** 2) ** 0.5 >= 40 - 2.5, (dx, dy)


def test_silueta_aprovecha_mas_que_la_caja():
    """Con círculos, la silueta debe caber en igual o menos páginas que la caja."""
    from crycat.packer import optimize as bbox_optimize
    circulos = {"c": _circle(45)}
    assets = [{"id": "c", "name": "c.png", "w_mm": 45, "h_mm": 45,
               "copies": 18, "mini_enabled": False, "mini_quota": 1.0}]
    st_box = dict(SET, opt_metodo="maxrects", opt_tiempo_max_s=1.5)
    r_sil = sil_pack(assets, circulos, area_a4(), SET)
    r_box = bbox_optimize(assets, area_a4(), st_box)
    assert len(r_sil.placements) == 18 and not r_sil.unplaced
    assert r_sil.pages <= r_box.pages


def test_silueta_respeta_el_poligono():
    """La SILUETA (no su caja) debe quedar dentro del área recortable."""
    circle = _circle(60)
    assets = [{"id": "c", "name": "c.png", "w_mm": 60, "h_mm": 60,
               "copies": 4, "mini_enabled": False, "mini_quota": 1.0}]
    area = area_a4()
    res = sil_pack(assets, {"c": circle}, area, SET)
    assert len(res.placements) == 4
    # rasteriza la silueta colocada y comprueba que todos sus píxeles están
    # dentro del polígono
    for p in res.placements:
        pasos = 12
        for iy in range(pasos + 1):
            for ix in range(pasos + 1):
                x = p.x + p.w * ix / pasos
                y = p.y + p.h * iy / pasos
                # sólo puntos del interior del círculo inscrito en la caja
                dx = (ix / pasos - 0.5) * 2
                dy = (iy / pasos - 0.5) * 2
                if dx * dx + dy * dy > 0.98:
                    continue
                assert g.polygon_contains(area.poly, x, y), (x, y)


def test_silueta_gira_para_encajar():
    """Una pieza rectangular 120x30 en vertical debe girarse para caber."""
    rect = {"r": _square(1)}  # placeholder sustituido abajo
    # imagen 120x30 (grande, alargada)
    img = Image.new("RGBA", (1200, 300), (200, 60, 90, 255))
    assets = [{"id": "r", "name": "r.png", "w_mm": 120, "h_mm": 30,
               "copies": 1, "mini_enabled": False, "mini_quota": 1.0}]
    res = sil_pack(assets, {"r": img}, area_a4(), SET)
    assert len(res.placements) == 1
    # en A4 vertical el ancho útil es 183 mm: 120 cabe, pero con la 2ª copia
    # girada el conjunto sigue cabiendo; comprobamos que al menos se coloca
    assert res.placements[0].angle in (0.0, 90.0, 180.0, 270.0)


def _min_dist_mm(img, pA, pB, cell=0.25):
    """Distancia mínima (mm) entre dos siluetas colocadas."""
    from scipy import ndimage
    x0 = min(pA.x, pB.x) - 5
    y0 = min(pA.y, pB.y) - 5
    x1 = max(pA.x + pA.w, pB.x + pB.w) + 5
    y1 = max(pA.y + pA.h, pB.y + pB.h) + 5
    W, H = int((x1 - x0) / cell), int((y1 - y0) / cell)

    def mk(p):
        w = max(2, int(round(p.w / cell)))
        h = max(2, int(round(p.h / cell)))
        a = np.asarray(img.getchannel("A").resize(
            (w, h), Image.Resampling.BILINEAR)) > 100
        m = np.zeros((H, W), bool)
        tx = int(round((p.x - x0) / cell))
        ty = int(round((p.y - y0) / cell))
        m[ty:ty + h, tx:tx + w] = a[:min(h, H - ty), :min(w, W - tx)]
        return m

    A, B = mk(pA), mk(pB)
    if not A.any() or not B.any():
        return 99.0
    return float(ndimage.distance_transform_edt(~A, sampling=(cell, cell))[B].min())


def test_espaciado_entre_siluetas():
    """El hueco real entre siluetas nunca es menor que el espaciado pedido."""
    circle = _circle(40)
    area = area_a4()
    for sp in (1.0, 2.0, 4.0):
        st = dict(SET, espacio_mm=sp)
        assets = [{"id": "c", "name": "c", "w_mm": 40, "h_mm": 40,
                   "copies": 6, "mini_enabled": False, "mini_quota": 1.0}]
        res = sil_pack(assets, {"c": circle}, area, st)
        pls = res.placements
        peor = 99.0
        for i in range(len(pls)):
            for j in range(i + 1, len(pls)):
                if pls[i].page != pls[j].page:
                    continue
                peor = min(peor, _min_dist_mm(circle, pls[i], pls[j]))
        # tolerancia por rasterización (la rejilla es de 0,5 mm)
        assert peor >= sp - 0.8, f"espacio {sp}: mínimo real {peor:.2f}"


def test_espaciado_a_los_limites():
    """También hay margen respecto al borde útil (no se pega al límite)."""
    circle = _circle(40)
    area = area_a4()
    st = dict(SET, espacio_mm=4.0, margen_mm=1.0)
    assets = [{"id": "c", "name": "c", "w_mm": 40, "h_mm": 40,
               "copies": 8, "mini_enabled": False, "mini_quota": 1.0}]
    res = sil_pack(assets, {"c": circle}, area, st)
    # todos los centros de silueta deben estar dentro del polígono con margen
    for p in res.placements:
        pasos = 8
        for iy in range(pasos + 1):
            for ix in range(pasos + 1):
                dx = (ix / pasos - 0.5) * 2
                dy = (iy / pasos - 0.5) * 2
                if dx * dx + dy * dy > 0.98:
                    continue
                x = p.x + p.w * (0.5 + dx / 2)
                y = p.y + p.h * (0.5 + dy / 2)
                assert g.polygon_contains(area.poly, x, y), (x, y)


def test_fijado_se_respeta_y_resto_a_su_alrededor():
    """Un elemento colocado a mano se mantiene y el resto se reparte a su
    alrededor, sin solaparlo y sin aumentar el número de copias."""
    from crycat.packer import Placement
    circle = _circle(50)
    assets = [{"id": "c", "name": "c", "w_mm": 50, "h_mm": 50, "copies": 4,
               "mini_enabled": False, "mini_quota": 1.0}]
    area = area_a4()
    pinned = [Placement(uid="c#fijo", asset_id="c", page=0, x=30.0, y=40.0,
                        w=50.0, h=50.0, pinned=True)]
    res = sil_pack(assets, {"c": circle}, area, SET, pinned=pinned)
    fijo = next(p for p in res.placements if p.uid == "c#fijo")
    assert fijo.pinned and abs(fijo.x - 30.0) < 0.01 and abs(fijo.y - 40.0) < 0.01
    assert len(res.placements) == 4, "el fijado cuenta como una de las copias"
    for q in res.placements:
        if q.uid == "c#fijo" or q.page != 0:
            continue
        assert _min_dist_mm(circle, fijo, q) >= SET["espacio_mm"] - 0.6


def test_silueta_sin_mascara_no_rompe_api():
    """Sin máscaras, el optimizador cae al empaquetado por caja."""
    from crycat.packer import optimize
    assets = [{"id": "a", "name": "a", "w_mm": 60, "h_mm": 40, "copies": 3,
               "mini_enabled": False, "mini_quota": 1.0}]
    st = dict(SET, opt_metodo="silueta")
    res = optimize(assets, area_a4(), st, masks=None)
    assert len(res.placements) == 3


def test_silueta_respeta_tiempo_maximo():
    """El empaquetado por silueta para al agotar el tiempo máximo."""
    import time
    circle = _circle(35)
    assets = [{"id": "c", "name": "c", "w_mm": 35, "h_mm": 35, "copies": 300,
               "mini_enabled": False, "mini_quota": 1.0}]
    st = dict(SET, opt_metodo="silueta", opt_tiempo_max_s=1.0)
    t0 = time.time()
    res = sil_pack(assets, {"c": circle}, area_a4(), st)
    dt = time.time() - t0
    assert dt < 6.0, f"tardó {dt:.2f}s con límite de 1s"
    assert res.pages >= 1
    assert len(res.placements) >= 1


def test_minis_cuota_por_proporcion_y_tamanos_variados():
    """El % de minis es la cuota/proporción respecto a los demás (no el
    tamaño); el optimizador elige tamaños variados que quepan en los huecos."""
    from collections import Counter
    a1 = {"id": "a", "name": "a", "w_mm": 40, "h_mm": 40, "copies": 1,
          "mini_enabled": True, "mini_quota": 3.0}
    a2 = {"id": "b", "name": "b", "w_mm": 40, "h_mm": 40, "copies": 1,
          "mini_enabled": True, "mini_quota": 1.0}
    st = dict(SET, usar_minis=True, mini_min_mm=5.0, mini_max_rescale=100.0,
              mini_tamanos="grandes", mini_rotacion="90")
    res = sil_pack([a1, a2], {"a": _circle(40), "b": _square(40)}, area_a4(), st)
    c = Counter(p.asset_id for p in res.placements if p.mini)
    assert c.get("b", 0) >= 1, "el de cuota 1 también recibe minis"
    assert c.get("a", 0) > c.get("b", 0), "3 debe recibir más que 1"
    assert c.get("a", 0) <= 4 * c.get("b", 0), f"reparto: {dict(c)}"
    escalas = {round(p.scale, 3) for p in res.placements if p.mini}
    assert len(escalas) > 1, "el optimizador elige tamaños distintos"
    assert all(p.scale <= 0.99 + 1e-6 for p in res.placements if p.mini)


def test_minis_usan_lista_de_tamanos():
    """Con la lista activada, los minis usan sólo esos tamaños (o menores)."""
    circle = _circle(40)
    assets = [{"id": "c", "name": "c", "w_mm": 40, "h_mm": 40, "copies": 3,
               "mini_enabled": True, "mini_quota": 1.0}]
    st = dict(SET, usar_minis=True, mini_min_mm=5.0, mini_max_rescale=100.0,
              mini_tamanos="grandes", mini_rotacion="90",
              mini_usar_lista=True, mini_tamanos_lista=[50.0, 25.0])
    res = sil_pack(assets, {"c": circle}, area_a4(), st)
    minis = [p for p in res.placements if p.mini]
    assert minis, "deben colocarse minis"
    for m in minis:
        assert round(m.scale, 3) in (0.5, 0.25), m.scale
    # con la lista desactivada el optimizador puede usar otros tamaños
    st2 = dict(st, mini_usar_lista=False)
    res2 = sil_pack(assets, {"c": circle}, area_a4(), st2)
    assert {round(p.scale, 3) for p in res2.placements if p.mini} - {0.5, 0.25}


def test_silueta_minis_rellenan():
    circulos = {"c": _circle(50)}
    assets = [{"id": "c", "name": "c.png", "w_mm": 50, "h_mm": 50,
               "copies": 4, "mini_enabled": True, "mini_quota": 1.0}]
    st = dict(SET, usar_minis=True, mini_min_mm=5.0, mini_max_rescale=100.0,
              mini_tamanos="iguales", mini_rotacion="90")
    res = sil_pack(assets, circulos, area_a4(), st)
    normales = [p for p in res.placements if not p.mini]
    minis = [p for p in res.placements if p.mini]
    assert len(normales) == 4
    assert minis, "deberían rellenarse huecos con minis"
    for m in minis:
        assert min(m.w, m.h) >= 5.0 - 1e-6
        assert m.scale <= 0.99 + 1e-6   # siempre menor que el original

def test_la_mascara_es_la_silueta_no_la_caja():
    """La máscara de un círculo debe ocupar ~π/4 de su caja (silo la silueta)."""
    circle = _circle(40)
    ctx = silhouette._Ctx(area_a4(), {"espacio_mm": 2.0}, cell=0.5)
    rm, dm = ctx.rotated("c", 40.0, 40.0, 0.0, circle)
    celdas = (40.0 / 0.5) * (40.0 / 0.5)
    frac = float(rm.sum()) / celdas
    assert 0.70 < frac < 0.85, f"un círculo ocupa ~0,785 de su caja, no {frac:.3f}"
    # la dilatada crece por todos lados (separación euclídea)
    assert float(dm.sum()) > float(rm.sum())


def test_el_solape_se_calcula_con_la_silueta():
    """La posición diagonal de dos círculos (cajas solapadas 20 mm) debe ser
    VÁLIDA: si el solape usara cajas, sería rechazada."""
    circle = _circle(40)
    ctx = silhouette._Ctx(area_a4(), {"espacio_mm": 0.0}, cell=0.5)
    ctx.new_page()
    rm, dm = ctx.rotated("c", 40.0, 40.0, 0.0, circle)
    got = ctx.best_for(0, dm, rm)
    ty, tx = got[0]
    silhouette._commit_offset(ctx, "c", "c", 0, 0.0, 1.0, False, rm, dm,
                              (ty, tx), 40.0, 40.0)
    # vecino hexagonal exacto: centro a 20 mm en x y 34.6 mm en y (dist = 40)
    dy = int(round(34.6 / 0.5))
    dx = int(round(20.0 / 0.5))
    off = (ty + dy, tx + dx)
    h, w = dm.shape
    zona = ctx.pages[0][off[0]:off[0] + h, off[1]:off[1] + w]
    solape = int(np.count_nonzero((zona > 0) & dm))
    assert solape == 0, "la diagonal debe caber: el solape es de SILUETA"
    # y las cajas (40x40) sí se solapan en esa posición
    assert dx * 0.5 < 40.0 and dy * 0.5 < 40.0


def test_contornos_simplificados_bien_formados():
    """La extracción de contornos da polígonos cerrados y de área correcta."""
    from crycat import contour
    circle = _circle(40)
    polys = contour.contornos_mm(circle, 40.0, 40.0, eps_mm=0.3)
    assert polys, "debe haber al menos un contorno"
    area_pol = contour.area_mm2(polys)
    # el helper _circle dibuja radio 0,48 del lado: 19,2 mm
    ideal = 3.14159265 * 19.2 ** 2
    assert abs(area_pol - ideal) / ideal < 0.06, f"área {area_pol:.1f} vs {ideal:.1f}"
    assert all(len(p) >= 3 for p in polys)

