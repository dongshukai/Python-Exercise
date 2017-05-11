# -*- coding: utf-8 -*-
import time


def dur(op=None, clock=[time.time()]):
    if op != None:
        duration = time.time() - clock[0]
        print '%s finished. Duration %.6f seconds.' % (op, duration)
    clock[0] = time.time()

loop_times = 10000
dur()
opt1 = []
opt2 = []
for i in xrange(loop_times):
    opt1.append(i)
    opt2.append(i)
dur('APPEND LOOP: ')
opt3 = map(lambda x: x, xrange(loop_times))
opt4 = map(lambda x: x, xrange(loop_times))
dur("MAP LOOP: ")
