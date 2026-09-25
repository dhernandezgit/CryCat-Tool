"""Genera los iconos de CryCat a partir del logo del usuario.

Fuente: assets/4697-crying-cat.png (gatito llorando; misma imagen para todos
los iconos pequeños).

Uso: python scripts/gen_icono.py
Escribe:
  frontend/public/icono.png      (512 px, también lo sirve el backend)
  frontend/public/icono.svg      (PNG embebido, para cualquier uso vectorial)
  backend/crycat/web/icono.png   (512 px, incluido en el ejecutable)
  packaging/crycat.ico           (Windows, varios tamaños)
  packaging/icono.png            (para el instalador Inno Setup)
"""

from __future__ import annotations

import base64
import io
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
FUENTE = ROOT / "assets" / "4697-crying-cat.png"
ICO_SIZES = [(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]


def _logo(size: int) -> Image.Image:
    """Logo cuadrado a `size` px (escala uniforme, sin deformar)."""
    img = Image.open(FUENTE).convert("RGBA")
    if img.width == img.height:
        return img.resize((size, size), Image.Resampling.LANCZOS)
    # si no fuese cuadrado, recorta al centro
    lado = min(img.size)
    x = (img.width - lado) // 2
    y = (img.height - lado) // 2
    return img.crop((x, y, x + lado, y + lado)).resize(
        (size, size), Image.Resampling.LANCZOS)


def main() -> None:
    if not FUENTE.exists():
        print(f"Falta la imagen fuente: {FUENTE}", file=sys.stderr)
        return 1

    (ROOT / "frontend" / "public").mkdir(parents=True, exist_ok=True)
    (ROOT / "backend" / "crycat" / "web").mkdir(parents=True, exist_ok=True)
    (ROOT / "packaging").mkdir(parents=True, exist_ok=True)

    logo = _logo(512)
    logo.save(ROOT / "frontend" / "public" / "icono.png")
    logo.save(ROOT / "backend" / "crycat" / "web" / "icono.png")
    logo.save(ROOT / "packaging" / "icono.png")

    # SVG con el PNG embebido (misma imagen para todos los iconos)
    buf = io.BytesIO()
    logo.save(buf, "PNG")
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    svg = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" '
        'width="512" height="512">'
        f'<image width="512" height="512" href="data:image/png;base64,{b64}"/>'
        "</svg>\n"
    )
    (ROOT / "frontend" / "public" / "icono.svg").write_text(svg, "utf-8")

    # .ico para Windows
    _logo(256).save(ROOT / "packaging" / "crycat.ico", sizes=ICO_SIZES)

    print("iconos generados desde", FUENTE.name)
    return 0


if __name__ == "__main__":
    sys.exit(main())
