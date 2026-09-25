import { useEffect, useMemo, useState } from "react";
import { api, type Asset } from "../api";
import { useT } from "../i18n";

/** Popup al importar VARIAS imágenes a la vez: adapta tamaños en bloque.
 *
 *  · izquierda: cómo quedan los elementos a escala sobre un A4
 *  · centro: cuadrícula 3×3 grande y scrolleable (todos seleccionados)
 *  · derecha: escala o tamaño (lado mayor / menor / círculo equivalente)
 */
export default function ImportDialog({ open, assets, onClose, onDone }: {
  open: boolean;
  assets: Asset[];
  onClose: () => void;
  onDone: () => void | Promise<void>;
}) {
  const t = useT();
  const ids = useMemo(() => assets.map((a) => a.id), [assets]);
  const [deseleccionados, setDeseleccionados] = useState<Set<string>>(new Set());
  const [escala, setEscala] = useState(100);
  const [tamano, setTamano] = useState(50);
  const [modo, setModo] = useState<"mayor" | "menor" | "circulo">("mayor");
  const [aviso, setAviso] = useState("");

  // al abrir con otra tanda, todos seleccionados y ajustes por defecto
  useEffect(() => {
    if (open) {
      setDeseleccionados(new Set());
      setAviso("");
    }
  }, [open, ids.join(",")]);

  const seleccionado = (id: string) => !deseleccionados.has(id);
  const alternar = (id: string) =>
    setDeseleccionados((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id); else n.add(id);
      return n;
    });

  const referencia = (a: Asset) => {
    const w = a.w_mm_base || 0, h = a.h_mm_base || 0;
    if (modo === "mayor") return Math.max(w, h);
    if (modo === "menor") return Math.min(w, h);
    return 2 * Math.sqrt(Math.max(0, w * h) / Math.PI);   // círculo equivalente
  };

  /** Escala (0-1) que se aplicaría a un elemento con los ajustes actuales. */
  const escalaDe = (a: Asset) => {
    if (tamano > 0) {
      const ref = referencia(a);
      if (ref > 0) return Math.min(10, Math.max(0.05, tamano / ref));
    }
    return Math.min(10, Math.max(0.05, escala / 100));
  };

  /** Tamaño (mm) que tendría ahora mismo, para el preview en vivo. */
  const tamanoDe = (a: Asset) => {
    const f = escalaDe(a);
    return { w: (a.w_mm_base || 0) * f, h: (a.h_mm_base || 0) * f };
  };

  const aplicar = async () => {
    let n = 0;
    for (const a of assets) {
      if (!seleccionado(a.id)) continue;
      const pct = escalaDe(a) * 100;
      await api.patchAsset(a.id, {
        scale_pct: Math.min(1000, Math.max(5, Math.round(pct * 10) / 10)),
      });
      n += 1;
    }
    await onDone();
    setAviso(t("{n} elementos ajustados ", { n }));
  };

  if (!open || !assets.length) return null;

  return (
    <div className="modal-back" data-testid="import-dialog">
      <div className="modal import-modal">
        <h3>{t("Adaptar los tamaños importados")}</h3>
        <div className="import-grid">
          {/* izquierda: a escala sobre un A4 */}
          <div>
            <div className="hint">{t("Cómo quedan sobre un A4")}</div>
            <div className="a4-preview" data-testid="import-preview">
              {assets.map((a) => {
                const t = tamanoDe(a);
                const w = Math.min(98, (t.w / 210) * 100);
                return (
                  <div key={a.id} className="a4-item"
                       data-testid={`import-preview-${a.id}`}
                       style={{ width: `${w}%`, maxWidth: `${w}%`,
                                aspectRatio: `${t.w || 1} / ${t.h || 1}`,
                                opacity: seleccionado(a.id) ? 1 : 0.3 }}
                       title={`${a.name} · ${t.w.toFixed(1)}×${t.h.toFixed(1)} mm`}>
                    <img src={api.previewUrl(a.id)} alt="" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* centro: cuadrícula 3x3 seleccionable */}
          <div>
            <div className="hint">
              {t("Selecciona los que quieras (todos por defecto)")} —{" "}
              {ids.length - deseleccionados.size}/{ids.length}
            </div>
            <div className="import-lista" data-testid="import-lista">
              {assets.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  data-testid={`import-item-${a.id}`}
                  className={seleccionado(a.id) ? "sel" : ""}
                  onClick={() => alternar(a.id)}
                  title={a.name}
                >
                  <img src={api.previewUrl(a.id)} alt={a.name} />
                  <span>{a.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* derecha: ajustes */}
          <div className="import-ajustes">
            <label>
              {t("Escala de los seleccionados")}
              <span className="row">
                <input type="number" min={5} max={1000} step={5}
                       data-testid="import-escala" value={String(escala)}
                       onChange={(e) => setEscala(Number(e.target.value))} />
                <span>%</span>
              </span>
            </label>
            <label>
              {t("Tamaño del lado")}
              <span className="row">
                <input type="number" min={5} max={2000} step={1}
                       data-testid="import-tamano" value={String(tamano)}
                       onChange={(e) => setTamano(Number(e.target.value))} />
                <span>mm</span>
              </span>
            </label>
            <label>
              {t("Medir el tamaño por")}
              <select data-testid="import-modo" value={modo}
                      onChange={(e) => setModo(e.target.value as "mayor")}>
                <option value="mayor">{t("Lado mayor")}</option>
                <option value="menor">{t("Lado menor")}</option>
                <option value="circulo">{t("Círculo equivalente (aprox.)")}</option>
              </select>
            </label>
            <div className="hint">
              {t("Los cambios se previsualizan en el A4 y se aplican al conservarlos.")}
            </div>
            {aviso && <div className="hint" data-testid="import-aviso">{aviso}</div>}
          </div>
        </div>
        <div className="modal-botones">
          <button data-testid="import-original" onClick={() => {
            // deja todos los elementos a su tamaño original (100 %)
            void (async () => {
              for (const a of assets) {
                await api.patchAsset(a.id, { scale_pct: 100 });
              }
              await onDone();
              onClose();
            })();
          }}>
            {t("Importar con tamaño original")}
          </button>
          <button data-testid="import-conservar" onClick={aplicar}>
             {t("Conservar cambios")}
          </button>
        </div>
      </div>
    </div>
  );
}
