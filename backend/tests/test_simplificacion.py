"""Tests de la SIMPLIFICACIÓN de siluetas (formas simples) con piezas REALES.

Se usan los 7 pikmin de `tests/fixtures/pikmin` llenando la página (2-3 hojas)
y se compara empaquetar con el alfa real frente a empaquetar con las formas
simplificadas (círculo/rectángulo/triángulo/polígono):

  * con simplificación NUNCA queda nada sin colocar,
  * NUNCA necesita más páginas que sin simplificar,
  * y no tarda más (con margen, que los tiempos varían entre máquinas).
"""

from __future__ import annotations

import time
from pathlib import Path

import pytest
from PIL import Image

from crycat import silhouette
from crycat.geometry import cut_area
from crycat.imaging import trim
from crycat.packer import optimize

FIXTURES = Path(__file__).parent / "fixtures" / "pikmin"
NOMBRES = [
    "pikmin-yellow-lay-bud.png",
    "P4_White_Pikmin.webp",
    "unnamed (1).webp",
    "P4_Blue_Pikmin.webp",
    "pikmin-yellow.png",
    "red-pikmin.png",
    "pikmin-red-lay-leaf.png",
]


@pytest.fixture(scope="module")
def pikmin() -> tuple[list[dict], dict[str, Image.Image]]:
    """Los 7 pikmin con copias suficientes para llenar ~2 páginas."""
    masks: dict[str, Image.Image] = {}
    assets: list[dict] = []
    for i, nombre in enumerate(NOMBRES):
        img = trim(Image.open(FIXTURES / nombre).convert("RGBA"))
        masks[str(i)] = img
        assets.append({
            "id": str(i), "name": nombre,
            "w_mm": img.width / 300.0 * 25.4,
            "h_mm": img.height / 300.0 * 25.4,
            "copies": 21, "mini_enabled": False,
        })
    return assets, masks


def _corre(assets: list[dict], masks: dict, simplificar: bool,
           tiempo: float = 6.0, rot: str = "libre"):
    lista = [dict(a, simplificar=simplificar) for a in assets]
    st = {"espacio_mm": 2.0, "margen_mm": 1.0, "rotacion": rot,
          "opt_metodo": "greedy", "opt_calidad": "normal",
          "opt_tiempo_auto": False, "opt_tiempo_max_s": tiempo,
          "usar_minis": False, "modo_forma": "siluetas",
          "paginas_modo": "varias"}
    area = cut_area(210.0, 297.0, "maker3", "A4")
    t0 = time.time()
    res = optimize(lista, area, st, masks=dict(masks))
    return time.time() - t0, res


def test_pikmin_pagina_llena_simplificar_no_empeora(pikmin):
    """Página LLENA (147 copias): simplificar no quita piezas ni páginas."""
    assets, masks = pikmin
    t_sin, r_sin = _corre(assets, masks, simplificar=False)
    t_con, r_con = _corre(assets, masks, simplificar=True)
    n_copias = sum(a["copies"] for a in assets)
    # nada sin colocar en ninguno de los dos
    assert not r_sin.unplaced, f"sin simplificar: {r_sin.unplaced}"
    assert not r_con.unplaced, f"simplificado: {r_con.unplaced}"
    assert len(r_sin.placements) == n_copias
    assert len(r_con.placements) == n_copias
    # la simplificación NO puede necesitar más páginas
    assert r_con.pages <= r_sin.pages, (
        f"simplificar empeoró las páginas: {r_con.pages} > {r_sin.pages}")
    # y no debe tardar más (margen amplio: los tiempos varían por máquina)
    assert t_con <= max(t_sin * 1.6, t_sin + 4.0), (
        f"simplificar tardó más: {t_con:.2f}s vs {t_sin:.2f}s")


def test_formas_simples_se_detectan_y_no_empeoran():
    """Círculo, triángulo y rectángulo: se detectan y no empeoran el encaje."""
    from PIL import ImageDraw

    def circulo(lado=300):
        im = Image.new("RGBA", (lado, lado), (0, 0, 0, 0))
        ImageDraw.Draw(im).ellipse((2, 2, lado - 3, lado - 3),
                                   fill=(60, 130, 200, 255))
        return trim(im)

    def triangulo(lado=300):
        im = Image.new("RGBA", (lado, lado), (0, 0, 0, 0))
        ImageDraw.Draw(im).polygon(
            [(lado / 2, 2), (lado - 2, lado - 2), (2, lado - 2)],
            fill=(200, 80, 120, 255))
        return trim(im)

    def rectangulo(lado=300):
        return Image.new("RGBA", (lado, lado), (90, 160, 120, 255))

    esperado = {"circulo": "circulo", "triangulo": "triangulo",
                "rectangulo": "rectangulo"}
    for nombre, img in (("circulo", circulo()), ("triangulo", triangulo()),
                        ("rectangulo", rectangulo())):
        m = silhouette._asset_mask(img, 25.1, 25.1, 0.25)
        forma = silhouette._forma_simple(m, 0.25)
        assert forma is not None, f"{nombre} no detectado"
        assert forma[0] == esperado[nombre], f"{nombre}: {forma[0]}"
        # empaquetar 60 copias: el simplificado no puede usar más páginas
        assets = [{"id": "a", "name": nombre, "w_mm": 25.1, "h_mm": 25.1,
                   "copies": 60, "mini_enabled": False}]
        t_sin, r_sin = _corre(assets, {"a": img}, simplificar=False)
        t_con, r_con = _corre(assets, {"a": img}, simplificar=True)
        assert not r_con.unplaced
        assert r_con.pages <= r_sin.pages, (
            f"{nombre}: simplificar dio más páginas "
            f"({r_con.pages} > {r_sin.pages})")
