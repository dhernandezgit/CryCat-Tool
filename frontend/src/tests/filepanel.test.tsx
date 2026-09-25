import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import FilePanel from "../components/FilePanel";
import type { AppSettings, Asset, Result } from "../api";

declare const global: { fetch: unknown };

const asset = (over: Partial<Asset> = {}): Asset => ({
  id: "a1", name: "gato.png", w_px: 100, h_px: 80, w_mm: 8.47, h_mm: 6.77,
  w_mm_base: 8.47, h_mm_base: 6.77, scale_pct: 100,
  dpi_origen: 300, copies: 1, mini_enabled: false, mini_quota: 1,
  bg_removed: false, warnings: [], ...over,
});

const settings = {
  espacio_mm: 2, margen_mm: 1, rotacion: "no", dpi_salida: 300, pagina: "A4",
  pagina_w: 297, pagina_h: 210, maquina: "estandar", usar_minis: false,
  mini_min_mm: 5, mini_rotacion: "no",
  opt_metodo: "greedy", opt_calidad: "normal", opt_tiempo_max_s: 8, mini_usar_lista: false, mini_tamanos_lista: [50], auto_recalcular: true, corte_velocidad_mm_s: 50, corte_viaje_mm_s: 120, corte_extra_forma_s: 0.4, corte_factor: 1, pikmin_activo: true, pikmin_frecuencia_min: 1, pikmin_sonido: true, pikmin_sonido_morir: true, pikmin_fiesta: false, volumen: 0.5, mute: false, offset_activo: false, offset_mm: 2, offset_modo: "extender", offset_color: "#ffffff",
  color_formato: "rgba", chequear_lineas: true, carpeta_export: "",
  dpi_importacion: 300, lienzo: "recortable", tema: "wiwi",
  ver_guias: true, fondo_transparente: false,
} as AppSettings;

const result = {
  pages: 1, placements: [
    { uid: "a1#0", asset_id: "a1", page: 0, x: 10, y: 10, w: 8.47, h: 6.77, angle: 0, mini: false, scale: 1, pinned: false, rot90: false },
    { uid: "a1#mini0", asset_id: "a1", page: 0, x: 20, y: 20, w: 4, h: 3, angle: 0, mini: true, scale: 0.4, pinned: false, rot90: false },
  ],
  efficiency: 0.5, bbox_mm: [269.8, 183] as [number, number],
  bbox_offset_mm: [13.6, 13.5] as [number, number], poly_mm: [],
  page_mm: [297, 210] as [number, number], warnings: [], method: "bssf/area",
  minis: 1, placed: 2,
} as Result;

const onChange = vi.fn().mockResolvedValue(undefined);
const saveSettings = vi.fn().mockResolvedValue(undefined);

beforeEach(() => {
  onChange.mockClear();
  saveSettings.mockClear();
  global.fetch = vi.fn().mockResolvedValue({
    ok: true, json: async () => ({ ok: true }),
  });
});

describe("Panel de archivos", () => {
  it("muestra la zona de arrastre con + y el contador total", () => {
    render(<FilePanel assets={[asset()]} result={result} settings={settings} onChange={onChange} saveSettings={saveSettings} />);
    expect(screen.getByTestId("dropzone")).toBeInTheDocument();
    expect(screen.getByTestId("total-assets")).toHaveTextContent("1");
  });

  it("cada tarjeta tiene preview, nombre, copias con +/− y borrado", () => {
    render(<FilePanel assets={[asset()]} result={result} settings={settings} onChange={onChange} saveSettings={saveSettings} />);
    expect(screen.getByAltText("gato.png")).toBeInTheDocument();
    expect(screen.getByTestId("copias-a1")).toHaveTextContent("1");
    fireEvent.click(screen.getByTestId("suma-a1"));
    expect(screen.getByTestId("copias-a1")).toHaveTextContent("2");
  });

  it("las copias no bajan de 0", () => {
    render(<FilePanel assets={[asset({ copies: 0 })]} result={result} settings={settings} onChange={onChange} saveSettings={saveSettings} />);
    fireEvent.click(screen.getByTestId("resta-a1"));
    expect(screen.getByTestId("copias-a1")).toHaveTextContent("0");
  });

  it("el mini por elemento se activa con cuota 1 y admite subirla", async () => {
    const u = userEvent.setup();
    render(<FilePanel assets={[asset()]} result={result} settings={settings} onChange={onChange} saveSettings={saveSettings} />);
    await u.click(screen.getByTestId("mini-a1"));
    // la cuota empieza en 1 (reparto equitativo)
    expect(screen.getByTestId("cuota-a1")).toHaveTextContent("×1");
    expect(screen.getByTestId("minis-a1")).toHaveTextContent("→ 1 minis");
    // sube de 0.5 en 0.5 (admite decimales)
    await u.click(screen.getByTestId("cuota-mas-a1"));
    expect(screen.getByTestId("cuota-a1")).toHaveTextContent("×1.5");
    await u.click(screen.getByTestId("cuota-menos-a1"));
    expect(screen.getByTestId("cuota-a1")).toHaveTextContent("×1");
    // nunca baja de 1
    await u.click(screen.getByTestId("cuota-menos-a1"));
    expect(screen.getByTestId("cuota-a1")).toHaveTextContent("×1");
    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/assets/a1",
        expect.objectContaining({ method: "PATCH" })
      )
    );
  });

  it("el botón Descartar imágenes borra la sesión", async () => {
    const u = userEvent.setup();
    render(<FilePanel assets={[asset()]} result={result} settings={settings} onChange={onChange} saveSettings={saveSettings} />);
    await u.click(screen.getByTestId("borrar-todo"));
    expect(global.fetch).toHaveBeenCalledWith("/api/assets", { method: "DELETE" });
    expect(onChange).toHaveBeenCalled();
  });

  it("Descartar imágenes se desactiva sin imágenes", () => {
    render(<FilePanel assets={[]} result={null} settings={settings} onChange={onChange} saveSettings={saveSettings} />);
    expect(screen.getByTestId("borrar-todo")).toBeDisabled();
  });

  it("muestra el aviso de líneas anómalas", () => {
    render(<FilePanel assets={[asset({ warnings: ["Línea anómala horizontal en fila 12"] })]} result={null} settings={settings} onChange={onChange} saveSettings={saveSettings} />);
    expect(screen.getByText(/línea anómala/i)).toBeInTheDocument();
  });

  it("muestra el tamaño en mm y permite cambiar la escala", async () => {
    const u = userEvent.setup();
    render(<FilePanel assets={[asset()]} result={result} settings={settings} onChange={onChange} saveSettings={saveSettings} />);
    expect(screen.getByTestId("tamano-a1")).toHaveTextContent("8.5×6.8 mm");
    const slider = screen.getByTestId("escala-a1") as HTMLInputElement;
    fireEvent.change(slider, { target: { value: "200" } });
    // el tamaño se recalcula en vivo (200%)
    expect(screen.getByTestId("tamano-a1")).toHaveTextContent("16.9×13.5 mm");
    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/assets/a1",
        expect.objectContaining({ method: "PATCH" })
      )
    );
  });

  it("cada elemento tiene botones de abrir carpeta y reemplazar", async () => {
    const u = userEvent.setup();
    render(<FilePanel assets={[asset()]} result={null} settings={settings} onChange={onChange} saveSettings={saveSettings} />);
    // abrir carpeta del elemento
    await u.click(screen.getByTestId("abrir-carpeta-a1"));
    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/fs/open", expect.objectContaining({ method: "POST" })
      )
    );
    // reemplazar: el botón abre el selector de archivos
    expect(screen.getByTestId("reemplazar-a1")).toBeInTheDocument();
  });

  it("permite fijar el tamaño exacto en mm por ancho o por alto", async () => {
    render(<FilePanel assets={[asset()]} result={result} settings={settings}
                       onChange={onChange} saveSettings={saveSettings} />);
    const ancho = screen.getByTestId("ancho-mm-a1") as HTMLInputElement;
    const alto = screen.getByTestId("alto-mm-a1") as HTMLInputElement;
    expect(ancho.value).toBe("8.5");
    expect(alto.value).toBe("6.8");
    // fijando el ancho, el alto se ajusta solo (proporción)
    fireEvent.focus(ancho);
    fireEvent.change(ancho, { target: { value: "16.94" } });
    expect(screen.getByTestId("tamano-a1")).toHaveTextContent("16.9×13.5 mm");
    expect(alto.value).toBe("13.5");
    expect(screen.getByText("200%")).toBeInTheDocument();
    // y fijando el alto, el ancho se ajusta solo
    fireEvent.focus(alto);
    fireEvent.change(alto, { target: { value: "20.31" } });
    expect(screen.getByTestId("tamano-a1")).toHaveTextContent("25.4×20.3 mm");
    expect(ancho.value).toBe("25.4");
    expect(screen.getByText("300%")).toBeInTheDocument();
    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/assets/a1",
        expect.objectContaining({ method: "PATCH" })
      )
    );
  });

  it("no muestra NaN aunque falten campos (sesiones antiguas)", () => {
    const viejo = {
      id: "v1", name: "viejo.png", w_px: 60, h_px: 40, w_mm: 5, h_mm: 3.3,
      dpi_origen: 300, copies: 1, mini_enabled: false, mini_quota: 1,
      bg_removed: false,
    } as unknown as Asset;   // sin scale_pct ni w_mm_base
    render(<FilePanel assets={[viejo]} result={null} settings={settings} onChange={onChange} saveSettings={saveSettings} />);
    expect(screen.getByTestId("tamano-v1")).toHaveTextContent("5.0×3.3 mm");
    expect(screen.getByText("100%")).toBeInTheDocument();
    expect(screen.queryByText(/NaN/)).toBeNull();
  });
});
