# -*- coding: utf-8 -*-
# ******************************************************
__author__ = 'dongsk'
__create_date__ = '16/12/29'
__filename__ = 'excel_color.py'
# ******************************************************
from openpyxl import Workbook
from openpyxl.styles import Font, colors, GradientFill, Alignment, Border, Side, PatternFill


def int_to_excel_letter(column):
    """
    将数字转换为对应的Excel的列号: 1-A; 6-F； 27-AA; ...
    """
    result = ''
    alpha = column
    remainder = -1
    while alpha > 27:
        remainder = alpha % 26
        if remainder == 0:
            result = 'Z' + result
        else:
            result = chr(remainder + 64) + result
        alpha = alpha // 26
        if remainder == 0:
            alpha -= 1
    else:
        if column > 26:
            if alpha == 27:
                result = 'AA' + result
            else:
                result = chr(alpha + 64) + result
        else:
            result = chr(alpha + 64) + result
    return result

wb = Workbook()
ws = wb.active

