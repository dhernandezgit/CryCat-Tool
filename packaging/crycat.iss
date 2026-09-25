; =====================================================================
;  Instalador OPCIONAL de CryCat para Windows (Inno Setup 6)
;  Instala el archivo único CryCat.exe y crea accesos directos.
;
;  Uso:  ISCC.exe packaging\crycat.iss
;  (el script build_windows.ps1 ya lo llama automáticamente si está)
; =====================================================================

#define NombreAplicacion "CryCat"
#define Version "1.0.0"
#define Autor "doctor Daniel Hernández Ferrándiz"
#define ExeOrigen "..\dist\CryCat.exe"
#define IconoOrigen "crycat.ico"

[Setup]
AppId={{8C6F4A2E-5D3B-4E9A-9C1B-0A1B2C3D4E5F}
AppName={#NombreAplicacion}
AppVersion={#Version}
AppVerName={#NombreAplicacion} {#Version}
AppPublisher={#Autor}
AppComments=Creada por el {#Autor}. Todo local, sin conexión a Internet.
DefaultDirName={autopf}\CryCat
DefaultGroupName=CryCat
DisableProgramGroupPage=yes
OutputBaseFilename=crycat-setup
OutputDir=Output
Compression=lzma2/max
SolidCompression=yes
WizardStyle=modern
PrivilegesRequired=lowest
UninstallDisplayIcon={app}\CryCat.exe
SetupIconFile={#IconoOrigen}

[Languages]
Name: "es"; MessagesFile: "compiler:Languages\Spanish.isl"

[Files]
Source: "{#ExeOrigen}"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#IconoOrigen}"; DestDir: "{app}"; Flags: ignoreversion

[Icons]
Name: "{group}\CryCat"; Filename: "{app}\CryCat.exe"; IconFilename: "{app}\CryCat.exe"
Name: "{group}\Desinstalar CryCat"; Filename: "{uninstallexe}"
Name: "{userdesktop}\CryCat"; Filename: "{app}\CryCat.exe"; IconFilename: "{app}\CryCat.exe"; Tasks: desktopicon

[Tasks]
Name: "desktopicon"; Description: "Crear acceso directo en el escritorio"; GroupDescription: "Accesos directos:"; Flags: checkedonce

[Run]
Filename: "{app}\CryCat.exe"; Description: "Abrir CryCat ahora"; Flags: nowait postinstall skipifsilent

[UninstallDelete]
Type: filesandordirs; Name: "{userappdata}\CryCat"
