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

def test_sangrado_de_impresion():
    """El sangrado repite el color del borde hacia fuera (sin reborde blanco)."""
    import numpy as np
    from PIL import Image, ImageDraw
    from crycat import compose
    im = Image.new("RGBA", (60, 60), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.ellipse((16, 16, 44, 44), fill=(255, 60, 60, 255))
    sin = compose.trim(im)                 # recorte ajustado al dibujo
    con = compose.con_bleed(im, 10)        # con 10 px de sangrado
    assert con.size[0] >= sin.size[0] + 18  # crece hacia fuera
    b = np.asarray(sin)
    a = np.asarray(con)
    assert b[0, 0, 3] == 0                  # el recorte acaba transparente
    assert a[0, 0, 3] == 0                  # la esquina sigue vacía
    ys, xs = np.where(a[:, :, 3] > 200)
    assert xs.min() < 5 and ys.min() < 5    # pero el color llega al borde


def _marca_alpha(nombre: str):
    import numpy as np
    from pathlib import Path
    raiz = Path(__file__).resolve().parents[2]
    im = Image.open(raiz / "frontend" / "public" / "marcas" / f"{nombre}.png")
    return np.asarray(im.convert("RGBA").split()[3]) > 128


def test_marca_superior_izquierda_triangulo_arriba_sin_tocar_barras():
    """La marca superior izquierda es como la oficial: triángulo hacia
    ARRIBA, separado de las barras (con hueco) y del mismo grosor que las
    otras esquinas (3 mm)."""
    a = _marca_alpha("esquina_flecha")
    T = 20   # grosor de las barras (1,7 mm a 300 ppp, como la imagen oficial)
    # el triángulo apunta hacia arriba: se ensancha al bajar
    anchos = [int(a[y, :T + 2].sum()) for y in range(0, T)]
    assert anchos[0] < anchos[-1], "el triángulo debe apuntar hacia ARRIBA"
    # nada toca las barras: hueco entre el triángulo y las dos barras
    assert not a[T + 2:40, :T].any(), "el triángulo no debe tocar la barra vertical"
    assert not a[:T, T + 2:40].any(), "el triángulo no debe tocar la barra horizontal"
    # barras finas (1,7 mm) e iguales en las 4 esquinas
    assert int(a[:, 150].sum()) == T, "barra horizontal fina"
    assert int(a[150, :].sum()) == T, "barra vertical fina"
    for nombre in ("esquina", "esquina_sd", "esquina_ii", "esquina_id"):
        b = _marca_alpha(nombre)
        assert int(b[:, 150].sum()) == T
        assert int(b[150, :].sum()) == T
    # la inferior izquierda NO está girada: la barra horizontal va ABAJO
    ii = _marca_alpha("esquina_ii")
    assert ii[280, 100], "falta la barra horizontal inferior"
    assert not ii[10, 100], "la barra de abajo no puede estar arriba"


def _dentro_poly(x: float, y: float, poly: list) -> bool:
    n = len(poly)
    dentro = False
    j = n - 1
    for i in range(n):
        xi, yi = poly[i]
        xj, yj = poly[j]
        if ((yi > y) != (yj > y)) and \
                (x < (xj - xi) * (y - yi) / (yj - yi + 1e-12) + xi):
            dentro = not dentro
        j = i
    return dentro


def test_marcas_delimitar_en_los_limites_y_dentro():
    """Dos cuadrados de 1 mm pegados a los límites izq/der y DENTRO del
    polígono recortable (a la altura del centro, donde el área llega)."""
    import numpy as np
    area = cut_area(210.0, 297.0, "maker3")
    img = compose.render_page(area, [], {}, 100.0, True, "rgba",
                              delimitar_mm=1.0)
    a = np.asarray(img.convert("RGBA"))
    blanco = (a[:, :, 0] > 250) & (a[:, :, 1] > 250) & (a[:, :, 2] > 250)
    ys, xs = np.nonzero(blanco)
    assert len(xs) > 0, "deben pintarse los cuadrados"
    px = 100.0 / 25.4
    fuera = [(x / px, y / px) for x, y in zip(xs, ys)
             if not _dentro_poly(x / px, y / px, area.poly)]
    assert not fuera, f"{len(fuera)} píxeles fuera del área de corte"
    # pegados a los límites izquierdo y derecho
    bx, by, bw, bh = area.bbox
    x0 = min(xs) / px
    x1 = max(xs) / px
    assert abs(x0 - bx) < 0.6, x0
    assert abs(x1 - (bx + bw)) < 0.6, x1
    # y a la altura del centro
    yc = (min(ys) + max(ys)) / 2 / px
    assert abs(yc - (by + bh / 2)) < 0.5, yc
    # posiciones deterministas del helper
    cajas = compose.cajas_delimitar(area, 1.0)
    assert len(cajas) == 2
    assert abs(cajas[0][0] - bx) < 0.2
    assert abs(cajas[1][0] - (bx + bw - 1.0)) < 0.2
    # sin delimitar no hay nada
    img2 = compose.render_page(area, [], {}, 100.0, True, "rgba")
    a2 = np.asarray(img2.convert("RGBA"))
    assert not ((a2[:, :, 0] > 250) & (a2[:, :, 3] > 200)).any()
