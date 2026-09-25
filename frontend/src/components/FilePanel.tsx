import { useEffect, useRef, useState } from "react";
import { api, assetSizeMm, normalizeAsset, prepareFile, type AppSettings, type Asset, type Result } from "../api";
import { useT } from "../i18n";

interface Props {
  assets: Asset[];
  result: Result | null;
  settings: AppSettings;
  onChange: () => Promise<void>;
  saveSettings: (p: Partial<AppSettings>) => Promise<void>;
  onEditarContorno?: (a: Asset) => void;
}

function AssetCard({ a, result, onChange, onEditarContorno }: {
  a: Asset; result: Result | null; onChange: () => Promise<void>;
  onEditarContorno?: (a: Asset) => void;
}) {
  const t = useT();
  const [local, setLocal] = useState<Asset>(() => normalizeAsset(a));
  useEffect(() => setLocal(normalizeAsset(a)), [a]);
  const reemplazarRef = useRef<HTMLInputElement>(null);
  const size = assetSizeMm(local);
  const minisColocados =
    result?.placements.filter((p) => p.asset_id === a.id && p.mini).length ?? 0;
  const normalesColocados =
    result?.placements.filter((p) => p.asset_id === a.id && !p.mini).length ?? 0;

  const patch = async (p: Partial<Asset>) => {
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
            📂
          </button>
          <button
            className="icon-btn"
            data-testid={`reemplazar-${a.id}`}
            title={t("Reemplazar por otro archivo de la carpeta")}
            onClick={() => reemplazarRef.current?.click()}
          >
            ⟳
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
            ✧
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
            {local.bg_removed ? "↺" : "✂"}
          </button>
          <button
            className="icon-btn danger"
            title={t("Eliminar imagen")}
            onClick={() => api.deleteAsset(a.id).then(onChange)}
          >
            ✕
          </button>
        </div>
        <div className="copies-row">
          <button data-testid={`resta-${a.id}`} onClick={() => patch({ copies: local.copies - 1 })}>−</button>
          <span className="n" data-testid={`copias-${a.id}`}>{local.copies}</span>
          <button data-testid={`suma-${a.id}`} onClick={() => patch({ copies: local.copies + 1 })}>+</button>
          <span className="size-mm" data-testid={`tamano-${a.id}`}>
            {size.w.toFixed(1)}×{size.h.toFixed(1)} mm
          </span>
        </div>
        <div className="scale-row">
          <span title={t("Escala del elemento (100% = tamaño natural)")}>{t("Escala")}</span>
          <input
            type="range"
            min={10}
            max={400}
            step={5}
            value={local.scale_pct}
            data-testid={`escala-${a.id}`}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (Number.isFinite(v)) patch({ scale_pct: v });
            }}
          />
          <span className="scale-val">{Math.round(local.scale_pct)}%</span>
        </div>
        {normalesColocados > 0 && (
          <div className="size-mm">{t("Colocadas: {n}", { n: normalesColocados })}</div>
        )}
        {local.warnings.length > 0 && (
          <div className="warn">
            ⚠ {local.warnings[0]}{" "}
            {/blob|trozos sueltos/i.test(local.warnings[0]) && (
              <button
                className="warn-link"
                data-testid={`limpiar-aviso-${a.id}`}
                onClick={() => onEditarContorno?.(a)}
              >
                {t("limpiar contorno")}
              </button>
            )}
          </div>
        )}
        <label className="mini-row">
          <input
            type="checkbox"
            data-testid={`mini-${a.id}`}
            checked={local.mini_enabled}
            onChange={(e) => patch({ mini_enabled: e.target.checked })}
          />
          {t("Incluir como mini")}
          {local.mini_enabled && (
            <>
              <span title={t("Proporción de minis de este elemento respecto a los demás (no es el tamaño)")}>
                {t("Cuota")}
              </span>
              <input
                type="range"
                min={1}
                max={100}
                value={local.mini_pct}
                onChange={(e) => patch({ mini_pct: Number(e.target.value) })}
              />
              <span>{local.mini_pct}%</span>
              <span className="mini-count" data-testid={`minis-${a.id}`}>
                {t("→ {n} minis", { n: minisColocados })}
              </span>
            </>
          )}
        </label>
      </div>
    </div>
  );
}

export default function FilePanel({ assets, result, settings, onChange, saveSettings, onEditarContorno }: Props) {
  const t = useT();
  const inputRef = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);

  const uploadFiles = async (files: FileList | File[]) => {
    for (const f of Array.from(files)) {
      try {
        const { blob, name } = await prepareFile(f);
        await api.upload(blob, name);
      } catch (e) {
        console.error(e);
      }
    }
    await onChange();
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
                     onEditarContorno={onEditarContorno} />
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
    </div>
  );
}
