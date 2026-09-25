import { useState } from "react";
import { useT } from "../i18n";
import { IconoCarpeta, IconoCheck } from "./iconos";

/** Popup propio (no el del navegador) al guardar: qué se guardó, dónde y los
 *  pasos para Cricut Design Space. */
export default function SaveDialog({ open, files, folder, error, onOpenFolder,
                                     onClose }: {
  open: boolean;
  files: string[];
  folder: string;
  error?: string;
  onOpenFolder?: (ruta: string) => void;
  onClose: () => void;
}) {
  const t = useT();
  const [vista, setVista] = useState<"resumen" | "cricut">("resumen");
  if (!open) return null;

  const pasos = [
    t("Abre Cricut Design Space."),
    t("Carga la imagen y elige «Imagen completa» (conserva la transparencia)."),
    t("Redimensiónala al tamaño real (el que se muestra en CryCat)."),
    t("Pulsa «Crear» para preparar el lienzo."),
    t("Comprueba que las dimensiones coinciden con las del archivo."),
    t("Imprime en papel mate blanco y colócalo en la esterilla."),
    t("¡Listo! La máquina leerá las marcas y cortará tus pegatinas."),
  ];

  return (
    <div className="modal-back" data-testid="save-dialog">
      <div className="modal">
        {vista === "resumen" ? (
          <>
            <h3 data-testid="save-titulo">
              {error ? t("No se pudo guardar") : t("Imagen guardada")}
            </h3>
            {error ? (
              <p className="error">{error}</p>
            ) : (
              <>
                <p className="hint">{t("Archivos:")}</p>
                <ul className="lista-archivos">
                  {files.map((f) => (
                    <li key={f} title={f}>{f.split(/[\\/]/).pop()}</li>
                  ))}
                </ul>
                <p className="hint">{t("Carpeta")}: <code>{folder}</code></p>
              </>
            )}
            <div className="modal-botones">
              <button data-testid="btn-abrir-carpeta"
                onClick={() => onOpenFolder?.(folder)}>
                <IconoCarpeta size={15} /> {t("Abrir carpeta")}
              </button>
              <button data-testid="btn-continuar" onClick={onClose}>
                {t("Continuar")}
              </button>
              <button data-testid="btn-pasos-cricut"
                onClick={() => setVista("cricut")}>
                {t("Pasos en Cricut Design Space")}
              </button>
            </div>
          </>
        ) : (
          <>
            <h3>{t("Cómo usar tu PNG en Cricut Design Space")}</h3>
            <ol className="lista-pasos" data-testid="pasos-cricut">
              {pasos.map((p, i) => <li key={i}>{p}</li>)}
            </ol>
            <div className="modal-botones">
              <button data-testid="btn-volver"
                onClick={() => setVista("resumen")}>
                {t("Volver")}
              </button>
              <button onClick={onClose}>{t("Entendido")}</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
