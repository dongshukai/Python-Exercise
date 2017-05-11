# -*- coding: utf-8 -*-

class myclocker:
    def __init__(self):
        print "myclocker.__init__() called."

    @staticmethod
    def acquire():
        print "myclocker.acquire() called."

    @staticmethod
    def unlock():
        print "myclocker.unlock() called."

class lockerex(myclocker):
    @staticmethod
    def acquire():
        print "lockerex.acquire() called."

    @staticmethod
    def unlock():
        print "lockerex.unlock() called."

def lockerhelper(cls):
    def _deco(func):
        def __deco(*args, **kwargs):
            print "before %s called." % func.__name__
            cls.acquire()
            try:
                return func(*args, **kwargs)
            finally:
                cls.unlock()
        return __deco
    return _deco
