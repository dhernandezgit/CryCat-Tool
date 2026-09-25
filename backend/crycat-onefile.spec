# -*- mode: python ; coding: utf-8 -*-
"""Spec de PyInstaller para Windows: UN SOLO ARCHIVO (CryCat.exe).

Incluye Python, el backend, el frontend ya compilado, los iconos, los sonidos
y las imágenes de Pikmin. Al ejecutarlo se abre el navegador con la app.

Uso (desde backend/, en Windows):
    .venv\\Scripts\\pyinstaller.exe crycat-onefile.spec --noconfirm
Resultado:
    dist\\CryCat.exe
"""

from pathlib import Path

ROOT = Path(SPECPATH)                  # backend/
PROYECTO = ROOT.parent                 # crycat/
WEB = ROOT / "crycat" / "web"          # frontend compilado + recursos

a = Analysis(
    [str(ROOT / "run.py")],
    pathex=[str(ROOT)],
    binaries=[],
    datas=[(str(WEB), "crycat/web")],
    hiddenimports=["uvicorn.logging", "uvicorn.loops.auto",
                   "uvicorn.loops.asyncio",
                   "uvicorn.protocols.http.auto",
                   "uvicorn.protocols.http.h11_impl",
                   "uvicorn.protocols.websockets.auto",
                   "uvicorn.lifespan.on", "uvicorn.lifespan.asyncio",
                   "psd_tools", "pypdfium2", "scipy.ndimage"],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=["tkinter", "matplotlib", "PyQt5", "PyQt6", "PySide2", "PySide6"],
    noarchive=False,
)

pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.zipfiles,
    a.datas,
    [],
    name="CryCat",
    debug=False,
    strip=False,
    upx=False,
    console=True,           # abre una terminal con la salida del servidor
    icon=str(PROYECTO / "packaging" / "crycat.ico"),
)
