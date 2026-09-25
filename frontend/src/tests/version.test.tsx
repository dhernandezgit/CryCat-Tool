import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import StatusBar from "../components/StatusBar";
import { IdiomaProvider } from "../i18n";
import type { VersionInfo } from "../api";

const V: VersionInfo = {
  actual: "1.0.0",
  ultima: "1.2.0",
  hay_nueva: true,
  url: "https://github.com/dhernandezgit/CryCat-Tool/releases/tag/v1.2.0",
  notas: "",
  fecha: null,
  comprobado: 1,
  error: null,
  repo: "https://github.com/dhernandezgit/CryCat-Tool",
  actualizacion: null,
};

let versionResp: VersionInfo = V;
let updateResp: Record<string, unknown> = { ok: true };

function ok(data: unknown) {
  return { ok: true, json: async () => data };
}

beforeEach(() => {
  versionResp = { ...V };
  updateResp = { ok: true };
  vi.stubGlobal("fetch", vi.fn(async (input: RequestInfo | URL) => {
    const u = String(input);
    if (u.includes("/api/version/update")) return ok(updateResp);
    if (u.includes("/api/version/check")) return ok(versionResp);
    if (u.includes("/api/version/open")) return ok({ ok: true, url: V.url });
    if (u.includes("/api/version")) return ok(versionResp);
    if (u.includes("/api/funmsgs")) return ok({ msgs: ["M1", "M2"] });
    return ok({});
  }));
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Versión y actualización en la barra inferior", () => {
  it("muestra la versión actual y el botón de comprobar", async () => {
    versionResp = { ...V, hay_nueva: false };
    render(<StatusBar job={null} backendOk result={null} />);
    await waitFor(() =>
      expect(screen.getByTestId("version-chip")).toHaveTextContent("v1.0.0"));
    expect(screen.getByTestId("btn-comprobar")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("btn-comprobar"));
    await waitFor(() => expect(screen.getByTestId("status-center"))
      .toHaveTextContent(/última versión/i));
  });

  it("avisa cuando hay versión nueva y permite actualizar", async () => {
    render(<StatusBar job={null} backendOk result={null} />);
    const aviso = await screen.findByTestId("aviso-version");
    // alerta compacta junto a la versión (icono) y la nueva versión al lado
    expect(aviso.querySelector("svg")).toBeTruthy();
    expect(screen.getByTestId("version-nueva")).toHaveTextContent("v1.2.0");
    expect(screen.getByTestId("btn-actualizar")).toBeInTheDocument();
    fireEvent.click(aviso);
    await waitFor(() => expect(screen.getByTestId("status-center"))
      .toHaveTextContent(/Instalando y reiniciando/));
  });

  it("en modo desarrollo avisa y abre la página de descargas", async () => {
    updateResp = { ok: false, modo: "dev", url: V.url };
    render(<StatusBar job={null} backendOk result={null} />);
    fireEvent.click(await screen.findByTestId("aviso-version"));
    await waitFor(() => expect(screen.getByTestId("status-center"))
      .toHaveTextContent(/desarrollo/i));
    const fetchMock = fetch as unknown as ReturnType<typeof vi.fn>;
    const abrio = fetchMock.mock.calls.some((c) =>
      String(c[0]).includes("/api/version/open"));
    expect(abrio).toBe(true);
  });

  it("el botón de idioma alterna ES → EN", async () => {
    const onIdioma = vi.fn();
    render(<StatusBar job={null} backendOk result={null}
                      onIdioma={onIdioma} />);
    expect(screen.getByTestId("btn-idioma")).toHaveTextContent("ES");
    fireEvent.click(screen.getByTestId("btn-idioma"));
    expect(onIdioma).toHaveBeenCalledWith("en");
  });

  it("en inglés se traducen los textos de la barra", async () => {
    versionResp = { ...V, hay_nueva: false };
    render(
      <IdiomaProvider idioma="en">
        <StatusBar job={null} backendOk result={null} />
      </IdiomaProvider>
    );
    expect(await screen.findByText("Ready to start")).toBeInTheDocument();
    expect(screen.getByTestId("btn-idioma")).toHaveTextContent("EN");
  });

  it("el botón de info abre ayuda y el del repo la página del proyecto", async () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    const onAyuda = vi.fn();
    render(<StatusBar job={null} backendOk result={null}
                      onAyuda={onAyuda} />);
    // "Cómo usar" abre la ayuda de la app
    fireEvent.click(screen.getByTestId("btn-info"));
    expect(onAyuda).toHaveBeenCalled();
    // el botón del repo abre GitHub en otra pestaña
    fireEvent.click(screen.getByTestId("btn-repo"));
    expect(openSpy).toHaveBeenCalledWith(
      "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener");
  });
});
