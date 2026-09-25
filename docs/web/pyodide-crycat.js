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

  di("Cargando Pillow, NumPy y SciPy…");
  await pyodide.loadPackage(["pillow", "numpy", "scipy"]);

  di("Descargando el motor de CryCat (misma versión que la app)…");
  const zip = await (await fetch(`${BASE}crycat.zip`)).arrayBuffer();
  pyodide.FS.writeFile("/crycat.zip", new Uint8Array(zip));

  di("Preparando el motor…");
  await pyodide.runPythonAsync(`
import zipfile, sys, os
os.makedirs("/crycat", exist_ok=True)
with zipfile.ZipFile("/crycat.zip") as z:
    z.extractall("/crycat")
sys.path.insert(0, "/crycat/backend")
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
