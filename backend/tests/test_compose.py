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
    # el CENTRO de cada píxel debe estar dentro (el borde del píxel puede
    # tocar el límite: a 100 ppp un píxel son 0,25 mm)
    fuera = [(x / px, y / px) for x, y in zip(xs, ys)
             if not _dentro_poly((x + 0.5) / px, (y + 0.5) / px, area.poly)]
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


def test_marcas_abrazan_el_contenido_sin_taparlo():
    """La TINTA de las 4 marcas abraza el contenido (hueco de 1 mm) y queda
    SIEMPRE dentro de la hoja, aunque el contenido ocupe toda el área."""
    import numpy as np
    from crycat.geometry import marks_adaptadas, marks_rect_for
    area = cut_area(210.0, 297.0, "maker3")
    dpi = 100.0
    img = Image.new("RGBA", (int(210 / 25.4 * dpi), int(297 / 25.4 * dpi)),
                    (0, 0, 0, 0))
    px = dpi / 25.4
    # contenido pequeño: las marcas lo abrazan (hueco de 1 mm)
    caja = (40.0, 50.0, 70.0, 70.0)
    out = compose.con_marcas_cricut(img, area, dpi, caja)
    a = np.asarray(out.convert("RGBA").split()[3]) > 128
    ys, xs = np.nonzero(a)
    esperado = marks_adaptadas(caja, marks_rect_for(area))
    for v, e in zip((xs.min() / px, ys.min() / px,
                     (xs.max() + 1) / px, (ys.max() + 1) / px), esperado):
        assert abs(v - e) < 0.6, (v, e, esperado)
    # contenido grande (toda el área): también lo abrazan y su tinta queda
    # DENTRO de la hoja (los soportes transparentes pueden salirse)
    grande = area.bbox
    out2 = compose.con_marcas_cricut(img, area, dpi, grande)
    a2 = np.asarray(out2.convert("RGBA").split()[3]) > 128
    ys2, xs2 = np.nonzero(a2)
    esperado2 = marks_adaptadas(grande, marks_rect_for(area))
    for v, e in zip((xs2.min() / px, ys2.min() / px,
                     (xs2.max() + 1) / px, (ys2.max() + 1) / px), esperado2):
        assert abs(v - e) < 0.6, (v, e, esperado2)
    assert xs2.min() >= 0 and ys2.min() >= 0
    assert (xs2.max() + 1) / px <= 210.0 and (ys2.max() + 1) / px <= 297.0


def test_marcas_pdf_abrazan_el_contenido():
    """En el PDF las marcas también abrazan el contenido."""
    area = cut_area(210.0, 297.0, "maker3")
    img = Image.new("RGBA", (200, 200), (0, 0, 0, 0))
    img.paste((200, 60, 90, 255), (100, 120, 180, 220))
    pl = Placement(uid="a#0", asset_id="a", page=0, x=60, y=70, w=120, h=120,
                   angle=45.0, scale=1.0, w0=60, h0=60)
    data = compose.export_pdf(area, [pl], {"a": img}, 100.0, full_page=False,
                              color="rgba", marcas=True, bleed_mm=0.0)
    assert data[:4] == b"%PDF"


def test_render_marcas_abrazan_la_pieza():
    """Al renderizar, las marcas abrazan la TINTA de la pieza (hueco de 1 mm)
    y respetan el recorte del lienzo (recortable)."""
    import numpy as np
    from crycat.geometry import marks_adaptadas, marks_rect_for
    area = cut_area(210.0, 297.0, "maker3")
    img = Image.new("RGBA", (900, 600), (200, 60, 90, 255))  # tinta = caja
    pl = Placement(uid="a#0", asset_id="a", page=0, x=30, y=40, w=76.2,
                   h=50.8, angle=0.0, scale=1.0, w0=76.2, h0=50.8)
    caja_pieza = (30.0, 40.0, 30.0 + 76.2, 40.0 + 50.8)
    esperado = marks_adaptadas(caja_pieza, marks_rect_for(area))
    for full in (True, False):
        sin = compose.render_page(area, [pl], {"a": img}, 100.0, full,
                                  "rgba").convert("RGBA")
        con = compose.render_page(area, [pl], {"a": img}, 100.0, full,
                                  "rgba", 0.0, 0.0, 0, True, False
                                  ).convert("RGBA")
        dif = (np.abs(np.asarray(sin, int) - np.asarray(con, int)
                      ).sum(axis=2) > 30)
        ys, xs = np.nonzero(dif)
        assert len(ys), "deben pintarse las marcas"
        px = 100.0 / 25.4
        bx, by = (0.0, 0.0) if full else (area.bbox[0], area.bbox[1])
        marcas = (xs.min() / px + bx, ys.min() / px + by,
                  (xs.max() + 1) / px + bx, (ys.max() + 1) / px + by)
        for v, e in zip(marcas, esperado):
            assert abs(v - e) < 1.0, (full, marcas, esperado)


def test_mini_borde_igual_conserva_los_mm(tmp_path, monkeypatch):
    """El borde «igual» de los minis conserva los mm del original (antes se
    reducía proporcionalmente, que es lo que hace «proporcional»)."""
    import numpy as np
    import crycat.config as cfg
    from crycat.store import Session, Asset
    from crycat.packer import PackResult

    monkeypatch.setattr(cfg, "ASSETS_DIR", tmp_path / "assets")
    monkeypatch.setattr(cfg, "DATA_DIR", tmp_path)
    monkeypatch.setattr(cfg, "SESSION_FILE", tmp_path / "s.json")
    monkeypatch.setattr(cfg, "CONFIG_FILE", tmp_path / "c.json")
    cfg.settings._data = dict(cfg.DEFAULTS)
    cfg.settings._data.update({"offset_activo": True, "offset_mm": 2.0,
                               "offset_modo": "blanco"})
    st = Session()
    st.assets = {"a": Asset("a", "a", Image.new("RGBA", (60, 60),
                                                (200, 60, 90, 255)),
                            b"", 100.0, [])}
    area = cut_area(210.0, 297.0, "maker3")
    st.area = area
    px = 100.0 / 25.4
    # contenido 60 px = 15,24 mm; borde 2 mm; mini al 50 %
    casos = {
        "igual": 15.24 * 0.5 + 2 * 2.0,          # mismo borde en mm
        "proporcional": (15.24 + 2 * 2.0) * 0.5,  # el borde se reduce
        "sin": 15.24 * 0.5,                       # sin borde
    }
    for modo, esperado in casos.items():
        cfg.settings._data["mini_borde_modo"] = modo
        mini = Placement(uid="a#m", asset_id="a", page=0, x=50, y=50,
                         w=esperado, h=esperado, angle=0.0, mini=True,
                         scale=0.5, w0=esperado, h0=esperado)
        st.last = PackResult(placements=[mini], pages=1)
        out = compose.render_page(area, [mini], st.images_render(),
                                  100.0, True, "rgba").convert("RGBA")
        bb = out.getchannel("A").getbbox()
        assert bb, modo
        ancho = (bb[2] - bb[0]) / px
        assert abs(ancho - esperado) < 0.3, (modo, ancho, esperado)
        if modo == "igual":
            # el borde blanco mide 2 mm: a 0,5 mm del borde ya es blanco y el
            # centro sigue siendo el color de la pegatina
            borde = out.getpixel((bb[0] + int(0.5 * px), (bb[1] + bb[3]) // 2))
            centro = out.getpixel(((bb[0] + bb[2]) // 2, (bb[1] + bb[3]) // 2))
            assert borde[0] > 240 and borde[1] > 240 and borde[2] > 240, borde
            assert centro[0] > 150 and centro[2] < 130, centro


def test_render_ratas_solo_en_impresion():
    """Las ratas del modo rata solo se pintan con `ratas=True` (vista y PDF);
    en el PNG normal (sin el flag) no aparecen."""
    area = cut_area(210.0, 297.0, "maker3")
    img = Image.new("RGBA", (200, 200), (200, 60, 90, 255))
    pl = Placement(uid="a#0", asset_id="a", page=0, x=80, y=120, w=20, h=20,
                   angle=0.0, scale=1.0)
    rata = Placement(uid="a#rata0", asset_id="a", page=0, x=3, y=3, w=10,
                     h=10, angle=0.0, scale=0.5, mini=True, rata=True)
    px = 100.0 / 25.4
    p = (int(5 * px), int(5 * px))
    sin = compose.render_page(area, [pl, rata], {"a": img}, 100.0, True,
                              "rgba").convert("RGBA")
    con = compose.render_page(area, [pl, rata], {"a": img}, 100.0, True,
                              "rgba", 0.0, 0.0, 0, False, True).convert("RGBA")
    assert sin.getpixel(p)[3] == 0, "la rata no debe salir sin el flag"
    assert con.getpixel(p)[3] > 200, "la rata debe salir con el flag"


def test_export_png_recorta_al_contenido_y_sin_ratas(tmp_path):
    """El PNG exportado se recorta al CONTENIDO real: ni márgenes de la
    página ni las ratas del modo rata lo agrandan."""
    area = cut_area(210.0, 297.0, "maker3")
    img = Image.new("RGBA", (200, 200), (200, 60, 90, 255))
    pl = Placement(uid="a#0", asset_id="a", page=0, x=80, y=120, w=20, h=20,
                   angle=0.0, scale=1.0)
    rata = Placement(uid="a#rata0", asset_id="a", page=0, x=3, y=3, w=10,
                     h=10, angle=0.0, scale=0.5, mini=True, rata=True)
    fp = compose.export_single(area, [pl, rata], {"a": img},
                               tmp_path / "x.png", 100.0, full_page=True,
                               color="rgba")
    out = Image.open(fp)
    px = 100.0 / 25.4
    # 20 mm de pieza + 0,5 mm de aire por lado (no la página de 210x297)
    assert abs(out.width / px - 21.0) < 1.0, out.size
    assert abs(out.height / px - 21.0) < 1.0, out.size
