# -*- coding: utf-8 -*-
from docx import Document

f = open('/Users/dongsk/Downloads/HKBankFileSample.docx', 'rb')
document = Document(f)
f.close()

print document