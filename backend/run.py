"""Lanzador del ejecutable de CryCat.

Al ejecutarse como programa empaquetado abre la aplicación y deja la salida
visible en la terminal. Si algo falla al arrancar, muestra el error y espera
para que dé tiempo a leerlo (la ventana no se cierra sola).
"""

import sys
import traceback


def main() -> int:
    try:
        from crycat.__main__ import main as arrancar
        arrancar()
        return 0
    except KeyboardInterrupt:
        print("\nCryCat detenido.")
        return 0
    except Exception:
        print("\n" + "=" * 60)
        print("  CryCat no pudo arrancar. Detalle del error:")
        print("=" * 60)
        traceback.print_exc()
        print("=" * 60)
        try:
            input("\nPulsa Enter para cerrar…")
        except Exception:
            pass
        return 1


if __name__ == "__main__":
    sys.exit(main())
