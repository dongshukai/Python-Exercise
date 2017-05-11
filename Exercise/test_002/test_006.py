# -*- coding: utf-8 -*-

import time

loop = 5000000

def dur(op=None, clock=[time.time()]):
    if op != None:
        duration = time.time() - clock[0]
        print '%s finished. Duration %.6f seconds.' % (op, duration)
    clock[0] = time.time()

dur()
for i in range(loop):
    pass
dur('Range')

for i in xrange(loop):
    pass
dur('Xrange')

a, b, c = [], [], {}
map(lambda x: (a.append(x+1), b.append(x+1) if x%2 else '', c.update({x: x+1})), xrange(loop))
dur('Map')

a, b, c = [], [], {}
for x in xrange(loop):
    a.append(x+1)
    c[x] = x+1
    if x%2:
        b.append(x+1)
dur('For')