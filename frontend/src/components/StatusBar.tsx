import { useEffect, useMemo, useRef, useState } from "react";
import { api, type Job, type Result, type VersionInfo } from "../api";
import { useIdioma, useT } from "../i18n";
import { IconoMute, IconoVolumen } from "./iconos";

export interface EstimateInfo {
  maquina: string;
  segundos: number;
  factor: number;
  paginas: { pagina: number; formas: number; segundos: number }[];
  desglose: { corte_s?: number; viaje_s?: number; extra_s?: number };
}

function formatoTiempo(s: number): string {
  if (!Number.isFinite(s) || s <= 0) return "—";
  if (s < 60) return `${Math.ceil(s)} s`;
  const m = Math.floor(s / 60);
  const r = Math.round(s % 60);
  if (m < 60) return `${m} min ${r} s`;
  const h = Math.floor(m / 60);
  return `${h} h ${m % 60} min`;
}

export default function StatusBar({ job, backendOk, result, estimate,
                                    volumen = 0.5, mute = false,
                                    onVolumen, onMute, onIdioma,
                                    onEasterEgg }: {
  job: Job | null;
  backendOk: boolean;
  result: Result | null;
  estimate?: EstimateInfo | null;
  volumen?: number;
  mute?: boolean;
  onVolumen?: (v: number) => void;
  onMute?: (m: boolean) => void;
  onIdioma?: (i: "es" | "en") => void;
  onEasterEgg?: () => void;   // 5 clics seguidos en el gato
}) {
  const t = useT();
  const idioma = useIdioma();
  const [msgs, setMsgs] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);
  const [ver, setVer] = useState<VersionInfo | null>(null);
  const [comprobando, setComprobando] = useState(false);
  const [aviso, setAviso] = useState("");
  const comprobadoAuto = useRef(false);
  const clicsGato = useRef<number[]>([]);

  useEffect(() => {
    fetch("/api/funmsgs")
      .then((r) => (r.ok ? r.json() : { msgs: [] }))
      .then((d) => setMsgs(d.msgs ?? []))
      .catch(() => undefined);
  }, []);

  // versión: consulta al arrancar y comprobación automática si procede
  useEffect(() => {
    let vivo = true;
    api.version()
      .then((v) => {
        if (!vivo) return;
        setVer(v);
        if (!v.comprobado && !comprobadoAuto.current) {
          comprobadoAuto.current = true;
          api.checkVersion().then((n) => vivo && setVer(n)).catch(() => undefined);
        }
      })
      .catch(() => undefined);
    return () => { vivo = false; };
  }, []);

  const actualizando = ver?.actualizacion?.estado === "descargando" ||
    ver?.actualizacion?.estado === "instalando";

  // mientras se actualiza, refrescar el estado con frecuencia
  useEffect(() => {
    if (!actualizando) return;
    const t = setInterval(() => {
      api.version().then(setVer).catch(() => undefined);
    }, 700);
    return () => clearInterval(t);
  }, [actualizando]);

  const running = !!(job && !job.done);
  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setIdx((i) => i + 1), 1200);
    return () => clearInterval(t);
  }, [running]);

  const mensajes = msgs.length
    ? msgs
    : [t("Optimizando…"), "Rascando Pikachus…", "Contando Mausholds…",
       "Tortilleando Exeggcutes…", "Ordenando los cubiertos de Sinistea…"];

  const message = useMemo(() => {
    if (aviso) return aviso;
    if (actualizando) {
      const a = ver?.actualizacion;
      if (a?.estado === "instalando") return t("Instalando y reiniciando…");
      const p = a?.progreso != null ? Math.round(a.progreso) : null;
      return p != null ? t("Descargando… {p}%", { p })
                       : (a?.mensaje || t("Descargando actualización…"));
    }
    if (running) {
      // mensajes graciosos rotando continuamente mientras piensa
      return mensajes[idx % mensajes.length];
    }
    if (job && job.status === "error") return job.message || "Error";
    if (result && result.pages > 0) {
      const ef = Math.round(result.efficiency * 100);
      return t("{n} imágenes en {p} página{s} · eficiencia {ef}% · {m} minis",
               { n: result.placed, p: result.pages,
                 s: result.pages > 1 ? "s" : "", ef, m: result.minis });
    }
    return t("Listo para empezar");
  }, [aviso, actualizando, running, job, mensajes, idx, result, t, ver]);

  const pct = Math.round((job?.progress ?? 0) * 100);
  const etaTxt = useMemo(() => {
    const s = job?.eta_s;
    if (!running || s === undefined || s === null || s <= 0.5) return "";
    return t(" · {x} restante", { x: formatoTiempo(s) });
  }, [job?.eta_s, running, t]);

  const corteTxt = useMemo(() => {
    if (!estimate || !estimate.segundos) return "";
    return formatoTiempo(estimate.segundos);
  }, [estimate]);

  const comprobarVersion = async () => {
    setComprobando(true);
    setAviso("");
    try {
      const v = await api.checkVersion();
      setVer(v);
      if (v.error) setAviso(t("Sin conexión"));
      else if (!v.hay_nueva) setAviso(t("Estás en la última versión"));
    } catch {
      setAviso(t("Sin conexión"));
    } finally {
      setComprobando(false);
    }
  };

  const actualizarVersion = async () => {
    setAviso("");
    try {
      const r = await api.updateVersion();
      if (r.ok) {
        setAviso(t("Instalando y reiniciando…"));
      } else if (r.modo === "dev" && r.url) {
        setAviso(t("Modo desarrollo: se actualiza con git"));
        await api.openReleases().catch(() => undefined);
      } else {
        setAviso(r.mensaje || t("No se pudo actualizar"));
      }
      api.version().then(setVer).catch(() => undefined);
    } catch {
      setAviso(t("No se pudo actualizar"));
    }
  };

  const hayAvisoVersion = !!(ver?.hay_nueva && !running && !actualizando);
  const avisoVersion = hayAvisoVersion
    ? t("Nueva versión {v} disponible", { v: ver?.ultima ?? "" })
    : "";

  return (
    <div className="statusbar" data-testid="statusbar">
      <div className="brand">
        <img
          src={api.iconUrl()}
          alt="CryCat"
          data-testid="brand-icon"
          title={t("CryCat")}
          style={{ cursor: "pointer" }}
          onClick={() => {
            // easter egg: 5 clics seguidos en el gato
            const ahora = Date.now();
            clicsGato.current = [...clicsGato.current, ahora]
              .filter((t0) => ahora - t0 < 2500);
            if (clicsGato.current.length >= 5) {
              clicsGato.current = [];
              setAviso(t("¡Fiesta Pikmin! 🎉"));
              window.setTimeout(() => setAviso(""), 4000);
              onEasterEgg?.();
            }
          }}
        />
        <span className="nombre">CryCat</span>
      </div>
      <div className="center" data-testid="status-center">
        <span className="msg">{message}</span>
        {!!result && result.pages > 1 && (
          <span className="aviso-paginas" data-testid="aviso-paginas"
                title={t("No cabe todo en una página: se usarán varias")}>
            ⚠ {t("No cabe en una página: {n} páginas", { n: result.pages })}
          </span>
        )}
        {avisoVersion && (
          <button className="btn-actualizar-aviso" data-testid="aviso-version"
                  onClick={actualizarVersion}>
            {avisoVersion} · {t("Actualizar")}
          </button>
        )}
        {running && (
          <>
            <div className="progress" data-testid="progress">
              <div style={{ width: `${Math.max(4, pct)}%` }} />
            </div>
            <span className="eta" data-testid="eta">{pct}%{etaTxt}</span>
          </>
        )}
      </div>
      <div className="right">
        <button
          className="app-info"
          data-testid="btn-info"
          title={t("Abrir el repositorio del proyecto en una pestaña nueva")}
          onClick={() => window.open(ver?.repo ??
            "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener")}
        >
          ⓘ {t("App info")}
        </button>
        <button
          className="idioma"
          data-testid="btn-idioma"
          title={t("Idioma")}
          onClick={() => onIdioma?.(idioma === "es" ? "en" : "es")}
        >
          {idioma.toUpperCase()}
        </button>
        <span className="version-chip" data-testid="version-chip"
              title={t("Versión actual")}>
          v{ver?.actual ?? "—"}
          <button
            className="btn-mini"
            data-testid="btn-comprobar"
            title={t("Comprobar versiones")}
            onClick={comprobarVersion}
            disabled={comprobando}
          >
            {comprobando ? "…" : "⟳"}
          </button>
          {ver?.hay_nueva && (
            <button
              className="btn-mini destacado"
              data-testid="btn-actualizar"
              title={t("Descargar e instalar la nueva versión")}
              onClick={actualizarVersion}
            >
              ⬇
            </button>
          )}
        </span>
        <div className="vol-control">
          <button
            data-testid="btn-mute"
            className="icon-sonido"
            title={mute ? t("Activar sonido") : t("Silenciar")}
            aria-label={mute ? t("Activar sonido") : t("Silenciar")}
            onClick={() => onMute?.(!mute)}
          >
            {mute ? <IconoMute /> : <IconoVolumen />}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            data-testid="volumen"
            title={t("Volumen")}
            value={volumen}
            onChange={(e) => {
              onVolumen?.(Number(e.target.value));
              if (mute && Number(e.target.value) > 0) onMute?.(false);
            }}
          />
        </div>
        <span
          className={`dot ${backendOk ? "" : "off"}`}
          data-testid="backend-status"
          title={backendOk ? t("Backend conectado") : t("Backend desconectado")}
        />
        <span
          className="eta"
          data-testid="corte-estimado"
          title={t("Tiempo estimado de corte (Cricut Maker 5)")}
        >
          ✂ {corteTxt || "—"}
        </span>
      </div>
    </div>
  );
}
