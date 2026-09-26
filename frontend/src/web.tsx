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

declare const __SELLO__: string;   // lo inyecta vite.web.config.ts
const VERSION = typeof __SELLO__ === "string" ? __SELLO__ : "1";
const raiz = document.getElementById("root")!;

function pintarCarga(texto: string, error = false) {
  raiz.innerHTML = `
    <div style="min-height:100vh;display:flex;flex-direction:column;
                align-items:center;justify-content:center;gap:14px;
                font:16px/1.5 system-ui,sans-serif;color:${error ? "#d94f6a" : "#8a7480"};
                background:#fdf7f9;padding:24px;text-align:center">
      <img src="./app/icono.png" alt="" style="width:88px;height:88px;border-radius:22px" />
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

// ---------------------------------------------------------------- puente --
const b64DeArray = (buf: ArrayBuffer) => {
  const bytes = new Uint8Array(buf);
  let salida = "";
  const trozo = 0x8000;
  for (let i = 0; i < bytes.length; i += trozo) {
    salida += String.fromCharCode.apply(null, bytes.subarray(i, i + trozo) as any);
  }
  return btoa(salida);
};
const arrayDeB64 = (txt: string) => {
  const bin = atob(txt || "");
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
};

/** Convierte FormData a un cuerpo multipart (como hace el navegador). */
async function multipart(fd: FormData): Promise<[string, string]> {
  const b = "----crycat" + Math.random().toString(36).slice(2);
  const trozos: BlobPart[] = [];
  const entradas: [string, any][] = [];
  fd.forEach((v, k) => entradas.push([k, v]));
  for (const [k, v] of entradas) {
    if (v instanceof Blob) {
      trozos.push(`--${b}\r\nContent-Disposition: form-data; name="${k}"; ` +
                  `filename="${(v as File).name || "file"}"\r\n` +
                  `Content-Type: ${v.type || "application/octet-stream"}\r\n\r\n`);
      trozos.push(v);
      trozos.push("\r\n");
    } else {
      trozos.push(`--${b}\r\nContent-Disposition: form-data; name="${k}"` +
                  `\r\n\r\n${v}\r\n`);
    }
  }
  trozos.push(`--${b}--\r\n`);
  const blob = new Blob(trozos);
  return [b64DeArray(await blob.arrayBuffer()),
          `multipart/form-data; boundary=${b}`];
}

/** Llama al backend real (FastAPI en Pyodide) y devuelve una Response. */
async function apiLocal(metodo: string, url: string, init?: RequestInit) {
  const u = new URL(url, location.href);
  // solo la parte /api/... (por si la ruta trae el prefijo del sitio)
  const marca = u.pathname.indexOf("/api/");
  const ruta = (marca >= 0 ? u.pathname.slice(marca) : u.pathname) + u.search;
  const cabeceras: Record<string, string> = {};
  new Headers(init?.headers || {}).forEach((v, k) => { cabeceras[k] = v; });
  let cuerpo = "";
  const b = init?.body as any;
  if (b instanceof FormData) {
    const [c, tipo] = await multipart(b);
    cuerpo = c;
    cabeceras["content-type"] = tipo;
  } else if (b instanceof Blob) {
    cuerpo = b64DeArray(await b.arrayBuffer());
  } else if (typeof b === "string") {
    cuerpo = b64DeArray(new TextEncoder().encode(b).buffer);
  }
  const codigo =
    "import json\nfrom crycat import webapi\n" +
    "await webapi.peticion(" + JSON.stringify(metodo) + ", " +
    JSON.stringify(ruta) + ", " +
    JSON.stringify(JSON.stringify(cabeceras)) + ", " +
    JSON.stringify(cuerpo) + ")";
  const salida = JSON.parse(await py.runPythonAsync(codigo));
  return new Response(arrayDeB64(salida.body), {
    status: salida.status || 200,
    headers: salida.headers || { "content-type": "application/json" },
  });
}

/** Intercepta /api/* para que la app funcione aunque el service worker no
 *  esté listo (las imágenes van por el service worker). */
function instalarPuente() {
  const original = window.fetch.bind(window);
  window.fetch = async (entrada: any, init?: RequestInit) => {
    const url = typeof entrada === "string" ? entrada
              : (entrada && entrada.url) ? entrada.url : String(entrada);
    if (url.includes("/api/") && py) {
      try {
        return await apiLocal((init?.method || "GET").toUpperCase(), url, init);
      } catch (e) {
        return new Response("error: " + (e as Error).message,
                            { status: 500 });
      }
    }
    return original(entrada, init);
  };
}

async function main() {
  try {
    pintarCarga("Preparando el entorno…");

    // 1) service worker (para las imágenes y los recursos absolutos). No se
    //    bloquea la app si tarda: hay un puente de fetch propio de reserva.
    if ("serviceWorker" in navigator) {
      try {
        const scope = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope })
            .then(() => navigator.serviceWorker.ready),
          new Promise((r) => setTimeout(r, 6000)),
        ]);
      } catch (e) {
        // se sigue igualmente: el puente de fetch cubre la API
      }
    }

    // 2) Pyodide + el paquete real de CryCat (el cargador vive un nivel
    //    por encima del bundle: /web/pyodide-crycat.js)
    const url = new URL(`../pyodide-crycat.js?v=${VERSION}`,
                        import.meta.url).href;
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

    // las rutas /api cuelgan del directorio de la app para que el service
    // worker las vea (su ámbito es el del sitio, no la raíz)
    (globalThis as { __crycatBase?: string }).__crycatBase =
      new URL("./", location.href).pathname;
    (globalThis as { __crycatAssets?: string }).__crycatAssets =
      new URL("./app", location.href).pathname;

    instalarPuente();          // reserva: la API funciona sin service worker
    estado("Abriendo la aplicación…");
    createRoot(raiz).render(<App />);
  } catch (e: any) {
    pintarCarga("No se pudo iniciar la versión web: " +
                (e && e.message ? e.message : e), true);
  }
}

main();
