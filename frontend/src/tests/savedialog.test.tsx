import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SaveDialog from "../components/SaveDialog";

const DATA = "data:image/png;base64,iVBORw0KGgo=";

describe("SaveDialog (versión web)", () => {
  it("descarga SIEMPRE con extensión .png (aunque el nombre llegue raro)", () => {
    render(
      <SaveDialog open files={[DATA, DATA, DATA]} folder="web:descargas"
        names={["pegatinas_20261022_18.26x26.95cm.png",
                "pegatinas_20261022_18.26x26.95cm.nuevo",
                "pegatinas_sin_extension"]}
        onClose={() => {}} />,
    );
    expect(screen.getByTestId("btn-descargar-0"))
      .toHaveAttribute("download", "pegatinas_20261022_18.26x26.95cm.png");
    expect(screen.getByTestId("btn-descargar-1"))
      .toHaveAttribute("download", "pegatinas_20261022_18.26x26.95cm.nuevo.png");
    expect(screen.getByTestId("btn-descargar-2"))
      .toHaveAttribute("download", "pegatinas_sin_extension.png");
  });

  it("sin nombres usa el nombre por defecto acabado en .png", () => {
    render(
      <SaveDialog open files={[DATA]} folder="web:descargas"
        onClose={() => {}} />,
    );
    expect(screen.getByTestId("btn-descargar-0"))
      .toHaveAttribute("download", "crycat_pagina-01.png");
  });
});
