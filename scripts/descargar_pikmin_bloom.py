"""Descarga TODAS las imágenes de Pikmin Bloom (Decor Pikmin) de la wiki.

Fuente: https://www.pikminwiki.com/Category:Pikmin_Bloom_Decor_Pikmin_images
Usa la API de MediaWiki (paginación completa) y guarda los PNG originales en
frontend/public/pikmin_bloom/ (y assets/pikmin_bloom/).

Uso:  python scripts/descargar_pikmin_bloom.py [--limite N] [--solo-lista]
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import threading
import time
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path


import sys

# Consolas de Windows: evitar UnicodeEncodeError con acentos/emojis
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass
ROOT = Path(__file__).resolve().parent.parent
DESTINOS = [ROOT / "frontend" / "public" / "pikmin_bloom",
            ROOT / "assets" / "pikmin_bloom"]
API = "https://www.pikminwiki.com/api.php"
CAT = "Category:Pikmin_Bloom_Decor_Pikmin_images"
H = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                   "Chrome/122 Safari/537.36",
     "Accept": "image/png,image/*,*/*;q=0.8",
     "Referer": "https://www.pikminwiki.com/"}


def api(params: dict) -> dict:
    q = urllib.parse.urlencode({**params, "format": "json"})
    url = f"{API}?{q}"
    for intento in range(4):
        try:
            return json.loads(urllib.request.urlopen(
                urllib.request.Request(url, headers=H), timeout=40).read())
        except Exception:
            time.sleep(1.5 * (intento + 1))
    raise RuntimeError(f"API no responde: {url}")


def titulos_categoria() -> list[str]:
    """Todos los ficheros de la categoría (paginado)."""
    out: list[str] = []
    cont = None
    while True:
        p = {"action": "query", "list": "categorymembers", "cmtitle": CAT,
             "cmlimit": "500", "cmtype": "file"}
        if cont:
            p["cmcontinue"] = cont
        d = api(p)
        out += [m["title"] for m in d.get("query", {}).get("categorymembers", [])]
        cont = d.get("continue", {}).get("cmcontinue")
        if not cont:
            break
    return out


def urls_de(titulos: list[str]) -> dict[str, str]:
    """URL original de cada fichero (en lotes de 50)."""
    out: dict[str, str] = {}
    for i in range(0, len(titulos), 50):
        lote = titulos[i:i + 50]
        d = api({"action": "query", "prop": "imageinfo", "iiprop": "url",
                 "titles": "|".join(lote)})
        for _pid, p in d.get("query", {}).get("pages", {}).items():
            if "imageinfo" in p:
                out[p["title"]] = p["imageinfo"][0]["url"]
    return out


def slug(titulo: str) -> str:
    n = titulo.replace("File:", "")
    n = re.sub(r"\.(png|jpg|jpeg|gif)$", "", n, flags=re.I)
    n = re.sub(r"[^\w\-.]+", "_", n).strip("_")
    return n[:90] + ".png"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limite", type=int, default=0, help="máximo a descargar")
    ap.add_argument("--solo-lista", action="store_true")
    args = ap.parse_args()

    for d in DESTINOS:
        d.mkdir(parents=True, exist_ok=True)

    titulos = titulos_categoria()
    print(f"{len(titulos)} imágenes en la categoría")
    if args.solo_lista:
        for t in titulos:
            print(t)
        return 0
    if args.limite:
        titulos = titulos[:args.limite]

    urls = urls_de(titulos)
    pendientes = [(t, u) for t, u in urls.items()
                  if not all((d / slug(t)).exists() for d in DESTINOS)]
    print(f"{len(pendientes)} por descargar (el resto ya estaba)")
    ok = len(urls) - len(pendientes)
    fallo = 0
    hechas = 0
    lock = threading.Lock()

    def bajar(par: tuple[str, str]) -> bool:
        titulo, url = par
        nombre = slug(titulo)
        try:
            data = urllib.request.urlopen(
                urllib.request.Request(url, headers=H), timeout=40).read()
        except Exception:
            return False
        for d in DESTINOS:
            (d / nombre).write_bytes(data)
        return True

    # descarga EN PARALELO (8 a la vez): pasa de minutos a segundos
    with ThreadPoolExecutor(max_workers=8) as ex:
        for bien in ex.map(bajar, pendientes):
            with lock:
                hechas += 1
                if bien:
                    ok += 1
                else:
                    fallo += 1
                if hechas % 50 == 0:
                    print(f"  {hechas}/{len(pendientes)} descargadas…")
    print(f"\n✔ {ok} imágenes guardadas en {DESTINOS[0]} ({fallo} fallos)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
