"""Empaqueta el backend de CryCat para la versión web (Pyodide).

Genera docs/web/crycat.zip con el paquete `crycat` tal cual, de modo que la
web ejecuta EXACTAMENTE el mismo código que la aplicación de escritorio.

Uso:  python scripts/empaquetar_web.py
"""

from __future__ import annotations

import pathlib
import sys
import zipfile

RAIZ = pathlib.Path(__file__).resolve().parents[1]
BACKEND = RAIZ / "backend" / "crycat"
DESTINO = RAIZ / "docs" / "web" / "crycat.zip"

# módulos que no tienen sentido (ni dependencias) en el navegador
EXCLUIR = {"server.py", "version.py", "webapi.py", "__main__.py"}


def main() -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
    if not BACKEND.exists():
        print("No encuentro backend/crycat")
        return 1
    DESTINO.parent.mkdir(parents=True, exist_ok=True)
    n = 0
    with zipfile.ZipFile(DESTINO, "w", zipfile.ZIP_DEFLATED) as z:
        for f in sorted(BACKEND.rglob("*.py")):
            rel = f.relative_to(RAIZ / "backend").as_posix()
            if f.name in EXCLUIR:
                continue
            if "__pycache__" in rel:
                continue
            z.write(f, rel)
            n += 1
        # el puente, siempre incluido
        puente = BACKEND / "webapi.py"
        if puente.exists():
            z.write(puente, "crycat/webapi.py")
            n += 1
    print(f"{n} ficheros → {DESTINO.relative_to(RAIZ)} "
          f"({DESTINO.stat().st_size // 1024} KB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
