/* CryCat web — motor de colocación (geometría + empaquetado por silueta).
 *
 * Portado del backend Python para poder usarlo 100% en el navegador:
 *   · área recortable real de la Cricut (polígono de 5 bandas)
 *   · máscaras de silueta (solo lo opaco) en una rejilla de celdas
 *   · colocador voraz Bottom-Left con contacto, rotaciones y varios órdenes
 * Todo ocurre en tu equipo: no se sube ninguna imagen a ningún servidor.
 */

export const PAPER_SIZES = {
  A4: [210, 297], A3: [297, 420], A5: [148, 210],
  Letter: [215.9, 279.4], Legal: [215.9, 355.6], Tabloid: [279.4, 431.8],
};
export const OFFICIAL_MAX = {
  A4: [186.0, 272.3], Letter: [189.0, 252.5], Legal: [189.0, 328.7],
  Tabloid: [252.5, 404.9], A3: [270.0, 392.0], A5: [131.0, 192.5],
};
const STEP_W_INNER = 0.653, STEP_W_OUTER = 0.912;
const STEP_H_INNER = 0.028, STEP_H_OUTER = 0.088;

export function paperKey(w, h) {
  const cand = [w, h].sort((a, b) => a - b);
  for (const [k, [pw, ph]] of Object.entries(PAPER_SIZES)) {
    const p = [pw, ph].sort((a, b) => a - b);
    if (Math.abs(p[0] - cand[0]) < 1.5 && Math.abs(p[1] - cand[1]) < 1.5) return k;
  }
  return "A4";
}

/** Área recortable de la Cricut (polígono escalonado + bbox). */
export function cutArea(pageW, pageH, machine = "maker5") {
  const key = paperKey(pageW, pageH);
  let [maxH, maxV] = OFFICIAL_MAX[key] || [pageW * 0.85, pageH * 0.9];
  if (machine === "joy") [maxH, maxV] = [131.0, 192.5];
  const landscape = pageW >= pageH;
  let bw = landscape ? maxV : maxH;
  let bh = landscape ? maxH : maxV;
  bw = Math.min(bw, pageW); bh = Math.min(bh, pageH);
  const x0 = (pageW - bw) / 2, y0 = (pageH - bh) / 2;
  const x1 = x0 + bw, y1 = y0 + bh;
  const innerW = bw * STEP_W_INNER, outerW = bw * STEP_W_OUTER;
  const wx0 = x0 + (bw - outerW) / 2, wx1 = wx0 + outerW;
  const t1 = y0 + bh * STEP_H_INNER;
  const t2 = y0 + bh * (STEP_H_INNER + STEP_H_OUTER);
  const t3 = y1 - bh * (STEP_H_INNER + STEP_H_OUTER);
  const t4 = y1 - bh * STEP_H_INNER;
  const poly = [
    [wx0, y0], [wx1, y0], [wx1, t1], [x1, t1], [x1, t2], [x1, y1],
    [wx1, y1], [wx1, t4], [wx0, t4], [wx0, y1], [x0, y1], [x0, t2],
    [x0, t1], [wx0, t1],
  ];
  return { pageW, pageH, poly, bbox: [x0, y0, bw, bh], machine };
}

export function pointInside(poly, x, y) {
  let dentro = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if (((yi > y) !== (yj > y)) &&
        (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)) dentro = !dentro;
  }
  return dentro;
}

/** Máscara de una imagen (solo lo opaco) rasterizada a celdas de `cell` mm. */
export function maskFromImage(img, wMm, hMm, cell, alphaMin = 1) {
  const w = Math.max(2, Math.round(wMm / cell));
  const h = Math.max(2, Math.round(hMm / cell));
  const cv = document.createElement("canvas");
  cv.width = w; cv.height = h;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(img, 0, 0, w, h);
  const d = ctx.getImageData(0, 0, w, h).data;
  const m = new Uint8Array(w * h);
  for (let i = 0, p = 3; i < m.length; i++, p += 4) m[i] = d[p] > alphaMin ? 1 : 0;
  return { m, w, h };
}

export function rotateMask(mask) {
  const { m, w, h } = mask;
  const out = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++)
    out[x * h + (h - 1 - y)] = m[y * w + x];   // 90° horario
  return { m: out, w: h, h: w };
}

export function dilate(mask, r) {
  if (r <= 0) return mask;
  const { m, w, h } = mask;
  const out = new Uint8Array(w * h);
  const off = [];
  for (let dy = -r; dy <= r; dy++)
    for (let dx = -r; dx <= r; dx++)
      if (dx * dx + dy * dy <= r * r + 0.5) off.push([dy, dx]);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (!m[y * w + x]) continue;
    for (const [dy, dx] of off) {
      const ny = y + dy, nx = x + dx;
      if (ny >= 0 && ny < h && nx >= 0 && nx < w) out[ny * w + nx] = 1;
    }
  }
  return { m: out, w, h };
}

/** Mejor posición Bottom-Left de `mask` en una página (sin solape). */
function bestOffset(occ, mask, allowed, H, W) {
  const { w: mw, h: mh, m } = mask;
  if (mw > W || mh > H) return null;
  let mejor = null;
  for (let ty = 0; ty <= H - mh; ty++) {
    for (let tx = 0; tx <= W - mw; tx++) {
      let ok = true;
      for (let y = 0; y < mh && ok; y++) {
        const oy = (ty + y) * W;
        for (let x = 0; x < mw; x++) {
          if (!m[y * mw + x]) continue;
          const k = oy + tx + x;
          if (!allowed[k] || occ[k]) { ok = false; break; }
        }
      }
      if (!ok) continue;
      let contacto = 0;
      for (let y = 0; y < mh; y++) {
        const oy = (ty + y) * W;
        for (let x = 0; x < mw; x++) {
          if (!m[y * mw + x]) continue;
          const yy = ty + y, xx = tx + x;
          if (yy > 0 && occ[oy - W + xx]) contacto++;
          if (yy < H - 1 && occ[oy + W + xx]) contacto++;
          if (xx > 0 && occ[oy + xx - 1]) contacto++;
          if (xx < W - 1 && occ[oy + xx + 1]) contacto++;
        }
      }
      if (!mejor || ty < mejor.ty ||
          (ty === mejor.ty && contacto > mejor.contacto) ||
          (ty === mejor.ty && contacto === mejor.contacto && tx < mejor.tx)) {
        mejor = { ty, tx, contacto };
      }
      if (ty === 0) return mejor;
    }
  }
  return mejor;
}

/**
 * Optimiza la colocación por silueta.
 * items: [{id, name, w, h, mask, image, offset}]
 * settings: {space, margin, cell, rotations, minis:[{...}], copiesFactor}
 */
export function optimize({ items, area, settings, onProgress }) {
  const cell = Number(settings.cell ?? 0.5);
  const space = Number(settings.space ?? 2);
  const margin = Number(settings.margin ?? 1);
  const separacion = Math.max(0, Math.ceil((space / 2) / cell));
  let areaU = margin > 0 ? insetArea(area, margin) : area;
  const [bx, by, bw, bh] = areaU.bbox;
  const W = Math.max(2, Math.round(bw / cell));
  const H = Math.max(2, Math.round(bh / cell));
  const allowed = new Uint8Array(W * H);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++)
    allowed[y * W + x] = pointInside(areaU.poly, bx + (x + 0.5) * cell,
                                     by + (y + 0.5) * cell) ? 1 : 0;

  const pages = [new Uint8Array(W * H)];
  const placements = [];
  const unplaced = [];

  // órdenes a probar (Largest First + por alto/ancho) y nos quedamos con el mejor
  const ordenes = [
    (a, b) => b.w * b.h - a.w * a.h,
    (a, b) => Math.max(b.w, b.h) - Math.max(a.w, a.h),
    (a, b) => Math.min(b.w, b.h) - Math.min(a.w, a.h),
  ];

  function intentar(orden, conRotacion) {
    const occ = [new Uint8Array(W * H)];
    const res = [];
    const sinPoner = [];
    for (const it of orden) {
      let puesto = false;
      // prueba también girada 90°
      const variantes = conRotacion
        ? [{ mask: it.mask, rot: 0 }, { mask: rotateMask(it.mask), rot: 90 }]
        : [{ mask: it.mask, rot: 0 }];
      for (let pi = 0; pi < occ.length && !puesto; pi++) {
        for (const v of variantes) {
          const dm = dilate(v.mask, separacion);
          const got = bestOffset(occ[pi], dm, allowed, H, W);
          if (!got) continue;
          sella(occ[pi], it.mask, got, W);
          res.push({
            id: it.id, name: it.name, page: pi,
            x: bx + got.tx * cell, y: by + got.ty * cell,
            w: v.rot ? it.h : it.w, h: v.rot ? it.w : it.h,
            angle: v.rot, image: it.image, offset: it.offset || 0,
          });
          puesto = true;
          break;
        }
      }
      if (!puesto) {
        occ.push(new Uint8Array(W * H));
        const pi = occ.length - 1;
        for (const v of variantes) {
          const dm = dilate(v.mask, separacion);
          const got = bestOffset(occ[pi], dm, allowed, H, W);
          if (!got) continue;
          sella(occ[pi], it.mask, got, W);
          res.push({
            id: it.id, name: it.name, page: pi,
            x: bx + got.tx * cell, y: by + got.ty * cell,
            w: v.rot ? it.h : it.w, h: v.rot ? it.w : it.h,
            angle: v.rot, image: it.image, offset: it.offset || 0,
          });
          puesto = true;
          break;
        }
        if (!puesto) sinPoner.push(it);
      }
    }
    const paginas = occ.filter((p) => p.some((v) => v)).length || 1;
    return { res, sinPoner, paginas };
  }

  let mejor = null;
  for (const orden of ordenes) {
    const r = intentar(items.slice().sort(orden), !!settings.rotations);
    const clave = [r.sinPoner.length, r.paginas];
    if (!mejor || clave[0] < mejor.clave[0] ||
        (clave[0] === mejor.clave[0] && clave[1] < mejor.clave[1])) {
      mejor = { ...r, clave };
    }
    if (onProgress) onProgress(0.5, mejor.paginas);
    if (mejor.sinPoner.length === 0 && mejor.paginas === 1) break;
  }

  function sella(occ, mask, got, W2) {
    const { m, w: mw, h: mh } = mask;
    for (let y = 0; y < mh; y++) for (let x = 0; x < mw; x++) {
      if (m[y * mw + x]) occ[(got.ty + y) * W2 + got.tx + x] = 1;
    }
  }

  // eficiencia REAL: área de silueta (celdas opacas) / área usada
  const celdasSil = mejor.res.reduce((s, p) => {
    const it = items.find((i) => i.id === p.id);
    const c = it ? it.mask.m.reduce((a, v) => a + v, 0) : 0;
    return s + c * (cell * cell);
  }, 0);
  const usada = bw * bh * mejor.paginas;
  return {
    placements: mejor.res, unplaced: mejor.sinPoner,
    pages: mejor.paginas,
    efficiency: usada > 0 ? Math.min(1, celdasSil / usada) : 0,
    area: areaU, cell,
  };
}
