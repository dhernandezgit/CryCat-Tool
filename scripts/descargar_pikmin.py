"""Descarga imágenes de Pikmin y el alma (spirit) desde la wiki de Pikmin.

Uso:  python scripts/descargar_pikmin.py
Deja los PNG transparentes en frontend/public/pikmin/ (y assets/pikmin/).
"""

from __future__ import annotations

import json
import sys
import urllib.parse
import urllib.request
from pathlib import Path


import sys

# Consolas de Windows: evitar UnicodeEncodeError con acentos/emojis
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass
ROOT = Path(__file__).resolve().parent.parent
DESTINO = [ROOT / "frontend" / "public" / "pikmin", ROOT / "assets" / "pikmin"]
H = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                   "Chrome/122 Safari/537.36",
     "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
     "Referer": "https://pikmin.fandom.com/"}

# (nombre_destino, título del archivo en la wiki)
FICHEROS = [
    ("01_red_hd.png", "File:RedPikminHD.png"),
    ("02_yellow_hd.png", "File:YellowPikminHD.png"),
    ("03_blue_hd.png", "File:BluePikminHD.png"),
    ("04_white_hd.png", "File:White_Pikmin_HD.png"),
    ("05_purple_hd.png", "File:Purple_Pikmin_HD.png"),
    ("06_winged_hd.png", "File:WingedPikminHD.png"),
    ("07_rock_hd.png", "File:RockPikminHD.png"),
    ("08_ice.png", "File:Ice_Pikmin.N.png"),
    ("09_glow.png", "File:Glow_Pikmin_art_by_Painteds_.png"),
    ("10_p3_red.png", "File:P3_Red_Pikmin.png"),
    ("11_p3_blue.png", "File:P3_Blue_Pikmin.png"),
    ("12_p3_purple.png", "File:P3_Purple_Pikmin.png"),
    ("13_white.png", "File:White_Pikmin.png"),
    ("14_purple.png", "File:Purple_Pikmin.png"),
    ("15_winged.png", "File:Winged_Pikmin.png"),
    ("16_red.png", "File:Red_Pikmin.png"),
    ("17_blue.png", "File:Blue_Pikmin.png"),
    ("18_rock.png", "File:Rock_Pikmin.png"),
    # el alma (espíritu) del Pikmin, sprite transparente
    ("alma.png", "File:Spirits in SSBB.png"),
]


def url_de(titulo: str) -> str | None:
    api = ("https://pikmin.fandom.com/api.php?action=query&format=json"
           "&prop=imageinfo&iiprop=url&titles=" + urllib.parse.quote(titulo))
    try:
        d = json.loads(urllib.request.urlopen(
            urllib.request.Request(api, headers=H), timeout=25).read())
    except Exception:
        return None
    for _pid, p in d.get("query", {}).get("pages", {}).items():
        if "imageinfo" in p:
            return p["imageinfo"][0]["url"]
    return None


def main() -> int:
    for d in DESTINO:
        d.mkdir(parents=True, exist_ok=True)
    ok = 0
    for nombre, titulo in FICHEROS:
        url = url_de(titulo)
        if not url:
            print("sin URL:", titulo)
            continue
        try:
            data = urllib.request.urlopen(
                urllib.request.Request(url, headers=H), timeout=30).read()
        except Exception as e:
            print("error al descargar", titulo, e)
            continue
        for d in DESTINO:
            (d / nombre).write_bytes(data)
        print(f"OK {nombre:20s} <- {titulo} ({len(data)} bytes)")
        ok += 1
    print(f"\n{ok} imágenes guardadas en {DESTINO[0]}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
