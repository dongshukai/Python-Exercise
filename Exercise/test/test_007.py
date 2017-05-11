# -*- coding: utf-8 -*-


def aaa(s):
    try:
        result = ''
        int(s)
        result = "%s%s" % (result, s)
        return 'Normal'
    except Exception, e:
        # print e
        result = "%s%s" % (result, 'HH')
        raise ValueError(_('abd'))
    finally:
        result = "%s%s" % (result, 'AA')
        return result

a = aaa('abc')

print a

