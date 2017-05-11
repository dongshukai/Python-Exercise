# -*- coding: utf-8 -*-

def up1(num):
    real_num = num
    if num >= 12:
        real_num = 12
    else:
        str_num_list = str(num).split('.')
        integral = str_num_list[0] if str_num_list else ''
        real_num = int(integral)
        decimal = str_num_list[1] if len(str_num_list) > 1 else ''
        if decimal > '0' and real_num < 12:
            real_num += 1

    return real_num


print '3.4 ->', up1(3.4)
print '2 ->', up1(2)
print '11.4 ->', up1(11.4)

print '11 ->', up1(11)
print '11.0000000000000000 ->', up1(11.0000000000000000)
print '11.0000000000000001 ->', up1(11.0000000000000001)
print '12.0000000000000000 ->', up1(12.0000000000000000)
print '12.0000000000000001 ->', up1(12.0000000000000001)
print '11.9999999999999999 ->', up1(11.9999999999999999)
print '1100000000000000000.0000000000000000001 ->', up1(1100000000000000000.0000000000000000001)

