# -*- coding: utf-8 -*-

# import matplotlab.pyplot as plt
import numpy
# import graphics

def abc(a, b, c, **kwargs):
    print a
    print b
    print kwargs['aa']


a = 1
b = 2
c = 3
abc(1,2,3, aa=1, bb=2, cc=3)