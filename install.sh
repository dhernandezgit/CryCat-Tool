#!/usr/bin/env sh
# =====================================================================
#  Instalador universal de CryCat para Linux
#  Descarga la última versión publicada y la instala con acceso directo.
#
#  Uso:  curl -fsSL https://raw.githubusercontent.com/dhernandezgit/CryCat-Tool/main/install.sh | sh
# =====================================================================
set -eu

REPO="dhernandezgit/CryCat-Tool"
API="https://api.github.com/repos/$REPO/releases/latest"
DEST="${CRYCAT_DIR:-$HOME/.local/bin}"
ICONO="$HOME/.local/share/crycat/icono.png"

printf '\033[38;5;211m→ Buscando la última versión de CryCat…\033[0m\n'
URL="$(curl -fsSL "$API" \
  | grep -o '"browser_download_url": *"[^"]*crycat-onefile"' \
  | head -1 | sed 's/.*"\(https[^"]*\)".*/\1/')"
if [ -z "${URL:-}" ]; then
  echo "✖ No se encontró el archivo crycat-onefile en la última release."
  echo "  Comprueba https://github.com/$REPO/releases"
  exit 1
fi

mkdir -p "$DEST"
printf '\033[38;5;211m→ Descargando CryCat…\033[0m\n'
curl -fL --progress-bar "$URL" -o "$DEST/crycat"
chmod +x "$DEST/crycat"

# icono y acceso directo en el menú de aplicaciones
mkdir -p "$(dirname "$ICONO")"
curl -fsSL "https://raw.githubusercontent.com/$REPO/main/assets/4697-crying-cat.png" \
  -o "$ICONO" 2>/dev/null || true
APPS="$HOME/.local/share/applications"
mkdir -p "$APPS"
cat > "$APPS/crycat.desktop" <<EOF
[Desktop Entry]
Type=Application
Name=CryCat
Comment=Coloca tus imágenes de forma óptima para Cricut
Exec=$DEST/crycat
Icon=$ICONO
Terminal=true
Categories=Graphics;Utility;
EOF
command -v update-desktop-database >/dev/null 2>&1 && \
  update-desktop-database "$APPS" >/dev/null 2>&1 || true

printf '\033[38;5;151m✔ CryCat instalado en %s\033[0m\n' "$DEST/crycat"
printf '  Ábrelo desde el menú de aplicaciones o ejecuta: \033[38;5;211mcrycat\033[0m\n'
case ":$PATH:" in
  *":$DEST:"*) ;;
  *) printf '  (añade %s al PATH si no está)\n' "$DEST" ;;
esac
