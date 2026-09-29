import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Modos from "../components/Modos";
import type { AppSettings } from "../api";

const saveSettings = vi.fn().mockResolvedValue(undefined);
const settings = { modo_forma: "siluetas", tema: "wiwi",
                   idioma: "es" } as unknown as AppSettings;

beforeEach(() => {
  saveSettings.mockClear();
  vi.stubGlobal("fetch", vi.fn(async (input: RequestInfo | URL) => {
    const u = String(input);
    const ok = (data: unknown) => ({ ok: true, json: async () => data });
    if (u.includes("/api/modos")) {
      return ok({ modos: {
        silueta: { modo_forma: "siluetas", rotacion: "libre" },
        rectangulos: { modo_forma: "rectangulos", rotacion: "90" },
      }, slots: [] });
    }
    return ok({});
  }));
});

describe("Selector de modos", () => {
  it("solo ofrece Silueta (principal, por defecto) y Rectángulos", async () => {
    render(<Modos settings={settings} saveSettings={saveSettings} />);
    await waitFor(() =>
      expect(screen.getByTestId("modo-silueta")).toBeInTheDocument());
    expect(screen.getByTestId("modo-silueta")).toHaveClass("principal");
    expect(screen.getByTestId("modo-silueta")).toHaveClass("on");
    expect(screen.getByTestId("modo-rectangulos")).toBeInTheDocument();
    // los huecos personalizados y los otros modos ya no existen
    expect(screen.queryByTestId("modos-slots")).toBeNull();
    expect(screen.queryByTestId("modo-chapas")).toBeNull();
    const orden = Array.from(
      screen.getByTestId("modos").querySelectorAll(".modo-btn"))
      .map((b) => b.getAttribute("data-testid"));
    expect(orden).toEqual(["modo-silueta", "modo-rectangulos"]);
  });

  it("Rectángulos avisa de que es rápido", async () => {
    render(<Modos settings={settings} saveSettings={saveSettings} />);
    await waitFor(() =>
      expect(screen.getByTestId("modo-rectangulos")).toBeInTheDocument());
    expect(screen.getByTestId("modo-rectangulos"))
      .toHaveTextContent(/r[aá]pido/i);
  });

  it("aplica Rectángulos con sus ajustes", async () => {
    const u = userEvent.setup();
    render(<Modos settings={settings} saveSettings={saveSettings} />);
    await waitFor(() =>
      expect(screen.getByTestId("modo-rectangulos")).toBeInTheDocument());
    await u.click(screen.getByTestId("modo-rectangulos"));
    await waitFor(() =>
      expect(saveSettings).toHaveBeenCalledWith(
        { modo_forma: "rectangulos", rotacion: "90" }));
  });

  it("marca el modo activo según los ajustes", async () => {
    render(<Modos settings={{ ...settings, modo_forma: "rectangulos" }}
                 saveSettings={saveSettings} />);
    await waitFor(() =>
      expect(screen.getByTestId("modo-rectangulos")).toHaveClass("on"));
    expect(screen.getByTestId("modo-silueta")).not.toHaveClass("on");
  });
});
