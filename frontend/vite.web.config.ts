import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Build de la versión WEB: la misma app React, empaquetada como módulo que
 *  carga docs/web/index.html (GitHub Pages) con el backend en Pyodide. */
export default defineConfig({
  plugins: [react()],
  // el bundle se usa directamente en el navegador: hay que sustituir
  // process.env.NODE_ENV (Vite en modo librería lo deja sin tocar)
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    // sello único por compilación: evita que el navegador use un cargador viejo
    __SELLO__: JSON.stringify(String(Date.now())),
  },
  build: {
    outDir: "../docs/web/app",
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: "src/web.tsx",
      formats: ["es"],
      fileName: () => "web.js",
    },
    rollupOptions: {
      output: { assetFileNames: (info) =>
        (info.name || "").endsWith(".css") ? "web.css" : "web.[ext]" },
    },
  },
});
