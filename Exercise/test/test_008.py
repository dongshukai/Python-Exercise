# -*- coding: utf-8 -*-

def get_loop_count(i):
    result = []
    while(i > 0):
        print "loop count %s" % i
        result.append(i)
        i -= 1
    print "loop Count result %s" % result
    return result

for c in get_loop_count(10):
    print "c: %s" % c

print "Done"

def strQ2B(ustring):
    """全角转半角"""
    rstring = ""
    for uchar in ustring:
        inside_code=ord(uchar)
        if inside_code == 12288:                                #全角空格直接转换
            inside_code = 32
        elif (inside_code >= 65281 and inside_code <= 65374):   #全角字符（除空格）根据关系转化
            inside_code -= 65248

        rstring += unichr(inside_code)
    return rstring

def strB2Q(ustring):
    """半角转全角"""
    rstring = ""
    for uchar in ustring:
        inside_code=ord(uchar)
        if inside_code == 32:                                 #半角空格直接转化
            inside_code = 12288
        elif inside_code >= 32 and inside_code <= 126:        #半角字符（除空格）根据关系转化
            inside_code += 65248

        rstring += unichr(inside_code)
    return rstring



b = strQ2B("ｍｎ123abc博客园".decode('cp936'))
print b

c = strB2Q("ｍｎ123abc博客园".decode('cp936'))
print c