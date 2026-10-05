import { useEffect, useState } from "react";
import { useT } from "../i18n";
import { IconoCarpeta, IconoMini, IconoRecalcular, IconoGuardar,
         IconoImprimir, IconoFondo, IconoRotar, IconoBordes, IconoAjustar,
         IconoVolumen } from "./iconos";

const CLAVE = "crycat_bienvenida_v2";

/** Popup de bienvenida: pasos visuales + guía detallada + pasos de Cricut.
 *  Se muestra la primera vez y se puede volver a abrir con «Cómo usar». */
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
  const [vista, setVista] = useState<"inicio" | "detallada" | "cricut">("inicio");
  if (!open) return null;

  // pasos visuales del inicio: icono + título + una línea
  const pasos: Array<[React.ReactNode, string, string]> = [
    [<IconoFondo size={18} />, t("1 · Suelta tus imágenes"),
     t("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")],
    [<IconoAjustar size={18} />, t("2 · Ajusta el tamaño"),
     t("Escala o milímetros exactos, por lado mayor o menor.")],
    [<IconoMini size={18} />, t("3 · Minis (opcional)"),
     t("Actívalos en lo que quieras repetir rellenando huecos.")],
    [<IconoRecalcular size={18} />, t("4 · Se coloca solo"),
     t("Automático; «Recalcular» afina la colocación cuando quieras.")],
    [<IconoGuardar size={18} />, t("5 · Guarda"),
     t("PNG listo para Cricut Design (144 ppp, se importa al tamaño exacto) o a 300 ppp para imprimir. Nunca sobrescribe nada.")],
  ];

  // guía detallada: lo adicional, en una línea por tema
  const detallada: Array<[React.ReactNode, string, string]> = [
    [<IconoFondo size={18} />, t("Fondo y trozos sueltos"),
     t("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")],
    [<IconoBordes size={18} />, t("Bordes (offset)"),
     t("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")],
    [<IconoMini size={18} />, t("Minis con cuota"),
     t("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")],
    [<IconoRecalcular size={18} />, t("Optimización a tu gusto"),
     t("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")],
    [<IconoRotar size={18} />, t("Modo rápido y experto"),
     t("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")],
    [<IconoAjustar size={18} />, t("Perfiles"),
     t("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")],
    [<IconoGuardar size={18} />, t("Deshacer y rehacer"),
     t("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")],
    [<IconoImprimir size={18} />, t("Imprimir con marcas de Cricut"),
     t("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")],
    [<IconoVolumen size={18} />, t("Vista previa"),
     t("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")],
    [<IconoAjustar size={18} />, t("Temas y mascota"),
     t("12 temas pastel. La mascota Pikmin aparece de vez en cuando; con 5 clics seguidos en el gato hay sorpresa.")],
  ];

  const cricut = [
    t("Abre Cricut Design Space."),
    t("Sube el PNG y elige «Imagen completa» (conserva la transparencia)."),
    t("Con «PNG para Cricut Design» (activado por defecto) se importa al tamaño EXACTO: no hace falta redimensionar."),
    t("Pulsa «Crear» y comprueba que las medidas coinciden."),
    t("Imprime en papel mate blanco (o usa las marcas de Cricut) y colócalo en la esterilla."),
    t("¡Listo! La máquina leerá las marcas y cortará tus pegatinas."),
  ];

  const titulos: Record<string, string> = {
    inicio: t("Cómo usar CryCat"),
    detallada: t("Guía detallada: todo lo que puedes hacer"),
    cricut: t("Cómo usar tu PNG en Cricut Design Space"),
  };

  return (
    <div className="modal-back" data-testid="ayuda-dialog">
      <div className="modal ayuda-modal">
        <h3>{titulos[vista]}</h3>

        {vista === "cricut" ? (
          <ol className="lista-pasos" data-testid="ayuda-pasos">
            {cricut.map((p, i) => <li key={i}>{p}</li>)}
          </ol>
        ) : (
          <div className="ayuda-cards" data-testid="ayuda-pasos">
            {(vista === "inicio" ? pasos : detallada).map(([icono, titulo, texto], i) => (
              <div className="ayuda-card" key={i}>
                <span className="ayuda-icono">{icono}</span>
                <div>
                  <div className="ayuda-titulo">{titulo}</div>
                  <div className="ayuda-texto">{texto}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {vista === "inicio" && (
          <div className="hint">
            {t("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.")}
          </div>
        )}

        <div className="modal-botones">
          {vista === "inicio" && (
            <>
              {onAbrirCarpeta && (
                <button data-testid="ayuda-carpeta" onClick={onAbrirCarpeta}>
                  <IconoCarpeta size={15} /> {t("Abrir carpeta de guardado")}
                </button>
              )}
              <button data-testid="ayuda-detallada"
                      onClick={() => setVista("detallada")}>
                {t("Guía detallada")}
              </button>
              <button data-testid="ayuda-cricut" onClick={() => setVista("cricut")}>
                {t("Pasos en Cricut")}
              </button>
              <button className="primary" data-testid="ayuda-cerrar" onClick={onClose}>
                {t("¡Entendido!")}
              </button>
            </>
          )}
          {vista === "detallada" && (
            <>
              <button data-testid="ayuda-volver" onClick={() => setVista("inicio")}>
                {t("Volver")}
              </button>
              <button className="primary" onClick={onClose}>{t("¡Entendido!")}</button>
            </>
          )}
          {vista === "cricut" && (
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
