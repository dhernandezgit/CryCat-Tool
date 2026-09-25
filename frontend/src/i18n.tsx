/**
 * Internacionalización de CryCat (español / inglés).
 *
 * Las claves son los textos en español; el diccionario inglés los traduce.
 * Si falta una traducción se muestra el texto español (nunca se rompe nada).
 */
import { createContext, useContext, type ReactNode } from "react";

export type Idioma = "es" | "en";

export const EN: Record<string, string> = {
  // ------------------------------------------------------------- general --
  "Cargando CryCat…": "Loading CryCat…",

  // ----------------------------------------------------------- status bar --
  "Optimizando…": "Optimizing…",
  "Pensando…": "Thinking…",
  "Listo para empezar": "Ready to start",
  "Activar sonido": "Enable sound",
  "Silenciar": "Mute",
  "Volumen": "Volume",
  "Backend conectado": "Backend connected",
  "Backend desconectado": "Backend disconnected",
  "Tiempo estimado de corte (Cricut Maker 5)":
    "Estimated cutting time (Cricut Maker 5)",
  " · {x} restante": " · {x} remaining",
  "{n} imágenes en {p} página{s} · eficiencia {ef}% · {m} minis":
    "{n} images on {p} page{s} · efficiency {ef}% · {m} minis",
  "Idioma": "Language",
  "Versión actual": "Current version",
  "Comprobar versiones": "Check for updates",
  "Descargar e instalar la nueva versión":
    "Download and install the new version",
  "Nueva versión {v} disponible": "New version {v} available",
  "No cabe en una página: {n} páginas": "Doesn't fit on one page: {n} pages",
  "No cabe todo en una página: se usarán varias":
    "It doesn't all fit on one page: several will be used",
  "Actualizar": "Update",
  "Estás en la última versión": "You're on the latest version",
  "Comprobando…": "Checking…",
  "Sin conexión": "Offline",
  "Descargando… {p}%": "Downloading… {p}%",
  "Instalando y reiniciando…": "Installing and restarting…",
  "No se pudo actualizar": "Update failed",
  "Se abrirá la página de descargas": "The download page will open",
  "Modo desarrollo: se actualiza con git":
    "Development mode: update with git",
  "Ir a la página de descargas": "Go to the download page",
  "Abrir el repositorio del proyecto en una pestaña nueva":
    "Open the project repository in a new tab",
  "App info": "App info",

  // ------------------------------------------------------------- ajustes --
  "Ajustes": "Settings",
  "General": "General",
  "Minis": "Minis",
  "Optimización": "Optimization",
  "Imagen": "Image",
  "Historial (deshacer/rehacer)": "History (undo/redo)",
  "Guarda los cambios en tu equipo para poder deshacer y rehacer (Ctrl+Z / Ctrl+Y). Elige qué se guarda.":
    "Stores changes on your machine so you can undo and redo (Ctrl+Z / Ctrl+Y). Choose what is saved.",
  "Activar historial": "Enable history",
  "Cambios que se guardan": "Changes kept",
  "Tamaño y escala": "Size and scale",
  "Borde por elemento": "Per-item border",
  "Deshacer (Ctrl+Z)": "Undo (Ctrl+Z)",
  "Rehacer (Ctrl+Y / Ctrl+Shift+Z)": "Redo (Ctrl+Y / Ctrl+Shift+Z)",
  "Deshacer": "Undo",
  "Rehacer": "Redo",
  "Hay una versión nueva": "A new version is available",
  "Borde de este elemento": "This item's border",
  "Extender": "Extend",
  "Color (borde)": "Color",
  "Offset / borde": "Offset / border",
  "Estimación de corte": "Cut time estimate",
  "Visualización": "Appearance",
  "Perfiles de configuración": "Configuration profiles",
  "Extras": "Extras",
  "Espacio entre elementos": "Spacing between items",
  "Margen de seguridad a los límites": "Safety margin to the limits",
  "Rotación admitida": "Allowed rotation",
  "No girar": "Don't rotate",
  "Giros de 0º / 90º / 180º / 270º": "0º / 90º / 180º / 270º turns",
  "Cualquier ángulo": "Any angle",
  "Resolución de salida": "Output resolution",
  "Tamaño de salida (vertical)": "Output size (portrait)",
  "Ancho × alto (mm)": "Width × height (mm)",
  "Máquina Cricut": "Cricut machine",
  "Usar minis (rellenar huecos con copias pequeñas)":
    "Use minis (fill gaps with small copies)",
  "Recalcular automáticamente con cada cambio":
    "Recalculate automatically on every change",
  "Si lo desactivas, solo se recolocará al pulsar «Recalcular».":
    "If disabled, it will only re-place when you press “Recalculate”.",
  ["Los minis rellenan huecos (no cuentan como copias): dan eficiencia y " +
   "pegatinas extra. La cuota de cada elemento decide cuántos recibe " +
   "respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 " +
   "significa el triple. El tamaño lo elige el optimizador, siempre más " +
   "pequeño que el original."]:
    "Minis fill gaps (they don't count as copies): they add efficiency and " +
    "extra stickers. Each item's quota decides how many it gets compared to " +
    "the others: everyone starts at 1 (even split) and 3 means triple. The " +
    "size is chosen by the optimizer, always smaller than the original.",
  "Tamaño mínimo": "Minimum size",
  "Tamaño máximo del mini (% del original)":
    "Maximum mini size (% of the original)",
  "Rotaciones admitidas": "Allowed rotations",
  "Selección de tamaños": "Size selection",
  "Priorizar que sean iguales": "Prefer equal sizes",
  "Priorizar grandes": "Prefer large",
  "Usar lista de tamaños (en vez de los automáticos)":
    "Use a size list (instead of automatic)",
  "Tamaños deseados (mayor a menor)": "Desired sizes (largest to smallest)",
  "Quitar tamaño": "Remove size",
  "+ Añadir tamaño": "+ Add size",
  ["Cada valor es el tamaño del mini respecto al original; se prueban de " +
   "mayor a menor hasta que quepan."]:
    "Each value is the mini's size relative to the original; they are tried " +
    "from largest to smallest until they fit.",
  "Método": "Method",
  "Greedy / Bottom-Left (rápido)": "Greedy / Bottom-Left (fast)",
  "Largest First (mayor primero)": "Largest First (biggest first)",
  "Voronoi (huecos más grandes)": "Voronoi (largest gaps)",
  "Genético (máxima calidad)": "Genetic (best quality)",
  "Calidad de cálculo": "Calculation quality",
  "Exacta (más fina, más lenta)": "Exact (finest, slower)",
  "Normal (equilibrada)": "Normal (balanced)",
  "Rápida (más gruesa, para bocetos)": "Fast (coarser, for drafts)",
  "Ajustes rápidos": "Quick settings",
  "Chapa": "Badge",
  "Perfiles listos": "Ready-made presets",
  "Imán": "Magnet",
  "Pegatina grande": "Large sticker",
  "Vinilo": "Vinyl",
  "Chapa: casi sin espacio · Pegatina: espacio y borde · Hoja: sin espacio ni borde · Imán: borde blanco":
    "Badge: almost no spacing · Sticker: spacing and border · Sheet: no spacing or border · Magnet: white border",
  "Pegatina": "Sticker",
  "Chapa: casi sin espacio entre piezas":
    "Badge: almost no spacing between pieces",
  "Pegatina: espacio y borde de 1 mm para cortar fácil":
    "Sticker: spacing and a 1 mm border for easy cutting",
  "Hoja de pegatinas: sin espacio ni borde entre piezas":
    "Sticker sheet: no spacing or border between pieces",
  "Chapa: casi sin espacio · Pegatina: espacio y borde · Hoja: sin espacio ni borde":
    "Badge: almost no spacing · Sticker: spacing and border · Sheet: no spacing or border",
  "Tiempo máximo": "Maximum time",
  "La eficiencia del último cálculo se muestra en la barra de estado.":
    "The efficiency of the last run is shown in the status bar.",
  "Formato de color de salida": "Output color format",
  "Espacio de color de impresión": "Print color space",
  "Sangrado de impresión": "Print bleed",
  "Repite el color del borde hacia fuera para que no salga reborde blanco si la impresora no está perfectamente alineada (0 = sin sangrado).":
    "Extends the edge colour outwards so no white fringe appears if the printer is not perfectly aligned (0 = no bleed).",
  "sRGB (estándar, el más seguro)": "sRGB (standard, safest)",
  "AdobeRGB (más gamas verdes/azules)": "AdobeRGB (wider greens/blues)",
  "Previsualizar la impresión (simular el espacio de color)":
    "Preview the print (simulate the color space)",
  "Simular el recorte de CMYK (amarillea azules/verdes)":
    "Simulate CMYK clipping (yellowing of blues/greens)",
  "Saturación de la simulación": "Simulation saturation",
  "Contraste de la simulación": "Simulation contrast",
  "Brillo de la simulación": "Simulation brightness",
  "Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.":
    "Raise saturation/contrast to offset what printing dulls. The file is not modified: preview only.",
  "PNG con transparencia (recomendado)": "PNG with transparency (recommended)",
  "PNG con fondo blanco": "PNG with white background",
  "Comprobación de líneas anómalas": "Odd line detection",
  "DPI de importación en Design Space": "Import DPI in Design Space",
  ["Si Design Space importa la imagen con un tamaño distinto, prueba 144 " +
   "(el valor que suele usar) o ajusta al de tu versión. 300 mantiene la " +
   "calidad de impresión."]:
    "If Design Space imports the image at a different size, try 144 (the " +
    "value it usually uses) or match your version. 300 keeps print quality.",
  "Lienzo del archivo final": "Final file canvas",
  "Solo área recortable (recomendado)": "Cut area only (recommended)",
  "Página completa con márgenes": "Full page with margins",
  "Carpeta predeterminada de exportación": "Default export folder",
  "(Documentos)": "(Documents)",
  "Elegir carpeta…": "Choose folder…",
  "Se guarda para la próxima vez que abras CryCat.":
    "It is saved for the next time you open CryCat.",
  "Añadir borde a todos los elementos": "Add a border to all items",
  "Grosor del borde": "Border thickness",
  "Tipo de borde": "Border type",
  "Extender el color del borde": "Extend the border color",
  "Blanco": "White",
  "Color personalizado": "Custom color",
  "Color del borde": "Border color",
  ["El borde forma parte de la pieza (se tiene en cuenta al colocar y se " +
   "guarda en la imagen final). El original nunca se modifica."]:
    "The border is part of the piece (it is taken into account when placing " +
    "and saved in the final image). The original is never modified.",
  ["Tiempo estimado de corte de la Cricut Maker 5, calculado a partir del " +
   "perímetro de las siluetas y del recorrido entre formas."]:
    "Estimated cutting time for the Cricut Maker 5, calculated from the " +
    "outline perimeter and the travel between shapes.",
  "Velocidad de corte": "Cutting speed",
  "Velocidad de viaje (sin cortar)": "Travel speed (not cutting)",
  "Tiempo extra por forma": "Extra time per shape",
  "Factor de corrección": "Correction factor",
  ["Ajusta el factor para corregir con tu máquina y material reales; se " +
   "guarda para la próxima vez."]:
    "Adjust the factor to correct with your real machine and material; it " +
    "is saved for next time.",
  "Tema": "Theme",
  "Mostrar guías de límites al inicio": "Show limit guides at start",
  "Icono de la aplicación": "Application icon",
  "Cargar nuevo icono": "Upload new icon",
  "Actualiza la barra de estado, la pestaña y el lanzador.":
    "It updates the status bar, the tab and the launcher.",
  "Guardar la configuración actual con un nombre":
    "Save the current settings with a name",
  "Nombre del perfil (p. ej. «Pikmin A4»)":
    "Profile name (e.g. “Pikmin A4”)",
  "Guardar": "Save",
  "Guardar ajustes para la próxima vez": "Save settings for next time",
  "Ajustes guardados ✓": "Settings saved ✓",
  "Perfil guardado ✓": "Profile saved ✓",
  "No se pudo guardar el perfil": "Could not save the profile",
  "Perfil «{n}» cargado ✓": "Profile “{n}” loaded ✓",
  "No se pudo cargar el perfil": "Could not load the profile",
  "No se pudo borrar el perfil": "Could not delete the profile",
  "Perfiles guardados": "Saved profiles",
  "Todavía no hay perfiles guardados.": "No saved profiles yet.",
  "Cargar": "Load",
  "Borrar perfil": "Delete profile",
  ["Los ajustes se guardan solos al cambiarlos; los perfiles permiten tener " +
   "varias configuraciones con nombre y recuperarlas cuando quieras."]:
    "Settings are saved automatically when changed; profiles let you keep " +
    "several named configurations and restore them whenever you want.",
  "Mostrar Pikmin de vez en cuando": "Show Pikmin once in a while",
  "Frecuencia media": "Average frequency",
  "Sonido de Pikmin": "Pikmin sound",
  "De vez en cuando se muere (alma + sonido)":
    "Sometimes it dies (soul + sound)",
  "Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.":
    "Images rotate between the project's own and Pikmin Bloom ones.",
  "Comprobar si hay versiones nuevas al iniciar":
    "Check for new versions on startup",
  ["😿 CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, " +
   "para los artistas."]:
    "😿 CryCat · made by Daniel Hernández Ferrándiz and Wivi.eve, " +
    "for the artists.",

  // -------------------------------------------------------------- visor --
  ["Mostrar/ocultar guías de límites Cricut (tecla G) — solo en la vista " +
   "previa, nunca en el archivo final"]:
    "Show/hide Cricut limit guides (key G) — preview only, never in the " +
    "final file",
  "▦ Guías": "▦ Guides",
  "▢ Guías": "▢ Guides",
  "Forzar la recolocación de todo (ignora los elementos fijados)":
    "Force re-placement of everything (ignores pinned items)",
  "⚡ Recalcular rápido": "⚡ Recalculate fast",
  "✨ Recalcular óptimo": "✨ Recalculate optimal",
  "Volver a la cuadrícula (Esc)": "Back to grid (Esc)",
  "✕ Ver todo": "✕ View all",
  "Fondo: blanco → transparente → verde fosforito (tecla T)":
    "Background: white → transparent → neon green (key T)",
  "Acercar (+)": "Zoom in (+)",
  "Alejar (−)": "Zoom out (−)",
  "Volver al zoom original (tecla 0)": "Reset zoom (key 0)",
  "Trozo de {px} px — clic para {accion}":
    "Piece of {px} px — click to {accion}",
  "conservar": "keep",
  "quitar": "remove",
  ["Pulsa los trozos sueltos para marcarlos (se quitarán al guardar). El " +
   "contorno principal nunca se elimina. El archivo original no se toca."]:
    "Click the loose pieces to mark them (they will be removed on save). " +
    "The main outline is never deleted. The original file is untouched.",
  ["Añade imágenes y se colocarán aquí de forma óptima, respetando el área " +
   "recortable de Cricut."]:
    "Add images and they will be placed here optimally, respecting the " +
    "Cricut cut area.",
  "Página {i}": "Page {i}",
  "Guardar limpieza": "Save cleanup",
  "Descartar": "Discard",
  "Abrir la carpeta de guardado en el explorador":
    "Open the save folder in the file explorer",
  "Abrir carpeta de guardado": "Open save folder",
  "Guardar como…": "Save as…",
  "Imprimir": "Print",
  "Guardado en:\n{folder}": "Saved in:\n{folder}",
  "No se pudo guardar: {e}": "Could not save: {e}",
  "CryCat · Imprimir": "CryCat · Print",

  // -------------------------------------------------------- panel archivos --
  "Imágenes": "Images",
  "Arrastra imágenes aquí": "Drag images here",
  "Abrir en el explorador la carpeta de las imágenes de la sesión":
    "Open the session images folder in the file explorer",
  "Reemplazar por otro archivo de la carpeta":
    "Replace with another file from the folder",
  "Limpiar contorno (quitar trozos sueltos) sin tocar el original":
    "Clean outline (remove loose pieces) without touching the original",
  "Restaurar fondo original": "Restore original background",
  "Quitar fondo (inteligente)": "Remove background (smart)",
  "Eliminar imagen": "Delete image",
  "Escala del elemento (100% = tamaño natural)":
    "Item scale (100% = natural size)",
  ["Cuántos minis quieres de este elemento respecto a los demás " +
   "(1 = reparto equitativo; 3 = el triple)"]:
    "How many minis you want of this item compared to the others " +
    "(1 = even split; 3 = triple)",
  "Cuota": "Quota",
  "Colocadas: {n}": "Placed: {n}",
  "limpiar contorno": "clean outline",
  "Incluir como mini": "Include as mini",
  ["Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con " +
   "copias pequeñas."]:
    "Tip: enable “Use minis” in Settings to fill gaps with small copies.",
  "Descartar imágenes": "Discard images",

  // ------------------------------------------------------ selector carpeta --
  "Elegir carpeta de guardado": "Choose save folder",
  "Seleccionar esta carpeta": "Select this folder",
  "Cancelar": "Cancel",

  // ---------------------------------------------------------- sugerencias --
  "Hoja de pegatinas": "Sticker sheet",

  // ------------------------------------------------------------- varios --
  "Personalizado": "Custom",
  "Escala": "Scale",
  "Borde": "Border",
  "Borde solo de este elemento para unir trozos flotantes (0 = ajuste global)":
    "Border for this item only, to merge floating pieces (0 = global setting)",
  "Ancho": "Width",
  "Alto": "Height",
  "Tamaño exacto en milímetros (mantiene la proporción)":
    "Exact size in millimetres (keeps the proportion)",
  "icono": "icon",
  "→ {n} minis": "→ {n} minis",
  "Imagen guardada ✓": "Image saved ✓",
  "Archivos:": "Files:",
  "Carpeta": "Folder",
  "Abrir carpeta": "Open folder",
  "Continuar": "Continue",
  "Adaptar los tamaños importados": "Adjust imported sizes",
  "Cómo quedan sobre un A4": "How they fit on A4",
  "Selecciona los que quieras (todos por defecto)":
    "Select the ones you want (all by default)",
  "Escala de los seleccionados": "Scale of the selected",
  "Tamaño del lado": "Side size",
  "Medir el tamaño por": "Measure size by",
  "Lado mayor": "Longest side",
  "Lado menor": "Shortest side",
  "Círculo equivalente (aprox.)": "Equivalent circle (approx.)",
  "Aplicar a los seleccionados": "Apply to selected",
  "Conservar cambios": "Keep changes",
  "Importar con tamaño original": "Import at original size",
  "Los cambios se previsualizan en el A4 y se aplican al conservarlos.":
    "Changes are previewed on the A4 and applied when kept.",
  "{n} elementos ajustados ✓": "{n} items adjusted ✓",
  "Pasos en Cricut Design Space": "Steps in Cricut Design Space",
  "Cómo usar tu PNG en Cricut Design Space":
    "How to use your PNG in Cricut Design Space",
  "Volver": "Back",
  "Entendido": "Got it",
  "Abre Cricut Design Space.": "Open Cricut Design Space.",
  "Carga la imagen y elige «Imagen completa» (conserva la transparencia).":
    "Upload the image and choose “Full image” (keeps transparency).",
  "Redimensiónala al tamaño real (el que se muestra en CryCat).":
    "Resize it to the real size (the one shown in CryCat).",
  "Pulsa «Crear» para preparar el lienzo.": "Press “Create” to set the canvas.",
  "Comprueba que las dimensiones coinciden con las del archivo.":
    "Check that the dimensions match the file.",
  "Imprime en papel mate blanco y colócalo en la esterilla.":
    "Print on matte white paper and place it on the mat.",
  "¡Listo! La máquina leerá las marcas y cortará tus pegatinas.":
    "Done! The machine will read the marks and cut your stickers.",
  "🎉 ¡Fiesta Pikmin! 🎉": "🎉 Pikmin party! 🎉",
};

const IdiomaCtx = createContext<Idioma>("es");

export function IdiomaProvider({ idioma, children }: {
  idioma: Idioma;
  children: ReactNode;
}) {
  return <IdiomaCtx.Provider value={idioma}>{children}</IdiomaCtx.Provider>;
}

export function useIdioma(): Idioma {
  return useContext(IdiomaCtx);
}

export type Traductor = (texto: string,
                         vars?: Record<string, string | number>) => string;

/** Devuelve la función de traducción del idioma actual. */
export function useT(): Traductor {
  const idioma = useIdioma();
  return (texto, vars) => {
    let s = idioma === "en" ? (EN[texto] ?? texto) : texto;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        s = s.split(`{${k}}`).join(String(v));
      }
    }
    return s;
  };
}

/** Traducción fuera de componentes React. */
export function t(idioma: Idioma, texto: string,
                  vars?: Record<string, string | number>): string {
  let s = idioma === "en" ? (EN[texto] ?? texto) : texto;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      s = s.split(`{${k}}`).join(String(v));
    }
  }
  return s;
}
