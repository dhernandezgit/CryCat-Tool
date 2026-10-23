/** Selector de MODO de empaquetado: Silueta (por defecto) o Rectángulos.

 *  · Silueta     → usa la forma real de cada pieza y cualquier ángulo.
 *  · Rectángulos → empaqueta por CAJAS (exacto y hasta 100× más rápido para
 *                  piezas rectangulares, con giros de 90°).
 */
import { useEffect, useState } from "react";
import { api, type AppSettings } from "../api";
import { useT } from "../i18n";
import { IconoPegatina, IconoCartel, IconoRecalcular } from "./iconos";

const MODOS: { clave: string; nombre: string; desc: string;
               Icono: (p: { size?: number }) => JSX.Element;
               forma: string }[] = [
  { clave: "silueta", nombre: "Silueta", desc: "Forma real, cualquier ángulo",
    Icono: IconoPegatina, forma: "siluetas" },
  { clave: "rectangulos", nombre: "Rectángulos",
    desc: "Por cajas, giros de 90° · ¡rápido!",
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
  const [aviso, setAviso] = useState("");

  useEffect(() => {
    api.modos()
      .then((d) => setFabrica(d.modos ?? {}))
      .catch(() => undefined);
  }, []);

  const forma = settings.modo_forma ?? "siluetas";
  const activo = MODOS.find((m) => m.forma === forma)?.clave ?? "silueta";
  // cálculo: estándar (bueno y rápido) o exacto (el mejor posible). Es un
  // botón de PULSAR PARA ALTERNAR, en la misma fila que los modos.
  const exacto = (settings.calculo ?? "estandar") === "exacto";
  const alternarCalculo = () =>
    saveSettings({ calculo: exacto ? "estandar" : "exacto" });

  const aplicarModo = async (clave: string) => {
    const ajustes = fabrica[clave];
    if (!ajustes) return;
    await saveSettings(ajustes);
    setAviso(t("Modo «{n}» aplicado", {
      n: t(MODOS.find((m) => m.clave === clave)?.nombre ?? clave),
    }));
  };

  return (
    <div className="modos" data-testid="modos">
      <div className="modos-seg" role="tablist"
           title={t("Modo de empaquetado: elige UNO")}>
        {MODOS.map((m) => (
          <button
            key={m.clave}
            type="button"
            role="tab"
            aria-selected={activo === m.clave}
            data-testid={`modo-${m.clave}`}
            className={`modo-btn${activo === m.clave ? " on" : ""}`}
            title={t("Modo {n}: {d}", { n: t(m.nombre), d: t(m.desc) })}
            onClick={() => aplicarModo(m.clave)}
          >
            <m.Icono size={24} />
            <span className="modo-txt">
              <b>{t(m.nombre)}</b>
              <i>{t(m.desc)}</i>
            </span>
            {activo === m.clave && <span className="modo-check">✓</span>}
          </button>
        ))}
        {/* tercer botón: cálculo estándar ↔ exacto (pulsar para alternar) */}
        <button
          type="button"
          data-testid="modo-calculo"
          data-calculo={exacto ? "exacto" : "estandar"}
          className={`modo-btn calculo${exacto ? " exacto" : ""}`}
          title={t("Pulsa para cambiar entre cálculo estándar y exacto")}
          onClick={alternarCalculo}
        >
          <IconoRecalcular size={24} />
          <span className="modo-txt">
            <b>{exacto ? t("Cálculo exacto") : t("Cálculo estándar")}</b>
            <i>{exacto ? t("el mejor posible · más lento")
                        : t("bueno y rápido")}</i>
          </span>
        </button>
      </div>
      {aviso && <div className="hint" data-testid="modos-aviso">{aviso}</div>}
    </div>
  );
}
