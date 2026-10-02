# -*- mode: python ; coding: utf-8 -*-
"""Spec de PyInstaller para Windows: UN SOLO ARCHIVO (CryCat.exe).

Incluye Python, el backend, el frontend ya compilado, los iconos, los sonidos
y las imágenes de Pikmin. Al ejecutarlo se abre el navegador con la app.

Uso (desde backend/, en Windows):
    .venv\\Scripts\\pyinstaller.exe crycat-onefile.spec --noconfirm
Resultado:
    dist\\CryCat.exe
"""

import sys
from pathlib import Path

ROOT = Path(SPECPATH)                  # backend/
PROYECTO = ROOT.parent                 # crycat/
WEB = ROOT / "crycat" / "web"          # frontend compilado + recursos

# --- propiedades del ejecutable en Windows (autoría + versión) ----------
# PyInstaller usa este archivo para la pestaña "Detalles" del EXE: aparece
# "hecha por Daniel Hernández Ferrándiz y Wivi.eve" y la versión real.
EXE_EXTRA: dict = {}
if sys.platform == "win32":
    import re as _re
    _src = (ROOT / "crycat" / "__init__.py").read_text("utf-8")
    _ver = _re.search(r'__version__\s*=\s*"([^"]+)"', _src).group(1)
    _v = [int(x) if x.isdigit() else 0
          for x in (_ver.split(".") + ["0", "0", "0", "0"])[:4]]
    _vf = ROOT / "dist" / "version_info.txt"
    _vf.parent.mkdir(parents=True, exist_ok=True)
    _vf.write_text(f"""VSVersionInfo(
  ffi=FixedFileInfo(
    filevers={tuple(_v)}, prodvers={tuple(_v)},
    mask=0x3f, flags=0x0, OS=0x40004, fileType=0x1, subtype=0x0, date=(0, 0)),
  kids=[StringFileInfo([StringTable('040904B0', [
      StringStruct('CompanyName', 'Daniel Hernández Ferrándiz y Wivi.eve'),
      StringStruct('FileDescription',
                   'CryCat — hecha por Daniel Hernández Ferrándiz y Wivi.eve'),
      StringStruct('FileVersion', '{_ver}'),
      StringStruct('InternalName', 'CryCat'),
      StringStruct('LegalCopyright',
                   '© Daniel Hernández Ferrándiz y Wivi.eve'),
      StringStruct('OriginalFilename', 'CryCat.exe'),
      StringStruct('ProductName', 'CryCat'),
      StringStruct('ProductVersion', '{_ver}')])]),
  VarFileInfo([VarStruct('Translation', [1033, 1200])])]
)
""", "utf-8")
    EXE_EXTRA["version"] = str(_vf)

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
    **EXE_EXTRA,            # en Windows: autoría y versión en "Detalles"
)
