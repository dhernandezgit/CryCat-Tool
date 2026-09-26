"""Sistema de versiones de CryCat: comprobación y autoactualización.

- Comprueba la última release publicada en GitHub (solo si hay Internet).
- Descarga el ejecutable de la plataforma y lo instala con un script auxiliar
  que espera a que CryCat se cierre, reemplaza el archivo y lo reinicia.
- Los datos del usuario (configuración, perfiles, imágenes de sesión y
  exportaciones) viven fuera del ejecutable, así que nunca se pierden.
"""

from __future__ import annotations

import json
import os
import re
import subprocess
import sys
import tempfile
import threading
import time
from pathlib import Path

from . import __version__
from .i18n import tr

REPO = "dhernandezgit/CryCat-Tool"
API_LATEST = f"https://api.github.com/repos/{REPO}/releases/latest"
RELEASES_URL = f"https://github.com/{REPO}/releases"
USER_AGENT = f"CryCat/{__version__}"

# nombre del archivo que se descarga en cada plataforma
ASSET_WINDOWS = "CryCat.exe"
ASSET_LINUX = "crycat-onefile"

# tiempo mínimo entre comprobaciones automáticas (segundos)
COOLDOWN_S = 300.0

_lock = threading.Lock()
_estado: dict = {
    "actual": __version__,
    "ultima": None,
    "hay_nueva": False,
    "url": RELEASES_URL,
    "notas": "",
    "fecha": None,
    "comprobado": None,
    "error": None,
    "repo": f"https://github.com/{REPO}",
    "actualizacion": None,   # {"estado", "progreso", "mensaje"}
}


def _tupla(v: str) -> tuple:
    """Convierte «v1.2.3» en (1, 2, 3) para comparar."""
    nums = re.findall(r"\d+", str(v or ""))
    return tuple(int(n) for n in nums[:4]) or (0,)


def comparar(a: str, b: str) -> int:
    """-1 si a < b, 0 si iguales, 1 si a > b (estilo semver sencillo)."""
    ta, tb = _tupla(a), _tupla(b)
    n = max(len(ta), len(tb))
    ta += (0,) * (n - len(ta))
    tb += (0,) * (n - len(tb))
    return (ta > tb) - (ta < tb)


def es_ejecutable() -> bool:
    """True si corremos dentro del ejecutable empaquetado (PyInstaller)."""
    return bool(getattr(sys, "frozen", False))


def _nombre_asset() -> str:
    return ASSET_WINDOWS if sys.platform == "win32" else ASSET_LINUX


def _asset_para(assets: list) -> dict | None:
    """Busca el asset de esta plataforma en la release."""
    quiero = _nombre_asset().lower()
    for a in assets or []:
        if str(a.get("name", "")).lower() == quiero:
            return a
    return None


def _get_json(url: str, timeout: float) -> dict:
    import urllib.request
    req = urllib.request.Request(url, headers={
        "User-Agent": USER_AGENT,
        "Accept": "application/vnd.github+json",
    })
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode("utf-8"))


def comprobar(timeout: float = 5.0, force: bool = False) -> dict:
    """Consulta la última release. Nunca lanza: guarda el error en el estado."""
    with _lock:
        ult = _estado.get("comprobado") or 0
    if not force and (time.time() - ult) < COOLDOWN_S and ult:
        return estado()
    try:
        datos = _get_json(API_LATEST, timeout)
        etiqueta = str(datos.get("tag_name") or "").lstrip("vV")
        asset = _asset_para(datos.get("assets") or [])
        with _lock:
            _estado.update(
                actual=__version__,
                ultima=etiqueta or None,
                hay_nueva=bool(etiqueta and comparar(__version__, etiqueta) < 0),
                url=datos.get("html_url") or RELEASES_URL,
                notas=str(datos.get("body") or "")[:4000],
                fecha=datos.get("published_at"),
                comprobado=time.time(),
                error=None,
                asset=(asset or {}).get("browser_download_url"),
                asset_size=(asset or {}).get("size"),
                asset_name=(asset or {}).get("name"),
            )
    except Exception as e:
        # sin importar urllib arriba: en el navegador no siempre está
        codigo = getattr(e, "code", None)
        with _lock:
            _estado.update(
                comprobado=time.time(), hay_nueva=False,
                error=(None if codigo == 404 else
                       (f"HTTP {codigo}" if codigo else tr("sin conexión"))))
    return estado()


def estado() -> dict:
    with _lock:
        return dict(_estado)


def comprobar_en_segundo_plano(delay: float = 2.0) -> None:
    """Comprobación automática al arrancar (no bloquea ni falla si no hay red)."""
    def t() -> None:
        time.sleep(delay)
        try:
            comprobar()
        except Exception:
            pass
    threading.Thread(target=t, daemon=True).start()


def _progreso(estado_txt: str, progreso: float | None = None,
              mensaje: str | None = None) -> None:
    with _lock:
        _estado["actualizacion"] = {"estado": estado_txt,
                                    "progreso": progreso,
                                    "mensaje": mensaje}


def _descargar(url: str, destino: Path, tam_esperado: int | None) -> None:
    import urllib.request
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=30) as r, open(destino, "wb") as f:
        total = tam_esperado or int(r.headers.get("Content-Length") or 0)
        leido = 0
        while True:
            trozo = r.read(256 * 1024)
            if not trozo:
                break
            f.write(trozo)
            leido += len(trozo)
            pct = (leido / total * 100.0) if total else None
            _progreso("descargando", pct, tr("Descargando actualización…"))
    if leido < 5 * 1024 * 1024:
        raise RuntimeError(tr("la descarga no parece válida"))
    if tam_esperado and leido != tam_esperado:
        raise RuntimeError(tr("la descarga está incompleta"))


def _script_windows(pid: int, nuevo: Path, actual: Path) -> Path:
    ruta = Path(tempfile.gettempdir()) / "crycat_actualizar.bat"
    ruta.write_text(
        "@echo off\r\n"
        "setlocal\r\n"
        f"set PID={pid}\r\n"
        f'set NUEVO="{nuevo}"\r\n'
        f'set ACTUAL="{actual}"\r\n'
        ":espera\r\n"
        'tasklist /FI "PID eq %PID%" 2>nul | find "%PID%" >nul\r\n'
        "if not errorlevel 1 (\r\n"
        "  ping -n 2 127.0.0.1 >nul\r\n"
        "  goto espera\r\n"
        ")\r\n"
        "move /Y %NUEVO% %ACTUAL% >nul 2>nul\r\n"
        "if errorlevel 1 (\r\n"
        "  ping -n 2 127.0.0.1 >nul\r\n"
        "  goto espera\r\n"
        ")\r\n"
        "start \"\" %ACTUAL%\r\n"
        'del "%~f0"\r\n',
        "utf-8")
    return ruta


def _script_linux(pid: int, nuevo: Path, actual: Path) -> Path:
    ruta = Path(tempfile.gettempdir()) / "crycat_actualizar.sh"
    ruta.write_text(
        "#!/bin/sh\n"
        f"PID={pid}\n"
        f'NUEVO="{nuevo}"\n'
        f'ACTUAL="{actual}"\n'
        'while kill -0 "$PID" 2>/dev/null; do sleep 0.3; done\n'
        'mv -f "$NUEVO" "$ACTUAL"\n'
        'chmod +x "$ACTUAL"\n'
        'setsid "$ACTUAL" >/dev/null 2>&1 < /dev/null &\n'
        'rm -f "$0"\n',
        "utf-8")
    ruta.chmod(0o755)
    return ruta


def _lanzar_desacoplado(script: Path, pid: int, nuevo: Path, actual: Path) -> None:
    args = [str(pid), str(nuevo), str(actual)]
    if sys.platform == "win32":  # pragma: no cover
        DETACHED = 0x00000008
        NUEVO_GRUPO = 0x00000200
        subprocess.Popen(["cmd", "/c", str(script), *args],
                         creationflags=DETACHED | NUEVO_GRUPO,
                         close_fds=True,
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    else:
        subprocess.Popen(["setsid", "sh", str(script), *args],
                         start_new_session=True, close_fds=True,
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def actualizar_y_reiniciar() -> dict:
    """Descarga la nueva versión, la instala y reinicia CryCat."""
    st = estado()
    if (st.get("actualizacion") or {}).get("estado") == "descargando":
        return {"ok": False, "mensaje": tr("ya se está actualizando")}
    if not st.get("hay_nueva"):
        return {"ok": False, "mensaje": tr("no hay versiones nuevas")}
    if not es_ejecutable():
        return {"ok": False, "modo": "dev", "url": st.get("url") or RELEASES_URL,
                "mensaje": tr("en modo desarrollo se actualiza con git")}
    url = st.get("asset")
    if not url or not str(url).startswith(
            f"https://github.com/{REPO}/releases/download/"):
        return {"ok": False, "mensaje": tr("la release no trae archivo para "
                                           "esta plataforma"),
                "url": st.get("url") or RELEASES_URL}

    def tarea() -> None:
        try:
            actual = Path(sys.executable)
            nuevo = actual.with_name(actual.name + ".nuevo")
            _progreso("descargando", 0.0, tr("Descargando actualización…"))
            _descargar(url, nuevo, st.get("asset_size"))
            _progreso("instalando", 100.0, tr("Instalando y reiniciando…"))
            script = (_script_windows if sys.platform == "win32"
                      else _script_linux)(os.getpid(), nuevo, actual)
            _lanzar_desacoplado(script, os.getpid(), nuevo, actual)
            time.sleep(1.0)
            os._exit(0)   # el script auxiliar espera y reemplaza el ejecutable
        except Exception as e:
            _progreso("error", None, tr("No se pudo actualizar: {e}", e=e))

    threading.Thread(target=tarea, daemon=True).start()
    return {"ok": True, "mensaje": tr("Actualizando…")}
