# -*- coding: utf-8 -*-

from test_3002 import *

class example:
    @lockerhelper(myclocker)
    def myfunc(self):
        print "myfunc() called."

    @lockerhelper(myclocker)
    @lockerhelper(lockerex)
    def myfunc2(self, a, b):
        print "myfunc2() called."
        return a + b

if __name__ == '__main__':
    a = example()
    a.myfunc()
    print a.myfunc()
    print a.myfunc2(1, 2)
    print a.myfunc2(3, 4)