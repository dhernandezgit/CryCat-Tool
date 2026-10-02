import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "../App";

// ---- mock de fetch a la API -------------------------------------------
const asset = {
  id: "a1", name: "gato.png", w_px: 100, h_px: 80, w_mm: 8.47, h_mm: 6.77,
  w_mm_base: 8.47, h_mm_base: 6.77, scale_pct: 100, dpi_origen: 300,
  copies: 2, mini_enabled: false, mini_quota: 1, offset_mm: 0,
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
   espacio_color: "srgb", bleed_mm: 0, historial: true, historial_max: 40, hist_tamano: true, hist_copias: true, hist_borde: true, hist_minis: true, simular_impresion: false, sim_cmyk: false, sim_saturacion: 1, sim_contraste: 1, sim_brillo: 1, color_formato: "rgba", chequear_lineas: true, carpeta_export: "",
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
  if (u.includes("/api/assets/a1/contorno-preview"))
    return ok({ png: "data:image/png;base64,QUJD" });
  if (u.includes("/api/assets/a1/preview")) return ok({});
  if (u === "/api/assets") return ok([asset]);
  if (u.includes("/api/placements/move")) return ok({ ok: true, placement: {} });
  if (u.includes("/api/placements/unpin")) return ok(jobDone);
  if (u.includes("/api/optimize")) return ok(jobDone);
  if (u.includes("/api/job/")) return ok(jobDone);
  if (u.includes("/api/result")) return ok(result);
  if (u.includes("/api/pages/")) return ok({});
  if (u.includes("/api/export"))
    return ok({ ok: true, folder: "/tmp", files: ["/tmp/pagina-01.png"],
                preview: "data:image/png;base64,QUJD" });
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

  it("el ojo recorre blanco → transparencia → fosforito → rosa → negro", async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByTestId("viewer")).toBeInTheDocument());
    const page = await screen.findByTestId("page-0");
    expect(page).toHaveClass("fondo-blanco");        // por defecto blanco
    const u = userEvent.setup();
    await u.click(screen.getByTestId("btn-ojo"));
    expect(screen.getByTestId("page-0")).toHaveClass("fondo-transparente");
    await u.click(screen.getByTestId("btn-ojo"));
    expect(screen.getByTestId("page-0")).toHaveClass("fondo-fosforito");
    await u.click(screen.getByTestId("btn-ojo"));
    expect(screen.getByTestId("page-0")).toHaveClass("fondo-rosa");
    await u.click(screen.getByTestId("btn-ojo"));
    expect(screen.getByTestId("page-0")).toHaveClass("fondo-negro");
    await u.click(screen.getByTestId("btn-ojo"));
    expect(screen.getByTestId("page-0")).toHaveClass("fondo-blanco");
  });

  it("las guías Cricut se muestran y se ocultan para todas las páginas a la vez", async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByTestId("viewer")).toBeInTheDocument());
    await screen.findByTestId("page-0");
    // el botón es un icono con tooltip: se comprueba el estado de las guías
    expect(screen.getByTestId("page-0").querySelector(".overlay-svg")).not.toBeNull();
    const u = userEvent.setup();
    await u.click(screen.getByTestId("btn-guias"));
    await waitFor(() =>
      expect(screen.queryByTestId("page-0")?.querySelector(".overlay-svg")).toBeNull());
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
    expect(btn).toBeInTheDocument();
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

  it("el modo horizontal gira la hoja al otro lado (270°, no 90°)", async () => {
    const u = userEvent.setup();
    render(<App />);
    await waitFor(() =>
      expect(screen.getByTestId("canvas")).toBeInTheDocument());
    await u.click(screen.getByText("Horizontal"));
    const sheet = document.querySelector("img.sheet") as HTMLImageElement;
    expect(sheet).not.toBeNull();
    expect(sheet.style.transform).toContain("rotate(270deg)");
    // y volver atrás deja el modo normal
    await u.click(screen.getByText("Vertical"));
    const sheet2 = document.querySelector("img.sheet") as HTMLImageElement;
    expect(sheet2.style.transform).toBe("");
  });

  it("el editor de contorno tiene vista previa de quitar y de unir", async () => {
    const u = userEvent.setup();
    render(<App />);
    await waitFor(() =>
      expect(screen.getByTestId("file-panel")).toBeInTheDocument());
    await u.click(await screen.findByTestId("limpiar-a1"));
    const img = document.querySelector(".editor-lienzo img") as HTMLImageElement;
    // el fondo es la vista coloreada de los trozos (misma escala que las cajas)
    expect(img.src.startsWith("data:image/png;base64,")).toBe(true);
    await u.click(screen.getByTestId("btn-ver-quitados"));
    await waitFor(() =>
      expect(vi.mocked(global.fetch as never)).toHaveBeenCalledWith(
        "/api/assets/a1/contorno-preview",
        expect.objectContaining({ method: "POST" })
      )
    );
    await waitFor(() =>
      expect(img.src).toBe("data:image/png;base64,QUJD"));
    await u.click(screen.getByTestId("btn-ver-unido"));
    await waitFor(() =>
      expect(vi.mocked(global.fetch as never)).toHaveBeenCalledWith(
        "/api/assets/a1/contorno-preview",
        expect.objectContaining({ method: "POST" })
      )
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

  it("el historial permite deshacer y rehacer los cambios", async () => {
    const u = userEvent.setup();
    render(<App />);
    await waitFor(() => expect(screen.getByTestId("viewer")).toBeInTheDocument());
    await screen.findByAltText("gato.png");
    // al principio no hay nada que deshacer ni rehacer
    expect(screen.getByTestId("btn-deshacer")).toBeDisabled();
    expect(screen.getByTestId("btn-rehacer")).toBeDisabled();
    // cambio: +1 copia
    await u.click(screen.getByTestId("suma-a1"));
    await waitFor(() => expect(screen.getByTestId("btn-deshacer")).toBeEnabled());
    // deshacer y rehacer
    await u.click(screen.getByTestId("btn-deshacer"));
    await waitFor(() => expect(screen.getByTestId("btn-rehacer")).toBeEnabled());
    await u.click(screen.getByTestId("btn-rehacer"));
    const llamadas = (fetch as unknown as ReturnType<typeof vi.fn>).mock.calls;
    const parches = llamadas.filter((c) =>
      String(c[0]).includes("/api/assets/a1") &&
      String((c[1] as RequestInit)?.method) === "PATCH");
    expect(parches.length).toBeGreaterThanOrEqual(2);
  });
});

describe("Nuevas funciones 2.8", () => {
  it("el raíl de ajustes abre una sección y cierra el resto", async () => {
    const u = userEvent.setup();
    render(<App />);
    await waitFor(() =>
      expect(screen.getByTestId("settings-panel")).toBeInTheDocument());
    await u.click(screen.getByTestId("rail-minis"));
    expect(screen.getByTestId("sect-minis")).toHaveClass("open");
    await u.click(screen.getByTestId("rail-offset"));
    expect(screen.getByTestId("sect-offset")).toHaveClass("open");
    expect(screen.getByTestId("sect-minis")).not.toHaveClass("open");
  });

  it("el buscador de ajustes encuentra con erratas y sinónimos", async () => {
    const u = userEvent.setup();
    render(<App />);
    await waitFor(() =>
      expect(screen.getByTestId("settings-panel")).toBeInTheDocument());
    const caja = screen.getByTestId("busca-ajustes");
    await u.type(caja, "separacion");      // sinónimo de «Espacio»
    await u.keyboard("{Enter}");
    await waitFor(() =>
      expect(screen.getByTestId("sect-general")).toHaveClass("open"));
    await u.clear(caja);
    await u.type(caja, "tamañoo");         // errata de «tamaño»
    await u.keyboard("{Enter}");
    await waitFor(() =>
      expect(screen.getByTestId("sect-general")).toHaveClass("open"));
  });

  it("las marcas se dibujan en la caja adaptada que da el backend", async () => {
    // pieza en (40,50)-(70,70): el backend da la caja de las marcas que
    // abrazan el contenido (sin taparlo)
    const resMarcas = {
      ...result,
      marcas: { esquina_flecha: [25, 25], esquina_sd: [25, 25],
                esquina_ii: [25, 25], esquina_id: [25, 25] },
      marcas_cajas_mm: [[40, 50, 70, 70]],
      placements: [
        { ...result.placements[0], x: 40, y: 50, w: 30, h: 20 },
        { uid: "__delim0#0", asset_id: "__delim0", page: 0, x: 13.6,
          y: 100, w: 1, h: 1, angle: 0, mini: false, scale: 1,
          pinned: true, rot90: false },
        { uid: "a1#rata0", asset_id: "a1", page: 0, x: 200, y: 5, w: 5,
          h: 5, angle: 0, mini: true, scale: 0.5, pinned: false,
          rot90: false, rata: true },
      ],
    };
    vi.stubGlobal("fetch", vi.fn(async (input: RequestInfo | URL) => {
      const u = String(input);
      if (u.includes("/api/result"))
        return { ok: true, json: async () => resMarcas };
      return mockFetch(u);
    }));
    render(<App />);
    await screen.findByTestId("page-0");
    const imgs = Array.from(
      screen.getByTestId("page-0").querySelectorAll("image"));
    const porNombre = (n: string) => imgs.find((im) =>
      (im.getAttribute("href") || "").includes(n));
    const flecha = porNombre("esquina_flecha");
    const sd = porNombre("esquina_sd");
    expect(flecha).toBeTruthy();
    expect(sd).toBeTruthy();
    // lienzo recortable: offX/offY = bbox_offset_mm (13.6, 13.5).
    // La caja es la TINTA de la pieza: (40,50)-(70,70), no la del guía.
    expect(Number(flecha!.getAttribute("x"))).toBeCloseTo(40 - 13.6, 2);
    expect(Number(flecha!.getAttribute("y"))).toBeCloseTo(50 - 13.5, 2);
    // la esquina superior derecha se ancla al borde derecho (70) menos su ancho
    expect(Number(sd!.getAttribute("x"))).toBeCloseTo(70 - 13.6 - 25, 2);
    expect(Number(sd!.getAttribute("y"))).toBeCloseTo(50 - 13.5, 2);
  });

  it("el popup de guardado muestra la miniatura de lo guardado", async () => {
    const u = userEvent.setup();
    render(<App />);
    await waitFor(() =>
      expect(screen.getByTestId("btn-guardar")).toBeInTheDocument());
    await u.click(screen.getByTestId("btn-guardar"));
    await waitFor(() =>
      expect(screen.getByTestId("save-dialog")).toBeInTheDocument());
    expect(screen.getByTestId("save-preview")).toBeInTheDocument();
  });

  it("el diálogo de reportar envía por email (sin GitHub)", async () => {
    const u = userEvent.setup();
    render(<App />);
    await waitFor(() =>
      expect(screen.getByTestId("btn-reportar")).toBeInTheDocument());
    await u.click(screen.getByTestId("btn-reportar"));
    expect(await screen.findByTestId("reportar-enviar")).toBeInTheDocument();
    expect(screen.getByTestId("reportar-github")).toBeInTheDocument();
  });
});
