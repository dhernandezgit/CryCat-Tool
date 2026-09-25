import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "../App";

// ---- mock de fetch a la API -------------------------------------------
const asset = {
  id: "a1", name: "gato.png", w_px: 100, h_px: 80, w_mm: 8.47, h_mm: 6.77,
  w_mm_base: 8.47, h_mm_base: 6.77, scale_pct: 100, dpi_origen: 300,
  copies: 2, mini_enabled: false, mini_quota: 1,
  bg_removed: false, warnings: [],
};
const result = {
  pages: 1, placements: [
    { uid: "a1#0", asset_id: "a1", page: 0, x: 10, y: 10, w: 8.47, h: 6.77, angle: 0, mini: false, scale: 1, pinned: false, rot90: false },
  ],
  efficiency: 0.7, bbox_mm: [269.8, 183] as [number, number],
  bbox_offset_mm: [13.6, 13.5] as [number, number],
  poly_mm: [[13.6, 13.5], [283.4, 13.5], [283.4, 196.5], [13.6, 196.5]],
  page_mm: [297, 210] as [number, number], warnings: [], method: "bssf/area",
  minis: 0, placed: 1,
};
const settings = {
  espacio_mm: 2, margen_mm: 1, rotacion: "no", dpi_salida: 300, pagina: "A4",
  pagina_w: 297, pagina_h: 210, maquina: "estandar", usar_minis: false,
  mini_min_mm: 5, mini_rotacion: "no",
  opt_metodo: "greedy", opt_calidad: "normal", opt_tiempo_max_s: 8, mini_usar_lista: false, mini_tamanos_lista: [50], auto_recalcular: true, corte_velocidad_mm_s: 50, corte_viaje_mm_s: 120, corte_extra_forma_s: 0.4, corte_factor: 1, pikmin_activo: true, pikmin_frecuencia_min: 1, pikmin_sonido: true, pikmin_sonido_morir: true, pikmin_fiesta: false, volumen: 0.5, mute: false, offset_activo: false, offset_mm: 2, offset_modo: "extender", offset_color: "#ffffff",
  color_formato: "rgba", chequear_lineas: true, carpeta_export: "",
  dpi_importacion: 300, lienzo: "recortable", tema: "wiwi",
  ver_guias: true, fondo_transparente: false,
};

const jobDone = {
  id: "j1", status: "done", progress: 1, pages: 1, done: true,
  message: "¡Listo!", eta_s: 0, efficiency: 0.7, warnings: [], unplaced: 0,
};

function mockFetch(url: string) {
  const u = String(url);
  const ok = (data: unknown) => ({ ok: true, json: async () => data });
  if (u.includes("/api/health")) return ok({ ok: true });
  if (u.includes("/api/presets")) return ok({ names: [] });
  if (u.includes("/api/estimate")) return ok({ maquina: "Cricut Maker 5", segundos: 60, factor: 1, paginas: [], desglose: {} });
  if (u.includes("/api/settings")) return ok({ settings, pages: [] });
  if (u.includes("/api/assets/a1/blobs")) return ok({
    blobs: [
      { id: 1, area_px: 5000, bbox: [0, 0, 50, 50], principal: true },
      { id: 2, area_px: 40, bbox: [60, 10, 68, 18], principal: false },
    ],
    w: 100, h: 80, preview_png: "data:image/png;base64,AAAA",
  });
  if (u.includes("/api/assets/a1/limpiar-contorno")) return ok(asset);
  if (u.includes("/api/assets/a1/preview")) return ok({});
  if (u === "/api/assets") return ok([asset]);
  if (u.includes("/api/placements/move")) return ok({ ok: true, placement: {} });
  if (u.includes("/api/placements/unpin")) return ok(jobDone);
  if (u.includes("/api/optimize")) return ok(jobDone);
  if (u.includes("/api/job/")) return ok(jobDone);
  if (u.includes("/api/result")) return ok(result);
  if (u.includes("/api/pages/")) return ok({});
  return ok({});
}

beforeEach(() => {
  vi.stubGlobal("fetch", vi.fn(async (input: RequestInfo | URL) => mockFetch(String(input))));
});

describe("App completa", () => {
  it("carga ajustes, assets y resultado; muestra las 4 zonas", async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByTestId("file-panel")).toBeInTheDocument());
    expect(screen.getByTestId("settings-panel")).toBeInTheDocument();
    expect(screen.getByTestId("viewer")).toBeInTheDocument();
    expect(screen.getByTestId("statusbar")).toBeInTheDocument();
    expect(await screen.findByAltText("gato.png")).toBeInTheDocument();
  });

  it("el ojo alterna blanco → transparencia → verde fosforito", async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByTestId("viewer")).toBeInTheDocument());
    const page = await screen.findByTestId("page-0");
    expect(page).toHaveClass("white-bg");           // por defecto blanco
    const u = userEvent.setup();
    await u.click(screen.getByTestId("btn-ojo"));
    expect(screen.getByTestId("page-0")).toHaveClass("alpha-bg");
    await u.click(screen.getByTestId("btn-ojo"));
    expect(screen.getByTestId("page-0")).toHaveClass("fondo-fosforito");
    await u.click(screen.getByTestId("btn-ojo"));
    expect(screen.getByTestId("page-0")).toHaveClass("white-bg");
  });

  it("las guías Cricut se muestran y se ocultan para todas las páginas a la vez", async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByTestId("viewer")).toBeInTheDocument());
    await screen.findByTestId("page-0");
    expect(screen.getByTestId("btn-guias")).toHaveTextContent("▦");
    const u = userEvent.setup();
    await u.click(screen.getByTestId("btn-guias"));
    expect(screen.getByTestId("btn-guias")).toHaveTextContent("▢");
    expect(screen.queryByTestId("page-0")?.querySelector(".overlay-svg")).toBeNull();
  });

  it("los separadores arrastrables existen", async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByTestId("splitter-left")).toBeInTheDocument());
    expect(screen.getByTestId("splitter-center")).toBeInTheDocument();
  });

  it("tiene un botón de recálculo entre las guías y los controles", async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByTestId("btn-recalcular")).toBeInTheDocument());
    const btn = screen.getByTestId("btn-recalcular");
    expect(btn.textContent).toMatch(/Recalcular (rápido|óptimo)/);
    const u = userEvent.setup();
    await u.click(btn);
    await waitFor(() =>
      expect(vi.mocked(global.fetch as never)).toHaveBeenCalledWith(
        "/api/optimize",
        expect.objectContaining({ method: "POST" })
      )
    );
  });

  it("el editor de contorno (blobs) se abre y permite guardar/descartar", async () => {
    const u = userEvent.setup();
    render(<App />);
    await waitFor(() => expect(screen.getByTestId("file-panel")).toBeInTheDocument());
    // abre el editor desde el botón del elemento
    await u.click(await screen.findByTestId("limpiar-a1"));
    expect(await screen.findByTestId("editor-blobs")).toBeInTheDocument();
    // muestra el blob no principal como clicable (marcado por defecto)
    expect(screen.getByTestId("blob-0")).toHaveClass("sel");
    // guardar llama a la API de limpieza
    await u.click(screen.getByTestId("btn-guardar-contorno"));
    await waitFor(() =>
      expect(vi.mocked(global.fetch as never)).toHaveBeenCalledWith(
        "/api/assets/a1/limpiar-contorno",
        expect.objectContaining({ method: "POST" })
      )
    );
    // y vuelve a la vista normal
    await waitFor(() =>
      expect(screen.queryByTestId("editor-blobs")).toBeNull()
    );
  });

  it("los 3 botones del visor existen y el nombre empieza vacío con sugerencia", async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByTestId("btn-guardar")).toBeInTheDocument());
    expect(screen.getByTestId("btn-guardar-como")).toBeInTheDocument();
    // el botón de imprimir existe y guarda antes de imprimir
    expect(screen.getByTestId("btn-imprimir")).toBeInTheDocument();
    const nombre = screen.getByTestId("save-name") as HTMLInputElement;
    expect(nombre).toHaveValue("");                       // vacío por defecto
    expect(nombre.placeholder.length).toBeGreaterThan(3);  // sugerencia en gris
  });
});
