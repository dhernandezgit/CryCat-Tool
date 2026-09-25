import { useEffect, useState } from "react";
import { api } from "../api";
import { useT } from "../i18n";

interface Props {
  open: boolean;
  onClose: () => void;
  onPick: (path: string) => void;
  initial?: string;
}

interface Listing {
  path: string;
  parent: string;
  dirs: string[];
  home: string;
}

/**
 * Selector de carpeta del sistema mediante la API del backend
 * (`/api/fs/list`), que devuelve rutas absolutas reales.
 */
export default function FolderPicker({ open, onClose, onPick, initial }: Props) {
  const t = useT();
  const [state, setState] = useState<Listing | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) browse(initial || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const browse = async (path = "") => {
    setError("");
    try {
      setState(await api.fsList(path));
    } catch (e) {
      setError((e as Error).message);
    }
  };

  if (!open) return null;

  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} data-testid="folder-picker">
        <strong>{t("Elegir carpeta de guardado")}</strong>
        <div className="hint">{state?.path ?? "…"}</div>
        {error && <div className="warn"> {error}</div>}
        <div className="dir-list">
          {state && state.parent !== state.path && (
            <button onClick={() => browse(state.parent)}>..</button>
          )}
          {state?.dirs.map((d) => (
            <button
              key={d}
              onClick={() => browse(`${state.path}/${d}`.replace("//", "/"))}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="btn-row">
          <button
            className="primary"
            data-testid="elegir-carpeta-ok"
            disabled={!state}
            onClick={() => {
              if (state) onPick(state.path);
              onClose();
            }}
          >
            {t("Seleccionar esta carpeta")}
          </button>
          <button onClick={onClose}>{t("Cancelar")}</button>
        </div>
      </div>
    </div>
  );
}
