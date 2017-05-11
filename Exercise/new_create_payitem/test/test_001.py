# -*- coding: utf-8 -*-

import xml.dom.minidom as OPEN_XML
from xml.etree import ElementTree as ET



dom = OPEN_XML.parse('hr_payroll_meta_data.xml')
# 得到文档元素对象
root = dom.documentElement
per = ET.parse('file_name')
p = per.findall('./record/field')

