# -*- coding: utf-8 -*-

# from openerp.tools.safe_eval import safe_eval

m_str = """
def m_add(a, b):
    c = global_dict['a']
    return a+b+c
"""

# global_dict = {
#     'a': 1
# }

exec(m_str)

# func_name = 'm_add(2, 3)'
res1 = eval('m_add(2, 3)', {'global_dict': {'a': 1}, 'm_add': m_add})
print res1