import { useEffect, useRef, useState } from "react";
import { api, assetSizeMm, normalizeAsset, prepareFile, type AppSettings, type Asset, type Result } from "../api";
import { useT } from "../i18n";
import { IconoCarpeta, IconoReemplazar, IconoLimpiar, IconoFondo,
         IconoDeshacerFondo, IconoBorrar, IconoMini, IconoAviso } from "./iconos";
import ImportDialog from "./ImportDialog";

interface Props {
  assets: Asset[];
  result: Result | null;
  settings: AppSettings;
  onChange: () => Promise<void>;
  saveSettings: (p: Partial<AppSettings>) => Promise<void>;
  onEditarContorno?: (a: Asset) => void;
  onAntesDeCambiar?: () => void;
}

function AssetCard({ a, result, onChange, onEditarContorno,
                     onAntesDeCambiar }: {
  a: Asset; result: Result | null; onChange: () => Promise<void>;
  onEditarContorno?: (a: Asset) => void;
  onAntesDeCambiar?: () => void;
}) {
  const t = useT();
  const [local, setLocal] = useState<Asset>(() => normalizeAsset(a));
  useEffect(() => setLocal(normalizeAsset(a)), [a]);
  const reemplazarRef = useRef<HTMLInputElement>(null);
  const size = assetSizeMm(local);

  // tamaño exacto en mm (se guarda como escala para mantener una sola fuente)
  const [mmTexto, setMmTexto] = useState("");
  const editandoMm = useRef(false);
  const [altoTexto, setAltoTexto] = useState("");
  const editandoAlto = useRef(false);
  const [abierto, setAbierto] = useState({ tamano: false, borde: false, mini: false });
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
    patch({ scale_pct: (v / anchoBase) * 100 });
  };
  const altoExacto = (texto: string) => {
    setAltoTexto(texto);
    const v = Number(texto.replace(",", "."));
    if (!Number.isFinite(v) || v <= 0 || altoBase <= 0) return;
    patch({ scale_pct: (v / altoBase) * 100 });
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
    <div className="asset-card" data-testid="asset-card">
      <div className="preview">
        <img src={api.previewUrl(a.id)} alt={a.name} loading="lazy" />
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
          <div className="copies-row" title={t("Copias")}>
            <button data-testid={`resta-${a.id}`} onClick={() => patch({ copies: local.copies - 1 })}>−</button>
            <span className="n" data-testid={`copias-${a.id}`}>{local.copies}</span>
            <button data-testid={`suma-${a.id}`} onClick={() => patch({ copies: local.copies + 1 })}>+</button>
          </div>
          <button
            className={`mini-toggle ${local.mini_enabled ? "on" : ""}`}
            data-testid={`mini-${a.id}`}
            title={t("Incluir como mini (rellena huecos)")}
            onClick={() => patch({ mini_enabled: !local.mini_enabled })}
          >
            <IconoMini size={15} /> {t("Mini")}
          </button>
        </div>

        {/* ---- Tamaño (plegable) ---- */}
        <div className="fold">
          <button className="fold-head" data-testid={`fold-tamano-${a.id}`}
                  onClick={() => setAbierto((o) => ({ ...o, tamano: !o.tamano }))}>
            <span className={`chev ${abierto.tamano ? "open" : ""}`}>›</span>
            {t("Tamaño")}
            <span className="fold-val" data-testid={`tamano-${a.id}`}>
              {size.w.toFixed(1)}×{size.h.toFixed(1)} mm · {Math.round(local.scale_pct)}%
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

        {/* ---- Borde (plegable) ---- */}
        <div className="fold">
          <button className="fold-head" data-testid={`fold-borde-${a.id}`}
                  onClick={() => setAbierto((o) => ({ ...o, borde: !o.borde }))}>
            <span className={`chev ${abierto.borde ? "open" : ""}`}>›</span>
            {t("Borde")}
            <span className="fold-val" data-testid={`offset-${a.id}`}>
              {local.offset_mm.toFixed(1)} mm{local.offset_mm <= 0 ? ` · ${t("global")}` : ""}
            </span>
          </button>
          {abierto.borde && (
            <div className="fold-body">
              <div className="seg-row">
                <button className="quota-btn" data-testid={`offset-menos-${a.id}`}
                  onClick={() => patch({ offset_mm: Math.max(0,
                    Math.round((local.offset_mm - 0.5) * 2) / 2) })}>−</button>
                <input type="range" min={0} max={10} step={0.5}
                  data-testid={`offset-range-${a.id}`} value={local.offset_mm}
                  onChange={(e) => patch({ offset_mm: Number(e.target.value) })} />
                <button className="quota-btn" data-testid={`offset-mas-${a.id}`}
                  onClick={() => patch({ offset_mm: Math.min(20,
                    Math.round((local.offset_mm + 0.5) * 2) / 2) })}>+</button>
              </div>
              <div className="seg-row">
                {([["extender", t("Extender")], ["blanco", t("Blanco")],
                   ["color", t("Color")]] as const).map(([modo, etiqueta]) => (
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
            {/blob|trozos sueltos/i.test(local.warnings[0]) && (
              <button className="warn-link" data-testid={`limpiar-aviso-${a.id}`}
                      onClick={() => onEditarContorno?.(a)}>
                {t("limpiar contorno")}
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
                                    onAntesDeCambiar }: Props) {
  const t = useT();
  const inputRef = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);

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

  return (
    <div className="file-panel">
      <div className="file-head">
        <h2>{t("Imágenes")}</h2>
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

      <div className="asset-list" data-testid="asset-list">
        {assets.map((a) => (
          <AssetCard key={a.id} a={a} result={result} onChange={onChange}
                     onEditarContorno={onEditarContorno}
                     onAntesDeCambiar={onAntesDeCambiar} />
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
