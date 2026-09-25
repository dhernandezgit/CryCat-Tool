import sys, time
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "backend"))
import numpy as np
from PIL import Image
from crycat import geometry, imaging
from crycat.packer import optimize

imgs = {}
for f in sorted((ROOT / "assets" / "pikmin").glob("*")):
    im = Image.open(f).convert("RGBA")
    a = np.asarray(im)[..., 3]
    im = imaging.remove_background(im) if int(a.min()) > 250 else imaging.trim(im)
    imgs[f.stem] = im

area = geometry.cut_area(210.0, 297.0, "maker5", "A4")


def assets(esc, copies):
    return [{"id": k, "name": k,
             "w_mm": geometry.px_to_mm(v.width, 300) * esc / 100,
             "h_mm": geometry.px_to_mm(v.height, 300) * esc / 100,
             "copies": copies, "mini_enabled": False, "mini_pct": 50}
            for k, v in imgs.items()]


def st(metodo, tmax=8.0):
    return {"espacio_mm": 2.0, "margen_mm": 1.0, "rotacion": "90",
            "usar_minis": False, "opt_metodo": metodo, "opt_tiempo_max_s": tmax}


CASOS = [("sobra: 7 pequeñas", 50, 1),
         ("sobra: 14 pequeñas", 60, 2),
         ("medio: 21", 100, 3),
         ("apretado: 35", 100, 5),
         ("muy apretado: 56", 80, 8)]

for nombre, esc, copias in CASOS:
    total = copias * len(imgs)
    for metodo in ("silueta", "silueta_optimo", "silueta_rapido"):
        A = assets(esc, copias)
        t0 = time.time()
        r = optimize(A, area, st(metodo), masks=imgs)
        dt = time.time() - t0
        print(f"{nombre:20s} {metodo:16s} pág={r.pages} "
              f"coloc={len(r.placements):3d}/{total:3d} ef={r.efficiency:.3f} {dt:5.2f}s")
    print()
