# -*- coding: utf-8 -*-

import re

ABC = """
def func_auction_income_normal_all(taxable_salary, emp_register_type, tax_city):
    # 参数解释: taxable_salary 计税工资
    # 参数解释: emp_register_type 员工户籍类型
    # 参数解释: tax_city 纳税城市

    return func_tax_auction_income(taxable_salary)"""

BCD = """def F_default_IncidentalIncomeIIT_reverse_function(incidental_after_tax):
      #参数解释: incidental_after_tax ->  偶然所得税后金额
      return incidental_after_tax / (1 - 0.2)"""

# ret = re.search(r'def(\s+)(\w+)(.*?):', ABC, re.M).group()
ret = re.findall(r'\Adef\s+\w+\((.*?)\):', BCD, re.S)
# res = tuple(ret)
print ret

# print res
