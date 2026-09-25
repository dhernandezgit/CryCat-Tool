import { useEffect, useMemo, useRef, useState } from "react";
import { api, NAME_SUGGESTIONS, NAME_SUGGESTIONS_EN, type AppSettings, type Asset, type Job, type Placement, type Result, type UiState } from "../api";
import FolderPicker from "./FolderPicker";
import { useT, useIdioma } from "../i18n";

interface Props {
  assets: Asset[];
  result: Result | null;
  settings: AppSettings;
  ui: UiState;
  setUi: (u: UiState | ((u: UiState) => UiState)) => void;
  saveSettings: (p: Partial<AppSettings>) => Promise<void>;
  optimize: () => void;
  onRefresh: () => Promise<void>;
  onJob: (j: Job) => void;
  onRecalc: (modo: "rapido" | "optimo") => void;
  editando?: Asset | null;
  onFinEdicion?: () => Promise<void>;
}

interface DragState {
  uid: string;
  startX: number;
  startY: number;
  origX: number;
  origY: number;
  mmPerPx: number;
}

export default function Viewer({ assets, result, settings, ui, setUi, saveSettings, onRefresh, onJob, onRecalc, editando, onFinEdicion }: Props) {
  const t = useT();
  const idioma = useIdioma();
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [largePage, setLargePage] = useState<number | null>(null);
  const [version, setVersion] = useState(() => Date.now());
  const [drag, setDrag] = useState<DragState | null>(null);
  const [ghost, setGhost] = useState<{ uid: string; x: number; y: number } | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  // --- editor de contorno (blobs) ---
  const [blobs, setBlobs] = useState<
    { id: number; area_px: number; bbox: number[]; principal: boolean }[]
  >([]);
  const [previewBlobs, setPreviewBlobs] = useState("");
  const [selBlobs, setSelBlobs] = useState<Set<number>>(new Set());
  const canvasRef = useRef<HTMLDivElement>(null);
  const panRef = useRef<{ x: number; y: number } | null>(null);
  // sugerencia de nombre (una al azar por carga), en gris claro
  const listaNombres = idioma === "en" ? NAME_SUGGESTIONS_EN : NAME_SUGGESTIONS;
  const sugerencia = useMemo(
    () => listaNombres[Math.floor(Math.random() * listaNombres.length)],
    [listaNombres]
  );
  const nombreGuardar = ui.saveName.trim() || sugerencia;

  // recarga las hojas cuando cambia el resultado o los ajustes de render
  useEffect(() => {
    setVersion(Date.now());
  }, [result, settings.dpi_salida, settings.lienzo, settings.color_formato]);

  const pages = result?.pages ?? 0;
  // sólo conviene optimizar a fondo cuando la hoja está llenísima
  const sobraEspacio = !!result && result.efficiency < 0.80;

  // RUEDA = solo zoom (nunca scroll). React registra 'wheel' como pasivo, así
  // que preventDefault() no evita el scroll; hay que escucharlo a mano.
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const alGirar = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const rect = el.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      setZoom((z0) => {
        const factor = e.deltaY < 0 ? 1.05 : 1 / 1.05;
        const z1 = Math.min(12, Math.max(0.05, z0 * factor));
        const f = z1 / z0;
        setPan((t) => ({ x: cx - (cx - t.x) * f, y: cy - (cy - t.y) * f }));
        return z1;
      });
    };
    el.addEventListener("wheel", alGirar, { passive: false });
    return () => el.removeEventListener("wheel", alGirar);
  }, []);

  const startPan = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".item-box")) return;
    panRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
    const onMove = (ev: MouseEvent) => {
      if (!panRef.current) return;
      setPan({ x: ev.clientX - panRef.current.x, y: ev.clientY - panRef.current.y });
    };
    const onUp = () => {
      panRef.current = null;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  // atajos de teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === "INPUT") return;
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(12, z * 1.08));
      else if (e.key === "-" || e.key === "_") setZoom((z) => Math.max(0.05, z / 1.08));
      else if (e.key === "0") { setZoom(1); setPan({ x: 0, y: 0 }); }
      else if (e.key === "Escape") setLargePage(null);
      else if (e.key === "g") setUi((u) => ({ ...u, guidesVisible: !u.guidesVisible }));
      else if (e.key === "t")
        setUi((u) => {
          if (u.eyeFosforito) return { ...u, eyeFosforito: false, eyeTransparent: false };
          if (u.eyeTransparent) return { ...u, eyeTransparent: false, eyeFosforito: true };
          return { ...u, eyeTransparent: true, eyeFosforito: false };
        });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setUi]);

  // --- ajuste manual de elementos ---------------------------------
  // El arrastre usa eventos de ventana mientras dura, para no perderse si el
  // visor se re-renderiza (p. ej. al llegar la respuesta del servidor).
  const dragRef = useRef<DragState | null>(null);
  const ghostRef = useRef<{ x: number; y: number } | null>(null);

  const startDragItem = (e: React.MouseEvent, p: Placement) => {
    e.preventDefault();
    e.stopPropagation();
    const box = (e.currentTarget as HTMLElement).closest(".page-box") as HTMLElement;
    if (!box || !result) return;
    const mmPerPx = result.page_mm[0] / box.clientWidth;
    const d: DragState = {
      uid: p.uid, startX: e.clientX, startY: e.clientY,
      origX: p.x, origY: p.y, mmPerPx,
    };
    dragRef.current = d;
    ghostRef.current = { x: p.x, y: p.y };
    setDrag(d);
    setGhost({ uid: p.uid, x: p.x, y: p.y });

    const onMove = (ev: MouseEvent) => {
      const dd = dragRef.current;
      if (!dd) return;
      const dxu = ((ev.clientX - dd.startX) * dd.mmPerPx) / zoom;
      const dyu = ((ev.clientY - dd.startY) * dd.mmPerPx) / zoom;
      ghostRef.current = { x: dd.origX + dxu, y: dd.origY + dyu };
      setGhost({ uid: dd.uid, x: dd.origX + dxu, y: dd.origY + dyu });
    };
    const onUp = (ev: MouseEvent) => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      const dd = dragRef.current;
      dragRef.current = null;
      if (!dd) return;
      const dxu = ((ev.clientX - dd.startX) * dd.mmPerPx) / zoom;
      const dyu = ((ev.clientY - dd.startY) * dd.mmPerPx) / zoom;
      setDrag(null);
      setGhost(null);
      if (Math.abs(dxu) < 0.5 && Math.abs(dyu) < 0.5) return;
      void aplicarMovimiento(dd.uid, dd.origX + dxu, dd.origY + dyu);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const aplicarMovimiento = async (uid2: string, nx: number, ny: number) => {
    try {
      const r = await api.move(uid2, nx, ny);
      // el servidor reoptimiza el resto respetando este elemento fijado
      if (r.job) onJob(r.job);
      else await onRefresh();
    } catch {
      await onRefresh(); // posición inválida: recarga (vuelve al sitio)
    } finally {
      setVersion(Date.now());
    }
  };

  const unpin = async (uid: string) => {
    const j = await api.unpin(uid);
    onJob(j);
  };

  // --- editor de contorno (blobs) ---------------------------------
  useEffect(() => {
    if (!editando) {
      setBlobs([]);
      setPreviewBlobs("");
      setSelBlobs(new Set());
      return;
    }
    api.blobs(editando.id)
      .then((r) => {
        setBlobs(r.blobs);
        setPreviewBlobs(r.preview_png);
        // por defecto se marcan para quitar los NO principales
        setSelBlobs(new Set(r.blobs.filter((b) => !b.principal).map((b) => b.id)));
      })
      .catch(() => {
        setBlobs([]);
        setPreviewBlobs("");
      });
  }, [editando]);

  const guardarContorno = async () => {
    if (!editando) return;
    try {
      await api.limpiarContorno(editando.id, Array.from(selBlobs));
    } finally {
      await onFinEdicion?.();
    }
  };

  const toggleBlob = (id: number) => {
    setSelBlobs((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  };

  const save = async () => {
    try {
      const r = await api.export(nombreGuardar);
      alert(t("Guardado en:\n{folder}", { folder: r.folder }));
    } catch (e) {
      alert(t("No se pudo guardar: {e}", { e: (e as Error).message }));
    }
  };

  const saveAs = () => {
    // selector de carpeta del propio CryCat (devuelve rutas absolutas)
    setPickerOpen(true);
  };

  const exportarEn = async (folder: string) => {
    try {
      const r = await api.export(nombreGuardar, folder);
      alert(t("Guardado en:\n{folder}", { folder: r.folder }));
    } catch (e) {
      alert(t("No se pudo guardar: {e}", { e: (e as Error).message }));
    }
  };



  const polys = result?.poly_mm ?? [];
  const [bx, by] = result?.bbox_offset_mm ?? [0, 0];
  const [bw, bh] = result?.bbox_mm ?? [0, 0];
  const sheetW = settings.lienzo === "pagina" ? result?.page_mm[0] ?? 0 : bw;
  const sheetH = settings.lienzo === "pagina" ? result?.page_mm[1] ?? 0 : bh;

  // En modo "página" las coordenadas son absolutas de la página; en modo
  // "recortable" el lienzo es el área útil, así que se resta su origen.
  const offX = settings.lienzo === "pagina" ? 0 : bx;
  const offY = settings.lienzo === "pagina" ? 0 : by;
  const guidePath = polys.length
    ? "M" + polys.map(([x, y]) => `${x - offX},${y - offY}`).join(" L") + " Z"
    : "";

  const pageEl = (i: number) => {
    const pls = result?.placements.filter((p) => p.page === i) ?? [];
    return (
      <div
        key={i}
        className={`page-box ${ui.eyeFosforito ? "fondo-fosforito"
          : ui.eyeTransparent ? "alpha-bg" : "white-bg"}`}
        style={{ width: "100%" }}
        onClick={(e) => {
          if (pages > 1 && largePage === null && !(e.target as HTMLElement).closest(".item-box"))
            setLargePage(i);
        }}
        data-testid={`page-${i}`}
      >
        <img className="sheet" src={api.pageUrl(i, version)} alt={t("Página {i}", { i: i + 1 })} draggable={false} />
        {ui.guidesVisible && guidePath && (
          <svg className="overlay-svg" viewBox={`0 0 ${sheetW} ${sheetH}`} preserveAspectRatio="none">
            <path
              d={guidePath} fill="none" stroke="var(--guide)"
              strokeWidth={Math.max(0.6, sheetW / 250)}
              strokeDasharray={`${sheetW / 55} ${sheetW / 85}`}
              opacity={0.85}
            />
          </svg>
        )}
        {pls.map((p) => {
          const asset = assets.find((a) => a.id === p.asset_id);
          const g = ghost?.uid === p.uid ? ghost : null;
          const left = (((g ? g.x : p.x) - offX) / (sheetW || 1)) * 100;
          const top = (((g ? g.y : p.y) - offY) / (sheetH || 1)) * 100;
          return (
            <div
              key={p.uid}
              className={`item-box ${p.pinned ? "pinned" : ""} ${drag?.uid === p.uid ? "dragging" : ""}`}
              style={{
                left: `${left}%`, top: `${top}%`,
                width: `${(p.w / (sheetW || 1)) * 100}%`,
                height: `${(p.h / (sheetH || 1)) * 100}%`,
              }}
              title={asset?.name ?? ""}
              onMouseDown={(e) => startDragItem(e, p)}
              onContextMenu={(e) => {
                e.preventDefault();
                unpin(p.uid);
              }}
              data-testid={`item-${p.uid}`}
            >
              {p.pinned && <span className="pin">📌</span>}
            </div>
          );
        })}
      </div>
    );
  };

  const visible = largePage !== null ? [largePage] : Array.from({ length: pages }, (_, i) => i);

  return (
    <div className="viewer" data-testid="viewer">
      <div className="viewer-top">
        <div className="group">
          <button
            data-testid="btn-guias"
            title={t("Mostrar/ocultar guías de límites Cricut (tecla G) — solo en la vista previa, nunca en el archivo final")}
            onClick={() => setUi((u) => ({ ...u, guidesVisible: !u.guidesVisible }))}
          >
            {ui.guidesVisible ? t("▦ Guías") : t("▢ Guías")}
          </button>
        </div>
        <button
          className="recalc-btn"
          data-testid="btn-recalcular"
          title={t("Forzar la recolocación de todo (ignora los elementos fijados)")}
          onClick={() => onRecalc(sobraEspacio ? "rapido" : "optimo")}
        >
          {sobraEspacio ? t("⚡ Recalcular rápido") : t("✨ Recalcular óptimo")}
        </button>
        <div className="group">
          {pages > 1 && largePage === null && (
            <>
              <button data-testid="view-1" className={ui.viewMode === 1 ? "primary" : ""} onClick={() => setUi((u) => ({ ...u, viewMode: 1 }))}>1</button>
              <button data-testid="view-2" className={ui.viewMode === 2 ? "primary" : ""} onClick={() => setUi((u) => ({ ...u, viewMode: 2 }))}>2</button>
              <button data-testid="view-4" className={ui.viewMode === 4 ? "primary" : ""} onClick={() => setUi((u) => ({ ...u, viewMode: 4 }))}>4</button>
            </>
          )}
          {largePage !== null && (
            <button onClick={() => setLargePage(null)} title={t("Volver a la cuadrícula (Esc)")}>{t("✕ Ver todo")}</button>
          )}
          <button
            data-testid="btn-ojo"
            title={t("Fondo: blanco → transparente → verde fosforito (tecla T)")}
            onClick={() =>
              setUi((u) => {
                // ciclo de 3 estados: blanco -> transparencia -> fosforito
                if (u.eyeFosforito) return { ...u, eyeFosforito: false, eyeTransparent: false };
                if (u.eyeTransparent) return { ...u, eyeTransparent: false, eyeFosforito: true };
                return { ...u, eyeTransparent: true, eyeFosforito: false };
              })
            }
          >
            {ui.eyeFosforito ? "🟢" : ui.eyeTransparent ? "🙈" : "👁"}
          </button>
          <button onClick={() => setZoom((z) => Math.min(12, z * 1.08))} title={t("Acercar (+)")}>＋</button>
          <button onClick={() => setZoom((z) => Math.max(0.05, z / 1.08))} title={t("Alejar (−)")}>－</button>
          <button
            data-testid="zoom-reset"
            onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }}
            title={t("Volver al zoom original (tecla 0)")}
          >
            100%
          </button>
        </div>
      </div>

      {editando ? (
        <div className="editor-blobs" data-testid="editor-blobs">
          <div className="editor-lienzo">
            <img src={api.previewUrl(editando.id) + `?t=${version}`}
                 alt={editando.name} draggable={false} />
            <div className="editor-overlay">
              {editando && blobs.filter((b) => !b.principal).map((b, i) => {
                const [x0, y0, x1, y1] = b.bbox;
                const W = editando.w_px || 1;
                const H = editando.h_px || 1;
                return (
                  <button
                    key={b.id}
                    className={`blob${selBlobs.has(b.id) ? " sel" : ""}`}
                    data-testid={`blob-${i}`}
                    title={t("Trozo de {px} px — clic para {accion}", {
                      px: b.area_px,
                      accion: selBlobs.has(b.id) ? t("conservar") : t("quitar"),
                    })}
                    style={{
                      left: `${(x0 / W) * 100}%`,
                      top: `${(y0 / H) * 100}%`,
                      width: `${((x1 - x0) / W) * 100}%`,
                      height: `${((y1 - y0) / H) * 100}%`,
                    }}
                    onClick={() => toggleBlob(b.id)}
                  />
                );
              })}
            </div>
          </div>
          <div className="hint">
            {t("Pulsa los trozos sueltos para marcarlos (se quitarán al guardar). El contorno principal nunca se elimina. El archivo original no se toca.")}
          </div>
        </div>
      ) : (
      <div
        ref={canvasRef}
        className={`canvas ${drag ? "panning" : ""}`}
        data-testid="canvas"
        onMouseDown={startPan}
      >
        <div
          className="canvas-inner"
          style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}
        >
          {pages === 0 && (
            <div className="hint" style={{ margin: "30px auto" }}>
              {t("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.")}
            </div>
          )}
          <div
            className="pages-grid"
            style={{
              width: "100%", display: "grid",
              gridTemplateColumns: `repeat(${largePage !== null ? 1 : ui.viewMode}, 1fr)`, gap: 18,
            }}
          >
            {visible.map(pageEl)}
          </div>
        </div>
      </div>
      )}

      {editando ? (
        <div className="viewer-bottom">
          <div className="btn-row">
            <button className="primary" data-testid="btn-guardar-contorno"
                    onClick={guardarContorno}>
              {t("Guardar limpieza")}
            </button>
            <button data-testid="btn-descartar-contorno"
                    onClick={() => onFinEdicion?.()}>
              {t("Descartar")}
            </button>
          </div>
        </div>
      ) : (
      <div className="viewer-bottom">
        <input
          type="text"
          data-testid="save-name"
          placeholder={sugerencia}
          value={ui.saveName}
          onChange={(e) => setUi((u) => ({ ...u, saveName: e.target.value }))}
        />
        <div className="btn-row">
          <button
            data-testid="btn-abrir-guardado"
            className="btn-icono"
            title={t("Abrir la carpeta de guardado en el explorador")}
            aria-label={t("Abrir carpeta de guardado")}
            onClick={() =>
              api.abrirCarpeta(settings.carpeta_export || undefined)
                .catch(() => undefined)
            }
          >
            📂
          </button>
          <button data-testid="btn-guardar" onClick={save}>{t("Guardar")}</button>
          <button data-testid="btn-guardar-como" onClick={saveAs}>{t("Guardar como…")}</button>
        </div>
      </div>
      )}

      <FolderPicker
        open={pickerOpen}
        initial={settings.carpeta_export}
        onClose={() => setPickerOpen(false)}
        onPick={exportarEn}
      />
    </div>
  );
}
