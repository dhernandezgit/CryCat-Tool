<div align="center">

# 🐱 CryCat

**ES** · Coloca tus imágenes de forma óptima para Cricut — todo local, sin conexión.
**EN** · Place your images optimally for Cricut — fully local, offline.

[![Español](https://img.shields.io/badge/ES-Espa%C3%B1ol-e08bb0?style=for-the-badge&labelColor=43303a)](#espanol)
[![English](https://img.shields.io/badge/EN-English-9c6bd6?style=for-the-badge&labelColor=43303a)](#english-full)

[![Descargar instalador](https://img.shields.io/badge/⬇_DESCARGAR-Instalador_automático-ff69b4?style=for-the-badge&labelColor=d94f6a)](https://github.com/dhernandezgit/CryCat-Tool/releases/latest/download/crycat-setup.exe)
[![Windows portable](https://img.shields.io/badge/Windows-Un_solo_archivo-ffb6c1?style=for-the-badge&labelColor=d94f6a)](https://github.com/dhernandezgit/CryCat-Tool/releases/latest/download/CryCat.exe)
[![Linux](https://img.shields.io/badge/Linux-Un_solo_archivo-ffe4c4?style=for-the-badge&labelColor=d94f6a)](https://github.com/dhernandezgit/CryCat-Tool/releases/latest/download/crycat-onefile)

[![Web del proyecto](https://img.shields.io/badge/🌐_WEB-Guía_y_descargas-e08bb0?style=for-the-badge&labelColor=43303a)](https://dhernandezgit.github.io/CryCat-Tool/)
[![Usar en el navegador](https://img.shields.io/badge/▶_USARLO_YA-En_el_navegador-9c6bd6?style=for-the-badge&labelColor=43303a)](https://dhernandezgit.github.io/CryCat-Tool/web/)

<sub>La hicieron **Daniel Hernández Ferrándiz** y **Wivi.eve**, para los artistas.
<br/>Made by **Daniel Hernández Ferrándiz** and **Wivi.eve**, for artists.</sub>

</div>

---

<a id="espanol"></a>

## 🇪🇸 Español

<table>
<tr><th>🇪🇸 En dos palabras</th><th>🇬🇧 In a nutshell</th></tr>
<tr>
<td>

CryCat coge tus imágenes (PNG, JPG, WEBP, PSD, AI, SVG…) y **las coloca de la
forma más eficiente posible** en el área recortable de tu Cricut, generando un
PNG a 300 ppp listo para *Print Then Cut*. Todo se calcula **en tu equipo**.

</td>
<td>

CryCat takes your images (PNG, JPG, WEBP, PSD, AI, SVG…) and **lays them out as
efficiently as possible** inside your Cricut cutting area, producing a 300 dpi
PNG ready for *Print Then Cut*. Everything runs **on your own machine**.

</td>
</tr>
<tr>
<td>

▶ **[Usar CryCat en el navegador](https://dhernandezgit.github.io/CryCat-Tool/web/)**
(sin instalar nada) · 🌐 **[Web del proyecto](https://dhernandezgit.github.io/CryCat-Tool/)**

</td>
<td>

▶ **[Use CryCat in your browser](https://dhernandezgit.github.io/CryCat-Tool/web/)**
(nothing to install) · 🌐 **[Project site](https://dhernandezgit.github.io/CryCat-Tool/)**

</td>
</tr>
</table>

---

### ✨ Qué hace

- **Empaquetado por silueta real** (no por cajas): el contorno se extrae con
  OpenCV y el solape se calcula **siempre con la forma de verdad** (un círculo
  ocupa 0,79 de su caja, no 1,00). La eficiencia que ves es la superficie real.
- **4 métodos de optimización**: *Greedy/Bottom-Left* (rápido, por defecto),
  *Largest First*, *Voronoi* (huecos libres) y *Genético* (máxima calidad), con
  **compactación tipo DeepNest** y **3 niveles de calidad** (exacta/normal/rápida).
- **Tamaño exacto en mm** por ancho o por alto, y **importación múltiple** con
  popup (preview sobre la hoja + cuadrícula + escala o tamaño fijo, nunca ambos).
- **Papeles A4, A3, A5 y Letter** (y personalizado), con los **límites reales y
  las marcas de registro adaptadas a cada tamaño** (polígono de 5 bandas).
- **Rotación** 0/90/180/270 o cualquier ángulo, elegida por el optimizador para
  cada pieza.
- **Copias** por imagen, **minis** que rellenan huecos (con cuota proporcional y
  lista de tamaños), **fijado** de piezas y reoptimización del resto alrededor.
- **Limpieza de fondo** inteligente y **trozos sueltos (blobs)**: se pueden
  borrar o **fusionar**, y unirlos con un **borde** por elemento o global
  (extender, blanco o color) que es un valor en **mm del resultado**.
- **Bordes que se calculan siempre con la forma final** (con el borde y todas
  las modificaciones aplicadas): lo que ves es lo que se corta.
- **Impresión con las marcas de Cricut**: guarda primero y genera un PDF a
  300 ppp con las **marcas negras reales** (4 esquinas en L y la flecha) para
  imprimir sin pasar por Design Space.
- **Guardado inteligente**: una página = PNG directo (sin carpeta ni JSON) y
  **popup propio** con qué se guardó, dónde, abrir carpeta y los pasos para
  Design Space.
- **Color de impresión**: sRGB/AdobeRGB (perfil ICC), **simulación CMYK** y
  **sangrado (bleed)** para evitar rebordes blancos.
- **Historial local** (Ctrl+Z / Ctrl+Y) configurable, **6 presets de fábrica**
  (chapa, pegatina, hoja, imán, pegatina grande, vinilo) y **perfiles** propios.
- **Temas pastel**, **Pikmin** animado con sonidos, modo fiesta oculto
  (**5 clics en el gato**) y todo en **español e inglés**.
- **Nunca modifica tus originales** y **nunca sobrescribe** una exportación.
- **Aviso y actualización automática** desde la propia app, sin perder ajustes.

### 🌐 Versión web (sin instalar nada)

En **https://dhernandezgit.github.io/CryCat-Tool/web/** puedes usar CryCat en el
navegador:

- Ejecuta **el mismo motor que la aplicación** (el paquete Python real,
  compilado a WebAssembly con Pyodide): misma geometría, siluetas, límites y
  exportación a 300 ppp.
- **Tus imágenes no se suben a ningún servidor**: todo ocurre en tu equipo.
- En el navegador el cálculo es más lento: para muchas piezas usa calidad
  *Rápida* o menos copias.
- Formatos: PNG, JPG, WEBP y GIF (PSD/AI/PDF solo en la versión de escritorio).

### 🔒 Privacidad

CryCat funciona **enteramente en tu ordenador**: no envía imágenes ni datos a
ningún sitio. La única conexión es la **comprobación opcional de versiones** en
GitHub (se puede desactivar en Ajustes → Extras).

### 📥 Instalación

| Plataforma | Cómo |
|---|---|
| **Windows (instalador)** | Descarga `crycat-setup.exe` con el botón de arriba: instala, crea accesos directos y desinstalador. |
| **Windows (portable)** | Descarga `CryCat.exe` y haz doble clic. Se abre una terminal con el estado y el navegador con la app. |
| **Linux (un archivo)** | `curl -fsSL https://raw.githubusercontent.com/dhernandezgit/CryCat-Tool/main/install.sh \| sh` o descarga `crycat-onefile`, `chmod +x` y ejecútalo. |
| **Linux (paquete)** | Descarga `crycat-linux-*.tar.gz`, descomprime y ejecuta `install.sh` (crea el lanzador del menú). |
| **Desde el código** | `git clone`, y luego `./lanzar.sh` (backend + frontend con recarga) o `./lanzar.sh --compilado`. Necesitas Python 3.10+ y Node.js 18+. |

### 🚀 Uso rápido

1. Arrastra tus imágenes al panel **Imágenes** (o pulsa para elegirlas).
2. Ajusta espacio, rotación, copias y minis a tu gusto.
3. La app coloca todo automáticamente; mueve o fija piezas si quieres.
4. Pulsa **Guardar** (o **Imprimir**) y sube el PNG a Design Space con
   *Print Then Cut*. Si Design Space cambia el tamaño, ajusta *DPI de
   importación* (prueba 144).

**Barra inferior:** `Cómo usar` (guía), `ⓘ` (repositorio), `ES`/`EN` (idioma),
`vX.Y.Z ⟳ ⬇` (comprobar y actualizar), 🔊 (sonido y volumen), `✂` (tiempo de
corte estimado) y `Apoyar` (invitar a un café).

### ⚠️ Aviso legal

- **Pikmin y Pokémon son propiedad de Nintendo / Creatures Inc. / GAME FREAK
  inc.** CryCat es una herramienta **de fans, sin ánimo de lucro y sin ninguna
  relación con Nintendo**. Los personajes, nombres, imágenes y sonidos de
  Pikmin/Pokémon que aparecen como decoración (la mascota animada, sus sonidos
  y los mensajes graciosos) se usan de forma **ilustrativa y no comercial**.
- Las imágenes de Pikmin/Pikmin Bloom de la mascota proceden de las wikis de
  fans (**[pikminwiki.com](https://www.pikminwiki.com)** y
  **[pikmin.fandom.com](https://pikmin.fandom.com)**), con su atribución. Si
  eres titular de derechos y quieres que se retire algo, abre un *issue* y se
  elimina de inmediato.
- **Cricut y Design Space son marcas registradas de Provo Craft.** CryCat es
  independiente, no oficial y no está patrocinada por Cricut.
- La aplicación se ofrece **tal cual**, sin garantías.

### 🧱 Arquitectura y tests

```
backend/crycat/   motor Python: silhouette.py (siluetas), packer.py (cajas),
                  geometry.py (área de Cricut), imaging.py, compose.py,
                  server.py (FastAPI) y webapi.py (puente para la web)
frontend/src/     React + TypeScript + Vite (i18n en src/i18n.tsx)
packaging/        empaquetado, iconos e Inno Setup
scripts/          utilidades (recursos, web, verificación de siluetas)
```

```bash
cd backend && .venv/bin/python -m pytest tests/   # 135 tests
cd frontend && npm test                            # 67 tests
backend/.venv/bin/python scripts/verificar_siluetas.py   # imagen de control
```

### ❤️ Donaciones

Si te gusta la herramienta y quieres invitar a un café al que la hizo:
**[💖 paypal.me/Darkniel42](https://paypal.me/Darkniel42)** — ¡gracias!

### 📜 Créditos

**CryCat** la han hecho **Daniel Hernández Ferrándiz** y **Wivi.eve**, para los
artistas. Gracias a la comunidad de Cricut por compartir medidas y trucos, y a
las wikis de Pikmin por el material de referencia.

<p align="right"><a href="#english-full">🇬🇧 Read this in English ↓</a></p>

---

<a id="english-full"></a>

## 🇬🇧 English

### ✨ What it does

- **True-silhouette packing** (not bounding boxes): outlines are extracted with
  OpenCV and overlap is **always computed on the real shape** (a circle takes
  0.79 of its box, not 1.00). The efficiency shown is real surface area.
- **4 optimisation methods**: *Greedy/Bottom-Left* (fast, default), *Largest
  First*, *Voronoi* (free gaps) and *Genetic* (best quality), with
  **DeepNest-style compaction** and **3 quality levels** (exact/normal/fast).
- **Exact mm sizing** by width or height, and **multi-import** with a popup
  (sheet preview + grid + scale or fixed size, never both).
- **A4, A3, A5 and Letter papers** (plus custom) with the **real limits and
  registration marks adapted to each size** (5-band polygon).
- **Rotation** 0/90/180/270 or any angle, chosen per piece by the optimiser.
- **Copies** per image, **minis** that fill gaps (proportional quota and size
  list), **pinning** pieces and re-optimising the rest around them.
- **Background removal** and **loose blobs**: delete them or **merge** them, and
  join them with a per-item or global **border** (extend, white or custom
  colour) measured in **mm of the result**.
- **Borders are always computed on the final shape** (border and every
  modification applied): what you see is what gets cut.
- **Printing with Cricut marks**: saves first, then produces a 300 dpi PDF with
  the **real black marks** (4 L-shaped corners and the arrow) so you can print
  without going through Design Space.
- **Smart saving**: one page = direct PNG (no folder, no JSON) and a **built-in
  popup** showing what was saved, where, open-folder and Design Space steps.
- **Print colour**: sRGB/AdobeRGB (ICC profile), **CMYK simulation** and
  **bleed** to avoid white fringes.
- **Local history** (Ctrl+Z / Ctrl+Y), **6 factory presets** (pin badge, sticker,
  sheet, magnet, big sticker, vinyl) and your own named **profiles**.
- **Pastel themes**, an animated **Pikmin** with sounds, a hidden party mode
  (**5 clicks on the cat**) and everything in **Spanish and English**.
- **Never touches your originals** and **never overwrites** an export.
- **Update checks** and one-click updating from inside the app, keeping your
  settings, profiles and images.

### 🌐 Web version (nothing to install)

At **https://dhernandezgit.github.io/CryCat-Tool/web/** you can use CryCat in
your browser:

- It runs **the same engine as the desktop app** (the real Python package,
  compiled to WebAssembly with Pyodide): same geometry, silhouettes, limits and
  300 dpi export.
- **Your images are never uploaded**: everything happens on your machine.
- It is slower than the executable: for many pieces use the *Fast* quality or
  fewer copies.
- Formats: PNG, JPG, WEBP and GIF (PSD/AI/PDF only in the desktop version).

### 🔒 Privacy

CryCat runs **entirely on your computer**: it never sends images or data
anywhere. The only connection is the **optional version check** on GitHub (can
be disabled in Settings → Extras).

### 📥 Install

| Platform | How |
|---|---|
| **Windows (installer)** | Download `crycat-setup.exe` above: installs with shortcuts and an uninstaller. |
| **Windows (portable)** | Download `CryCat.exe` and double-click it. A terminal shows the status and your browser opens the app. |
| **Linux (single file)** | `curl -fsSL https://raw.githubusercontent.com/dhernandezgit/CryCat-Tool/main/install.sh \| sh` or download `crycat-onefile`, `chmod +x` and run it. |
| **Linux (package)** | Download `crycat-linux-*.tar.gz`, unpack and run `install.sh` (adds a menu launcher). |
| **From source** | `git clone`, then `./lanzar.sh` (backend + frontend with reload) or `./lanzar.sh --compilado`. Needs Python 3.10+ and Node.js 18+. |

### 🚀 Quick start

1. Drop your images into the **Images** panel (or click to pick them).
2. Adjust spacing, rotation, copies and minis to taste.
3. The app lays everything out automatically; move or pin pieces if you like.
4. Hit **Save** (or **Print**) and upload the PNG to Design Space with *Print
   Then Cut*. If Design Space resizes it, tweak the *import DPI* (try 144).

**Bottom bar:** `How to use` (guide), `ⓘ` (repository), `ES`/`EN` (language),
`vX.Y.Z ⟳ ⬇` (check and update), 🔊 (sound and volume), `✂` (estimated cutting
time) and `Support` (buy me a coffee).

### ⚠️ Legal notice

- **Pikmin and Pokémon are property of Nintendo / Creatures Inc. / GAME FREAK
  inc.** CryCat is a **fan-made, non-profit tool with no relationship to
  Nintendo**. The Pikmin/Pokémon characters, names, images and sounds used as
  decoration (the animated pet, its sounds and the funny messages) are used
  **illustratively and non-commercially**.
- The pet's Pikmin/Pikmin Bloom images come from the fan wikis
  (**[pikminwiki.com](https://www.pikminwiki.com)** and
  **[pikmin.fandom.com](https://pikmin.fandom.com)**, with attribution). If you
  hold the rights and want something removed, open an *issue* and it will be
  taken down immediately.
- **Cricut and Design Space are registered trademarks of Provo Craft.** CryCat
  is independent, unofficial and not sponsored by Cricut.
- The app is provided **as is**, without warranty.

### 🧱 Architecture and tests

```
backend/crycat/   Python engine: silhouette.py (silhouettes), packer.py (boxes),
                  geometry.py (Cricut area), imaging.py, compose.py,
                  server.py (FastAPI) and webapi.py (web bridge)
frontend/src/     React + TypeScript + Vite (i18n in src/i18n.tsx)
packaging/        packaging, icons and Inno Setup
scripts/          utilities (assets, web, silhouette verification)
```

```bash
cd backend && .venv/bin/python -m pytest tests/   # 135 tests
cd frontend && npm test                            # 67 tests
backend/.venv/bin/python scripts/verificar_siluetas.py   # control image
```

### ❤️ Donations

If you like the tool and want to buy the maker a coffee:
**[💖 paypal.me/Darkniel42](https://paypal.me/Darkniel42)** — thank you!

### 📜 Credits

**CryCat** was made by **Daniel Hernández Ferrándiz** and **Wivi.eve**, for
artists. Thanks to the Cricut community for sharing measurements and tricks, and
to the Pikmin wikis for the reference material.

<div align="center">
<sub>Hecho con mucho cariño (y muchos Pikmin) · Made with love (and lots of Pikmin) 🐱✂️</sub>
</div>
