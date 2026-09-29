/* Worker de CryCat para la versión web.

 *  Carga el motor REAL (Pyodide + FastAPI + el paquete crycat) en un HILO
 *  APARTE, de modo que la interfaz siga viva mientras se optimiza y la barra
 *  de progreso reciba los avances de verdad (`crycatProgreso`).
 */
import { cargarCryCat } from "./pyodide-crycat.js";

let py = null;

// el backend llama a esta función en cada avance del cálculo
self.crycatProgreso = (frac, pages, eta, tope) => {
  self.postMessage({ tipo: "progreso", frac: Number(frac),
                     pages: Number(pages), eta: Number(eta || 0),
                     tope: Number(tope || 0) });
};
// si el puente falla, se informa (para poder diagnosticar)
self.crycatError = (msg) => {
  self.postMessage({ tipo: "debug", hookError: String(msg) });
};

function codigoPeticion(method, path, headers, body) {
  return "import json\nfrom crycat import webapi\n" +
    "await webapi.peticion(" + JSON.stringify(method) + ", " +
    JSON.stringify(path) + ", " + JSON.stringify(headers) + ", " +
    JSON.stringify(body) + ")";
}

self.onmessage = async (ev) => {
  const d = ev.data || {};
  try {
    if (d.tipo === "iniciar") {
      py = await cargarCryCat((t, paso) => {
        self.postMessage({ tipo: "estado", t, paso });
      });
      self.postMessage({ tipo: "estado", t: "Instalando FastAPI en el navegador (solo la primera vez)…", paso: 6 });
      await py.runPythonAsync(
        "import asyncio\nfrom crycat import webapi\nawait webapi.iniciar()");
      self.postMessage({ tipo: "listo" });
      return;
    }
    if (d.tipo === "api") {
      const salida = await py.runPythonAsync(
        codigoPeticion(d.method, d.path, d.headers || "{}", d.body || ""));
      self.postMessage({ tipo: "api", id: d.id, salida: JSON.parse(salida) });
      return;
    }
  } catch (e) {
    if (d.tipo === "api") {
      self.postMessage({ tipo: "api", id: d.id,
                         error: String((e && e.message) || e) });
    } else {
      self.postMessage({ tipo: "error", error: String((e && e.message) || e) });
    }
  }
};
