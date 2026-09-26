/* Carga el backend REAL de CryCat (el mismo Python) dentro del navegador
 * usando Pyodide (WebAssembly). No se reimplementa nada: el paquete `crycat`
 * se ejecuta tal cual, con la misma geometría, siluetas y exportación.
 *
 * El paquete se descarga de la propia web (docs/web/crycat.zip) y se
 * descomprime en el sistema de ficheros virtual de Pyodide.
 */

const BASE = new URL(".", import.meta.url).href;

let _py = null;

export async function cargarCryCat(onEstado) {
  if (_py) return _py;
  const di = (t) => onEstado && onEstado(t);

  di("Cargando Python en el navegador (WebAssembly)…");
  await cargarScript("https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js");
  const pyodide = await globalThis.loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/",
  });

  di("Cargando Pillow, NumPy, SciPy, micropip y pydantic…");
  // pydantic viene compilado en Pyodide (pydantic-core en WebAssembly): hay
  // que cargarlo ANTES para que micropip no intente bajarlo de PyPI
  // ssl: anyio (dependencia de starlette/fastapi) lo importa al cargar
  await pyodide.loadPackage(["pillow", "numpy", "scipy", "micropip",
                             "pydantic", "ssl"]);
  // comprobar que micropip está de verdad (si no, cargarlo aparte)
  const hayMicropip = await pyodide.runPythonAsync(
    "import importlib.util as u\nbool(u.find_spec('micropip'))");
  if (!hayMicropip) {
    di("Instalando micropip…");
    await pyodide.loadPackage("micropip");
  }

  // OpenCV da la extracción de contornos EXACTA (la misma que el escritorio).
  // Si fallara (conexión lenta), se sigue con la máscara alfa: misma silueta,
  // solo sin simplificar el contorno.
  try {
    di("Cargando OpenCV (contornos exactos)…");
    await pyodide.loadPackage(["opencv-python"]);
  } catch (e) {
    di("OpenCV no disponible: se usará la silueta directa");
  }

  di("Descargando el motor de CryCat (misma versión que la app)…");
  // sin caché: el motor cambia con cada versión y son solo ~270 KB
  const zip = await (await fetch(`${BASE}crycat.zip`,
                                 { cache: "no-cache" })).arrayBuffer();
  pyodide.FS.writeFile("/crycat.zip", new Uint8Array(zip));

  di("Preparando el motor…");
  await pyodide.runPythonAsync(`
import zipfile, sys, os
# el zip trae el paquete tal cual: crycat/… → se extrae a /motor
os.makedirs("/motor", exist_ok=True)
with zipfile.ZipFile("/crycat.zip") as z:
    z.extractall("/motor")
sys.path.insert(0, "/motor")
`);
  _py = pyodide;
  di("Motor listo");
  return _py;
}

function cargarScript(src) {
  return new Promise((res, rej) => {
    if (document.querySelector(`script[src="${src}"]`)) return res();
    const s = document.createElement("script");
    s.src = src; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
}

/** Ejecuta una función del backend y devuelve el resultado (JSON). */
export async function llamar(py, codigo, args = {}) {
  py.globals.set("_args", py.toPy(args));
  const salida = await py.runPythonAsync(codigo);
  return salida;
}
