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


def mascara_real(img: Image.Image, w_mm: float, h_mm: float, cell: float,
                 pad: int = 0):
    """Silueta REAL: el canal alfa tal cual (sin contornos simplificados)."""
    w = max(2, int(round(w_mm / cell)))
    h = max(2, int(round(h_mm / cell)))
    alpha = img.convert("RGBA").getchannel("A").resize(
        (w, h), Image.Resampling.BILINEAR)
    m = np.asarray(alpha) > 1
    if pad > 0:
        q = np.zeros((h + 2 * pad, w + 2 * pad), dtype=bool)
        q[pad:pad + h, pad:pad + w] = m
        m = q
    return m


def mascara_optimizador(img: Image.Image, w_mm: float, h_mm: float,
                        cell: float):
    return silhouette._asset_mask(img, w_mm, h_mm, cell, pad=0)


def escenario_donut() -> None:
    """Anillos grandes + círculos pequeños: alguno debe anidarse DENTRO."""
    import math

    def circulo(lado: int, agujero: float | None, color):
        im = Image.new("RGBA", (lado, lado), (0, 0, 0, 0))
        d = ImageDraw.Draw(im)
        d.ellipse((0, 0, lado - 1, lado - 1), fill=color)
        if agujero:
            r = lado * agujero / 2.0
            m = lado / 2.0
            d.ellipse((m - r, m - r, m + r, m + r), fill=(0, 0, 0, 0))
        return im

    anillo = circulo(1000, 0.5, (196, 158, 230, 255))     # 84,7 mm
    chico = circulo(300, None, (136, 178, 230, 255))      # 25,4 mm
    assets = [
        {"id": "anillo", "name": "anillo", "w_mm": 84.7, "h_mm": 84.7,
         "copies": 2, "mini_enabled": False},
        {"id": "chico", "name": "chico", "w_mm": 25.4, "h_mm": 25.4,
         "copies": 12, "mini_enabled": False},
    ]
    masks = {"anillo": anillo, "chico": chico}
    settings = {"espacio_mm": 1.0, "rotacion": "no", "opt_metodo": "greedy",
                "opt_calidad": "exacta", "opt_tiempo_auto": False,
                "opt_tiempo_max_s": 6.0, "usar_minis": False}
    res = silhouette.pack(assets, masks, area_a4(), settings)
    anidados = 0
    for p in res.placements:
        if p.asset_id != "chico":
            continue
        cx, cy = p.x + p.w / 2.0, p.y + p.h / 2.0
        for q in res.placements:
            if q.asset_id != "anillo":
                continue
            qx, qy = q.x + q.w / 2.0, q.y + q.h / 2.0
            dist = math.hypot(cx - qx, cy - qy)
            hueco = q.w * 0.5 * 0.5            # radio del agujero (0,5 del lado)
            if dist + p.w / 2.0 <= hueco + 1.0:
                anidados += 1
                break
    print(f"donut: {len(res.placements)} piezas, anidadas dentro: {anidados}")
    print("anidado OK" if anidados > 0 else "NO se anidó ninguna (revisar)")


def area_a4():
    return cut_area(210.0, 297.0, "maker3")


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

    area = area_a4()                                  # A4
    cell = 0.25
    assets = [{"id": "prueba", "name": "prueba", "w_mm": w_mm, "h_mm": h_mm,
               "copies": 30, "mini_enabled": False}]
    masks = {"prueba": img}
    settings = {"espacio_mm": 0.5, "rotacion": "90", "opt_metodo": "greedy",
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
    for p in [q for q in res.placements if q.page == 0]:
        rm, _, _, _ = silhouette._mask_for_placement(
            p, {"w_mm": w_mm, "h_mm": h_mm}, img, cell, 0)
        # mismo relleno que usa _mask_for_placement (pad = r + 2; aquí r = 0)
        real = silhouette._rotate_mask(
            mascara_real(img, w_mm, h_mm, cell, 2), p.angle)
        if real.shape != rm.shape:
            print("  (formas distintas: revisa el tamaño)", real.shape, rm.shape)
            continue
        dif += int(np.count_nonzero(real != rm))
        ys, xs = np.where(real)
        ty = int(round((p.y - by) / cell)) - int(ys.min())
        tx = int(round((p.x - bx) / cell)) - int(xs.min())
        h, w = real.shape
        if ty < 0 or tx < 0 or ty + h > H or tx + w > W:
            continue
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
    escenario_donut()
    return 0 if n_solape == 0 else 2


if __name__ == "__main__":
    raise SystemExit(main())
