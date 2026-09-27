"""Prueba de humo de TODO lo que usa la interfaz, de una sola pasada.

Recorre los endpoints reales como haría la app: subir, recortar, limpiar,
bordes, optimizar (automático), página (con contornos y sus dos fotogramas),
carta, contornos, blobs, estimación, PDF con marcas, demo y ajustes.
Si algo de esto falla, la app se rompe en las manos del usuario.
"""

from __future__ import annotations

import time

import pytest
from fastapi.testclient import TestClient

from crycat.server import create_app
from crycat.store import Session
from tests.test_api import upload


@pytest.fixture()
def client(tmp_path, monkeypatch):
    """App con almacén limpio y config temporal (igual que en test_api)."""
    import crycat.config as cfg
    monkeypatch.setattr(cfg, "CONFIG_FILE", tmp_path / "config.json")
    monkeypatch.setattr(cfg, "SESSION_FILE", tmp_path / "session.json")
    monkeypatch.setattr(cfg, "PRESETS_FILE", tmp_path / "presets.json")
    monkeypatch.setattr(cfg, "ASSETS_DIR", tmp_path / "assets")
    monkeypatch.setattr(cfg, "DATA_DIR", tmp_path)
    monkeypatch.setattr(cfg, "ICON_FILE", tmp_path / "icono.png")
    cfg.settings._data = dict(cfg.DEFAULTS)
    st = Session()
    st.assets = {}
    st.last = None
    st._pending_session = None
    app = create_app(st)
    yield TestClient(app), st, tmp_path


def _optimizar(c, n=1):
    c.post("/api/optimize")
    for _ in range(400):
        r = c.get("/api/result").json()
        if r["pages"] and len(r["placements"]) >= n:
            return r
        time.sleep(0.05)
    return c.get("/api/result").json()


def test_humo_todo_lo_de_la_interfaz(client):
    c, st, _ = client

    assert c.get("/api/health").json()["ok"] is True
    assert c.get("/api/settings").json()["settings"]["opt_metodo"] == "auto"

    # subir + ajustes del elemento
    d = upload(c, "humo.png").json()
    aid = d["id"]
    assert c.patch(f"/api/assets/{aid}", json={
        "copies": 2, "mini_enabled": True, "mini_quota": 2.0,
        "offset_mm": 1.5, "offset_modo": "unir_curvo"}).status_code == 200

    # optimizar (método automático por espacio) — antes de tocar el fondo
    res = _optimizar(c, 2)
    assert res["placements"], "la optimización no colocó nada"

    # blobs (editor de contornos) y quitar fondo
    b = c.get(f"/api/assets/{aid}/blobs").json()
    assert "blobs" in b and "preview_png" in b
    assert c.post(f"/api/assets/{aid}/remove-background").status_code == 200

    # página: normal, con contornos y los DOS fotogramas del parpadeo
    for extra in ("", "&bordes=1&fase=0", "&bordes=1&fase=6"):
        r = c.get(f"/api/pages/0.png?v=1{extra}")
        assert r.status_code == 200 and r.content[:4] == b"\x89PNG"

    # carta y contornos vectoriales
    r = c.get(f"/api/assets/{aid}/preview.png?bordes=1&fase=0")
    assert r.status_code == 200 and r.content[:4] == b"\x89PNG"
    assert "piezas" in c.get("/api/contornos").json()

    # estimación y PDF con marcas
    assert c.get("/api/estimate").json()["segundos"] >= 0
    pdf = c.get("/api/print.pdf")
    assert pdf.status_code == 200 and pdf.content[:4] == b"%PDF"

    # guardar/exportar
    ex = c.post("/api/export", json={"name": "humo"}).json()
    assert ex.get("files")

    # mover al mismo sitio (no debe dar 409) y fijar
    p0 = c.get("/api/result").json()["placements"][0]
    mv = c.post("/api/placements/move",
                json={"uid": p0["uid"], "x": p0["x"], "y": p0["y"]})
    assert mv.status_code == 200 and mv.json()["placement"]["pinned"] is True

    # descartar y demo (que sale YA optimizada)
    assert c.delete("/api/assets").status_code == 200
    dm = c.post("/api/demo?n=6").json()
    assert dm["ok"] is True and dm["pages"] >= 1
    assert c.get("/api/result").json()["placements"]
