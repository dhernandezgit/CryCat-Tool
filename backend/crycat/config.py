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

CONFIG_VERSION = 26  # subir para migrar configuraciones antiguas

# Tiempo máximo RECOMENDADO por método (segundos). El usuario puede
# desactivar el automático y fijar su propio presupuesto.
OPT_TIEMPOS: dict[str, float] = {
    "auto": 8.0,         # elige solo según el espacio disponible
    "rapido": 3.0,       # una pasada de silueta (celda gruesa)
    "greedy": 8.0,       # silueta real: multi-arranque en paralelo
    "largest": 3.0,      # silueta real: una sola pasada
    "voronoi": 6.0,      # silueta real: huecos grandes
    "genetic": 25.0,     # silueta real: máxima calidad
}


# nombres antiguos de método → nombre actual
METODO_ALIAS: dict[str, str] = {
    "silueta": "greedy", "silueta_rapido": "greedy", "auto": "greedy",
    "maxrects": "greedy", "skyline": "greedy", "silueta_optimo": "genetic",
}


# segundos EXTRA de presupuesto por cada pieza a colocar (el trabajo crece:
# más piezas = más intentos, más combinaciones y más minis que rellenan)
OPT_POR_PIEZA: dict[str, float] = {
    "auto": 0.15, "rapido": 0.05, "greedy": 0.15, "largest": 0.05,
    "voronoi": 0.20, "genetic": 0.35,
}
OPT_TIEMPO_TOPE = 60.0       # techo de seguridad (nunca más de 1 minuto)


def tiempo_optimo(d, n_elementos: int = 0) -> float:
    """Presupuesto efectivo ADAPTADO al número de elementos.

    No es un tiempo fijo: parte de la base del método y crece con cada pieza
    (colocarlas, probar combinaciones y rellenar con minis cuesta más cuanto
    más hay). Preferimos un resultado bueno a uno rápido. Tope: 3 minutos.
    """
    if bool(d.get("opt_tiempo_auto", True)):
        m = str(d.get("opt_metodo", "greedy"))
        m = METODO_ALIAS.get(m, m)
        base = float(OPT_TIEMPOS.get(m, 8.0))
        por_pieza = float(OPT_POR_PIEZA.get(m, 0.45))
        t = base + por_pieza * max(0, int(n_elementos))
        return max(base, min(OPT_TIEMPO_TOPE, t))
    return max(0.5, float(d.get("opt_tiempo_max_s", 8.0)))


# En la nube se puede fijar una carpeta de datos con CRYCAT_DATA_DIR
_ENV_DATA = os.environ.get("CRYCAT_DATA_DIR")


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


CONFIG_DIR = Path(_ENV_DATA) if _ENV_DATA else app_config_dir()
DATA_DIR = Path(_ENV_DATA) if _ENV_DATA else app_data_dir()
CONFIG_FILE = CONFIG_DIR / "config.json"
ASSETS_DIR = DATA_DIR / "assets"
ICON_FILE = DATA_DIR / "icono.png"
SESSION_FILE = DATA_DIR / "session.json"
PRESETS_FILE = DATA_DIR / "presets.json"

DEFAULTS: dict = {
    "_v": CONFIG_VERSION,
    # General
    "espacio_mm": 0.5,
    "margen_mm": 1.0,            # margen de seguridad a los límites (mm)
    "rotacion": "libre",         # no | 90 (0/90/180/270) | libre (por defecto)
    "dpi_salida": 300,
    "pagina": "A4",
    "pagina_w": APP_W,           # mm (A4 vertical)
    "pagina_h": APP_H,
    "maquina": "maker3",         # maker3 | maker | maker5 | estandar | joy
    "usar_minis": False,       # desactivado por defecto (se activa en la barra)
    # Forma de las piezas (modos rápidos): siluetas (pegatinas), redondas
    # (chapas: círculos, ángulo 0) o rectangulos (carteles: cajas, giros 90)
    "modo_forma": "siluetas",
    # contornos de la vista previa: DESACTIVADOS por defecto (se activan
    # con el botón «Contorno» de la barra superior)
    "ver_contornos": False,
    "contorno_modo": "ninguno",
    # Minis (por defecto: 20 mm, tamaños IGUALES, cualquier ángulo y con el
    # MISMO borde en mm que el elemento grande, no proporcional)
    "mini_min_mm": 20.0,
    "mini_max_rescale": 70.0,    # tamaño máximo del mini (% del original)
    "mini_rotacion": "libre",    # no | 90 (0/90/180/270) | libre (por defecto)
    "mini_tamanos": "iguales",   # iguales (por defecto) | grandes
    "mini_usar_lista": True,     # por defecto manda la LISTA de tamaños
    "mini_lista_modo": "mm",     # la lista en mm (por defecto) o en %
    # borde de los minis: igual (mismos mm que el grande, por defecto),
    # proporcional (se reduce con el mini) o sin (sin borde)
    "mini_borde_modo": "igual",
    "mini_tamanos_lista": [20.0],  # tamaño deseado (mm del lado menor, o %)
    # Optimización
    "opt_metodo": "auto",        # auto | rapido | greedy | largest | voronoi | genetic
    "opt_calidad": "normal",     # exacta | normal | rapida (resolución de siluetas)
    "opt_tiempo_auto": True,     # presupuesto automático por método (si no, el de abajo)
    "opt_tiempo_max_s": 8.0,
    # Simplificación de siluetas simples (círculo/rect/triángulo/polígono):
    # cuánto tiene que parecerse (0..1) y cuántos lados se admiten
    "simplificar": True,
    "simplificar_threshold": 0.96,
    "simplificar_max_vertices": 12,
    "auto_recalcular": True,     # recalcular con cada cambio (si no, con el botón)
    # Estimación de corte (Cricut Maker 5)
    "corte_velocidad_mm_s": 50.0,
    "corte_viaje_mm_s": 120.0,
    "corte_extra_forma_s": 0.4,
    "corte_factor": 1.0,
    # Extras (Pikmin animado y sonido)
    "pikmin_activo": True,
    "pikmin_frecuencia_min": 5.0,   # minutos (promedio) entre apariciones
    "pikmin_sonido": True,
    "pikmin_fiesta": False,      # easter egg (5 clics al gato): se quedan y celebran
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
    # Espacio de color de impresión (etiqueta ICC del PNG) y simulación en
    # pantalla para que el cambio de espacio no apague los colores
    "espacio_color": "srgb",     # srgb | adobergb
    "bleed_mm": 0.0,             # sangrado de impresión (mm de borde extra)
    # Historial local (deshacer/rehacer) y qué cambios se guardan
    "historial": True,
    "historial_max": 40,
    "hist_tamano": True,         # guardar cambios de escala/tamaño
    "hist_copias": True,
    "hist_borde": True,
    "hist_minis": True,
    "simular_impresion": False,  # ver en pantalla cómo quedará al imprimir
    "sim_cmyk": False,           # simular recorte de CMYK
    "sim_saturacion": 1.0,       # ajustes para compensar la pérdida de color
    "sim_contraste": 1.0,
    "sim_brillo": 1.0,
    "chequear_lineas": True,
    "carpeta_export": "",
    "dpi_importacion": 300,      # DPI que asume Design Space al importar
    "lienzo": "pagina",          # recortable | pagina (con márgenes)
    # Visualización
    "tema": "wiwi",
    "modo": "rapido",             # rapido | experto (interfaz simplificada)
    "ver_guias": True,
    "fondo_transparente": False, # ojo: blanco (False) por defecto
    # Idioma y versiones
    "idioma": "es",              # es | en
    "comprobar_versiones": True, # avisar si hay versión nueva (solo con Internet)
    "web_inline_jobs": False,    # versión web: sin hilos, trabajos en línea
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
                        if saved.get("_v") == 25:
                            # los minis pasan a estar desactivados por defecto
                            saved["usar_minis"] = False
                            saved["_v"] = CONFIG_VERSION
                        elif saved.get("_v") == 24:
                            # nuevos valores de minis: lista en mm por defecto
                            saved.update({"mini_min_mm": 10.0,
                                          "mini_max_rescale": 70.0,
                                          "mini_usar_lista": True,
                                          "mini_lista_modo": "mm",
                                          "mini_tamanos_lista": [20.0]})
                            saved["_v"] = CONFIG_VERSION
                        elif saved.get("_v") == 23:
                            # los minis pasan a estar activados por defecto
                            saved["usar_minis"] = True
                            saved["_v"] = CONFIG_VERSION
                        elif saved.get("_v") == 22:
                            # migración suave: el antiguo perfil Maker único
                            # pasa a la serie Maker (Maker 3 por defecto)
                            if saved.get("maquina") in ("maker5", "maker"):
                                saved["maquina"] = "maker3"
                            saved["_v"] = CONFIG_VERSION
                        else:
                            # config muy antigua: se conserva solo lo que el
                            # usuario eligió claramente (no los formatos)
                            saved = {k: saved[k] for k in
                                     ("carpeta_export", "tema",
                                      "fondo_transparente", "idioma")
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


# Perfiles listos para usar (la UI los ofrece con un botón)
PRESETS_INTERESANTES: dict[str, dict] = {
    "chapa": {"espacio_mm": 0.5, "margen_mm": 0.5, "offset_activo": False,
              "usar_minis": True, "mini_min_mm": 4.0},
    "pegatina": {"espacio_mm": 2.0, "margen_mm": 1.0, "offset_activo": True,
                 "offset_mm": 1.0, "offset_modo": "extender"},
    "hoja": {"espacio_mm": 0.0, "margen_mm": 0.5, "offset_activo": False},
    "iman": {"espacio_mm": 1.0, "margen_mm": 1.0, "offset_activo": True,
             "offset_mm": 0.8, "offset_modo": "blanco"},
    "pegatina-grande": {"espacio_mm": 3.0, "margen_mm": 1.5,
                        "offset_activo": True, "offset_mm": 2.0,
                        "offset_modo": "extender", "dpi_salida": 300},
    "vinilo": {"espacio_mm": 1.5, "margen_mm": 1.0, "offset_activo": False,
               "rotacion": "libre", "opt_metodo": "genetic"},
}

# ------------------------------------------------------------------ modos --
# Dos modos, cada uno porque MEJORA de verdad:
#   · silueta     → la forma real de cada pieza y cualquier ángulo (defecto)
#   · rectangulos → piezas rectangulares por CAJAS: exacto y hasta 100× más
#                   rápido en tiempo (mismos resultados o mejores)
# (el modo de círculos se quitó: no mejoraba al de siluetas)
MODOS_INTERESANTES: dict[str, dict] = {
    "silueta": {
        "modo_forma": "siluetas", "rotacion": "libre",
        "espacio_mm": 0.5, "margen_mm": 1.0, "offset_activo": True,
        "offset_mm": 1.0, "offset_modo": "extender",
    },
    "rectangulos": {
        "modo_forma": "rectangulos", "rotacion": "90",
        "espacio_mm": 2.0, "margen_mm": 1.0, "offset_activo": False,
    },
}

# Modos personalizados: 3 huecos con nombre editable que guardan los ajustes
# actuales (se pueden reescribir tantas veces como se quiera).
SLOTS_FILE = DATA_DIR / "modos.json"
SLOTS = 3

# Solo se guarda lo que define un MODO de trabajo (nada de tema, idioma,
# ventana o pikmin: eso no debería cambiar al cargar un modo)
AJUSTES_MODO = (
    "modo_forma", "rotacion", "mini_rotacion", "espacio_mm", "margen_mm",
    "offset_activo", "offset_mm", "offset_modo", "offset_color",
    "usar_minis", "mini_min_mm", "mini_max_rescale", "mini_tamanos",
    "mini_borde_modo", "mini_usar_lista", "mini_lista_modo",
    "mini_tamanos_lista", "opt_metodo", "opt_calidad", "opt_tiempo_auto",
    "opt_tiempo_max_s", "dpi_salida", "lienzo", "color_formato",
    "pagina", "pagina_w", "pagina_h", "maquina", "bleed_mm",
)


def load_slots() -> list[dict]:
    """Los 3 huecos personalizados: [{nombre, ajustes}] (siempre 3)."""
    try:
        if SLOTS_FILE.exists():
            data = json.loads(SLOTS_FILE.read_text("utf-8"))
            slots = data.get("slots") if isinstance(data, dict) else data
            if isinstance(slots, list):
                out = []
                for i in range(SLOTS):
                    s = slots[i] if i < len(slots) else {}
                    out.append({"nombre": str(s.get("nombre") or f"Modo {i + 1}"),
                                "ajustes": s.get("ajustes") or None})
                return out
    except Exception:
        pass
    return [{"nombre": f"Modo {i + 1}", "ajustes": None} for i in range(SLOTS)]


def save_slot(i: int, nombre: str, ajustes: dict) -> None:
    """Guarda los ajustes actuales en el hueco `i` con su nombre."""
    slots = load_slots()
    if not (0 <= i < SLOTS):
        return
    recorte = {k: v for k, v in (ajustes or {}).items() if k in AJUSTES_MODO}
    slots[i] = {"nombre": (nombre or f"Modo {i + 1}")[:40], "ajustes": recorte}
    SLOTS_FILE.parent.mkdir(parents=True, exist_ok=True)
    SLOTS_FILE.write_text(json.dumps({"slots": slots}, ensure_ascii=False,
                                     indent=2), "utf-8")


def rename_slot(i: int, nombre: str) -> None:
    """Cambia solo el nombre del hueco (sin tocar sus ajustes)."""
    slots = load_slots()
    if 0 <= i < SLOTS:
        slots[i]["nombre"] = (nombre or f"Modo {i + 1}")[:40]
        SLOTS_FILE.parent.mkdir(parents=True, exist_ok=True)
        SLOTS_FILE.write_text(json.dumps({"slots": slots}, ensure_ascii=False,
                                         indent=2), "utf-8")


def clear_slot(i: int) -> None:
    slots = load_slots()
    if 0 <= i < SLOTS:
        slots[i] = {"nombre": slots[i].get("nombre") or f"Modo {i + 1}",
                    "ajustes": None}
        SLOTS_FILE.parent.mkdir(parents=True, exist_ok=True)
        SLOTS_FILE.write_text(json.dumps({"slots": slots}, ensure_ascii=False,
                                         indent=2), "utf-8")
