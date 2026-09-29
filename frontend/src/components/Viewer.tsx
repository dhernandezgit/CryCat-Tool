import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { assetUrl } from "../recursos";
import { api, NAME_SUGGESTIONS, NAME_SUGGESTIONS_EN, type AppSettings, type Asset, type Job, type Placement, type Result, type UiState } from "../api";
import FolderPicker from "./FolderPicker";
import SaveDialog from "./SaveDialog";
import { IconoGuias, IconoBordes, IconoRecalcular, IconoOjo,
         IconoFosforito, IconoCentrar, IconoDisposicion,
         IconoZoomMas, IconoZoomMenos, IconoAjustar,
         IconoGuardar, IconoImprimir, IconoCarpeta, IconoDeshacer,
         IconoRehacer } from "./iconos";
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
  onDeshacer: () => void;
  onRehacer: () => void;
  puedeDeshacer: boolean;
  puedeRehacer: boolean;
}

interface DragState {
  uid: string;
  startX: number;
  startY: number;
  origX: number;
  origY: number;
  mmPerPx: number;
}

export default function Viewer({ assets, result, settings, ui, setUi, saveSettings, onRefresh, onJob, onRecalc, editando, onFinEdicion, onDeshacer, onRehacer, puedeDeshacer, puedeRehacer }: Props) {
  const t = useT();
  const idioma = useIdioma();
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [largePage, setLargePage] = useState<number | null>(null);
  // estable durante la sesión (para que la caché del service worker
  // funcione en la web); se refresca al editar o recalcular
  const [version, setVersion] = useState(1);
  const [drag, setDrag] = useState<DragState | null>(null);
  const [ghost, setGhost] = useState<{ uid: string; x: number; y: number } | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  // --- editor de contorno (blobs) ---
  const [unionMm, setUnionMm] = useState(2);
  // parpadeo lento de los contornos: se alternan dos fotogramas del PNG (los
  // puntos pasan a huecos y los huecos a puntos), sin cálculos vectoriales
  const [faseBordes, setFaseBordes] = useState(0);
  useEffect(() => {
    if (!ui.verBordes) return;
    const t = window.setInterval(
      () => setFaseBordes((f) => (f + 3) % 12), 260);
    return () => window.clearInterval(t);
  }, [ui.verBordes]);

  const [contornos, setContornos] = useState<
    { uid: string; page: number; final: number[][][];
      original: number[][][] }[]>([]);
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
      else if (e.key === "0") { ajustar(); }
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

  // Contornos vectoriales animados: PENDIENTE de cuadrar en piezas giradas
  // (en las rectas van perfectos, en las de 90º/libres se desalinean). Hasta
  // entonces se usan los contornos punteados del PNG, que sí están alineados.
  const CONTORNOS_ANIMADOS = false;
  useEffect(() => {
    if (!CONTORNOS_ANIMADOS || !ui.verBordes || !result
        || !result.placements.length) {
      setContornos([]);
      return;
    }
    let vivo = true;
    api.contornos()
      .then((r) => {
        if (vivo) setContornos(r.piezas ?? []);
      })
      .catch(() => undefined);
    return () => {
      vivo = false;
    };
  }, [ui.verBordes, result?.placed, result?.minis, version]);

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
        // el control de la tarjeta (BORDE ADICIONAL) manda si está puesto;
        // si no, el MÍNIMO exacto que une todos los trozos
        setUnionMm(editando.offset_mm > 0 ? editando.offset_mm
                                          : (r.union_mm ?? 2));
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

  const [guardado, setGuardado] = useState<
    { files: string[]; folder: string; error?: string } | null>(null);

  // Imprimir: primero ASEGURA que está guardado y luego imprime el PDF con
  // las marcas negras de Cricut (misma calidad, tamaño real)
  const imprimir = async () => {
    try {
      const r = await api.export(ui.saveName || "crycat",
                                 settings.carpeta_export || undefined);
      setGuardado({ files: r.files, folder: r.folder });
    } catch (e) {
      setGuardado({ files: [], folder: "", error: (e as Error).message });
      return;
    }
    // En la WEB no se imprime la página: se descarga el PDF con las marcas
    // negras de Cricut (que es lo que se lleva a la impresora).
    const web = !!(globalThis as { __crycatBase?: string }).__crycatBase;
    if (web) {
      try {
        const r = await fetch(
          (globalThis as { __crycatBase?: string }).__crycatBase +
          "api/print.pdf");
        const blob = await r.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${ui.saveName || "crycat"}-cricut.pdf`;
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 4000);
      } catch (e) {
        setGuardado({ files: [], folder: "",
                      error: (e as Error).message });
      }
      return;
    }
    const iframe = document.createElement("iframe");
    iframe.setAttribute("aria-hidden", "true");
    iframe.style.cssText =
      "position:fixed;right:0;bottom:0;width:0;height:0;border:0";
    iframe.src = "/api/print.pdf";
    iframe.onload = () => {
      try {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
      } finally {
        window.setTimeout(() => iframe.remove(), 60000);
      }
    };
    document.body.appendChild(iframe);
  };

  const save = async () => {
    try {
      const r = await api.export(nombreGuardar);
      setGuardado({ files: r.files, folder: r.folder });
    } catch (e) {
      setGuardado({ files: [], folder: "", error: (e as Error).message });
    }
  };

  const saveAs = () => {
    // selector de carpeta del propio CryCat (devuelve rutas absolutas)
    setPickerOpen(true);
  };

  const exportarEn = async (folder: string) => {
    try {
      const r = await api.export(nombreGuardar, folder);
      setGuardado({ files: r.files, folder: r.folder });
    } catch (e) {
      setGuardado({ files: [], folder: "", error: (e as Error).message });
    }
  };



  const polys = result?.poly_mm ?? [];
  const [bx, by] = result?.bbox_offset_mm ?? [0, 0];
  const [bw, bh] = result?.bbox_mm ?? [0, 0];
  const sheetW = settings.lienzo === "pagina" ? result?.page_mm[0] ?? 0 : bw;
  const sheetH = settings.lienzo === "pagina" ? result?.page_mm[1] ?? 0 : bh;

  /** Ajusta la vista: la HOJA ENTERA visible y en el CENTRO REAL del visor. */
  const ajustar = useCallback(() => {
    const el = canvasRef.current;
    if (!el) return;
    const caja = el.querySelector(".page-box") as HTMLElement | null;
    if (!caja) return;
    const inner = el.querySelector(".canvas-inner") as HTMLElement | null;
    const cw = el.clientWidth, ch = el.clientHeight;
    // el lienzo interno ES el contenido (con su aire); se ajusta y se centra
    // sobre él: así la hoja queda entera y en el centro exacto del visor
    const iw = (inner?.offsetWidth || caja.offsetWidth) || 1;
    const ih = (inner?.offsetHeight || caja.offsetHeight) || 1;
    const z = Math.min(1, cw / iw, ch / ih);
    setZoom(z);
    setPan({ x: (cw - iw * z) / 2, y: (ch - ih * z) / 2 });
  }, []);

  // al abrir/cambiar de página, modo de vista u orientación: ajustar solo
  useEffect(() => {
    if (pages <= 0) return;
    const t = window.setTimeout(ajustar, 60);
    return () => window.clearTimeout(t);
  }, [pages, sheetW, sheetH, ui.viewMode, ui.hojaGirada, largePage,
      settings.lienzo, settings.pagina_w, settings.pagina_h, ajustar]);


  // En modo "página" las coordenadas son absolutas de la página; en modo
  // "recortable" el lienzo es el área útil, así que se resta su origen.
  const offX = settings.lienzo === "pagina" ? 0 : bx;
  const offY = settings.lienzo === "pagina" ? 0 : by;
  const guidePath = polys.length
    ? "M" + polys.map(([x, y]) => `${x - offX},${y - offY}`).join(" L") + " Z"
    : "";

  // al TERMINAR una optimización se ajusta la vista sola: 1 página -> 1,
  // 2 -> 2 y 3 o más -> 4. Después se puede alternar a mano sin problema.
  const ultimoPaginas = useRef(0);
  useEffect(() => {
    if (!result) return;
    const n = result.pages || 0;
    if (n > 0 && n !== ultimoPaginas.current) {
      ultimoPaginas.current = n;
      setUi((u) => ({ ...u, viewMode: n <= 1 ? 1 : n === 2 ? 2 : 4 }));
      setLargePage(null);
    }
  }, [result?.pages, result?.placed, result?.minis]);

  // contorno: 4 opciones (exterior por defecto, sin bordes, ambos, ninguno)
  // `corto` es la etiqueta VISIBLE del botón (el color de cada modo imita el
  // del contorno en la hoja: magenta el final, cian el del dibujo sin borde)
  const CONTS: Record<string, { etiqueta: string; corto: string; clase: string }> = {
    final: { etiqueta: "Contorno exterior (con bordes)", corto: "Contorno",
             clase: "modo-final" },
    orig: { etiqueta: "Contorno sin bordes", corto: "Sin borde",
            clase: "modo-orig" },
    ambos: { etiqueta: "Contornos (con y sin bordes)", corto: "Ambos",
             clase: "modo-ambos" },
    ninguno: { etiqueta: "Sin contornos", corto: "Sin contorno",
               clase: "modo-ninguno" },
  };
  const modoCont = ui.contornoModo ?? "final";
  const verCont = ui.verBordes && modoCont !== "ninguno";

  // solo visual: en el modo horizontal la hoja se enseña girada 90º para
  // aprovechar el ancho (no se recalcula absolutamente nada). La hoja, las
  // guías y las zonas de las piezas giran JUNTAS (mismo tamaño y transform).
  const girada = ui.hojaGirada === true;
  const estiloGirada: React.CSSProperties | undefined = girada ? {
    position: "absolute", left: "50%", top: "50%",
    width: `${(sheetW / (sheetH || 1)) * 100}%`,
    height: `${(sheetH / (sheetW || 1)) * 100}%`,
    transform: "translate(-50%, -50%) rotate(90deg)",
  } : undefined;

  const pageEl = (i: number) => {
    const pls = result?.placements.filter((p) => p.page === i) ?? [];
    return (
      <div
        key={i}
        className={`page-box ${ui.eyeFosforito ? "fondo-fosforito"
          : ui.eyeTransparent ? "alpha-bg" : "white-bg"}${girada ? " girada" : ""}`}
        style={girada ? { width: "100%",
                          aspectRatio: `${sheetH} / ${sheetW}` }
                      : { width: "100%" }}
        onClick={(e) => {
          if (pages > 1 && largePage === null && !(e.target as HTMLElement).closest(".item-box"))
            setLargePage(i);
        }}
        data-testid={`page-${i}`}
      >
        <img className={`sheet${girada ? " girada" : ""}`}
             style={estiloGirada}
             onLoad={i === 0 ? ajustar : undefined}
             src={api.pageUrl(i, version, settings.simular_impresion === true, verCont, faseBordes, modoCont)} alt={t("Página {i}", { i: i + 1 })} draggable={false} />
        {ui.guidesVisible && guidePath && (
          <svg className={`overlay-svg${girada ? " girada" : ""}`}
               style={estiloGirada}
               viewBox={`0 0 ${sheetW} ${sheetH}`} preserveAspectRatio="none">
            {/* rejilla de centímetros (para medir de un vistazo) */}
            <g stroke="var(--guide)" strokeWidth={Math.max(0.15, sheetW / 1400)}
               opacity={0.28}>
              {Array.from({ length: Math.floor((bx - offX + bw) / 10) + 1 },
                (_, k) => {
                  const x = k * 10 - (offX - bx);
                  return x >= bx - offX - 0.01 && x <= bx - offX + bw + 0.01
                    ? <line key={`v${k}`} x1={x} y1={by - offY}
                            x2={x} y2={by - offY + bh} />
                    : null;
                })}
              {Array.from({ length: Math.floor((by - offY + bh) / 10) + 1 },
                (_, k) => {
                  const y = k * 10 - (offY - by);
                  return y >= by - offY - 0.01 && y <= by - offY + bh + 0.01
                    ? <line key={`h${k}`} x1={bx - offX} y1={y}
                            x2={bx - offX + bw} y2={y} />
                    : null;
                })}
            </g>
            {/* MARCAS REALES de Cricut (las mismas del PDF, tomadas de la
                hoja oficial) con su tamaño físico real, ancladas igual que al
                imprimir: en su esquina del área recortable */}
            {result?.marcas && (
              <g>
                {[
                  ["esquina_flecha", bx, by, false, false],
                  ["esquina_sd", bx + bw, by, true, false],
                  ["esquina_ii", bx, by + bh, false, true],
                  ["esquina_id", bx + bw, by + bh, true, true],
                ].map(([nombre, cx, cy, der, abajo]: any) => {
                  const tw = result.marcas![nombre as string];
                  if (!tw) return null;
                  const x = (cx as number) - offX - (der ? tw[0] : 0);
                  const y = (cy as number) - offY - (abajo ? tw[1] : 0);
                  return (
                    <image key={nombre} href={assetUrl(`/marcas/${nombre}.png`)}
                           x={x} y={y} width={tw[0]} height={tw[1]}
                           preserveAspectRatio="none" />
                  );
                })}
              </g>
            )}
            <path
              d={guidePath} fill="none" stroke="var(--guide)"
              strokeWidth={Math.max(0.6, sheetW / 250)}
              strokeDasharray={`${sheetW / 55} ${sheetW / 85}`}
              opacity={0.85}
            />
            {/* contornos de cada pieza, punteados y animados (hormigas
                marchando: los puntos cambian de sitio continuamente) */}
            {CONTORNOS_ANIMADOS && ui.verBordes && contornos
              .filter((c) => c.page === i)
              .map((c) => (
                <g key={c.uid} className="marcha">
                  {c.final.map((poly, k) => (
                    <path key={`f${k}`} className="marcha-final"
                          d={"M" + poly.map(([x, y]) =>
                            `${x - offX},${y - offY}`).join(" L") + " Z"} />
                  ))}
                  {c.original.map((poly, k) => (
                    <path key={`o${k}`} className="marcha-orig"
                          d={"M" + poly.map(([x, y]) =>
                            `${x - offX},${y - offY}`).join(" L") + " Z"} />
                  ))}
                </g>
              ))}
          </svg>
        )}
        <div className={`capa-piezas${girada ? " girada" : ""}`}
             style={estiloGirada}>
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
            onClick={(ev) => {
              // centrar la pieza en el visor y avisar para que la izquierda
              // haga scroll a su tarjeta y le abra los menús
              ev.stopPropagation();
              (ev.currentTarget as HTMLElement).scrollIntoView({
                block: "center", inline: "center", behavior: "smooth" });
              window.dispatchEvent(new CustomEvent("crycat:seleccion",
                { detail: p.asset_id }));
            }}
            >
              {p.pinned && <span className="pin"></span>}
            </div>
          );
        })}
        </div>
      </div>
    );
  };

  const visible = largePage !== null ? [largePage] : Array.from({ length: pages }, (_, i) => i);

  return (
    <div className="viewer" data-testid="viewer">
      {pages > 1 && (
        <div className="aviso-paginas-flotante" data-testid="aviso-paginas">
          {t("No cabe en una página: {n} páginas", { n: pages })}
        </div>
      )}
      <div className="viewer-top">
        <button
            data-testid="btn-bordes"
            className={`btn-contorno ${CONTS[modoCont].clase}`}
            data-tip={t("Contorno: {modo} (pulsa para cambiar)", {
              modo: t(CONTS[ui.contornoModo ?? "final"].etiqueta) })}
            onClick={() => {
              const orden = ["final", "orig", "ambos", "ninguno"] as const;
              const i = orden.indexOf(ui.contornoModo ?? "final");
              const sig = orden[(i + 1) % 4];
              setUi((u) => ({ ...u, contornoModo: sig,
                              verBordes: sig !== "ninguno" }));
              // se guarda para que el modo elegido persista entre sesiones
              void saveSettings({ contorno_modo: sig,
                                  ver_contornos: sig !== "ninguno" });
            }}
          >
            <IconoBordes size={16} /> {t(CONTS[modoCont].corto)}
        </button>
        <button
            data-testid="btn-guias"
            className={ui.guidesVisible ? "primary" : ""}
            data-tip={t("Marcas de registro y guías del área recortable (tecla G): solo en la vista previa")}
            onClick={() => setUi((u) => ({ ...u, guidesVisible: !u.guidesVisible }))}
          >
            <IconoGuias size={16} /> {t("Marcas")}
        </button>
        <button
            data-testid="btn-ojo"
            data-tip={t("Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)")}
            onClick={() =>
              setUi((u) => {
                // ciclo de 3 estados: blanco -> transparencia -> fosforito
                if (u.eyeFosforito) return { ...u, eyeFosforito: false, eyeTransparent: false };
                if (u.eyeTransparent) return { ...u, eyeTransparent: false, eyeFosforito: true };
                return { ...u, eyeTransparent: true, eyeFosforito: false };
              })
            }
          >
            {ui.eyeFosforito ? <IconoFosforito size={16} />
              : ui.eyeTransparent ? <IconoOjo size={16} />
              : <IconoOjo size={16} />}
            {ui.eyeFosforito ? t("Fosforito")
              : ui.eyeTransparent ? t("Transparente") : t("Blanco")}
        </button>
        {((pages > 1 && largePage === null) || largePage !== null) && (
          <div className="group">
            {pages > 1 && largePage === null && (
              <>
                <button data-testid="view-1" className={ui.viewMode === 1 ? "primary" : ""} onClick={() => setUi((u) => ({ ...u, viewMode: 1 }))}>1</button>
                <button data-testid="view-2" className={ui.viewMode === 2 ? "primary" : ""} onClick={() => setUi((u) => ({ ...u, viewMode: 2 }))}>2</button>
                <button data-testid="view-4" className={ui.viewMode === 4 ? "primary" : ""} onClick={() => setUi((u) => ({ ...u, viewMode: 4 }))}>4</button>
              </>
            )}
            {largePage !== null && (
              <button onClick={() => setLargePage(null)} title={t("Volver a la cuadrícula (Esc)")}>{t(" Ver todo")}</button>
            )}
          </div>
        )}
        <button
            data-testid="btn-disposicion"
            className={girada ? "primary" : ""}
            data-tip={t("Cambiar la disposición: menús anchos o hoja más grande")}
            onClick={() => {
              const horizontal = !(window as { __crycatAncho?: boolean })
                .__crycatAncho;
              (window as { __crycatAncho?: boolean }).__crycatAncho = horizontal;
              window.dispatchEvent(new CustomEvent("crycat:disposicion",
                { detail: horizontal }));
            }}
          >
            <IconoDisposicion size={16} />
            {t(girada ? "Vertical" : "Horizontal")}
        </button>
      </div>

      {/* flotantes: deshacer/rehacer abajo-izquierda; zoom en columna abajo-derecha */}
      <div className="viewer-flotantes">
        <div className="vf-izq">
          <button
            data-testid="btn-deshacer"
            data-tip={t("Deshacer (Ctrl+Z)")}
            onClick={() => onDeshacer()}
            disabled={!puedeDeshacer}
          >
            <IconoDeshacer size={16} />
          </button>
          <button
            data-testid="btn-rehacer"
            data-tip={t("Rehacer (Ctrl+Y / Ctrl+Shift+Z)")}
            onClick={() => onRehacer()}
            disabled={!puedeRehacer}
          >
            <IconoRehacer size={16} />
          </button>
        </div>
        <div className="vf-centro">
          <button
            className="btn-optimizar-flotante"
            data-testid="btn-recalcular"
            data-tip={t("Optimizar: vuelve a colocar todo (ignora los fijados)")}
            onClick={() => onRecalc(sobraEspacio ? "rapido" : "optimo")}
          >
            <span className="estrella">✦</span>
            {t("Optimizar")}
            <span className="estrella">✦</span>
          </button>
        </div>
        <div className="vf-der">
          <button data-tip={t("Acercar (+)")}
                  onClick={() => setZoom((z) => Math.min(12, z * 1.08))}>
            <IconoZoomMas size={15} />
          </button>
          <button
            data-testid="zoom-reset"
            data-tip={t("Ajustar la hoja entera a la ventana (tecla 0)")}
            onClick={ajustar}
          >
            <IconoCentrar size={15} />
          </button>
          <button data-tip={t("Alejar (−)")}
                  onClick={() => setZoom((z) => Math.max(0.05, z / 1.08))}>
            <IconoZoomMenos size={15} />
          </button>
          <span className="zoom-nivel" data-testid="zoom-nivel">
            {Math.round(zoom * 100)}%
          </span>
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
          <div className="editor-pie">
            <div className="row" style={{ gap: 8, flexWrap: "wrap" }}>
              <span className="row" style={{ gap: 6, alignItems: "center" }}>
                <span className="hint">{t("Borde para unir")}</span>
                <button className="quota-btn" data-testid="union-menos"
                  onClick={() => setUnionMm((m) =>
                    Math.max(0.5, Math.round((m - 0.5) * 2) / 2))}>−</button>
                <span className="quota-val" data-testid="union-mm">
                  {unionMm} mm
                </span>
                <button className="quota-btn" data-testid="union-mas"
                  onClick={() => setUnionMm((m) =>
                    Math.min(20, Math.round((m + 0.5) * 2) / 2))}>+</button>
              </span>
              <button
                className="primary"
                data-testid="btn-unir-contorno"
                title={t("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: unionMm })}
                onClick={async () => {
                  if (!editando) return;
                  await api.patchAsset(editando.id, {
                    offset_mm: unionMm,
                    offset_modo: "unir_curvo",
                  });
                  await onFinEdicion?.();
                }}
              >
                {t("Unir todo en una pieza")}
              </button>
              <button data-testid="btn-quitar-marcados"
                      onClick={guardarContorno}>
                {t("Quitar marcados ({n})",
                   { n: selBlobs.size })}
              </button>
            </div>
            <div className="hint">
              {t("Toca un trozo para marcarlo. El principal nunca se borra.")}
            </div>
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
            <IconoCarpeta size={16} />
          </button>
          <button data-testid="btn-guardar" onClick={save}>{t("Guardar")}</button>
          <button data-testid="btn-guardar-como" onClick={saveAs}>{t("Guardar como…")}</button>
          <button data-testid="btn-imprimir" onClick={imprimir}
                  disabled={pages === 0}>{t("Imprimir")}</button>
        </div>
      </div>
      )}

      <FolderPicker
        open={pickerOpen}
        initial={settings.carpeta_export}
        onClose={() => setPickerOpen(false)}
        onPick={exportarEn}
      />
      <SaveDialog
        open={!!guardado}
        files={guardado?.files ?? []}
        folder={guardado?.folder ?? ""}
        error={guardado?.error}
        onOpenFolder={(ruta) =>
          void api.fsOpen(ruta).catch(() => undefined)}
        onClose={() => setGuardado(null)}
      />
    </div>
  );
}
