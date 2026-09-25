/** Temas de CryCat inspirados en Pokémon (estética pastel/minimalista). */

export interface Theme {
  key: string;
  label: string;
  colors: {
    bg: string;        // fondo general
    panel: string;     // paneles
    panel2: string;    // elementos elevados (tarjetas)
    accent: string;    // acento principal (botones, progreso)
    accent2: string;   // acento secundario
    accent3: string;   // acento terciario (detalles, textos); con contraste
    text: string;
    textSoft: string;
    border: string;
    danger: string;
    guide: string;     // color de las guías Cricut
  };
}

export const THEMES: Theme[] = [
  {
    key: "wiwi",
    label: "Wiwi",
    colors: {
      bg: "#f9d7e4", panel: "#fff7f2", panel2: "#ffffff",
      accent: "#f2a0b7", accent2: "#ff8a9b", accent3: "#d94f6a", text: "#5e4a64",
      textSoft: "#a4889b", border: "#f3c6d4", danger: "#e96a7e",
      guide: "#e8556b",
    },
  },
  {
    key: "eevee",
    label: "Eevee",
    colors: {
      bg: "#f0e3cf", panel: "#fdf6ea", panel2: "#ffffff",
      accent: "#c99a5f", accent2: "#a9713d", accent3: "#8a5a2b", text: "#5a4632",
      textSoft: "#a08b70", border: "#e0cba8", danger: "#c26a4a",
      guide: "#a9713d",
    },
  },
  {
    key: "fidough",
    label: "Fidough",
    colors: {
      bg: "#f6ecd2", panel: "#fffaef", panel2: "#ffffff",
      accent: "#e8b64c", accent2: "#e07a5f", accent3: "#b3593f", text: "#5c4a2f",
      textSoft: "#a68f66", border: "#e8d9a8", danger: "#d4694f",
      guide: "#d4694f",
    },
  },
  {
    key: "sprigatito",
    label: "Sprigatito",
    colors: {
      bg: "#ddefdb", panel: "#f3faf0", panel2: "#ffffff",
      accent: "#8cc98a", accent2: "#5fae72", accent3: "#3f8f57", text: "#3f5a45",
      textSoft: "#88a68e", border: "#c2e2c0", danger: "#d4696f",
      guide: "#4d8f63",
    },
  },
  {
    key: "maushold",
    label: "Maushold",
    colors: {
      bg: "#eeeae2", panel: "#faf8f3", panel2: "#ffffff",
      accent: "#b9a98f", accent2: "#8f7c62", accent3: "#6f5f47", text: "#4f463a",
      textSoft: "#9c9081", border: "#d9d2c4", danger: "#c26a5a",
      guide: "#8f7c62",
    },
  },
  {
    key: "jirachi",
    label: "Jirachi",
    colors: {
      bg: "#fdf3d6", panel: "#fffbee", panel2: "#ffffff",
      accent: "#f5d75a", accent2: "#7fd1c8", accent3: "#c98a1e", text: "#5d5433",
      textSoft: "#ab9f74", border: "#efe3ab", danger: "#e07a8a",
      guide: "#5bb8ae",
    },
  },
  {
    key: "espeon",
    label: "Espeon",
    colors: {
      bg: "#e9e0f4", panel: "#f7f2fc", panel2: "#ffffff",
      accent: "#b79ae0", accent2: "#9d7cc9", accent3: "#8a5fc0", text: "#4f4366",
      textSoft: "#9b8bb0", border: "#d4c6e8", danger: "#d46a9a",
      guide: "#9d7cc9",
    },
  },
  {
    key: "espeon-shiny",
    label: "Espeon shiny",
    colors: {
      bg: "#e0f0f4", panel: "#f1fafc", panel2: "#ffffff",
      accent: "#8fd0dd", accent2: "#67b7c9", accent3: "#2f9aa8", text: "#3f5460",
      textSoft: "#8aacb6", border: "#c4e2e8", danger: "#d46a8a",
      guide: "#4fa3b5",
    },
  },
  {
    key: "umbreon",
    label: "Umbreon",
    colors: {
      bg: "#2e2b3a", panel: "#3a3749", panel2: "#454157",
      accent: "#f0c94a", accent2: "#8f7fd4", accent3: "#ffd76a", text: "#f0e9dc",
      textSoft: "#a99fc4", border: "#524d68", danger: "#e07a6a",
      guide: "#f0c94a",
    },
  },
  {
    key: "hippopotas",
    label: "Hippopotas",
    colors: {
      bg: "#efe0c3", panel: "#faf2df", panel2: "#ffffff",
      accent: "#c8a86a", accent2: "#a5854e", accent3: "#9a6f36", text: "#54432a",
      textSoft: "#a08c66", border: "#e0cda0", danger: "#c26a4a",
      guide: "#a5854e",
    },
  },
  {
    key: "vaporeon",
    label: "Vaporeon",
    colors: {
      bg: "#d7e8f2", panel: "#eff7fb", panel2: "#ffffff",
      accent: "#8ab6d9", accent2: "#5f96c4", accent3: "#3a7fb5", text: "#3a4f60",
      textSoft: "#84a2b5", border: "#c0daea", danger: "#d46a7e",
      guide: "#4a81ad",
    },
  },
  {
    key: "sylveon",
    label: "Sylveon",
    colors: {
      bg: "#f6e3ee", panel: "#fdf3f8", panel2: "#ffffff",
      accent: "#e8a8c8", accent2: "#a8d8e8", accent3: "#c95f9a", text: "#5e4a5c",
      textSoft: "#b08ea4", border: "#f0cddd", danger: "#e06a8a",
      guide: "#d47ca8",
    },
  },
];

export function themeByKey(key: string): Theme {
  return THEMES.find((t) => t.key === key) ?? THEMES[0];
}

export function applyTheme(key: string): void {
  const th = themeByKey(key);
  const root = document.documentElement;
  Object.entries(th.colors).forEach(([k, v]) => {
    root.style.setProperty(`--${k.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase())}`, v);
  });
  root.dataset.theme = th.key;
}
