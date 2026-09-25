"""Banco de pruebas de colocación con imágenes Pikmin.

Para cada una de las 10 combinaciones de tamaños/cantidades busca el MÁXIMO
número de copias por imagen que cabe en 1 hoja y en 2 hojas (usando las
siluetas reales, respetando espacio y límites), renderiza las hojas y guarda
los resultados en imágenes (PNG) y en números (JSON/TXT).

Uso:  .venv/bin/python ../scripts/test_pikmin.py
Salida: tests_output/pikmin/
"""

from __future__ import annotations

import json
import sys
import time
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "backend"))

from crycat import compose, geometry, imaging  # noqa: E402
from crycat.packer import optimize  # noqa: E402

DPI = 300.0
SALIDA = ROOT / "tests_output" / "pikmin"
PIKMIN = ROOT / "assets" / "pikmin"


def cargar_pikmin() -> dict[str, Image.Image]:
    imgs: dict[str, Image.Image] = {}
    for f in sorted(PIKMIN.glob("*")):
        if f.suffix.lower() not in (".png", ".webp", ".jpg", ".jpeg"):
            continue
        im = Image.open(f).convert("RGBA")
        a = np.asarray(im)[..., 3]
        im = imaging.remove_background(im) if int(a.min()) > 250 else imaging.trim(im)
        imgs[f.stem] = im
    return imgs


def a_mm(px: int) -> float:
    return geometry.px_to_mm(px, DPI)


def assets_de(imgs, escalas, copias, minis, mini_pct=50.0):
    return [{
        "id": aid, "name": aid,
        "w_mm": a_mm(im.width) * escalas.get(aid, 100.0) / 100.0,
        "h_mm": a_mm(im.height) * escalas.get(aid, 100.0) / 100.0,
        "copies": copias, "mini_enabled": minis, "mini_pct": mini_pct,
    } for aid, im in imgs.items()]


def ajustes(minis=False, rapido=False):
    d = {
        "espacio_mm": 2.0, "margen_mm": 1.0, "rotacion": "90",
        "usar_minis": minis, "mini_min_mm": 5.0, "mini_max_rescale": 100.0,
        "mini_rotacion": "90", "mini_tamanos": "iguales",
        "opt_metodo": "silueta_rapido" if rapido else "silueta",
        # el harness no es la app: se da margen para resultados completos
        "opt_tiempo_max_s": 2.0 if rapido else 12.0,
    }
    return d


COMBOS = [
    ("01_peques_muchas", 50, False),
    ("02_peques_xl", 60, False),
    ("03_medias", 80, False),
    ("04_natural", 100, False),
    ("05_natural_mas", 110, False),
    ("06_grandes", 130, False),
    ("07_grandes_x2", 150, False),
    ("08_muy_grandes", 200, False),
    ("09_mixto", None, False),
    ("10_minis", 90, True),
]


def area_impresa_mm2(png: Path) -> float:
    a = np.asarray(Image.open(png))
    px = int(np.count_nonzero(a[..., 3] > 10))
    mm = 25.4 / DPI
    return px * mm * mm


def main() -> int:
    imgs = cargar_pikmin()
    if not imgs:
        print("No hay imágenes Pikmin en", PIKMIN, file=sys.stderr)
        return 1
    SALIDA.mkdir(parents=True, exist_ok=True)
    area = geometry.cut_area(210.0, 297.0, "maker5", "A4")
    area_util = area.bbox[2] * area.bbox[3]
    resumen = {"area_recortable_mm": [area.bbox[2], area.bbox[3]],
               "rotaciones": "0/90/180/270 (simple) en normales y minis",
               "imagenes": list(imgs.keys()), "combinaciones": []}

    # comparación con/sin rotación (demuestra que el giro simple ayuda)
    comp = {}
    for etiqueta, rot in (("sin_rotacion", "no"), ("con_rotacion", "90")):
        st = ajustes(False)
        st["rotacion"] = rot
        r = optimize(assets_de(imgs, {k: 100.0 for k in imgs}, 6, False),
                     area, st, masks=imgs)
        comp[etiqueta] = {"paginas": r.pages, "eficiencia": round(r.efficiency, 3),
                          "colocadas": len(r.placements)}
    resumen["comparacion_rotacion"] = comp
    print("comparación rotación:", comp)

    for nombre, escala, minis in COMBOS:
        if escala is None:
            escalas = {k: float(90 + 30 * (i % 4)) for i, k in enumerate(imgs)}
        else:
            escalas = {k: float(escala) for k in imgs}
        combo = {"combinacion": nombre, "escalas_pct": escalas, "minis": minis,
                 "resultados": []}
        for hojas_obj in (1, 2):
            st_rap = ajustes(minis, rapido=True)
            # búsqueda binaria del máximo de copias por imagen
            lo, hi, mejor = 1, 120, 0
            while lo <= hi:
                mid = (lo + hi) // 2
                res = optimize(assets_de(imgs, escalas, mid, minis), area,
                               st_rap, masks=imgs)
                if res.pages <= hojas_obj and not res.unplaced:
                    mejor = mid
                    lo = mid + 1
                else:
                    hi = mid - 1
            if mejor == 0:
                combo["resultados"].append({"hojas_objetivo": hojas_obj,
                                            "copias_por_imagen": 0})
                continue
            # render final con el método completo
            assets = assets_de(imgs, escalas, mejor, minis)
            t0 = time.time()
            res = optimize(assets, area, ajustes(minis), masks=imgs)
            dt = time.time() - t0
            carpeta = SALIDA / nombre / f"{hojas_obj}hoja"
            carpeta.mkdir(parents=True, exist_ok=True)
            ficheros, areas = [], []
            for i in range(res.pages):
                pls = [p for p in res.placements if p.page == i]
                # página completa (A4 con márgenes), como por defecto en la app
                img = compose.render_page(area, pls, imgs, dpi=DPI, full_page=True)
                fp = carpeta / f"pagina-{i + 1:02d}.png"
                compose._save_png(img, fp, DPI)
                ficheros.append(str(fp.relative_to(ROOT)))
                areas.append(round(area_impresa_mm2(fp), 1))
            normal = sum(1 for p in res.placements if not p.mini)
            minis_n = sum(1 for p in res.placements if p.mini)
            datos = {
                "hojas_objetivo": hojas_obj,
                "copias_por_imagen": mejor,
                "pedidas": sum(a["copies"] for a in assets),
                "colocadas_normales": normal, "colocadas_minis": minis_n,
                "paginas": res.pages, "eficiencia": round(res.efficiency, 4),
                "area_impresa_mm2_por_hoja": areas,
                "uso_pct": round(sum(areas) / (area_util * max(1, res.pages)) * 100, 1),
                "segundos": round(dt, 2), "sin_colocar": len(res.unplaced),
                "paginas_png": ficheros,
            }
            combo["resultados"].append(datos)
            print(f"{nombre:18s} {hojas_obj}h: max_copias/img={mejor:3d} "
                  f"normales={normal:4d} minis={minis_n:4d} páginas={res.pages} "
                  f"ef={res.efficiency:.3f} uso={datos['uso_pct']:5.1f}% {dt:.1f}s")
        resumen["combinaciones"].append(combo)

    (SALIDA / "resumen.json").write_text(
        json.dumps(resumen, ensure_ascii=False, indent=2), "utf-8")
    lineas = ["CryCat · pruebas de colocación (siluetas Pikmin)",
              f"Área recortable A4 vertical: {area.bbox[2]:.1f} x {area.bbox[3]:.1f} mm",
              "Rotación: 0/90/180/270 en normales y minis", "",
              f"{'combinación':18s} {'hoja':4s} {'copias/img':>10s} "
              f"{'norm':>5s} {'minis':>5s} {'págs':>4s} {'efic':>5s} {'uso%':>6s}"]
    for c in resumen["combinaciones"]:
        for r in c["resultados"]:
            if r.get("copias_por_imagen", 0) == 0:
                continue
            lineas.append(
                f"{c['combinacion']:18s} {r['hojas_objetivo']:<4d} "
                f"{r['copias_por_imagen']:10d} {r['colocadas_normales']:5d} "
                f"{r['colocadas_minis']:5d} {r['paginas']:4d} "
                f"{r['eficiencia']:5.3f} {r['uso_pct']:6.1f}")
    (SALIDA / "resumen.txt").write_text("\n".join(lineas) + "\n", "utf-8")
    print("\nResultados en", SALIDA)
    return 0


if __name__ == "__main__":
    sys.exit(main())
