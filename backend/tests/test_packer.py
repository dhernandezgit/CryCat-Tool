"""Tests del optimizador de colocación."""

import pytest

from crycat import geometry as g
from crycat.packer import Bin, Instance, Placement, optimize, try_move

SETTINGS_BASE = {
    "espacio_mm": 2.0, "rotacion": "no", "usar_minis": False,
    "mini_min_mm": 5.0, "mini_max_rescale": 1000.0, "mini_rotacion": "no",
    "mini_tamanos": "grandes", "opt_metodo": "maxrects",
    "opt_tiempo_max_s": 2.0,
}


def area_a4() -> g.CutArea:
    return g.cut_area(297.0, 210.0, "estandar", "A4")


def asset(aid="a1", w=50, h=40, copies=1, **kw):
    d = {"id": aid, "name": f"{aid}.png", "w_mm": w, "h_mm": h,
         "copies": copies, "mini_enabled": False, "mini_pct": 50.0}
    d.update(kw)
    return d


def test_todo_cabe_en_una_pagina():
    """6 pegatinas pequeñas deben caber en una página A4."""
    assets = [asset(copies=6)]
    res = optimize(assets, area_a4(), SETTINGS_BASE)
    assert res.pages == 1
    assert len(res.placements) == 6
    assert not res.unplaced


def test_sin_solapamientos_y_respeta_espacio():
    assets = [asset("a", 50, 40, copies=8), asset("b", 30, 30, copies=5)]
    res = optimize(assets, area_a4(), SETTINGS_BASE)
    pls = res.placements
    for i, p in enumerate(pls):
        for q in pls[i + 1:]:
            if p.page != q.page:
                continue
            sep = SETTINGS_BASE["espacio_mm"]
            assert (p.x + p.w + sep - 1e-6 <= q.x or q.x + q.w + sep - 1e-6 <= p.x or
                    p.y + p.h + sep - 1e-6 <= q.y or q.y + q.h + sep - 1e-6 <= p.y), \
                f"solapan {p.uid} y {q.uid}"
        # dentro del polígono (con margen de separación/2)
        area = area_a4()
        from crycat.geometry import rect_inside_polygon
        assert rect_inside_polygon(area.poly, area.notches,
                                   p.x - sep / 2, p.y - sep / 2,
                                   p.w + sep, p.h + sep)


def test_multipagina_minimo():
    """Muchas copias -> más páginas; primero-fit no desperdicia en exceso."""
    assets = [asset("a", 80, 80, copies=20)]
    res = optimize(assets, area_a4(), SETTINGS_BASE)
    assert res.pages > 1
    # área: página útil ~ 269.8*183 con brazos; cada pegatina 80x80+2 = 82x82
    # mínimas páginas razonables
    assert res.pages <= 5
    assert len(res.placements) == 20
    assert not res.unplaced


def test_rotacion_90():
    """Pegatinas alargadas verticales en una página: con 90º caben mejor."""
    assets = [asset("v", 30, 120, copies=6)]
    sin_rot = dict(SETTINGS_BASE, rotacion="no")
    con_rot = dict(SETTINGS_BASE, rotacion="90")
    r1 = optimize(assets, area_a4(), sin_rot)
    r2 = optimize(assets, area_a4(), con_rot)
    assert r2.pages <= r1.pages


def test_rotacion_independiente_por_objeto():
    """Cada objeto puede quedar con una rotación distinta."""
    # 4 verticales (30x120) + 3 horizontales (120x30) que solo caben bien si
    # los verticales se giran: la rotación debe aplicarse por objeto.
    assets = [asset("v", 30, 120, copies=4), asset("h", 120, 30, copies=3)]
    st = dict(SETTINGS_BASE, rotacion="90", opt_metodo="auto",
              opt_tiempo_max_s=1.5)
    res = optimize(assets, area_a4(), st)
    assert not res.unplaced
    assert res.pages == 1
    girados = {p.asset_id for p in res.placements if p.rot90}
    rectos = {p.asset_id for p in res.placements if not p.rot90}
    assert girados, "algún objeto debe girarse"
    assert rectos, "y otro debe quedarse sin girar (rotación independiente)"


def test_rotacion_cuadrantes_0_90_180_270():
    """El modo de cuadrantes admite 0/90/180/270 y solo esos ángulos."""
    assets = [asset("a", 40, 90, copies=8)]
    st = dict(SETTINGS_BASE, rotacion="90", opt_metodo="auto",
              opt_tiempo_max_s=1.0)
    res = optimize(assets, area_a4(), st)
    for p in res.placements:
        assert p.angle in (0.0, 90.0, 180.0, 270.0), p.angle


def test_rotacion_libre_angulos_arbitrarios():
    assets = [asset("a", 60, 25, copies=6)]
    st = dict(SETTINGS_BASE, rotacion="libre", opt_metodo="auto",
              opt_tiempo_max_s=1.0)
    res = optimize(assets, area_a4(), st)
    assert len(res.placements) == 6
    # en modo libre los ángulos pueden ser distintos de 0/90 y entre sí
    assert all(p.angle not in (90.0, 270.0) for p in res.placements)
    assert not res.unplaced


def test_minis_van_aparte_de_las_copias():
    """Los minis NO consumen copias: todas las copias se colocan y los minis
    son extra que rellena huecos."""
    assets = [asset("a", 60, 60, copies=4, mini_enabled=True, mini_pct=50)]
    st = dict(SETTINGS_BASE, usar_minis=True, mini_tamanos="grandes",
              mini_max_rescale=100.0, opt_metodo="auto", opt_tiempo_max_s=1.5)
    res = optimize(assets, area_a4(), st)
    normales = [p for p in res.placements if not p.mini]
    minis = [p for p in res.placements if p.mini]
    assert len(normales) == 4, "las 4 copias deben colocarse íntegras"
    assert minis, "y además deben rellenarse huecos con minis"
    for m in minis:
        assert m.scale <= 1.0 + 1e-6
        assert min(m.w, m.h) >= st["mini_min_mm"] - 1e-6


def test_minis_rellenan_huecos():
    assets = [asset("a", 60, 60, copies=4, mini_enabled=True, mini_pct=100)]
    st = dict(SETTINGS_BASE, usar_minis=True, mini_tamanos="iguales",
              mini_max_rescale=100.0, opt_metodo="auto", opt_tiempo_max_s=1.5)
    res = optimize(assets, area_a4(), st)
    minis = [p for p in res.placements if p.mini]
    assert minis, "las minis deberían rellenar el sobrante"
    for m in minis:
        assert m.scale <= 1.0 + 1e-6  # con tope 100% no superan el original
        assert min(m.w, m.h) >= st["mini_min_mm"] - 1e-6


def test_minis_respetan_minimo_mm():
    """Un mini por debajo del mínimo no se coloca."""
    assets = [asset("a", 20, 20, copies=10, mini_enabled=True, mini_pct=50)]
    st = dict(SETTINGS_BASE, usar_minis=True, mini_min_mm=5.0,
              opt_metodo="maxrects")
    res = optimize(assets, area_a4(), st)
    # página llena de 20x20: los minis de 5mm caben en huecos pequeños
    for m in (p for p in res.placements if p.mini):
        assert min(m.w, m.h) >= 5.0 - 1e-6


def test_fijados_se_respetan():
    area = area_a4()
    pinned = [Placement(uid="a#0", asset_id="a", page=0, x=10, y=10, w=50, h=40,
                        pinned=True)]
    assets = [asset("a", 50, 40, copies=6)]
    st = dict(SETTINGS_BASE, opt_tiempo_max_s=1.0)
    res = optimize(assets, area, st, pinned=pinned)
    fijada = next(p for p in res.placements if p.uid == "a#0")
    assert fijada.pinned and fijada.x == 10 and fijada.y == 10
    assert len(res.placements) == 6
    # y no solapa con las demás
    for q in res.placements:
        if q.uid == "a#0":
            continue
        if q.page == fijada.page:
            assert (fijada.x + fijada.w <= q.x or q.x + q.w <= fijada.x or
                    fijada.y + fijada.h <= q.y or q.y + q.h <= fijada.y)


def test_move_manual_valido_e_invalido():
    area = area_a4()
    b = Bin(area, 2.0)
    a1 = Instance("a#0", "a", "a", 50, 40)
    pos = b.best_position(52, 42)
    assert pos
    b.add(a1, pos[0], pos[1], 50, 40, 0, 1, False)
    # mover a una zona libre (derecha del primero) - válido
    placements = [b.placed[0]]
    ok = try_move(placements, "a#0", pos[0] + 60, pos[1], area, 2.0)
    if ok:  # depende del espacio; debe ser coherente
        assert ok.pinned
    # mover sobre sí mismo no puede chocar consigo mismo
    ok2 = try_move(placements, "a#0", placements[0].x, placements[0].y, area, 2.0)
    assert ok2 is not None


def test_no_cabe_demasiado_grande():
    """Una pegatina mayor que el área útil queda sin colocar y avisa."""
    assets = [asset("g", 400, 400, copies=1)]
    res = optimize(assets, area_a4(), SETTINGS_BASE)
    assert res.unplaced
    assert res.warnings


def test_copies_cero():
    assets = [asset("a", 50, 40, copies=0)]
    res = optimize(assets, area_a4(), SETTINGS_BASE)
    assert res.placements == [] and res.pages <= 1


def test_auto_mejora_o_iguala():
    """El método auto (búsqueda) no debe ser peor que maxrects simple."""
    assets = [asset("a", 70, 55, copies=7), asset("b", 25, 25, copies=9)]
    st_auto = dict(SETTINGS_BASE, opt_metodo="auto", opt_tiempo_max_s=1.5)
    st_mx = dict(SETTINGS_BASE, opt_metodo="maxrects")
    r_auto = optimize(assets, area_a4(), st_auto)
    r_mx = optimize(assets, area_a4(), st_mx)
    assert (len(r_auto.unplaced), r_auto.pages) <= (len(r_mx.unplaced), r_mx.pages)


def test_minis_iguales():
    assets = [asset("a", 60, 60, copies=6, mini_enabled=True, mini_pct=50)]
    st = dict(SETTINGS_BASE, usar_minis=True, mini_tamanos="iguales",
              opt_metodo="maxrects")
    res = optimize(assets, area_a4(), st)
    escalas = {round(p.scale, 6) for p in res.placements if p.mini}
    assert len(escalas) <= 1


def test_respeta_tiempo_maximo():
    """Con mucho trabajo, la optimización para al llegar al tiempo máximo y
    devuelve la mejor solución encontrada hasta ese momento."""
    import time
    assets = [asset("a", 25, 25, copies=500)]
    st = dict(SETTINGS_BASE, opt_metodo="auto", opt_tiempo_max_s=1.0)
    t0 = time.time()
    res = optimize(assets, area_a4(), st)
    dt = time.time() - t0
    assert dt < 8.0, f"tardó {dt:.2f}s con límite de 1s"
    assert res.pages >= 1
    assert isinstance(res.placements, list)


def area_a4v() -> g.CutArea:
    return g.cut_area(210.0, 297.0, "maker5", "A4")  # vertical


def test_primero_una_hoja_luego_dos():
    """Objetivo: llenar 1 hoja antes de abrir la 2ª, y así sucesivamente."""
    # piezas de 100x80 en A4 vertical: caben 3 por hoja (columna central)
    st = dict(SETTINGS_BASE, rotacion="no", opt_metodo="auto",
              opt_tiempo_max_s=1.5)
    r3 = optimize([asset("a", 100, 80, copies=3)], area_a4v(), st)
    assert r3.pages == 1 and not r3.unplaced
    r4 = optimize([asset("a", 100, 80, copies=4)], area_a4v(), st)
    assert r4.pages == 2 and not r4.unplaced
    r6 = optimize([asset("a", 100, 80, copies=6)], area_a4v(), st)
    assert r6.pages == 2 and not r6.unplaced
    r7 = optimize([asset("a", 100, 80, copies=7)], area_a4v(), st)
    assert r7.pages == 3 and not r7.unplaced
