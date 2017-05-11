# -*- coding: utf-8 -*-

import time
import array

loop_times = 5000


def dur(op=None, clock=[time.time()]):
    if op != None:
        duration = time.time() - clock[0]
        print '%s finished. Duration %.6f seconds.' % (op, duration)
    clock[0] = time.time()

# Example
if __name__ == '__main__':
    dur()    # Initialise the timing clock
    # opt1 = array.array('H')
    # for i in range(loop_times):
    #     for n in range(loop_times):
    #         opt1.append(n)
    # dur('Array from append')
    # opt11 = array.array('H')
    # map(lambda t: map(lambda x: opt11.append(x), range(loop_times)), range(loop_times))
    # dur('Array From Map append')
    # opt12 = array.array('H')
    # [[opt12.append(x) for x in range(loop_times)] for t in range(loop_times)]
    # dur('Array From [] append')
    # opt2 = array.array('H')
    # seq = range(loop_times)
    # for i in range(loop_times):
    #     opt2.extend(seq)
    # dur('Array from list extend')
    # opt3 = array.array('H')
    # seq = array.array('H', range(loop_times))
    # for i in range(loop_times):
    #     opt3.extend(seq)
    # dur('Array from array extend')
    # opt1 = set([])
    # for i in range(loop_times):
    #     opt1.add(i)
    # opt1 = list(opt1)
    # dur('Add Set')
    # opt2 = []
    # for i in range(loop_times):
    #     opt2.append(i)
    # opt2 = list(set(opt2))
    # dur('List Set')
    # opt6 = []
    # for n in range(loop_times):
    #     if n % 2:
    #         opt6.append(n)
    # dur('[].append: ')
    # # opt7 = []
    # opt7 = filter(lambda x: x % 2, range(loop_times))
    # dur('map.append: ')
