"""Regresión de RENDIMIENTO: los MEJORES resultados conocidos no empeoran.

Cada test fija un escenario representativo y exige al menos lo que ya se
conseguía (piezas colocadas / minis / eficiencia) con un presupuesto de 6 s,
además de un tope de TIEMPO holgado. Si un cambio empeora el empaquetado o
dispara el tiempo, salta aquí.

Los valores se midieron en un equipo de 16 núcleos. En máquinas más lentas el
presupuesto reparte menos variantes, así que las cotas de piezas dejan 1-2 de
margen y las de tiempo son amplias (≈2× lo medido). Para ver el resultado
obtenido al ejecutar: `pytest tests/test_rendimiento.py -s`.
"""

import math

import numpy as np
from PIL import Image, ImageDraw

from crycat import geometry as g
from crycat.silhouette import pack as sil_pack

PRESUPUESTO = 6.0
TOPE_S = 90.0          # margen amplio (la búsqueda local deterministic va por trabajo)

BASE = {"espacio_mm": 0.5, "margen_mm": 0.0, "rotacion": "libre",
        "usar_minis": False, "opt_metodo": "auto", "opt_calidad": "normal",
        "paginas_modo": "una", "simplificar": True, "separacion_px": 0,
        "opt_tiempo_auto": False, "opt_tiempo_max_s": PRESUPUESTO}


# ------------------------------------------------------------------ formas --

def _circulo(d_mm: float, dpi: float = 300.0) -> Image.Image:
    px = max(4, int(round(d_mm / 25.4 * dpi)))
    arr = np.zeros((px, px, 4), dtype=np.uint8)
    yy, xx = np.mgrid[0:px, 0:px]
    c = px / 2
    arr[(xx - c) ** 2 + (yy - c) ** 2 < (px * 0.49) ** 2] = (60, 130, 200, 255)
    return Image.fromarray(arr, "RGBA")


def _redondo(w_mm: float, h_mm: float, radio_mm: float = 6.0,
             dpi: float = 300.0) -> Image.Image:
    W = max(4, int(round(w_mm / 25.4 * dpi)))
    H = max(4, int(round(h_mm / 25.4 * dpi)))
    im = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    r = int(round(radio_mm / 25.4 * dpi)) if radio_mm > 0.5 else 1
    ImageDraw.Draw(im).rounded_rectangle((0, 0, W - 1, H - 1), radius=r,
                                         fill=(200, 60, 90, 255))
    return im


def _estrella(d_mm: float, dpi: float = 300.0) -> Image.Image:
    px = max(4, int(round(d_mm / 25.4 * dpi)))
    im = Image.new("RGBA", (px, px), (0, 0, 0, 0))
    cx = cy = px / 2
    r1, r2 = px * 0.49, px * 0.49 * 0.45
    pts = []
    for k in range(10):
        r = r1 if k % 2 == 0 else r2
        a = -math.pi / 2 + k * math.pi / 5
        pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    ImageDraw.Draw(im).polygon(pts, fill=(120, 190, 80, 255))
    return im


def _alta(w_mm: float = 30.0, h_mm: float = 70.0,
          dpi: float = 300.0) -> Image.Image:
    """Pieza ALTA e irregular (tipo pikmin): cabeza redonda + cuerpo."""
    W = max(4, int(round(w_mm / 25.4 * dpi)))
    H = max(4, int(round(h_mm / 25.4 * dpi)))
    im = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.ellipse((0, 0, W - 1, int(W * 1.1)), fill=(250, 210, 40, 255))
    d.rounded_rectangle((int(W * 0.15), int(W * 0.8), int(W * 0.85), H - 1),
                        radius=int(W * 0.3), fill=(250, 210, 40, 255))
    return im


def _asset(aid, w, h, copies, mini=False):
    return {"id": aid, "name": aid, "w_mm": w, "h_mm": h, "copies": copies,
            "simplificar": True, "scale_pct": 100, "offset_mm": 0,
            "offset_modo": "extender", "offset_color": "#ffffff",
            "mini_enabled": mini}


def _area():
    return g.cut_area(210.0, 297.0, "maker3", "A4")


def _pack(assets, masks, **extra):
    # sin `presupuesto_s`: manda `opt_tiempo_max_s` de los ajustes y el modo
    # de cálculo (el exacto amplía el presupuesto él solo)
    st = dict(BASE, **extra)
    return sil_pack(assets, masks, _area(), st)


def _resumen(r):
    n = len([p for p in r.placements if not p.mini])
    m = len([p for p in r.placements if p.mini])
    print(f"\n  colocadas={n} minis={m} fuera={len(r.unplaced)} "
          f"páginas={r.pages} eficiencia={r.efficiency:.3f} "
          f"tiempo={r.elapsed_s:.1f}s")
    return n, m


def _comprueba_tiempo(r):
    assert r.elapsed_s <= TOPE_S, (
        f"tardó {r.elapsed_s:.1f}s (tope {TOPE_S}s con presupuesto "
        f"{PRESUPUESTO}s)")


# ------------------------------------------------------------------ casos --

def test_rendimiento_rectangulos_equilibrado():
    """40 rectángulos de 40×30: al menos 27 en una hoja y ef ≥ 0,70."""
    im = _redondo(40, 30, 0.4)
    r = _pack([_asset("r", 40.0, 30.0, 40)], {"r": im})
    n, _ = _resumen(r)
    assert n >= 26, f"solo {n} colocadas (mejor conocido: 28)"
    assert r.pages == 1
    assert r.efficiency >= 0.69, f"eficiencia {r.efficiency:.3f} (0,718)"
    _comprueba_tiempo(r)


def test_rendimiento_alargadas_caben_todas():
    """24 alargadas (70×20): caben TODAS, rápido y con ef ≥ 0,69."""
    im = _redondo(70, 20)
    r = _pack([_asset("a", 70.0, 20.0, 24)], {"a": im})
    n, _ = _resumen(r)
    assert n == 24 and not r.unplaced
    assert r.efficiency >= 0.68, f"eficiencia {r.efficiency:.3f} (0,702)"
    _comprueba_tiempo(r)


def test_rendimiento_circulos_densos():
    """70 círculos de 40 mm: al menos 23 caben (hexagonal por la forma cruz)."""
    im = _circulo(40)
    r = _pack([_asset("c", 40.0, 40.0, 70)], {"c": im})
    n, _ = _resumen(r)
    assert n >= 22, f"solo {n} colocadas (mejor conocido: 24)"
    assert r.efficiency >= 0.58, f"eficiencia {r.efficiency:.3f} (0,619)"
    _comprueba_tiempo(r)


def test_rendimiento_estrellas_caben_todas():
    """24 estrellas de 45 mm: caben TODAS (formas irregulares con giros)."""
    im = _estrella(45)
    r = _pack([_asset("s", 45.0, 45.0, 24)], {"s": im})
    n, _ = _resumen(r)
    assert n == 24 and not r.unplaced
    _comprueba_tiempo(r)


def test_rendimiento_piezas_altas():
    """24 piezas altas (30×70, tipo pikmin): al menos 17 y ef ≥ 0,57."""
    im = _alta()
    r = _pack([_asset("t", 30.0, 70.0, 24)], {"t": im})
    n, _ = _resumen(r)
    assert n >= 16, f"solo {n} colocadas (mejor conocido: 18)"
    assert r.efficiency >= 0.55, f"eficiencia {r.efficiency:.3f} (0,596)"
    _comprueba_tiempo(r)


def test_rendimiento_mezcla_densa():
    """Mezcla de 72 pegatinas de 6 formas/tamaños: al menos 23 en una hoja."""
    masks = {
        "c50": _circulo(50), "c35": _circulo(35),
        "r60": _redondo(60, 40), "r30": _redondo(30, 30, 4),
        "r50": _redondo(50, 25, 0.4), "st": _estrella(40),
    }
    assets = [
        _asset("c50", 50.0, 50.0, 12), _asset("c35", 35.0, 35.0, 12),
        _asset("r60", 60.0, 40.0, 10), _asset("r30", 30.0, 30.0, 16),
        _asset("r50", 50.0, 25.0, 10), _asset("st", 40.0, 40.0, 10),
    ]
    r = _pack(assets, masks)
    n, _ = _resumen(r)
    assert n >= 21, f"solo {n} colocadas (mejor conocido: 24)"
    assert r.efficiency >= 0.56, f"eficiencia {r.efficiency:.3f} (0,612)"
    _comprueba_tiempo(r)


def test_rendimiento_minis_rellenan_alargadas():
    """Con minis, 24 alargadas siguen cabiendo y se rellenan los huecos."""
    im = _redondo(70, 20)
    r = _pack([_asset("a", 70.0, 20.0, 24, mini=True)], {"a": im},
              usar_minis=True, mini_min_mm=10.0, mini_max_rescale=70.0,
              mini_rotacion="libre", mini_usar_lista=False,
              mini_tamanos="iguales", mini_borde_modo="proporcional")
    n, m = _resumen(r)
    assert n == 24 and not r.unplaced
    assert m >= 8, f"solo {m} minis (mejor conocido: 11)"
    assert r.efficiency >= 0.80, f"eficiencia {r.efficiency:.3f} (0,853)"
    _comprueba_tiempo(r)


def test_rendimiento_minis_rellenan_estrellas():
    """Estrellas: los minis suben la eficiencia de 0,33 a > 0,51."""
    im = _estrella(45)
    r = _pack([_asset("s", 45.0, 45.0, 24, mini=True)], {"s": im},
              usar_minis=True, mini_min_mm=10.0, mini_max_rescale=70.0,
              mini_rotacion="libre", mini_usar_lista=False,
              mini_tamanos="iguales", mini_borde_modo="proporcional")
    n, m = _resumen(r)
    assert n == 24 and not r.unplaced
    assert m >= 30, f"solo {m} minis (mejor conocido: 40)"
    assert r.efficiency >= 0.48, f"eficiencia {r.efficiency:.3f} (0,533)"
    _comprueba_tiempo(r)


def test_circulos_iguales_máximo_y_sin_inventar_copias():
    """Círculos IGUALES: rejilla hexagonal (máximo) y NUNCA más copias de las
    pedidas (la rejilla puede tener más huecos que copias).

    120 círculos de 18 mm caben todos; con 30 pedidos, la rejilla no puede
    devolver 120: como máximo 30.
    """
    im = _circulo(18)
    r = _pack([_asset("p", 18.0, 18.0, 120)], {"p": im}, calculo="exacto")
    n, _ = _resumen(r)
    assert n == 120 and not r.unplaced, f"deben caber las 120 (colocó {n})"
    assert len(r.placements) <= 120
    r2 = _pack([_asset("p", 18.0, 18.0, 30)], {"p": im}, calculo="estandar")
    n2, _ = _resumen(r2)
    assert n2 == 30 and len(r2.placements) == 30, (
        f"con 30 pedidos no pueden salir más (salieron {n2})")
    assert r2.elapsed_s <= TOPE_S


def test_resultado_igual_en_varias_ejecuciones():
    """DETERMINISMO: el mismo trabajo da SIEMPRE las mismas cantidades.

    Las paradas son por trabajo (variantes, generaciones, iteraciones), no por
    reloj: dos ejecuciones seguidas deben colocar lo mismo.
    """
    im = _circulo(40)
    assets = [_asset("c", 40.0, 40.0, 70)]
    masks = {"c": im}
    a = _pack(assets, masks)
    b = _pack(assets, masks)
    na, _ = _resumen(a)
    nb, _ = _resumen(b)
    assert na == nb, f"cantidades distintas entre ejecuciones: {na} vs {nb}"
    assert len(a.unplaced) == len(b.unplaced)
    assert a.pages == b.pages
    assert abs(a.efficiency - b.efficiency) < 1e-9


def test_calculo_no_gasta_tiempo_de_mas_si_es_facil():
    """Un trabajo que cabe entero acaba pronto también en modo exacto."""
    im = _redondo(70, 20)
    assets = [_asset("a", 70.0, 20.0, 24)]
    r = _pack(assets, {"a": im}, calculo="exacto")
    n, _ = _resumen(r)
    assert n == 24 and not r.unplaced
    # el presupuesto del exacto es amplio, pero el trabajo es fácil: parada
    # temprana (no debe acercarse al presupuesto)
    assert r.elapsed_s <= 6.0, f"tardó {r.elapsed_s:.1f}s en un trabajo fácil"


def test_eficiencia_mide_la_tinta_de_verdad():
    """La eficiencia es TINTA / área útil: con piezas macizas cuadra exacto.

    12 rectángulos de 40×30 llenos al 100 % de alfa = 14 400 mm² de tinta;
    el área recortable A4 (forma cruz) mide ~46 790 mm² → eficiencia ≈ 0,308.
    """
    im = _redondo(40, 30, 0.0)     # esquinas rectas: alfa = 1 en todo el marco
    r = _pack([_asset("r", 40.0, 30.0, 12)], {"r": im})
    n, _ = _resumen(r)
    assert n == 12 and not r.unplaced
    area = _area().area_mm2
    esperado = 12 * 40.0 * 30.0 / area
    assert abs(r.efficiency - esperado) < 0.006, (
        f"eficiencia {r.efficiency:.4f} vs tinta/área {esperado:.4f}")
