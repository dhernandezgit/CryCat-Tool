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

  it("enseña preview, cuadrícula con todo seleccionado y los PPP", () => {
    render(<ImportDialog open assets={[asset("a", 40, 20), asset("b", 20, 20)]}
                         onClose={() => {}} onDone={() => {}} />);
    expect(screen.getByTestId("import-preview")).toBeInTheDocument();
    expect(screen.getByTestId("import-lista")).toBeInTheDocument();
    expect(screen.getByTestId("import-item-a")).toHaveClass("sel");
    expect(screen.getByTestId("import-item-b")).toHaveClass("sel");
    // por defecto, escala (y NO tamaño fijo: nunca los dos a la vez)
    expect(screen.getByTestId("import-escala")).toBeInTheDocument();
    expect(screen.queryByTestId("import-tamano")).toBeNull();
    expect(screen.getByTestId("import-modo-escala")).toHaveClass("on");
    // los PPP de origen se ven en cada elemento
    expect(screen.getAllByText(/300 ppp/).length).toBe(2);
  });

  it("el modo tamaño fijo enseña el lado y el selector de medida", () => {
    render(<ImportDialog open assets={[asset("a", 40, 20)]}
                         onClose={() => {}} onDone={() => {}} />);
    fireEvent.click(screen.getByTestId("import-modo-tamano"));
    expect(screen.getByTestId("import-tamano")).toBeInTheDocument();
    expect(screen.getByTestId("import-modo")).toBeInTheDocument();
    expect(screen.queryByTestId("import-escala")).toBeNull();
  });

  it("permite deseleccionar y aplica el tamaño del lado mayor", async () => {
    const onDone = vi.fn();
    render(<ImportDialog open assets={[asset("a", 40, 20), asset("b", 20, 20)]}
                         onClose={() => {}} onDone={onDone} />);
    fireEvent.click(screen.getByTestId("import-item-b"));
    expect(screen.getByTestId("import-item-b")).not.toHaveClass("sel");
    // lado mayor 80 mm → A (40) al 200 %; B no se toca
    fireEvent.click(screen.getByTestId("import-modo-tamano"));
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
    fireEvent.click(screen.getByTestId("import-modo-tamano"));
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

  it("el preview se actualiza al cambiar el tamaño y Siguiente no aplica nada", async () => {
    const onDone = vi.fn();
    const onClose = vi.fn();
    render(<ImportDialog open assets={[asset("a", 40, 20)]}
                         onClose={onClose} onDone={onDone} />);
    fireEvent.click(screen.getByTestId("import-modo-tamano"));
    fireEvent.change(screen.getByTestId("import-tamano"), { target: { value: "80" } });
    const prev = screen.getByTestId("import-preview-a") as HTMLElement;
    await waitFor(() => expect(parseFloat(prev.style.width)).toBeGreaterThan(35));
    // "Siguiente" cierra sin tocar nada
    fireEvent.click(screen.getByTestId("import-siguiente"));
    expect(onClose).toHaveBeenCalled();
    expect(onDone).not.toHaveBeenCalled();
  });
});
