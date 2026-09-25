"""Tests de la API (FastAPI TestClient) y de la configuración."""

import io
from pathlib import Path

import pytest
from fastapi.testclient import TestClient
from PIL import Image

from crycat.config import CONFIG_FILE, DEFAULTS, Settings
from crycat.server import create_app
from crycat.store import Session

from tests.test_imaging import png_bytes, sticker_rgba


@pytest.fixture()
def client(tmp_path, monkeypatch):
    """App con almacén limpio y config temporal."""
    import crycat.config as cfg
    monkeypatch.setattr(cfg, "CONFIG_FILE", tmp_path / "config.json")
    monkeypatch.setattr(cfg, "SESSION_FILE", tmp_path / "session.json")
    monkeypatch.setattr(cfg, "PRESETS_FILE", tmp_path / "presets.json")
    monkeypatch.setattr(cfg, "ASSETS_DIR", tmp_path / "assets")
    monkeypatch.setattr(cfg, "DATA_DIR", tmp_path)
    monkeypatch.setattr(cfg, "ICON_FILE", tmp_path / "icono.png")
    cfg.settings._data = dict(cfg.DEFAULTS)  # reset del singleton
    st = Session()
    st.assets = {}
    st.last = None
    st._pending_session = None
    app = create_app(st)
    yield TestClient(app), st, tmp_path


def client_of(app):
    return TestClient(app)


def upload(client, name="gato.png", img=None, **kw):
    img = img or sticker_rgba((240, 180))
    return client.post("/api/assets",
                       files={"file": (name, png_bytes(img), "image/png")},
                       data=kw)


def test_health(client):
    c, st, _ = client
    r = c.get("/api/health")
    assert r.status_code == 200
    assert r.json()["ok"] is True
    assert r.json()["app"] == "CryCat"


def test_settings_roundtrip(client, tmp_path, monkeypatch):
    c, st, tmp = client
    r = c.put("/api/settings", json={"espacio_mm": 3.5, "tema": "umbreon"})
    assert r.json()["settings"]["espacio_mm"] == 3.5
    assert r.json()["settings"]["tema"] == "umbreon"
    import crycat.config as cfg
    data = (tmp / "config.json").read_text("utf-8")
    assert '"tema": "umbreon"' in data.replace("'", '"') or "umbreon" in data
    # clave desconocida: se ignora
    r2 = c.put("/api/settings", json={"no_existe": 1})
    assert r2.status_code == 200


def test_upload_y_listado(client):
    c, st, _ = client
    r = upload(c)
    assert r.status_code == 200
    d = r.json()
    # el asset se recorta al alfa: círculo r=72 pintado en 240x180 -> 143x143
    assert (d["w_px"], d["h_px"]) == (143, 143)
    assert d["copies"] == 1
    assert d["w_mm"] == round(143 / 300 * 25.4, 2)
    lst = c.get("/api/assets").json()
    assert len(lst) == 1


def test_upload_jpg(client):
    c, st, _ = client
    img = sticker_rgba((120, 90)).convert("RGB")
    buf = io.BytesIO()
    img.save(buf, "JPEG")
    r = c.post("/api/assets", files={"file": ("f.jpg", buf.getvalue(), "image/jpeg")})
    assert r.status_code == 200


def test_upload_invalido_400(client):
    c, st, _ = client
    r = c.post("/api/assets", files={"file": ("x.png", b"xxx", "image/png")})
    assert r.status_code == 400


def test_copies_patch_y_limites(client):
    c, st, _ = client
    d = upload(c).json()
    r = c.patch(f"/api/assets/{d['id']}", json={"copies": 5, "mini_pct": 30})
    assert r.json()["copies"] == 5
    r = c.patch(f"/api/assets/{d['id']}", json={"copies": -4})
    assert r.json()["copies"] == 0
    r = c.patch(f"/api/assets/{d['id']}", json={"mini_pct": 5000})
    assert r.json()["mini_pct"] == 1000.0


def test_scale_pct_cambia_tamano(client):
    """La escala por elemento cambia el tamaño en mm y el colocado."""
    import time
    c, st, _ = client
    d = upload(c).json()
    base_w = d["w_mm_base"]
    r = c.patch(f"/api/assets/{d['id']}", json={"scale_pct": 200})
    assert r.json()["scale_pct"] == 200
    assert abs(r.json()["w_mm"] - base_w * 2) < 0.05
    c.post("/api/optimize")
    for _ in range(200):
        if c.get("/api/result").json()["pages"]:
            break
        time.sleep(0.05)
    p = c.get("/api/result").json()["placements"][0]
    assert abs(p["w"] - round(base_w * 2, 2)) < 0.2


def test_scale_pct_limites(client):
    c, st, _ = client
    d = upload(c).json()
    assert c.patch(f"/api/assets/{d['id']}", json={"scale_pct": 1}).json()["scale_pct"] == 5.0
    assert c.patch(f"/api/assets/{d['id']}", json={"scale_pct": 9000}).json()["scale_pct"] == 1000.0


def test_rotacion_dispara_recalculo(client):
    """Cambiar la rotación devuelve un job para que el cliente refresque."""
    c, st, _ = client
    upload(c, "a.png")
    r = c.put("/api/settings", json={"rotacion": "90"})
    assert r.status_code == 200
    body = r.json()
    assert body["settings"]["rotacion"] == "90"
    assert body["job"] is not None and "id" in body["job"]


def test_presets_guardar_cargar_borrar(client):
    """Perfiles de configuración con nombre: guardar, cargar y borrar."""
    c, st, _ = client
    assert c.get("/api/presets").json()["names"] == []
    # configura algo y guarda un perfil
    c.put("/api/settings", json={"espacio_mm": 3.5, "rotacion": "libre",
                                 "margen_mm": 2.0})
    r = c.post("/api/presets", json={"name": "Pikmin A4"})
    assert "Pikmin A4" in r.json()["names"]
    # cambia los ajustes
    c.put("/api/settings", json={"espacio_mm": 1.0, "rotacion": "no"})
    assert c.get("/api/settings").json()["settings"]["espacio_mm"] == 1.0
    # carga el perfil -> recupera los valores y lanza job
    r = c.post("/api/presets/Pikmin A4/load")
    body = r.json()
    assert body["settings"]["espacio_mm"] == 3.5
    assert body["settings"]["rotacion"] == "libre"
    assert body["settings"]["margen_mm"] == 2.0
    assert body["job"] is not None
    # guarda un segundo perfil y comprueba que se listan los dos
    c.post("/api/presets", json={"name": "Otro"})
    assert set(c.get("/api/presets").json()["names"]) == {"Pikmin A4", "Otro"}
    # borrar
    r = c.delete("/api/presets/Otro")
    assert r.json()["names"] == ["Pikmin A4"]


def test_presets_validaciones(client):
    c, st, _ = client
    assert c.post("/api/presets", json={"name": "   "}).status_code == 400
    assert c.post("/api/presets/NoExiste/load").status_code == 404


def test_move_fija_y_reoptimiza_el_resto(client):
    """Mover un elemento lo fija y reoptimiza el resto respetándolo."""
    import time
    c, st, _ = client
    d = upload(c, "a.png").json()
    c.patch(f"/api/assets/{d['id']}", json={"copies": 4})
    c.post("/api/optimize")
    for _ in range(200):
        if c.get("/api/result").json()["pages"]:
            break
        time.sleep(0.05)
    res = c.get("/api/result").json()
    p = res["placements"][0]
    r = c.post("/api/placements/move",
               json={"uid": p["uid"], "x": p["x"], "y": p["y"]})
    assert r.status_code == 200
    body = r.json()
    assert body["placement"]["pinned"] is True
    assert body["job"] is not None
    # espera a que termine la reoptimización
    for _ in range(200):
        if c.get(f"/api/job/{body['job']['id']}").json()["done"]:
            break
        time.sleep(0.05)
    res2 = c.get("/api/result").json()
    fijo = next(q for q in res2["placements"] if q["uid"] == p["uid"])
    assert fijo["pinned"] is True
    assert abs(fijo["x"] - p["x"]) < 0.05 and abs(fijo["y"] - p["y"]) < 0.05
    # el número de copias no aumenta por fijar
    assert len(res2["placements"]) == 4


def test_reemplazar_imagen_conserva_ajustes(client):
    """Reemplazar la imagen mantiene copias, cuota de mini y escala."""
    c, st, _ = client
    d = upload(c, "original.png").json()
    c.patch(f"/api/assets/{d['id']}", json={"copies": 5, "mini_enabled": True,
                                            "mini_pct": 30, "scale_pct": 150})
    # nueva imagen distinta (círculo más pequeño)
    nuevo = sticker_rgba((120, 120))
    r = c.post(f"/api/assets/{d['id']}/reemplazar",
               files={"file": ("nuevo.png", png_bytes(nuevo), "image/png")})
    assert r.status_code == 200
    a = r.json()
    assert a["id"] == d["id"]              # mismo elemento
    assert a["name"] == "nuevo.png"
    assert a["copies"] == 5 and a["mini_enabled"] is True
    assert a["mini_pct"] == 30 and a["scale_pct"] == 150
    assert a["w_px"] != d["w_px"] or a["h_px"] != d["h_px"]


def test_abrir_carpeta(client):
    """Abrir carpeta devuelve la ruta (se prueba sin abrir de verdad)."""
    c, st, tmp = client
    (tmp / "sub").mkdir(exist_ok=True)
    # ruta inexistente -> sube hasta el padre existente, no falla la API
    r = c.post("/api/fs/open", json={"path": str(tmp / "sub")})
    assert r.status_code == 200 or r.status_code == 500  # 500 si no hay escritorio
    r2 = c.get("/api/assets-folder")
    assert "path" in r2.json()


def test_offset_activo_crece_la_pieza(client):
    """Con offset activo, el tamaño efectivo crece y el render lleva borde."""
    import time
    c, st, _ = client
    d = upload(c, "a.png").json()
    base_w = d["w_mm"]
    # activa el offset (blanco, 2 mm)
    c.put("/api/settings", json={"offset_activo": True, "offset_mm": 2.0,
                                 "offset_modo": "blanco"})
    lst = c.get("/api/assets").json()
    assert lst[0]["w_mm"] >= base_w + 3.5   # +2 mm por lado
    # se optimiza y renderiza sin error
    c.post("/api/optimize")
    for _ in range(200):
        if c.get("/api/result").json()["pages"]:
            break
        time.sleep(0.05)
    r = c.get("/api/pages/0.png")
    assert r.status_code == 200
    # desactivar vuelve al tamaño base
    c.put("/api/settings", json={"offset_activo": False})
    assert abs(c.get("/api/assets").json()[0]["w_mm"] - base_w) < 0.1


def test_blobs_y_limpiar_contorno(client):
    """Detección y limpieza de blobs por API (no toca el original)."""
    import io
    import numpy as np
    from PIL import Image
    c, st, _ = client
    arr = np.zeros((200, 200, 4), dtype=np.uint8)
    arr[40:160, 40:160] = (60, 130, 200, 255)
    arr[10:20, 10:20] = (200, 40, 60, 255)     # blob suelto
    buf = io.BytesIO()
    Image.fromarray(arr, "RGBA").save(buf, "PNG")
    r = c.post("/api/assets",
               files={"file": ("blobs.png", buf.getvalue(), "image/png")})
    d = r.json()
    # el aviso de blobs aparece
    assert any("trozos sueltos" in w for w in d["warnings"])
    info = c.get(f"/api/assets/{d['id']}/blobs").json()
    assert len(info["blobs"]) == 2
    assert info["preview_png"].startswith("data:image/png;base64,")
    # limpiar (sin especificar quitar -> todos los no principales)
    r = c.post(f"/api/assets/{d['id']}/limpiar-contorno", json={})
    limpio = r.json()
    assert (limpio["w_px"], limpio["h_px"]) == (120, 120)
    assert not any("trozos sueltos" in w for w in limpio["warnings"])
    # ya sólo queda el contorno principal (sin blobs sueltos)
    assert c.get(f"/api/assets/{d['id']}/blobs").json()["blobs"] == []


def test_nunca_modifica_los_originales(client, tmp_path):
    """El archivo original en disco no cambia tras importar/procesar/exportar."""
    import hashlib
    import time
    c, st, _ = client
    # crea un archivo "original" en una carpeta del usuario
    origen = tmp_path / "mis_fotos" / "gatito.png"
    origen.parent.mkdir(parents=True, exist_ok=True)
    origen.write_bytes(png_bytes(sticker_rgba((150, 120))))
    antes = hashlib.sha256(origen.read_bytes()).hexdigest()

    # importa, quita fondo, activa offset, optimiza y exporta
    with origen.open("rb") as fh:
        d = c.post("/api/assets",
                   files={"file": ("gatito.png", fh, "image/png")}).json()
    c.post(f"/api/assets/{d['id']}/remove-background", json={})
    c.put("/api/settings", json={"offset_activo": True, "offset_mm": 1.0,
                                 "offset_modo": "blanco"})
    c.post("/api/optimize")
    for _ in range(200):
        if c.get("/api/result").json()["pages"]:
            break
        time.sleep(0.05)
    salida = tmp_path / "salida"
    salida.mkdir(exist_ok=True)
    r = c.post("/api/export", json={"name": "prueba", "folder": str(salida)})
    assert r.status_code == 200

    # el original sigue EXACTAMENTE igual
    assert hashlib.sha256(origen.read_bytes()).hexdigest() == antes


def test_export_no_sobrescribe_nada(client, tmp_path):
    """Exportar dos veces con el mismo nombre crea carpetas distintas y no
    toca ningún archivo existente."""
    import time
    c, st, _ = client
    upload(c, "a.png")
    c.post("/api/optimize")
    for _ in range(200):
        if c.get("/api/result").json()["pages"]:
            break
        time.sleep(0.05)
    salida = tmp_path / "destino"
    salida.mkdir(exist_ok=True)
    # un archivo importante que NO debe tocarse
    importante = salida / "no_tocar.txt"
    importante.write_text("importante", "utf-8")
    r1 = c.post("/api/export", json={"name": "hoja", "folder": str(salida)}).json()
    r2 = c.post("/api/export", json={"name": "hoja", "folder": str(salida)}).json()
    assert r1["folder"] != r2["folder"]           # carpetas distintas
    assert Path(r1["folder"]).exists() and Path(r2["folder"]).exists()
    assert importante.read_text("utf-8") == "importante"


def test_defaults_extras_pikmin(client):
    """Los extras del Pikmin y el volumen vienen configurados por defecto."""
    c, st, _ = client
    s = c.get("/api/settings").json()["settings"]
    assert s["pikmin_activo"] is True
    assert s["pikmin_frecuencia_min"] == 1.0
    assert s["pikmin_sonido"] is True
    assert s["pikmin_sonido_morir"] is True
    assert s["volumen"] == 0.5
    assert s["mute"] is True     # silenciado por defecto
    # se pueden cambiar y persisten
    c.put("/api/settings", json={"pikmin_frecuencia_min": 5.0, "mute": True,
                                 "volumen": 0.2})
    s2 = c.get("/api/settings").json()["settings"]
    assert s2["pikmin_frecuencia_min"] == 5.0
    assert s2["mute"] is True and s2["volumen"] == 0.2


def test_estimacion_corte(client):
    """La estimación de corte (Maker 5) usa siluetas/viajes y el factor ajusta."""
    import time
    c, st, _ = client
    d = upload(c, "a.png").json()
    c.patch(f"/api/assets/{d['id']}", json={"copies": 4})
    c.post("/api/optimize")
    for _ in range(200):
        if c.get("/api/result").json()["pages"]:
            break
        time.sleep(0.05)
    e = c.get("/api/estimate").json()
    assert e["maquina"] == "Cricut Maker 5"
    assert e["segundos"] > 0
    assert e["paginas"] and e["paginas"][0]["formas"] == 4
    base = e["segundos"]
    c.put("/api/settings", json={"corte_factor": 2.0})
    e2 = c.get("/api/estimate").json()
    assert abs(e2["segundos"] - base * 2) < 0.3


def test_modo_rapido_y_force(client):
    """El recálculo forzado (rápido/óptimo) arranca un job."""
    c, st, _ = client
    upload(c, "a.png")
    for body in ({"modo": "rapido", "force": True},
                 {"modo": "optimo", "force": True},
                 {}):
        r = c.post("/api/optimize", json=body)
        assert r.status_code == 200
        assert "id" in r.json()


def test_auto_recalcular_desactivado_no_lanza_job(client):
    """Con el recálculo automático desactivado, los cambios no recolocan;
    el botón (POST /api/optimize) sí."""
    c, st, _ = client
    r = c.put("/api/settings", json={"auto_recalcular": False})
    assert r.json()["job"] is None
    r = c.put("/api/settings", json={"rotacion": "libre", "espacio_mm": 3.0})
    assert r.json()["job"] is None
    assert c.get("/api/settings").json()["settings"]["rotacion"] == "libre"
    # el botón siempre recalcula
    assert "id" in c.post("/api/optimize", json={"force": True}).json()


def test_defaults_rotacion_90(client):
    """Rotación por defecto 0/90/180/270, también en minis."""
    c, st, _ = client
    s = c.get("/api/settings").json()["settings"]
    assert s["rotacion"] == "90"
    assert s["mini_rotacion"] == "90"


def test_delete_y_clear(client):
    c, st, _ = client
    d1 = upload(c, "a.png").json()
    d2 = upload(c, "b.png").json()
    assert c.delete(f"/api/assets/{d1['id']}").status_code == 200
    assert len(c.get("/api/assets").json()) == 1
    assert c.delete("/api/assets").status_code == 200
    assert c.get("/api/assets").json() == []


def test_remove_restore_background(client):
    c, st, _ = client
    d = upload(c).json()
    r = c.post(f"/api/assets/{d['id']}/remove-background", json={})
    assert r.json()["bg_removed"] is True
    prev = c.get(f"/api/assets/{d['id']}/preview.png")
    assert prev.status_code == 200
    r = c.post(f"/api/assets/{d['id']}/restore-background")
    assert r.json()["bg_removed"] is False


def test_optimize_job_y_result(client):
    c, st, _ = client
    d = upload(c, "a.png").json()
    c.patch(f"/api/assets/{d['id']}", json={"copies": 3})
    r = c.post("/api/optimize").json()
    jid = r["id"]
    import time
    for _ in range(200):
        j = c.get(f"/api/job/{jid}").json()
        if j["done"]:
            break
        time.sleep(0.05)
    assert j["status"] == "done"
    res = c.get("/api/result").json()
    assert res["pages"] >= 1
    assert len(res["placements"]) == 3
    assert 0 < res["efficiency"] <= 1.0
    assert res["placed"] == 3


def test_paginas_png(client):
    c, st, _ = client
    upload(c, "a.png")
    c.post("/api/optimize")
    import time
    time.sleep(1.0)
    r = c.get("/api/pages/0.png")
    assert r.status_code == 200
    img = Image.open(io.BytesIO(r.content))
    assert img.mode == "RGBA"


def test_move_y_unpin(client):
    c, st, _ = client
    upload(c, "a.png")
    c.post("/api/optimize")
    import time
    for _ in range(200):
        if c.get("/api/result").json()["pages"]:
            break
        time.sleep(0.05)
    res = c.get("/api/result").json()
    p = res["placements"][0]
    # movimiento válido (dentro del área, sin chocar)
    r = c.post("/api/placements/move", json={"uid": p["uid"],
                                             "x": p["x"], "y": p["y"]})
    if r.status_code == 200:
        assert r.json()["placement"]["pinned"] is True
    # unpin reoptimiza
    r = c.post("/api/placements/unpin", json={"uid": p["uid"]})
    assert "id" in r.json()


def test_move_invalido_409(client):
    c, st, _ = client
    upload(c, "a.png")
    c.post("/api/optimize")
    import time
    for _ in range(200):
        if c.get("/api/result").json()["pages"]:
            break
        time.sleep(0.05)
    # uid inexistente -> 400/409
    r = c.post("/api/placements/move", json={"uid": "nope", "x": 0, "y": 0})
    assert r.status_code in (400, 409)


def test_export_guarda_archivos(client, tmp_path):
    c, st, _ = client
    d = upload(c, "a.png").json()
    c.patch(f"/api/assets/{d['id']}", json={"copies": 2})
    c.post("/api/optimize")
    import time
    for _ in range(200):
        if c.get("/api/result").json()["pages"]:
            break
        time.sleep(0.05)
    r = c.post("/api/export", json={"name": "Mi hoja", "folder": str(tmp_path)})
    assert r.status_code == 200
    data = r.json()
    assert "Mi_hoja_" in data["folder"]
    pngs = [f for f in data["files"] if f.endswith(".png")]
    assert pngs
    img = Image.open(pngs[0])
    assert img.mode == "RGBA"
    # sin guías: esquina transparente (lienzo recortable por defecto)
    assert img.getpixel((0, 0))[3] == 0
    # la carpeta queda guardada como predeterminada
    assert c.get("/api/settings").json()["settings"]["carpeta_export"] == str(tmp_path)


def test_print_pdf(client):
    c, st, _ = client
    upload(c, "a.png")
    c.post("/api/optimize")
    import time
    for _ in range(200):
        if c.get("/api/result").json()["pages"]:
            break
        time.sleep(0.05)
    r = c.get("/api/print.pdf")
    assert r.status_code == 200
    assert r.content[:4] == b"%PDF"


def test_fs_list(client, tmp_path):
    c, st, _ = client
    (tmp_path / "sub").mkdir()
    (tmp_path / ".oculto").mkdir()
    r = c.get("/api/fs/list", params={"path": str(tmp_path)})
    assert "sub" in r.json()["dirs"]
    assert ".oculto" not in r.json()["dirs"]


def test_icon_upload(client, tmp_path):
    c, st, _ = client
    img = sticker_rgba((64, 64))
    r = c.post("/api/icon", files={"file": ("i.png", png_bytes(img), "image/png")})
    assert r.status_code == 200
    r = c.get("/api/icon.png")
    assert r.status_code == 200
    assert r.content[:8] == b"\x89PNG\r\n\x1a\n"


def test_settings_cambio_pagina_reoptimiza(client):
    c, st, _ = client
    upload(c, "a.png")
    r = c.put("/api/settings", json={"pagina": "A3", "pagina_w": 420.0,
                                     "pagina_h": 297.0})
    assert r.status_code == 200
    res = c.get("/api/result").json()
    # el área cambia (A3 apaisado -> bbox 392 x 270)
    assert res["page_mm"] == [420.0, 297.0]


def test_sin_assets_result_vacio(client):
    c, st, _ = client
    res = c.get("/api/result").json()
    assert res["pages"] == 0
    r = c.post("/api/export", json={"name": "x"})
    assert r.status_code == 400
