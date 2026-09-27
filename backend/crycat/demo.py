"""Muestra inicial: figuras geométricas aleatorias que llenan una hoja.

Al abrir CryCat sin imágenes se genera una composición de figuras (círculos,
cuadrados, triángulos, estrellas, anillos, corazones y combinaciones) en
colores pastel. Sirve para ver cómo funciona el optimizador desde el primer
segundo y desaparece sola en cuanto se añade una imagen de verdad.
"""

from __future__ import annotations

import math
import random

from PIL import Image, ImageDraw

# (nombre, color) — pasteles con contraste suficiente para verse al cortar
COLORES: list[tuple[str, tuple[int, int, int]]] = [
    ("rosa", (244, 154, 186)),
    ("lila", (196, 158, 230)),
    ("azul", (136, 178, 230)),
    ("menta", (144, 216, 186)),
    ("limón", (238, 216, 122)),
    ("melocotón", (250, 184, 144)),
    ("lavanda", (178, 168, 234)),
    ("coral", (240, 138, 138)),
    ("aqua", (134, 212, 224)),
    ("mostaza", (228, 196, 106)),
]

FORMA_MIN_MM = 16.0
FORMA_MAX_MM = 52.0
DPI = 300.0


def _px(mm: float) -> int:
    return max(8, int(round(mm / 25.4 * DPI)))


def _estrella(d: ImageDraw.ImageDraw, cx: float, cy: float, r: float,
              puntas: int, color) -> None:
    pts = []
    for i in range(puntas * 2):
        radio = r if i % 2 == 0 else r * 0.45
        a = math.pi * i / puntas - math.pi / 2
        pts.append((cx + radio * math.cos(a), cy + radio * math.sin(a)))
    d.polygon(pts, fill=color)


def _corazon(d: ImageDraw.ImageDraw, cx: float, cy: float, r: float,
             color) -> None:
    puntos = []
    for i in range(72):
        t = 2 * math.pi * i / 72
        x = 16 * math.sin(t) ** 3
        y = -(13 * math.cos(t) - 5 * math.cos(2 * t)
              - 2 * math.cos(3 * t) - math.cos(4 * t))
        puntos.append((cx + x * r / 16, cy + y * r / 16))
    d.polygon(puntos, fill=color)


def _figura(forma: str, lado: int, color) -> Image.Image:
    """Dibuja una figura centrada en un lienzo cuadrado transparente."""
    im = Image.new("RGBA", (lado, lado), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    m = lado / 2
    r = lado * 0.46
    if forma == "circulo":
        d.ellipse((m - r, m - r, m + r, m + r), fill=color)
    elif forma == "cuadrado":
        d.rectangle((m - r * 0.9, m - r * 0.9, m + r * 0.9, m + r * 0.9),
                    fill=color)
    elif forma == "triangulo":
        d.polygon([(m, m - r), (m - r * 0.95, m + r * 0.8),
                   (m + r * 0.95, m + r * 0.8)], fill=color)
    elif forma == "hexagono":
        pts = [(m + r * math.cos(math.pi * i / 3 - math.pi / 2),
                m + r * math.sin(math.pi * i / 3 - math.pi / 2))
               for i in range(6)]
        d.polygon(pts, fill=color)
    elif forma == "estrella":
        _estrella(d, m, m, r, 5, color)
    elif forma == "anillo":
        d.ellipse((m - r, m - r, m + r, m + r), fill=color)
        d.ellipse((m - r * 0.52, m - r * 0.52, m + r * 0.52, m + r * 0.52),
                  fill=(0, 0, 0, 0))
    elif forma == "corazon":
        _corazon(d, m, m, r, color)
    elif forma == "anillo_punto":          # combinación: anillo + punto dentro
        d.ellipse((m - r, m - r, m + r, m + r), fill=color)
        d.ellipse((m - r * 0.55, m - r * 0.55, m + r * 0.55, m + r * 0.55),
                  fill=(0, 0, 0, 0))
        d.ellipse((m - r * 0.22, m - r * 0.22, m + r * 0.22, m + r * 0.22),
                  fill=color)
    elif forma == "casa":                  # combinación: cuadrado + triángulo
        d.rectangle((m - r * 0.85, m - r * 0.1, m + r * 0.85, m + r * 0.85),
                    fill=color)
        d.polygon([(m, m - r), (m - r * 0.98, m - r * 0.05),
                   (m + r * 0.98, m - r * 0.05)], fill=color)
    elif forma == "flor":                  # combinación: 6 círculos + centro
        for i in range(6):
            a = math.pi * i / 3
            px, py = m + r * 0.55 * math.cos(a), m + r * 0.55 * math.sin(a)
            rr = r * 0.45
            d.ellipse((px - rr, py - rr, px + rr, py + rr), fill=color)
        d.ellipse((m - r * 0.3, m - r * 0.3, m + r * 0.3, m + r * 0.3),
                  fill=color)
    else:
        d.ellipse((m - r, m - r, m + r, m + r), fill=color)
    return im


FORMAS = ["circulo", "cuadrado", "triangulo", "hexagono", "estrella",
          "anillo", "corazon", "anillo_punto", "casa", "flor"]


def figuras(n: int = 16, semilla: int | None = None
            ) -> list[tuple[str, Image.Image]]:
    """`n` figuras aleatorias: (nombre, imagen RGBA a 300 ppp)."""
    rnd = random.Random(semilla)
    salida: list[tuple[str, Image.Image]] = []
    for _ in range(n):
        forma = rnd.choice(FORMAS)
        nombre_color, color = rnd.choice(COLORES)
        mm = rnd.uniform(FORMA_MIN_MM, FORMA_MAX_MM)
        img = _figura(forma, _px(mm), color)
        salida.append((f"{forma} {nombre_color}", img))
    return salida
