import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import StatusBar from "../components/StatusBar";
import { THEMES, applyTheme, themeByKey } from "../themes";
import type { Result } from "../api";

beforeEach(() => {
  vi.stubGlobal("fetch", vi.fn(async () => ({
    ok: true,
    json: async () => ({ msgs: ["Rascando Pikachus…"] }),
  })));
});

const result: Result = {
  pages: 2, placements: [], efficiency: 0.62, bbox_mm: [269.8, 183],
  bbox_offset_mm: [13.6, 13.5], poly_mm: [], page_mm: [297, 210],
  warnings: [], method: "bssf/area", minis: 4, placed: 12,
};

describe("Temas", () => {
  it("Wiwi es el tema por defecto y es rosa pastel", () => {
    const th = themeByKey("wiwi");
    expect(th.label).toBe("Wiwi");
    expect(th.colors.bg).toMatch(/^#f/i);
  });

  it("existen los temas Pokémon pedidos", () => {
    for (const k of ["eevee", "fidough", "sprigatito", "maushold", "jirachi",
      "espeon", "espeon-shiny", "umbreon", "hippopotas", "vaporeon"]) {
      expect(THEMES.some((t) => t.key === k), k).toBe(true);
    }
  });

  it("applyTheme fija las variables CSS en :root", () => {
    applyTheme("umbreon");
    expect(document.documentElement.style.getPropertyValue("--bg")).toBe("#2e2b3a");
    expect(document.documentElement.dataset.theme).toBe("umbreon");
    applyTheme("wiwi");
  });
});

describe("Barra de estado", () => {
  it("muestra CryCat con su icono, estado del backend y estimación de corte", () => {
    render(<StatusBar job={null} backendOk result={result}
                      estimate={{ maquina: "Cricut Maker 5", segundos: 95,
                                  factor: 1, paginas: [], desglose: {} }}
                      volumen={0.5} mute={false} />);
    expect(screen.getByText("CryCat")).toBeInTheDocument();
    expect(screen.getByTestId("brand-icon")).toBeInTheDocument();
    expect(screen.getByTestId("backend-status")).toBeInTheDocument();
    // ya no hay reloj, en su lugar el tiempo estimado de corte
    expect(screen.queryByTestId("clock")).toBeNull();
    expect(screen.getByTestId("corte-estimado")).toHaveTextContent(/1 min 35 s/);
  });

  it("tiene botón de mute y barra de volumen", () => {
    const onVolumen = vi.fn();
    const onMute = vi.fn();
    render(<StatusBar job={null} backendOk result={result} estimate={null}
                      volumen={0.4} mute={false}
                      onVolumen={onVolumen} onMute={onMute} />);
    expect(screen.getByTestId("btn-mute").querySelector("svg")).toBeTruthy();
    const vol = screen.getByTestId("volumen") as HTMLInputElement;
    expect(vol.value).toBe("0.4");
    fireEvent.change(vol, { target: { value: "0.8" } });
    expect(onVolumen).toHaveBeenCalledWith(0.8);
    fireEvent.click(screen.getByTestId("btn-mute"));
    expect(onMute).toHaveBeenCalledWith(true);
  });

  it("muestra el icono de mute cuando está silenciado", () => {
    render(<StatusBar job={null} backendOk result={null} estimate={null}
                      volumen={0} mute={true} />);
    expect(screen.getByTestId("btn-mute").querySelector("svg")).toBeTruthy();
  });

  it("sin estimación muestra un guion", () => {
    render(<StatusBar job={null} backendOk result={null} estimate={null} />);
    expect(screen.getByTestId("corte-estimado")).toHaveTextContent("—");
  });

  it("resume el resultado (páginas y eficiencia)", () => {
    render(<StatusBar job={null} backendOk result={result} />);
    expect(screen.getByTestId("status-center")).toHaveTextContent(/12 imágenes en 2 páginas/);
    expect(screen.getByTestId("status-center")).toHaveTextContent(/62%/);
  });

  it("muestra mensajes rotando y progreso/ETA mientras optimiza", async () => {
    render(<StatusBar job={{ id: "j", status: "running", progress: 0.4, pages: 1, done: false, message: "x", eta_s: 5 }} backendOk result={null} />);
    // el mensaje (gris) rota: el primero de la lista cargada
    await screen.findByText("Rascando Pikachus…");
    expect(screen.getByTestId("progress")).toBeInTheDocument();
    expect(screen.getByTestId("eta")).toHaveTextContent(/40%/);
    expect(screen.getByTestId("eta")).toHaveTextContent(/5 s restante/);
  });

  it("avisa cuando no cabe todo en una página", () => {
    render(<StatusBar job={null} backendOk result={result} />);
    const aviso = screen.getByTestId("aviso-paginas");
    expect(aviso).toHaveTextContent(/No cabe en una página: 2 páginas/);
  });

  it("no avisa si todo cabe en una página", () => {
    render(<StatusBar job={null} backendOk result={{ ...result, pages: 1 }} />);
    expect(screen.queryByTestId("aviso-paginas")).toBeNull();
  });
});
