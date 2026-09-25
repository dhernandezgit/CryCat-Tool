"""Configuración persistente de CryCat (se conserva entre sesiones)."""

from __future__ import annotations

import json
import os
import sys
import threading
from pathlib import Path

APP_NAME = "CryCat"

# A4 en vertical (formato de visualización por defecto)
APP_W = 210.0
APP_H = 297.0

CONFIG_VERSION = 10  # subir para migrar configuraciones antiguas


def app_config_dir() -> Path:
    if sys.platform == "win32":
        base = os.environ.get("APPDATA", str(Path.home()))
        return Path(base) / APP_NAME
    base = os.environ.get("XDG_CONFIG_HOME", str(Path.home() / ".config"))
    return Path(base) / APP_NAME.lower()


def app_data_dir() -> Path:
    if sys.platform == "win32":
        base = os.environ.get("APPDATA", str(Path.home()))
        return Path(base) / APP_NAME
    base = os.environ.get("XDG_DATA_HOME", str(Path.home() / ".local" / "share"))
    return Path(base) / APP_NAME.lower()


CONFIG_DIR = app_config_dir()
DATA_DIR = app_data_dir()
CONFIG_FILE = CONFIG_DIR / "config.json"
ASSETS_DIR = DATA_DIR / "assets"
ICON_FILE = DATA_DIR / "icono.png"
SESSION_FILE = DATA_DIR / "session.json"
PRESETS_FILE = DATA_DIR / "presets.json"

DEFAULTS: dict = {
    "_v": CONFIG_VERSION,
    # General
    "espacio_mm": 2.0,
    "margen_mm": 1.0,            # margen de seguridad a los límites (mm)
    "rotacion": "90",            # no | 90 (0/90/180/270) | libre
    "dpi_salida": 300,
    "pagina": "A4",
    "pagina_w": APP_W,           # mm (A4 vertical)
    "pagina_h": APP_H,
    "maquina": "maker5",         # maker5 | estandar | joy
    "usar_minis": False,
    # Minis
    "mini_min_mm": 5.0,
    "mini_max_rescale": 1000.0,  # %
    "mini_rotacion": "90",       # no | 90 (0/90/180/270) | libre
    "mini_tamanos": "grandes",   # iguales | grandes
    "mini_usar_lista": False,    # usar la lista de tamaños en vez de automáticos
    "mini_tamanos_lista": [50.0],  # tamaños deseados (% respecto al original)
    # Optimización
    "opt_metodo": "silueta",     # silueta | silueta_rapido | auto | maxrects | skyline
    "opt_tiempo_max_s": 8.0,
    "auto_recalcular": True,     # recalcular con cada cambio (si no, con el botón)
    # Estimación de corte (Cricut Maker 5)
    "corte_velocidad_mm_s": 50.0,
    "corte_viaje_mm_s": 120.0,
    "corte_extra_forma_s": 0.4,
    "corte_factor": 1.0,
    # Extras (Pikmin animado y sonido)
    "pikmin_activo": True,
    "pikmin_frecuencia_min": 1.0,   # minutos (promedio) entre apariciones
    "pikmin_sonido": True,
    "pikmin_sonido_morir": True,
    "volumen": 0.5,
    "mute": True,                # silenciado por defecto
    # Offset / borde de los elementos (contorno que se añade al recorte)
    "offset_activo": False,
    "offset_mm": 2.0,
    "offset_modo": "extender",   # extender | blanco | color
    "offset_color": "#ffffff",
    # Imagen
    "color_formato": "rgba",     # rgba | rgb
    "chequear_lineas": True,
    "carpeta_export": "",
    "dpi_importacion": 300,      # DPI que asume Design Space al importar
    "lienzo": "pagina",          # recortable | pagina (con márgenes)
    # Visualización
    "tema": "wiwi",
    "ver_guias": True,
    "fondo_transparente": False, # ojo: blanco (False) por defecto
    # Idioma y versiones
    "idioma": "es",              # es | en
    "comprobar_versiones": True, # avisar si hay versión nueva (solo con Internet)
}

_lock = threading.Lock()


class Settings:
    """Configuración cargada de config.json con valores por defecto."""

    def __init__(self) -> None:
        self._data: dict = {}
        self.load()

    def load(self) -> None:
        with _lock:
            self._data = dict(DEFAULTS)
            try:
                if CONFIG_FILE.exists():
                    saved = json.loads(CONFIG_FILE.read_text("utf-8"))
                    if saved.get("_v") != CONFIG_VERSION:
                        # config de una versión anterior: se conserva solo lo
                        # que el usuario eligió claramente (no los formatos)
                        saved = {k: saved[k] for k in
                                 ("carpeta_export", "tema", "fondo_transparente",
                                  "idioma")
                                 if k in saved}
                    self._data.update(saved)
            except Exception:
                pass

    def save(self) -> None:
        with _lock:
            CONFIG_DIR.mkdir(parents=True, exist_ok=True)
            CONFIG_FILE.write_text(
                json.dumps(self._data, ensure_ascii=False, indent=2), "utf-8")

    def get(self, key: str, default=None):
        if key in self._data:
            return self._data[key]
        if default is not None:
            return default
        return DEFAULTS.get(key)

    def set(self, values: dict) -> None:
        for k, v in values.items():
            if k in DEFAULTS:
                self._data[k] = v
        self.save()

    def as_dict(self) -> dict:
        return dict(self._data)


settings = Settings()


# ----------------------------------------------------- perfiles guardados --
def load_presets() -> dict:
    """Perfiles de configuración guardados (nombre -> ajustes)."""
    try:
        if PRESETS_FILE.exists():
            return json.loads(PRESETS_FILE.read_text("utf-8"))
    except Exception:
        pass
    return {}


def save_presets(presets: dict) -> None:
    PRESETS_FILE.parent.mkdir(parents=True, exist_ok=True)
    PRESETS_FILE.write_text(json.dumps(presets, ensure_ascii=False, indent=2),
                            "utf-8")
