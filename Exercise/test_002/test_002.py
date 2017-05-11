# -*- coding: utf-8 -*-

import os, sys

paths = sys.path
path = os.curdir
if paths:
    path = paths[0]

print path + os.sep + os.pardir + os.sep + os.pardir + os.sep + os.pardir + '/Desktop/ellise.png'

print os.environ
