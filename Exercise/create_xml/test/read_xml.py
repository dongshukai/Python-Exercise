# -*- coding: utf-8 -*-

import xml.dom.minidom as OPEN_XML

# 打开XML文档
dom = OPEN_XML.parse('abc.xml')

# 得到文档元素对象
root = dom.documentElement

print root.nodeName
print root.nodeValue
print root.nodeType
print root.ELEMENT_NODE

bb = root.getElementsByTagName('maxid')
b = bb[0]
print b.nodeName
print b.nodeValue
print b.firstChild.data

bb = root.getElementsByTagName('login')
b = bb[0]
print b

print '===='*25, '分隔线', '===='*25

from xml.etree import ElementTree as ET
per=ET.parse('abc.xml')
p=per.findall('./login/item')

for oneper in p:
    for child in oneper.getchildren():
        print child.tag,':',child.text


p=per.findall('./item')

for oneper in p:
    for child in oneper.getchildren():
        print child.tag,':',child.text

