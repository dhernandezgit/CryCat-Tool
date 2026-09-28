import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Modos from "../components/Modos";
import type { AppSettings } from "../api";

const saveSettings = vi.fn().mockResolvedValue(undefined);

const settings = {
  modo_forma: "siluetas", tema: "wiwi", idioma: "es",
} as unknown as AppSettings;

const SLOTS = [
  { nombre: "Pikmin A4", ajustes: { modo_forma: "redondas", espacio_mm: 0.5 } },
  { nombre: "Modo 2", ajustes: null },
  { nombre: "Modo 3", ajustes: null },
];

beforeEach(() => {
  saveSettings.mockClear();
  vi.stubGlobal("fetch", vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const u = String(input);
    const ok = (data: unknown) => ({ ok: true, json: async () => data });
    if (u.includes("/api/modos")) {
      if (init?.method === "POST" && u.endsWith("/load")) {
        return ok({ ok: true, settings: SLOTS[0].ajustes, job: null });
      }
      if (init?.method === "POST") return ok({ ok: true, slots: SLOTS });
      if (init?.method === "PATCH") {
        return ok({ ok: true, slots: [{ ...SLOTS[0], nombre: "Nuevo" },
                                      SLOTS[1], SLOTS[2]] });
      }
      if (init?.method === "DELETE") return ok({ ok: true, slots: SLOTS });
      return ok({ modos: { chapas: { modo_forma: "redondas", espacio_mm: 0.5 },
                           carteles: { modo_forma: "rectangulos" } },
                  slots: SLOTS });
    }
    return ok({});
  }));
});

describe("Selector de modos", () => {
  it("pinta los tres modos grandes con el principal (pegatinas) en el centro", async () => {
    render(<Modos settings={settings} saveSettings={saveSettings} />);
    await waitFor(() => expect(screen.getByTestId("modo-chapas")).toBeInTheDocument());
    const chapas = screen.getByTestId("modo-chapas");
    const pegatinas = screen.getByTestId("modo-pegatinas");
    const carteles = screen.getByTestId("modo-carteles");
    expect(chapas).toBeInTheDocument();
    expect(pegatinas).toHaveClass("principal");
    // orden visual: chapas (izquierda) · pegatinas (centro) · carteles (dcha)
    const orden = Array.from(
      screen.getByTestId("modos").querySelectorAll(".modo-btn"))
      .map((b) => b.getAttribute("data-testid"));
    expect(orden).toEqual(["modo-chapas", "modo-pegatinas", "modo-carteles"]);
  });

  it("aplica el modo de fábrica al pulsarlo", async () => {
    const u = userEvent.setup();
    render(<Modos settings={settings} saveSettings={saveSettings} />);
    await waitFor(() => expect(screen.getByTestId("modo-chapas")).toBeInTheDocument());
    await u.click(screen.getByTestId("modo-chapas"));
    await waitFor(() =>
      expect(saveSettings).toHaveBeenCalledWith(
        { modo_forma: "redondas", espacio_mm: 0.5 }));
  });

  it("carga un modo personalizado guardado", async () => {
    const u = userEvent.setup();
    render(<Modos settings={settings} saveSettings={saveSettings} />);
    await waitFor(() => expect(screen.getByText("Pikmin A4")).toBeInTheDocument());
    await u.click(screen.getByTestId("slot-0-cargar"));
    await waitFor(() =>
      expect(saveSettings).toHaveBeenCalledWith(SLOTS[0].ajustes));
  });

  it("guarda los ajustes actuales en un hueco vacío", async () => {
    const u = userEvent.setup();
    render(<Modos settings={settings} saveSettings={saveSettings} />);
    await waitFor(() => expect(screen.getByTestId("slot-1-guardar")).toBeInTheDocument());
    await u.click(screen.getByTestId("slot-1-guardar"));
    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/modos/1", expect.objectContaining({ method: "POST" })));
  });

  it("permite renombrar un hueco", async () => {
    const u = userEvent.setup();
    render(<Modos settings={settings} saveSettings={saveSettings} />);
    await waitFor(() => expect(screen.getByTestId("slot-0-editar")).toBeInTheDocument());
    await u.click(screen.getByTestId("slot-0-editar"));
    const input = screen.getByTestId("slot-0-nombre");
    await u.clear(input);
    await u.type(input, "Nuevo{Enter}");
    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/modos/0", expect.objectContaining({ method: "PATCH" })));
  });
});
