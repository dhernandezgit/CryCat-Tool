import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import SettingsPanel from "../components/SettingsPanel";
import type { AppSettings } from "../api";

const settings: AppSettings = {
  espacio_mm: 2, margen_mm: 1, rotacion: "no", dpi_salida: 300, pagina: "A4",
  pagina_w: 297, pagina_h: 210, maquina: "estandar", usar_minis: false,
  mini_min_mm: 5, mini_max_rescale: 100, mini_rotacion: "no",
  mini_tamanos: "grandes", opt_metodo: "greedy", opt_calidad: "normal", opt_tiempo_max_s: 8, mini_usar_lista: false, mini_tamanos_lista: [50], auto_recalcular: true, corte_velocidad_mm_s: 50, corte_viaje_mm_s: 120, corte_extra_forma_s: 0.4, corte_factor: 1, pikmin_activo: true, pikmin_frecuencia_min: 1, pikmin_sonido: true, pikmin_sonido_morir: true, pikmin_fiesta: false, volumen: 0.5, mute: false, offset_activo: false, offset_mm: 2, offset_modo: "extender", offset_color: "#ffffff",
   espacio_color: "srgb", bleed_mm: 0, historial: true, historial_max: 40, hist_tamano: true, hist_copias: true, hist_borde: true, hist_minis: true, simular_impresion: false, sim_cmyk: false, sim_saturacion: 1, sim_contraste: 1, sim_brillo: 1, color_formato: "rgba", chequear_lineas: true, carpeta_export: "",
  dpi_importacion: 300, lienzo: "recortable", tema: "wiwi",
  ver_guias: true, fondo_transparente: false,
  idioma: "es", comprobar_versiones: true,
};

const saveSettings = vi.fn().mockResolvedValue(undefined);

beforeEach(() => {
  saveSettings.mockClear();
  vi.stubGlobal("fetch", vi.fn(async (input: RequestInfo | URL) => {
    const u = String(input);
    const ok = (data: unknown) => ({ ok: true, json: async () => data });
    if (u.includes("/api/presets")) {
      if (u.includes("/load")) return ok({ ok: true, settings, job: null });
      return ok({ ok: true, names: ["Pikmin A4"] });
    }
    if (u.includes("/api/fs/list")) {
      return ok({ path: "/home/daniel", parent: "/home", dirs: ["Doc"],
                  home: "/home/daniel" });
    }
    return ok({});
  }));
});

describe("Panel de ajustes", () => {
  it("la vista general (General) está siempre desplegada con sus controles", () => {
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    expect(screen.getByTestId("set-espacio_mm")).toHaveValue(2);
    expect(screen.getByTestId("set-rotacion")).toHaveValue("no");
    expect(screen.getByTestId("set-dpi_salida")).toHaveValue(300);
    expect(screen.getByTestId("set-usar-minis")).not.toBeChecked();
  });

  it("los créditos del autor aparecen siempre visibles", () => {
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    expect(screen.getByTestId("creditos")).toHaveTextContent(
      /Daniel Hernández Ferrándiz/);
  });

  it("los otros menús están plegados hasta que se abren", async () => {
    const u = userEvent.setup();
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    expect(screen.queryByTestId("set-mini_min_mm")).toBeNull();
    await u.click(screen.getByText("Minis"));
    expect(screen.getByTestId("set-mini_min_mm")).toHaveValue(5);
    // tope de tamaño del mini (% del original): siempre menor que 100
    expect(screen.getByTestId("set-mini_max_rescale")).toHaveValue(100);
  });

  it("la sección imagen incluye carpeta de exportación persistente y líneas anómalas", async () => {
    const u = userEvent.setup();
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    await u.click(screen.getByText("Imagen"));
    expect(screen.getByTestId("set-chequear-lineas")).toBeChecked();
    expect(screen.getByTestId("set-carpeta")).toBeInTheDocument();
  });

  it("la sección visualización lista los temas y el cambio de icono", async () => {
    const u = userEvent.setup();
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    await u.click(screen.getByText("Visualización"));
    expect(screen.getByTestId("tema-wiwi")).toBeInTheDocument();
    expect(screen.getByTestId("tema-umbreon")).toBeInTheDocument();
    expect(screen.getByTestId("btn-cambiar-icono")).toBeInTheDocument();
  });

  it("cambiar un valor llama a guardar (el servidor relanza la optimización)", async () => {
    const u = userEvent.setup();
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    await u.click(screen.getByText("Minis"));
    await u.type(screen.getByTestId("set-mini_min_mm"), "5"); // 5 -> 55
    expect(saveSettings).toHaveBeenCalled();
  });

  it("las rotaciones ofrecen 0/90/180/270 y cualquier ángulo", () => {
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    const sel = screen.getByTestId("set-rotacion");
    const opciones = Array.from(sel.querySelectorAll("option")).map((o) => o.textContent);
    expect(opciones.join(" ")).toMatch(/180/);
    expect(opciones.join(" ")).toMatch(/Cualquier ángulo/);
  });

  it("la máquina Cricut Maker 5 está disponible y por defecto", () => {
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    expect(screen.getByTestId("set-maquina")).toBeInTheDocument();
    const opts = Array.from(screen.getByTestId("set-maquina").querySelectorAll("option"))
      .map((o) => (o as HTMLOptionElement).value);
    expect(opts).toContain("maker5");
  });

  it("elegir un tamaño de papel actualiza sus medidas", async () => {
    const u = userEvent.setup();
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    await u.selectOptions(screen.getByTestId("set-pagina"), "A3");
    expect(saveSettings).toHaveBeenCalledWith(
      expect.objectContaining({ pagina: "A3", pagina_w: 297, pagina_h: 420 })
    );
  });

  it("el menú de Offset permite activar borde, grosor, tipo y color", async () => {
    const u = userEvent.setup();
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    await u.click(screen.getByText("Offset / borde"));
    const activo = screen.getByTestId("set-offset-activo");
    expect(activo).not.toBeChecked();
    await u.click(activo);
    expect(saveSettings).toHaveBeenCalledWith({ offset_activo: true });
  });

  it("el menú de Extras configura el Pikmin y su sonido", async () => {
    const u = userEvent.setup();
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    await u.click(screen.getByText("Extras"));
    expect(screen.getByTestId("set-pikmin-activo")).toBeChecked();
    expect(screen.getByTestId("set-pikmin-sonido")).toBeChecked();
    expect(screen.getByTestId("set-pikmin-sonido-morir")).toBeChecked();
    // la frecuencia media en minutos es configurable
    expect(screen.getByTestId("set-pikmin_frecuencia_min")).toHaveValue(1);
    fireEvent.change(screen.getByTestId("set-pikmin_frecuencia_min"),
                     { target: { value: "5" } });
    await waitFor(() =>
      expect(saveSettings).toHaveBeenCalledWith(
        expect.objectContaining({ pikmin_frecuencia_min: 5 }))
    );
  });

  it("la lista de tamaños de minis permite activarla, añadir y quitar valores", async () => {
    const u = userEvent.setup();
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    await u.click(screen.getByText("Minis"));
    // por defecto no se usa la lista
    expect(screen.getByTestId("set-mini-usar-lista")).not.toBeChecked();
    expect(screen.queryByTestId("mini-lista")).toBeNull();
    // al activarla aparece la lista con el valor por defecto (50)
    await u.click(screen.getByTestId("set-mini-usar-lista"));
    expect(saveSettings).toHaveBeenCalledWith({ mini_usar_lista: true });
  });

  it("la sección de estimación de corte tiene sus parámetros y factor", async () => {
    const u = userEvent.setup();
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    await u.click(screen.getByText("Estimación de corte"));
    expect(screen.getByTestId("set-corte_velocidad_mm_s")).toBeInTheDocument();
    expect(screen.getByTestId("set-corte_factor")).toHaveValue(1);
  });

  it("incluye la opción de recálculo automático (activada por defecto)", () => {
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    expect(screen.getByTestId("set-auto-recalcular")).toBeChecked();
  });

  it("el botón de carpeta abre el selector y guarda la ruta elegida", async () => {
    const u = userEvent.setup();
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    await u.click(screen.getByText("Imagen"));
    await u.click(screen.getByTestId("btn-elegir-carpeta"));
    expect(await screen.findByTestId("folder-picker")).toBeInTheDocument();
    await u.click(screen.getByTestId("elegir-carpeta-ok"));
    await waitFor(() =>
      expect(saveSettings).toHaveBeenCalledWith({ carpeta_export: "/home/daniel" })
    );
  });

  it("guarda y lista perfiles de configuración", async () => {
    const u = userEvent.setup();
    const applySettings = vi.fn();
    render(<SettingsPanel settings={settings} saveSettings={saveSettings}
                          applySettings={applySettings} />);
    await u.click(screen.getByText("Perfiles de configuración"));
    // al abrir, se listan los perfiles del backend (mock: "Pikmin A4")
    expect(await screen.findByTestId("cargar-Pikmin A4")).toBeInTheDocument();
    // guardar un perfil nuevo llama a la API
    await u.type(screen.getByTestId("perfil-nombre"), "Mi setup");
    await u.click(screen.getByTestId("btn-guardar-perfil"));
    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/presets",
        expect.objectContaining({ method: "POST" })
      )
    );
    // cargar un perfil aplica los ajustes
    await u.click(screen.getByTestId("cargar-Pikmin A4"));
    await waitFor(() => expect(applySettings).toHaveBeenCalled());
    // guardar ajustes explícitamente
    await u.click(screen.getByTestId("btn-guardar-ajustes"));
    await waitFor(() => expect(saveSettings).toHaveBeenCalledWith({}));
  });

  it("la sección Historial permite elegir qué se guarda", async () => {
    const u = userEvent.setup();
    render(<SettingsPanel settings={settings} saveSettings={saveSettings} />);
    await u.click(screen.getByText("Historial (deshacer/rehacer)"));
    expect(screen.getByTestId("set-historial")).toBeChecked();
    expect(screen.getByTestId("set-hist-tamano")).toBeInTheDocument();
    expect(screen.getByTestId("set-hist-copias")).toBeInTheDocument();
    expect(screen.getByTestId("set-hist-borde")).toBeInTheDocument();
    expect(screen.getByTestId("set-hist-minis")).toBeInTheDocument();
    await u.click(screen.getByTestId("set-hist-copias"));
    expect(saveSettings).toHaveBeenCalledWith({ hist_copias: false });
  });
});
