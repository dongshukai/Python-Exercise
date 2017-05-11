# -*- coding: utf-8 -*-

def calculate_go(total_income, reasonable_expenses):
    tax1 = total_income * 0.04
    tax2 = total_income * 0.03 * 0.5
    tax3 = total_income * 0.03
    tax4 = total_income * 0.05
    if total_income < 4000:
        # return (total_income - reasonable_expenses - tax1 - tax2 - tax3 - tax4) * 0.1
        return (total_income - reasonable_expenses) * 0.1
    else:
        # return (total_income - reasonable_expenses - tax1 - tax2 - tax3 - tax4) * (1 - 0.2) * 0.1
        return (total_income - reasonable_expenses) * (1 - 0.2) * 0.1


def less_than(after_tax_income, reasonable_expenses):
    # return (after_tax_income - reasonable_expenses * 0.1) / (1 - 0.1 + 0.004 + 0.0015 + 0.003 + 0.005)
    return (after_tax_income - reasonable_expenses * 0.1) / (1 - 0.1)


def bigger_than(after_tax_income, reasonable_expenses):
    # return (after_tax_income - reasonable_expenses * (1 - 0.2) * 0.1) / (1 - (1 - 0.2) * 0.1 * (1 - 0.04 - 0.015 - 0.03 - 0.05))
    return (after_tax_income - reasonable_expenses * (1 - 0.2) * 0.1) / (1 - (1 - 0.2) * 0.1)

tax1 = calculate_go(3500, 500)
less1 = less_than(3500-tax1, 500)
bigger1 = bigger_than(3500-tax1, 500)
print "3500: Tax: %s, LESS: %s, BIG: %s" % (tax1, less1, bigger1)


tax1 = calculate_go(3900, 500)
less1 = less_than(3900-tax1, 500)
bigger1 = bigger_than(3900-tax1, 500)
print "3900: Tax: %s, LESS: %s, BIG: %s" % (tax1, less1, bigger1)


tax1 = calculate_go(3999, 500)
less1 = less_than(3999-tax1, 500)
bigger1 = bigger_than(3999-tax1, 500)
print "3999: Tax: %s, LESS: %s, BIG: %s" % (tax1, less1, bigger1)


tax1 = calculate_go(4000, 500)
less1 = less_than(4000-tax1, 500)
bigger1 = bigger_than(4000-tax1, 500)
print "4000: Tax: %s, LESS: %s, BIG: %s" % (tax1, less1, bigger1)

tax1 = calculate_go(4001, 500)
less1 = less_than(4001-tax1, 500)
bigger1 = bigger_than(4001-tax1, 500)
print "4001: Tax: %s, LESS: %s, BIG: %s" % (tax1, less1, bigger1)

tax1 = calculate_go(4500, 500)
less1 = less_than(4500-tax1, 500)
bigger1 = bigger_than(4500-tax1, 500)
print "4500: Tax: %s, LESS: %s, BIG: %s" % (tax1, less1, bigger1)
