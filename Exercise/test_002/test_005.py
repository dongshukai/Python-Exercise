# -*- coding: utf-8 -*-
# ******************************************************
__author__ = 'dongsk'
__create_date__ = '16/12/21'
__filename__ = 'test_005.py'
# ******************************************************

for i in xrange(10):
    if i % 3 == 1:
        print "{} % 3: {}".format(i, i % 3)
        continue
    elif i % 3 == 2:
        print i
        continue
    print "OUT: %s" % i


