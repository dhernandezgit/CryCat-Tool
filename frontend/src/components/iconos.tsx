/** Iconos SVG de sonido (limpios, con el color del tema). */

interface P {
  size?: number;
}

export function IconoVolumen({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"
         strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9.5h3l4.5-3.5v12L7 14.5H4z" />
      <path d="M16 9a4 4 0 0 1 0 6" />
      <path d="M18.7 6.5a7.5 7.5 0 0 1 0 11" />
    </svg>
  );
}

export function IconoMute({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"
         strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9.5h3l4.5-3.5v12L7 14.5H4z" />
      <path d="M16 9.5l5 5M21 9.5l-5 5" />
    </svg>
  );
}

export function IconoCarpeta({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"
         strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

export function IconoRecalcular({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"
         strokeLinejoin="round" aria-hidden="true">
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 4v4h-4" />
    </svg>
  );
}
