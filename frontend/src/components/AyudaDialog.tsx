import { useEffect, useState } from "react";
import { useT } from "../i18n";
import { IconoCarpeta } from "./iconos";

const CLAVE = "crycat_bienvenida_v1";

/** Popup de bienvenida con los pasos básicos. Se muestra la primera vez y se
 *  puede volver a abrir con el botón de información (📖) de la barra. */
export function useBienvenida() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try {
      if (localStorage.getItem(CLAVE) !== "1") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);
  const abrir = () => setVisible(true);
  const cerrar = () => {
    try { localStorage.setItem(CLAVE, "1"); } catch { /* sin almacenamiento */ }
    setVisible(false);
  };
  return { visible, abrir, cerrar };
}

export default function AyudaDialog({ open, onClose, onAbrirCarpeta }: {
  open: boolean;
  onClose: () => void;
  onAbrirCarpeta?: () => void;
}) {
  const t = useT();
  const [vista, setVista] = useState<"inicio" | "cricut">("inicio");
  if (!open) return null;

  const pasos = [
    t("Arrastra tus imágenes al panel de la izquierda (PNG, JPG, PSD, AI, SVG…)."),
    t("Ajusta el tamaño: usa la escala o escribe el ancho/alto exacto en mm."),
    t("Activa «Mini» en las imágenes que quieras repetir rellenando huecos."),
    t("Pulsa «Recalcular» si quieres recolocarlo a fondo (o déjalo en automático)."),
    t("Guarda: un PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada."),
  ];

  const cricut = [
    t("Abre Cricut Design Space."),
    t("Sube el PNG y elige «Imagen completa» (conserva la transparencia)."),
    t("Redimensiónala al tamaño real que ves en CryCat."),
    t("Pulsa «Crear» y comprueba que las medidas coinciden."),
    t("Imprime en papel mate blanco (o usa las marcas de Cricut) y colócalo en la esterilla."),
    t("¡Listo! La máquina leerá las marcas y cortará tus pegatinas."),
  ];

  return (
    <div className="modal-back" data-testid="ayuda-dialog">
      <div className="modal ayuda-modal">
        <h3>{vista === "inicio" ? t("Cómo usar CryCat") : t("Cómo usar tu PNG en Cricut Design Space")}</h3>
        <ol className="lista-pasos" data-testid="ayuda-pasos">
          {(vista === "inicio" ? pasos : cricut).map((p, i) => <li key={i}>{p}</li>)}
        </ol>
        {vista === "inicio" && (
          <div className="hint">
            {t("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.")}
          </div>
        )}
        <div className="modal-botones">
          {vista === "inicio" ? (
            <>
              {onAbrirCarpeta && (
                <button data-testid="ayuda-carpeta" onClick={onAbrirCarpeta}>
                  <IconoCarpeta size={15} /> {t("Abrir carpeta de guardado")}
                </button>
              )}
              <button data-testid="ayuda-cricut" onClick={() => setVista("cricut")}>
                {t("Pasos en Cricut Design Space")}
              </button>
              <button className="primary" data-testid="ayuda-cerrar" onClick={onClose}>
                {t("¡Entendido!")}
              </button>
            </>
          ) : (
            <>
              <button data-testid="ayuda-volver" onClick={() => setVista("inicio")}>
                {t("Volver")}
              </button>
              <button className="primary" onClick={onClose}>{t("¡Entendido!")}</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
