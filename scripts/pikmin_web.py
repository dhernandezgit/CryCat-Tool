#!/usr/bin/env python3
"""Deja en la web solo una muestra de los Pikmin (2 al azar por tipo).

El build de Vite copia `frontend/public/*` a `docs/web/app/`: son 25 imágenes
de Pikmin (5 MB) y más de 1000 decoraciones de Pikmin Bloom (24 MB). Para que
la web no sature la memoria, este script deja:

  * 2 imágenes al azar por especie de Pikmin (el alma siempre se queda),
  * 2 decoraciones al azar por tipo de Pikmin Bloom,
  * los índices recortados (lo que de verdad se puede pedir),
  * los sonidos enteros (son 31 KB).

Además reduce las imágenes: en pantalla el Pikmin mide 62 px, así que con
256 px de lado sobra (incluso en pantallas HiDPI) y se ahorran megas.

Se ejecuta DESPUÉS del build web (que borra y rellena docs/web/app).

Uso:  backend/.venv/bin/python scripts/pikmin_web.py
"""
from __future__ import annotations

import json
import random
import re
import shutil
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
PUBLICO = RAIZ / "frontend" / "public"
WEB_APP = RAIZ / "docs" / "web" / "app"

# especies por palabra clave (el orden importa: "lay_bud" antes que nada)
ESPECIES = ["winged", "rock", "ice", "glow", "purple", "yellow", "blue",
            "white", "red", "unnamed"]
POR_ESPECIE = 2
POR_TIPO = 2


def especie(nombre: str) -> str:
    bajo = nombre.lower()
    for e in ESPECIES:
        if e in bajo:
            return e
    return "otro"


def tipo_decoracion(nombre: str) -> str:
    """Tipo normalizado: quita .png, sufijos _Rare/_1 y toma la última palabra."""
    base = re.sub(r"\.png$", "", nombre)
    base = re.sub(r"_Rare$", "", base)
    base = re.sub(r"_\d+$", "", base)
    return base.split("_")[-1] or "otro"


def reducir(p: Path, lado: int) -> None:
    """Reduce la imagen a `lado` px de lado máximo (mantiene proporción)."""
    try:
        from PIL import Image
    except ImportError:
        return
    try:
        with Image.open(p) as im:
            im = im.convert("RGBA") if im.mode in ("P", "LA", "RGBA") else im
            if max(im.size) <= lado:
                return
            im.thumbnail((lado, lado), Image.LANCZOS)
            im.save(p, "PNG", optimize=True)
    except Exception as e:                  # mejor una imagen rara que romper
        print(f"  (no se pudo reducir {p.name}: {e})")


def poda(destino: Path, agrupar, indice: Path, lado: int) -> list[str]:
    """Se queda con 2 al azar por grupo y devuelve los nombres conservados."""
    if not destino.exists():
        print(f"  (no existe {destino.relative_to(RAIZ)}; ¿falta el build?)")
        return []
    archivos = sorted(p for p in destino.iterdir()
                      if p.suffix.lower() in {".png", ".webp", ".jpg", ".jpeg"})
    grupos: dict[str, list[Path]] = {}
    for p in archivos:
        grupos.setdefault(agrupar(p.name), []).append(p)
    conservar: list[str] = []
    for grupo, lista in sorted(grupos.items()):
        elegidas = lista if len(lista) <= 2 else random.sample(lista, 2)
        conservar.extend(p.name for p in elegidas)
    conservar.sort()
    for p in archivos:                      # borrar el resto
        if p.name not in conservar:
            p.unlink()
    for nombre in conservar:                # aligerar las que se quedan
        reducir(destino / nombre, lado)
    indice.write_text(json.dumps(conservar, ensure_ascii=False, indent=0),
                      encoding="utf-8")
    return conservar


def main() -> int:
    if not (WEB_APP / "pikmin").exists():
        print("No encuentro docs/web/app/pikmin: compila la web primero")
        return 1

    print("Pikmin (2 por especie):")
    n_pet = poda(WEB_APP / "pikmin", especie, WEB_APP / "pikmin" / "indice.json",
                 256)
    print(f"  {len(n_pet)} imágenes")

    print("Pikmin Bloom (2 por tipo):")
    n_bloom = poda(WEB_APP / "pikmin_bloom", tipo_decoracion,
                   WEB_APP / "pikmin_bloom" / "indice.json", 192)
    print(f"  {len(n_bloom)} decoraciones")

    # el escritorio usa la lista completa (índice del proyecto)
    completos = sorted(p.name for p in (PUBLICO / "pikmin").iterdir()
                       if p.suffix.lower() in {".png", ".webp"})
    (PUBLICO / "pikmin" / "indice.json").write_text(
        json.dumps(completos, ensure_ascii=False, indent=0), encoding="utf-8")
    print(f"  índice del escritorio: {len(completos)} imágenes")

    # sonidos completos (pequeños)
    (WEB_APP / "sonidos").mkdir(parents=True, exist_ok=True)
    for s in (PUBLICO / "sonidos").glob("*.mp3"):
        shutil.copy2(s, WEB_APP / "sonidos" / s.name)
    print("  sonidos copiados")

    total = sum(p.stat().st_size for d in ("pikmin", "pikmin_bloom", "sonidos")
                for p in (WEB_APP / d).rglob("*") if p.is_file())
    print(f"Total recursos de Pikmin en la web: {total // 1024} KB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
