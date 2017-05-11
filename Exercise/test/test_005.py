# -*- coding: utf-8 -*-


def MP(msg, t=None):
    result = "\033[1;32;47m %s \033[0m" % (datetime.now().strftime('%Y-%m-%d %H:%M:%S')) + "\033[1;30;47m %s \033[0m" % (msg)
    if t:
        result += '用时' + "\033[1;34;47m %s \033[0m" % (t)
    print result

def time_counter(op=None, clock=[datetime.now()]):
    if op != None:
        duration = datetime.now() - clock[-1]
        MP(op, duration)
    clock.append(datetime.now())
