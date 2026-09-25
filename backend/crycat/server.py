"""Servidor FastAPI de CryCat: API + frontend estático."""

from __future__ import annotations

import datetime as dt
import io
import json
import shutil
import threading
import time
import uuid
from pathlib import Path

import numpy as np
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.responses import FileResponse, Response
from fastapi.staticfiles import StaticFiles
from PIL import Image

from . import __version__, compose, cuttime, geometry, imaging, version
from . import config as cfg
from .config import settings
from .funmsgs import mensajes as mensajes_funny
from .i18n import tr
from .packer import Placement, optimize, try_move
from .store import Asset, Session, new_id, session

dist_dir = Path(__file__).parent / "web"


def _abrir_explorador(path: Path) -> None:
    """Abre `path` en el explorador de archivos nativo (Linux/Windows/macOS)."""
    import subprocess
    import sys
    p = str(path)
    if sys.platform == "win32":  # pragma: no cover
        import os
        os.startfile(p)          # type: ignore[attr-defined]
    elif sys.platform == "darwin":  # pragma: no cover
        subprocess.Popen(["open", p])
    else:
        # Linux: respeta el escritorio del usuario
        for cmd in (["xdg-open", p], ["nautilus", p], ["dolphin", p],
                    ["thunar", p], ["nemo", p]):
            try:
                subprocess.Popen(cmd, stdout=subprocess.DEVNULL,
                                 stderr=subprocess.DEVNULL)
                return
            except FileNotFoundError:
                continue
        raise RuntimeError(tr("no hay explorador de archivos disponible"))


def _avisar_blobs(a: Asset) -> None:
    """Avisa si hay trozos sueltos (blobs) fuera del contorno principal."""
    try:
        lista = imaging.detectar_blobs(a.img)
        sueltos = [b for b in lista if not b["principal"]]
        if sueltos:
            a.warnings = [w for w in a.warnings if "blob" not in w.lower()
                          and "trozos sueltos" not in w.lower()]
            a.warnings.append(
                tr("{n} trozos sueltos (blobs) — usa «limpiar contorno»",
                   n=len(sueltos)))
    except Exception:
        pass


def _persist_asset(a: Asset) -> None:
    d = cfg.ASSETS_DIR / a.id
    d.mkdir(parents=True, exist_ok=True)
    a.img.save(d / "img.png")
    (d / "meta.json").write_text(
        json.dumps({"name": a.name, "dpi_origen": a.dpi_origen,
                    "warnings": a.warnings, "bg_removed": a.bg_removed,
                    "copies": a.copies, "mini_enabled": a.mini_enabled,
                    "mini_quota": a.mini_quota, "scale_pct": a.scale_pct,
                    "offset_mm": a.offset_mm},
                   ensure_ascii=False), "utf-8")


def _png_response(img: Image.Image) -> Response:
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    return Response(buf.getvalue(), media_type="image/png")


def _pl_dict(p: Placement) -> dict:
    return {"uid": p.uid, "asset_id": p.asset_id, "page": p.page,
            "x": round(p.x, 3), "y": round(p.y, 3), "w": round(p.w, 3),
            "h": round(p.h, 3), "angle": p.angle, "mini": p.mini,
            "scale": round(p.scale, 4), "pinned": p.pinned, "rot90": p.rot90}


def create_app(store: Session = session) -> FastAPI:
    app = FastAPI(title="CryCat", version=__version__)
    # recupera la sesión anterior (imágenes + colocaciones)
    try:
        store.restore_images()
    except Exception:
        pass
    jobs: dict[str, dict] = {}
    jobs_lock = threading.Lock()

    def start_job(force: bool = False, modo: str | None = None) -> dict:
        jid = uuid.uuid4().hex[:10]
        job = {"id": jid, "status": "running", "progress": 0.0, "pages": 0,
               "done": False, "message": mensajes_funny()[0], "result": None}
        with jobs_lock:
            jobs[jid] = job

        def run() -> None:
            area = store.current_area()
            assets = store.asset_dicts()
            st = settings.as_dict()
            if modo == "rapido":
                st["opt_metodo"] = "silueta_rapido"
                st["opt_tiempo_max_s"] = min(2.0, float(st.get("opt_tiempo_max_s", 8)))
            elif modo == "optimo":
                st["opt_metodo"] = "silueta_optimo"
                st["opt_tiempo_max_s"] = max(10.0, float(st.get("opt_tiempo_max_s", 8)))
            pinned = [] if force else store.pinned()
            t0 = time.time()

            def progress(frac: float, pages: int) -> None:
                with jobs_lock:
                    j = jobs[jid]
                    frac = max(j.get("progress", 0.0), min(0.99, float(frac)))
                    j["progress"] = frac
                    j["pages"] = pages
                    elapsed = time.time() - t0
                    # ETA suavizada y acotada (evita valores absurdos)
                    eta = elapsed / frac * (1.0 - frac) if frac > 0.03 else None
                    if eta is not None:
                        prev = j.get("eta_s")
                        eta = eta if prev is None else (0.7 * eta + 0.3 * prev)
                        j["eta_s"] = min(600.0, max(0.0, eta))
                    j["message"] = mensajes_funny()[
                        int(elapsed * 3) % len(mensajes_funny())]

            try:
                res = optimize(assets, area, st,
                               pinned=pinned, progress=progress,
                               masks=store.images())
                store.set_result(res)
                with jobs_lock:
                    jobs[jid].update(
                        status="done", done=True, progress=1.0, pages=res.pages,
                        eta_s=0.0, efficiency=res.efficiency,
                        warnings=res.warnings, unplaced=len(res.unplaced),
                        message=(tr("¡Listo, ni un Diglett fuera de sitio!")
                                 if not res.unplaced else
                                 tr("Algunas copias no caben en el área recortable")))
            except Exception as e:  # pragma: no cover
                with jobs_lock:
                    jobs[jid].update(status="error", done=True,
                                     message=tr("error: {e}", e=e))

        threading.Thread(target=run, daemon=True).start()
        return job

    # ----------------------------------------------------------------- api --
    @app.get("/api/health")
    def health():
        return {"ok": True, "app": "CryCat", "version": __version__,
                "time": dt.datetime.now().isoformat(timespec="seconds")}

    @app.get("/api/settings")
    def get_settings():
        return {"settings": settings.as_dict(),
                "pages": geometry.page_options()}

    @app.get("/api/funmsgs")
    def funmsgs():
        return {"msgs": mensajes_funny()}

    # -------------------------------------------------------- versiones ----
    @app.get("/api/version")
    def get_version():
        return version.estado()

    @app.post("/api/version/check")
    def check_version():
        return version.comprobar(force=True)

    @app.post("/api/version/update")
    def update_version():
        return version.actualizar_y_reiniciar()

    @app.post("/api/version/open")
    def open_releases():
        """Abre la página de releases en el navegador (modo desarrollo)."""
        url = version.estado().get("url") or version.RELEASES_URL
        try:
            import webbrowser
            webbrowser.open(url)
            return {"ok": True, "url": url}
        except Exception:
            return {"ok": False, "url": url}

    # --------------------------------------------------------- perfiles ----
    @app.get("/api/presets")
    def list_presets():
        return {"names": sorted(cfg.load_presets().keys())}

    @app.post("/api/presets")
    def save_preset(payload: dict):
        name = (payload.get("name") or "").strip()
        if not name:
            raise HTTPException(400, tr("falta el nombre del perfil"))
        p = cfg.load_presets()
        p[name[:60]] = settings.as_dict()
        cfg.save_presets(p)
        return {"ok": True, "names": sorted(p.keys())}

    @app.post("/api/presets/{name}/load")
    def load_preset(name: str):
        p = cfg.load_presets()
        if name not in p:
            raise HTTPException(404, tr("perfil no encontrado"))
        settings.set(p[name])
        job = start_job()
        return {"ok": True, "settings": settings.as_dict(), "job": job}

    @app.delete("/api/presets/{name}")
    def delete_preset(name: str):
        p = cfg.load_presets()
        p.pop(name, None)
        cfg.save_presets(p)
        return {"ok": True, "names": sorted(p.keys())}

    @app.put("/api/settings")
    def put_settings(payload: dict):
        page_changed = any(k in payload for k in
                           ("pagina_w", "pagina_h", "maquina", "espacio_mm",
                            "margen_mm", "rotacion", "usar_minis", "mini_min_mm",
                            "mini_rotacion", "mini_usar_lista",
                            "mini_tamanos_lista",
                            "opt_metodo", "opt_tiempo_max_s", "dpi_salida",
                            "lienzo", "color_formato", "offset_activo",
                            "offset_mm", "offset_modo", "offset_color"))
        settings.set(payload)
        # si el usuario desactivó el recálculo automático, no se lanza nada
        job = None
        if page_changed and settings.get("auto_recalcular", True):
            job = start_job()
        return {"ok": True, "settings": settings.as_dict(), "job": job}

    # -------------------------------------------------------------- assets --
    @app.post("/api/assets")
    async def upload(file: UploadFile = File(...),
                     dpi_origen: float = Form(0.0)):
        raw = await file.read()
        name = file.filename or "imagen.png"
        dpi = dpi_origen if dpi_origen and dpi_origen > 10 else \
            float(settings.get("dpi_salida", 300))
        try:
            img, info = imaging.load_image(raw, name, render_dpi=dpi)
        except ValueError as e:
            raise HTTPException(400, str(e))
        aid = new_id()
        dpi_use = info.dpi_src if 10 < info.dpi_src <= 2400 else dpi
        a = Asset(aid, name, imaging.trim(img), raw, dpi_use,
                  list(info.warnings), info.color_mode)
        if settings.get("chequear_lineas"):
            a.warnings += imaging.detect_anomalous_lines(a.img)[:3]
        _avisar_blobs(a)
        _persist_asset(a)
        store.add(a)
        return a.to_dict()

    @app.get("/api/assets")
    def list_assets():
        return store.asset_dicts()

    @app.patch("/api/assets/{aid}")
    def patch_asset(aid: str, payload: dict):
        a = store.get(aid)
        if not a:
            raise HTTPException(404, tr("asset no encontrado"))
        if "copies" in payload:
            a.copies = max(0, int(payload["copies"]))
        if "mini_enabled" in payload:
            a.mini_enabled = bool(payload["mini_enabled"])
        if "mini_quota" in payload:
            # cuota de minis: 1 = reparto equitativo; 3 = el triple (decimales ok)
            a.mini_quota = min(100.0, max(1.0, float(payload["mini_quota"])))
        if "offset_mm" in payload:
            # borde SOLO de este elemento (0 = usar el ajuste global)
            a.offset_mm = min(20.0, max(0.0, float(payload["offset_mm"])))
            if hasattr(a, "_cache_offset"):
                del a._cache_offset
        if "scale_pct" in payload:
            a.scale_pct = min(1000.0, max(5.0, float(payload["scale_pct"])))
        store.save()
        return a.to_dict()

    @app.delete("/api/assets/{aid}")
    def del_asset(aid: str):
        store.remove(aid)
        shutil.rmtree(cfg.ASSETS_DIR / aid, ignore_errors=True)
        return {"ok": True}

    @app.delete("/api/assets")
    def clear_assets():
        store.clear()
        shutil.rmtree(cfg.ASSETS_DIR, ignore_errors=True)
        cfg.ASSETS_DIR.mkdir(parents=True, exist_ok=True)
        return {"ok": True}

    @app.post("/api/assets/{aid}/remove-background")
    def rm_bg(aid: str, payload: dict | None = None):
        a = store.get(aid)
        if not a:
            raise HTTPException(404, tr("asset no encontrado"))
        tol = float((payload or {}).get("tolerance", 26.0))
        a.img = imaging.remove_background(a.img, tolerance=tol)
        a.bg_removed = True
        _persist_asset(a)
        store.save()
        return a.to_dict()

    @app.post("/api/assets/{aid}/restore-background")
    def restore_bg(aid: str):
        a = store.get(aid)
        if not a:
            raise HTTPException(404, tr("asset no encontrado"))
        try:
            img = Image.open(io.BytesIO(a.original))
            img.load()
        except Exception:
            raise HTTPException(400, tr("original no disponible"))
        a.img = imaging.trim(img.convert("RGBA"))
        a.bg_removed = False
        a.warnings = [w for w in a.warnings if "anómala" not in w]
        if settings.get("chequear_lineas"):
            a.warnings += imaging.detect_anomalous_lines(a.img)[:3]
        _persist_asset(a)
        store.save()
        return a.to_dict()

    @app.post("/api/assets/{aid}/reemplazar")
    async def reemplazar(aid: str, file: UploadFile = File(...),
                         dpi_origen: float = Form(0.0)):
        """Sustituye la imagen de un elemento por otra, conservando copias,
        cuota de mini y escala."""
        a = store.get(aid)
        if not a:
            raise HTTPException(404, tr("asset no encontrado"))
        raw = await file.read()
        name = file.filename or "imagen.png"
        dpi = dpi_origen if dpi_origen and dpi_origen > 10 else a.dpi_origen
        try:
            img, info = imaging.load_image(raw, name, render_dpi=dpi)
        except ValueError as e:
            raise HTTPException(400, str(e))
        a.name = name
        a.original = raw
        a.dpi_origen = info.dpi_src if 10 < info.dpi_src <= 2400 else dpi
        a.img = imaging.trim(img)
        a.bg_removed = False
        a.warnings = list(info.warnings)
        if settings.get("chequear_lineas"):
            a.warnings += imaging.detect_anomalous_lines(a.img)[:3]
        _avisar_blobs(a)
        _persist_asset(a)
        store.save()
        return a.to_dict()

    @app.get("/api/assets/{aid}/blobs")
    def blobs(aid: str):
        """Lista los trozos (blobs) del alfa desconectados del contorno
        principal, junto con una previsualización coloreada."""
        a = store.get(aid)
        if not a:
            raise HTTPException(404, tr("asset no encontrado"))
        lista = imaging.detectar_blobs(a.img)
        # previsualización: cada blob (no principal) coloreado
        vista = a.img.convert("RGBA").copy()
        arr = np.asarray(vista).copy()
        from scipy import ndimage
        alpha = np.asarray(a.img.getchannel("A"))
        etiquetas, _ = ndimage.label(alpha > 20)
        paleta = [(255, 90, 120), (90, 170, 255), (255, 200, 60),
                  (140, 220, 120), (200, 120, 255), (255, 140, 60)]
        for i, b in enumerate([x for x in lista if not x["principal"]]):
            color = paleta[i % len(paleta)]
            sel = etiquetas == b["id"]
            arr[sel, 0] = (arr[sel, 0] * 0.35 + color[0] * 0.65).astype(np.uint8)
            arr[sel, 1] = (arr[sel, 1] * 0.35 + color[1] * 0.65).astype(np.uint8)
            arr[sel, 2] = (arr[sel, 2] * 0.35 + color[2] * 0.65).astype(np.uint8)
        vista = Image.fromarray(arr, "RGBA")
        from io import BytesIO
        buf = BytesIO()
        vista.save(buf, "PNG")
        return {"blobs": lista, "w": a.img.width, "h": a.img.height,
                "preview_png": "data:image/png;base64,"
                + __import__("base64").b64encode(buf.getvalue()).decode("ascii")}

    @app.post("/api/assets/{aid}/limpiar-contorno")
    def limpiar_contorno(aid: str, payload: dict | None = None):
        """Elimina de la copia de trabajo los blobs indicados (nunca el
        original). Si no se indica `quitar`, elimina todos los no principales."""
        a = store.get(aid)
        if not a:
            raise HTTPException(404, tr("asset no encontrado"))
        payload = payload or {}
        if "quitar" in payload:
            quitar = [int(x) for x in payload["quitar"]]
        else:
            quitar = [b["id"] for b in imaging.detectar_blobs(a.img)
                      if not b["principal"]]
        a.img = imaging.quitar_blobs(a.img, quitar)
        a.warnings = [w for w in a.warnings if "blob" not in w.lower()
                      and "trozos sueltos" not in w.lower()]
        _persist_asset(a)
        store.save()
        return a.to_dict()

    @app.get("/api/assets/{aid}/preview.png")
    def preview(aid: str):
        a = store.get(aid)
        if not a:
            raise HTTPException(404, tr("asset no encontrado"))
        return _png_response(imaging.thumbnail(a.img))

    # ----------------------------------------------------------- optimizar --
    @app.post("/api/optimize")
    def start_optimize(payload: dict | None = None):
        payload = payload or {}
        return start_job(force=bool(payload.get("force")),
                         modo=payload.get("modo"))

    @app.get("/api/job/{jid}")
    def job_status(jid: str):
        with jobs_lock:
            job = jobs.get(jid)
            if not job:
                raise HTTPException(404, tr("job no encontrado"))
            return {k: v for k, v in job.items() if k != "thread"}

    @app.post("/api/placements/move")
    def move(payload: dict):
        if not store.last or not store.area:
            raise HTTPException(400, tr("sin optimización previa"))
        # la validación usa el área con el margen de seguridad
        area = store.area
        margen = max(0.0, float(settings.get("margen_mm", 0.0)))
        if margen > 0:
            area = geometry.inset_area(area, margen)
        p = None
        assets_by_id = {a["id"]: a for a in store.asset_dicts()}
        if assets_by_id:
            try:
                from .silhouette import try_move_sil
                p = try_move_sil(store.last.placements, payload.get("uid", ""),
                                 float(payload.get("x", 0)),
                                 float(payload.get("y", 0)), area,
                                 float(settings.get("espacio_mm", 2.0)),
                                 store.images(), assets_by_id)
            except Exception:
                p = None
        if p is None and not assets_by_id:
            p = try_move(store.last.placements, payload.get("uid", ""),
                         float(payload.get("x", 0)), float(payload.get("y", 0)),
                         area, float(settings.get("espacio_mm", 2.0)))
        if p is None:
            raise HTTPException(409, tr("posición no válida"))
        store.save()
        # al fijar un elemento, se reoptimiza el resto a su alrededor
        job = start_job()
        return {"ok": True, "placement": _pl_dict(p), "job": job}

    @app.post("/api/placements/unpin")
    def unpin(payload: dict):
        uid = payload.get("uid", "")
        if store.last:
            for p in store.last.placements:
                if p.uid == uid:
                    p.pinned = False
            store.save()
        return start_job()

    # --------------------------------------------------------------- pages --
    @app.get("/api/pages/{idx}.png")
    def page_png(idx: int):
        if not store.last or not store.area:
            return _png_response(Image.new("RGBA", (8, 8)))
        pls = [p for p in store.last.placements if p.page == idx]
        img = compose.render_page(
            store.area, pls, store.images(),
            float(settings.get("dpi_salida", 300)),
            full_page=settings.get("lienzo") == "pagina",
            color=settings.get("color_formato", "rgba"))
        return _png_response(img)

    @app.get("/api/result")
    def result():
        if not store.last or not store.area:
            return {"pages": 0, "placements": [], "efficiency": 0.0,
                    "bbox_mm": [0, 0], "bbox_offset_mm": [0, 0], "poly_mm": [],
                    "page_mm": [settings.get("pagina_w"), settings.get("pagina_h")],
                    "warnings": [], "method": "", "minis": 0, "placed": 0}
        r, area = store.last, store.area
        bx, by, bw, bh = area.bbox
        return {
            "pages": r.pages,
            "placements": [_pl_dict(p) for p in r.placements],
            "efficiency": r.efficiency,
            "bbox_mm": [bw, bh],
            "bbox_offset_mm": [bx, by],
            "poly_mm": [[round(x, 3), round(y, 3)] for x, y in area.poly],
            "page_mm": [area.page_w, area.page_h],
            "warnings": r.warnings,
            "method": r.method,
            "minis": sum(1 for p in r.placements if p.mini),
            "placed": len(r.placements),
        }

    @app.get("/api/estimate")
    def estimate_cut():
        """Tiempo estimado de corte (Cricut Maker 5) según siluetas y viajes."""
        if not store.last:
            return {"maquina": "Cricut Maker 5", "segundos": 0.0,
                    "paginas": [], "desglose": {}}
        assets_by_id = {a["id"]: a for a in store.asset_dicts()}
        return cuttime.estimate(store.last.placements, assets_by_id,
                                store.images(), settings.as_dict())

    # -------------------------------------------------------------- export --
    @app.post("/api/export")
    def export(payload: dict):
        if not store.last or not store.area:
            raise HTTPException(400, tr("nada que guardar"))
        name = compose.safe_name(payload.get("name", ""))
        folder = payload.get("folder") or settings.get("carpeta_export") or \
            str(Path.home() / "Documents")
        base = Path(folder).expanduser()
        stamp = dt.datetime.now().strftime("%Y%m%d_%H%M%S")
        base_name = f"{name}_{stamp}" if name else stamp
        dpi = float(settings.get("dpi_salida", 300))
        full = settings.get("lienzo") == "pagina"
        color = settings.get("color_formato", "rgba")
        paginas = max((p.page for p in store.last.placements), default=0) + 1
        if paginas <= 1:
            # UNA sola página: PNG directo, sin carpeta y sin JSON
            archivo = base / f"{base_name}.png"
            n = 2
            while archivo.exists():          # nunca se sobrescribe
                archivo = base / f"{base_name}_{n}.png"
                n += 1
            compose.export_single(store.area, store.last.placements,
                                  store.images(), archivo, dpi,
                                  full_page=full, color=color)
            settings.set({"carpeta_export": str(base)})
            return {"ok": True, "folder": str(base), "files": [str(archivo)]}
        # varias páginas: carpeta con las páginas (sin JSON)
        out = base / base_name
        n = 2
        while out.exists():
            out = base / f"{base_name}_{n}"
            n += 1
        written = compose.export_pages(
            store.area, store.last.placements, store.images(), out, name,
            dpi, full_page=full, color=color)
        settings.set({"carpeta_export": str(base)})
        return {"ok": True, "folder": str(out),
                "files": [str(f) for f in written]}

    @app.get("/api/print.pdf")
    def print_pdf():
        if not store.last or not store.area:
            raise HTTPException(400, tr("nada que imprimir"))
        data = compose.export_pdf(
            store.area, store.last.placements, store.images(),
            float(settings.get("dpi_salida", 300)),
            full_page=settings.get("lienzo") == "pagina", marcas=True,
            color=settings.get("color_formato", "rgba"))
        return Response(data, media_type="application/pdf",
                        headers={"Content-Disposition":
                                 "inline; filename=crycat.pdf"})

    @app.get("/api/fs/list")
    def fs_list(path: str = ""):
        base = Path(path or Path.home()).expanduser()
        if not base.exists():
            raise HTTPException(404, tr("ruta no encontrada"))
        if base.is_file():
            base = base.parent
        dirs: list[str] = []
        try:
            for d in sorted(base.iterdir(), key=lambda x: x.name.lower()):
                if d.is_dir() and not d.name.startswith("."):
                    dirs.append(d.name)
        except PermissionError:
            pass
        return {"path": str(base), "parent": str(base.parent),
                "dirs": dirs[:400], "home": str(Path.home())}

    @app.post("/api/fs/open")
    def fs_open(payload: dict):
        """Abre una carpeta en el explorador de archivos del sistema."""
        raw = (payload or {}).get("path") or settings.get("carpeta_export") or \
            str(Path.home() / "Documents")
        p = Path(raw).expanduser()
        if p.is_file():
            p = p.parent
        if not p.exists():
            # si aún no existe (p. ej. carpeta de guardado por defecto), sube
            while not p.exists() and p.parent != p:
                p = p.parent
        if not p.exists():
            raise HTTPException(404, tr("ruta no encontrada"))
        try:
            _abrir_explorador(p)
        except Exception as e:  # pragma: no cover
            raise HTTPException(500, tr("no se pudo abrir: {e}", e=e))
        return {"ok": True, "path": str(p)}

    @app.get("/api/assets-folder")
    def assets_folder():
        """Ruta de la carpeta donde se guardan las imágenes de la sesión."""
        return {"path": str(cfg.ASSETS_DIR), "exists": cfg.ASSETS_DIR.exists()}

    # --------------------------------------------------------------- icono --
    @app.post("/api/icon")
    async def set_icon(file: UploadFile = File(...)):
        raw = await file.read()
        try:
            img = Image.open(io.BytesIO(raw))
            img.load()
        except Exception:
            raise HTTPException(400, tr("icono no válido"))
        cfg.DATA_DIR.mkdir(parents=True, exist_ok=True)
        imaging.trim(img.convert("RGBA")).save(cfg.ICON_FILE, "PNG")
        _update_desktop_icon()
        return {"ok": True}

    @app.get("/api/icon.png")
    def get_icon():
        if cfg.ICON_FILE.exists():
            return FileResponse(cfg.ICON_FILE, media_type="image/png")
        bundled = dist_dir / "icono.png"
        if bundled.exists():
            return FileResponse(bundled, media_type="image/png")
        return _png_response(Image.new("RGBA", (8, 8)))

    # ------------------------------------------------------------- static --
    if dist_dir.exists():
        app.mount("/", StaticFiles(directory=str(dist_dir), html=True),
                  name="web")

    return app


def _update_desktop_icon() -> None:  # pragma: no cover
    """Actualiza el icono del lanzador Linux si existe."""
    try:
        base = Path.home() / ".local" / "share" / "applications"
        for fp in base.glob("crycat*.desktop"):
            lines = fp.read_text("utf-8").splitlines()
            out = [f"Icon={cfg.ICON_FILE}" if ln.startswith("Icon=") else ln
                   for ln in lines]
            fp.write_text("\n".join(out) + "\n", "utf-8")
    except Exception:
        pass
