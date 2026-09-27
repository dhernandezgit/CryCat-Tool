/** Selector único de perfiles: de fábrica y guardados.

 * Vive arriba del panel, junto a los botones rápidos (minis / auto / rotación),
 * que es donde de verdad se usa. Guardar el perfil actual es un clic.
 */
import { useEffect, useState } from "react";
import { api, type AppSettings } from "../api";
import { useT } from "../i18n";
import { IconoGuardar, IconoBorrar, IconoAjustar } from "./iconos";

const NOMBRE_PRESET: Record<string, string> = {
  chapa: "Chapa", pegatina: "Pegatina", hoja: "Hoja de pegatinas",
  iman: "Imán", "pegatina-grande": "Pegatina grande", vinilo: "Vinilo",
};

interface Props {
  saveSettings: (p: Partial<AppSettings>) => Promise<void>;
}

export default function Perfiles({ saveSettings }: Props) {
  const t = useT();
  const [fabrica, setFabrica] = useState<Record<string, Record<string, unknown>>>(
    {},
  );
  const [guardados, setGuardados] = useState<string[]>([]);
  const [guardando, setGuardando] = useState(false);
  const [gestion, setGestion] = useState(false);
  const [nombre, setNombre] = useState("");
  const [aviso, setAviso] = useState("");

  const recargar = () =>
    api.presets()
      .then((r) => setGuardados(Array.isArray(r.names) ? r.names : []))
      .catch(() => undefined);

  useEffect(() => {
    api.factoryPresets()
      .then((d) => setFabrica(d.presets ?? {}))
      .catch(() => undefined);
    recargar();
  }, []);

  const aplicar = async (valor: string) => {
    if (!valor) return;
    try {
      if (valor.startsWith("fabrica:")) {
        const clave = valor.slice(8);
        await saveSettings(fabrica[clave] as Partial<AppSettings>);
        setAviso(t("Perfil «{n}» aplicado", {
          n: t(NOMBRE_PRESET[clave] ?? clave),
        }));
      } else {
        const n = valor.slice(9);
        const r = await api.loadPreset(n);
        await saveSettings(r.settings as Partial<AppSettings>);
        setAviso(t("Perfil «{n}» cargado", { n }));
      }
    } catch {
      setAviso(t("No se pudo aplicar el perfil"));
    }
  };

  const guardar = async () => {
    const n = nombre.trim();
    if (!n) return;
    try {
      const r = await api.savePreset(n);
      setGuardados(Array.isArray(r.names) ? r.names : []);
      setNombre("");
      setGuardando(false);
      setAviso(t("Perfil «{n}» guardado", { n }));
    } catch {
      setAviso(t("No se pudo guardar el perfil"));
    }
  };

  const borrar = async (n: string) => {
    try {
      setGuardados((await api.deletePreset(n)).names ?? []);
      setAviso(t("Perfil «{n}» borrado", { n }));
    } catch {
      setAviso(t("No se pudo borrar el perfil"));
    }
  };

  return (
    <div className="perfiles-barra">
      <div className="row">
        <select
          className="perfil-select"
          data-testid="perfil-select"
          value=""
          title={t("Aplicar un perfil de fábrica o uno guardado")}
          onChange={(e) => aplicar(e.target.value)}
        >
          <option value="">{t("Perfil…")}</option>
          <optgroup label={t("De fábrica")}>
            {Object.keys(fabrica).map((k) => (
              <option key={k} value={`fabrica:${k}`}>
                {t(NOMBRE_PRESET[k] ?? k)}
              </option>
            ))}
          </optgroup>
          {guardados.length > 0 && (
            <optgroup label={t("Guardados")}>
              {guardados.map((n) => (
                <option key={n} value={`guardado:${n}`}>{n}</option>
              ))}
            </optgroup>
          )}
        </select>
        {!guardando && (
          <button
            className="chip"
            data-testid="perfil-guardar"
            title={t("Guardar los ajustes actuales como perfil")}
            onClick={() => setGuardando(true)}
          >
            <IconoGuardar size={15} /> {t("Guardar perfil")}
          </button>
        )}
        {guardados.length > 0 && (
          <button
            className={`chip${gestion ? " on" : ""}`}
            data-testid="perfil-gestion"
            title={t("Gestionar los perfiles guardados")}
            onClick={() => setGestion(!gestion)}
          >
            <IconoAjustar size={15} />
          </button>
        )}
      </div>

      {guardando && (
        <div className="row">
          <input
            autoFocus
            type="text"
            data-testid="perfil-nombre-nuevo"
            placeholder={t("Nombre del perfil (p. ej. «Pikmin A4»)")}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") guardar();
              if (e.key === "Escape") setGuardando(false);
            }}
          />
          <button data-testid="perfil-guardar-ok" onClick={guardar}>
            {t("Guardar")}
          </button>
          <button onClick={() => setGuardando(false)}>{t("Cancelar")}</button>
        </div>
      )}

      {gestion && guardados.length > 0 && (
        <div className="perfil-lista" data-testid="perfil-lista">
          {guardados.map((n) => (
            <div className="row" key={n}>
              <span className="perfil-nombre" title={n}>{n}</span>
              <button data-testid={`cargar-${n}`} onClick={() => aplicar(`guardado:${n}`)}>
                {t("Cargar")}
              </button>
              <button
                className="icon-btn danger"
                title={t("Borrar perfil")}
                data-testid={`borrar-${n}`}
                onClick={() => borrar(n)}
              >
                <IconoBorrar size={15} />
              </button>
            </div>
          ))}
        </div>
      )}

      {aviso && <div className="hint">{aviso}</div>}
    </div>
  );
}
