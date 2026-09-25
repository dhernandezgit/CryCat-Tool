"""Tests del puente web (misma lógica que usa la versión de navegador)."""

import base64
import io
import json

from PIL import Image, ImageDraw

from crycat import webapi


def _b64_circulo(px: int = 300) -> str:
    im = Image.new("RGBA", (px, px), (0, 0, 0, 0))
    ImageDraw.Draw(im).ellipse((10, 10, px - 10, px - 10),
                               fill=(230, 60, 160, 255))
    buf = io.BytesIO()
    im.save(buf, "PNG")
    return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode()


def test_saludo_y_area():
    d = json.loads(webapi.saludar())
    assert d["ok"] is True and d["version"]
    a = json.loads(webapi.area_recortable(json.dumps(
        {"page_w": 210, "page_h": 297, "machine": "maker5"})))
    x0, y0, bw, bh = a["bbox"]
    assert round(bw) == 186 and round(bh) == 272      # límites calibrados
    assert len(a["poly"]) == 20


def test_optimizar_devuelve_png_y_metricas():
    payload = {
        "assets": [{"id": "a", "name": "c.png", "w_mm": 25.4, "h_mm": 25.4,
                    "copies": 4, "mini_enabled": False, "mini_quota": 1,
                    "offset_mm": 0, "dpi": 300, "img": _b64_circulo()}],
        "settings": {"espacio_mm": 2, "margen_mm": 1, "cell_mm": 0.75,
                     "rotations": True, "usar_minis": False, "dpi_salida": 300},
        "page_w": 210, "page_h": 297, "machine": "maker5",
    }
    r = json.loads(webapi.optimizar(json.dumps(payload)))
    assert r["pages"] >= 1
    assert len(r["placements"]) == 4
    assert r["unplaced"] == []
    assert 0 < r["efficiency"] <= 1
    assert r["pngs"] and r["pngs"][0].startswith("data:image/png;base64,")
    # el PNG es de verdad (se puede abrir y tiene el tamaño de la página)
    raw = base64.b64decode(r["pngs"][0].split(",", 1)[1])
    img = Image.open(io.BytesIO(raw))
    # por defecto se exporta SOLO el área recortable menos el margen (1 mm
    # por lado): 186 - 2 = 184 mm de ancho
    assert img.width == round((186 - 2) / 25.4 * 300)


def test_optimizar_respeta_el_giro_desactivado():
    payload = {
        "assets": [{"id": "a", "name": "c.png", "w_mm": 40, "h_mm": 25,
                    "copies": 4, "mini_enabled": False, "mini_quota": 1,
                    "offset_mm": 0, "dpi": 300, "img": _b64_circulo()}],
        "settings": {"espacio_mm": 2, "margen_mm": 1, "cell_mm": 0.75,
                     "rotations": False, "usar_minis": False},
        "page_w": 210, "page_h": 297, "machine": "maker5",
    }
    r = json.loads(webapi.optimizar(json.dumps(payload)))
    assert {p["angle"] for p in r["placements"]} == {0.0}


def test_optimizar_con_borde_por_elemento():
    payload = {
        "assets": [{"id": "a", "name": "c.png", "w_mm": 20, "h_mm": 20,
                    "copies": 2, "mini_enabled": False, "mini_quota": 1,
                    "offset_mm": 2.0, "offset_modo": "blanco",
                    "offset_color": "#ffffff", "dpi": 300,
                    "img": _b64_circulo()}],
        "settings": {"espacio_mm": 2, "margen_mm": 1, "cell_mm": 0.75,
                     "rotations": False, "usar_minis": False},
        "page_w": 210, "page_h": 297, "machine": "maker5",
    }
    r = json.loads(webapi.optimizar(json.dumps(payload)))
    assert len(r["placements"]) == 2
    # con 2 mm de borde la pieza colocada mide 24 mm (20 + 2×2)
    assert abs(r["placements"][0]["w"] - 24.0) < 0.6
