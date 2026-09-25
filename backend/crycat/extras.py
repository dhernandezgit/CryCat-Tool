"""Recursos opcionales: descarga automática de las imágenes de Pikmin.

Fuentes (contenido de fans, sin ánimo de lucro):
  · Pikmin clásicos: wiki de Pikmin — https://pikmin.fandom.com
  · Pikmin Bloom:    wiki de Pikmin — https://www.pikminwiki.com
    (categoría «Pikmin Bloom Decor Pikmin images»)

Al arrancar desde el código fuente, si faltan las imágenes y hay Internet, se
descargan solas en segundo plano. En el ejecutable ya vienen incluidas.
"""

from __future__ import annotations

import socket
import subprocess
import sys
import threading
import time
from pathlib import Path


def hay_internet(timeout: float = 3.0) -> bool:
    """Comprobación rápida (no bloquea mucho) de conexión."""
    for host, puerto in (("www.pikminwiki.com", 443), ("1.1.1.1", 53)):
        try:
            with socket.create_connection((host, puerto), timeout=timeout):
                return True
        except Exception:
            continue
    return False


def _raiz_proyecto() -> Path | None:
    try:
        # backend/crycat/extras.py -> raíz del proyecto
        return Path(__file__).resolve().parents[2]
    except Exception:
        return None


def faltan_pikmin_bloom(raiz: Path) -> bool:
    return not (raiz / "frontend" / "public" / "pikmin_bloom" / "indice.json").exists()


def descargar_en_segundo_plano(delay: float = 4.0) -> None:
    """Descarga las imágenes que falten si hay Internet, sin bloquear el arranque."""
    if getattr(sys, "frozen", False):
        return                        # en el ejecutable ya vienen incluidas
    raiz = _raiz_proyecto()
    if raiz is None:
        return
    script = raiz / "scripts" / "descargar_pikmin_bloom.py"
    indice = raiz / "scripts" / "indice_pikmin_bloom.py"
    basico = raiz / "scripts" / "descargar_pikmin.py"
    if not script.exists():
        return

    def tarea() -> None:
        time.sleep(delay)
        if not hay_internet():
            return
        try:
            if not (raiz / "frontend" / "public" / "pikmin").exists() \
                    and basico.exists():
                subprocess.run([sys.executable, str(basico)], check=False,
                               stdout=subprocess.DEVNULL,
                               stderr=subprocess.DEVNULL)
            if faltan_pikmin_bloom(raiz):
                subprocess.run([sys.executable, str(script)], check=False,
                               stdout=subprocess.DEVNULL,
                               stderr=subprocess.DEVNULL)
                subprocess.run([sys.executable, str(indice)], check=False,
                               stdout=subprocess.DEVNULL,
                               stderr=subprocess.DEVNULL)
        except Exception:
            pass

    threading.Thread(target=tarea, daemon=True).start()
