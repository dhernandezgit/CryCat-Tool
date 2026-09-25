# =====================================================================
#  Instalador universal de CryCat para Windows
#  Descarga el instalador automático de la última versión y lo ejecuta.
#
#  Uso (PowerShell):
#    irm https://raw.githubusercontent.com/dhernandezgit/CryCat-Tool/main/install.ps1 | iex
# =====================================================================
$ErrorActionPreference = "Stop"
$repo = "dhernandezgit/CryCat-Tool"

Write-Host ""
Write-Host "  🐱  C r y C a t  —  instalador" -ForegroundColor Magenta
Write-Host "  Todo local, sin conexión a Internet (salvo el aviso de versiones)." -ForegroundColor DarkGray
Write-Host ""

Write-Host "  → Buscando la última versión…" -ForegroundColor Magenta
$rel = Invoke-RestMethod -Uri "https://api.github.com/repos/$repo/releases/latest" `
  -Headers @{ "User-Agent" = "CryCat-installer" }
$asset = $rel.assets | Where-Object { $_.name -eq "crycat-setup.exe" } |
  Select-Object -First 1
if (-not $asset) {
  Write-Host "  ✖ No se encontró crycat-setup.exe en la última release." -ForegroundColor Red
  Write-Host "    Comprueba https://github.com/$repo/releases" -ForegroundColor Gray
  exit 1
}

$destino = Join-Path $env:TEMP "crycat-setup.exe"
Write-Host "  → Descargando el instalador ($([math]::Round($asset.size / 1MB)) MB)…" -ForegroundColor Magenta
Invoke-WebRequest -Uri $asset.browser_download_url -OutFile $destino

Write-Host "  → Ejecutando el instalador…" -ForegroundColor Magenta
Start-Process -FilePath $destino -Wait

Write-Host ""
Write-Host "  ✔ Listo. CryCat quedará en el menú de inicio y, si quisiste, en el escritorio." -ForegroundColor Green
Write-Host ""
