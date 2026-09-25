#!/usr/bin/env bash
# =====================================================================
#  CryCat · lanzador de desarrollo (backend + frontend con una orden)
# =====================================================================
#  Uso:
#    ./lanzar.sh                 # backend (Python) + frontend (Vite con recarga)
#    ./lanzar.sh --compilado     # solo backend sirviendo el frontend ya compilado
#    ./lanzar.sh --puerto 9000   # elegir puerto del backend (por defecto 8712)
#
#  Al arrancar se abre el navegador automáticamente.
#  Detener con Ctrl+C.
# =====================================================================
set -uo pipefail
cd "$(dirname "$0")"
ROOT="$(pwd)"

MODO="dev"
PUERTO=8712
ABRIR_NAVEGADOR=1

while [ $# -gt 0 ]; do
  case "$1" in
    --compilado|--prod) MODO="prod" ;;
    --sin-navegador)    ABRIR_NAVEGADOR=0 ;;
    --puerto)           PUERTO="${2:?falta el número de puerto}"; shift ;;
    -h|--help)          sed -n '2,11p' "$0"; exit 0 ;;
    *) echo "Opción desconocida: $1 (usa --help)"; exit 1 ;;
  esac
  shift
done

# ---------- colores ----------
G="\e[32m"; R="\e[35m"; Y="\e[33m"; N="\e[0m"
log() { printf "${R}  ╭─${N} ${G}CryCat${N} $*\n"; }

# ---------- 1. entorno Python (backend) ----------
if [ ! -x backend/.venv/bin/python ]; then
  log "Creando entorno virtual de Python…"
  python3 -m venv backend/.venv || { echo "Falta python3-venv"; exit 1; }
  backend/.venv/bin/pip install --quiet --upgrade pip
  backend/.venv/bin/pip install --quiet -r backend/requirements.txt
fi
# dependencias de ejecución (si cambió requirements.txt)
if [ backend/requirements.txt -nt backend/.venv/.deps-ok ]; then
  log "Instalando dependencias del backend…"
  backend/.venv/bin/pip install --quiet -r backend/requirements.txt
  touch backend/.venv/.deps-ok
fi

# ---------- 2. dependencias del frontend ----------
if [ "$MODO" = "dev" ] && [ ! -d frontend/node_modules ]; then
  log "Instalando dependencias del frontend (npm)…"
  (cd frontend && npm install --silent)
fi

# ---------- 3. puerto libre ----------
libre() { ! (exec 3<>"/dev/tcp/127.0.0.1/$1") 2>/dev/null; }
if ! libre "$PUERTO"; then
  log "${Y}El puerto $PUERTO está ocupado; probando siguientes…${N}"
  while ! libre "$PUERTO"; do PUERTO=$((PUERTO + 1)); done
  log "Usaremos el puerto ${Y}$PUERTO${N}"
fi

# ---------- 4. limpieza al salir ----------
PIDS=()
limpiar() {
  trap - INT TERM EXIT
  echo ""
  log "Deteniendo CryCat…"
  for p in "${PIDS[@]:-}"; do
    kill -- "-$p" 2>/dev/null || kill "$p" 2>/dev/null || true
  done
  wait 2>/dev/null || true
  # red de seguridad por si algún hijo se escapó del grupo
  pkill -f "python -m crycat" 2>/dev/null || true
  pkill -f "vite" 2>/dev/null || true
}
trap limpiar INT TERM EXIT

# ---------- 5. arranque (cada proceso en su propio grupo) ----------
log "Arrancando backend en ${Y}http://127.0.0.1:$PUERTO${N}…"
setsid bash -c "cd '$ROOT/backend' && exec .venv/bin/python -m crycat --no-browser --port '$PUERTO'" &
PIDS+=($!)

URL=""
if [ "$MODO" = "dev" ]; then
  log "Arrancando frontend (Vite con recarga automática)…"
  setsid bash -c "cd '$ROOT/frontend' && BACKEND_PORT='$PUERTO' exec npm run --silent dev" &
  PIDS+=($!)
  URL="http://127.0.0.1:5173/"
else
  # sirve el build ya generado en backend/crycat/web
  if [ ! -f backend/crycat/web/index.html ]; then
    log "${Y}No hay build del frontend; creo uno…${N}"
    (cd frontend && npm install --silent && npm run build)
  fi
  URL="http://127.0.0.1:$PUERTO/"
fi

sleep 2.5

# comprobación de salud
if curl -sf "http://127.0.0.1:$PUERTO/api/health" > /dev/null 2>&1; then
  log "Backend ${G}✔${N} (salud OK)"
else
  log "${Y}El backend aún no responde; puede estar arrancando…${N}"
fi

if [ "$ABRIR_NAVEGADOR" = "1" ] && command -v xdg-open > /dev/null 2>&1; then
  ( sleep 1; xdg-open "$URL" > /dev/null 2>&1 ) &
fi

echo ""
printf "  ${R}╭─${N} ${G}CryCat listo${N}\n"
printf "  ${R}│${N}  Frontend:  ${Y}%s${N}\n" "$URL"
if [ "$MODO" = "dev" ]; then
  printf "  ${R}│${N}  Backend:   ${Y}http://127.0.0.1:%s${N} (API)\n" "$PUERTO"
  printf "  ${R}│${N}  Modo:      desarrollo (recarga automática en el navegador)\n"
else
  printf "  ${R}│${N}  Modo:      compilado (un solo proceso)\n"
fi
printf "  ${R}╰─${N}  Detener: ${G}Ctrl+C${N}\n\n"

wait -n "${PIDS[@]}" 2>/dev/null || wait
