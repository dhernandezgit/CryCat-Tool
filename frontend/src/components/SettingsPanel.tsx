import { useEffect, useMemo, useRef, useState } from "react";
import { api, MACHINE_LABELS, PAPER_DIMS, type AppSettings,
         type Asset, type Job } from "../api";
import { useT } from "../i18n";
import { THEMES } from "../themes";
import FolderPicker from "./FolderPicker";
import AccionesRapidas from "./AccionesRapidas";
import Modos from "./Modos";
import Toggle from "./Toggle";
import { IconoAjustar, IconoMini, IconoRecalcular, IconoFondo, IconoBordes,
         IconoGuias, IconoGuardar, IconoImprimir, IconoRotar, IconoTijeras,
         IconoDeshacer, IconoVolumen } from "./iconos";

interface Props {
  settings: AppSettings;
  saveSettings: (p: Partial<AppSettings>) => Promise<void>;
  assets?: Asset[];
}

/** Una fila de la lista de minis: la unidad elegida manda y la otra columna
 *  se muestra calculada (en gris). Así el valor guardado siempre está en la
 *  unidad correcta (mm o % del original). */
function FilaMini({ i, valor, refBase, onValor, onQuitar, t, modo = "mm" }: {
  i: number;
  valor: number;
  refBase: number;
  onValor: (v: number) => void;
  onQuitar: () => void;
  t: (s: string, v?: Record<string, string | number>) => string;
  modo?: "mm" | "pct";
}) {
  const mm = modo === "mm" ? valor : (valor / 100) * refBase;
  const pct = modo === "mm"
    ? (refBase ? (valor / refBase) * 100 : 0)
    : valor;
  return (
    <div className="mini-fila">
      <input
        type="number" min={modo === "mm" ? 1 : 1}
        max={modo === "mm" ? 200 : 99}
        step={modo === "mm" ? 1 : 5}
        data-testid={`mini-tamano-${i}`}
        value={String(modo === "mm" ? valor : Math.round(pct * 10) / 10)}
        title={t("Tamaño del mini")}
        onChange={(e) => {
          const v = Number(e.target.value);
          if (Number.isFinite(v) && v > 0) onValor(v);
        }}
      />
      <span className="hint">{modo === "mm" ? "mm" : "%"}</span>
      <input
        type="number" disabled className="suave"
        data-testid={`mini-tamano-mm-${i}`}
        value={modo === "mm"
          ? (refBase ? pct.toFixed(1) : "")
          : mm.toFixed(1)}
        title={t("Equivale a este tamaño en la otra unidad")}
      />
      <span className="hint suave">{modo === "mm" ? "%" : "mm"}</span>
      <button
        className="icon-btn danger"
        title={t("Quitar tamaño")}
        data-testid={`mini-tamano-quitar-${i}`}
        onClick={onQuitar}
      >
        ✕
      </button>
    </div>
  );
}

/** Entrada numérica que conserva lo tecleado mientras tiene el foco. */
function NumInput({ valor, onValor, min, max, step, testid, title }: {
  valor: number; onValor: (v: number) => void; min: number; max: number;
  step: number; testid: string; title?: string;
}) {
  const [texto, setTexto] = useState(String(valor));
  const editando = useRef(false);
  useEffect(() => {
    if (!editando.current) setTexto(String(valor));
  }, [valor]);
  return (
    <input type="number" min={min} max={max} step={step}
           data-testid={testid} title={title} value={texto}
           onFocus={() => { editando.current = true; }}
           onBlur={() => { editando.current = false; setTexto(String(valor)); }}
           onChange={(e) => {
             setTexto(e.target.value);
             const v = Number(e.target.value);
             if (e.target.value !== "" && Number.isFinite(v)) onValor(v);
           }} />
  );
}

/** Sinónimos para el buscador de ajustes. */
const SINONIMOS: Record<string, string[]> = {
  borde: ["offset", "contorno", "border", "margen"],
  offset: ["borde", "contorno"],
  tamano: ["escala", "size", "medida"], escala: ["tamano", "size"],
  separacion: ["espacio", "gap", "distancia"], espacio: ["separacion", "gap"],
  copias: ["copies", "cantidad", "numero"],
  hoja: ["pagina", "page", "papel"], pagina: ["hoja", "page"],
  maquina: ["cricut", "machine", "cortadora"],
  color: ["colour", "tono"], idioma: ["language", "lengua"],
  minis: ["mini", "relleno"], rotacion: ["giro", "angulo", "rotate"],
  ajustes: ["configuracion", "settings", "opciones"],
};

function normaliza(t: string): string {
  return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/** Distancia de Levenshtein (para erratas). */
function distancia(a: string, b: string): number {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  const d: number[][] = Array.from({ length: m + 1 }, () => [0]);
  for (let i = 0; i <= m; i += 1) d[i][0] = i;
  for (let j = 0; j <= n; j += 1) d[0][j] = j;
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1,
                         d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
  }
  return d[m][n];
}

/** Puntuación de un texto para la búsqueda: exacta, prefijo, errata o sinónimo. */
function puntua(q: string, texto: string): number {
  if (!q) return 0;
  if (texto.includes(q)) return 3;
  const palabras = texto.split(/[^a-z0-9]+/).filter(Boolean);
  for (const p of palabras) {
    if (p.startsWith(q)) return 2;
    if (q.length >= 4 && distancia(p, q) <= 2) return 1;   // erratas
  }
  for (const [clave, sins] of Object.entries(SINONIMOS)) {
    if (clave.includes(q) || q.includes(clave)) {
      for (const sin of sins) if (texto.includes(sin)) return 1;
    }
  }
  return 0;
}

function Section({ id, title, open, toggle, children, icon }: {
  id: string;
  title: string;
  open: boolean;
  toggle: (id: string) => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className={`sect ${open ? "open" : ""}`} data-testid={`sect-${id}`}>
      <div className="sect-head" onClick={() => toggle(id)}>
        {icon && <span className="sect-icono">{icon}</span>}
        <span>{title}</span>
        <span className="arrow">▼</span>
      </div>
      {open && <div className="sect-body">{children}</div>}
    </div>
  );
}

function destacar(texto: string, partes: string[]): React.ReactNode[] {
  return texto
    .split(new RegExp(`(${partes.join("|")})`))
    .map((trozo, i) =>
      partes.includes(trozo) ? <strong key={i}>{trozo}</strong> : trozo);
}

/** Tiempo máximo recomendado por método (igual que en el backend). */
const OPT_TIEMPOS: Record<string, number> = {
  auto: 6, rapido: 3, greedy: 6, largest: 3, voronoi: 6, genetic: 25,
};

const METODO_NOMBRE: Record<string, string> = {
  auto: "Automático", rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left", largest: "Largest First",
  voronoi: "Voronoi", genetic: "Genético",
};

export default function SettingsPanel({ settings, saveSettings,
  assets }: Props) {
  const t = useT();
  const [panelAbierto, setPanelAbierto] = useState(true);
  const [open, setOpen] = useState<Record<string, boolean>>({
    general: true, minis: false, optimizacion: false, imagen: false,
    visualizacion: false,
    historial: false,
    perfiles: false, corte: false, extras: false, offset: false,
  });
  const [pickerOpen, setPickerOpen] = useState(false);
  const abierto = (id: keyof typeof open) => open[id];
  // BUSCADOR inteligente (erratas + sinónimos) y raíl de secciones: al pulsar
  // un icono se abre ESA sección y se cierran las demás
  const [busca, setBusca] = useState("");
  const abrirSolo = (id: keyof typeof open, forzar = false,
                     traerArriba = false) => {
    setOpen((o) => {
      const n = { ...o };
      (Object.keys(n) as (keyof typeof open)[]).forEach((k) => {
        n[k] = k === id ? (forzar ? true : !o[k]) : false;
      });
      return n;
    });
    if (traerArriba) {
      window.setTimeout(() => {
        document.querySelector(`[data-testid="sect-${id}"]`)
          ?.scrollIntoView({ block: "start", behavior: "smooth" });
      }, 130);
    }
  };
  const [coinciden, setCoinciden] = useState<string[]>([]);
  useEffect(() => {
    const q = normaliza(busca.trim());
    if (q.length < 2) {
      setCoinciden([]);
      return;
    }
    const panel = document.querySelector(".settings-panel");
    const ids: string[] = [];
    for (const sect of Array.from(panel?.querySelectorAll(".sect") ?? [])) {
      const sid = (sect.getAttribute("data-testid") || "").replace("sect-", "");
      const ctrls = Array.from(sect.querySelectorAll(".ctl"));
      if (ctrls.some((c) => puntua(q, normaliza(c.textContent || "")) > 0)) {
        ids.push(sid);
      }
    }
    setCoinciden(ids);
  }, [busca]);

  const buscar = () => {
    const q = normaliza(busca.trim());
    if (!q) return;
    const panel = document.querySelector(".settings-panel");
    for (const c of Array.from(panel?.querySelectorAll(".ctl") ?? [])) {
      if (puntua(q, normaliza(c.textContent || "")) <= 0) continue;
      const sect = c.closest(".sect");
      const id = (sect?.getAttribute("data-testid") || "")
        .replace("sect-", "") as keyof typeof open;
      if (id) abrirSolo(id, true);
      const inp = c.querySelector("input, select, textarea");
      const testid = inp?.getAttribute("data-testid");
      if (testid) {
        window.setTimeout(() => {
          const el = document.querySelector(`[data-testid="${testid}"]`);
          el?.scrollIntoView({ block: "center", behavior: "smooth" });
          el?.classList.add("resalta");
          window.setTimeout(() => el?.classList.remove("resalta"), 2400);
        }, 150);
      }
      return;
    }
  };

  // imagen de referencia para la columna de mm: la más grande con minis
  // activados (o la más grande a secas); el backend escala por el lado menor
  const refMini = useMemo(() => {
    const conMinis = (assets ?? []).filter((a) => a.mini_enabled);
    const lista = conMinis.length ? conMinis : (assets ?? []);
    return lista.slice().sort((a, b) =>
      Math.min(b.w_mm, b.h_mm) - Math.min(a.w_mm, a.h_mm))[0] ?? null;
  }, [assets]);
  const refBase = refMini ? Math.min(refMini.w_mm, refMini.h_mm) : 0;
  // modo rápido (por defecto): se ocultan los controles finos
  const experto = settings.modo === "experto";
  const Av = ({ children }: { children: React.ReactNode }) =>
    experto ? <>{children}</> : null;
  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));
  // el servidor relanza la optimización con los ajustes que la afectan
  const set = (p: Partial<AppSettings>) => saveSettings(p);
  const iconInput = useRef<HTMLInputElement>(null);

  const Grupo = ({ titulo, children }: { titulo: string;
                                          children: React.ReactNode }) => (
    <>
      <div className="ctl-grupo">{t(titulo)}</div>
      {children}
    </>
  );

  const num = (label: string, key: keyof AppSettings, min: number, max: number,
               step = 1, unit = "", extra?: React.ReactNode,
               tip?: string) => (
    <div className="ctl">
      <label {...(tip ? { "data-tip": t(tip) } : {})}>{t(label)}</label>
      <div className="row">
        <NumInput valor={Number(settings[key]) || 0} min={min} max={max}
                  step={step} testid={`set-${key}`}
                  title={tip ? t(tip) : undefined}
                  onValor={(v) => set({ [key]: v } as Partial<AppSettings>)} />
        {unit && <span className="hint">{unit}</span>}
        {extra}
      </div>
    </div>
  );

  const sel = (label: string, key: keyof AppSettings, opts: [string, string][],
               testid?: string, tip?: string) => (
    <div className="ctl">
      <label {...(tip ? { "data-tip": t(tip) } : {})}>{t(label)}</label>
      <select
        data-testid={testid ?? `set-${key}`}
        value={String(settings[key])}
        onChange={(e) => set({ [key]: e.target.value } as Partial<AppSettings>)}
      >
        {opts.map(([v, l]) => <option key={v} value={v}>{t(l)}</option>)}
      </select>
    </div>
  );

  return (
    <div className="file-panel settings-panel">
      <div className="file-head">
        <h2>{t("Ajustes")}</h2>

        <span className="count-badge">{settings.tema}</span>
      </div>
      {/* PESTAÑAS de ajustes (flotantes): icono + nombre; al pulsar una se
          abre ESA, se cierran las demás y se trae arriba con animación. La
          búsqueda va a la derecha y resalta las pestañas coincidentes
          mientras se escribe. */}
      <div className="tabs-ajustes" data-testid="rail-ajustes">
        <div className="tabs-lista">
          {([["general", <IconoAjustar size={15} />, t("General")],
             ["minis", <IconoMini size={15} />, t("Minis")],
             ["optimizacion", <IconoRecalcular size={15} />, t("Optim.")],
             ["imagen", <IconoFondo size={15} />, t("Imagen")],
             ["offset", <IconoBordes size={15} />, t("Borde")],
             ["corte", <IconoTijeras size={15} />, t("Corte")],
             ["visualizacion", <IconoGuias size={15} />, t("Vista")],
             ["historial", <IconoDeshacer size={15} />, t("Historial")],
             ["extras", <IconoVolumen size={15} />, t("Extras")]] as
            [keyof typeof open, JSX.Element, string][]).map(([id, ico, etiq]) => (
            <button key={id} data-testid={`rail-${id}`} title={etiq}
                    className={`${open[id] ? "on" : ""}${coinciden.includes(id) ? " coincide" : ""}`}
                    onClick={() => abrirSolo(id, true, true)}>
              {ico}<span>{etiq}</span>
            </button>
          ))}
        </div>
        <input className={`busca-ajustes${busca ? " con-texto" : ""}`}
               data-testid="busca-ajustes"
               value={busca} placeholder={t("Buscar…")}
               title={t("Busca parámetros (admite erratas y sinónimos): p. ej. «borde», «separacion», «tamano»")}
               onChange={(e) => setBusca(e.target.value)}
               onKeyDown={(e) => { if (e.key === "Enter") buscar(); }} />
      </div>
      {/* los dos modos, ARRIBA del todo y bien claros: o uno u otro */}
      <Modos settings={settings} saveSettings={saveSettings} />
      <AccionesRapidas settings={settings} saveSettings={saveSettings} />
      <>
      {!experto && (
        <div className="hint" data-testid="modo-rapido-aviso">
          {t("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.")}
        </div>
      )}
      {/* -------- General -------- */}
      <Section id="general" title={t("General")} open={abierto("general")}
               toggle={toggle}
               icon={<IconoAjustar size={15} />}>
        <Grupo titulo="Colocación">
        {/* los dos valores básicos, en la MISMA fila */}
        <div className="ctl-fila">
        {num("Espacio entre elementos", "espacio_mm", -10, 20, 0.5, "mm", undefined,
             "Separación entre piezas. Puede ser NEGATIVA (se solapan un poco): útil para apretar al máximo. Una línea artificial las separa igualmente al cortar.")}
        {num("Margen a los límites", "margen_mm", 0, 20, 0.5, "mm", undefined,
             "Cuánto se separan las piezas del borde del área recortable. Súbelo si tu Cricut corta justo al límite.")}
        </div>
        {sel("Rotación admitida", "rotacion", [
          ["no", "No girar"],
          ["90", "Giros de 0º / 90º / 180º / 270º"],
          ["libre", "Cualquier ángulo"],
        ])}
        {num("Separación entre elementos para el recorte", "separacion_px",
             1, 12, 1, "px", undefined,
             "Píxeles que se separan las piezas AL RENDERIZAR (aunque se toquen o solapen): la Cricut las detecta como elementos distintos y las corta por separado. 3 px va bien a 300 ppp.")}
        </Grupo>
        <Grupo titulo="Hoja y máquina">
        <Av>{num("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp")}</Av>
        <div className="ctl">
          <label>{t("Tamaño de salida (vertical)")}</label>
          <select
            data-testid="set-pagina"
            value={settings.pagina}
            onChange={(e) => {
              const key = e.target.value;
              const dims = PAPER_DIMS[key];
              if (dims) {
                set({ pagina: key, pagina_w: dims[0], pagina_h: dims[1] });
              } else {
                set({ pagina: key });
              }
            }}
          >
            <option value="A4">A4 (210×297)</option>
            <option value="A3">A3 (297×420)</option>
            <option value="A5">A5 (148×210)</option>
            <option value="Letter">Letter (216×279)</option>
            <option value="custom">{t("Personalizado")}</option>
          </select>
        </div>
        <Av>{settings.pagina === "custom" && (
          <div className="ctl">
            <label>{t("Ancho × alto (mm)")}</label>
            <div className="row">
              <input type="number" data-testid="set-pagina-w" value={String(settings.pagina_w)}
                onChange={(e) => set({ pagina_w: Number(e.target.value) })} />
              <input type="number" data-testid="set-pagina-h" value={String(settings.pagina_h)}
                onChange={(e) => set({ pagina_h: Number(e.target.value) })} />
            </div>
          </div>
        )}</Av>
        {sel("Máquina Cricut", "maquina", [
          ["maker3", "Cricut Maker 3"],
          ["maker", "Cricut Maker"],
          ["maker5", "Cricut Maker 5"],
          ["estandar", "Explore / Joy Xtra / Venture"],
          ["joy", "Cricut Joy 2"],
        ])}
        </Grupo>
        <Grupo titulo="Referencia">
        <div className="ctl">
          <label className="row">
            <input type="checkbox" data-testid="set-marcas-delimitar"
              checked={settings.marcas_delimitar === true}
              onChange={(e) => set({ marcas_delimitar: e.target.checked })} />
            {t("Marcas para delimitar")}
          </label>
          <div className="hint">
            {t("Añade dos cuadrados blancos de 2 mm (arriba-izquierda y abajo-derecha) en los límites del área. Sirven de referencia para que la colocación quede EXACTA siempre en Cricut Design Space. No cuentan para la optimización.")}
          </div>
        </div>
        </Grupo>
      </Section>

      {/* -------- Minis -------- */}
      <Section id="minis" title={t("Minis")} open={abierto("minis")} toggle={toggle}
               icon={<IconoMini size={15} />}>
        <div className="hint">
          {t("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y " +
             "pegatinas extra. La cuota de cada elemento decide cuántos recibe " +
             "respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 " +
             "significa el triple. El tamaño lo elige el optimizador, siempre más " +
             "pequeño que el original.")}
        </div>
        <Grupo titulo="Tamaños">
        <div className="seg">
          <button
            type="button" data-testid="mini-modo-lista"
            className={settings.mini_usar_lista ? "on" : ""}
            onClick={() => set({ mini_usar_lista: true })}
          >
            {t("Lista de tamaños")}
          </button>
          <button
            type="button" data-testid="mini-modo-auto"
            className={settings.mini_usar_lista ? "" : "on"}
            onClick={() => set({ mini_usar_lista: false })}
          >
            {t("Automático (mínimo + %)")}
          </button>
        </div>
        {!settings.mini_usar_lista && (
          num("Tamaño mínimo", "mini_min_mm", 1, 50, 0.5, "mm", undefined,
              "Ningún mini bajará de este tamaño: evita piezas imposibles de recortar (10 mm va bien para pegatinas).")
        )}
        {!settings.mini_usar_lista && (
          num("Tamaño máximo del mini (% del original)", "mini_max_rescale",
              10, 100, 5, "%", undefined,
              "Tope de tamaño de los minis. Siempre son algo más pequeños que el original (99 % como máximo).")
        )}
        </Grupo>
        <Grupo titulo="Modo rata">
        <div className="ctl">
          <label className="row">
            <input type="checkbox" data-testid="set-rata-activo"
              checked={settings.rata_activo === true}
              onChange={(e) => set({ rata_activo: e.target.checked })} />
            {t("Modo rata")}
          </label>
          <div className="hint">
            {t("Coloca copias EXTRA de los elementos marcados con la rata: solo para IMPRIMIR (no se guardan en el PNG normal), sin borde, en los márgenes de la hoja, separadas de las piezas y evitando las marcas. El tamaño máximo lo pone el hueco libre.")}
          </div>
        </div>
        {settings.rata_activo && (
          <>
            {num("Separación de las piezas", "rata_margen_mm", 0, 30, 0.5, "mm")}
            {num("Tamaño mínimo", "rata_min_mm", 2, 100, 0.5, "mm")}
          </>
        )}
        </Grupo>
        <Grupo titulo="Comportamiento">
        <Av>{sel("Rotaciones admitidas", "mini_rotacion", [
          ["no", "No girar"],
          ["90", "Giros de 0º / 90º / 180º / 270º"],
          ["libre", "Cualquier ángulo"],
        ])}
        {sel("Selección de tamaños", "mini_tamanos", [
          ["iguales", "Priorizar que sean iguales"],
          ["grandes", "Priorizar grandes"],
        ])}
        {sel("Borde de los minis", "mini_borde_modo", [
          ["proporcional", "Proporcional (se reduce con el mini)"],
          ["igual", "Mantener el mismo borde (mm del original)"],
          ["sin", "Sin borde"],
        ], undefined, "Qué hacer con el borde de cada mini al reducirlo")}</Av>
        {/* la lista de tamaños deseados es ESENCIAL cuando se elige el modo
            lista: se muestra también en modo básico (si no, no habría forma
            de configurarla) */}
        {settings.mini_usar_lista && (
          <div className="ctl">
            <label>{t("Tamaños deseados")}</label>
            <div className="seg" style={{ maxWidth: 260 }}>
              <button
                type="button" data-testid="lista-modo-mm"
                className={(settings.mini_lista_modo ?? "mm") === "mm" ? "on" : ""}
                onClick={() => set({ mini_lista_modo: "mm" })}
              >
                {t("En milímetros")}
              </button>
              <button
                type="button" data-testid="lista-modo-pct"
                className={settings.mini_lista_modo === "pct" ? "on" : ""}
                onClick={() => set({ mini_lista_modo: "pct" })}
              >
                {t("En % del original")}
              </button>
            </div>
            {(settings.mini_lista_modo ?? "mm") === "mm" && (
              <div className="ctl">
                <label>{t("Medir el tamaño por")}</label>
                <select data-testid="mini-lista-medida"
                        value={settings.mini_lista_medida ?? "circulo"}
                        onChange={(e) =>
                          set({ mini_lista_medida:
                            e.target.value as "menor" | "mayor" | "circulo" })}>
                  <option value="circulo">{t("Círculo equivalente (aprox.)")}</option>
                  <option value="menor">{t("Lado menor")}</option>
                  <option value="mayor">{t("Lado mayor")}</option>
                </select>
              </div>
            )}
            <div className="size-list" data-testid="mini-lista">
              {(settings.mini_tamanos_lista ?? []).map((v, i) => (
                <FilaMini
                  key={i} i={i} valor={v} refBase={refBase} t={t}
                  modo={(settings.mini_lista_modo ?? "mm") as "mm" | "pct"}
                  onValor={(v) => {
                    const l = [...(settings.mini_tamanos_lista ?? [])];
                    l[i] = v;
                    set({ mini_tamanos_lista: l });
                  }}
                  onQuitar={() =>
                    set({
                      mini_tamanos_lista:
                        (settings.mini_tamanos_lista ?? []).filter(
                          (_, j) => j !== i),
                    })
                  }
                />
              ))}
              <button
                data-testid="btn-add-mini-tamano"
                onClick={() =>
                  set({
                    mini_tamanos_lista: [
                      ...(settings.mini_tamanos_lista ?? []), 50,
                    ],
                  })
                }
              >
                {t("Añadir tamaño")}
              </button>
            </div>
            <div className="hint">
              {refMini
                ? t("El tamaño en mm es para «{nombre}» (su lado menor mide " +
                    "{mm} mm); cada mini se escala igual respecto a su original.",
                    { nombre: refMini.name, mm: refBase.toFixed(1) })
                : t("El tamaño en mm se calcula por imagen; añade imágenes para " +
                    "verlo. Cada valor es el tamaño del mini respecto a su original.")}
            </div>
          </div>
        )}
        </Grupo>
      </Section>

      {/* -------- Optimización -------- */}
{experto &&       <Section id="optimizacion" title={t("Optimización")} open={abierto("optimizacion")} toggle={toggle}
               icon={<IconoRecalcular size={15} />}>
        {sel("Método", "opt_metodo", [
          ["greedy", "Greedy / Bottom-Left (rápido)"],
          ["largest", "Largest First (mayor primero)"],
          ["voronoi", "Voronoi (huecos más grandes)"],
          ["genetic", "Genético (máxima calidad)"],
        ])}
        {sel("Calidad de cálculo", "opt_calidad", [
          ["exacta", "Exacta (más fina, más lenta)"],
          ["normal", "Normal (equilibrada)"],
          ["rapida", "Rápida (más gruesa, para bocetos)"],
        ])}
        <Av><label className="row">
          <input type="checkbox" data-testid="set-opt_tiempo_auto"
            checked={settings.opt_tiempo_auto !== false}
            onChange={(e) => set({ opt_tiempo_auto: e.target.checked })} />
          {t("Tiempo automático (el recomendado para cada método)")}
        </label>
        {settings.opt_tiempo_auto !== false ? (
          <div className="hint" data-testid="tiempo-recomendado">
            {t("Base de {s} s con «{m}» que CRECE con cada pieza (más piezas, más tiempo para buscar el mejor encaje; tope 3 min).",
               { s: OPT_TIEMPOS[settings.opt_metodo] ?? 8,
                 m: t(METODO_NOMBRE[settings.opt_metodo] ?? settings.opt_metodo) })}
          </div>
        ) : (
          num("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
        )}</Av>
        <div className="hint">
          {t("La eficiencia del último cálculo se muestra en la barra de estado.")}
        </div>
      </Section>}

      {/* -------- Imagen -------- */}
{experto &&       <Section id="imagen" title={t("Imagen")} open={abierto("imagen")} toggle={toggle}
               icon={<IconoFondo size={15} />}>
        <Grupo titulo="Impresión">
        {num("Sangrado de impresión", "bleed_mm", 0, 5, 0.2, "mm", undefined,
             "Repite el color hacia fuera para que no salga reborde blanco si la impresora no está alineada al 100 %.")}
        <div className="hint">
          {t("Repite el color del borde hacia fuera para que no salga reborde blanco si la impresora no está perfectamente alineada (0 = sin sangrado).")}
        </div>
        {sel("Espacio de color de impresión", "espacio_color", [
          ["srgb", "sRGB (estándar, el más seguro)"],
          ["adobergb", "AdobeRGB (más gamas verdes/azules)"],
        ])}
        <Av><label className="row">
          <input type="checkbox" data-testid="set-simular_impresion"
            checked={settings.simular_impresion === true}
            onChange={(e) => set({ simular_impresion: e.target.checked })} />
          {t("Previsualizar la impresión (simular el espacio de color)")}
        </label>
        {settings.simular_impresion && (
          <>
            <label className="row">
              <input type="checkbox" data-testid="set-sim_cmyk"
                checked={settings.sim_cmyk === true}
                onChange={(e) => set({ sim_cmyk: e.target.checked })} />
              {t("Simular el recorte de CMYK (amarillea azules/verdes)")}
            </label>
            {num("Saturación de la simulación", "sim_saturacion", 0.5, 2, 0.05)}
            {num("Contraste de la simulación", "sim_contraste", 0.5, 2, 0.05)}
            {num("Brillo de la simulación", "sim_brillo", 0.5, 2, 0.05)}
            <div className="hint">
              {t("Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.")}
            </div>
          </>
        )}</Av>
        {sel("Formato de color de salida", "color_formato", [
          ["rgba", "PNG con transparencia (recomendado)"],
          ["rgb", "PNG con fondo blanco"],
        ])}
        </Grupo>
        <Grupo titulo="Origen y exportación">
        <div className="ctl">
          <label className="row">
            <input type="checkbox" data-testid="set-chequear-lineas"
              checked={settings.chequear_lineas}
              onChange={(e) => set({ chequear_lineas: e.target.checked })} />
            {t("Comprobación de líneas anómalas")}
          </label>
        </div>
        {num("DPI de importación en Design Space", "dpi_importacion", 72, 600, 1,
          "ppp")}
        <div className="hint">
          {t("Si Design Space importa la imagen con un tamaño distinto, prueba 144 " +
             "(el valor que suele usar) o ajusta al de tu versión. 300 mantiene la " +
             "calidad de impresión.")}
        </div>
        {sel("Lienzo del archivo final", "lienzo", [
          ["recortable", "Solo área recortable (recomendado)"],
          ["pagina", "Página completa con márgenes"],
        ])}
        <div className="ctl">
          <label>{t("Carpeta predeterminada de exportación")}</label>
          <div className="row">
            <span className="path-text" data-testid="set-carpeta">
              {settings.carpeta_export || t("(Documentos)")}
            </span>
            <button
              data-testid="btn-elegir-carpeta"
              onClick={() => setPickerOpen(true)}
            >
              {t("Elegir carpeta…")}
            </button>
          </div>
          <div className="hint">{t("Se guarda para la próxima vez que abras CryCat.")}</div>
        </div>
        </Grupo>
      </Section>}

      {/* -------- Borde (se muestra también en modo básico) -------- */}
      <Section id="offset" title={t("Borde")} open={abierto("offset")} toggle={toggle}
               icon={<IconoBordes size={15} />}>
        <div className="ctl">
          <label className="row">
            <input type="checkbox" data-testid="set-offset-activo"
              checked={settings.offset_activo === true}
              onChange={(e) => set({ offset_activo: e.target.checked })} />
            {t("Añadir borde a todos los elementos")}
          </label>
        </div>
        {settings.offset_activo && (
          <>
            {num("Grosor del borde", "offset_mm", 0.1, 20, 0.1, "mm", undefined,
             "Borde en milímetros DEL RESULTADO (no se agranda al escalar). Sirve para unir trozos flotantes o para dejar margen al recortar.")}
            {sel("Tipo de borde", "offset_modo", [
              ["extender", "Extender el color del borde (suave)"],
              ["blanco", "Blanco"],
              ["color", "Color personalizado"],
              ["unir_recto", "Unir trozos: envolvente (borde recto)"],
              ["unir_curvo", "Unir trozos: mínimo (borde redondeado)"],
            ])}
            {settings.offset_modo === "color" && (
              <div className="ctl">
                <label>{t("Color del borde")}</label>
                <div className="row">
                  <input type="color" data-testid="set-offset-color"
                    value={settings.offset_color || "#ffffff"}
                    onChange={(e) => set({ offset_color: e.target.value })} />
                  <span className="hint">{settings.offset_color}</span>
                </div>
              </div>
            )}
            <div className="hint">
              {t("El borde forma parte de la pieza (se tiene en cuenta al colocar y " +
                 "se guarda en la imagen final). El original nunca se modifica.")}
            </div>
          </>
        )}
      </Section>

      {/* -------- Estimación de corte -------- */}
      {experto && <Section id="corte" title={t("Estimación de corte")}
               open={abierto("corte")} toggle={toggle}
               icon={<IconoTijeras size={15} />}>
        <div className="hint">
          {destacar(
            t("Tiempo estimado de corte de la {maquina}, calculado a partir " +
              "del perímetro de las siluetas y del recorrido entre formas.",
              { maquina: MACHINE_LABELS[settings.maquina] ?? "Cricut Maker 3" }),
            [MACHINE_LABELS[settings.maquina] ?? "Cricut Maker 3"],
          )}
        </div>
        {num("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s")}
        {num("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1000, 5, "mm/s")}
        {num("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s")}
        {num("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×")}
        <div className="hint">
          {t("Ajusta el factor para corregir con tu máquina y material reales; se " +
             "guarda para la próxima vez.")}
        </div>
      </Section>}

      {/* -------- Historial -------- */}
      {experto && <Section id="historial" title={t("Historial (deshacer/rehacer)")}
               open={abierto("historial")} toggle={toggle}
               icon={<IconoDeshacer size={15} />}>
        <div className="hint">
          {t("Guarda los cambios en tu equipo para poder deshacer y rehacer (Ctrl+Z / Ctrl+Y). Elige qué se guarda.")}
        </div>
        <label className="row">
          <input type="checkbox" className="switch" data-testid="set-historial"
            checked={settings.historial !== false}
            onChange={(e) => set({ historial: e.target.checked })} />
          <span className="switch-text">{t("Activar historial")}</span>
        </label>
        {settings.historial !== false && (
          <>
            {num("Cambios que se guardan", "historial_max", 5, 200, 5)}
            <label className="row">
              <input type="checkbox" className="switch" data-testid="set-hist-tamano"
                checked={settings.hist_tamano !== false}
                onChange={(e) => set({ hist_tamano: e.target.checked })} />
              <span className="switch-text">{t("Tamaño y escala")}</span>
            </label>
            <label className="row">
              <input type="checkbox" className="switch" data-testid="set-hist-copias"
                checked={settings.hist_copias !== false}
                onChange={(e) => set({ hist_copias: e.target.checked })} />
              <span className="switch-text">{t("Copias")}</span>
            </label>
            <label className="row">
              <input type="checkbox" className="switch" data-testid="set-hist-borde"
                checked={settings.hist_borde !== false}
                onChange={(e) => set({ hist_borde: e.target.checked })} />
              <span className="switch-text">{t("Borde por elemento")}</span>
            </label>
            <label className="row">
              <input type="checkbox" className="switch" data-testid="set-hist-minis"
                checked={settings.hist_minis !== false}
                onChange={(e) => set({ hist_minis: e.target.checked })} />
              <span className="switch-text">{t("Minis")}</span>
            </label>
          </>
        )}
      </Section>}

      {/* -------- Visualización -------- */}
      <Section id="visualizacion" title={t("Visualización")} open={abierto("visualizacion")} toggle={toggle}
               icon={<IconoGuias size={15} />}>
        <div className="ctl">
          <label>{t("Tema")}</label>
          <div className="theme-grid" data-testid="theme-grid">
            {THEMES.map((th) => (
              <button
                key={th.key}
                className={`theme-chip ${settings.tema === th.key ? "active" : ""}`}
                data-testid={`tema-${th.key}`}
                onClick={() => saveSettings({ tema: th.key })}
              >
                <span className="dot" style={{ background: th.colors.accent }} />
                <span className="dot" style={{ background: th.colors.accent2 }} />
                {th.label}
              </button>
            ))}
          </div>
        </div>
        <div className="ctl">
          <label className="row">
            <input type="checkbox" data-testid="set-ver-guias"
              checked={settings.ver_guias}
              onChange={(e) => saveSettings({ ver_guias: e.target.checked })} />
            {t("Mostrar guías de límites al inicio")}
          </label>
        </div>
        <div className="ctl">
          <label>{t("Icono de la aplicación")}</label>
          <div className="row">
            <img src={api.iconUrl()} alt={t("icono")} style={{ width: 34, height: 34, borderRadius: 10 }} />
            <button data-testid="btn-cambiar-icono" onClick={() => iconInput.current?.click()}>
              {t("Cargar nuevo icono")}
            </button>
            <input
              ref={iconInput} type="file" hidden accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) api.setIcon(f).then(() => { window.location.reload(); });
                e.target.value = "";
              }}
            />
          </div>
          <div className="hint">{t("Actualiza la barra de estado, la pestaña y el lanzador.")}</div>
        </div>
      </Section>

      <Section id="extras" title={t("Extras")} open={abierto("extras")} toggle={toggle}
               icon={<IconoVolumen size={15} />}>
        <Grupo titulo="Sonido">
          <div className="ctl">
            <label>{t("Volumen de la mascota")}</label>
            <div className="row">
              <button
                data-testid="set-mute"
                className={`chip${settings.mute ? " on" : ""}`}
                onClick={() => set({ mute: !settings.mute })}
              >
                {settings.mute ? t("Silenciado") : t("Con sonido")}
              </button>
              <input
                type="range" min={0} max={1} step={0.05}
                data-testid="set-volumen"
                value={settings.volumen ?? 0.5}
                onChange={(e) => set({ volumen: Number(e.target.value) })}
              />
              <span className="hint">
                {Math.round((settings.volumen ?? 0.5) * 100)}%
              </span>
            </div>
          </div>
        </Grupo>
        <Grupo titulo="Pikmin">
        <div className="ctl">
          <label className="row">
            <input type="checkbox" data-testid="set-pikmin-activo"
              checked={settings.pikmin_activo !== false}
              onChange={(e) => set({ pikmin_activo: e.target.checked })} />
            {t("Mostrar Pikmin de vez en cuando")}
          </label>
        </div>
        {num("Frecuencia media", "pikmin_frecuencia_min", 0.1, 60, 0.1, "min")}
        <div className="ctl">
          <label className="row">
            <input type="checkbox" data-testid="set-pikmin-sonido"
              checked={settings.pikmin_sonido !== false}
              onChange={(e) => set({ pikmin_sonido: e.target.checked })} />
            {t("Sonido de Pikmin")}
          </label>
        </div>
        <div className="ctl">
          <label className="row">
            <input type="checkbox" data-testid="set-pikmin-sonido-morir"
              checked={settings.pikmin_sonido_morir !== false}
              onChange={(e) => set({ pikmin_sonido_morir: e.target.checked })} />
            {t("De vez en cuando se muere (alma + sonido)")}
          </label>
        </div>
        <div className="ctl">
          <label className="row">
            <input type="checkbox" data-testid="set-comprobar_versiones"
              checked={settings.comprobar_versiones !== false}
              onChange={(e) => saveSettings({ comprobar_versiones: e.target.checked })} />
            {t("Comprobar si hay versiones nuevas al iniciar")}
          </label>
        </div>
        </Grupo>
        <div className="hint">
          {t("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.")}
        </div>
      </Section>

      <div className="creditos" data-testid="creditos">
        {destacar(
          t("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, " +
            "para los artistas."),
          ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"],
        )}
      </div>
      </>
      <FolderPicker
        open={pickerOpen}
        initial={settings.carpeta_export}
        onClose={() => setPickerOpen(false)}
        onPick={(path) => saveSettings({ carpeta_export: path })}
      />
    </div>
  );
}
