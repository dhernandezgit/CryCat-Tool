import { useEffect, useState } from "react";
import { api, type AppSettings, type Job, type Result } from "../api";
import { useT } from "../i18n";

const REPO = "https://github.com/dhernandezgit/CryCat-Tool";
// el informe se puede ENVIAR POR EMAIL (sin cuenta ni login de ningún tipo)
const EMAIL = "daniel.hernandez@pixelabs.es";

/** Sugerencias: al pulsarlas se añade la frase al informe. */
const SUGERENCIAS: Array<[string, string]> = [
  ["Se solapan elementos",
   "He visto dos pegatinas que se pisan entre sí. Adjunto los ajustes que usé."],
  ["No caben todas las copias",
   "Hay copias que no se colocan y no entiendo por qué (¿tamaño, rotación, espacio?)."],
  ["Los bordes no quedan bien",
   "El borde de un elemento no rodea bien el dibujo o deja trozos sueltos."],
  ["La impresión sale movida",
   "Al imprimir con las marcas, el corte no coincide con el dibujo."],
  ["El Pikmin no aparece",
   "La mascota no sale nunca (o no suena) aunque esté activada."],
  ["Se queda pensando",
   "La optimización se queda mucho tiempo pensando o no termina."],
  ["La web no arranca",
   "La versión del navegador se queda en la pantalla de carga o da un error."],
];

/** Popup para reportar un bug: abre un issue en GitHub ya relleno. */
export default function ReportarDialog({ open, onClose, settings,
  job, result }: {
  open: boolean;
  onClose: () => void;
  settings: AppSettings | null;
  job?: Job | null;
  result?: Result | null;
}) {
  const t = useT();
  const [version, setVersion] = useState("");
  const [texto, setTexto] = useState("");
  const [pasos, setPasos] = useState("");
  const [incluirEntorno, setIncluirEntorno] = useState(true);
  const [incluirAjustes, setIncluirAjustes] = useState(true);
  const [incluirErrores, setIncluirErrores] = useState(true);
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    if (open) {
      api.version().then((v) => setVersion(v.actual)).catch(() => undefined);
      setCopiado(false);
    }
  }, [open]);

  const errores = (): string[] => {
    const g = globalThis as { __crycatErrores?: { t: string; msg: string;
                                                  donde: string }[] };
    return (g.__crycatErrores ?? []).map(
      (e) => `- [${e.t}] ${e.msg} (${e.donde || "?"})`);
  };

  if (!open) return null;

  const entorno = () => {
    const ua = navigator.userAgent;
    const web = !!(globalThis as { __crycatBase?: string }).__crycatBase;
    const lineas = [
      `- CryCat: v${version || "?"}`,
      `- Modo: ${web ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${ua}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${window.screen?.width ?? "?"}x${window.screen?.height ?? "?"}` +
        ` @${window.devicePixelRatio ?? 1}x` +
        ` (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`,
    ];
    if (result) {
      lineas.push(`- Elementos: ${result.pages} página(s)`);
    }
    if (job) {
      lineas.push(`- Último trabajo: ${job.status}` +
        `${job.message ? ` — ${job.message}` : ""}`);
    }
    return lineas.join("\n");
  };

  const ajustes = () => {
    if (!settings) return "";
    const claves = ["espacio_mm", "margen_mm", "rotacion", "pagina", "maquina",
                    "opt_metodo", "opt_calidad", "opt_tiempo_max_s",
                    "usar_minis", "mini_min_mm", "offset_activo", "offset_mm",
                    "offset_modo", "dpi_salida", "lienzo", "tema"] as const;
    return claves
      .map((k) => `- ${k}: ${String((settings as unknown as Record<string, unknown>)[k])}`)
      .join("\n");
  };

  const cuerpoInforme = () => {
    const cuerpo = [
      "### Qué pasó",
      texto.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      pasos.trim() || "1. …",
      "",
    ];
    if (incluirEntorno) cuerpo.push("### Entorno", entorno(), "");
    if (incluirAjustes && settings) {
      cuerpo.push("### Ajustes", ajustes(), "");
    }
    const errs = errores();
    if (incluirErrores && errs.length) {
      cuerpo.push("### Errores recogidos", errs.join("\n"), "");
    }
    cuerpo.push("<!-- Abierto desde el botón «Reportar» de CryCat -->");
    return cuerpo.join("\n");
  };

  const tituloInforme = () =>
    `[CryCat] ${texto.trim().split("\n")[0].slice(0, 70) || "algo no va bien"}`;

  /** Enviar por EMAIL: sin cuenta, sin login, llega directo. */
  const enviarEmail = () => {
    const url = `mailto:${EMAIL}?` + new URLSearchParams({
      subject: tituloInforme(),
      body: cuerpoInforme().slice(0, 1800),
    }).toString();
    window.location.href = url;
    onClose();
  };

  /** Abrir en GitHub (opcional; requiere cuenta). */
  const abrir = () => {
    const url = `${REPO}/issues/new?` + new URLSearchParams({
      title: tituloInforme(),
      body: cuerpoInforme(),
      labels: "bug",
    }).toString();
    window.open(url, "_blank", "noopener");
    onClose();
  };

  return (
    <div className="modal-back" data-testid="reportar-dialog">
      <div className="modal">
        <h3>{t("Reportar un bug")}</h3>
        <div className="hint">
          {t("Rellena el informe y envíalo por EMAIL (no hace falta cuenta ni " +
             "login). También puedes copiarlo o abrirlo en GitHub si prefieres.")}
        </div>
        <div className="hint">{t("Sugerencias (pulsa para añadirla):")}</div>
        <div className="reportar-chips">
          {SUGERENCIAS.map(([titulo, frase]) => (
            <button
              key={titulo}
              type="button"
              className="chip"
              data-testid={`reportar-sug-${titulo}`}
              onClick={() => setTexto((x) => (x ? x + "\n" : "") + frase)}
            >
              {t(titulo)}
            </button>
          ))}
        </div>
        <label className="col">
          {t("¿Qué ha pasado?")}
          <textarea
            data-testid="reportar-texto"
            rows={4}
            value={texto}
            placeholder={t("Cuéntalo con tus palabras: qué esperabas y qué pasó.")}
            onChange={(e) => setTexto(e.target.value)}
          />
        </label>
        <label className="col">
          {t("¿Cómo lo repetimos? (opcional)")}
          <textarea
            data-testid="reportar-pasos"
            rows={3}
            value={pasos}
            placeholder={t("1. Abro… 2. Pulso… 3. Pasa…")}
            onChange={(e) => setPasos(e.target.value)}
          />
        </label>
        <label className="row">
          <input type="checkbox" data-testid="reportar-entorno"
                 checked={incluirEntorno}
                 onChange={(e) => setIncluirEntorno(e.target.checked)} />
          {t("Incluir versión y sistema (ayuda mucho)")}
        </label>
        <label className="row">
          <input type="checkbox" data-testid="reportar-ajustes"
                 checked={incluirAjustes}
                 onChange={(e) => setIncluirAjustes(e.target.checked)} />
          {t("Incluir mis ajustes actuales")}
        </label>
        {errores().length > 0 && (
          <label className="row">
            <input type="checkbox" data-testid="reportar-errores"
                   checked={incluirErrores}
                   onChange={(e) => setIncluirErrores(e.target.checked)} />
            {t("Incluir los {n} errores recogidos de la consola",
               { n: errores().length })}
          </label>
        )}
        <div className="modal-botones">
          <button onClick={onClose}>{t("Cancelar")}</button>
          <button
            data-testid="reportar-copiar"
            title={t("Copia el informe entero al portapapeles (por si no usas GitHub)")}
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(
                  `${texto}\n\n${pasos}\n\n${cuerpoInforme()}`);
                setCopiado(true);
              } catch {
                /* sin portapapeles */
              }
            }}
          >
            {copiado ? t("¡Copiado!") : t("Copiar informe")}
          </button>
          <button data-testid="reportar-github"
                  title={t("Abrir en GitHub (necesita cuenta)")}
                  onClick={abrir}>
            {t("GitHub")}
          </button>
          <button className="primary" data-testid="reportar-enviar"
                  onClick={enviarEmail}>
            {t("Enviar por email")}
          </button>
        </div>
      </div>
    </div>
  );
}
