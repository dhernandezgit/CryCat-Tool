/** Cliente de la API de CryCat. */

export interface Asset {
  id: string;
  name: string;
  w_px: number;
  h_px: number;
  w_mm: number;
  h_mm: number;
  w_mm_base: number;
  h_mm_base: number;
  dpi_origen: number;
  copies: number;
  mini_enabled: boolean;
  mini_quota: number;
  scale_pct: number;
  bg_removed: boolean;
  warnings: string[];
}

export interface Placement {
  uid: string;
  asset_id: string;
  page: number;
  x: number;
  y: number;
  w: number;
  h: number;
  angle: number;
  mini: boolean;
  scale: number;
  pinned: boolean;
  rot90: boolean;
}

export interface Result {
  pages: number;
  placements: Placement[];
  efficiency: number;
  bbox_mm: [number, number];
  bbox_offset_mm: [number, number];
  poly_mm: [number, number][];
  page_mm: [number, number];
  warnings: string[];
  method: string;
  minis: number;
  placed: number;
}

export interface AppSettings {
  espacio_mm: number;
  margen_mm: number;
  rotacion: "no" | "90" | "libre";
  dpi_salida: number;
  pagina: string;
  pagina_w: number;
  pagina_h: number;
  maquina: string;
  usar_minis: boolean;
  mini_min_mm: number;
  mini_max_rescale: number;
  mini_rotacion: "no" | "90" | "libre";
  mini_tamanos: "iguales" | "grandes";
  mini_usar_lista: boolean;
  mini_tamanos_lista: number[];
  opt_metodo: string;
  opt_calidad: "exacta" | "normal" | "rapida";
  opt_tiempo_max_s: number;
  auto_recalcular: boolean;
  corte_velocidad_mm_s: number;
  corte_viaje_mm_s: number;
  corte_extra_forma_s: number;
  corte_factor: number;
  pikmin_activo: boolean;
  pikmin_frecuencia_min: number;
  pikmin_sonido: boolean;
  pikmin_sonido_morir: boolean;
  volumen: number;
  mute: boolean;
  offset_activo: boolean;
  offset_mm: number;
  offset_modo: "extender" | "blanco" | "color";
  offset_color: string;
  color_formato: "rgba" | "rgb";
  chequear_lineas: boolean;
  carpeta_export: string;
  dpi_importacion: number;
  lienzo: "recortable" | "pagina";
  tema: string;
  ver_guias: boolean;
  fondo_transparente: boolean;
  idioma: "es" | "en";
  comprobar_versiones: boolean;
}

/** Estado del sistema de versiones (GitHub Releases). */
export interface VersionInfo {
  actual: string;
  ultima: string | null;
  hay_nueva: boolean;
  url: string;
  notas: string;
  fecha: string | null;
  comprobado: number | null;
  error: string | null;
  repo?: string;
  actualizacion: { estado: string; progreso: number | null; mensaje: string } | null;
}

export interface Job {
  id: string;
  status: "running" | "done" | "error";
  progress: number;
  pages: number;
  done: boolean;
  message: string;
  eta_s?: number;
  efficiency?: number;
  warnings?: string[];
  unplaced?: number;
}

/** Tamaños de papel en mm, en vertical: clave -> [ancho, alto]. */
export const PAPER_DIMS: Record<string, [number, number]> = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4],
};

/** Sugerencias graciosas para el nombre de la carpeta (placeholder). */
export const NAME_SUGGESTIONS: string[] = [
  "copia_final_FINAL_v3",
  "esto_ya_no_es_un_circulo",
  "ayuda_por_favor",
  "sin_tiempo_para_mas",
  "el_cliente_lo_aprobo",
  "ultima_prueba_de_verdad",
  "no_miro_mas_las_esquinas",
  "el_gato_lo_tiño",
  "mañana_lo_arreglo",
  "esto_lo_vio_mi_yo_del_pasado",
  "posdata_perdon",
];
/** Las mismas sugerencias en inglés. */
export const NAME_SUGGESTIONS_EN: string[] = [
  "Final stickers",
  "Cricut, now for real",
  "Tonotini tonotin",
  "Kawaii stickers",
  "Sticker sheet",
  "CryCat little things",
  "Little wonders",
  "Stick stick sticking",
  "Top-notch stickers",
  "Cut and stick",
];

/** Rellena campos numéricos que falten (p. ej. sesiones antiguas) para que
 *  la interfaz nunca muestre NaN. */
export function normalizeAsset(a: Asset): Asset {
  const w = Number.isFinite(a.w_mm) ? a.w_mm : 0;
  const h = Number.isFinite(a.h_mm) ? a.h_mm : 0;
  return {
    ...a,
    copies: Number.isFinite(a.copies) ? a.copies : 1,
    mini_quota: Number.isFinite(a.mini_quota) ? a.mini_quota : 1,
    scale_pct: Number.isFinite(a.scale_pct) ? a.scale_pct : 100,
    w_mm: w,
    h_mm: h,
    w_mm_base: Number.isFinite(a.w_mm_base) ? a.w_mm_base : w,
    h_mm_base: Number.isFinite(a.h_mm_base) ? a.h_mm_base : h,
    warnings: a.warnings ?? [],
  };
}

/** Tamaño efectivo en mm de un asset (base * escala), sin NaN. */
export function assetSizeMm(a: Asset): { w: number; h: number } {
  const s = (Number.isFinite(a.scale_pct) ? a.scale_pct : 100) / 100;
  const wb = Number.isFinite(a.w_mm_base) ? a.w_mm_base : a.w_mm;
  const hb = Number.isFinite(a.h_mm_base) ? a.h_mm_base : a.h_mm;
  const w = (Number.isFinite(wb) ? wb : 0) * s;
  const h = (Number.isFinite(hb) ? hb : 0) * s;
  return { w: Number.isFinite(w) ? w : 0, h: Number.isFinite(h) ? h : 0 };
}

/** Estado de interfaz del visor. */
export interface UiState {
  eyeTransparent: boolean;
  eyeFosforito: boolean;      // tercer modo: fondo verde fosforito
  guidesVisible: boolean;
  viewMode: 1 | 2 | 4;
  saveName: string;
}

async function req<T>(url: string, opts?: RequestInit): Promise<T> {
  const r = await fetch(url, opts);
  if (!r.ok) {
    let msg = `${r.status}`;
    try {
      const j = await r.json();
      msg = j.detail || msg;
    } catch {
      /* sin cuerpo */
    }
    throw new Error(msg);
  }
  return r.json() as Promise<T>;
}

export const api = {
  health: () => req<{ ok: boolean; time: string }>("/api/health"),
  getSettings: () =>
    req<{ settings: AppSettings; pages: { key: string; label: string; w: number; h: number }[] }>(
      "/api/settings"
    ),
  putSettings: (s: Partial<AppSettings>) =>
    req<{ ok: boolean; settings: AppSettings; job: Job | null }>("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(s),
    }),
  upload: (file: Blob, name: string) => {
    const fd = new FormData();
    fd.append("file", file, name);
    return req<Asset>("/api/assets", { method: "POST", body: fd });
  },
  listAssets: () => req<Asset[]>("/api/assets"),
  patchAsset: (id: string, patch: Partial<Asset>) =>
    req<Asset>(`/api/assets/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    }),
  deleteAsset: (id: string) => req<{ ok: boolean }>(`/api/assets/${id}`, { method: "DELETE" }),
  clearAssets: () => req<{ ok: boolean }>("/api/assets", { method: "DELETE" }),
  removeBackground: (id: string) =>
    req<Asset>(`/api/assets/${id}/remove-background`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    }),
  restoreBackground: (id: string) =>
    req<Asset>(`/api/assets/${id}/restore-background`, { method: "POST" }),
  reemplazar: (id: string, blob: Blob, name: string) => {
    const fd = new FormData();
    fd.append("file", blob, name);
    return req<Asset>(`/api/assets/${id}/reemplazar`, { method: "POST", body: fd });
  },
  blobs: (id: string) =>
    req<{ blobs: { id: number; area_px: number; bbox: number[]; principal: boolean }[];
          w: number; h: number; preview_png: string }>(`/api/assets/${id}/blobs`),
  limpiarContorno: (id: string, quitar: number[]) =>
    req<Asset>(`/api/assets/${id}/limpiar-contorno`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quitar }),
    }),
  previewUrl: (id: string) => `/api/assets/${id}/preview.png`,
  optimize: (modo?: "rapido" | "optimo", force = false) =>
    req<Job>("/api/optimize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ modo: modo ?? null, force }),
    }),
  job: (id: string) => req<Job>(`/api/job/${id}`),
  result: () => req<Result>("/api/result"),
  version: () => req<VersionInfo>("/api/version"),
  checkVersion: () => req<VersionInfo>("/api/version/check", { method: "POST" }),
  updateVersion: () =>
    req<{ ok: boolean; mensaje?: string; modo?: string; url?: string }>(
      "/api/version/update", { method: "POST" }),
  openReleases: () =>
    req<{ ok: boolean; url: string }>("/api/version/open", { method: "POST" }),
  estimate: () =>
    req<{
      maquina: string;
      segundos: number;
      factor: number;
      paginas: { pagina: number; formas: number; segundos: number }[];
      desglose: { corte_s?: number; viaje_s?: number; extra_s?: number };
    }>("/api/estimate"),
  pageUrl: (i: number, v: number) => `/api/pages/${i}.png?v=${v}`,
  move: (uid: string, x: number, y: number) =>
    req<{ ok: boolean; placement: Placement; job: Job | null }>(
      `/api/placements/move`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, x, y }),
      }),
  unpin: (uid: string) =>
    req<Job>("/api/placements/unpin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid }),
    }),
  export: (name: string, folder?: string) =>
    req<{ ok: boolean; folder: string; files: string[] }>("/api/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, folder }),
    }),
  printUrl: () => "/api/print.pdf",
  fsList: (path: string) =>
    req<{ path: string; parent: string; dirs: string[]; home: string }>(
      `/api/fs/list?path=${encodeURIComponent(path)}`
    ),
  abrirCarpeta: (path?: string) =>
    req<{ ok: boolean; path: string }>("/api/fs/open", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: path ?? null }),
    }),
  assetsFolder: () =>
    req<{ path: string; exists: boolean }>("/api/assets-folder"),
  setIcon: (file: Blob) => {
    const fd = new FormData();
    fd.append("file", file, "icono.png");
    return req<{ ok: boolean }>("/api/icon", { method: "POST", body: fd });
  },
  iconUrl: () => `/api/icon.png?v=${Date.now()}`,

  // ---------------------------------------------------- perfiles --
  presets: () => req<{ names: string[] }>("/api/presets"),
  savePreset: (name: string) =>
    req<{ ok: boolean; names: string[] }>("/api/presets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    }),
  loadPreset: (name: string) =>
    req<{ ok: boolean; settings: AppSettings; job: Job | null }>(
      `/api/presets/${encodeURIComponent(name)}/load`, { method: "POST" }
    ),
  deletePreset: (name: string) =>
    req<{ ok: boolean; names: string[] }>(
      `/api/presets/${encodeURIComponent(name)}`, { method: "DELETE" }
    ),
};

/** Rasteriza un SVG en el navegador a PNG (calidad ~300 ppp). */
export async function svgToPng(file: File): Promise<Blob> {
  const text = await file.text();
  const blob = new Blob([text], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  try {
    const img = new Image();
    await new Promise<void>((res, rej) => {
      img.onload = () => res();
      img.onerror = () => rej(new Error("SVG no válido"));
      img.src = url;
    });
    const w = img.naturalWidth || img.width || 1024;
    const h = img.naturalHeight || img.height || 1024;
    const scale = Math.min(4, Math.max(0.5, 300 / 96));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(w * scale);
    canvas.height = Math.round(h * scale);
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return await new Promise<Blob>((res) =>
      canvas.toBlob((b) => res(b!), "image/png")
    );
  } finally {
    URL.revokeObjectURL(url);
  }
}

/** Prepara un archivo para subir (SVG -> PNG; el resto tal cual). */
export async function prepareFile(file: File): Promise<{ blob: Blob; name: string }> {
  if (file.name.toLowerCase().endsWith(".svg")) {
    const png = await svgToPng(file);
    return { blob: png, name: file.name.replace(/\.svg$/i, "") + ".png" };
  }
  return { blob: file, name: file.name };
}
