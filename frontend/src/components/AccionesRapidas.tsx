import { type AppSettings } from "../api";
import { useT } from "../i18n";
import { IconoMini, IconoRecalcular, IconoRotar } from "./iconos";
import Modos from "./Modos";

/** Acciones rápidas del panel de ajustes: minis, recálculo, modo y rotación,
 *  más el selector de MODOS (chapas / pegatinas / carteles + personalizados). */
export default function AccionesRapidas({ settings, saveSettings }: {
  settings: AppSettings;
  saveSettings: (p: Partial<AppSettings>) => Promise<void>;
}) {
  const t = useT();
  const usarMinis = settings.usar_minis;
  const experto = settings.modo === "experto";
  const ROT_SIGUIENTE: Record<string, "90" | "libre" | "no"> = {
    "90": "libre", libre: "no", no: "90",
  };
  const ROT_ETIQUETA: Record<string, string> = {
    "90": "90°", libre: t("libre"), no: t("fijo"),
  };

  return (
    <div className="acciones-panel">
      <div className="acciones-rapidas">
        <button
          className={`chip${usarMinis ? " on" : ""}`}
          data-testid="chip-minis"
          data-tip={t("Generar minis: rellenar los huecos con copias pequeñas")}
          onClick={() => saveSettings({
            usar_minis: !usarMinis,
            // al activarlos se desactiva el recálculo automático (solo ahora)
            ...(usarMinis ? {} : { auto_recalcular: false }),
          })}
        >
          <IconoMini size={16} /> {t("Minis")}
        </button>
        <button
          className={`chip${settings.auto_recalcular ? " on" : ""}`}
          data-testid="chip-auto"
          data-tip={t("Recalcular automáticamente con cada cambio")}
          onClick={() => saveSettings({ auto_recalcular: !settings.auto_recalcular })}
        >
          <IconoRecalcular size={16} /> {t("Auto optimizar")}
        </button>
        <button
          className={`chip${experto ? " on" : ""}`}
          data-testid="chip-modo"
          data-tip={t("Modo básico (lo esencial) o experto (todos los menús)")}
          onClick={() => saveSettings({ modo: experto ? "rapido" : "experto" })}
        >
          {experto ? t("Modo experto") : t("Modo básico")}
        </button>
        <button
          className="chip"
          data-testid="chip-rotacion"
          data-tip={t("Rotación admitida: pulsa para cambiar entre 90°, libre y fijo")}
          onClick={() => saveSettings({
            rotacion: ROT_SIGUIENTE[settings.rotacion] ?? "90",
          })}
        >
          <IconoRotar size={16} /> {ROT_ETIQUETA[settings.rotacion] ?? "90°"}
        </button>
      </div>
      <Modos settings={settings} saveSettings={saveSettings} />
    </div>
  );
}
