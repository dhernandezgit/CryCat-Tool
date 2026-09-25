/** Entrada de la versión WEB de CryCat.
 *
 * Carga el backend REAL (el paquete `crycat` con FastAPI) dentro del navegador
 * con Pyodide y monta LA MISMA interfaz React que la aplicación de escritorio.
 *
 * El service worker (sw.js) intercepta todo `/api/*` (también las imágenes) y
 * lo resuelve aquí contra el servidor FastAPI real que corre en memoria.
 */
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const raiz = document.getElementById("root")!;

function pintarCarga(texto: string, error = false) {
  raiz.innerHTML = `
    <div style="min-height:100vh;display:flex;flex-direction:column;
                align-items:center;justify-content:center;gap:14px;
                font:16px/1.5 system-ui,sans-serif;color:${error ? "#d94f6a" : "#8a7480"};
                background:#fdf7f9;padding:24px;text-align:center">
      <img src="./icono.png" alt="" style="width:88px;height:88px;border-radius:22px" />
      <div style="font-size:20px;font-weight:700;color:#43303a">CryCat web</div>
      <div id="carga-txt">${texto}</div>
      <div style="max-width:520px;font-size:13px;color:#8a7480">
        El motor se descarga una vez y se queda en caché del navegador.
        Tus imágenes no salen de tu equipo.
      </div>
    </div>`;
}
const estado = (t: string) => {
  const el = document.getElementById("carga-txt");
  if (el) el.textContent = t;
};

let py: any = null;

async function main() {
  try {
    pintarCarga("Preparando el entorno…");

    // 1) service worker: sirve /api/* con el backend del navegador
    if (!("serviceWorker" in navigator)) {
      throw new Error("Este navegador no soporta service workers");
    }
    // el service worker vive en la RAÍZ del sitio (así también puede servir
    // /pikmin, /sonidos… que la app pide con rutas absolutas)
    await navigator.serviceWorker.register("../sw.js", {
      scope: new URL("../", location.href).pathname,
    });
    await navigator.serviceWorker.ready;

    // 2) Pyodide + el paquete real de CryCat (el cargador vive un nivel
    //    por encima del bundle: /web/pyodide-crycat.js)
    const url = new URL("../pyodide-crycat.js", import.meta.url).href;
    const mod = await import(/* @vite-ignore */ url);
    py = await mod.cargarCryCat(estado);

    estado("Instalando FastAPI en el navegador…");
    await py.runPythonAsync(
      "import asyncio\nfrom crycat import webapi\nawait webapi.iniciar()");

    // 3) atender las peticiones que llegan del service worker
    navigator.serviceWorker.addEventListener("message", async (ev: any) => {
      const d = ev.data;
      if (!d || d.tipo !== "api") return;
      const puerto: MessagePort = ev.ports && ev.ports[0];
      if (!puerto) return;
      try {
        const codigo =
          "import json\nfrom crycat import webapi\n" +
          "await webapi.peticion(" +
          JSON.stringify(d.method) + ", " + JSON.stringify(d.path) + ", " +
          JSON.stringify(JSON.stringify(d.headers || {})) + ", " +
          JSON.stringify(d.body || "") + ")";
        const salida = await py.runPythonAsync(codigo);
        puerto.postMessage(JSON.parse(salida));
      } catch (e: any) {
        puerto.postMessage({
          status: 500,
          headers: { "content-type": "text/plain; charset=utf-8" },
          body: btoa("error: " + (e && e.message ? e.message : e)),
        });
      }
    });

    estado("Abriendo la aplicación…");
    createRoot(raiz).render(<App />);
  } catch (e: any) {
    pintarCarga("No se pudo iniciar la versión web: " +
                (e && e.message ? e.message : e), true);
  }
}

main();
