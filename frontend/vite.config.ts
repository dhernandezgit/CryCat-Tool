import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Puerto del backend (coordinado con ./lanzar.sh mediante BACKEND_PORT)
const backendPort = process.env.BACKEND_PORT || "8712";

// El build de producción se copia al backend (se sirve desde FastAPI)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../backend/crycat/web",
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: false,
    proxy: {
      "/api": `http://127.0.0.1:${backendPort}`,
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.ts",
  },
} as never);
