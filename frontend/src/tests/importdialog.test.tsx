import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ImportDialog from "../components/ImportDialog";
import type { Asset } from "../api";

const asset = (id: string, w: number, h: number): Asset => ({
  id, name: `${id}.png`, w_px: 100, h_px: 100, w_mm: w, h_mm: h,
  w_mm_base: w, h_mm_base: h, dpi_origen: 300, copies: 1,
  mini_enabled: false, mini_quota: 1, offset_mm: 0, scale_pct: 100,
  bg_removed: false, warnings: [],
});

describe("Popup de importación múltiple", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn(async () => ({
      ok: true, json: async () => ({}),
    })));
  });

  it("enseña preview, cuadrícula con todo seleccionado y ajustes", () => {
    render(<ImportDialog open assets={[asset("a", 40, 20), asset("b", 20, 20)]}
                         onClose={() => {}} onDone={() => {}} />);
    expect(screen.getByTestId("import-preview")).toBeInTheDocument();
    expect(screen.getByTestId("import-lista")).toBeInTheDocument();
    expect(screen.getByTestId("import-item-a")).toHaveClass("sel");
    expect(screen.getByTestId("import-item-b")).toHaveClass("sel");
    expect(screen.getByTestId("import-escala")).toBeInTheDocument();
    expect(screen.getByTestId("import-tamano")).toBeInTheDocument();
    expect(screen.getByTestId("import-modo")).toBeInTheDocument();
  });

  it("permite deseleccionar y aplica el tamaño del lado mayor", async () => {
    const onDone = vi.fn();
    render(<ImportDialog open assets={[asset("a", 40, 20), asset("b", 20, 20)]}
                         onClose={() => {}} onDone={onDone} />);
    // deseleccionar el segundo
    fireEvent.click(screen.getByTestId("import-item-b"));
    expect(screen.getByTestId("import-item-b")).not.toHaveClass("sel");
    // lado mayor 80 mm → A (40) al 200 %; B no se toca
    fireEvent.change(screen.getByTestId("import-tamano"), { target: { value: "80" } });
    fireEvent.click(screen.getByTestId("import-conservar"));
    await waitFor(() => expect(onDone).toHaveBeenCalled());
    const llamadas = (fetch as unknown as ReturnType<typeof vi.fn>).mock.calls;
    const parcheA = llamadas.find((c) => String(c[0]).includes("/api/assets/a"));
    const parcheB = llamadas.find((c) => String(c[0]).includes("/api/assets/b"));
    expect(parcheA).toBeTruthy();
    expect(String((parcheA![1] as RequestInit).body)).toContain('"scale_pct":200');
    expect(parcheB).toBeFalsy();
  });

  it("el modo círculo equivalente usa el área (aprox.)", async () => {
    render(<ImportDialog open assets={[asset("a", 20, 20)]}
                         onClose={() => {}} onDone={() => {}} />);
    fireEvent.change(screen.getByTestId("import-modo"),
                     { target: { value: "circulo" } });
    fireEvent.change(screen.getByTestId("import-tamano"),
                     { target: { value: "20" } });
    fireEvent.click(screen.getByTestId("import-conservar"));
    await waitFor(() => expect(screen.getByTestId("import-aviso")).toBeInTheDocument());
    // 20x20 mm → círculo equivalente (d=22,57 mm): 20/22,57 ≈ 88,6 %
    const llamadas = (fetch as unknown as ReturnType<typeof vi.fn>).mock.calls;
    const c = llamadas.find((x) => String(x[0]).includes("/api/assets/a"));
    expect(String((c![1] as RequestInit).body)).toMatch(/"scale_pct":88\.[0-9]/);
  });

  it("el A4 se actualiza solo al cambiar el tamaño y se puede conservar u original", async () => {
    render(<ImportDialog open assets={[asset("a", 40, 20)]}
                         onClose={() => {}} onDone={() => {}} />);
    // al pedir 80 mm de lado mayor, el ancho del preview pasa a ~80/210
    fireEvent.change(screen.getByTestId("import-tamano"), { target: { value: "80" } });
    const prev = screen.getByTestId("import-preview-a") as HTMLElement;
    await waitFor(() => expect(parseFloat(prev.style.width)).toBeGreaterThan(35));
    // conservar aplica; con "tamaño original" vuelve a 100 %
    fireEvent.click(screen.getByTestId("import-original"));
    await waitFor(() => {
      const llamadas = (fetch as unknown as ReturnType<typeof vi.fn>).mock.calls;
      const c = llamadas.find((x) => String(x[0]).includes("/api/assets/a"));
      expect(String((c![1] as RequestInit).body)).toContain('"scale_pct":100');
    });
  });
});
