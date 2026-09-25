#!/usr/bin/env bash
# Instalador sencillo de CryCat para Linux (usuario, sin root).
# Uso: ./install.sh        (instala en ~/.local/share/crycat + lanzador)
set -euo cdspell
set -e

DIR_INST="${CRYCAT_DIR:-$HOME/.local/share/crycat}"
ORIGEN="$(cd "$(dirname "$0")" && pwd)"

echo "Instalando CryCat en $DIR_INST…"
mkdir -p "$DIR_INST"
cp -r "$ORIGEN"/. "$DIR_INST/"
chmod +x "$DIR_INST/crycat"

APPS="$HOME/.local/share/applications"
ICONOS="$HOME/.local/share/icons/hicolor/256x256/apps"
mkdir -p "$APPS" "$ICONOS"

if [ -f "$DIR_INST/icono.png" ]; then
  cp "$DIR_INST/icono.png" "$ICONOS/crycat.png"
fi

cat > "$APPS/crycat.desktop" <<EOF
[Desktop Entry]
Name=CryCat
Comment=Pegatinas óptimas para Cricut
Exec=$DIR_INST/crycat
Icon=$ICONOS/crycat.png
Type=Application
Categories=Graphics;Utility;
StartupNotify=true
EOF

update_desktop_db() { command -v update-desktop-database >/dev/null && update-desktop-database "$APPS" || true; }
update_desktop_db

echo "✔ CryCat instalado. Búscalo en el menú de aplicaciones o ejecuta:"
echo "    $DIR_INST/crycat"
