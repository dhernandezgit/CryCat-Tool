import { useEffect, useRef, useState } from "react";
import { api, PAPER_DIMS, type AppSettings, type Job } from "../api";
import { useT } from "../i18n";
import { THEMES } from "../themes";
import FolderPicker from "./FolderPicker";

interface Props {
  settings: AppSettings;
  saveSettings: (p: Partial<AppSettings>) => Promise<void>;
  applySettings?: (s: AppSettings, job: Job | null) => void;
}

function Section({ id, title, open, toggle, children }: {
  id: string;
  title: string;
  open: boolean;
  toggle: (id: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className={`sect ${open ? "open" : ""}`} data-testid={`sect-${id}`}>
      <div className="sect-head" onClick={() => toggle(id)}>
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

const nombrePreset: Record<string, string> = {
  chapa: "Chapa", pegatina: "Pegatina", hoja: "Hoja de pegatinas",
  iman: "Imán", "pegatina-grande": "Pegatina grande", vinilo: "Vinilo",
};

export default function SettingsPanel({ settings, saveSettings, applySettings }: Props) {
  const t = useT();
  const [open, setOpen] = useState<Record<string, boolean>>({
    minis: false, optimizacion: false, imagen: false, visualizacion: false,
    historial: false,
    perfiles: false, corte: false, extras: false, offset: false,
  });
  const [pickerOpen, setPickerOpen] = useState(false);
  const [perfiles, setPerfiles] = useState<string[]>([]);
  const [nombrePerfil, setNombrePerfil] = useState("");
  const [avisoTxt, setAvisoTxt] = useState("");
  const [presetsFabrica, setPresetsFabrica] = useState<
    Record<string, Partial<AppSettings>>>({});
  useEffect(() => {
    api.factoryPresets()
      .then((d) => setPresetsFabrica(d.presets ?? {}))
      .catch(() => undefined);
  }, []);
  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));
  // el servidor relanza la optimización con los ajustes que la afectan
  const set = (p: Partial<AppSettings>) => saveSettings(p);
  const iconInput = useRef<HTMLInputElement>(null);
  const avisoTimer = useRef<number | undefined>(undefined);
  const aviso = (msg: string) => {
    setAvisoTxt(msg);
    if (avisoTimer.current) window.clearTimeout(avisoTimer.current);
    avisoTimer.current = window.setTimeout(() => setAvisoTxt(""), 2000);
  };

  const cargarPerfiles = async () => {
    try {
      const r = await api.presets();
      setPerfiles(Array.isArray(r.names) ? r.names : []);
    } catch {
      /* backend no disponible */
    }
  };
  useEffect(() => {
    cargarPerfiles();
  }, []);

  const guardarPerfil = async () => {
    const n = nombrePerfil.trim();
    if (!n) return;
    try {
      const r = await api.savePreset(n);
      setPerfiles(r.names);
      setNombrePerfil("");
      aviso(t("Perfil guardado ✓"));
    } catch {
      aviso(t("No se pudo guardar el perfil"));
    }
  };
  const cargarPerfil = async (n: string) => {
    try {
      const r = await api.loadPreset(n);
      applySettings?.(r.settings, r.job);
      aviso(t("Perfil «{n}» cargado ✓", { n }));
    } catch {
      aviso(t("No se pudo cargar el perfil"));
    }
  };
  const borrarPerfil = async (n: string) => {
    try {
      setPerfiles((await api.deletePreset(n)).names);
    } catch {
      aviso(t("No se pudo borrar el perfil"));
    }
  };

  const num = (label: string, key: keyof AppSettings, min: number, max: number,
               step = 1, unit = "", extra?: React.ReactNode) => (
    <div className="ctl">
      <label>{t(label)}</label>
      <div className="row">
        <input
          type="number" min={min} max={max} step={step}
          data-testid={`set-${key}`}
          value={String(settings[key])}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (!Number.isNaN(v)) set({ [key]: v } as Partial<AppSettings>);
          }}
        />
        {unit && <span className="hint">{unit}</span>}
        {extra}
      </div>
    </div>
  );

  const sel = (label: string, key: keyof AppSettings, opts: [string, string][],
               testid?: string) => (
    <div className="ctl">
      <label>{t(label)}</label>
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
      <h2>{t("Ajustes")}</h2>

      {/* -------- General (siempre desplegado) -------- */}
      <Section id="general" title={t("General")} open toggle={() => undefined}>
        {num("Espacio entre elementos", "espacio_mm", 0, 20, 0.5, "mm")}
        {num("Margen de seguridad a los límites", "margen_mm", 0, 20, 0.5, "mm")}
        {sel("Rotación admitida", "rotacion", [
          ["no", "No girar"],
          ["90", "Giros de 0º / 90º / 180º / 270º"],
          ["libre", "Cualquier ángulo"],
        ])}
        {num("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp")}
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
        {settings.pagina === "custom" && (
          <div className="ctl">
            <label>{t("Ancho × alto (mm)")}</label>
            <div className="row">
              <input type="number" data-testid="set-pagina-w" value={String(settings.pagina_w)}
                onChange={(e) => set({ pagina_w: Number(e.target.value) })} />
              <input type="number" data-testid="set-pagina-h" value={String(settings.pagina_h)}
                onChange={(e) => set({ pagina_h: Number(e.target.value) })} />
            </div>
          </div>
        )}
        {sel("Máquina Cricut", "maquina", [
          ["maker5", "Cricut Maker 5"],
          ["estandar", "Explore / Joy Xtra / Venture"],
          ["joy", "Cricut Joy 2"],
        ])}
        <div className="ctl">
          <label className="row">
            <input type="checkbox" data-testid="set-usar-minis"
              checked={settings.usar_minis}
              onChange={(e) => set({ usar_minis: e.target.checked })} />
            {t("Usar minis (rellenar huecos con copias pequeñas)")}
          </label>
        </div>
        <div className="ctl">
          <label className="row">
            <input type="checkbox" data-testid="set-auto-recalcular"
              checked={settings.auto_recalcular !== false}
              onChange={(e) => set({ auto_recalcular: e.target.checked })} />
            {t("Recalcular automáticamente con cada cambio")}
          </label>
          <div className="hint">
            {t("Si lo desactivas, solo se recolocará al pulsar «Recalcular».")}
          </div>
        </div>
      </Section>

      {/* -------- Minis -------- */}
      <Section id="minis" title={t("Minis")} open={open.minis} toggle={toggle}>
        <div className="hint">
          {t("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y " +
             "pegatinas extra. La cuota de cada elemento decide cuántos recibe " +
             "respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 " +
             "significa el triple. El tamaño lo elige el optimizador, siempre más " +
             "pequeño que el original.")}
        </div>
        {num("Tamaño mínimo", "mini_min_mm", 1, 50, 0.5, "mm")}
        {num("Tamaño máximo del mini (% del original)", "mini_max_rescale",
             10, 100, 5, "%")}
        {sel("Rotaciones admitidas", "mini_rotacion", [
          ["no", "No girar"],
          ["90", "Giros de 0º / 90º / 180º / 270º"],
          ["libre", "Cualquier ángulo"],
        ])}
        {sel("Selección de tamaños", "mini_tamanos", [
          ["iguales", "Priorizar que sean iguales"],
          ["grandes", "Priorizar grandes"],
        ])}
        <div className="ctl">
          <label className="row">
            <input type="checkbox" data-testid="set-mini-usar-lista"
              checked={settings.mini_usar_lista === true}
              onChange={(e) => set({ mini_usar_lista: e.target.checked })} />
            {t("Usar lista de tamaños (en vez de los automáticos)")}
          </label>
        </div>
        {settings.mini_usar_lista && (
          <div className="ctl">
            <label>{t("Tamaños deseados (mayor a menor)")}</label>
            <div className="size-list" data-testid="mini-lista">
              {(settings.mini_tamanos_lista ?? []).map((v, i) => (
                <div className="row" key={i}>
                  <input
                    type="number" min={1} max={1000} step={5}
                    data-testid={`mini-tamano-${i}`}
                    value={String(v)}
                    onChange={(e) => {
                      const l = [...(settings.mini_tamanos_lista ?? [])];
                      l[i] = Number(e.target.value);
                      set({ mini_tamanos_lista: l });
                    }}
                  />
                  <span className="hint">%</span>
                  <button
                    className="icon-btn danger"
                    title={t("Quitar tamaño")}
                    data-testid={`mini-tamano-quitar-${i}`}
                    onClick={() =>
                      set({
                        mini_tamanos_lista:
                          (settings.mini_tamanos_lista ?? []).filter(
                            (_, j) => j !== i),
                      })
                    }
                  >
                    ✕
                  </button>
                </div>
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
                {t("+ Añadir tamaño")}
              </button>
            </div>
            <div className="hint">
              {t("Cada valor es el tamaño del mini respecto al original; se prueban " +
                 "de mayor a menor hasta que quepan.")}
            </div>
          </div>
        )}
      </Section>

      {/* -------- Optimización -------- */}
      <Section id="optimizacion" title={t("Optimización")} open={open.optimizacion} toggle={toggle}>
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
        {num("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")}
        <div className="ctl">
          <label>{t("Perfiles listos")}</label>
          <div className="row" style={{ gap: 8, flexWrap: "wrap" }}>
            {Object.entries(presetsFabrica).map(([clave, valores]) => (
              <button
                key={clave}
                data-testid={`preset-${clave}`}
                onClick={() => set(valores as Partial<AppSettings>)}
              >
                {t(nombrePreset[clave] ?? clave)}
              </button>
            ))}
          </div>
          <div className="hint">
            {t("Chapa: casi sin espacio · Pegatina: espacio y borde · Hoja: sin espacio ni borde · Imán: borde blanco")}
          </div>
        </div>
        <div className="ctl">
          <label>{t("Ajustes rápidos")}</label>
          <div className="row" style={{ gap: 8, flexWrap: "wrap" }}>
            <button data-testid="preset-chapa"
              title={t("Chapa: casi sin espacio entre piezas")}
              onClick={() => set({ espacio_mm: 0.5, margen_mm: 0.5,
                                   offset_activo: false })}>
              {t("Chapa")}
            </button>
            <button data-testid="preset-pegatina"
              title={t("Pegatina: espacio y borde de 1 mm para cortar fácil")}
              onClick={() => set({ espacio_mm: 2.0, margen_mm: 1.0,
                                   offset_activo: true, offset_mm: 1.0,
                                   offset_modo: "extender" })}>
              {t("Pegatina")}
            </button>
            <button data-testid="preset-hoja"
              title={t("Hoja de pegatinas: sin espacio ni borde entre piezas")}
              onClick={() => set({ espacio_mm: 0.0, margen_mm: 0.5,
                                   offset_activo: false })}>
              {t("Hoja de pegatinas")}
            </button>
          </div>
          <div className="hint">
            {t("Chapa: casi sin espacio · Pegatina: espacio y borde · Hoja: sin espacio ni borde")}
          </div>
        </div>
        <div className="hint">
          {t("La eficiencia del último cálculo se muestra en la barra de estado.")}
        </div>
      </Section>

      {/* -------- Imagen -------- */}
      <Section id="imagen" title={t("Imagen")} open={open.imagen} toggle={toggle}>
        {num("Sangrado de impresión", "bleed_mm", 0, 5, 0.2, "mm")}
        <div className="hint">
          {t("Repite el color del borde hacia fuera para que no salga reborde blanco si la impresora no está perfectamente alineada (0 = sin sangrado).")}
        </div>
        {sel("Espacio de color de impresión", "espacio_color", [
          ["srgb", "sRGB (estándar, el más seguro)"],
          ["adobergb", "AdobeRGB (más gamas verdes/azules)"],
        ])}
        <label className="row">
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
        )}
        {sel("Formato de color de salida", "color_formato", [
          ["rgba", "PNG con transparencia (recomendado)"],
          ["rgb", "PNG con fondo blanco"],
        ])}
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
      </Section>

      {/* -------- Offset / borde -------- */}
      <Section id="offset" title={t("Offset / borde")} open={open.offset} toggle={toggle}>
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
            {num("Grosor del borde", "offset_mm", 0.1, 20, 0.1, "mm")}
            {sel("Tipo de borde", "offset_modo", [
              ["extender", "Extender el color del borde"],
              ["blanco", "Blanco"],
              ["color", "Color personalizado"],
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
      <Section id="corte" title={t("Estimación de corte")} open={open.corte} toggle={toggle}>
        <div className="hint">
          {destacar(
            t("Tiempo estimado de corte de la Cricut Maker 5, calculado a partir " +
              "del perímetro de las siluetas y del recorrido entre formas."),
            ["Cricut Maker 5"],
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
      </Section>

      {/* -------- Historial -------- */}
      <Section id="historial" title={t("Historial (deshacer/rehacer)")}
               open={open.historial} toggle={toggle}>
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
      </Section>

      {/* -------- Visualización -------- */}
      <Section id="visualizacion" title={t("Visualización")} open={open.visualizacion} toggle={toggle}>
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

      <Section id="perfiles" title={t("Perfiles de configuración")} open={open.perfiles} toggle={toggle}>
        <div className="ctl">
          <label>{t("Guardar la configuración actual con un nombre")}</label>
          <div className="row">
            <input
              type="text"
              data-testid="perfil-nombre"
              placeholder={t("Nombre del perfil (p. ej. «Pikmin A4»)")}
              value={nombrePerfil}
              onChange={(e) => setNombrePerfil(e.target.value)}
            />
            <button data-testid="btn-guardar-perfil" onClick={guardarPerfil}>
              {t("Guardar")}
            </button>
          </div>
        </div>
        <div className="ctl">
          <div className="row">
            <button
              data-testid="btn-guardar-ajustes"
              onClick={async () => {
                await saveSettings({});
                aviso(t("Ajustes guardados ✓"));
              }}
            >
              {t("Guardar ajustes para la próxima vez")}
            </button>
            {avisoTxt && <span className="hint">{avisoTxt}</span>}
          </div>
        </div>
        <div className="ctl">
          <label>{t("Perfiles guardados")}</label>
          {perfiles.length === 0 && (
            <div className="hint">{t("Todavía no hay perfiles guardados.")}</div>
          )}
          <div className="profile-list" data-testid="perfil-lista">
            {perfiles.map((n) => (
              <div className="profile-row" key={n}>
                <span className="profile-name" title={n}>{n}</span>
                <button data-testid={`cargar-${n}`} onClick={() => cargarPerfil(n)}>
                  {t("Cargar")}
                </button>
                <button
                  className="icon-btn danger"
                  title={t("Borrar perfil")}
                  onClick={() => borrarPerfil(n)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="hint">
          {t("Los ajustes se guardan solos al cambiarlos; los perfiles permiten " +
             "tener varias configuraciones con nombre y recuperarlas cuando quieras.")}
        </div>
      </Section>

      {/* -------- Extras (Pikmin + sonido) -------- */}
      <Section id="extras" title={t("Extras")} open={open.extras} toggle={toggle}>
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
        <div className="hint">
          {t("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.")}
        </div>
      </Section>

      <div className="creditos" data-testid="creditos">
        {destacar(
          t("😿 CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, " +
            "para los artistas."),
          ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"],
        )}
      </div>

      <FolderPicker
        open={pickerOpen}
        initial={settings.carpeta_export}
        onClose={() => setPickerOpen(false)}
        onPick={(path) => saveSettings({ carpeta_export: path })}
      />
    </div>
  );
}
