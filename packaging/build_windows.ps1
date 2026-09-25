# =====================================================================
#  CryCat · Windows TODO EN UNO (con feedback visual de cada paso)
# =====================================================================
#  Genera UN SOLO ARCHIVO:  dist\CryCat.exe
#  (también deja el instalador clásico si está Inno Setup)
#
#  Uso:  doble clic en build_windows.bat   o:
#        powershell -ExecutionPolicy Bypass -File packaging\build_windows.ps1
#
#  Requisitos (solo la primera vez): Python 3.10+ y Node.js 18+.
# =====================================================================
param(
  [switch]$SoloArchivoUnico,   # omite el instalador Inno Setup
  [switch]$SinTests,           # omite los tests (más rápido)
  [string]$PythonExe = "python"  # ruta o comando de Python 3.10+
)

$ErrorActionPreference = "Stop"
# UTF-8 en consola: evita UnicodeEncodeError con acentos/emojis en Windows
$env:PYTHONIOENCODING = "utf-8"
try { [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new() } catch {}
# que un programa nativo con salida != 0 no aborte por sí solo (se comprueba a mano)
if (Get-Variable PSNativeCommandUseErrorActionPreference -ErrorAction SilentlyContinue) {
  $PSNativeCommandUseErrorActionPreference = $false
}
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$inicio = Get-Date

function Paso($n, $total, $texto) {
  Write-Host ""
  Write-Host ("━" * 62) -ForegroundColor DarkMagenta
  Write-Host ("  [$n/$total]  $texto") -ForegroundColor Magenta
  Write-Host ("━" * 62) -ForegroundColor DarkMagenta
}
function Ok($t)   { Write-Host "  ✔ $t" -ForegroundColor Green }
function Info($t) { Write-Host "  · $t" -ForegroundColor Gray }
function Aviso($t){ Write-Host "  ! $t" -ForegroundColor Yellow }

Write-Host ""
Write-Host "  🐱  C r y C a t  —  empaquetado para Windows" -ForegroundColor Magenta
Write-Host "  Todo local, sin conexión a Internet." -ForegroundColor DarkGray

# ---------- comprobaciones previas ----------
Paso 1 7 "Comprobando requisitos"
$pythonOk = $false
if (Test-Path $PythonExe) { $pythonOk = $true }
elseif (Get-Command $PythonExe -ErrorAction SilentlyContinue) { $pythonOk = $true }
if (-not $pythonOk) {
  Write-Host "  ✖ No encuentro Python ($PythonExe)." -ForegroundColor Red
  Write-Host "    Usa construir_windows.bat: lo instala automáticamente."
  exit 1
}
# el frontend puede venir YA COMPILADO (backend\crycat\web): así no hace falta Node
$webListo = Test-Path "$Root\backend\crycat\web\index.html"
if ($webListo) {
  Info ("Python: " + (& $PythonExe --version 2>&1))
  Info "Node:   no hace falta (frontend ya compilado)"
} else {
  if (-not (Get-Command "npm" -ErrorAction SilentlyContinue)) {
    Write-Host "  ✖ Falta 'npm' (necesario para compilar el frontend)." -ForegroundColor Red
    Write-Host "    Instálalo desde https://nodejs.org/ o usa el paquete con el frontend ya compilado."
    exit 1
  }
  Info ("Python: " + (& $PythonExe --version 2>&1))
  Info ("Node:   " + (node --version 2>&1))
}
Ok "Requisitos presentes"

# ---------- entorno Python ----------
Paso 2 7 "Preparando el entorno de Python"
Set-Location "$Root\backend"
if (-not (Test-Path ".venv\Scripts\python.exe")) {
  Info "creando entorno virtual…"
  & $PythonExe -m venv .venv
  if ($LASTEXITCODE -ne 0) {
    Write-Host "  ✖ No se pudo crear el entorno virtual" -ForegroundColor Red
    exit 1
  }
}
& .\.venv\Scripts\python.exe -m pip install --quiet --upgrade pip
Info "instalando dependencias (puede tardar la primera vez)…"
& .\.venv\Scripts\python.exe -m pip install --quiet -r requirements-dev.txt
Ok "Entorno listo"

# ---------- iconos ----------
Paso 3 7 "Generando iconos"
& .\.venv\Scripts\python.exe "$Root\scripts\gen_icono.py"
Ok "Iconos generados"

# ---------- recursos ----------
Paso 4 7 "Recursos opcionales (Pikmin)"
Set-Location "$Root"
if (-not (Test-Path "frontend\public\pikmin")) {
  Info "descargando Pikmin básicos…"
  & "$Root\backend\.venv\Scripts\python.exe" "$Root\scripts\descargar_pikmin.py"
  if ($LASTEXITCODE -ne 0) { Aviso "no se pudieron descargar los Pikmin (se continúa sin ellos)" }
}
if (-not (Test-Path "frontend\public\pikmin_bloom\indice.json")) {
  Info "descargando Pikmin Bloom (puede tardar)…"
  & "$Root\backend\.venv\Scripts\python.exe" "$Root\scripts\descargar_pikmin_bloom.py"
  if ($LASTEXITCODE -eq 0) {
    & "$Root\backend\.venv\Scripts\python.exe" "$Root\scripts\indice_pikmin_bloom.py"
  } else {
    Aviso "no se pudo descargar Pikmin Bloom (se continúa sin ellos)"
  }
}
Ok "Recursos listos"

# ---------- frontend ----------
Paso 5 7 "Frontend (React)"
if (Test-Path "$Root\backend\crycat\web\index.html") {
  Info "ya viene compilado (no se necesita Node)"
  Ok "Frontend listo"
} else {
  Set-Location "$Root\frontend"
  if (-not (Test-Path "node_modules")) { Info "instalando npm…"; npm ci }
  npm run build
  if ($LASTEXITCODE -ne 0) { Write-Host "  ✖ Falló el build del frontend" -ForegroundColor Red; exit 1 }
  Ok "Frontend compilado"
}

# ---------- tests ----------
Paso 6 7 "Ejecutando tests"
Set-Location "$Root\backend"
if ($SinTests) { Aviso "omitidos (-SinTests)" }
else {
  & .\.venv\Scripts\python.exe -m pytest tests\ -q
  if ($LASTEXITCODE -ne 0) { Write-Host "  ✖ Hay tests en rojo" -ForegroundColor Red; exit 1 }
  Ok "Tests en verde"
}

# ---------- ejecutable único ----------
Paso 7 7 "Creando UN SOLO ARCHIVO (CryCat.exe)"
Info "esto puede tardar unos minutos…"
& .\.venv\Scripts\pyinstaller.exe crycat-onefile.spec --noconfirm
if ($LASTEXITCODE -ne 0) { Write-Host "  ✖ Falló PyInstaller" -ForegroundColor Red; exit 1 }
$destino = "$Root\dist"
New-Item -ItemType Directory -Force -Path $destino | Out-Null
Copy-Item "dist\CryCat.exe" "$destino\CryCat.exe" -Force
Ok ("Creado: " + "$destino\CryCat.exe")

# ---------- instalador clásico (opcional) ----------
if (-not $SoloArchivoUnico) {
  $ISCC = "C:\Program Files (x86)\Inno Setup 6\ISCC.exe"
  if (Test-Path $ISCC) {
    Info "generando instalador (Inno Setup)…"
    & $ISCC "$Root\packaging\crycat.iss"
    Ok "Instalador en packaging\Output\crycat-setup.exe"
  } else {
    Aviso "Inno Setup no encontrado: se omite el instalador (el .exe ya sirve)"
  }
}

# ---------- resumen ----------
$dur = [int]((Get-Date) - $inicio).TotalSeconds
Write-Host ""
Write-Host ("═" * 62) -ForegroundColor Magenta
Write-Host "  🎉 LISTO en $dur s" -ForegroundColor Green
Write-Host ""
Write-Host "  Archivo único:  dist\CryCat.exe" -ForegroundColor White
Write-Host "  → cópialo donde quieras y haz doble clic. Se abre en el navegador." -ForegroundColor Gray
Write-Host "  → los archivos originales nunca se modifican; todo es local." -ForegroundColor Gray
Write-Host ("═" * 62) -ForegroundColor Magenta
Write-Host ""
