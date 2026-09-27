"""Tests de importación, quitar fondo y detección de líneas anómalas."""

import io

import numpy as np
from PIL import Image

from crycat import imaging


def png_bytes(img: Image.Image) -> bytes:
    buf = io.BytesIO()
    img.save(buf, "PNG")
    return buf.getvalue()


def sticker_rgba(size=(300, 200)) -> Image.Image:
    """Pegatina sintética: círculo rojo sobre fondo transparente."""
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    arr = np.zeros((size[1], size[0], 4), dtype=np.uint8)
    yy, xx = np.mgrid[0:size[1], 0:size[0]]
    cx, cy = size[0] / 2, size[1] / 2
    mask = ((xx - cx) ** 2 + (yy - cy) ** 2) < (min(size) * 0.4) ** 2
    arr[mask] = [200, 40, 60, 255]
    return Image.fromarray(arr, "RGBA")


def test_import_png_recorta_alfa():
    big = Image.new("RGBA", (500, 400), (0, 0, 0, 0))
    st = sticker_rgba()  # círculo r=80 centrado en (230,160) tras pegar
    big.paste(st, (80, 60))
    img, info = imaging.load_image(png_bytes(big), "x.png")
    assert info.color_mode != ""
    assert info.bbox == (151, 81, 310, 240)
    assert (info.trimmed_w, info.trimmed_h) == (159, 159)
    assert img.size == (159, 159)
    assert img.mode == "RGBA"


def test_import_jpg():
    rgb = sticker_rgba().convert("RGB")  # JPG sin alfa: fondo negro
    buf = io.BytesIO()
    rgb.save(buf, "JPEG")
    img, info = imaging.load_image(buf.getvalue(), "y.jpg")
    assert img.mode == "RGBA"


def test_import_formato_invalido():
    try:
        imaging.load_image(b"no-es-imagen", "z.png")
        assert False, "debía fallar"
    except ValueError:
        pass


def test_import_con_perfil_icc_conserva_color():
    """Un PNG con perfil ICC se convierte a sRGB sin perder color ni alfa."""
    from PIL import ImageCms
    import numpy as np
    arr = np.zeros((50, 50, 4), dtype=np.uint8)
    arr[..., :] = (200, 30, 40, 255)
    img = Image.fromarray(arr, "RGBA")
    icc = ImageCms.ImageCmsProfile(ImageCms.createProfile("sRGB")).tobytes()
    buf = io.BytesIO()
    img.save(buf, "PNG", icc_profile=icc)
    out, _ = imaging.load_image(buf.getvalue(), "perfil.png")
    a = np.asarray(out)
    assert a[25, 25, 3] == 255
    assert abs(int(a[25, 25, 0]) - 200) <= 3
    assert abs(int(a[25, 25, 1]) - 30) <= 3


def test_perfil_icc_corrupto_no_rompe():
    import numpy as np
    arr = np.zeros((20, 20, 4), dtype=np.uint8)
    arr[..., :] = (10, 20, 30, 255)
    img = Image.fromarray(arr, "RGBA")
    buf = io.BytesIO()
    img.save(buf, "PNG", icc_profile=b"no-es-un-perfil")
    out, _ = imaging.load_image(buf.getvalue(), "malo.png")
    assert out.size == (20, 20)


def test_svg_rechazado_con_mensaje():
    try:
        imaging.load_image(b"<svg/>", "s.svg")
        assert False
    except ValueError as e:
        assert "SVG" in str(e) or "navegador" in str(e)


def test_quitar_fondo_blanco():
    """Fondo blanco conectado al borde -> transparente; círculo interior intacto."""
    size = (300, 200)
    arr = np.full((size[1], size[0], 4), [255, 255, 255, 255], dtype=np.uint8)
    yy, xx = np.mgrid[0:size[1], 0:size[0]]
    mask = ((xx - 150) ** 2 + (yy - 100) ** 2) < 80 ** 2
    arr[mask] = [30, 120, 200, 255]
    img = Image.fromarray(arr, "RGBA")
    out = imaging.remove_background(img)
    a = np.asarray(out)
    assert a[0, 0, 3] == 0                      # esquina -> transparente
    assert a[100, 150, 3] == 255                # interior intacto
    assert a[..., 3].min() == 0
    # tras el recorte queda un anillo transparente alrededor del círculo
    assert (a[..., 3] == 0).mean() > 0.12
    assert (a[..., 3] == 0).mean() < 0.5


def test_quitar_fondo_conserva_agujero_interno():
    """Un hueco del mismo color que el fondo pero SIN conexión con el borde
    debe conservarse (la propagación parte del borde)."""
    size = (300, 300)
    arr = np.full((size[1], size[0], 4), [255, 255, 255, 255], dtype=np.uint8)
    yy, xx = np.mgrid[0:size[1], 0:size[0]]
    anillo = (((xx - 150) ** 2 + (yy - 150) ** 2) < 100 ** 2) & \
             (((xx - 150) ** 2 + (yy - 150) ** 2) > 40 ** 2)
    arr[anillo] = [200, 30, 30, 255]
    img = Image.fromarray(arr, "RGBA")
    out = np.asarray(imaging.remove_background(img))
    # centro del donut: blanco pero rodeado de rojo -> NO conecta con borde
    assert out[150, 150, 3] == 255
    assert out[0, 0, 3] == 0


def test_lineas_anomalas():
    """Detecta una fila de 1px claramente distinta que atraviesa la imagen."""
    img = sticker_rgba((400, 300))
    arr = np.asarray(img).copy()
    arr[150, :, :3] = [255, 255, 0]
    arr[150, :, 3] = 255
    img2 = Image.fromarray(arr, "RGBA")
    avisos = imaging.detect_anomalous_lines(img2)
    assert any("150" in a for a in avisos)
    # imagen limpia -> sin avisos
    assert imaging.detect_anomalous_lines(sticker_rgba((400, 300))) == []


def test_offset_extiende_contorno():
    """El offset añade un borde alrededor de la silueta (sin tocar el original)."""
    img = sticker_rgba((200, 200))   # círculo r=80 centrado
    recortada = imaging.trim(img)
    antes = np.asarray(img).copy()
    out = imaging.aplicar_offset(img, radio_px=12, modo="blanco")
    # crece alrededor respecto a la imagen recortada
    assert out.width > recortada.width and out.height > recortada.height
    # el original no se modifica
    assert np.array_equal(np.asarray(img), antes)
    # los píxeles nuevos del borde son blancos y opacos
    a = np.asarray(out)
    assert a[..., 3].max() == 255
    # el centro superior: ahora hay borde blanco donde antes no había nada
    assert a[2, a.shape[1] // 2, 3] == 255


def test_offset_modo_color():
    img = sticker_rgba((120, 120))
    out = imaging.aplicar_offset(img, radio_px=8, modo="color",
                                 color=(255, 0, 0))
    a = np.asarray(out)
    # el borde es rojo (canal R alto) en la zona exterior
    fila = a[1]
    idx = np.where(fila[:, 3] > 0)[0]
    assert len(idx) > 0
    assert fila[idx[0], 0] > 200 and fila[idx[0], 1] < 80


def test_offset_desactivado_no_cambia():
    img = sticker_rgba((80, 80))
    out = imaging.aplicar_offset(img, radio_px=0)
    assert out.size == imaging.trim(img).size


def test_detectar_y_quitar_blobs():
    """Detecta trozos sueltos y los quita sin tocar el contorno principal."""
    import numpy as np
    from PIL import Image
    arr = np.zeros((200, 200, 4), dtype=np.uint8)
    arr[40:160, 40:160] = (60, 130, 200, 255)   # cuadrado principal
    arr[10:20, 10:20] = (200, 40, 60, 255)      # blob suelto 1
    arr[180:190, 180:190] = (40, 200, 60, 255)  # blob suelto 2
    img = Image.fromarray(arr, "RGBA")
    blobs = imaging.detectar_blobs(img)
    assert len(blobs) == 3
    assert blobs[0]["principal"] is True
    sueltos = [b for b in blobs if not b["principal"]]
    assert len(sueltos) == 2
    limpio = imaging.quitar_blobs(img, [b["id"] for b in sueltos])
    a = np.asarray(limpio)
    assert (a[..., 3] > 0).sum() == (120 * 120)  # sólo queda el principal
    # intentar quitar el principal no lo elimina
    limpio2 = imaging.quitar_blobs(img, [blobs[0]["id"]])
    assert (np.asarray(limpio2)[..., 3] > 0).sum() >= 120 * 120


def test_thumbnail_no_supera_max():
    img = sticker_rgba((900, 600))
    th = imaging.thumbnail(img, max_side=200)
    assert max(th.size) == 200


def test_aplicar_offset_une_trozos():
    """Los modos unir_recto/unir_curvo fusionan los trozos en una forma."""
    from PIL import ImageDraw
    from crycat.imaging import aplicar_offset

    im = Image.new("RGBA", (300, 160), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rectangle((20, 40, 110, 120), fill=(220, 120, 150, 255))
    d.rectangle((190, 50, 280, 110), fill=(120, 160, 220, 255))
    from crycat.imaging import trim as _trim
    base = _trim(im)
    for modo in ("unir_recto", "unir_curvo"):
        out = aplicar_offset(im, 12, modo, (90, 190, 120))
        assert out.width > base.width and out.height > base.height
        alpha = out.convert("RGBA").getchannel("A")
        mx = int(150 / 300 * out.width)
        my = int(80 / 160 * out.height)
        assert alpha.getpixel((mx, my)) > 0, modo
    # extender NO une: el hueco sigue vacío
    out = aplicar_offset(im, 12, "extender", (90, 190, 120))
    alpha = out.convert("RGBA").getchannel("A")
    mx = int(150 / 300 * out.width)
    my = int(80 / 160 * out.height)
    assert alpha.getpixel((mx, my)) == 0


def test_borde_independiente_de_la_escala(tmp_path, monkeypatch):
    """El borde mide lo mismo (mm del resultado) al 100 % y al 200 %."""
    from crycat import config as cfg
    from crycat.store import Asset, Session

    monkeypatch.setattr(cfg, "SESSION_FILE", tmp_path / "s.json")
    monkeypatch.setattr(cfg, "ASSETS_DIR", tmp_path / "assets")
    ses = Session()
    img = sticker_rgba((300, 300))          # 25,4 mm @300 dpi
    a = Asset("a1", "a", img, b"", 300.0, [], "RGBA")
    a.offset_mm = 2.0
    a.offset_modo = "blanco"
    ses.add(a)
    from crycat.imaging import trim as _trim
    base_px = _trim(img).width
    medidos = []
    for escala in (1.0, 2.0):
        a.scale_pct = escala * 100
        out = ses.images()["a1"]
        crecido_mm = (out.width - base_px) / 2 / 300.0 * 25.4 * escala
        medidos.append(crecido_mm)
        assert abs(crecido_mm - 2.0) < 0.15, f"al {escala:.0%}: {crecido_mm:.2f} mm"
        d = [x for x in ses.asset_dicts() if x["id"] == "a1"][0]
        assert abs(d["w_mm"] - (25.4 * escala + 4.0)) < 0.2
    # lo importante: el borde NO cambia al escalar el elemento
    assert abs(medidos[0] - medidos[1]) < 0.1
