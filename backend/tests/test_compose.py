"""Tests de composición, exportación e impresión."""

import json

from PIL import Image

from crycat import compose
from crycat.geometry import cut_area, mm_to_px
from crycat.packer import Placement

from tests.test_imaging import sticker_rgba


def _setup(aid="a1", copies_place=3):
    area = cut_area(297.0, 210.0, "estandar", "A4")
    img = sticker_rgba((300, 200))  # 300x200 px @ 300dpi => 25.4x16.9mm
    placements = [
        Placement(uid=f"{aid}#{i}", asset_id=aid, page=0, x=10.0 + i * 30,
                  y=10.0, w=25.4, h=16.933, angle=0.0, scale=1.0)
        for i in range(copies_place)
    ]
    return area, placements, {aid: img}


def test_render_sin_reescalado_pixel_1a1():
    """dpi salida = dpi origen y sin giro: los píxeles se copian 1:1."""
    area, pls, imgs = _setup()
    img = compose.render_page(area, pls, imgs, dpi=300.0)
    # el área debe ser el bbox del área recortable (lienzo "recortable")
    bx, by, bw, bh = area.bbox
    assert img.size == (mm_to_px(bw, 300), mm_to_px(bh, 300))
    # fondo transparente
    assert img.getpixel((0, 0))[3] == 0


def test_render_lienzo_pagina_completa():
    area, pls, imgs = _setup()
    img = compose.render_page(area, pls, imgs, dpi=300.0, full_page=True)
    assert img.size == (mm_to_px(297, 300), mm_to_px(210, 300))


def test_render_rot90():
    area = cut_area(297.0, 210.0)
    img = sticker_rgba((300, 100))  # 2:1
    p = Placement(uid="r#0", asset_id="r", page=0, x=10, y=10, w=16.933,
                  h=25.4, angle=90, rot90=True, scale=1.0)
    out = compose.render_page(area, [p], {"r": img}, dpi=300.0)
    # tras girar, el tamaño colocado (16.9x25.4mm) corresponde al giro de 300x100
    assert out.size[0] > 0 and out.size[1] > 0


def _rect_img(w=300, h=100, color=(200, 40, 60, 255)):
    import numpy as np
    from PIL import Image
    arr = np.zeros((h, w, 4), dtype=np.uint8)
    arr[..., :] = color
    return Image.fromarray(arr, "RGBA")


def test_export_maxima_calidad_300ppp(tmp_path):
    """PNG sin pérdidas: RGBA, 300 ppp (pHYs) y perfil sRGB embebido."""
    area, pls, imgs = _setup()
    files = compose.export_pages(area, pls, imgs, tmp_path, "q", 300.0)
    img = Image.open(files[0])
    assert img.mode == "RGBA"               # sin cuantizar, alfa intacto
    assert abs(img.info.get("dpi", (0,))[0] - 300) < 1
    assert img.info.get("icc_profile"), "debe llevar perfil de color sRGB"


def test_render_no_deforma_el_aspecto():
    """La imagen solo se escala en uniforme: nunca se deforma."""
    area = cut_area(297.0, 210.0)
    img = _rect_img(300, 100)  # proporcion 3:1
    # caja colocada 2:1 (mas cuadrada): debe encajar sin deformarse
    p = Placement(uid="x#0", asset_id="x", page=0, x=10, y=10, w=60.0,
                  h=30.0, angle=0.0, scale=1.0)
    out = compose.render_page(area, [p], {"x": img}, dpi=300.0)
    bbox = out.getchannel("A").getbbox()
    assert bbox is not None
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    assert abs((w / h) - 3.0) < 0.05, f"aspecto deformado: {w}x{h}"
    assert w <= mm_to_px(60.0, 300) + 2 and h <= mm_to_px(30.0, 300) + 2


def test_render_escala_uniforme_en_mini():
    area = cut_area(297.0, 210.0)
    img = _rect_img(300, 100)
    p = Placement(uid="m#mini0", asset_id="m", page=0, x=5, y=5, w=30.0,
                  h=10.0, angle=0.0, scale=0.5, mini=True)
    out = compose.render_page(area, [p], {"m": img}, dpi=300.0)
    bbox = out.getchannel("A").getbbox()
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    assert abs((w / h) - 3.0) < 0.05


def test_render_gira_de_verdad_90():
    """Un elemento girado 90º debe quedar girado en la imagen final (no dos
    veces ni sin girar)."""
    import numpy as np
    from PIL import Image
    arr = np.zeros((30, 90, 4), dtype=np.uint8)
    arr[..., :] = (0, 120, 220, 255)
    arr[0:5, 0:5] = (255, 0, 0, 255)  # marca en la esquina sup-izq
    img = Image.fromarray(arr, "RGBA")
    area = cut_area(297.0, 210.0)
    p = Placement(uid="a#0", asset_id="a", page=0, x=5, y=5, w=10.0, h=30.0,
                  angle=90.0, rot90=True)
    out = compose.render_page(area, [p], {"a": img}, dpi=300.0)
    bbox = out.getchannel("A").getbbox()
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    # 90x30 girado 90º -> 30x90  => caja 10x30 mm => aspecto 1:3
    assert abs((w / h) - (10.0 / 30.0)) < 0.05, f"{w}x{h}"


def test_render_gira_180_y_270_sin_perder():
    import numpy as np
    from PIL import Image
    arr = np.zeros((20, 60, 4), dtype=np.uint8)
    arr[..., :] = (10, 200, 100, 255)
    img = Image.fromarray(arr, "RGBA")
    area = cut_area(297.0, 210.0)
    for ang, exp_ratio in ((0.0, 3.0), (180.0, 3.0), (270.0, 1 / 3)):
        p = Placement(uid=f"a#{int(ang)}", asset_id="a", page=0, x=5, y=5,
                      w=15.0, h=15.0 * exp_ratio, angle=ang)
        out = compose.render_page(area, [p], {"a": img}, dpi=300.0)
        bbox = out.getchannel("A").getbbox()
        w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
        assert abs((w / h) - exp_ratio) < 0.06, (ang, w, h)


def test_export_paginas(tmp_path):
    area, pls, imgs = _setup(copies_place=3)
    # coloca 2 en página 0 y 1 en página 1
    pls[2].page = 1
    out = tmp_path / "export"
    files = compose.export_pages(area, pls, imgs, out, "prueba", 300.0)
    assert len(files) == 2
    assert (out / "pagina-01.png").exists()
    assert (out / "pagina-02.png").exists()
    img = Image.open(out / "pagina-01.png")
    assert img.mode == "RGBA"
    # pHYs: 300 dpi
    assert abs(img.info["dpi"][0] - 300) < 1
    # sin guías dibujadas: esquinas transparentes (lienzo recortable)
    assert img.getpixel((0, 0))[3] == 0


def test_export_layout_json(tmp_path):
    area, pls, imgs = _setup()
    out = tmp_path
    fp = compose.export_layout(area, pls, out, 300.0, {"espacio_mm": 2})
    data = json.loads(fp.read_text("utf-8"))
    assert data["app"] == "CryCat"
    assert len(data["paginas"]) == 1
    assert len(data["paginas"][0]) == 3


def test_export_pdf(tmp_path):
    area, pls, imgs = _setup()
    data = compose.export_pdf(area, pls, imgs, 300.0)
    assert data[:4] == b"%PDF"
    assert len(data) > 1000


def test_safe_name():
    assert compose.safe_name("../mi caña/") == ".._mi_caña"  # guiones de borde fuera
    assert compose.safe_name("") == ""                        # vacío -> solo fecha
    assert len(compose.safe_name("x" * 300)) <= 60
