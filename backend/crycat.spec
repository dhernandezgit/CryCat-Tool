# -*- mode: python ; coding: utf-8 -*-
"""Spec de PyInstaller para el ejecutable de CryCat (onedir: arranque rápido).

Uso (desde backend/):  .venv/bin/pyinstaller crycat.spec --noconfirm
Salida: dist/crycat/  (carpeta con el ejecutable + web/)
"""

from pathlib import Path

ROOT = Path(SPECPATH)                  # backend/
PROYECTO = ROOT.parent                 # crycat/
WEB = ROOT / "crycat" / "web"          # frontend compilado

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
    [],
    exclude_binaries=True,
    name="crycat",
    debug=False,
    strip=False,
    upx=False,
    console=False,
    icon=str(PROYECTO / "packaging" / "crycat.ico"),
)

coll = COLLECT(
    exe,
    a.binaries,
    a.zipfiles,
    a.datas,
    strip=False,
    upx=False,
    name="crycat",
)
