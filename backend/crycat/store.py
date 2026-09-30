"""Estado de la sesión CryCat: assets, ajustes de copias y colocaciones."""

from __future__ import annotations

import json
import threading
import uuid
from pathlib import Path

from PIL import Image

from . import config as cfg
from .config import settings
from .geometry import CutArea, cut_area, px_to_mm
from .packer import PackResult, Placement


class Asset:
    def __init__(self, asset_id: str, name: str, img: Image.Image,
                 original: bytes, dpi_origen: float, warnings: list[str],
                 color_mode: str = ""):
        self.id = asset_id
        self.name = name
        self.img = img                      # RGBA recortada (trabajo)
        self.original = original            # bytes originales
        self.dpi_origen = dpi_origen
        self.warnings = warnings
        self.color_mode = color_mode
        self.copies = 1
        self.mini_enabled = False
        # cuota de minis: cuántos quieres de este elemento respecto a los demás
        # (1 = reparto equitativo; 3 = el triple; admite decimales)
        self.mini_quota = 1.0
        self.scale_pct = 100.0  # escala del elemento (100% = tamaño natural)
        # borde SOLO de este elemento (0 = usar el ajuste global). Sirve para
        # unir trozos flotantes del dibujo en una sola pegatina.
        self.offset_mm = 0.0
        self.offset_modo = ""      # "" = usar el global
        self.offset_color = ""     # "" = usar el global
        self.bg_removed = False
        self.demo = False          # figura de la muestra inicial (no se guarda)
        # simplificación de la silueta para el empaquetado (por elemento)
        self.simplificar = True
        self.rata_enabled = False   # modo rata: colocar copias extra al imprimir
        self._forma_cache: tuple | None = None
        # miniatura PNG cacheada (la web tarda mucho en recalcularla)
        self._thumb_bytes: bytes | None = None
        # revisión de la imagen: cambia al editarla (cache-busting estable)
        self.rev = 0

    def forma_simplificada(self) -> str | None:
        """Forma simple detectada (circulo/rectangulo/triangulo/poligono).

        Se calcula una vez y se cachea; sirve para avisar en la interfaz de
        que la pieza se empaquetará con una forma simplificada.
        """
        if not self.simplificar:
            return None
        clave = (round(self.scale_pct, 2), self.img.size, id(self.img),
                 round(float(settings.get("simplificar_threshold", 0.96)), 3),
                 int(settings.get("simplificar_max_vertices", 12) or 12))
        cache = getattr(self, "_forma_cache", None)
        if cache and cache[0] == clave:
            return cache[1]
        forma = None
        try:
            from .silhouette import _asset_mask, _forma_simple
            m = _asset_mask(self.img, self.w_mm, self.h_mm, 0.25)
            f = _forma_simple(
                m, 0.25,
                float(settings.get("simplificar_threshold", 0.96)),
                int(settings.get("simplificar_max_vertices", 12) or 12))
            forma = f[0] if f else None
        except Exception:
            forma = None
        self._forma_cache = (clave, forma)
        return forma

    def bbox_contenido(self) -> tuple[int, int, int, int]:
        """Caja del contenido NO TRANSPARENTE (x0, y0, x1, y1).

        Los tamaños SIEMPRE salen de aquí, nunca del lienzo completo: una
        imagen con márgenes transparentes debe medir lo que de verdad se
        imprime/corta (y al quitar trozos sueltos el tamaño se ajusta solo).
        """
        clave = (id(self.img), self.img.size)
        cache = getattr(self, "_bbox_cache", None)
        if cache is not None and cache[0] == clave:
            return cache[1]
        try:
            bbox = self.img.getchannel("A").getbbox()
        except Exception:
            bbox = None
        if not bbox:
            bbox = (0, 0, self.img.size[0], self.img.size[1])
        self._bbox_cache = (clave, bbox)
        return bbox

    @property
    def w_mm(self) -> float:
        x0, _, x1, _ = self.bbox_contenido()
        return px_to_mm(max(1, x1 - x0), self.dpi_origen) * self.scale_pct / 100.0

    @property
    def h_mm(self) -> float:
        _, y0, _, y1 = self.bbox_contenido()
        return px_to_mm(max(1, y1 - y0), self.dpi_origen) * self.scale_pct / 100.0

    def to_dict(self) -> dict:
        x0, y0, x1, y1 = self.bbox_contenido()
        wb = px_to_mm(max(1, x1 - x0), self.dpi_origen)
        hb = px_to_mm(max(1, y1 - y0), self.dpi_origen)
        return {
            "id": self.id, "name": self.name,
            "w_px": self.img.size[0], "h_px": self.img.size[1],
            "w_mm": round(wb * self.scale_pct / 100.0, 2),
            "h_mm": round(hb * self.scale_pct / 100.0, 2),
            "w_mm_base": round(wb, 2), "h_mm_base": round(hb, 2),
            "dpi_origen": self.dpi_origen,
            "copies": self.copies, "mini_enabled": self.mini_enabled,
            "mini_quota": self.mini_quota, "scale_pct": self.scale_pct,
            "offset_mm": self.offset_mm,
            "offset_modo": self.offset_modo,
            "offset_color": self.offset_color,
            "bg_removed": self.bg_removed,
            "demo": self.demo,
            "rev": self.rev,
            "simplificar": self.simplificar,
            "rata_enabled": self.rata_enabled,
            "forma": self.forma_simplificada(),
            "warnings": self.warnings,
        }


class Session:
    """Assets + última optimización. Persistido en session.json."""

    def __init__(self) -> None:
        self._lock = threading.RLock()
        self.assets: dict[str, Asset] = {}
        self.last: PackResult | None = None
        self.result_rev = 0     # sube con cada colocación (caché de vistas)
        self.area: CutArea | None = None
        self.load()

    # ------------------------------------------------------------- assets --
    def add(self, asset: Asset) -> Asset:
        with self._lock:
            # una imagen de verdad barre la muestra inicial
            if not asset.demo:
                self._quitar_demo()
            self.assets[asset.id] = asset
            self.save()
        return asset

    def _quitar_demo(self) -> None:
        demo = [a for a in self.assets.values() if getattr(a, "demo", False)]
        for a in demo:
            self.assets.pop(a.id, None)
        if demo and self.last:
            ids = {a.id for a in demo}
            self.last.placements = [p for p in self.last.placements
                                    if p.asset_id not in ids]

    def hay_demo(self) -> bool:
        return any(getattr(a, "demo", False) for a in self.assets.values())

    def get(self, asset_id: str) -> Asset | None:
        return self.assets.get(asset_id)

    def remove(self, asset_id: str) -> None:
        with self._lock:
            self.assets.pop(asset_id, None)
            if self.last:
                self.last.placements = [p for p in self.last.placements
                                        if p.asset_id != asset_id]
            self.save()

    def clear(self) -> None:
        with self._lock:
            self.assets.clear()
            self.last = None
            self.save()

    def asset_dicts(self) -> list[dict]:
        with self._lock:
            out = [a.to_dict() for a in self.assets.values()]
        # si hay borde (propio del elemento o global), el tamaño efectivo
        # crece 2×mm: el borde forma parte de la pieza y el empaquetado lo cuenta
        for d in out:
            a = self.assets.get(d["id"])
            off = _offset_de(a) if a is not None else None
            if off is not None:
                mm = off[0]
                d["w_mm"] = round(d["w_mm"] + 2 * mm, 2)
                d["h_mm"] = round(d["h_mm"] + 2 * mm, 2)
                d["offset_mm"] = mm
        return out

    def images_sin_borde(self) -> dict[str, Image.Image]:
        """Imágenes originales (sin borde) — para los minis con borde 'sin'
        o 'igual'."""
        return {a.id: _recortada(a.img) for a in self.assets.values()}

    def images(self) -> dict[str, Image.Image]:
        """Imágenes de trabajo con el borde aplicado (por elemento o global)."""
        out: dict[str, Image.Image] = {}
        for a in self.assets.values():
            off = _offset_de(a)
            if off is None:
                out[a.id] = _recortada(a.img)
                continue
            mm, modo, color = off
            # El borde es SIEMPRE un valor en mm DEL RESULTADO, independiente
            # de la escala del elemento. Para lograrlo, en los píxeles
            # originales se aplica mm/escala: al colocar la pieza (que se
            # reescala por `escala`) el borde vuelve a medir exactamente mm.
            escala = max(0.05, a.scale_pct / 100.0)
            clave = (round(mm, 3), modo, color, round(escala, 4))
            cache = getattr(a, "_cache_offset", None)
            if cache is None or cache[0] != clave:
                radio_px = (mm / escala) / 25.4 * a.dpi_origen
                from .imaging import aplicar_offset
                img = aplicar_offset(a.img, radio_px, modo, color)
                img = _recortada(img)
                a._cache_offset = (clave, img)  # type: ignore[attr-defined]
                cache = a._cache_offset  # type: ignore[assignment]
            out[a.id] = cache[1]
        return out

    # ----------------------------------------------------------- área ------
    def current_area(self) -> CutArea:
        pw = float(settings.get("pagina_w"))
        ph = float(settings.get("pagina_h"))
        machine = str(settings.get("maquina"))
        self.area = cut_area(pw, ph, machine)
        return self.area

    # ------------------------------------------------------- colocaciones --
    def set_result(self, res: PackResult) -> None:
        with self._lock:
            self.last = res
            self.result_rev += 1
            self.save()

    def pinned(self) -> list[Placement]:
        with self._lock:
            return [p for p in (self.last.placements if self.last else [])
                    if p.pinned]

    # ------------------------------------------------------- persistencia --
    def save(self) -> None:
        try:
            demo_ids = {a.id for a in self.assets.values()
                        if getattr(a, "demo", False)}
            data = {
                "assets": [a.to_dict() for a in self.assets.values()
                           if not getattr(a, "demo", False)],
                "placements": [
                    {"uid": p.uid, "asset_id": p.asset_id, "page": p.page,
                     "x": p.x, "y": p.y, "w": p.w, "h": p.h, "angle": p.angle,
                     "mini": p.mini, "scale": p.scale, "pinned": p.pinned,
                     "rot90": p.rot90, "w0": getattr(p, "w0", 0.0),
                     "h0": getattr(p, "h0", 0.0)}
                    for p in (self.last.placements if self.last else [])
                    if p.asset_id not in demo_ids],
                "pages": self.last.pages if self.last else 0,
            }
            cfg.SESSION_FILE.parent.mkdir(parents=True, exist_ok=True)
            cfg.SESSION_FILE.write_text(json.dumps(data, ensure_ascii=False),
                                    "utf-8")
        except Exception:
            pass

    def load(self) -> None:
        try:
            if not cfg.SESSION_FILE.exists():
                return
            data = json.loads(cfg.SESSION_FILE.read_text("utf-8"))
        except Exception:
            return
        # las imágenes se recargan perezosamente al arrancar el servidor
        self._pending_session = data  # type: ignore[attr-defined]

    def restore_images(self) -> None:
        """Recarga los assets de la sesión anterior (imagen recortada + meta)."""
        data = getattr(self, "_pending_session", None)
        if not data:
            return
        if data.get("assets"):
            self.assets = {k: v for k, v in self.assets.items()
                           if getattr(v, "demo", False)}
        for meta in data.get("assets", []):
            aid = meta.get("id")
            fp = cfg.ASSETS_DIR / str(aid) / "img.png"
            if not (aid and fp.exists()):
                continue
            try:
                img = Image.open(fp)
                img.load()
                a = Asset(aid, meta.get("name", ""), img, b"",
                          float(meta.get("dpi_origen", 300.0)),
                          list(meta.get("warnings", [])), "")
                a.copies = int(meta.get("copies", 1))
                a.mini_enabled = bool(meta.get("mini_enabled", False))
                # sesiones antiguas: la cuota empieza en 1 (reparto equitativo)
                a.mini_quota = float(meta.get("mini_quota", 1.0))
                a.offset_mm = float(meta.get("offset_mm", 0.0) or 0.0)
                a.offset_modo = str(meta.get("offset_modo", "") or "")
                a.offset_color = str(meta.get("offset_color", "") or "")
                a.scale_pct = float(meta.get("scale_pct", 100.0))
                a.bg_removed = bool(meta.get("bg_removed", False))
                a.simplificar = bool(meta.get("simplificar", True))
                self.assets[a.id] = a
            except Exception:
                continue
        if data.get("placements"):
            pl = [Placement(**{k: v for k, v in p.items()
                               if k in Placement.__dataclass_fields__})
                  for p in data["placements"]]
            from .packer import PackResult
            self.last = PackResult(placements=pl, pages=data.get("pages", 0))


def new_id() -> str:
    return uuid.uuid4().hex[:12]


def _recortada(img: Image.Image) -> Image.Image:
    """Recorta al contenido no transparente.

    Los tamaños SIEMPRE salen de las partes no transparentes: las imágenes de
    trabajo se recortan igual para que el tamaño declarado y los píxeles
    cuadren (una imagen con márgenes transparentes ya no se deforma).
    """
    try:
        b = img.convert("RGBA").getchannel("A").getbbox()
    except Exception:
        b = None
    return img.crop(b) if b else img


def _offset_de(a) -> tuple[float, str, tuple[int, int, int]] | None:
    """Offset efectivo de un elemento.

    El offset GLOBAL y el BORDE ADICIONAL del elemento son dos cosas
    distintas y SE SUMAN: el global rodea la pieza y el adicional añade un
    borde extra encima (p. ej. global blanco de 1 mm + adicional 2 mm = 3 mm
    en total). El modo y el color del adicional mandan si están puestos.
    """
    base = _offset_actual()
    propio = float(getattr(a, "offset_mm", 0.0) or 0.0)
    if propio != 0 and base is not None:
        # el propio puede ser NEGATIVO: resta al global (para tener MENOS
        # borde en un elemento concreto). El total nunca baja de 0.
        modo = (getattr(a, "offset_modo", "")
                or base[1] or "extender")
        hexcol = (getattr(a, "offset_color", "") or "").lstrip("#")
        if hexcol and len(hexcol) == 6:
            try:
                color = (int(hexcol[0:2], 16), int(hexcol[2:4], 16),
                         int(hexcol[4:6], 16))
            except Exception:
                color = base[2]
        else:
            color = base[2]
        return (max(0.0, base[0] + propio), modo, color)
    if propio != 0:
        base = _offset_actual()
        modo = (getattr(a, "offset_modo", "") or
                (base[1] if base else str(settings.get("offset_modo", "extender"))))
        hexcol = getattr(a, "offset_color", "") or ""
        if hexcol:
            hexcol = hexcol.lstrip("#")
            try:
                color = (int(hexcol[0:2], 16), int(hexcol[2:4], 16),
                         int(hexcol[4:6], 16))
            except Exception:
                color = (255, 255, 255)
        else:
            color = base[2] if base else (255, 255, 255)
        return max(0.0, propio), modo, color
    return _offset_actual()


def _offset_actual() -> tuple[float, str, tuple[int, int, int]] | None:
    """Offset/borde activo según la configuración (o None)."""
    from .config import settings
    if not settings.get("offset_activo"):
        return None
    mm = float(settings.get("offset_mm", 0) or 0)
    if mm <= 0:
        return None
    modo = str(settings.get("offset_modo", "extender"))
    hexcol = str(settings.get("offset_color", "#ffffff")).lstrip("#")
    try:
        color = (int(hexcol[0:2], 16), int(hexcol[2:4], 16), int(hexcol[4:6], 16))
    except Exception:
        color = (255, 255, 255)
    return mm, modo, color


session = Session()
