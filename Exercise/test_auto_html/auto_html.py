# -*- coding: utf-8 -*-

from xml.dom import minidom

doc = minidom.Document()
table = doc.createElement('table')
table.setAttribute('class', 'oe_form_group')
tbody = doc.createElement('tbody')
table.appendChild(tbody)

result = table.toxml()

fp = open('result.xml', 'w')
fp.write(result)
fp.close()