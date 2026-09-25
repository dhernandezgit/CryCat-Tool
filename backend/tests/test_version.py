"""Tests del sistema de versiones (GitHub Releases) y de la i18n."""

import pytest
from fastapi.testclient import TestClient

from crycat import funmsgs, version
from crycat.i18n import en, tb, tr
from crycat.server import create_app
from crycat.store import Session

RELEASE = {
    "tag_name": "v9.9.9",
    "html_url": "https://github.com/dhernandezgit/CryCat-Tool/releases/tag/v9.9.9",
    "body": "novedades",
    "published_at": "2026-01-01T00:00:00Z",
    "assets": [
        {"name": "CryCat.exe", "size": 12345678,
         "browser_download_url": "https://github.com/dhernandezgit/CryCat-Tool/"
                                 "releases/download/v9.9.9/CryCat.exe"},
        {"name": "crycat-onefile", "size": 12345678,
         "browser_download_url": "https://github.com/dhernandezgit/CryCat-Tool/"
                                 "releases/download/v9.9.9/crycat-onefile"},
    ],
}


@pytest.fixture()
def client(tmp_path, monkeypatch):
    import crycat.config as cfg
    monkeypatch.setattr(cfg, "CONFIG_FILE", tmp_path / "config.json")
    monkeypatch.setattr(cfg, "SESSION_FILE", tmp_path / "session.json")
    monkeypatch.setattr(cfg, "PRESETS_FILE", tmp_path / "presets.json")
    monkeypatch.setattr(cfg, "ASSETS_DIR", tmp_path / "assets")
    monkeypatch.setattr(cfg, "DATA_DIR", tmp_path)
    cfg.settings._data = dict(cfg.DEFAULTS)
    st = Session()
    st.assets = {}
    st.last = None
    st._pending_session = None
    return TestClient(create_app(st)), cfg


# ------------------------------------------------------------- comparación --
def test_comparar_versiones():
    assert version.comparar("1.0.0", "1.0.0") == 0
    assert version.comparar("1.0.0", "1.2.0") == -1
    assert version.comparar("v2.0", "1.9.9") == 1
    assert version.comparar("1.0", "1.0.1") == -1
    assert version.comparar("", "1.0") == -1


def test_estado_tiene_las_claves_esperadas():
    e = version.estado()
    for k in ("actual", "ultima", "hay_nueva", "url", "notas", "fecha",
              "comprobado", "error", "actualizacion"):
        assert k in e
    assert e["actual"] == version.__version__


# ------------------------------------------------------------- comprobación --
def test_comprobar_detecta_version_nueva(monkeypatch):
    monkeypatch.setattr(version, "_get_json", lambda url, timeout: dict(RELEASE))
    e = version.comprobar(force=True)
    assert e["hay_nueva"] is True
    assert e["ultima"] == "9.9.9"
    assert e["error"] is None
    assert e["asset_name"] in ("CryCat.exe", "crycat-onefile")


def test_comprobar_sin_conexion_no_revienta(monkeypatch):
    def boom(url, timeout):
        raise OSError("sin red")
    monkeypatch.setattr(version, "_get_json", boom)
    e = version.comprobar(force=True)
    assert e["error"]
    assert e["hay_nueva"] is False


def test_comprobar_misma_version(monkeypatch):
    rel = dict(RELEASE, tag_name=f"v{version.__version__}")
    monkeypatch.setattr(version, "_get_json", lambda url, timeout: rel)
    e = version.comprobar(force=True)
    assert e["hay_nueva"] is False


def test_cooldown_evita_repetir(monkeypatch):
    llamadas = []

    def fake(url, timeout):
        llamadas.append(1)
        return dict(RELEASE)

    monkeypatch.setattr(version, "_get_json", fake)
    version.comprobar(force=True)
    version.comprobar()            # dentro del cooldown: no vuelve a llamar
    assert len(llamadas) == 1


# --------------------------------------------------------------- actualizar --
def test_actualizar_en_modo_desarrollo(monkeypatch):
    monkeypatch.setattr(version, "_get_json", lambda url, timeout: dict(RELEASE))
    monkeypatch.setattr(version, "es_ejecutable", lambda: False)
    version.comprobar(force=True)
    r = version.actualizar_y_reiniciar()
    assert r["ok"] is False
    assert r["modo"] == "dev"
    assert r["url"]


def test_actualizar_sin_version_nueva(monkeypatch):
    rel = dict(RELEASE, tag_name=f"v{version.__version__}")
    monkeypatch.setattr(version, "_get_json", lambda url, timeout: rel)
    version.comprobar(force=True)
    r = version.actualizar_y_reiniciar()
    assert r["ok"] is False


# ---------------------------------------------------------------- endpoints --
def test_endpoint_version(client):
    c, _ = client
    r = c.get("/api/version")
    assert r.status_code == 200
    assert r.json()["actual"] == version.__version__


def test_endpoint_check(client, monkeypatch):
    c, _ = client
    monkeypatch.setattr(version, "_get_json", lambda url, timeout: dict(RELEASE))
    r = c.post("/api/version/check")
    assert r.status_code == 200
    assert r.json()["hay_nueva"] is True


def test_endpoint_update_en_dev(client, monkeypatch):
    c, _ = client
    monkeypatch.setattr(version, "_get_json", lambda url, timeout: dict(RELEASE))
    monkeypatch.setattr(version, "es_ejecutable", lambda: False)
    c.post("/api/version/check")
    r = c.post("/api/version/update")
    assert r.status_code == 200
    assert r.json()["modo"] == "dev"


# ---------------------------------------------------------------------- i18n --
def test_ajustes_incluyen_idioma_y_versiones(client):
    c, _ = client
    s = c.get("/api/settings").json()["settings"]
    assert s["idioma"] == "es"
    assert s["comprobar_versiones"] is True


def test_traducciones_basicas(client):
    c, cfg = client
    cfg.settings._data["idioma"] = "en"
    assert tr("¡Listo, ni un Diglett fuera de sitio!").startswith("Done")
    assert tr("{n} copias no caben en el área recortable", n=3) == \
        "3 copies don't fit in the cut area"
    assert en("Aplicación:") == "Application:"
    assert "·" in tb("Puerto:")            # bilingüe en paralelo
    assert cfg.settings._data["idioma"] == "en"
    cfg.settings._data["idioma"] = "es"
    assert tr("¡Listo, ni un Diglett fuera de sitio!").startswith("¡Listo")
    # texto sin traducir: se devuelve tal cual
    assert tr("texto inventado") == "texto inventado"


def test_mensajes_graciosos_por_idioma(client):
    c, cfg = client
    assert funmsgs.mensajes()[0].startswith("Tortilleando")
    cfg.settings._data["idioma"] = "en"
    assert funmsgs.mensajes()[0].startswith("Scrambling")
    assert len(funmsgs.mensajes()) == len(funmsgs.FUNNY_MESSAGES) >= 60
    cfg.settings._data["idioma"] = "es"


def test_funmsgs_endpoint_respeta_idioma(client):
    c, cfg = client
    cfg.settings._data["idioma"] = "en"
    msgs = c.get("/api/funmsgs").json()["msgs"]
    assert msgs[0].startswith("Scrambling")
    cfg.settings._data["idioma"] = "es"
    assert c.get("/api/funmsgs").json()["msgs"][0].startswith("Tortilleando")

def test_version_de_codigo_coincide_con_la_release_publicada(client, monkeypatch):
    """La versión del código se usa como 'actual' en la comprobación."""
    from crycat import version
    monkeypatch.setattr(version, "_get_json", lambda url, timeout: dict(RELEASE))
    e = version.comprobar(force=True)
    assert e["actual"] == version.__version__
    assert e["hay_nueva"] is True      # 9.9.9 es más nueva que la actual


def test_eta_no_supera_el_presupuesto(client):
    """La estimación restante nunca promete más que el tiempo máximo."""
    import time
    c, _cfg = client
    d = c.post("/api/assets",
               files={"file": ("a.png", __import__("io").BytesIO(
                   __import__("PIL.Image").Image.new("RGB", (80, 80),
                                                     (200, 60, 60)).tobytes()),
                   "image/png")})
    # 60 copias para que la optimización dure lo suficiente
    aid = d.json().get("asset", d.json()).get("id")
    c.patch(f"/api/assets/{aid}", json={"copies": 60})
    r = c.post("/api/optimize", json={"force": True})
    jid = r.json().get("job", {}).get("id") or r.json().get("id")
    tope = float(c.get("/api/settings").json()["settings"]["opt_tiempo_max_s"])
    visto = False
    for _ in range(200):
        time.sleep(0.05)
        j = c.get(f"/api/job/{jid}").json()
        if j.get("eta_s") is not None:
            visto = True
            assert j["eta_s"] <= tope + 1e-6, j["eta_s"]
        if j.get("done"):
            break
    assert visto
