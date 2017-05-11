# -*- coding: utf-8 -*-
"""
Section-related custom element classes.
"""
from __future__ import absolute_import, print_function
from copy import deepcopy

from docx.enum.section import WD_ORIENTATION, WD_SECTION_START

from docx import Section

class MySection(Section):
    @property
    def footer(self):
