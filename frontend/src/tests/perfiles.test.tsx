import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Perfiles from "../components/Perfiles";

const saveSettings = vi.fn().mockResolvedValue(undefined);

beforeEach(() => {
  saveSettings.mockClear();
  vi.stubGlobal("fetch", vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const u = String(input);
    const ok = (data: unknown) => ({ ok: true, json: async () => data });
    if (u.includes("/api/presets/factory")) {
      return ok({ presets: { chapa: { espacio_mm: 0.5 } } });
    }
    if (u.includes("/api/presets")) {
      if (u.endsWith("/api/presets") && init?.method === "POST") {
        return ok({ ok: true, names: ["Pikmin A4", "Mi setup"] });
      }
      if (u.includes("/load")) {
        return ok({ ok: true, settings: { tema: "wiwi" }, job: null });
      }
      return ok({ names: ["Pikmin A4"] });
    }
    return ok({});
  }));
});

describe("Selector de perfiles", () => {
  it("aplica un perfil de fábrica", async () => {
    const u = userEvent.setup();
    render(<Perfiles saveSettings={saveSettings} />);
    await waitFor(() =>
      expect(screen.getByTestId("perfil-select")).toBeInTheDocument());
    await u.selectOptions(screen.getByTestId("perfil-select"), "fabrica:chapa");
    await waitFor(() =>
      expect(saveSettings).toHaveBeenCalledWith({ espacio_mm: 0.5 }));
  });

  it("carga un perfil guardado", async () => {
    const u = userEvent.setup();
    render(<Perfiles saveSettings={saveSettings} />);
    await waitFor(() =>
      expect(screen.getByText("Pikmin A4")).toBeInTheDocument());
    await u.selectOptions(screen.getByTestId("perfil-select"), "guardado:Pikmin A4");
    await waitFor(() =>
      expect(saveSettings).toHaveBeenCalledWith({ tema: "wiwi" }));
  });

  it("guarda el perfil actual con un nombre", async () => {
    const u = userEvent.setup();
    render(<Perfiles saveSettings={saveSettings} />);
    await u.click(screen.getByTestId("perfil-guardar"));
    await u.type(screen.getByTestId("perfil-nombre-nuevo"), "Mi setup");
    await u.click(screen.getByTestId("perfil-guardar-ok"));
    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/presets", expect.objectContaining({ method: "POST" })));
  });
});
