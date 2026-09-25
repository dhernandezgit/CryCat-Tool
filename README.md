<div align="center">

# 🐱 CryCat

**Coloca tus imágenes de forma óptima para Cricut — todo local, sin conexión a Internet.**

La hizo **Daniel Hernández Ferrándiz**.

[![Descargar instalador](https://img.shields.io/badge/⬇_DESCARGAR-Instalador_automático-ff69b4?style=for-the-badge&labelColor=d94f6a)](https://github.com/dhernandezgit/CryCat-Tool/releases/latest/download/crycat-setup.exe)
[![Windows portable](https://img.shields.io/badge/Windows-Un_solo_archivo-ffb6c1?style=for-the-badge&labelColor=d94f6a)](https://github.com/dhernandezgit/CryCat-Tool/releases/latest/download/CryCat.exe)
[![Linux](https://img.shields.io/badge/Linux-Un_solo_archivo-ffe4c4?style=for-the-badge&labelColor=d94f6a)](https://github.com/dhernandezgit/CryCat-Tool/releases/latest/download/crycat-onefile)

<sub>El **instalador automático** instala CryCat con accesos directos en el menú de inicio
(y opcionalmente en el escritorio) y desinstalador. Funciona en Windows 10/11.</sub>

**Instalación universal con un solo comando:**

```powershell
# Windows (PowerShell)
irm https://raw.githubusercontent.com/dhernandezgit/CryCat-Tool/main/install.ps1 | iex
```

```sh
# Linux
curl -fsSL https://raw.githubusercontent.com/dhernandezgit/CryCat-Tool/main/install.sh | sh
```

</div>

---

## ⚠️ Aviso legal (disclaimer)

- **Pikmin y Pokémon son propiedad de Nintendo / Creatures Inc. / GAME FREAK inc.**
  Este proyecto es una herramienta **de fans, sin ánimo de lucro y sin ninguna
  relación con Nintendo**. Los personajes, nombres e imágenes de Pikmin/Pokémon
  que aparecen como decoración (la mascota animada, sus sonidos y los mensajes
  graciosos de Pokémon) se usan de forma **meramente ilustrativa y no comercial**.
- **Las imágenes de Pikmin/Pikmin Bloom no se distribuyen en este repositorio**:
  se descargan automáticamente (al compilar, o al primer arranque desde el
  código fuente si hay Internet) desde las wikis de fans:
  **Pikmin Bloom** → [pikminwiki.com](https://www.pikminwiki.com)
  (categoría *Pikmin Bloom Decor Pikmin images*) y **Pikmin clásicos** →
  [pikmin.fandom.com](https://pikmin.fandom.com). El ejecutable ya las lleva
  incluidas. Si eres titular de los derechos y quieres que se retire cualquier
  contenido, abre un *issue* y se elimina de inmediato.
- **Cricut y Design Space son marcas registradas de Provo Craft.** CryCat es una
  herramienta independiente, no oficial ni patrocinada por Cricut.
- Esta aplicación se ofrece **tal cual**, sin garantías. Úsala bajo tu
  responsabilidad.

---

## ✨ Qué hace

CryCat coge tus imágenes (PNG, JPG, WEBP, BMP, TIFF, GIF, PSD, AI, SVG…),
las limpia, las escala y **las coloca de la forma más eficiente posible** en el
área recortable de tu Cricut, generando un PNG a 300 ppp listo para
*Print Then Cut*.

- **Empaquetado por silueta real** (no por cajas): encaja unas piezas con otras
  aprovechando el hueco hasta la eficiencia máxima, con espaciado configurable.
- **Rotación** 0/90/180/270 o cualquier ángulo, elegida por el optimizador para
  cada pieza.
- **Copias** por imagen, **minis** que rellenan huecos (con cuota proporcional y
  lista de tamaños), **fijado** de piezas (posición y página) y reoptimización
  del resto a su alrededor.
- **Límites reales de la Cricut Maker 5** (polígono escalonado de 5 bandas,
  esquinas de las marcas de registro) y guías visuales solo en la vista previa.
- **Limpieza de fondo** inteligente, **detección y limpieza de trozos sueltos
  (blobs)**, y **borde/offset** (extender color, blanco o color personalizado).
- **Estimación del tiempo de corte** para la Maker 5 (perímetro + recorridos).
- **Perfiles de configuración** con nombre, temas pastel (12), Pikmin animado
  con sonidos, todo en **español e inglés**.
- **Exportación que nunca sobrescribe** y que **jamás modifica los originales**.
- **Aviso y actualización automática**: si hay Internet, al arrancar comprueba
  si hay versión nueva; puedes actualizar con un clic desde la propia app
  (descarga, instala y reinicia **sin perder ajustes, perfiles ni imágenes**).

### Privacidad y uso local

CryCat funciona **enteramente en tu ordenador**: no envía imágenes ni datos a
ningún sitio. La única conexión a Internet es la **comprobación opcional de
versiones** en GitHub (se puede desactivar en Ajustes → Extras).

---

## 📥 Instalación

### Windows — sin instalar nada (doble clic)

1. Descarga **`CryCat-para-Windows.zip`** (o clona el repositorio) y descomprímelo.
2. Doble clic en **`construir_windows.bat`**.
   - Si te falta **Python, lo instala solo** (en tu usuario, sin administrador).
   - **No necesitas Node.js**: el frontend ya viene compilado.
   - Verás el proceso por pasos con colores y, al final, un resumen.
3. Resultado: **`dist\CryCat.exe`** (un solo archivo) y, si hay Inno Setup,
   también **`packaging\Output\crycat-setup.exe`** (instalador con accesos
   directos). El propio lanzador te ofrece abrir la carpeta al terminar.

> Atajo: `construir_windows.bat -SinTests` salta los tests (más rápido).

### Windows — instalador automático (recomendado si hay release)

1. Pulsa el botón **DESCARGAR** de arriba (o abre
   [Releases](https://github.com/dhernandezgit/CryCat-Tool/releases/latest)).
2. Ejecuta `crycat-setup.exe`: instala CryCat, crea los accesos directos y
   añade un desinstalador. También pregunta si quieres el icono en el escritorio.

### Windows — un solo archivo (sin instalación)

Descarga `CryCat.exe` y haz doble clic. Se abre una **terminal** con el estado
del servidor y el navegador con la aplicación. Para salir, cierra la terminal
o pulsa `Ctrl+C`.

### Linux — un solo archivo

```sh
curl -fsSL https://raw.githubusercontent.com/dhernandezgit/CryCat-Tool/main/install.sh | sh
```

o descarga `crycat-onefile`, dale permisos de ejecución y lánzalo:

```sh
chmod +x crycat-onefile && ./crycat-onefile
```

### Linux — paquete con instalador de menú

Descarga `crycat-linux-*.tar.gz`, descomprime y ejecuta `install.sh`
(crea el lanzador en el menú de aplicaciones).

### Desde el código (desarrollo)

```bash
git clone https://github.com/dhernandezgit/CryCat-Tool.git
cd CryCat-Tool
./lanzar.sh              # backend + frontend con recarga
./lanzar.sh --compilado  # sirve el frontend ya compilado
```

Necesitas Python 3.10+ y Node.js 18+.

---

## 🚀 Uso rápido

1. Arrastra tus imágenes al panel **Imágenes** (o pulsa para elegirlas).
2. Ajusta el espacio, la rotación, las copias y los minis a tu gusto.
3. La app coloca todo automáticamente; mueve o fija piezas si quieres.
4. Pulsa **Guardar** (o **Imprimir**) y sube el PNG a Design Space con
   *Print Then Cut*. Si Design Space cambia el tamaño, ajusta
   *DPI de importación* (prueba 144).

### Barra inferior

| Elemento | Para qué sirve |
|---|---|
| `ⓘ App info` | Abre este repositorio en una pestaña nueva |
| `ES` / `EN` | Cambia el idioma de toda la interfaz |
| `v1.0.0 ⟳ ⬇` | Versión actual, comprobar versiones y actualizar |
| 🔊 + volumen | Sonido de Pikmin y volumen (silenciado por defecto) |
| `✂ 12 min 30 s` | Tiempo estimado de corte |

Cuando hay una versión nueva aparece un aviso en la barra:
**«Nueva versión vX.Y.Z disponible · Actualizar»**.

---

## 🔄 Sistema de versiones y actualizaciones

- Cada versión se publica con una **etiqueta** `vX.Y.Z` (SemVer) y una
  **release** de GitHub con los instaladores adjuntos.
- Al arrancar, si hay Internet, CryCat consulta
  `api.github.com/repos/dhernandezgit/CryCat-Tool/releases/latest` y avisa si
  hay algo nuevo (se puede desactivar en Ajustes → Extras).
- El botón **⟳** fuerza una comprobación y el **⬇** descarga la versión de tu
  plataforma, la instala con un script auxiliar y **reinicia la app**.
- **Nunca se pierde nada**: los ajustes, perfiles, imágenes de sesión y
  exportaciones viven en las carpetas de datos del usuario
  (`%APPDATA%\CryCat` en Windows, `~/.local/share/crycat` y `~/.config/crycat`
  en Linux), fuera del ejecutable.
- En modo desarrollo (código fuente) la actualización se hace con `git pull`.

La CI (`.github/workflows/build.yml`) construye Linux y Windows en cada
etiqueta y publica la release automáticamente.

---

## 🌍 Idiomas

Toda la interfaz está en **español e inglés**. Cambia con el botón `ES`/`EN`
de la barra inferior (se guarda para la próxima vez). La terminal del
ejecutable muestra los mensajes **en los dos idiomas a la vez**.

---

## 🧱 Arquitectura

```
backend/
  crycat/
    __main__.py     arranque, banner de terminal y servidor
    server.py       API FastAPI + frontend estático
    silhouette.py   empaquetado por silueta (correlación FFT)
    packer.py       optimizador por cajas (MaxRects/Skyline) y minis
    geometry.py     área recortable real de Cricut (5 bandas)
    imaging.py      importación, fondo, blobs, offset
    compose.py      exportación PNG/PDF y colocacion.json
    cuttime.py      estimación del tiempo de corte
    version.py      comprobación y autoactualización desde GitHub
    i18n.py         traducciones del backend (es/en)
    config.py       ajustes persistentes y perfiles
frontend/
  src/              React + TypeScript + Vite (i18n en src/i18n.tsx)
packaging/          scripts de empaquetado, iconos, Inno Setup
scripts/            utilidades (iconos, descarga de recursos, benchmarks)
```

**API principal**: `/api/assets`, `/api/optimize`, `/api/job/{id}`,
`/api/result`, `/api/estimate`, `/api/export`, `/api/print.pdf`,
`/api/settings`, `/api/presets`, `/api/version[/check|/update|/open]`.

### Tests

```bash
cd backend && .venv/bin/python -m pytest tests/   # 117 tests
cd frontend && npm test                            # 56 tests
```

---

## ❤️ Donaciones

Si te gusta la herramienta y quieres invitar a un café al que la hizo:

<div align="center">

### [💖 paypal.me/Darkniel42](https://paypal.me/Darkniel42)

¡Gracias! Cada aporte ayuda a seguir mejorando CryCat.

</div>

---

## 📜 Créditos

**CryCat** la han hecho **Daniel Hernández Ferrándiz** y **Wivi.eve**, para los artistas. 😿

Gracias especiales a la comunidad de Cricut por compartir medidas y trucos, y
a las wikis de Pikmin por mantener el material de referencia.

<div align="center">
<sub>Hecho con mucho cariño (y muchos Pikmin) 🐱✂️</sub>
</div>
