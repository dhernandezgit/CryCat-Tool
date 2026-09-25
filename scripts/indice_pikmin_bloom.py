"""Genera el índice de imágenes de Pikmin Bloom para el frontend.

Escribe frontend/public/pikmin_bloom/indice.json con la lista de ficheros PNG,
que el frontend usa para ir rotando los Pikmin que asoman por la interfaz.

Uso:  python scripts/indice_pikmin_bloom.py
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIR = ROOT / "frontend" / "public" / "pikmin_bloom"


def main() -> int:
    if not DIR.exists():
        print("No existe", DIR)
        return 1
    nombres = sorted(f.name for f in DIR.glob("*.png"))
    (DIR / "indice.json").write_text(
        json.dumps(nombres, ensure_ascii=False), "utf-8")
    print(f"{len(nombres)} imágenes indexadas en {DIR / 'indice.json'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
