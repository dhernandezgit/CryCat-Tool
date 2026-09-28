/** Popup del proceso de ACTUALIZACIÓN.

 *  Muestra el progreso real de la descarga, avisa de que los ajustes y las
 *  imágenes se guardan antes de tocar nada y, cuando el backend nuevo está
 *  en marcha (responde con OTRA versión), recarga la página sola.
 */
import { useEffect, useRef, useState } from "react";
import { api, type VersionInfo } from "../api";
import { useT } from "../i18n";
import { IconoDescargar, IconoCheck } from "./iconos";

export default function ActualizacionDialog({ ver, onCerrar }: {
  ver: VersionInfo | null;
  onCerrar: () => void;
}) {
  const t = useT();
  const a = ver?.actualizacion;
  const estado = a?.estado ?? "descargando";
  const pct = a?.progreso != null ? Math.round(a.progreso) : null;
  const versionInicial = useRef(ver?.actual ?? "");
  const [esperando, setEsperando] = useState(false);
  const error = estado === "error";
  const reiniciando = estado === "reiniciando";

  // cuando el backend nuevo responde con OTRA versión, la página se recarga
  useEffect(() => {
    if (!reiniciando) return;
    setEsperando(true);
    let vivo = true;
    const timer = window.setInterval(async () => {
      try {
        const v = await api.version();
        if (!vivo) return;
        if (v.actual && versionInicial.current
            && v.actual !== versionInicial.current) {
          window.location.reload();
        }
      } catch {
        /* el backend aún está reiniciando: se sigue esperando */
      }
    }, 800);
    return () => { vivo = false; window.clearInterval(timer); };
  }, [reiniciando]);

  return (
    <div className="modal-back" data-testid="dialogo-actualizacion">
      <div className="modal modal-act">
        <div className={`dialogo-icono${error ? " error" : ""}`}>
          {error ? "!" : reiniciando ? <IconoCheck size={26} />
                 : <IconoDescargar size={26} />}
        </div>
        <h3>
          {error ? t("No se pudo actualizar")
                 : reiniciando ? t("Reiniciando con la versión nueva…")
                 : t("Actualizando CryCat…")}
        </h3>

        {!error && (
          <>
            <div className="progreso-act" data-testid="progreso-actualizacion">
              <div className={pct == null ? "indeterminado" : ""}
                   style={{ width: pct == null ? "100%" : `${Math.max(4, pct)}%` }} />
            </div>
            <div className="fase" data-testid="fase-actualizacion">
              {t(a?.mensaje || "Preparando la actualización…")}
              {pct != null && !reiniciando ? ` · ${pct}%` : ""}
            </div>
            <div className="nota">
              {t("Tus ajustes, imágenes y colocación se guardan antes de " +
                 "actualizar: al volver, todo queda exactamente como estaba.")}
            </div>
            {esperando && (
              <div className="fase suave" data-testid="recarga-aviso">
                {t("La página se recargará sola cuando el motor nuevo esté " +
                   "listo…")}
              </div>
            )}
          </>
        )}

        {error && (
          <>
            <div className="nota">{a?.mensaje || t("Error desconocido")}</div>
            <button data-testid="cerrar-actualizacion" onClick={onCerrar}>
              {t("Cerrar")}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
