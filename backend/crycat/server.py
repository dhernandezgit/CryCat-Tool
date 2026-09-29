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

import random

from . import __version__, compose, cuttime, demo, geometry, imaging, version
from . import config as cfg
from .config import settings
from .funmsgs import mensajes as mensajes_funny
from .i18n import tr
from .packer import PackResult, Placement, optimize, try_move
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


# Historial de duraciones reales: [(n_piezas, segundos)] para estimar mejor
_HIST: list[tuple[int, float]] = []


def _esperado_para(n: int) -> float | None:
    """Duración esperada para `n` piezas, INTERPOLANDO el historial real.

    Se toman las muestras más cercanas en número de piezas y se interpola
    linealmente entre ellas; con una sola muestra se usa esa.
    """
    if not _HIST or n <= 0:
        return None
    muestras = sorted(_HIST)[-30:]
    menores = [m for m in muestras if m[0] <= n]
    mayores = [m for m in muestras if m[0] >= n]
    if menores and mayores:
        a, b = menores[-1], mayores[0]
        if b[0] == a[0]:
            return a[1]
        k = (n - a[0]) / (b[0] - a[0])
        return a[1] + (b[1] - a[1]) * k
    if menores:
        a = menores[-1]
        return a[1] * (n / max(1, a[0]))       # extrapola proporcional
    b = mayores[0]
    return b[1] * (n / max(1, b[0]))


def _offset_de_global() -> tuple[float, str, tuple[int, int, int]] | None:
    """Offset global activo (o None), para el borde de los minis."""
    from .store import _offset_actual
    return _offset_actual()


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
                    "offset_mm": a.offset_mm,
                    "offset_modo": a.offset_modo,
                    "offset_color": a.offset_color},
                   ensure_ascii=False), "utf-8")


def _png_response(img: Image.Image) -> Response:
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    return Response(buf.getvalue(), media_type="image/png")


def _pl_dict(p: Placement) -> dict:
    return {"uid": p.uid, "asset_id": p.asset_id, "page": p.page,
            "x": round(p.x, 3), "y": round(p.y, 3), "w": round(p.w, 3),
            "h": round(p.h, 3), "angle": p.angle, "mini": p.mini,
            "scale": round(p.scale, 4), "pinned": p.pinned, "rot90": p.rot90,
            "w0": round(getattr(p, "w0", 0.0) or 0.0, 3),
            "h0": round(getattr(p, "h0", 0.0) or 0.0, 3)}


# Gancho opcional de progreso: la versión web lo usa para informar a la barra
# desde el worker de Pyodide (en escritorio se queda en None).
progreso_hook = None
progreso_n = 0   # cuántas veces se ha avisado del progreso (diagnóstico)


def create_app(store: Session = session) -> FastAPI:
    app = FastAPI(title="CryCat", version=__version__)
    # recupera la sesión anterior (imágenes + colocaciones)
    try:
        store.restore_images()
    except Exception:
        pass
    jobs: dict[str, dict] = {}
    jobs_lock = threading.Lock()
    # SOLO UN CÁLCULO A LA VEZ: varios clics seguidos lanzaban optimizaciones
    # en paralelo (varios hilos cada una) y saturaban la CPU; ahora el más
    # nuevo manda y los antiguos que aún no han empezado se descartan.
    opt_lock = threading.Lock()
    job_seq = {"n": 0}

    def start_job(force: bool = False, modo: str | None = None) -> dict:
        jid = uuid.uuid4().hex[:10]
        job = {"id": jid, "status": "running", "progress": 0.0, "pages": 0,
               "done": False, "message": mensajes_funny()[0], "result": None}
        with jobs_lock:
            job_seq["n"] += 1
            job["seq"] = job_seq["n"]
            jobs[jid] = job

        def run() -> None:
            # espera a que termine el cálculo anterior (uno a la vez)
            with opt_lock:
                with jobs_lock:
                    if job.get("seq") != job_seq["n"]:
                        # ya hay uno MÁS NUEVO: este se descarta sin calcular
                        job.update(status="done", done=True, progress=1.0,
                                   message=tr("sustituido por un cálculo más "
                                              "reciente"))
                        return
                _run_job()

        def _run_job() -> None:
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
            with jobs_lock:
                jobs[jid]["n_piezas"] = sum(
                    max(0, int(a.get("copies", 1)))
                    for a in store.asset_dicts())

            from .config import tiempo_optimo
            n_pz = int(job.get("n_piezas", 0) or 0)
            tope = max(0.5, tiempo_optimo(st, n_pz))
            # TOTAL ESPERADO: historial real para ese nº de piezas o, si no
            # hay, un 85% del presupuesto (los trabajos suelen acabar antes).
            total_est = {"v": max(0.5, _esperado_para(n_pz) or tope * 0.85)}

            def _pinta(fase: float, pages: int, difundir: bool = True) -> None:
                """Actualiza progreso y ETA con una mezcla HONESTA de tiempo y
                trabajo: la barra avanza con el reloj (nunca se queda clavada)
                y el restante es lo que de verdad queda por hacer."""
                with jobs_lock:
                    j = jobs[jid]
                    if j.get("done"):
                        return
                    pf = max(float(j.get("fase", 0.0)), float(fase))
                    j["fase"] = pf
                    j["pages"] = pages
                    elapsed = time.time() - t0
                    # RITMO OBSERVADO: si el trabajo va más rápido que la
                    # estimación, el total baja (el tiempo restante se ajusta
                    # de verdad a lo que queda por hacer)
                    if pf > 0.05:
                        total_est["v"] = min(total_est["v"],
                                             max(elapsed / pf, elapsed))
                    total = max(total_est["v"], elapsed)
                    frac_t = min(0.95, elapsed / total) if total > 0 else 0.0
                    # la barra sigue el reloj y el trabajo, sin quedarse
                    # clavada en una fase: nunca va muy por delante del tiempo
                    frac = max(frac_t, min(pf, frac_t + 0.15))
                    # y sin saltos bruscos entre fases
                    prev_p = j.get("progress", 0.0)
                    j["progress"] = min(max(prev_p, frac), prev_p + 0.12)
                    restante = min(max(0.0, total - elapsed),
                                   max(0.0, (1.0 - pf) * total))
                    prev = j.get("eta_s")
                    if prev and prev > 0:
                        restante = 0.6 * restante + 0.4 * prev
                    j["eta_s"] = round(max(0.0, min(tope - elapsed,
                                                    restante)), 1)
                    j["tope_s"] = round(tope, 1)
                    j["message"] = mensajes_funny()[
                        int(elapsed * 3) % len(mensajes_funny())]
                    if difundir and progreso_hook is not None:
                        try:
                            progreso_hook(j["progress"], pages,
                                          j["eta_s"], j["tope_s"])
                        except Exception:
                            pass

            def progress(frac: float, pages: int) -> None:
                global progreso_n
                progreso_n += 1
                _pinta(frac, pages)

            # LATIDO: aunque una fase tarde (semilla, minis…), la barra y el
            # tiempo estimado se actualizan cada 0,25 s
            parar_latido = threading.Event()

            def latido() -> None:
                while not parar_latido.wait(0.25):
                    with jobs_lock:
                        if jobs[jid].get("done"):
                            return
                    _pinta(jobs[jid].get("fase", 0.0),
                           jobs[jid].get("pages", 0))

            threading.Thread(target=latido, daemon=True).start()

            # la barra arranca YA (aunque la primera fase tarde en reportar)
            _pinta(0.01, 0)

            try:
                res = optimize(assets, area, st,
                               pinned=pinned, progress=progress,
                               masks=store.images())
                with jobs_lock:
                    # si mientras calculábamos se pidió otro, este se descarta
                    if job.get("seq") != job_seq["n"]:
                        job.update(status="done", done=True, progress=1.0,
                                   message=tr("sustituido por un cálculo más "
                                              "reciente"))
                        return
                store.set_result(res)
                # guardar la duración real para estimar mejor la próxima vez
                with jobs_lock:
                    try:
                        _HIST.append((sum(max(0, int(a.get("copies", 1)))
                                          for a in assets),
                                      time.time() - t0))
                        del _HIST[:-60]
                    except Exception:
                        pass
                    jobs[jid].update(
                        status="done", done=True, progress=1.0, pages=res.pages,
                        eta_s=0.0, tope_s=0.0,
                        efficiency=res.efficiency,
                        warnings=res.warnings, unplaced=len(res.unplaced),
                        message=(tr("¡Listo, ni un Diglett fuera de sitio!")
                                 if not res.unplaced else
                                 tr("Algunas copias no caben en el área recortable")))
            except Exception as e:  # pragma: no cover
                with jobs_lock:
                    jobs[jid].update(status="error", done=True,
                                     message=tr("error: {e}", e=e))
            finally:
                parar_latido.set()

        if settings.get("web_inline_jobs"):
            # En el navegador (Pyodide) no hay hilos reales: se ejecuta aquí
            # mismo y el trabajo queda terminado al devolver la respuesta.
            run()
        else:
            threading.Thread(target=run, daemon=True).start()
        return job

    # ----------------------------------------------------------------- api --
    @app.get("/api/health")
    def health():
        return {"ok": True, "app": "CryCat", "version": __version__,
                "progreso_n": progreso_n,
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

    @app.get("/api/presets/factory")
    def factory_presets():
        """Presets de fábrica (chapa, pegatina, hoja, imán, vinilo…)."""
        return {"presets": cfg.PRESETS_INTERESANTES}

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

    # ------------------------------------------------------------- modos ---
    @app.get("/api/modos")
    def get_modos():
        """Los 3 modos de trabajo y los 3 huecos personalizados."""
        return {"modos": cfg.MODOS_INTERESANTES, "slots": cfg.load_slots()}

    @app.post("/api/modos/{i}")
    def save_modo(i: int, payload: dict):
        """Guarda los ajustes ACTUALES en el hueco personalizado `i`."""
        nombre = str((payload or {}).get("nombre") or "").strip()
        cfg.save_slot(i, nombre, settings.as_dict())
        return {"ok": True, "slots": cfg.load_slots()}

    @app.patch("/api/modos/{i}")
    def rename_modo(i: int, payload: dict):
        """Cambia solo el NOMBRE del hueco (los ajustes no se tocan)."""
        nombre = str((payload or {}).get("nombre") or "").strip()
        cfg.rename_slot(i, nombre)
        return {"ok": True, "slots": cfg.load_slots()}

    @app.post("/api/modos/{i}/load")
    def load_modo(i: int):
        slots = cfg.load_slots()
        if not (0 <= i < len(slots)) or not slots[i].get("ajustes"):
            raise HTTPException(404, tr("ese modo personalizado está vacío"))
        settings.set(slots[i]["ajustes"])
        job = start_job()
        return {"ok": True, "settings": settings.as_dict(), "job": job}

    @app.delete("/api/modos/{i}")
    def delete_modo(i: int):
        cfg.clear_slot(i)
        return {"ok": True, "slots": cfg.load_slots()}

    @app.put("/api/settings")
    def put_settings(payload: dict):
        page_changed = any(k in payload for k in
                           ("pagina_w", "pagina_h", "maquina", "espacio_mm",
                            "margen_mm", "rotacion", "usar_minis", "mini_min_mm",
                            "mini_rotacion", "mini_usar_lista",
                            "mini_tamanos_lista", "modo_forma",
                            "simplificar", "simplificar_threshold",
                            "simplificar_max_vertices",
                            "ver_contornos", "contorno_modo",
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
        if not (10 < info.dpi_src <= 2400):
            a_dpi_aviso = tr("se supone {d} ppp (el archivo no lo indicaba)",
                             d=f"{dpi:.0f}")
        avisos = [w for w in info.warnings
                  if "sin datos de resolución" not in w]
        if not (10 < info.dpi_src <= 2400):
            avisos.append(a_dpi_aviso)
        a = Asset(aid, name, imaging.trim(img), raw, dpi_use,
                  avisos, info.color_mode)
        if settings.get("chequear_lineas"):
            a.warnings += imaging.detect_anomalous_lines(a.img)[:3]
        _avisar_blobs(a)
        _persist_asset(a)
        store.add(a)
        return a.to_dict()

    @app.post("/api/demo")
    def crear_demo(n: int = 16):
        """Rellena la sesión con figuras de ejemplo (se van al subir imágenes).

        Se generan al azar (círculos, cuadrados, estrellas, anillos, flores…)
        en colores pastel para ver el optimizador funcionando desde el primer
        segundo. Cualquier imagen de verdad las borra automáticamente.
        """
        if any(not getattr(a, "demo", False) for a in store.assets.values()):
            return {"ok": False, "motivo": "ya hay imágenes"}
        store._quitar_demo()
        import random as _rnd
        _rnd.seed(20260928)          # muestra reproducible (tests estables)
        figuras = demo.figuras(max(3, min(60, n)))
        for k, (nombre, img) in enumerate(figuras):
            a = Asset(new_id(), nombre, img, b"", demo.DPI, [], "RGBA")
            a.demo = True
            # copias y tamaños variados para que se vea de todo, SIN minis
            # (salvo UN ejemplo: 0 normales y todos los minis que quepan)
            a.copies = _rnd.choice([1, 1, 2, 2, 3, 4])
            a.mini_enabled = False
            if k == 1:
                a.scale_pct = 55.0           # un ejemplo bien pequeño
            _avisar_blobs(a)
            store.add(a)
        # se deja YA optimizada (con los ajustes actuales): al abrir no se espera.
        # En la WEB (Pyodide) el cálculo por siluetas tarda minutos y bloquea
        # las imágenes: la muestra se empaqueta por CAJAS, que es instantáneo.
        try:
            area = store.current_area()
            assets = store.asset_dicts()
            web = bool(settings.get("web_inline_jobs"))
            res = optimize(assets, area, settings.as_dict(),
                           pinned=store.pinned(),
                           masks=None if web else store.images())
            store.set_result(res)
        except Exception:
            pass
        return {"ok": True, "assets": store.asset_dicts(),
                "demo": store.hay_demo(),
                "pages": store.last.pages if store.last else 0}

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
        if "offset_modo" in payload:
            valor = str(payload["offset_modo"] or "")
            a.offset_modo = valor if valor in ("extender", "blanco", "color") else ""
            if hasattr(a, "_cache_offset"):
                del a._cache_offset
        if "offset_color" in payload:
            a.offset_color = str(payload["offset_color"] or "")[:9]
            if hasattr(a, "_cache_offset"):
                del a._cache_offset
        if "scale_pct" in payload:
            a.scale_pct = min(1000.0, max(5.0, float(payload["scale_pct"])))
        if "simplificar" in payload:
            # simplificación de la silueta SOLO de este elemento
            a.simplificar = bool(payload["simplificar"])
            a._forma_cache = None
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
        a._thumb_bytes = None
        a.rev += 1
        a._prev_cache = None
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
        a._thumb_bytes = None
        a.rev += 1
        a._prev_cache = None
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
        a._thumb_bytes = None
        a.rev += 1
        a._prev_cache = None
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
        # ancho sugerido para UNIR todo en una pieza: la mitad del hueco
        # mayor entre el contorno principal y los trozos, con un mínimo
        union_mm = 2.0
        principales = [b for b in lista if b["principal"]]
        sueltos = [b for b in lista if not b["principal"]]
        if principales and sueltos:
            px_mm = a.dpi_origen / 25.4
            px, py, px1, py1 = principales[0]["bbox"]
            hueco = 0.0
            for b in sueltos:
                x0, y0, x1, y1 = b["bbox"]
                dx = max(0.0, max(px - x1, x0 - px1))
                dy = max(0.0, max(py - y1, y0 - py1))
                hueco = max(hueco, (dx * dx + dy * dy) ** 0.5 / max(1.0, px_mm))
            union_mm = max(1.5, min(10.0, hueco / 2.0 + 1.0))
        return {"blobs": lista, "w": a.img.width, "h": a.img.height,
                "union_mm": round(union_mm, 1),
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
        a._thumb_bytes = None
        a.rev += 1
        a._prev_cache = None
        a.warnings = [w for w in a.warnings if "blob" not in w.lower()
                      and "trozos sueltos" not in w.lower()]
        _persist_asset(a)
        store.save()
        return a.to_dict()

    @app.get("/api/assets/{aid}/preview.png")
    def preview(aid: str, bordes: int = 0, fase: int = 0,
                cont: str = "final"):
        a = store.get(aid)
        if not a:
            raise HTTPException(404, tr("asset no encontrado"))
        if not bordes:
            # miniatura CACHEADA: en la web recalcularla en cada carga era
            # lentísimo (Pillow en Pyodide) y las imágenes parecían no cargar
            if getattr(a, "_thumb_bytes", None) is None:
                a._thumb_bytes = imaging.png_bytes(imaging.thumbnail(a.img))
            return Response(a._thumb_bytes, media_type="image/png")
        # la vista con CONTORNOS también se cachea (el editor de blobs la
        # pide al abrir y en Pyodide tardaba muchísimo)
        clave_prev = (int(fase) % 12, str(cont))
        cache_prev = getattr(a, "_prev_cache", None)
        if cache_prev is None:
            cache_prev = {}
            a._prev_cache = cache_prev
        if clave_prev in cache_prev:
            return Response(cache_prev[clave_prev], media_type="image/png")
        img = imaging.thumbnail(a.img)
        if bordes:
            # Contornos punteados de la carta, alineados a lo bruto:
            #  · guiones magenta = silueta final (con borde y cambios)
            #  · puntos cian = dibujo sin borde, CENTRADO dentro de la final
            from scipy import ndimage
            final = store.images().get(aid) or a.img
            ft = imaging.thumbnail(final)
            esc = ft.width / max(1, final.width)
            # el lienzo de la carta es la silueta FINAL (con borde): antes se
            # usaba el de la imagen sin borde y con piezas con borde el tamaño
            # no coincidía y la carta fallaba (IndexError → no se veían)
            vista = ft.convert("RGBA")
            arr = np.asarray(vista).copy()
            m_final = np.asarray(ft.convert("RGBA").getchannel("A")) > 1
            # el original, escalado y centrado dentro de la final
            w_o = max(1, int(round(a.img.width * esc)))
            h_o = max(1, int(round(a.img.height * esc)))
            orig = a.img.convert("RGBA").resize((w_o, h_o),
                                                Image.Resampling.LANCZOS)
            capa = Image.new("RGBA", ft.size, (0, 0, 0, 0))
            capa.alpha_composite(orig, (max(0, (ft.width - w_o) // 2),
                                        max(0, (ft.height - h_o) // 2)))
            m_orig = np.asarray(capa.getchannel("A")) > 1
            yy, xx = np.mgrid[0:m_final.shape[0], 0:m_final.shape[1]]
            desfase = (xx + yy + (int(fase) % 12)) % 12
            for mask, color, es_final in ((m_final, (226, 18, 94), True),
                                          (m_orig, (0, 148, 211), False)):
                if mask.shape != m_final.shape:
                    continue
                cont = mask & ~ndimage.binary_erosion(mask, iterations=1)
                cont = ndimage.binary_dilation(cont, iterations=1)
                cont = cont & ((desfase < 8) if es_final else (desfase >= 8))
                arr[cont] = (color[0], color[1], color[2], 255)
            img = Image.fromarray(arr, "RGBA")
        datos = imaging.png_bytes(img)
        cache_prev[clave_prev] = datos
        return Response(datos, media_type="image/png")

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
            # si no se mueve de sitio (mismo punto), se acepta igualmente: fija
            # la pieza y se reoptimiza el resto (nunca un 409 por no moverse)
            actual = next((q for q in store.last.placements
                           if q.uid == payload.get("uid", "")), None)
            if actual is not None:
                dx = abs(float(payload.get("x", 0)) - actual.x)
                dy = abs(float(payload.get("y", 0)) - actual.y)
                if dx < 0.05 and dy < 0.05:
                    actual.pinned = True
                    p = actual
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
    @app.get("/api/contornos")
    def contornos_piezas():
        """Contornos VECTORIALES de cada pieza (para la vista animada).

        Devuelve, por colocación, los polígonos en mm de la silueta final (con
        borde y cambios) y del dibujo sin borde. El visor los pinta con líneas
        punteadas animadas: los puntos van cambiando de sitio (hormigas
        marchando) alternándose entre las dos siluetas.
        """
        if not store.last or not store.area:
            return {"piezas": []}
        try:
            import cv2
        except Exception:
            return {"piezas": []}
        import math as _math

        # 1) Contorno de cada IMAGEN una sola vez, de la segmentación por
        #    opacidad (alfa > 1), igual que hace el optimizador. Se cachea.
        cache: dict = {}

        def polys_de(img, w_mm: float, h_mm: float):
            key = (id(img), round(w_mm, 3), round(h_mm, 3))
            if key in cache:
                return cache[key]
            arr = (np.asarray(img.convert("RGBA").getchannel("A")) > 1
                   ).astype("uint8")
            cs, _ = cv2.findContours(arr, cv2.RETR_EXTERNAL,
                                     cv2.CHAIN_APPROX_SIMPLE)
            ex = w_mm / max(1, arr.shape[1])
            ey = h_mm / max(1, arr.shape[0])
            salida = []
            for c in cs:
                pts = c.reshape(-1, 2).astype(float)
                if len(pts) >= 3:
                    salida.append([(x * ex, y * ey) for x, y in pts])
            cache[key] = salida
            return salida

        def colocar(polys, w_mm, h_mm, ang, x0, y0, destino_w, destino_h):
            """Gira (como PIL), escala como el render y lleva a su sitio.

            Se reproduce EXACTAMENTE la transformación del render: giro en
            sentido antihorario alrededor del centro, escala uniforme para
            encajar en la caja y esquina superior izquierda del contenido en
            (x0, y0).
            """
            a = _math.radians(ang)
            cos_a, sen_a = _math.cos(a), _math.sin(a)
            girados = []
            for poly in polys:
                pts = []
                for x, y in poly:
                    dx, dy = x - w_mm / 2.0, y - h_mm / 2.0
                    # PIL rota antihorario con y hacia abajo: esta es la
                    # convención que usa el render (comprobada con test)
                    rx = dx * cos_a - dy * sen_a
                    ry = dx * sen_a + dy * cos_a
                    pts.append((rx, ry))
                girados.append(pts)
            xs = [p[0] for poly in girados for p in poly]
            ys = [p[1] for poly in girados for p in poly]
            if not xs:
                return []
            bw = max(xs) - min(xs) or 1e-6
            bh = max(ys) - min(ys) or 1e-6
            k = min(destino_w / bw, destino_h / bh)
            ox, oy = min(xs), min(ys)
            return [[[round(x0 + (p[0] - ox) * k, 2),
                      round(y0 + (p[1] - oy) * k, 2)] for p in poly]
                    for poly in girados]

        imagenes = store.images()
        sin_borde = {a.id: a.img for a in store.assets.values()}
        por_id = {a["id"]: a for a in store.asset_dicts()}
        salida = []
        for p in store.last.placements:
            a = por_id.get(p.asset_id)
            fin = imagenes.get(p.asset_id)
            ori = sin_borde.get(p.asset_id)
            if a is None or fin is None:
                continue
            final = colocar(polys_de(fin, p.w, p.h), p.w, p.h, p.angle,
                            p.x, p.y, p.w, p.h)
            original = []
            if ori is not None and fin.width and fin.height:
                w_o = p.w * ori.width / fin.width
                h_o = p.h * ori.height / fin.height
                original = colocar(
                    polys_de(ori, w_o, h_o), w_o, h_o, p.angle,
                    p.x + (p.w - w_o) / 2.0, p.y + (p.h - h_o) / 2.0,
                    w_o, h_o)
            salida.append({"uid": p.uid, "page": p.page,
                           "final": final, "original": original})
        return {"piezas": salida}

    @app.get("/api/result")
    def result():
        if not store.last or not store.area:
            return {"pages": 0, "placements": [], "efficiency": 0.0,
                    "bbox_mm": [0, 0], "bbox_offset_mm": [0, 0], "poly_mm": [],
                    "marcas": {},
                    "page_mm": [settings.get("pagina_w"), settings.get("pagina_h")],
                    "warnings": [], "method": "", "minis": 0, "placed": 0}
        r, area = store.last, store.area
        bx, by, bw, bh = area.bbox
        return {
            "pages": r.pages,
            "placements": [_pl_dict(p) for p in r.placements],
            "efficiency": r.efficiency,
            "densidad": getattr(r, "densidad", 0.75),
            "marcas": {k: [round(w, 2), round(h, 2)]
                       for k, (w, h) in compose.marcas_mm().items()},
            "bbox_mm": [bw, bh],
            "bbox_offset_mm": [bx, by],
            "poly_mm": [[round(x, 3), round(y, 3)] for x, y in area.poly],
            "page_mm": [area.page_w, area.page_h],
            "warnings": r.warnings,
            "method": r.method,
            "minis": sum(1 for p in r.placements if p.mini),
            "placed": len(r.placements),
        }

    @app.post("/api/result/restore")
    def restore_result(payload: dict):
        """Restaura una colocación ANTERIOR (deshacer/rehacer del historial).

        Vuelve a dejar el resultado tal cual estaba: mismas piezas, mismas
        posiciones y mismas hojas (no se reoptimiza).
        """
        pls = (payload or {}).get("placements") or []
        if not pls:
            raise HTTPException(400, tr("no hay colocación que restaurar"))
        placements = []
        for p in pls:
            placements.append(Placement(
                uid=str(p.get("uid", "")), asset_id=str(p.get("asset_id", "")),
                page=int(p.get("page", 0)), x=float(p.get("x", 0)),
                y=float(p.get("y", 0)), w=float(p.get("w", 0)),
                h=float(p.get("h", 0)), angle=float(p.get("angle", 0)),
                mini=bool(p.get("mini")), scale=float(p.get("scale", 1) or 1),
                pinned=bool(p.get("pinned")), rot90=bool(p.get("rot90")),
                w0=float(p.get("w0", 0) or 0), h0=float(p.get("h0", 0) or 0)))
        store.set_result(PackResult(
            placements=placements,
            pages=max(1, int(payload.get("pages", 1) or 1)),
            efficiency=float(payload.get("efficiency", 0) or 0),
            densidad=float(payload.get("densidad", 0.75) or 0.75),
            method=str(payload.get("method", "") or ""),
            unplaced=[]))
        return {"ok": True}

    @app.get("/api/estimate")
    def estimate_cut():
        """Tiempo estimado de corte (serie Maker) según siluetas y viajes."""
        if not store.last:
            from .geometry import machine_label
            return {"maquina": machine_label(str(settings.get("maquina"))),
                    "segundos": 0.0,
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
                                  full_page=full, color=color,
                                  perfil=settings.get("espacio_color", "srgb"),
                                  bleed_mm=float(settings.get("bleed_mm", 0) or 0))
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
            dpi, full_page=full, color=color,
            perfil=settings.get("espacio_color", "srgb"),
            bleed_mm=float(settings.get("bleed_mm", 0) or 0))
        settings.set({"carpeta_export": str(base)})
        return {"ok": True, "folder": str(out),
                "files": [str(f) for f in written]}

    @app.get("/api/pages/{i}.png")
    def page_png(i: int, v: str = "", sim: int = 0, bordes: int = 0,
                 fase: int = 0, cont: str = "final"):
        """Página renderizada (con simulación de impresión si se pide)."""
        if not store.last or not store.area:
            raise HTTPException(404, tr("sin optimización previa"))
        dpi = float(settings.get("dpi_salida", 300))
        if settings.get("web_inline_jobs"):
            # en la web (Pyodide) renderizar a 300 ppp tarda muchísimo y
            # bloqueaba todo: la VISTA PREVIA se hace más ligera (el PDF y
            # los PNG exportados mantienen los 300 ppp de verdad)
            dpi = min(dpi, 120.0)
        img = compose.render_page(
            store.area, [p for p in store.last.placements if p.page == i],
            store.images(), dpi, settings.get("lienzo") == "pagina",
            settings.get("color_formato", "rgba"))
        if bordes:
            img = compose.contornos_bordes(
                img, [p for p in store.last.placements if p.page == i],
                store.images(),
                {a.id: a.img for a in store.assets.values()},
                store.area, dpi, fase=fase, modo=cont,
                full_page=settings.get("lienzo") == "pagina")
        if sim:
            img = compose.simular_impresion(
                img,
                "cmyk" if settings.get("sim_cmyk") else "srgb",
                float(settings.get("sim_saturacion", 1.0)),
                float(settings.get("sim_contraste", 1.0)),
                float(settings.get("sim_brillo", 1.0)))
        return _png_response(img.convert("RGBA"))

    @app.get("/api/print.pdf")
    def print_pdf():
        if not store.last or not store.area:
            raise HTTPException(400, tr("nada que imprimir"))
        data = compose.export_pdf(
            store.area, store.last.placements, store.images(),
            float(settings.get("dpi_salida", 300)),
            full_page=settings.get("lienzo") == "pagina", marcas=True,
            bleed_mm=float(settings.get("bleed_mm", 0) or 0),
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
        if settings.get("web_inline_jobs"):
            # versión web: no hay explorador; se avisa y se sigue
            return {"ok": False, "path": (payload or {}).get("path", ""),
                    "web": True}
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
