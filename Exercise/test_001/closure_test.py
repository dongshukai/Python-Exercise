# -*- coding: utf-8 -*-

def make_adder(addend):
    def adder(augend):
        return augend + addend
    return adder

p = make_adder(23)
q = make_adder(44)

print 'p(100)=%s' % p(100)

print 'q(100)=%s' % q(100)

print 'p(200)=%s' % p(200)
