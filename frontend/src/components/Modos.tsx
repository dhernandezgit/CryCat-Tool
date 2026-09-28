/** Selector de MODOS de trabajo (sustituye a los perfiles).

 *  Tres modos grandes — chapas (izquierda), pegatinas (centro, el principal)
 *  y carteles (derecha) — más TRES huecos personalizados, bajos, con nombre
 *  editable, donde guardar los ajustes actuales tantas veces como se quiera.
 */
import { useEffect, useState } from "react";
import { api, type AppSettings, type ModoSlot } from "../api";
import { useT } from "../i18n";
import { IconoChapa, IconoPegatina, IconoCartel, IconoGuardar,
         IconoBorrar, IconoAjustar } from "./iconos";

const MODOS: { clave: string; nombre: string; desc: string;
               Icono: (p: { size?: number }) => JSX.Element;
               forma: string }[] = [
  { clave: "chapas", nombre: "Chapas", desc: "Redondas, sin girar",
    Icono: IconoChapa, forma: "redondas" },
  { clave: "pegatinas", nombre: "Pegatinas", desc: "Siluetas, cualquier ángulo",
    Icono: IconoPegatina, forma: "siluetas" },
  { clave: "carteles", nombre: "Carteles", desc: "Rectángulos, giros de 90°",
    Icono: IconoCartel, forma: "rectangulos" },
];

interface Props {
  settings: AppSettings;
  saveSettings: (p: Partial<AppSettings>) => Promise<void>;
}

export default function Modos({ settings, saveSettings }: Props) {
  const t = useT();
  const [fabrica, setFabrica] = useState<Record<string, Partial<AppSettings>>>(
    {},
  );
  const [slots, setSlots] = useState<ModoSlot[]>([]);
  const [editando, setEditando] = useState<number | null>(null);
  const [nombre, setNombre] = useState("");
  const [aviso, setAviso] = useState("");

  useEffect(() => {
    api.modos()
      .then((d) => {
        setFabrica(d.modos ?? {});
        setSlots(d.slots ?? []);
      })
      .catch(() => undefined);
  }, []);

  const forma = settings.modo_forma ?? "siluetas";
  const activo = MODOS.find((m) => m.forma === forma)?.clave ?? "pegatinas";

  const aplicarModo = async (clave: string) => {
    const ajustes = fabrica[clave];
    if (!ajustes) return;
    await saveSettings(ajustes);
    setAviso(t("Modo «{n}» aplicado", {
      n: t(MODOS.find((m) => m.clave === clave)?.nombre ?? clave),
    }));
  };

  const cargarSlot = async (i: number) => {
    const s = slots[i];
    if (!s?.ajustes) return;
    await saveSettings(s.ajustes);
    setAviso(t("Modo «{n}» aplicado", { n: s.nombre }));
  };

  const guardarSlot = async (i: number) => {
    const n = editando === i ? nombre : slots[i]?.nombre ?? "";
    try {
      const r = await api.saveModo(i, n);
      setSlots(r.slots);
      setEditando(null);
      setAviso(t("Ajustes guardados en «{n}»", { n: r.slots[i].nombre }));
    } catch {
      setAviso(t("No se pudo guardar el modo"));
    }
  };

  const renombrar = async (i: number, n: string) => {
    const limpio = n.trim();
    setEditando(null);
    if (!limpio || limpio === slots[i]?.nombre) return;
    try {
      setSlots((await api.renameModo(i, limpio)).slots);
    } catch {
      setAviso(t("No se pudo cambiar el nombre"));
    }
  };

  const borrarSlot = async (i: number) => {
    try {
      setSlots((await api.deleteModo(i)).slots);
    } catch {
      setAviso(t("No se pudo vaciar el hueco"));
    }
  };

  return (
    <div className="modos" data-testid="modos">
      <div className="modos-grandes">
        {MODOS.map((m) => (
          <button
            key={m.clave}
            type="button"
            data-testid={`modo-${m.clave}`}
            className={`modo-btn${m.clave === "pegatinas" ? " principal" : ""}${
              activo === m.clave ? " on" : ""}`}
            title={t("Modo {n}: {d}", { n: t(m.nombre), d: t(m.desc) })}
            onClick={() => aplicarModo(m.clave)}
          >
            <m.Icono size={m.clave === "pegatinas" ? 26 : 21} />
            <b>{t(m.nombre)}</b>
            <span>{t(m.desc)}</span>
          </button>
        ))}
      </div>

      <div className="modos-slots" data-testid="modos-slots">
        {slots.map((s, i) => (
          <div key={i}
               className={`modo-slot${s.ajustes ? " lleno" : ""}`}
               data-testid={`slot-${i}`}>
            {editando === i ? (
              <input
                autoFocus
                type="text"
                className="slot-input"
                data-testid={`slot-${i}-nombre`}
                value={nombre}
                maxLength={40}
                placeholder={t("Nombre del modo")}
                onChange={(e) => setNombre(e.target.value)}
                onBlur={() => renombrar(i, nombre)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") renombrar(i, nombre);
                  if (e.key === "Escape") setEditando(null);
                }}
              />
            ) : (
              <button
                type="button"
                className="slot-nombre"
                data-testid={`slot-${i}-editar`}
                title={t("Cambiar el nombre de este modo")}
                onClick={() => { setEditando(i); setNombre(s.nombre); }}
              >
                {s.nombre}
              </button>
            )}
            {s.ajustes ? (
              <>
                <button
                  type="button"
                  className="slot-btn"
                  data-testid={`slot-${i}-cargar`}
                  title={t("Aplicar este modo")}
                  onClick={() => cargarSlot(i)}
                >
                  <IconoAjustar size={14} />
                </button>
                <button
                  type="button"
                  className="slot-btn"
                  data-testid={`slot-${i}-guardar`}
                  title={t("Sobrescribir con los ajustes actuales")}
                  onClick={() => guardarSlot(i)}
                >
                  <IconoGuardar size={14} />
                </button>
                <button
                  type="button"
                  className="slot-btn danger"
                  data-testid={`slot-${i}-borrar`}
                  title={t("Vaciar este hueco")}
                  onClick={() => borrarSlot(i)}
                >
                  <IconoBorrar size={14} />
                </button>
              </>
            ) : (
              <button
                type="button"
                className="slot-btn guardar"
                data-testid={`slot-${i}-guardar`}
                title={t("Guardar aquí los ajustes actuales")}
                onClick={() => guardarSlot(i)}
              >
                <IconoGuardar size={14} />
              </button>
            )}
          </div>
        ))}
      </div>

      {aviso && <div className="hint" data-testid="modos-aviso">{aviso}</div>}
    </div>
  );
}
