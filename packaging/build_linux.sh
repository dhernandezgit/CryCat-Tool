#!/usr/bin/env bash
# Build del ejecutable + paquete instalable para Linux.
# Uso: ./packaging/build_linux.sh
set -euo pipefail
cd "$(dirname "$0")/.."
ROOT="$(pwd)"

echo "── 1/5 Entorno Python ────────────────────────────"
cd "$ROOT/backend"
if [ ! -x .venv/bin/python ]; then python3 -m venv .venv; fi
.venv/bin/pip install --quiet --upgrade pip
.venv/bin/pip install --quiet -r requirements-dev.txt

echo "── 2/6 Iconos ────────────────────────────────────"
.venv/bin/python "$ROOT/scripts/gen_icono.py"

echo "── 3/6 Recursos (Pikmin) ─────────────────────────"
cd "$ROOT"
if [ -d backend/crycat/web/pikmin ] && [ -f backend/crycat/web/pikmin_bloom/indice.json ]; then
  echo "   · las imágenes de Pikmin ya vienen en el paquete"
else
  if [ ! -d frontend/public/pikmin ]; then
    echo "   · descargando Pikmin básicos…"
    backend/.venv/bin/python scripts/descargar_pikmin.py || true
  fi
  if [ ! -f frontend/public/pikmin_bloom/indice.json ]; then
    echo "   · descargando Pikmin Bloom (puede tardar unos minutos)…"
    backend/.venv/bin/python scripts/descargar_pikmin_bloom.py || true
    backend/.venv/bin/python scripts/indice_pikmin_bloom.py || true
  fi
fi

echo "── 4/6 Frontend (React) ──────────────────────────"
rm -rf "$ROOT/backend/crycat/web/assets" "$ROOT/backend/crycat/web/index.html"
cd "$ROOT/frontend"
if [ ! -d node_modules ]; then npm ci --silent; fi
npm run build

# Los tests NO se pasan en un build local (solo con --tests o en la CI)
if [ "${1:-}" = "--tests" ]; then
  echo "── 5/6 Tests (a petición) ────────────────────────"
  cd "$ROOT/backend"
  .venv/bin/python -m pytest tests/ -q
else
  echo "── 5/6 Tests: omitidos (usa --tests para pasarlos) ─"
fi
cd "$ROOT/backend"

echo "── 6/6 Ejecutable (PyInstaller) ──────────────────"
rm -rf dist build
.venv/bin/pyinstaller crycat.spec --noconfirm
cp ../packaging/install.sh dist/
cp crycat/web/icono.png dist/
# versión de UN SOLO ARCHIVO (más cómoda de repartir)
.venv/bin/pyinstaller crycat-onefile.spec --noconfirm
mkdir -p ../dist                     # en un clon limpio aún no existe
mv dist/CryCat "../dist/crycat-onefile"
chmod +x "../dist/crycat-onefile"

STAMP="$(date +%Y%m%d)"
PKG="crycat-linux-$STAMP"
mkdir -p "../dist/$PKG"
cp -r dist/crycat "../dist/$PKG/"
cp dist/install.sh dist/icono.png "../dist/$PKG/"
tar -C ../dist -czf "../dist/$PKG.tar.gz" "$PKG"

echo ""
echo "✔ Ejecutable:  backend/dist/crycat/crycat"
echo "✔ Instalador:  dist/$PKG.tar.gz  (descomprimir y ejecutar install.sh)"
