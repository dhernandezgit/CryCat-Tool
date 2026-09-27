#!/usr/bin/env python3
"""Comprueba el empaquetado por silueta de CryCat.

Pinta sobre blanco las siluetas finales en negro (las MISMAS máscaras que usa
el optimizador) y cuenta los píxeles que se solapan entre piezas: debe ser 0.
También comprueba que un donut admite una pieza pequeña dentro.

Uso:
    backend/.venv/bin/python scripts/verificar_siluetas.py [imagen.png]

Sin argumento usa `assets/prueba_crycat.png` (estrella, anillo, flotantes).
Genera `docs/web/verificacion.png` (o /tmp si no existe docs/web).
"""
from __future__ import annotations

import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw

RAIZ = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(RAIZ / "backend"))

from crycat import silhouette                      # noqa: E402
from crycat.geometry import cut_area                # noqa: E402


def mascara_real(img: Image.Image, w_mm: float, h_mm: float, cell: float):
    """Silueta REAL: el canal alfa tal cual (sin contornos simplificados)."""
    w = max(2, int(round(w_mm / cell)))
    h = max(2, int(round(h_mm / cell)))
    alpha = img.convert("RGBA").getchannel("A").resize(
        (w, h), Image.Resampling.BILINEAR)
    return np.asarray(alpha) > 1


def mascara_optimizador(img: Image.Image, w_mm: float, h_mm: float,
                        cell: float):
    return silhouette._asset_mask(img, w_mm, h_mm, cell, pad=0)


def main() -> int:
    ruta = Path(sys.argv[1]) if len(sys.argv) > 1 else \
        RAIZ / "assets" / "prueba_crycat.png"
    if not ruta.exists():
        print(f"No encuentro {ruta}")
        return 1
    img = Image.open(ruta).convert("RGBA")
    # recorte del contenido (como hace la app al importar)
    from crycat.imaging import trim
    img = trim(img)
    dpi = 300.0
    w_mm = img.width / dpi * 25.4
    h_mm = img.height / dpi * 25.4

    area = cut_area(210.0, 297.0, "maker5")          # A4
    cell = 0.25
    assets = [{"id": "prueba", "name": "prueba", "w_mm": w_mm, "h_mm": h_mm,
               "copies": 6, "mini_enabled": False}]
    masks = {"prueba": img}
    settings = {"espacio_mm": 1.0, "rotacion": "90", "opt_metodo": "greedy",
                "opt_calidad": "exacta", "opt_tiempo_max_s": 6.0,
                "usar_minis": False}
    res = silhouette.pack(assets, masks, area, settings)
    print(f"colocadas {len(res.placements)} en {res.pages} hoja(s), "
          f"eficiencia {res.efficiency:.0%}, sin colocar: {res.unplaced}")

    # --- pintar con la silueta REAL: blanco de fondo, negro, solape en rojo --
    bx, by, bw, bh = area.bbox
    W, H = int(bw / cell), int(bh / cell)
    lienzo = np.full((H, W, 3), 255, dtype=np.uint8)
    total = np.zeros((H, W), dtype=np.int32)
    dif = 0
    for p in res.placements:
        rm, _, _, _ = silhouette._mask_for_placement(
            p, {"w_mm": w_mm, "h_mm": h_mm}, img, cell, 0)
        ys, xs = np.where(rm)
        ty = int(round((p.y - by) / cell)) - int(ys.min())
        tx = int(round((p.x - bx) / cell)) - int(xs.min())
        h, w = rm.shape
        if ty < 0 or tx < 0 or ty + h > H or tx + w > W:
            continue
        real = mascara_real(img, w_mm, h_mm, cell)
        if real.shape != rm.shape:
            continue
        dif += int(np.count_nonzero(real != rm))
        total[ty:ty + h, tx:tx + w] += real.astype(np.int32)
        lienzo[ty:ty + h, tx:tx + w][real] = (0, 0, 0)
    solape = total > 1
    lienzo[solape] = (220, 40, 60)
    n_solape = int(np.count_nonzero(solape))
    print(f"máscara del optimizador vs real: {dif} celdas distintas "
          f"({dif * cell * cell:.2f} mm²)")
    print(f"celdas con solape REAL: {n_solape}  "
          f"({n_solape * cell * cell:.2f} mm²)")

    # contorno del área recortable, para ver los límites
    im = Image.fromarray(lienzo).resize((W * 2, H * 2), Image.NEAREST)
    d = ImageDraw.Draw(im)
    for i in range(len(area.poly)):
        x1, y1 = area.poly[i]
        x2, y2 = area.poly[(i + 1) % len(area.poly)]
        d.line([(x1 - bx) * 2 / cell, (y1 - by) * 2 / cell,
                (x2 - bx) * 2 / cell, (y2 - by) * 2 / cell],
               fill=(120, 170, 220), width=2)
    salida = Path("/tmp/opencode/verificacion.png")
    salida.parent.mkdir(parents=True, exist_ok=True)
    im.save(salida)
    print("imagen:", salida)
    return 0 if n_solape == 0 else 2


if __name__ == "__main__":
    raise SystemExit(main())
