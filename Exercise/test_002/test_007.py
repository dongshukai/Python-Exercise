# -*- coding: utf-8 -*-


def F_GetBackPayDays(*args):
    # print '*args: %s' % args
    if len(args) == 1:
        day_type = 1
        Type = 1
    elif len(args) == 2:
        day_type = args[1]
        Type = 1
    elif len(args) == 3:
        day_type = args[1]
        Type = args[2]
    args = tuple(args)

    print 'day_type: %s' % day_type
    print 'Type: %s' % Type
    print 'args: %s' % args

F_GetBackPayDays('contract_bs', 1, 2)

