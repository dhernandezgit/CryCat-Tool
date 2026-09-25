"""Traducción de los mensajes del backend (español → inglés).

Las claves son los textos en español (con {variables} cuando las hay); si una
clave no está traducida se devuelve tal cual, así que nunca se rompe nada.
"""

from __future__ import annotations

from .config import settings

_T: dict[str, dict[str, str]] = {
    "en": {
        # --- optimización -------------------------------------------------
        "{n} copias no caben en el área recortable":
            "{n} copies don't fit in the cut area",
        "Algunas copias no caben en el área recortable":
            "Some copies don't fit in the cut area",
        "¡Listo, ni un Diglett fuera de sitio!":
            "Done — not a single Diglett out of place!",
        "error: {e}": "error: {e}",
        # --- avisos de imagen ---------------------------------------------
        "{n} trozos sueltos (blobs) — usa «limpiar contorno»":
            "{n} loose pieces (blobs) — use “clean outline”",
        "AI/PDF rasterizado a {dpi} ppp": "AI/PDF rasterized at {dpi} dpi",
        "Línea anómala horizontal en fila {i}":
            "Odd horizontal line at row {i}",
        "Línea anómala vertical en columna {j}":
            "Odd vertical line at column {j}",
        "SVG: rasteriza en el navegador o exporta a PNG":
            "SVG: rasterize it in the browser or export to PNG",
        "No se pudo abrir {filename}: {e}": "Could not open {filename}: {e}",
        "Soporte PSD no disponible": "PSD support not available",
        "PSD sin composición": "PSD without composition",
        "PSD no válido: {e}": "Invalid PSD: {e}",
        "Soporte AI/PDF no disponible": "AI/PDF support not available",
        "AI/PDF no válido: {e}": "Invalid AI/PDF: {e}",
        "imagen.png": "image.png",
        # --- errores de la API --------------------------------------------
        "asset no encontrado": "asset not found",
        "original no disponible": "original not available",
        "job no encontrado": "job not found",
        "sin optimización previa": "no optimization yet",
        "posición no válida": "invalid position",
        "nada que guardar": "nothing to save",
        "nada que imprimir": "nothing to print",
        "ruta no encontrada": "path not found",
        "no se pudo abrir: {e}": "could not open: {e}",
        "icono no válido": "invalid icon",
        "falta el nombre del perfil": "profile name is missing",
        "perfil no encontrado": "profile not found",
        "no hay explorador de archivos disponible":
            "no file explorer available",
        "Personalizado": "Custom",
        # --- versiones ----------------------------------------------------
        "sin conexión": "offline",
        "Comprobando…": "Checking…",
        "Estás en la última versión": "You're on the latest version",
        "Nueva versión {v} disponible": "New version {v} available",
        "Descargando actualización…": "Downloading update…",
        "Instalando y reiniciando…": "Installing and restarting…",
        "No se pudo actualizar: {e}": "Update failed: {e}",
        "la descarga no parece válida": "the download doesn't look valid",
        "la descarga está incompleta": "the download is incomplete",
        "ya se está actualizando": "an update is already running",
        "no hay versiones nuevas": "there are no new versions",
        "la release no trae archivo para esta plataforma":
            "the release has no file for this platform",
        "en modo desarrollo se actualiza con git":
            "in development mode you update with git",
        "Actualizando…": "Updating…",
        # --- terminal -----------------------------------------------------
        "coloca tus imágenes de forma óptima para Cricut":
            "place your images optimally for Cricut",
        "· todo local · sin conexión a Internet ·":
            "· all local · no Internet connection ·",
        "Aplicación:": "Application:",
        "Datos:": "Data:",
        "Puerto:": "Port:",
        "Autor:": "Author:",
        "Se abrirá el navegador automáticamente.":
            "The browser will open automatically.",
        "Para salir: cierra esta ventana o pulsa":
            "To quit: close this window or press",
        "Registro de actividad:": "Activity log:",
        "CryCat sigue en marcha": "CryCat is still running",
        "imágenes cargadas": "images loaded",
        "Navegador abierto": "Browser opened",
        "Abre manualmente:": "Open manually:",
        "¡Hasta pronto!  ·  CryCat se ha cerrado":
            "See you soon!  ·  CryCat has closed",
        "Hecha por Daniel Hernández Ferrándiz":
            "Made by Daniel Hernández Ferrándiz",
        "CryCat: coloca imágenes de forma óptima para Cricut":
            "CryCat: place images optimally for Cricut",
        "no abrir el navegador automáticamente":
            "do not open the browser automatically",
    }
}


def idioma() -> str:
    return "en" if str(settings.get("idioma", "es")).lower().startswith("en") \
        else "es"


def tr(texto: str, **vars) -> str:
    """Traduce un texto español al idioma actual y sustituye {variables}."""
    plantilla = _T.get(idioma(), {}).get(texto, texto)
    if vars:
        try:
            return plantilla.format(**vars)
        except Exception:
            return plantilla
    return plantilla


def en(texto: str, **vars) -> str:
    """Versión en inglés de un texto español (siempre inglés)."""
    plantilla = _T.get("en", {}).get(texto, texto)
    if vars:
        try:
            return plantilla.format(**vars)
        except Exception:
            return plantilla
    return plantilla


def tb(texto: str, **vars) -> str:
    """Texto bilingüe en paralelo: «español · English» (para la terminal)."""
    es = texto
    if vars:
        try:
            es = texto.format(**vars)
        except Exception:
            es = texto
    ingles = en(texto, **vars)
    if es == ingles:
        return es
    return f"{es}  ·  {ingles}"
