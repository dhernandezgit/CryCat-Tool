/** Iconos SVG de CryCat (línea limpia, heredan el color del tema). */

interface P {
  size?: number;
}

function Svg({ size = 18, children }: P & { children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"
         strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export function IconoVolumen({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M4 9.5h3l4.5-3.5v12L7 14.5H4z" />
      <path d="M16 9a4 4 0 0 1 0 6" />
      <path d="M18.7 6.5a7.5 7.5 0 0 1 0 11" />
    </Svg>
  );
}

export function IconoMute({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M4 9.5h3l4.5-3.5v12L7 14.5H4z" />
      <path d="M16 9.5l5 5M21 9.5l-5 5" />
    </Svg>
  );
}

export function IconoCarpeta({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </Svg>
  );
}

export function IconoRecalcular({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 4v4h-4" />
    </Svg>
  );
}

export function IconoReemplazar({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M4 7a3 3 0 0 1 3-3h5" />
      <path d="M20 17a3 3 0 0 1-3 3h-5" />
      <path d="M15 2l3 2-3 2M9 18l-3 2 3 2" />
    </Svg>
  );
}

export function IconoLimpiar({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" />
      <path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" />
    </Svg>
  );
}

export function IconoFondo({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M4 4h16v16H4z" />
      <path d="M4 14l5-5 4 4 3-3 4 4" />
      <circle cx="9" cy="8.5" r="1.4" />
    </Svg>
  );
}

export function IconoDeshacerFondo({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </Svg>
  );
}

export function IconoBorrar({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Svg>
  );
}

export function IconoMini({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" />
    </Svg>
  );
}

export function IconoDeshacer({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M9 7L4 12l5 5" />
      <path d="M4 12h9a5 5 0 0 1 5 5v1" />
    </Svg>
  );
}

export function IconoRehacer({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M15 7l5 5-5 5" />
      <path d="M20 12h-9a5 5 0 0 0-5 5v1" />
    </Svg>
  );
}

export function IconoGuias({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M4 4h16v16H4z" />
      <path d="M4 9h16M9 4v16" strokeDasharray="2 2" />
    </Svg>
  );
}

export function IconoZoomMas({ size }: P) {
  return (
    <Svg size={size}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" />
    </Svg>
  );
}

export function IconoZoomMenos({ size }: P) {
  return (
    <Svg size={size}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M8.5 11h5M20 20l-4.4-4.4" />
    </Svg>
  );
}

export function IconoAjustar({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
    </Svg>
  );
}

export function IconoGuardar({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M5 3h11l3 3v15H5z" />
      <path d="M8 3v6h7V3M8 15h8v6H8z" />
    </Svg>
  );
}

export function IconoImprimir({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M7 8V3h10v5" />
      <path d="M5 8h14a2 2 0 0 1 2 2v6h-4" />
      <path d="M3 16v-6a2 2 0 0 1 2-2" />
      <path d="M7 14h10v7H7z" />
    </Svg>
  );
}

export function IconoAbrir({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M14 4h6v6" />
      <path d="M20 4l-8 8" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </Svg>
  );
}

export function IconoInfo({ size }: P) {
  return (
    <Svg size={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 7.6v.1" />
    </Svg>
  );
}

export function IconoAlerta({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M12 3l9 16H3z" />
      <path d="M12 9v5M12 17v.1" />
    </Svg>
  );
}

export function IconoAviso({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M12 4l9 15H3z" />
      <path d="M12 10v4.5M12 17.2v.1" />
    </Svg>
  );
}

export function IconoCheck({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M4.5 12.5l5 5 10-11" />
    </Svg>
  );
}

export function IconoActualizar({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 4v4h-4" />
    </Svg>
  );
}

export function IconoDescargar({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M12 3v12" />
      <path d="M7 11l5 5 5-5" />
      <path d="M4 20h16" />
    </Svg>
  );
}

export function IconoComprobar({ size }: P) {
  return (
    <Svg size={size}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l3 2" />
    </Svg>
  );
}

export function IconoFiesta({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M4 20l4-11 7 7z" />
      <path d="M13 4l1 2M17 7l2-1M18 12h2M15 10l1.5 1.5" />
    </Svg>
  );
}

export function IconoAyuda({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" />
      <path d="M12 6.5v13" />
    </Svg>
  );
}

export function IconoCorazon({ size }: P) {
  return (
    <Svg size={size}>
      <path d="M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" />
    </Svg>
  );
}
