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
import { temaRecordado } from "./themes";
import { apiBase } from "./api";
import "./styles.css";

declare const __SELLO__: string;   // lo inyecta vite.web.config.ts
const VERSION = typeof __SELLO__ === "string" ? __SELLO__ : "1";
const raiz = document.getElementById("root")!;

/** Frases de la pantalla de carga: humor de artistas de merch y fanart.
 *  Van rotando cada 3 s mientras debajo se cuenta lo que pasa de verdad. */
const FRASES_CARGA = [
  "Cargando peluches de apoyo emocional…",
  "Afilando tijeras de pegatinas…",
  "Preparando boba teas…",
  "Aplicando miel al mat para que pegue mejor…",
  "Chipi chipi chapeando…",
  "Calibrando el pulso para recortar a mano alzada…",
  "Ordenando la paleta de colores por vibes…",
  "Hidratando el pincel digital…",
  "Convenciendo al vector de que se cierre…",
  "Desenredando curvas Bézier…",
  "Sacando brillo a los highlights…",
  "Contando capas de la ilustración (otra vez)…",
  "Buscando el CMYK que no se apaga al imprimir…",
  "Despertando a los pikmin dibujantes…",
  "Puliendo bordes a 300 ppp…",
  "Repartiendo washi tape por el escritorio…",
  "Encontrando el rotulador que sí funciona…",
  "Centrando el sticker a ojo (como siempre)…",
  "Alejando al gato del teclado…",
  "Preparando la cola para el fanart del mes…",
  "Ajustando el sangrado para no cortar la carita…",
  "Guardando copia antes de tocar nada…",
  "Quitando restos de goma del plotter…",
  "Soplando el polvo de la tableta gráfica…",
  "Midiendo dos veces para cortar una…",
  "Pidiendo al degradado que no se pixele…",
  "Buscando la fuente que combine con todo…",
  "Organizando la carpeta de referencias (por fin)…",
  "Pidiendo permiso al mat de corte…",
  "Enrollando vinilo sin burbujas…",
  "Calentando la prensa de chapas…",
  "Rezando a los dioses del antialias…",
  "Recortando el fondo con paciencia de monje…",
  "Clasificando pegatinas por nivel de monos…",
  "Cargando la energía de las 3 de la mañana…",
  "Haciendo inventario de purpurina…",
  "Esperando a que seque el barniz…",
  "Alineando pupilas con precisión milimétrica…",
  "Dando retoques finales con zoom al 800 %…",
  "Preparando un té mientras compila…",
  "Contando cuántas pegatinas quedan (muchas)…",
  "Pegando una pegatina en la funda del portátil…",
  "Eligiendo el degradado más aesthetic…",
  "Comprobando que el blanco no es transparente…",
  "Buscando el papel de horno que no se arruga…",
  "Esperando a que el cutter deje de zumbar…",
  "Pintando los bordes con rotulador (truco viejo)…",
  "Cuadrando el círculo perfecto…",
  "Subiendo la resolución a 600 ppp por si acaso…",
  "Aplanando capas (sin miedo)…",
  "Añadiendo un brillito más…",
  "Moviendo el logo 1 px a la izquierda…",
  "Preparando el packaging para el envío…",
  "Cortando washi tape con los dientes…",
  "Buscando el color exacto del personaje…",
  "Recortando la cabeza para el troquelado…",
  "Repasando líneas con el pincel de tinta…",
  "Espantando al síndrome del impostor…",
  "Anotando ideas en una servilleta…",
  "Comprobando que se lee a tamaño chapa…",
  "Eligiendo la fuente de los créditos…",
  "Preparando la mesa para la feria…",
  "Cerrando el encargo justo a tiempo…",
  "Hidratando las manos antes de tocar el vinilo…",
  "Reciclando recortes para otro proyecto…",
  "Decidiendo si poner marca de agua…",
  "Encontrando el cable del plotter…",
  "Girando la imagen 3 grados porque sí…",
  "Preparando café de emergencia…",
  "Puliendo el trazo con zoom al 1600 %…",
  "Preguntando a la impresora qué quiere hoy…",
  "Guardando en la carpeta «final_final_v3»…",
  "Dibujando manitas de apoyo en los bordes…",
  "Contando los días para la próxima convención…",
  "Ajustando el troquel al milímetro…",
  "Respirando antes de imprimir la prueba…",
  "Untando el dedo en el mat para que pegue…",
];

const TOTAL_PASOS = 8;

// colector de errores: los últimos fallos del navegador se adjuntan al
// informe de bug (sin datos personales: solo el mensaje y dónde pasó)
type ErrorRecogido = { t: string; msg: string; donde: string };
const errores: ErrorRecogido[] = [];
(globalThis as { __crycatErrores?: ErrorRecogido[] }).__crycatErrores = errores;
const apuntarError = (msg: string, donde: string) => {
  errores.push({ t: new Date().toISOString().slice(11, 19), msg, donde });
  if (errores.length > 12) errores.shift();
};
window.addEventListener("error", (e) =>
  apuntarError(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) =>
  apuntarError(String((e.reason && e.reason.message) || e.reason || "promesa"),
               "promesa"));
let rotarFrases: number | undefined;

function pintarCarga(texto: string, error = false) {
  window.clearTimeout(rotarFrases);
  // el mismo tema que la app (Wiwi por defecto, o el último que usaste)
  const c = temaRecordado().colors;
  raiz.innerHTML = `
    <div style="min-height:100vh;display:flex;flex-direction:column;
                align-items:center;justify-content:center;gap:12px;
                font:16px/1.5 system-ui,sans-serif;color:${c.textSoft};
                background:${c.bg};padding:24px;text-align:center">
      <img src="./app/icono.png" alt="" style="width:88px;height:88px;border-radius:22px" />
      <div style="font-size:19px;font-weight:700;color:${c.text}">CryCat web</div>
      <div id="carga-fun" style="font-size:22px;font-weight:700;color:${c.text};
                min-height:2.2em;max-width:640px;line-height:1.25">${texto}</div>
      <div id="carga-paso" style="font-size:12px;font-weight:700;
                letter-spacing:.06em;text-transform:uppercase;color:${c.accent3};
                min-height:1.2em">${error ? "" : "Paso 1 de " + TOTAL_PASOS}</div>
      <div style="width:min(340px,80vw);height:8px;border-radius:99px;
                  background:${c.border};overflow:hidden">
        <div id="carga-barra" style="height:100%;width:${error ? 100 : 8}%;
             border-radius:99px;background:linear-gradient(90deg,${c.accent},${c.accent2});
             transition:width .45s ease"></div>
      </div>
      <div id="carga-txt" style="font-size:13px;color:${c.textSoft};min-height:1.2em">
        ${error ? "" : "Preparando todo…"}</div>
      <div style="max-width:520px;font-size:12px;color:${c.textSoft};margin-top:6px">
        El motor se descarga una vez y se queda en caché del navegador.
        Tus imágenes no salen de tu equipo.
      </div>
    </div>`;
  if (error) {
    const fun = document.getElementById("carga-fun");
    if (fun) fun.style.color = c.danger;
    return;
  }
  let i = Math.floor(Math.random() * FRASES_CARGA.length);
  const pinta = () => {
    const el = document.getElementById("carga-fun");
    if (el) el.textContent = FRASES_CARGA[i++ % FRASES_CARGA.length];
  };
  const siguiente = () => {
    pinta();
    rotarFrases = window.setTimeout(siguiente,
      2200 + Math.random() * 1600);   // sin ritmo fijo: siempre cambiando
  };
  siguiente();
}

/** Muestra lo que está pasando de verdad y el paso (1..7). */
const estado = (t: string, paso?: number) => {
  const el = document.getElementById("carga-txt");
  if (el) el.textContent = t;
  if (paso) {
    const p = document.getElementById("carga-paso");
    if (p) p.textContent = `Paso ${paso} de ${TOTAL_PASOS}`;
    const b = document.getElementById("carga-barra");
    if (b) b.style.width = `${Math.round((paso / TOTAL_PASOS) * 100)}%`;
  }
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

    estado("Instalando FastAPI en el navegador (solo la primera vez)…", 6);
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


    // en la web los ajustes viven en memoria: se recupera el último tema
    // elegido (guardado en el navegador) para que no se pierda al recargar
    try {
      const tema = temaRecordado().key;
      if (tema && tema !== "wiwi") {
        await fetch(apiBase() + "/api/settings", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ tema }),
        });
      }
    } catch (e) {
      /* si falla, se queda el tema por defecto */
    }

    // PASO 8: la muestra inicial se optimiza AQUÍ, dentro de la carga, para
    // que al abrir ya esté colocada y no haya que esperar (y no parezca que
    // se ha quedado colgada)
    estado("Optimizando la muestra inicial…", 7);
    try {
      const previos = await fetch(apiBase() + "api/assets").then((r) => r.json());
      if (Array.isArray(previos) && previos.length === 0) {
        await fetch(apiBase() + "api/demo?n=16", { method: "POST" });
      }
    } catch (e) {
      /* si algo falla, la app arranca igual y lo genera luego */
    }

    estado("Abriendo la aplicación…", 8);
    window.clearTimeout(rotarFrases);
    createRoot(raiz).render(<App />);
  } catch (e: any) {
    pintarCarga("No se pudo iniciar la versión web: " +
                (e && e.message ? e.message : e), true);
  }
}

main();
