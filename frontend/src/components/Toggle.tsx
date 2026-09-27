import { useT } from "../i18n";

/** Interruptor On/Off bonito, con los colores del tema.
 *  Sustituye a los checkbox en todos los ajustes. */
export default function Toggle({ checked, onChange, label, testid, tip }: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  testid?: string;
  tip?: string;
}) {
  const t = useT();
  return (
    <button
      type="button"
      className={`toggle${checked ? " on" : ""}`}
      data-testid={testid}
      data-tip={tip ? t(tip) : undefined}
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
    >
      <span className="toggle-pista"><span className="toggle-bola" /></span>
      <span className="toggle-texto">{t(label)}</span>
      <span className="toggle-estado">{checked ? t("Sí") : t("No")}</span>
    </button>
  );
}
