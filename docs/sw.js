/* Service worker de CryCat web (raíz del sitio).
 *
 * 1) Sirve /api/* contra el backend REAL de CryCat que corre en la página
 *    (Pyodide + FastAPI): la interfaz es exactamente la de escritorio.
 * 2) Reescribe los recursos que la app pide con rutas absolutas
 *    (/pikmin, /pikmin_bloom, /sonidos, /icono.png…) hacia /web/app/.
 *
 * Todo ocurre en tu equipo: no se envía ninguna imagen a ningún servidor.
 */

const BASE = new URL("./web/app/", self.location).pathname;   // /…/web/app/

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

// prefijos de recursos que la app pide en la raíz del sitio
const RECURSOS = ["/pikmin/", "/pikmin_bloom/", "/sonidos/", "/marcas/"];
const SUELTOS = ["/icono.png", "/icono.svg", "/piensa.gif"];

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;        // CDN de Pyodide
  const ruta = url.pathname;

  if (ruta.includes("/api/")) {
    event.respondWith(atenderApi(event.request, url));
    return;
  }
  if (ruta === "/api/icon.png" || ruta.endsWith("/api/icon.png")) {
    event.respondWith(fetch(BASE + "icono.png"));
    return;
  }
  // recursos con ruta absoluta → dentro de /web/app/
  const esRecurso = RECURSOS.some((p) => ruta.includes(p)) ||
                    SUELTOS.some((p) => ruta.endsWith(p));
  if (esRecurso && !ruta.includes("/web/app/")) {
    const marca = ruta.search(/(\/(pikmin|pikmin_bloom|sonidos|marcas)\/.*$)/);
    const final = marca ? marca[1] : ruta.slice(ruta.lastIndexOf("/") + 1);
    event.respondWith(fetch(BASE + final.replace(/^\//, "")).catch(
      () => fetch(event.request)));
  }
});

async function atenderApi(request, url) {
  const clientes = await self.clients.matchAll({
    type: "window", includeUncontrolled: true,
  });
  const cliente = clientes.find((c) => c.visibilityState !== "hidden") || clientes[0];
  if (!cliente) return new Response("CryCat aún no está listo", { status: 503 });

  const cabeceras = {};
  request.headers.forEach((v, k) => { cabeceras[k] = v; });
  let cuerpo = "";
  try {
    cuerpo = aBase64(await request.clone().arrayBuffer());
  } catch { cuerpo = ""; }

  const marca = url.pathname.indexOf("/api/");
  const ruta = url.pathname.slice(marca) + url.search;

  return new Promise((resolver) => {
    const canal = new MessageChannel();
    canal.port1.onmessage = (ev) => {
      const d = ev.data || {};
      try {
        resolver(new Response(deBase64(d.body || ""), {
          status: d.status || 200,
          headers: d.headers || { "content-type": "application/json" },
        }));
      } catch {
        resolver(new Response("error", { status: 500 }));
      }
    };
    cliente.postMessage({
      tipo: "api", method: request.method, path: ruta,
      headers: cabeceras, body: cuerpo,
    }, [canal.port2]);
  });
}

function aBase64(buf) {
  const bytes = new Uint8Array(buf);
  let salida = "";
  const trozo = 0x8000;
  for (let i = 0; i < bytes.length; i += trozo) {
    salida += String.fromCharCode.apply(null, bytes.subarray(i, i + trozo));
  }
  return btoa(salida);
}

function deBase64(txt) {
  const bin = atob(txt);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}
