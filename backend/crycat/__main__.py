"""Arranque de CryCat: python -m crycat [--port N] [--no-browser].

Salida de terminal con estética pastel (rosa/crema) y mensajes bilingües
en paralelo (español · English). Todo es local: no se usa Internet salvo la
comprobación opcional de versiones nuevas.
"""

from __future__ import annotations

import argparse
import datetime as dt
import os
import socket
import sys
import threading
import time
import webbrowser

import uvicorn

from . import APP_NAME, __version__
from .i18n import tb
from .server import create_app

# ---------------------------------------------------------------- colores --
R = "\033[0m"
ROSA = "\033[38;5;218m"      # rosa pastel claro
ROSA_F = "\033[38;5;211m"    # rosa
ROSA_O = "\033[38;5;205m"    # rosa fuerte
CREMA = "\033[38;5;230m"     # crema
CREMA_O = "\033[38;5;223m"   # crema oscura
LAVANDA = "\033[38;5;182m"   # lavanda suave
MENTA = "\033[38;5;151m"     # menta (ok)
GRIS = "\033[38;5;245m"


def _activar_ansi() -> None:
    """Habilita los colores ANSI en la consola de Windows."""
    if sys.platform == "win32":
        try:
            os.system("")  # truco estándar para habilitar VT en Windows 10+
        except Exception:
            pass
    # si la salida no es una terminal, quitar colores
    if not sys.stdout.isatty():
        global R, ROSA, ROSA_F, ROSA_O, CREMA, CREMA_O, LAVANDA, MENTA, GRIS
        R = ROSA = ROSA_F = ROSA_O = CREMA = CREMA_O = LAVANDA = MENTA = GRIS = ""


def _banner(port: int, url: str, carpeta: str) -> None:
    gato = [
        "   /\\_/\\   ",
        "  ( o.o )  ",
        "   > ^ <   ",
    ]
    texto = [
        f"{ROSA_O}{APP_NAME}{R} {CREMA_O}v{__version__}{R}",
        f"{CREMA}coloca tus imágenes de forma óptima para Cricut{R}",
        f"{CREMA}place your images optimally for Cricut{R}",
        f"{LAVANDA}· todo local · sin conexión a Internet ·  ·  all local · no Internet ·{R}",
    ]
    print()
    print(f"{ROSA}╭──────────────────────────────────────────────────────────╮{R}")
    for i in range(3):
        izq = f"{ROSA_F}{gato[i]}{R}"
        der = texto[i]
        print(f"{ROSA}│{R}  {izq}  {der}")
    print(f"{ROSA}│{R}            {texto[3]}")
    print(f"{ROSA}╰──────────────────────────────────────────────────────────╯{R}")
    print()
    filas = [
        (tb("Aplicación:"), url, ROSA_O),
        (tb("Datos:"), carpeta, GRIS),
        (tb("Puerto:"), str(port), GRIS),
        (tb("Autor:"), "Daniel Hernández Ferrándiz", CREMA),
    ]
    for et, val, col in filas:
        print(f"  {CREMA_O}♡  {et:<30}{R} {col}{val}{R}")
    print()
    print(f"  {LAVANDA}{tb('Se abrirá el navegador automáticamente.')}{R}")
    print(f"  {LAVANDA}{tb('Para salir: cierra esta ventana o pulsa')}{R} "
          f"{ROSA_O}Ctrl+C{R}")
    print()
    print(f"{ROSA}  ──────────────────────────────────────────────────────────{R}")
    print(f"  {CREMA}{tb('Registro de actividad:')}{R}")
    print(f"{ROSA}  ──────────────────────────────────────────────────────────{R}")
    try:
        sys.stdout.flush()
    except Exception:
        pass


def _latido(store_assets, parar: threading.Event) -> None:
    """Latido bonito cada minuto con el estado, en español e inglés."""
    while not parar.wait(60):
        hora = dt.datetime.now().strftime("%H:%M:%S")
        try:
            n = len(store_assets())
        except Exception:
            n = 0
        print(f"{ROSA_F}  ♡ {hora}{R}  {CREMA}{tb('CryCat sigue en marcha')}{R} "
              f"{LAVANDA}· {n} {tb('imágenes cargadas')}{R}")


def free_port(preferred: int) -> int:
    def in_use(port: int) -> bool:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            return s.connect_ex(("127.0.0.1", port)) == 0
    port = preferred
    for _ in range(50):
        if not in_use(port):
            return port
        port += 1
    return 0  # deja que el SO elija


def main() -> None:
    _activar_ansi()
    ap = argparse.ArgumentParser(
        prog=APP_NAME.lower(),
        description=tb("CryCat: coloca imágenes de forma óptima para Cricut"))
    ap.add_argument("--port", type=int, default=8712)
    ap.add_argument("--no-browser", action="store_true",
                    help=tb("no abrir el navegador automáticamente"))
    args = ap.parse_args()

    port = free_port(args.port)
    url = f"http://127.0.0.1:{port}/"

    from .config import DATA_DIR
    _banner(port, url, str(DATA_DIR))

    # comprobación de versión nueva al arrancar (no bloquea; falla en silencio)
    try:
        from .config import settings
        if settings.get("comprobar_versiones", True):
            from . import version
            version.comprobar_en_segundo_plano()
    except Exception:
        pass

    # imágenes de Pikmin Bloom: si faltan y hay Internet, se descargan solas
    try:
        from . import extras
        extras.descargar_en_segundo_plano()
    except Exception:
        pass

    # latido con el estado (número de imágenes cargadas)
    from .store import session
    parar = threading.Event()
    hilo = threading.Thread(target=_latido,
                            args=(lambda: session.asset_dicts(), parar),
                            daemon=True)
    hilo.start()

    if not args.no_browser:
        def abrir() -> None:
            time.sleep(1.2)
            try:
                webbrowser.open(url)
                print(f"{MENTA}  ✔ {tb('Navegador abierto')}{R} "
                      f"{LAVANDA}→ {url}{R}")
            except Exception:
                print(f"{ROSA_F}  ! {tb('Abre manualmente:')} {url}{R}")
        threading.Thread(target=abrir, daemon=True).start()

    try:
        uvicorn.run(create_app(), host="127.0.0.1", port=port,
                    log_level="info", access_log=False)
    except KeyboardInterrupt:
        pass
    finally:
        parar.set()
        print()
        print(f"{ROSA}╭──────────────────────────────────────────────╮{R}")
        print(f"{ROSA}│{R}  {ROSA_O}{tb('¡Hasta pronto!  ·  CryCat se ha cerrado')}{R}")
        print(f"{ROSA}╰──────────────────────────────────────────────╯{R}")
        print(f"{GRIS}  {tb('Hecha por Daniel Hernández Ferrándiz')}{R}")
        print()


if __name__ == "__main__":
    main()
