# =====================================================================
#  CryCat · CONSTRUCTOR AUTOMÁTICO para Windows
#
#  No hace falta instalar nada a mano:
#    · si falta Python, se descarga e instala solo (en tu usuario)
#    · usa el frontend YA COMPILADO que viene en el paquete (no necesita Node)
#    · instala las dependencias y genera  dist\CryCat.exe
#    · si hay Inno Setup (o se puede instalar), genera también el instalador
#
#  Uso: doble clic en construir_windows.bat
# =====================================================================
# Sin tests por defecto (solo con -ConTests, o los pasa la CI)
param([switch]$ConTests)

$ErrorActionPreference = "Stop"
# UTF-8 en consola: evita UnicodeEncodeError con acentos/emojis en Windows
$env:PYTHONIOENCODING = "utf-8"
try { [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new() } catch {}
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
function Ok($t)    { Write-Host "  ✔ $t" -ForegroundColor Green }
function Info($t)  { Write-Host "  · $t" -ForegroundColor Gray }
function Aviso($t) { Write-Host "  ! $t" -ForegroundColor Yellow }

function Buscar-Python {
  # 1) el lanzador 'py' con versión concreta (lo más fiable en Windows)
  if (Get-Command "py" -ErrorAction SilentlyContinue) {
    foreach ($v in @("-3.13", "-3.12", "-3.11", "-3.10", "-3")) {
      try {
        & py $v -c "import sys" 2>$null
        if ($LASTEXITCODE -eq 0) { return @("py", $v) }
      } catch {}
    }
  }
  # 2) python / python3 en el PATH
  foreach ($c in @("python", "python3")) {
    if (Get-Command $c -ErrorAction SilentlyContinue) {
      try {
        $out = & $c --version 2>&1
        if ($LASTEXITCODE -eq 0 -and "$out" -match "Python 3\.(1[0-9]|[89])") {
          return @($c, "")
        }
      } catch {}
    }
  }
  return $null
}

function Ruta-Python($py) {
  $extra = @()
  if ($py[1]) { $extra += $py[1] }
  $ruta = & $py[0] @extra -c "import sys; print(sys.executable)" 2>$null
  return "$ruta".Trim()
}

Write-Host ""
Write-Host "  🐱  C r y C a t  —  constructor automático" -ForegroundColor Magenta
Write-Host "  Prepara TODO y genera dist\CryCat.exe. No tienes que instalar nada." -ForegroundColor DarkGray

# ---------------------------------------------------------------- Python --
Paso 1 2 "Comprobando Python"
$py = Buscar-Python
if ($py) {
  Ok ("Python encontrado: " + $py[0] + " " + $py[1])
} else {
  Info "Python no está instalado: se instalará automáticamente (sin administrador)"
  $url = "https://www.python.org/ftp/python/3.11.9/python-3.11.9-amd64.exe"
  $dest = Join-Path $env:TEMP "crycat-python-3.11.9.exe"
  Info "descargando Python 3.11.9…"
  Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing
  Info "instalando (puede tardar un par de minutos)…"
  Start-Process -FilePath $dest -Wait -ArgumentList @(
    "/quiet", "InstallAllUsers=0", "PrependPath=1",
    "Include_test=0", "Include_doc=0", "Include_tcltk=0", "Include_launcher=1"
  )
  # refrescar el PATH de este proceso
  $env:Path = [Environment]::GetEnvironmentVariable("Path", "User") + ";" +
              [Environment]::GetEnvironmentVariable("Path", "Machine")
  Start-Sleep -Seconds 2
  $py = Buscar-Python
  if (-not $py) {
    Write-Host "  ✖ No se pudo instalar Python automáticamente." -ForegroundColor Red
    Write-Host "    Instálalo desde https://www.python.org/downloads/windows/" -ForegroundColor Gray
    Write-Host "    (marca «Add python.exe to PATH») y vuelve a ejecutar este archivo." -ForegroundColor Gray
    Read-Host "Pulsa Enter para salir"
    exit 1
  }
  Ok ("Python instalado: " + $py[0] + " " + $py[1])
}
$pythonPath = Ruta-Python $py
if (-not (Test-Path $pythonPath)) { $pythonPath = $py[0] }
Info ("intérprete: " + $pythonPath)

# ------------------------------------------------------------- construir --
Paso 2 2 "Construyendo CryCat (dependencias + ejecutable)"
$argumentos = @("-NoProfile", "-ExecutionPolicy", "Bypass",
                "-File", "$Root\packaging\build_windows.ps1",
                "-PythonExe", "$pythonPath")
if ($ConTests) { $argumentos += "-Tests" }
& powershell @argumentos
$codigo = $LASTEXITCODE
if ($codigo -ne 0) {
  Write-Host ""
  Write-Host "  ✖ La construcción falló (código $codigo)." -ForegroundColor Red
  Write-Host "    Revisa los mensajes de arriba." -ForegroundColor Gray
  Read-Host "Pulsa Enter para salir"
  exit 1
}

# --------------------------------------------------------------- resumen --
$exe = Join-Path $Root "dist\CryCat.exe"
$setup = Join-Path $Root "packaging\Output\crycat-setup.exe"
$dur = [int]((Get-Date) - $inicio).TotalSeconds
Write-Host ""
Write-Host ("═" * 62) -ForegroundColor Magenta
Write-Host "  🎉 TODO LISTO en $dur s" -ForegroundColor Green
Write-Host ""
if (Test-Path $exe) {
  Write-Host "  Un solo archivo:  dist\CryCat.exe" -ForegroundColor White
  Write-Host "  → doble clic y listo: abre la terminal y el navegador." -ForegroundColor Gray
  Write-Host "  → los originales nunca se modifican; todo es local." -ForegroundColor Gray
}
if (Test-Path $setup) {
  Write-Host "  Instalador:       packaging\Output\crycat-setup.exe" -ForegroundColor White
  Write-Host "  → accesos directos en inicio/escritorio y desinstalador." -ForegroundColor Gray
}
Write-Host ("═" * 62) -ForegroundColor Magenta
Write-Host ""

$abrir = Read-Host "¿Abrir la carpeta con el resultado? (s/n)"
if ($abrir -eq "s" -or $abrir -eq "S") {
  if (Test-Path $exe) { Start-Process explorer.exe "/select,`"$exe`"" }
  else { Start-Process explorer.exe "$Root\dist" }
}
