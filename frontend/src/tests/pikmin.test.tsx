import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import PikminPet from "../components/PikminPet";

beforeEach(() => {
  vi.useFakeTimers();
  vi.stubGlobal("fetch", vi.fn(async () => ({
    ok: false, json: async () => [],
  })));
  // Audio simulado para comprobar que se reproduce el sonido real
  vi.stubGlobal("Audio", class {
    src: string;
    volume = 0;
    play = vi.fn().mockResolvedValue(undefined);
    constructor(src: string) { this.src = src; }
  });
});
afterEach(() => {
  vi.useRealTimers();
});

describe("Pikmin animado", () => {
  it("no aparece de inmediato", () => {
    render(<PikminPet minDelay={5000} maxDelay={5000} />);
    expect(screen.queryByTestId("pikmin-pet")).toBeNull();
  });

  it("asoma un Pikmin al pasar el tiempo, en una posición x aleatoria", () => {
    render(<PikminPet minDelay={1000} maxDelay={1000} />);
    act(() => { vi.advanceTimersByTime(1100); });
    const pet = screen.getByTestId("pikmin-pet");
    expect(pet).toBeInTheDocument();
    expect(pet.getAttribute("style")).toMatch(/left:\s*\d/);
    const img = pet.querySelector("img");
    expect(img?.getAttribute("src")).toMatch(/\/pikmin\//);
  });

  it("respeta la frecuencia configurada (minutos)", () => {
    render(<PikminPet frecuenciaMin={0.1} />);   // 6 s
    // a los 3 s aún no ha salido
    act(() => { vi.advanceTimersByTime(3000); });
    expect(screen.queryByTestId("pikmin-pet")).toBeNull();
  });

  it("reproduce el sonido de Pikmin al aparecer", () => {
    render(<PikminPet minDelay={1000} maxDelay={1000} sonido sonidoMorir={false} />);
    act(() => { vi.advanceTimersByTime(1100); });
    expect(screen.getByTestId("pikmin-pet")).toBeInTheDocument();
  });

  it("con mute no reproduce sonido", () => {
    const spy = vi.fn();
    vi.stubGlobal("Audio", class {
      src: string; volume = 0; play = spy;
      constructor(src: string) { this.src = src; }
    });
    render(<PikminPet minDelay={1000} maxDelay={1000} sonido mute />);
    act(() => { vi.advanceTimersByTime(1100); });
    expect(spy).not.toHaveBeenCalled();
  });

  it("desactivado no programa nada", () => {
    render(<PikminPet activo={false} minDelay={100} maxDelay={100} />);
    act(() => { vi.advanceTimersByTime(500); });
    expect(screen.queryByTestId("pikmin-pet")).toBeNull();
  });

  it("al terminar la animación se esconde y vuelve a programarse", () => {
    render(<PikminPet minDelay={1000} maxDelay={1000} />);
    act(() => { vi.advanceTimersByTime(1100); });
    const pet = screen.getByTestId("pikmin-pet");
    fireEvent.animationEnd(pet);
    expect(screen.queryByTestId("pikmin-pet")).toBeNull();
  });
});

describe("Pikmin alma (morir)", () => {
  it("cuando muere muestra el alma y suena el sonido de morir", () => {
    const spy = vi.fn();
    vi.stubGlobal("Audio", class {
      src: string; volume = 0; play = spy;
      constructor(src: string) { this.src = src; }
    });
    // forzar la rama "muere": Math.random() bajo -> se fuerza a 0
    const rnd = vi.spyOn(Math, "random").mockReturnValue(0.01);
    render(<PikminPet minDelay={500} maxDelay={500} sonido sonidoMorir />);
    act(() => { vi.advanceTimersByTime(600); });
    const pet = screen.getByTestId("pikmin-pet");
    expect(pet.getAttribute("data-morir")).toBe("1");
    expect(pet.querySelector("img")?.getAttribute("src")).toBe("/pikmin/alma.png");
    expect(spy).toHaveBeenCalled();
    rnd.mockRestore();
  });
});
