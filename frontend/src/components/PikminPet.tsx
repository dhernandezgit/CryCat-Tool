import { useEffect, useMemo, useRef, useState } from "react";

export interface PikminConfig {
  activo: boolean;
  frecuenciaMin: number;   // minutos (promedio) entre apariciones
  sonido: boolean;
  sonidoMorir: boolean;
  volumen: number;         // 0..1
  mute: boolean;
}

interface Props extends Partial<PikminConfig> {
  minDelay?: number;       // ms (para tests)
  maxDelay?: number;
  fuentes?: string[];      // lista de imágenes (por defecto, las del proyecto)
}

// Imágenes reales de Pikmin (wiki de Pikmin + las que aportó el usuario).
const BASE_IMGS = [
  "/pikmin/01_yellow_lay_bud.png", "/pikmin/02_white.webp",
  "/pikmin/03_unnamed.webp", "/pikmin/04_blue.webp",
  "/pikmin/05_yellow.png", "/pikmin/06_red.png",
  "/pikmin/07_red_lay_leaf.png",
  "/pikmin/01_red_hd.png", "/pikmin/02_yellow_hd.png", "/pikmin/03_blue_hd.png",
  "/pikmin/04_white_hd.png", "/pikmin/05_purple_hd.png", "/pikmin/06_winged_hd.png",
  "/pikmin/07_rock_hd.png", "/pikmin/08_ice.png", "/pikmin/09_glow.png",
  "/pikmin/10_p3_red.png", "/pikmin/11_p3_blue.png", "/pikmin/12_p3_purple.png",
  "/pikmin/13_white.png", "/pikmin/15_winged.png", "/pikmin/16_red.png",
  "/pikmin/17_blue.png", "/pikmin/18_rock.png",
  "/pikmin/alma.png",
];
const BLOOM_DIR = "/pikmin_bloom/";
const ALMA = "/pikmin/alma.png";                // alma (espíritu) del Pikmin
const SONIDO = "/sonidos/pikmin.mp3";           // sonido real de Pikmin
const SONIDO_MORIR = "/sonidos/pikmin_morir.mp3";

/** Catálogo global de imágenes de Pikmin (base + muestra de Pikmin Bloom). */
export function usePikminFuentes(extra?: string[]): string[] {
  const [bloom, setBloom] = useState<string[]>([]);
  useEffect(() => {
    fetch("/pikmin_bloom/indice.json")
      .then((r) => (r.ok ? r.json() : []))
      .then((nombres: string[]) => {
        if (!Array.isArray(nombres)) return;
        // muestra aleatoria (no cargar cientos de imágenes a la vez)
        const c = [...nombres];
        for (let i = c.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [c[i], c[j]] = [c[j], c[i]];
        }
        setBloom(c.slice(0, 60).map((n) => BLOOM_DIR + n));
      })
      .catch(() => undefined);
  }, []);
  return useMemo(
    () => (extra && extra.length ? [...extra, ...bloom] : [...BASE_IMGS, ...bloom]),
    [extra, bloom]
  );
}

/**
 * De vez en cuando asoma un Pikmin aleatorio por el borde inferior, en una
 * posición X aleatoria, con animación (sube lento, se agita girando y vuelve
 * rápido) y sonido real. De vez en cuando "muere": aparece su alma y suena
 * el sonido de morir.
 */
export default function PikminPet({
  activo = true,
  frecuenciaMin = 1.0,
  sonido = true,
  sonidoMorir = true,
  volumen = 0.5,
  mute = false,
  minDelay,
  maxDelay,
  fuentes,
}: Props) {
  const catalogo = usePikminFuentes(fuentes);
  const [pet, setPet] = useState<
    { src: string; left: number; key: number; morir: boolean } | null
  >(null);
  const timer = useRef<number | undefined>(undefined);

  const delayBase = Math.max(5000, frecuenciaMin * 60_000);

  const programar = () => {
    if (!activo) return;
    // apariciones IRREGULARES: nunca a la hora exacta. Se sortea entre la
    // mitad y vez y media de la frecuencia media (así la media es la pedida).
    const min = minDelay ?? Math.round(delayBase * 0.5);
    const max = maxDelay ?? Math.round(delayBase * 1.5);
    const delay = min + Math.random() * Math.max(1, max - min);
    timer.current = window.setTimeout(() => {
      const muere = sonidoMorir && Math.random() < 0.25;
      setPet({
        src: muere ? ALMA
                   : catalogo[Math.floor(Math.random() * catalogo.length)] ?? ALMA,
        left: 3 + Math.random() * 92,
        key: Date.now(),
        morir: muere,
      });
      if (sonido && !mute) {
        try {
          const a = new Audio(muere ? SONIDO_MORIR : SONIDO);
          a.volume = Math.min(1, Math.max(0, volumen));
          void a.play().catch(() => undefined);
        } catch {
          /* audio no disponible */
        }
      }
    }, delay);
  };

  useEffect(() => {
    if (!activo) {
      window.clearTimeout(timer.current);
      setPet(null);
      return;
    }
    programar();
    return () => window.clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activo, frecuenciaMin, sonido, sonidoMorir, volumen, mute, catalogo]);

  if (!pet) return null;
  return (
    <div
      key={pet.key}
      className={`pikmin-pet${pet.morir ? " muriendo" : ""}`}
      data-testid="pikmin-pet"
      data-morir={pet.morir ? "1" : "0"}
      style={{ left: `${pet.left}%` }}
      onAnimationEnd={() => {
        setPet(null);
        programar();
      }}
    >
      <img src={pet.src} alt="" aria-hidden="true" />
    </div>
  );
}
