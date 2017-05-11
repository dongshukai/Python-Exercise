# -*- coding: utf-8 -*-

def increase_auto():
    result = [2.8]
    def increase():
        result[0] += 0.2
        return result[0]
    return increase

def current_month_sum(x):
    result = 0.0
    # cp: current_profit
    cp = increase_auto()
    while x > 0:
        x -= 1
        result += cp()
    return result

# 13 <= current_month_sum(x)
x = 0
while 13 > current_month_sum(x):
    print "Current Month: %d, Total: %f" % (x, current_month_sum(x))
    x += 1

print "There Need %d Months, Total: %f" % (x, current_month_sum(x))



