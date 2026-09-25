import { useEffect, useMemo, useRef, useState } from "react";

export interface PikminConfig {
  activo: boolean;
  frecuenciaMin: number;   // minutos (promedio) entre apariciones
  sonido: boolean;
  sonidoMorir: boolean;
  volumen: number;         // 0..1
  mute: boolean;
  fiesta: boolean;         // easter egg: se quedan y se ponen contentos
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

type Estado = "paseando" | "quieto" | "festejando";

interface Pet {
  src: string;
  left: number;
  key: number;
  morir: boolean;
  estado: Estado;
}

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
 * De vez en cuando asoma un Pikmin por el borde inferior (sube lento, se agita
 * girando y vuelve rápido) con sonido real; a veces "muere" y sale su alma.
 *
 * Easter egg (ajuste `fiesta`): si no estás mirando, los Pikmin se QUEDAN
 * esperando; al volver, tras un segundo se ponen todos muy contentos (se
 * agitan a la vez un par de segundos) y se marchan.
 */
export default function PikminPet({
  activo = true,
  frecuenciaMin = 5.0,
  sonido = true,
  sonidoMorir = true,
  volumen = 0.5,
  mute = false,
  fiesta = false,
  minDelay,
  maxDelay,
  fuentes,
}: Props) {
  const catalogo = usePikminFuentes(fuentes);
  const [pets, setPets] = useState<Pet[]>([]);
  const timer = useRef<number | undefined>(undefined);
  const oculto = useRef(
    typeof document !== "undefined" && document.visibilityState === "hidden"
  );
  const fiestaRef = useRef(fiesta);
  fiestaRef.current = fiesta;

  const delayBase = Math.max(5000, frecuenciaMin * 60_000);

  const suena = (morir: boolean) => {
    if (!sonido || mute) return;
    try {
      const a = new Audio(morir ? SONIDO_MORIR : SONIDO);
      a.volume = Math.min(1, Math.max(0, volumen));
      void a.play().catch(() => undefined);
    } catch {
      /* audio no disponible */
    }
  };

  const soltar = () => {
    const muere = sonidoMorir && Math.random() < 0.25;
    const src = muere
      ? ALMA
      : catalogo[Math.floor(Math.random() * catalogo.length)] ?? ALMA;
    setPets((ps) => [...ps, {
      src, left: 3 + Math.random() * 92, key: Date.now() + ps.length,
      morir: muere, estado: "paseando",
    }]);
    suena(muere);
  };

  const programar = () => {
    if (!activo) return;
    // apariciones IRREGULARES: nunca a la hora exacta. Se sortea entre la
    // mitad y vez y media de la frecuencia media (así la media es la pedida).
    const min = minDelay ?? Math.round(delayBase * 0.5);
    const max = maxDelay ?? Math.round(delayBase * 1.5);
    const delay = min + Math.random() * Math.max(1, max - min);
    timer.current = window.setTimeout(soltar, delay);
  };

  useEffect(() => {
    if (!activo) {
      window.clearTimeout(timer.current);
      setPets([]);
      return;
    }
    programar();
    return () => window.clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activo, frecuenciaMin, sonido, sonidoMorir, volumen, mute, catalogo]);

  // visibilidad: en modo fiesta se quedan esperando y al volver celebran
  useEffect(() => {
    const alCambiar = () => {
      oculto.current = document.visibilityState === "hidden";
      if (!oculto.current && fiestaRef.current) {
        window.setTimeout(() => {
          setPets((ps) => {
            if (!ps.length) return ps;
            suena(false);
            return ps.map((p) => ({ ...p, estado: "festejando" as Estado }));
          });
          window.setTimeout(() => {
            setPets([]);
            programar();
          }, 2200);
        }, 1000);
      }
    };
    document.addEventListener("visibilitychange", alCambiar);
    return () => document.removeEventListener("visibilitychange", alCambiar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const terminar = (k: number) => {
    if (fiestaRef.current && oculto.current) {
      // se queda esperando (se acumulan mientras no miras)
      setPets((ps) => ps.map((p) =>
        p.key === k ? { ...p, estado: "quieto" as Estado } : p));
      return;
    }
    setPets((ps) => ps.filter((p) => p.key !== k));
    programar();
  };

  return (
    <>
      {pets.map((pet) => (
        <div
          key={pet.key}
          className={`pikmin-pet ${pet.estado}${pet.morir ? " muriendo" : ""}`}
          data-testid="pikmin-pet"
          data-estado={pet.estado}
          data-morir={pet.morir ? "1" : "0"}
          style={{ left: `${pet.left}%` }}
          onAnimationEnd={() => terminar(pet.key)}
        >
          <img src={pet.src} alt="" aria-hidden="true"
               onError={() => terminar(pet.key)} />
        </div>
      ))}
    </>
  );
}
