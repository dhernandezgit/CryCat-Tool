"""Puente para usar CryCat dentro del navegador (Pyodide).

Expone a JavaScript las MISMAS funciones del backend (silhouette.py,
packer.py, compose.py, geometry.py, cuttime.py), de modo que la versión web
se comporta igual que la aplicación local.

Se ejecuta dentro de Pyodide; no necesita FastAPI ni servidor.
"""

from __future__ import annotations

import base64
import io
import json

from PIL import Image


def _img_desde_b64(data_b64: str) -> Image.Image:
    """Acepta un data URL o base64 puro."""
    txt = str(data_b64)
    if "," in txt and txt.strip().startswith("data:"):
        txt = txt.split(",", 1)[1]
    raw = base64.b64decode(txt)
    return Image.open(io.BytesIO(raw)).convert("RGBA")


def _b64_desde_img(img: Image.Image, formato: str = "PNG") -> str:
    buf = io.BytesIO()
    kwargs = {"format": formato}
    if formato == "PNG":
        kwargs["optimize"] = False
    img.convert("RGBA").save(buf, **kwargs)
    return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode()


# ------------------------------------------------------------------ API -----

def saludar() -> str:
    """Comprobación rápida de que el motor está cargado."""
    from . import __version__
    return json.dumps({"ok": True, "version": __version__})


def area_recortable(payload: str) -> str:
    """Área recortable (polígono real de la Cricut) en mm."""
    from . import geometry
    datos = json.loads(payload)
    area = geometry.cut_area(float(datos["page_w"]), float(datos["page_h"]),
                             datos.get("machine", "maker5"),
                             datos.get("paper_key"))
    return json.dumps({"poly": area.poly, "bbox": area.bbox,
                       "page_mm": [area.page_w, area.page_h]})


def optimizar(payload: str) -> str:
    """Optimiza la colocación y devuelve las páginas como PNG.

    payload: {assets:[{id,name,w_mm,h_mm,copies,mini_enabled,mini_quota,
                       offset_mm,offset_modo,offset_color,img}], settings:{...},
              page_w, page_h, machine}
    """
    from . import compose, geometry
    from .packer import optimize
    from .imaging import aplicar_offset
    from .i18n import idioma  # noqa: F401  (asegura el import del paquete)

    datos = json.loads(payload)
    ajustes = datos.get("settings", {})
    page_w = float(datos.get("page_w", 210))
    page_h = float(datos.get("page_h", 297))
    maquina = datos.get("machine", "maker5")

    area = geometry.cut_area(page_w, page_h, maquina, datos.get("paper_key"))
    margen = max(0.0, float(ajustes.get("margen_mm", 1.0)))
    if margen > 0:
        area = geometry.inset_area(area, margen)

    # imágenes de trabajo (con el borde de cada elemento si lo tiene)
    mascaras: dict[str, Image.Image] = {}
    assets: list[dict] = []
    for a in datos["assets"]:
        img = _img_desde_b64(a["img"])
        off_mm = float(a.get("offset_mm", 0) or 0)
        if off_mm > 0:
            radio = off_mm / 25.4 * float(a.get("dpi", 300))
            img = aplicar_offset(img, radio, a.get("offset_modo", "extender"),
                                 _color(a.get("offset_color")))
        mascaras[a["id"]] = img
        # el borde forma parte de la pieza: el tamaño efectivo crece 2×mm
        d = {
            "id": a["id"], "name": a.get("name", ""),
            "w_mm": float(a["w_mm"]) + 2 * off_mm,
            "h_mm": float(a["h_mm"]) + 2 * off_mm,
            "copies": int(a.get("copies", 1)),
            "mini_enabled": bool(a.get("mini_enabled")),
            "mini_quota": float(a.get("mini_quota", 1.0)),
            "scale_pct": float(a.get("scale_pct", 100)),
        }
        assets.append(d)

    # en el navegador conviene acotar: menos tiempo máximo y menos arranques
    ajustes = dict(ajustes)
    ajustes.setdefault("opt_metodo", "silueta_rapido")
    # claves de la web → vocabulario del backend
    if "cell_mm" in ajustes:
        c = float(ajustes.pop("cell_mm"))
        ajustes["opt_calidad"] = ("exacta" if c <= 0.4 else
                                  "normal" if c <= 0.6 else "rapida")
    if "rotations" in ajustes:
        ajustes["rotacion"] = "90" if ajustes.pop("rotations") else "no"
    ajustes.setdefault("rotacion", "90")
    ajustes.setdefault("mini_rotacion", ajustes["rotacion"])
    # en el navegador el cálculo es más lento: presupuesto corto y respetado
    ajustes["opt_forzar_limite"] = True
    ajustes["opt_tiempo_max_s"] = min(
        float(ajustes.get("opt_tiempo_max_s", 4)), 8.0)
    res = optimize(assets, area, ajustes, masks=mascaras)
    # páginas a PNG (300 ppp por defecto) tal como en la app local
    dpi = float(ajustes.get("dpi_salida", 300))
    ancho = full = ajustes.get("lienzo") == "pagina"
    paginas: list[str] = []
    for i in range(res.pages):
        img = compose.render_page(
            area, [p for p in res.placements if p.page == i], mascaras, dpi,
            bool(full), ajustes.get("color_formato", "rgba"))
        paginas.append(_b64_desde_img(img))

    return json.dumps({
        "pages": res.pages,
        "efficiency": res.efficiency,
        "placements": [
            {"id": p.asset_id, "page": p.page, "x": p.x, "y": p.y,
             "w": p.w, "h": p.h, "angle": p.angle, "mini": p.mini}
            for p in res.placements],
        "unplaced": list(res.unplaced),
        "pngs": paginas,
        "area": {"poly": area.poly, "bbox": area.bbox},
    })


def estimar_corte(payload: str) -> str:
    """Tiempo estimado de corte (misma fórmula que la app)."""
    from . import cuttime, geometry
    from .packer import Placement
    datos = json.loads(payload)
    area = geometry.cut_area(float(datos.get("page_w", 210)),
                             float(datos.get("page_h", 297)),
                             datos.get("machine", "maker5"))
    placements = [Placement(uid=f"{p['id']}#{i}", asset_id=p["id"], page=0,
                            x=p["x"], y=p["y"], w=p["w"], h=p["h"],
                            angle=p.get("angle", 0), mini=p.get("mini", False))
                  for i, p in enumerate(datos.get("placements", []))]
    assets = {a["id"]: {"w_mm": a["w_mm"], "h_mm": a["h_mm"]}
              for a in datos.get("assets", [])}
    mascaras = {a["id"]: _img_desde_b64(a["img"])
                for a in datos.get("assets", []) if a.get("img")}
    est = cuttime.estimate(placements, assets, mascaras, datos.get("settings", {}))
    return json.dumps(est)


def _color(hexcol) -> tuple[int, int, int]:
    if not hexcol:
        return (255, 255, 255)
    h = str(hexcol).lstrip("#")
    try:
        return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16))
    except Exception:
        return (255, 255, 255)

# ===========================================================================
#  Puente ASGI: ejecuta el MISMO servidor FastAPI dentro del navegador
# ===========================================================================

_app = None


async def iniciar() -> str:
    """Instala FastAPI (PyPI) y prepara el servidor real de CryCat.

    Devuelve un JSON con el estado. Se llama una sola vez al abrir la web.
    """
    global _app
    import micropip  # type: ignore

    await micropip.install(["fastapi", "python-multipart"])

    import os
    from .config import settings
    destino = "/tmp/crycat-exports"     # escribible en el sistema virtual
    os.makedirs(destino, exist_ok=True)
    # modo web: sin hilos reales, sin comprobar versiones y export a /tmp
    settings.set({"web_inline_jobs": True, "comprobar_versiones": False,
                  "carpeta_export": destino, "auto_recalcular": True})
    from .server import create_app
    _app = create_app()
    from . import __version__
    return json.dumps({"ok": True, "version": __version__, "web": True})


async def peticion(method: str, path: str, headers: str = "{}",
                   body: str = "") -> str:
    """Ejecuta una petición HTTP contra el servidor FastAPI real.

    `body` llega en base64 (puede ser binario: subidas de imágenes) y la
    respuesta también. Todo ocurre en memoria, sin red.
    """
    if _app is None:
        raise RuntimeError("el servidor no está iniciado")
    datos = base64.b64decode(body) if body else b""
    cabeceras = json.loads(headers or "{}")
    ruta, _, query = path.partition("?")

    scope = {
        "type": "http", "asgi": {"version": "3.0"}, "http_version": "1.1",
        "method": method.upper(), "scheme": "https", "path": ruta,
        "raw_path": ruta.encode(), "query_string": query.encode(),
        "root_path": "",
        "headers": [(str(k).lower().encode(), str(v).encode())
                    for k, v in cabeceras.items()],
        "client": ("127.0.0.1", 12345), "server": ("crycat.local", 443),
    }
    estado = {"codigo": 500, "cabeceras": []}
    cuerpo = bytearray()
    enviado = False

    async def receive():
        nonlocal enviado
        if enviado:
            return {"type": "http.disconnect"}
        enviado = True
        return {"type": "http.request", "body": datos, "more_body": False}

    async def send(msg):
        if msg["type"] == "http.response.start":
            estado["codigo"] = msg["status"]
            estado["cabeceras"] = [
                (k.decode(), v.decode()) for k, v in msg.get("headers", [])]
        elif msg["type"] == "http.response.body":
            cuerpo.extend(msg.get("body", b""))

    await _app(scope, receive, send)

    # En la web no hay carpetas: el resultado se entrega como descarga.
    if ruta.startswith("/api/export") and estado["codigo"] == 200:
        try:
            datos_exp = json.loads(bytes(cuerpo).decode())
            archivos = []
            for f in datos_exp.get("files", []):
                try:
                    with open(f, "rb") as fh:
                        crudo = fh.read()
                    archivos.append("data:image/png;base64," +
                                    base64.b64encode(crudo).decode())
                except Exception:
                    archivos.append(f)
            datos_exp["files"] = archivos
            datos_exp["folder"] = "web:descargas"
            cuerpo = bytearray(json.dumps(datos_exp).encode())
        except Exception:
            pass

    return json.dumps({
        "status": estado["codigo"],
        "headers": dict(estado["cabeceras"]),
        "body": base64.b64encode(bytes(cuerpo)).decode(),
    })
