/** Rutas de los recursos estáticos (imágenes, sonidos…).

 * En la app de escritorio son absolutas ("/piensa.gif"); en la web cuelgan
 * del directorio de la app para que el service worker las pueda servir.
 */
export const assetUrl = (ruta: string): string =>
  ((globalThis as { __crycatAssets?: string }).__crycatAssets || "") + ruta;
