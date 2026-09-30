import { useEffect, useRef, useState } from "react";
import { api, assetSizeMm, normalizeAsset, prepareFile, type AppSettings, type Asset, type Result } from "../api";
import { useT } from "../i18n";
import { IconoCarpeta, IconoReemplazar, IconoLimpiar, IconoFondo,
         IconoDeshacerFondo, IconoBorrar, IconoMini, IconoAviso,
         IconoBordes } from "./iconos";
import ImportDialog from "./ImportDialog";

interface Props {
  assets: Asset[];
  result: Result | null;
  settings: AppSettings;
  onChange: () => Promise<void>;
  saveSettings: (p: Partial<AppSettings>) => Promise<void>;
  onEditarContorno?: (a: Asset) => void;
  onAntesDeCambiar?: () => void;
  faseBordes?: number;
  verBordes?: boolean;
  contornoModo?: "final" | "orig" | "ambos" | "ninguno";
  destacado?: string;
  seleccion?: string[];
  onSeleccion?: (id: string, multi: boolean) => void;
  onBulk?: (ids: string[],
            patch: Partial<Asset> | ((a: Asset) => Partial<Asset>)
           ) => Promise<void>;
}

function AssetCard({ a, result, onChange, onEditarContorno,
                     onAntesDeCambiar, bordeGlobal = false,
                     bordeGlobalMm = 0, rataActivo = false,
                     faseBordes = 0, verBordes = true,
                     contornoModo = "final",
                     destacado = false, sel = false,
                     onSel }: {
  a: Asset; result: Result | null; onChange: () => Promise<void>;
  onEditarContorno?: (a: Asset) => void;
  onAntesDeCambiar?: () => void;
  bordeGlobal?: boolean;
  bordeGlobalMm?: number;
  rataActivo?: boolean;
  sel?: boolean;
  onSel?: (id: string, multi: boolean) => void;
  faseBordes?: number;
  verBordes?: boolean;
  contornoModo?: "final" | "orig" | "ambos" | "ninguno";
  destacado?: boolean;
}) {
  const t = useT();
  const [local, setLocal] = useState<Asset>(() => normalizeAsset(a));
  useEffect(() => setLocal(normalizeAsset(a)), [a]);
  const reemplazarRef = useRef<HTMLInputElement>(null);
  // borde efectivo (el propio o el global): el tamaño que se muestra es el
  // REAL (contenido + borde), así ajustar el borde actualiza la medida
  const globalMm = bordeGlobal ? Number(bordeGlobalMm) || 0 : 0;
  // El control del elemento es SOLO el borde ADICIONAL (empieza en 0 y va
  // desacoplado del global). El total (para el tamaño mostrado) es la suma.
  const bordeEf = Math.max(0, globalMm + local.offset_mm);
  const ponerAdicional = (v: number) => {
    const x = Math.max(0, Math.min(20, Math.round(v * 2) / 2));
    patch({ offset_mm: x });
  };
  const size = assetSizeMm(local, bordeEf);

  // tamaño exacto en mm (se guarda como escala para mantener una sola fuente)
  const [mmTexto, setMmTexto] = useState("");
  const editandoMm = useRef(false);
  const [altoTexto, setAltoTexto] = useState("");
  const editandoAlto = useRef(false);
  const [abierto, setAbierto] = useState({ tamano: false, borde: false, mini: false });
  const raizRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!destacado) return;
    setAbierto({ tamano: true, borde: true, mini: true });
    raizRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [destacado]);
  useEffect(() => {
    if (!editandoMm.current) {
      setMmTexto(size.w > 0 ? size.w.toFixed(1) : "");
    }
    if (!editandoAlto.current) {
      setAltoTexto(size.h > 0 ? size.h.toFixed(1) : "");
    }
  }, [size.w, size.h]);
  const anchoBase = Number.isFinite(local.w_mm_base) ? local.w_mm_base : 0;
  const altoBase = Number.isFinite(local.h_mm_base) ? local.h_mm_base : 0;
  // se puede fijar el ancho O el alto: el otro se ajusta manteniendo la proporción
  const anchoExacto = (texto: string) => {
    setMmTexto(texto);
    const v = Number(texto.replace(",", "."));
    if (!Number.isFinite(v) || v <= 0 || anchoBase <= 0) return;
    // el valor pedido es el tamaño FINAL: se descuenta el borde
    patch({ scale_pct: Math.max(5, ((v - 2 * bordeEf) / anchoBase) * 100) });
  };
  const altoExacto = (texto: string) => {
    setAltoTexto(texto);
    const v = Number(texto.replace(",", "."));
    if (!Number.isFinite(v) || v <= 0 || altoBase <= 0) return;
    patch({ scale_pct: Math.max(5, ((v - 2 * bordeEf) / altoBase) * 100) });
  };
  const minisColocados =
    result?.placements.filter((p) => p.asset_id === a.id && p.mini).length ?? 0;
  const normalesColocados =
    result?.placements.filter((p) => p.asset_id === a.id && !p.mini).length ?? 0;

  const patch = async (p: Partial<Asset>) => {
    onAntesDeCambiar?.();          // punto para deshacer
    if ("copies" in p) p.copies = Math.max(0, p.copies ?? 0);
    setLocal((l) => ({ ...l, ...p })); // optimista: respuesta inmediata
    try {
      await api.patchAsset(a.id, p);
    } finally {
      await onChange();
    }
  };

  return (
    <div ref={raizRef} data-asset={a.id}
         className={`asset-card${destacado ? " destacada" : ""}${sel ? " sel" : ""}`}
         data-testid="asset-card"
         onClick={(e) => {
           // clic en la tarjeta = seleccionar (Ctrl/Cmd/Shift para varios)
           const t0 = e.target as HTMLElement;
           if (t0.closest("button, input, select, textarea, a")) return;
           onSel?.(a.id, e.ctrlKey || e.metaKey || e.shiftKey);
         }}>
      <div className="preview">
        {/* la miniatura de la tarjeta va SIN contornos (rápida); los
            contornos se ven en la hoja. Antes, con los contornos activados,
            cada tarjeta pedía la vista con contornos y en la web tardaba
            muchísimo en cargar */}
        <img src={api.previewUrlSinBordes(a.id, a.rev ?? 0)}
             alt={a.name} loading="lazy" />
      </div>
      <div className="info">
        <div className="name-row">
          <span className="name" title={a.name}>{a.name}</span>
          <button
            className="icon-btn"
            data-testid={`abrir-carpeta-${a.id}`}
            title={t("Abrir en el explorador la carpeta de las imágenes de la sesión")}
            onClick={() =>
              api.assetsFolder()
                .then((r) => api.abrirCarpeta(r.path))
                .catch(() => api.abrirCarpeta().catch(() => undefined))
            }
          >
            <IconoCarpeta size={16} />
          </button>
          <button
            className="icon-btn"
            data-testid={`reemplazar-${a.id}`}
            title={t("Reemplazar por otro archivo de la carpeta")}
            onClick={() => reemplazarRef.current?.click()}
          >
            <IconoReemplazar size={16} />
          </button>
          <input
            ref={reemplazarRef}
            type="file"
            hidden
            accept="image/*,.psd,.ai,.svg"
            onChange={async (e) => {
              const f = e.target.files?.[0];
              e.target.value = "";
              if (!f) return;
              try {
                const { blob, name } = await prepareFile(f);
                await api.reemplazar(a.id, blob, name);
                await onChange();
              } catch {
                /* formato no válido */
              }
            }}
          />
          <button
            className="icon-btn"
            data-testid={`limpiar-${a.id}`}
            title={t("Limpiar contorno (quitar trozos sueltos) sin tocar el original")}
            onClick={() => onEditarContorno?.(a)}
          >
            <IconoLimpiar size={16} />
          </button>
          <button
            className="icon-btn"
            title={local.bg_removed ? t("Restaurar fondo original") : t("Quitar fondo (inteligente)")}
            onClick={() =>
              (local.bg_removed
                ? api.restoreBackground(a.id)
                : api.removeBackground(a.id)
              ).then(onChange)
            }
          >
            {local.bg_removed
              ? <IconoDeshacerFondo size={16} />
              : <IconoFondo size={16} />}
          </button>
          <button
            className="icon-btn danger"
            title={t("Eliminar imagen")}
            onClick={() => api.deleteAsset(a.id).then(onChange)}
          >
            <IconoBorrar size={16} />
          </button>
        </div>
        <div className="card-actions">
          <button
            className={`mini-toggle ${local.mini_enabled ? "on" : ""}`}
            data-testid={`mini-${a.id}`}
            data-tip={t("Incluir como mini (rellena huecos)")}
            onClick={() => patch({ mini_enabled: !local.mini_enabled })}
          >
            <IconoMini size={15} /> {t("Mini")}
          </button>
          {rataActivo && (
            <button
              className={`mini-toggle rata ${local.rata_enabled ? "on" : ""}`}
              data-testid={`rata-${a.id}`}
              data-tip={t("Modo rata: este elemento coloca copias extra al imprimir")}
              onClick={() => patch({ rata_enabled: !local.rata_enabled })}>
              🐀
            </button>
          )}
          <button
            className={`mini-toggle ${local.offset_mm > 0 ? "on" : ""}`}
            data-testid={`borde-${a.id}`}
            data-tip={t("Borde adicional para este elemento (unir trozos, margen al cortar)")}
            onClick={() => setAbierto((o) => ({ ...o, borde: !o.borde }))}
          >
            <IconoBordes size={15} /> {t("Borde")}
          </button>
          <div className="copies-row" title={t("Copias")}>
            <button data-testid={`resta-${a.id}`} onClick={() => patch({ copies: local.copies - 1 })}>−</button>
            <span className="n" data-testid={`copias-${a.id}`}>{local.copies}</span>
            <button data-testid={`suma-${a.id}`} onClick={() => patch({ copies: local.copies + 1 })}>+</button>
          </div>
        </div>

        {/* ---- Tamaño (plegable) ---- */}
        <div className="fold">
          <button className="fold-head" data-testid={`fold-tamano-${a.id}`}
                  onClick={() => setAbierto((o) => ({ ...o, tamano: !o.tamano }))}>
            <span className={`chev ${abierto.tamano ? "open" : ""}`}>›</span>
            {t("Tamaño")}
            <span className="fold-val" data-testid={`tamano-${a.id}`}>
              {size.w.toFixed(1)}×{size.h.toFixed(1)} · {Math.round(local.scale_pct)} %
            </span>
          </button>
          {abierto.tamano && (
            <div className="fold-body">
              <div className="scale-row">
                <span title={t("Escala del elemento (100% = tamaño natural)")}>{t("Escala")}</span>
                <input type="range" min={10} max={400} step={5}
                  value={local.scale_pct} data-testid={`escala-${a.id}`}
                  onChange={(e) => patch({ scale_pct: Number(e.target.value) })} />
                <span className="scale-val">{Math.round(local.scale_pct)}%</span>
              </div>
              <div className="exact-row">
                <span title={t("Tamaño exacto en milímetros (mantiene la proporción)")}>{t("Ancho")}</span>
                <input type="number" min={0.5} max={2000} step={0.5} value={mmTexto}
                  data-testid={`ancho-mm-${a.id}`}
                  onFocus={() => { editandoMm.current = true; editandoAlto.current = false; }}
                  onBlur={() => { editandoMm.current = false;
                                  setMmTexto(size.w > 0 ? size.w.toFixed(1) : ""); }}
                  onChange={(e) => anchoExacto(e.target.value)} />
                <span>mm</span>
                <span className="por">×</span>
                <span title={t("Tamaño exacto en milímetros (mantiene la proporción)")}>{t("Alto")}</span>
                <input type="number" min={0.5} max={2000} step={0.5} value={altoTexto}
                  data-testid={`alto-mm-${a.id}`}
                  onFocus={() => { editandoAlto.current = true; editandoMm.current = false; }}
                  onBlur={() => { editandoAlto.current = false;
                                  setAltoTexto(size.h > 0 ? size.h.toFixed(1) : ""); }}
                  onChange={(e) => altoExacto(e.target.value)} />
                <span>mm</span>
              </div>
            </div>
          )}
        </div>

        {/* ---- Borde (plegable, SIEMPRE visible: así se puede ajustar el
             borde antes de unir los trozos, sin abrir el editor) ---- */}
        <div className="fold">
          <button className="fold-head" data-testid={`fold-borde-${a.id}`}
                  onClick={() => setAbierto((o) => ({ ...o, borde: !o.borde }))}>
            <span className={`chev ${abierto.borde ? "open" : ""}`}>›</span>
            {t("Borde adicional")}
            <span className="fold-val" data-testid={`offset-${a.id}`}>
              {local.offset_mm.toFixed(1)} mm
            </span>
          </button>
          {abierto.borde && (
            <div className="fold-body">
              <div className="seg-row">
                <button className="quota-btn" data-testid={`offset-menos-${a.id}`}
                  onClick={() => ponerAdicional(local.offset_mm - 0.5)}>−</button>
                <input type="range" min={0} max={10} step={0.5}
                  data-testid={`offset-range-${a.id}`} value={local.offset_mm}
                  onChange={(e) => ponerAdicional(Number(e.target.value))} />
                <button className="quota-btn" data-testid={`offset-mas-${a.id}`}
                  onClick={() => ponerAdicional(local.offset_mm + 0.5)}>+</button>
              </div>
              <div className="hint">
                {t("Adicional: {a} mm · Global: {g} mm · Total: {t} mm", {
                  a: local.offset_mm.toFixed(1), g: globalMm.toFixed(1),
                  t: bordeEf.toFixed(1) })}
              </div>
              <div className="seg-row">
                {([["extender", t("Extender")], ["blanco", t("Blanco")],
                   ["color", t("Color")], ["unir_recto", t("Unir recto")],
                   ["unir_curvo", t("Unir curvo")]] as const).map(([modo, etiqueta]) => (
                  <button key={modo}
                    className={`seg ${(local.offset_modo || "") === modo ? "on" : ""}`}
                    data-testid={`offset-modo-${modo}-${a.id}`}
                    onClick={() => patch({ offset_modo: modo })}>
                    {etiqueta}
                  </button>
                ))}
                <input type="color" className="color-pick"
                  data-testid={`offset-color-${a.id}`}
                  value={local.offset_color || "#ffffff"}
                  title={t("Color del borde")}
                  onChange={(e) => patch({ offset_color: e.target.value,
                                           offset_modo: "color" })} />
              </div>
            </div>
          )}
        </div>

        {/* ---- Mini (plegable, solo si está activo) ---- */}
        {local.mini_enabled && (
          <div className="fold">
            <button className="fold-head" data-testid={`fold-mini-${a.id}`}
                    onClick={() => setAbierto((o) => ({ ...o, mini: !o.mini }))}>
              <span className={`chev ${abierto.mini ? "open" : ""}`}>›</span>
              {t("Opciones de mini")}
              <span className="fold-val" data-testid={`minis-${a.id}`}>
                ×{local.mini_quota} · {minisColocados}
              </span>
            </button>
            {abierto.mini && (
              <div className="fold-body">
                <div className="seg-row">
                  <span title={t("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)")}>
                    {t("Cuota")}
                  </span>
                  <button className="quota-btn" data-testid={`cuota-menos-${a.id}`}
                    onClick={() => patch({ mini_quota: Math.max(1,
                      Math.round((local.mini_quota - 0.5) * 2) / 2) })}>−</button>
                  <span className="quota-val" data-testid={`cuota-${a.id}`}>×{local.mini_quota}</span>
                  <button className="quota-btn" data-testid={`cuota-mas-${a.id}`}
                    onClick={() => patch({ mini_quota: Math.min(100,
                      Math.round((local.mini_quota + 0.5) * 2) / 2) })}>+</button>
                  <span className="mini-count">{t(" {n} minis", { n: minisColocados })}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {normalesColocados > 0 && (
          <div className="size-mm">{t("Colocadas: {n}", { n: normalesColocados })}</div>
        )}
        {local.warnings.length > 0 && (
          <div className="warn">
            <IconoAviso size={14} /> {local.warnings[0]}{" "}
            {local.warnings.some((w) => /blob|trozos sueltos/i.test(w)) && (
              <button className="warn-link" data-testid={`limpiar-aviso-${a.id}`}
                      onClick={() => onEditarContorno?.(a)}>
                {t("LIMPIA EL CONTORNO")}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function FilePanel({ assets, result, settings, onChange,
                                    saveSettings, onEditarContorno,
                                    onAntesDeCambiar, faseBordes = 0,
                                    verBordes = true,
                                    contornoModo = "final",
                                    destacado = "",
                                    seleccion = [],
                                    onSeleccion,
                                    onBulk }: Props) {
  const t = useT();
  const inputRef = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);
  const [bulkAbierto, setBulkAbierto] = useState(
    { tamano: false, borde: false, mini: false });

  const [importados, setImportados] = useState<Asset[] | null>(null);

  const uploadFiles = async (files: FileList | File[]) => {
    const subidos: Asset[] = [];
    for (const f of Array.from(files)) {
      try {
        const { blob, name } = await prepareFile(f);
        subidos.push(normalizeAsset(await api.upload(blob, name)));
      } catch (e) {
        console.error(e);
      }
    }
    await onChange();
    // varias a la vez  popup para adaptar los tamaños en bloque
    if (subidos.length > 1) setImportados(subidos);
  };

  const usarMinis = settings.usar_minis;
  const hayDemo = assets.some((a) => a.demo);

  return (
    <div className="file-panel">
      <div className="file-head">
        <h2>{t("Imágenes")}</h2>
        <span className="hint" style={{ fontSize: 10.5 }}
              title={t("Clic en una tarjeta (o en una pieza del visor) para seleccionarla; Ctrl/Cmd o Shift + clic para seleccionar VARIAS y editarlas a la vez.")}>
          {t("Ctrl/Shift+clic = varios")}
        </span>
        <span className="count-badge" data-testid="total-assets">{assets.length}</span>
      </div>

      <div
        className={`dropzone${over ? " over" : ""}`}
        data-testid="dropzone"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
        }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setOver(false);
          if (e.dataTransfer.files.length) uploadFiles(e.dataTransfer.files);
        }}
      >
        <span className="plus">+</span>
        <span>{t("Arrastra imágenes aquí")}<br />
          <small>png · jpg · webp · bmp · tiff · gif · psd · ai · svg</small>
        </span>
        <input
          ref={inputRef}
          type="file"
          multiple
          hidden
          accept="image/*,.psd,.ai,.svg"
          onChange={(e) => {
            if (e.target.files) uploadFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </div>

      {seleccion.length >= 2 && (() => {
        // valores de referencia (los del primer elemento seleccionado)
        const ref = assets.find((x) => x.id === seleccion[0]);
        const copias = ref?.copies ?? 1;
        const escala = Math.round(ref?.scale_pct ?? 100);
        const miniOn = ref?.mini_enabled ?? false;
        const rataOn = ref?.rata_enabled ?? false;
        const cuota = ref?.mini_quota ?? 1;
        const bordeMm = Number(ref?.offset_mm ?? 0);
        const bordeModo = ref?.offset_modo || "extender";
        const bordeColor = ref?.offset_color || "#ffffff";
        const ponerAncho = (mm: number) => {
          if (!(mm > 0)) return;
          onBulk?.(seleccion, (a) => {
            const base = Number(a.w_mm_base || a.w_mm || 0);
            if (!(base > 0)) return {};
            return { scale_pct: Math.max(10, Math.min(400,
              Math.round((mm / base) * 100))) };
          });
        };
        return (
        <div className="bulk-card asset-card" data-testid="bulk-card">
          <div className="info">
            <div className="name-row">
              <span className="name">
                {t("{n} elementos seleccionados", { n: seleccion.length })}
              </span>
              <button className="chip" data-testid="bulk-quitar"
                      onClick={() => onSeleccion?.(seleccion[0], false)}>
                {t("Quitar selección")}
              </button>
            </div>
            <div className="card-actions">
              <button className={`mini-toggle${miniOn ? " on" : ""}`}
                data-testid="bulk-mini" data-tip={t("Incluir como mini (rellena huecos)")}
                onClick={() => onBulk?.(seleccion, { mini_enabled: !miniOn })}>
                <IconoMini size={15} /> {t("Mini")}
              </button>
              {settings.rata_activo === true && (
                <button className={`mini-toggle rata${rataOn ? " on" : ""}`}
                  data-testid="bulk-rata"
                  data-tip={t("Modo rata: estos elementos colocan copias extra al imprimir")}
                  onClick={() => onBulk?.(seleccion, { rata_enabled: !rataOn })}>
                  🐀
                </button>
              )}
              <button className={`mini-toggle${bordeMm > 0 ? " on" : ""}`}
                data-testid="bulk-borde" data-tip={t("Borde adicional")}
                onClick={() => setBulkAbierto((o) => ({ ...o, borde: !o.borde }))}>
                <IconoBordes size={15} /> {t("Borde")}
              </button>
              <div className="copies-row" title={t("Copias")}>
                <button data-testid="bulk-copias-menos"
                  onClick={() => onBulk?.(seleccion,
                    { copies: Math.max(0, copias - 1) })}>−</button>
                <span className="n">{copias}</span>
                <button data-testid="bulk-copias-mas"
                  onClick={() => onBulk?.(seleccion, { copies: copias + 1 })}>+</button>
              </div>
            </div>

            {/* ---- Tamaño (plegable) ---- */}
            <div className="fold">
              <button className="fold-head" data-testid="bulk-fold-tamano"
                      onClick={() => setBulkAbierto((o) => ({ ...o, tamano: !o.tamano }))}>
                <span className={`chev ${bulkAbierto.tamano ? "open" : ""}`}>›</span>
                {t("Tamaño")}
                <span className="fold-val">{escala} %</span>
              </button>
              {bulkAbierto.tamano && (
                <div className="fold-body">
                  <div className="scale-row">
                    <span title={t("Escala de los elementos (100% = tamaño natural)")}>{t("Escala")}</span>
                    <input type="range" min={10} max={400} step={5}
                      data-testid="bulk-escala" value={escala}
                      onChange={(e) => onBulk?.(seleccion,
                                                { scale_pct: Number(e.target.value) })} />
                    <span className="scale-val">{escala}%</span>
                  </div>
                  <div className="exact-row">
                    <span title={t("Ancho exacto en milímetros (mantiene la proporción)")}>{t("Ancho")}</span>
                    <input type="number" min={0.5} max={2000} step={0.5}
                      key={seleccion.join(",")}
                      data-testid="bulk-ancho-mm"
                      defaultValue={ref ? ref.w_mm.toFixed(1) : ""}
                      onBlur={(e) => ponerAncho(Number(e.target.value))} />
                    <span>mm</span>
                  </div>
                </div>
              )}
            </div>

            {/* ---- Borde adicional (plegable) ---- */}
            <div className="fold">
              <button className="fold-head" data-testid="bulk-fold-borde"
                      onClick={() => setBulkAbierto((o) => ({ ...o, borde: !o.borde }))}>
                <span className={`chev ${bulkAbierto.borde ? "open" : ""}`}>›</span>
                {t("Borde adicional")}
                <span className="fold-val">{bordeMm.toFixed(1)} mm</span>
              </button>
              {bulkAbierto.borde && (
                <div className="fold-body">
                  <div className="seg-row">
                    <button className="quota-btn" data-testid="bulk-offset-menos"
                      onClick={() => onBulk?.(seleccion,
                        { offset_mm: Math.max(0, bordeMm - 0.5) })}>−</button>
                    <input type="range" min={0} max={10} step={0.5}
                      data-testid="bulk-offset-range" value={bordeMm}
                      onChange={(e) => onBulk?.(seleccion,
                                                { offset_mm: Number(e.target.value) })} />
                    <button className="quota-btn" data-testid="bulk-offset-mas"
                      onClick={() => onBulk?.(seleccion,
                        { offset_mm: bordeMm + 0.5 })}>+</button>
                  </div>
                  <div className="seg-row">
                    {([["extender", t("Extender")], ["blanco", t("Blanco")],
                       ["color", t("Color")], ["unir_recto", t("Unir recto")],
                       ["unir_curvo", t("Unir curvo")]] as const).map(([modo, etiqueta]) => (
                      <button key={modo}
                        className={`seg ${bordeModo === modo ? "on" : ""}`}
                        data-testid={`bulk-offset-modo-${modo}`}
                        onClick={() => onBulk?.(seleccion, { offset_modo: modo })}>
                        {etiqueta}
                      </button>
                    ))}
                    <input type="color" className="color-pick"
                      data-testid="bulk-offset-color" value={bordeColor}
                      title={t("Color del borde")}
                      onChange={(e) => onBulk?.(seleccion,
                        { offset_color: e.target.value, offset_modo: "color" })} />
                  </div>
                </div>
              )}
            </div>

            {/* ---- Opciones de mini (plegable, si el mini está activo) ---- */}
            {miniOn && (
              <div className="fold">
                <button className="fold-head" data-testid="bulk-fold-mini"
                        onClick={() => setBulkAbierto((o) => ({ ...o, mini: !o.mini }))}>
                  <span className={`chev ${bulkAbierto.mini ? "open" : ""}`}>›</span>
                  {t("Opciones de mini")}
                  <span className="fold-val">×{cuota}</span>
                </button>
                {bulkAbierto.mini && (
                  <div className="fold-body">
                    <div className="seg-row">
                      <span title={t("Cuántos minis quieres de estos elementos respecto a los demás")}>
                        {t("Cuota")}
                      </span>
                      <button className="quota-btn" data-testid="bulk-cuota-menos"
                        onClick={() => onBulk?.(seleccion, { mini_quota: Math.max(1,
                          Math.round((cuota - 0.5) * 2) / 2) })}>−</button>
                      <span className="quota-val">×{cuota}</span>
                      <button className="quota-btn" data-testid="bulk-cuota-mas"
                        onClick={() => onBulk?.(seleccion, { mini_quota: Math.min(100,
                          Math.round((cuota + 0.5) * 2) / 2) })}>+</button>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="hint">
              {t("Los cambios se aplican a TODOS los elementos seleccionados.")}
            </div>
          </div>
        </div>
        );
      })()}
      <div className="asset-list" data-testid="asset-list">
        {assets.map((a) => (
          <AssetCard key={a.id} a={a} result={result} onChange={onChange}
                     sel={seleccion.includes(a.id)} onSel={onSeleccion}
                     onEditarContorno={onEditarContorno}
                     onAntesDeCambiar={onAntesDeCambiar}
                     faseBordes={faseBordes}
                     verBordes={verBordes}
                     contornoModo={contornoModo}
                     destacado={destacado === a.id}
                     bordeGlobal={settings.offset_activo === true}
                     bordeGlobalMm={Number(settings.offset_mm) || 0}
                     rataActivo={settings.rata_activo === true} />
        ))}
      </div>

      {!usarMinis && (
        <div className="hint">
          {t("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.")}
        </div>
      )}

      <button
        className="btn-clear-all danger"
        data-testid="borrar-todo"
        disabled={assets.length === 0}
        onClick={() => api.clearAssets().then(onChange)}
      >
        {t("Descartar imágenes")}
      </button>

      <ImportDialog
        open={!!importados}
        assets={importados ?? []}
        onClose={() => setImportados(null)}
        onDone={async () => { await onChange(); }}
      />
    </div>
  );
}
