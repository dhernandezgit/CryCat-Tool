"""Tests de la geometría del área recortable de Cricut."""

from crycat import geometry as g


def test_maximos_oficiales_a4():
    """A4 (calibrado con la referencia del usuario): 186.0 x 272.3 mm."""
    area = g.cut_area(210.0, 297.0, "maker5", "A4")   # vertical
    assert abs(area.bbox_w - 186.0) < 0.01
    assert abs(area.bbox_h - 272.3) < 0.01
    # bbox centrado en la página
    x0, y0, bw, bh = area.bbox
    assert abs(bw - 186.0) < 0.01 and abs(bh - 272.3) < 0.01
    # los márgenes son ~12 mm por lado
    assert abs(x0 - 12.0) < 0.3 and abs(y0 - 12.35) < 0.3


def test_no_es_una_caja():
    """El polígono NO puede ser un rectángulo: un rect que use el alto máximo
    no puede usar el ancho máximo a la vez (documentado por Cricut)."""
    area = g.cut_area(297.0, 210.0, "estandar", "A4")
    x0, y0, bw, bh = area.bbox
    # rectángulo completo del bbox: debe CHOCAR con las muescas
    assert not g.rect_inside_polygon(area.poly, area.notches, x0, y0, bw, bh)
    # una columna central estrecha sí puede usar todo el alto
    col_w = bw * 0.5
    col_h = bh
    assert g.rect_inside_polygon(area.poly, area.notches,
                                 x0 + (bw - col_w) / 2, y0, col_w, col_h)
    # una fila central estrecha sí puede usar todo el ancho
    row_h = bh * 0.5
    assert g.rect_inside_polygon(area.poly, area.notches,
                                 x0, y0 + (bh - row_h) / 2, bw, row_h)


def test_poligono_escalonado_5_bandas():
    """Doble escalón por esquina: 20 vértices y 8 muescas de esquina."""
    area = g.cut_area(297.0, 210.0)
    assert len(area.poly) == 20
    assert len(area.notches) == 8
    # cada muesca toca un lado del bbox (esquinas escalonadas)
    x0, y0, bw, bh = area.bbox
    for nx, ny, nw, nh in area.notches:
        en_borde = ((nx <= x0 + 1) or (nx + nw >= x0 + bw - 1) or
                    (ny <= y0 + 1) or (ny + nh >= y0 + bh - 1))
        assert en_borde


def test_bandas_coinciden_con_referencia_a5():
    """La referencia A5 del usuario da bandas 0.65/0.92 y escalones 0.03/0.12."""
    area = g.cut_area(148.0, 210.0, "maker5", "A5")
    x0, y0, bw, bh = area.bbox
    # A5 medido: 131.0 x 192.5 mm
    assert abs(bw - 131.0) < 0.6
    assert abs(bh - 192.5) < 0.6
    # banda central (arriba): ancho ~0.65W; banda intermedia ~0.92W
    assert g.polygon_contains(area.poly, x0 + bw * 0.5, y0 + bh * 0.01)
    assert not g.polygon_contains(area.poly, x0 + bw * 0.10, y0 + bh * 0.01)
    assert g.polygon_contains(area.poly, x0 + bw * 0.10, y0 + bh * 0.07)
    # y a media altura ocupa todo el ancho
    assert g.polygon_contains(area.poly, x0 + 0.5, y0 + bh * 0.5)


def test_a5_valores_oficiales_referencia():
    a = g.cut_area(210.0, 148.0, "maker5", "A5")  # apaisado
    assert abs(min(a.bbox[2], a.bbox[3]) - 131.0) < 0.6
    assert abs(max(a.bbox[2], a.bbox[3]) - 192.5) < 0.6


def test_los_maximos_no_coinciden_con_screenshot():
    """La captura del usuario (A4 vertical) mostraba el área con proporción
    ancho/alto ~ 183/269.8 = 0.678; validamos el rango."""
    area = g.cut_area(210.0, 297.0, "estandar", "A4")
    ratio = area.bbox_w / area.bbox_h
    assert 0.60 < ratio < 0.75


def test_punto_dentro_fuera():
    area = g.cut_area(297.0, 210.0)
    x0, y0, bw, bh = area.bbox
    # centro: dentro
    assert g.polygon_contains(area.poly, x0 + bw / 2, y0 + bh / 2)
    # esquina del bbox: FUERA (muesca para las marcas de registro)
    assert not g.polygon_contains(area.poly, x0 + 1, y0 + 1)
    # centro del borde superior: dentro (la columna central llega arriba)
    assert g.polygon_contains(area.poly, x0 + bw / 2, y0 + 1)


def test_letter_y_a3():
    a = g.cut_area(215.9, 279.4, "estandar", "Letter")
    assert abs(a.bbox_w - 189.0) < 0.01
    assert abs(a.bbox_h - 252.5) < 0.01
    b = g.cut_area(420.0, 297.0, "estandar", "A3")  # apaisada
    assert abs(b.bbox_w - 392.0) < 0.01
    assert abs(b.bbox_h - 270.0) < 0.01


def test_maquina_joy():
    """Cricut Joy 2: franja estrecha en A4 (el máximo corto queda bajo 100 mm)."""
    a = g.cut_area(297.0, 210.0, "joy", "A4")
    assert min(a.bbox_w, a.bbox_h) < 100
    assert max(a.bbox_w, a.bbox_h) > 250


def test_conversion_pixeles():
    assert g.mm_to_px(25.4, 300) == 300
    assert g.px_to_mm(300, 300) == 25.4
    w, h = g.page_pixel_size(297, 210, 300)
    assert (w, h) == (3508, 2480)


def test_rotated_size():
    # 90º intercambia dimensiones
    w, h = g.rotated_size(10, 20, 90)
    assert abs(w - 20) < 1e-9 and abs(h - 10) < 1e-9
    # 45º: bbox de un cuadrado 10x10 = 10*sqrt(2)
    assert abs(g.rotated_size(10, 10, 45)[0] - 14.1421) < 1e-3
