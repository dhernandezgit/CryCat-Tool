import { useCallback, useEffect, useRef, useState } from "react";
import { api, normalizeAsset, type AppSettings, type Asset, type Job, type Result, type UiState } from "./api";
import { applyTheme } from "./themes";
import { IdiomaProvider, t } from "./i18n";
import FilePanel from "./components/FilePanel";
import Viewer from "./components/Viewer";
import SettingsPanel from "./components/SettingsPanel";
import StatusBar from "./components/StatusBar";
import PikminPet from "./components/PikminPet";

export interface Estimate {
  maquina: string;
  segundos: number;
  factor: number;
  paginas: { pagina: number; formas: number; segundos: number }[];
  desglose: { corte_s?: number; viaje_s?: number; extra_s?: number };
}

export default function App() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [editando, setEditando] = useState<Asset | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [estimate, setEstimate] = useState<Estimate | null>(null);
  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [job, setJob] = useState<Job | null>(null);
  const [backendOk, setBackendOk] = useState(true);
  const [ui, setUi] = useState<UiState>({
    eyeTransparent: false,
    eyeFosforito: false,
    guidesVisible: true,
    viewMode: 1,
    saveName: "",
  });
  const [leftW, setLeftW] = useState(33.3);     // %  (por defecto 1/3)
  const [centerW, setCenterW] = useState(33.3); // %  (por defecto 1/3; el resto, derecha)
  const optTimer = useRef<number | null>(null);
  const pollRef = useRef<number | null>(null);

  // carga inicial
  useEffect(() => {
    (async () => {
      try {
        const s = await api.getSettings();
        setSettings(s.settings);
        applyTheme(s.settings.tema);
        setUi((u) => ({
          ...u,
          guidesVisible: s.settings.ver_guias,
          eyeTransparent: s.settings.fondo_transparente,
        }));
        setAssets((await api.listAssets()).map(normalizeAsset));
        setResult(await api.result());
      } catch {
        setBackendOk(false);
      }
    })();
  }, []);

  // latido del backend
  useEffect(() => {
    const t = setInterval(async () => {
      try {
        await api.health();
        setBackendOk(true);
      } catch {
        setBackendOk(false);
      }
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const refresh = useCallback(async () => {
    try {
      setAssets((await api.listAssets()).map(normalizeAsset));
      setResult(await api.result());
      try {
        setEstimate(await api.estimate());
      } catch {
        /* sin estimación */
      }
    } catch {
      setBackendOk(false);
    }
  }, []);

  const pollJob = useCallback((jid: string) => {
    if (pollRef.current) window.clearInterval(pollRef.current);
    pollRef.current = window.setInterval(async () => {
      try {
        const j = await api.job(jid);
        setJob(j);
        if (j.done) {
          window.clearInterval(pollRef.current!);
          pollRef.current = null;
          await refresh();
          if (j.status === "done") window.setTimeout(() => setJob(null), 2500);
        }
      } catch {
        window.clearInterval(pollRef.current!);
        pollRef.current = null;
      }
    }, 300);
  }, []);

  const optimize = useCallback(async () => {
    try {
      const j = await api.optimize();
      setJob(j);
      pollJob(j.id);
    } catch {
      setBackendOk(false);
    }
  }, [pollJob]);

  // recálculo forzado desde el botón (rápido u óptimo), recolocando todo
  const recalc = useCallback(
    async (modo: "rapido" | "optimo") => {
      try {
        const j = await api.optimize(modo, true);
        setJob(j);
        pollJob(j.id);
      } catch {
        setBackendOk(false);
      }
    },
    [pollJob]
  );

  const scheduleOptimize = useCallback(() => {
    // si el usuario desactivó el recálculo automático, sólo el botón recalcula
    if (settings && settings.auto_recalcular === false) return;
    if (optTimer.current) window.clearTimeout(optTimer.current);
    optTimer.current = window.setTimeout(optimize, 400);
  }, [optimize, settings]);

  const saveSettings = useCallback(
    async (patch: Partial<AppSettings>) => {
      setSettings((s) => (s ? { ...s, ...patch } : s));
      if (patch.tema) applyTheme(patch.tema);
      try {
        const res = await api.putSettings(patch);
        // si el ajuste afecta a la colocación, el servidor ya lanzó el job:
        // lo sondeamos para refrescar el resultado (p. ej. al cambiar rotación)
        if (res.job) {
          setJob(res.job);
          pollJob(res.job.id);
        } else {
          try {
            setEstimate(await api.estimate());
          } catch {
            /* sin estimación */
          }
        }
      } catch {
        setBackendOk(false);
      }
    },
    [pollJob]
  );

  // arrastradores de los separadores
  const startDrag = useCallback(
    (which: "left" | "center") => {
      const onMove = (e: MouseEvent) => {
        const total = window.innerWidth;
        const x = (e.clientX / total) * 100;
        if (which === "left") {
          setLeftW(Math.min(45, Math.max(12, x)));
        } else {
          setCenterW(Math.min(60, Math.max(20, x - leftW)));
        }
      };
      const onUp = () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    },
    [leftW]
  );

  // idioma del documento (accesibilidad y traductores)
  useEffect(() => {
    document.documentElement.lang = settings?.idioma ?? "es";
  }, [settings?.idioma]);

  if (!settings) {
    return <div style={{ padding: 30 }}>{t("es", "Cargando CryCat…")}</div>;
  }

  return (
    <IdiomaProvider idioma={settings.idioma ?? "es"}>
      <div className="app">
      <div className="main">
        <div className="panel left" style={{ width: `${leftW}%` }} data-testid="file-panel">
          <FilePanel
            assets={assets}
            result={result}
            settings={settings}
            onChange={async () => {
              await refresh();
              scheduleOptimize();
            }}
            saveSettings={saveSettings}
            onEditarContorno={(a) => setEditando(a)}
          />
        </div>
        <div className="splitter" data-testid="splitter-left" onMouseDown={() => startDrag("left")} />
        <div className="viewer-wrap" style={{ width: `${centerW}%` }}>
          <Viewer
            assets={assets}
            result={result}
            settings={settings}
            ui={ui}
            setUi={setUi}
            saveSettings={saveSettings}
            optimize={optimize}
            onRefresh={refresh}
            onJob={(j) => { setJob(j); pollJob(j.id); }}
            onRecalc={recalc}
            editando={editando}
            onFinEdicion={async () => { setEditando(null); await refresh(); }}
          />
        </div>
        <div className="splitter" data-testid="splitter-center" onMouseDown={() => startDrag("center")} />
        <div className="panel right" style={{ flex: 1 }} data-testid="settings-panel">
          <SettingsPanel
            settings={settings}
            saveSettings={saveSettings}
            applySettings={(s, job) => {
              setSettings(s);
              applyTheme(s.tema);
              if (job) {
                setJob(job);
                pollJob(job.id);
              }
            }}
          />
        </div>
      </div>
      <StatusBar job={job} backendOk={backendOk} result={result}
                 estimate={estimate}
                 volumen={settings.volumen ?? 0.5}
                 mute={settings.mute ?? false}
                 onVolumen={(v) => saveSettings({ volumen: v })}
                 onMute={(m) => saveSettings({ mute: m })}
                 onIdioma={(i) => saveSettings({ idioma: i })} />
      <PikminPet
        activo={settings.pikmin_activo !== false}
        frecuenciaMin={settings.pikmin_frecuencia_min ?? 1}
        sonido={settings.pikmin_sonido !== false}
        sonidoMorir={settings.pikmin_sonido_morir !== false}
        volumen={settings.volumen ?? 0.5}
        mute={settings.mute ?? false}
      />
      </div>
    </IdiomaProvider>
  );
}
