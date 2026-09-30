import { useEffect, useMemo, useState } from "react";
import { api, type Asset } from "../api";
import { useT } from "../i18n";

/** Popup al importar VARIAS imágenes a la vez: adapta tamaños en bloque.

 *  · izquierda: cómo quedan sobre la hoja (a escala real)
 *  · centro: cuadrícula seleccionable, con los PPP originales de cada imagen
 *  · derecha: O escala O tamaño fijo (nunca los dos a la vez)
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
  const [modo, setModo] = useState<"escala" | "tamano">("escala");
  const [escala, setEscala] = useState(100);
  const [tamano, setTamano] = useState(50);
  const [medir, setMedir] = useState<"mayor" | "menor" | "circulo">("mayor");
  const [aviso, setAviso] = useState("");

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
  const todos = () =>
    setDeseleccionados(
      deseleccionados.size === ids.length ? new Set() : new Set(ids));

  const referencia = (a: Asset) => {
    const w = a.w_mm_base || 0, h = a.h_mm_base || 0;
    if (medir === "mayor") return Math.max(w, h);
    if (medir === "menor") return Math.min(w, h);
    return 2 * Math.sqrt(Math.max(0, w * h) / Math.PI);   // círculo equivalente
  };

  /** Escala (0-1) que se aplicaría a un elemento con los ajustes actuales. */
  const escalaDe = (a: Asset) => {
    if (modo === "tamano") {
      const ref = referencia(a);
      if (ref > 0) return Math.min(10, Math.max(0.05, tamano / ref));
    }
    return Math.min(10, Math.max(0.05, escala / 100));
  };

  const tamanoDe = (a: Asset) => {
    const f = escalaDe(a);
    return { w: (a.w_mm_base || 0) * f, h: (a.h_mm_base || 0) * f };
  };

  /** Aplica el tamaño actual a los seleccionados SIN cerrar el diálogo:
   *  así se puede seguir ajustando y ver cómo queda antes de «Siguiente». */
  const aplicarSolo = async () => {
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

  const aplicar = async () => {
    await aplicarSolo();
    onClose();
  };

  if (!open || !assets.length) return null;

  return (
    <div className="modal-back" data-testid="import-dialog">
      <div className="modal import-modal">
        <h3>{t("Adaptar los tamaños importados")}</h3>
        <div className="hint">
          {t("El tamaño inicial sale de los PPP reales de cada archivo " +
             "(si no trae datos, se supone 300). Marca los que quieras " +
             "cambiar y pulsa Aplicar cambios.")}
        </div>
        <div className="import-grid">
          {/* izquierda: a escala sobre la hoja */}
          <div>
            <div className="hint">{t("Cómo quedan sobre la hoja")}</div>
            <div className="a4-preview" data-testid="import-preview">
              {assets.map((a) => {
                const tm = tamanoDe(a);
                const w = Math.min(98, (tm.w / 210) * 100);
                return (
                  <div key={a.id} className="a4-item"
                       data-testid={`import-preview-${a.id}`}
                       style={{ width: `${w}%`, maxWidth: `${w}%`,
                                aspectRatio: `${tm.w || 1} / ${tm.h || 1}`,
                                opacity: seleccionado(a.id) ? 1 : 0.3 }}
                       title={`${a.name} · ${tm.w.toFixed(1)}×${tm.h.toFixed(1)} mm`}>
                    <img src={api.previewUrl(a.id)} alt="" />
                  </div>
                );
              })}
            </div>
            <div className="modal-botones" style={{ marginTop: 8 }}>
              <button className="primary" data-testid="import-aplicar-izq"
                      onClick={aplicarSolo}>
                {t("Aplicar tamaño")}
              </button>
            </div>
            {aviso && <div className="hint" data-testid="import-aviso-izq">
              {aviso}</div>}
          </div>

          {/* centro: cuadrícula seleccionable con PPP y tamaño */}
          <div>
            <div className="hint row">
              <button type="button" className="mini-link"
                      data-testid="import-todos" onClick={todos}>
                {deseleccionados.size === ids.length
                  ? t("Seleccionar todos")
                  : t("Quitar selección")}
              </button>
              <span>— {ids.length - deseleccionados.size}/{ids.length}</span>
            </div>
            <div className="import-lista" data-testid="import-lista">
              {assets.map((a) => {
                const tm = tamanoDe(a);
                return (
                  <button
                    key={a.id}
                    type="button"
                    data-testid={`import-item-${a.id}`}
                    className={seleccionado(a.id) ? "sel" : ""}
                    onClick={() => alternar(a.id)}
                    title={a.name}
                  >
                    <img src={api.previewUrl(a.id)} alt={a.name} />
                    <span className="import-nombre">{a.name}</span>
                    <span className="import-datos">
                      {Math.round(a.dpi_origen || 0)} ppp ·{" "}
                      {tm.w.toFixed(1)}×{tm.h.toFixed(1)} mm
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* derecha: O escala O tamaño */}
          <div className="import-ajustes">
            <div className="seg">
              <button
                type="button"
                data-testid="import-modo-escala"
                className={modo === "escala" ? "on" : ""}
                onClick={() => setModo("escala")}
              >
                {t("Escala (%)")}
              </button>
              <button
                type="button"
                data-testid="import-modo-tamano"
                className={modo === "tamano" ? "on" : ""}
                onClick={() => setModo("tamano")}
              >
                {t("Tamaño fijo (mm)")}
              </button>
            </div>

            {modo === "escala" ? (
              <label>
                {t("Escala de los seleccionados")}
                <span className="row">
                  <input type="number" min={5} max={1000} step={5}
                         data-testid="import-escala" value={String(escala)}
                         onChange={(e) => setEscala(Number(e.target.value))} />
                  <span>%</span>
                </span>
              </label>
            ) : (
              <>
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
                  <select data-testid="import-modo" value={medir}
                          onChange={(e) =>
                            setMedir(e.target.value as "mayor" | "menor" | "circulo")}>
                    <option value="mayor">{t("Lado mayor")}</option>
                    <option value="menor">{t("Lado menor")}</option>
                    <option value="circulo">{t("Círculo equivalente (aprox.)")}</option>
                  </select>
                </label>
              </>
            )}
            <div className="hint">
              {t("La previsualización usa la hoja y los ajustes actuales.")}
            </div>
            {aviso && <div className="hint" data-testid="import-aviso">{aviso}</div>}
          </div>
        </div>
        <div className="modal-botones">
          <button data-testid="import-siguiente" onClick={onClose}>
            {t("Siguiente")} ▸
          </button>
          <button className="primary" data-testid="import-conservar"
                  onClick={aplicar}>
            {t("Aplicar cambios")}
          </button>
        </div>
      </div>
    </div>
  );
}
