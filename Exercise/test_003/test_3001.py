# -*- coding: utf-8 -*-

def myfunc():
    print "myfunc() called."

# def deco(func):
#     print "before myfunc() called."
#     func()
#     print "after myfunc() called."
#     return func

# def deco(func):
#     def _deco(a, b):
#         print "before myfunc() called."
#         ret = func(a, b)
#         print "after myfunc() called. result: %s" % ret
#         return ret
#     return _deco
def deco(arg):
    def _deco(func):
        def __deco(a, b):
            print "before %s(%s, %s) called [%s]." % (func.__name__, a, b, arg)
            ret = func(a, b)
            print "after %s(%s, %s) called [%s]. result: %s" % (func.__name__, a, b, arg, ret)
            return ret
        return __deco
    return _deco

# myfunc = deco(myfunc)
@deco('mymodule')
def myfunc(a, b):
    print "myfunc(%s, %s) called." % (a, b)
    return a + b

@deco('module2')
def myfunc2(a, b):
    print "myfunc2(%s, %s) called." % (a, b)
    return a * b


myfunc(1, 2)
myfunc2(3, 4)

