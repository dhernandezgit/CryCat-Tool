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

    @property
    def w_mm(self) -> float:
        return px_to_mm(self.img.size[0], self.dpi_origen) * self.scale_pct / 100.0

    @property
    def h_mm(self) -> float:
        return px_to_mm(self.img.size[1], self.dpi_origen) * self.scale_pct / 100.0

    def to_dict(self) -> dict:
        wb = px_to_mm(self.img.size[0], self.dpi_origen)
        hb = px_to_mm(self.img.size[1], self.dpi_origen)
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
            "warnings": self.warnings,
        }


class Session:
    """Assets + última optimización. Persistido en session.json."""

    def __init__(self) -> None:
        self._lock = threading.RLock()
        self.assets: dict[str, Asset] = {}
        self.last: PackResult | None = None
        self.area: CutArea | None = None
        self.load()

    # ------------------------------------------------------------- assets --
    def add(self, asset: Asset) -> Asset:
        with self._lock:
            self.assets[asset.id] = asset
            self.save()
        return asset

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

    def images(self) -> dict[str, Image.Image]:
        """Imágenes de trabajo con el borde aplicado (por elemento o global)."""
        out: dict[str, Image.Image] = {}
        for a in self.assets.values():
            off = _offset_de(a)
            if off is None:
                out[a.id] = a.img
                continue
            mm, modo, color = off
            # el borde es un valor en mm del RESULTADO: se aplica a la escala
            # final (si no, un elemento al 200 % vería el borde al doble)
            escala = max(0.05, a.scale_pct / 100.0)
            clave = (round(mm, 3), modo, color, round(escala, 4))
            cache = getattr(a, "_cache_offset", None)
            if cache is None or cache[0] != clave:
                radio_px = (mm * escala) / 25.4 * a.dpi_origen
                from .imaging import aplicar_offset
                img = aplicar_offset(a.img, radio_px, modo, color)
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
            self.save()

    def pinned(self) -> list[Placement]:
        with self._lock:
            return [p for p in (self.last.placements if self.last else [])
                    if p.pinned]

    # ------------------------------------------------------- persistencia --
    def save(self) -> None:
        try:
            data = {
                "assets": [a.to_dict() for a in self.assets.values()],
                "placements": [
                    {"uid": p.uid, "asset_id": p.asset_id, "page": p.page,
                     "x": p.x, "y": p.y, "w": p.w, "h": p.h, "angle": p.angle,
                     "mini": p.mini, "scale": p.scale, "pinned": p.pinned,
                     "rot90": p.rot90}
                    for p in (self.last.placements if self.last else [])],
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


def _offset_de(a) -> tuple[float, str, tuple[int, int, int]] | None:
    """Offset efectivo de un elemento: el suyo si tiene, si no el global."""
    propio = float(getattr(a, "offset_mm", 0.0) or 0.0)
    if propio > 0:
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
        return propio, modo, color
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
