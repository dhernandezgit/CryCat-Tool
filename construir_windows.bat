@echo off
REM =====================================================================
REM  CryCat · CONSTRUCTOR AUTOMÁTICO (doble clic y listo)
REM
REM  No hace falta instalar nada a mano:
REM    · si falta Python, se instala solo
REM    · el frontend ya viene compilado (no necesita Node)
REM    · genera  dist\CryCat.exe  (+ instalador si hay Inno Setup)
REM =====================================================================
title CryCat - construir TODO automaticamente
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0packaging\constructor_windows.ps1" %*
echo.
pause
