@echo off
REM =====================================================================
REM  CryCat · Windows TODO EN UNO  (doble clic y listo)
REM  Genera UN SOLO ARCHIVO:  dist\CryCat.exe
REM  Requisitos la primera vez: Python 3.10+ y Node.js 18+.
REM =====================================================================
title CryCat - construccion del ejecutable
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0build_windows.ps1" %*
echo.
pause
