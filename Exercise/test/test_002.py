# -*- coding: utf-8 -*-

import sys
# sys.setrecursionlimit(3002)

def recursion_part(num, max_num, sum):
	if num == max_num:
		return sum
	else:
		if num%1 == 0:
			print num
		sum += num
		return recursion_part(num + 1, max_num, sum)

try:
	print recursion_part(0, 100, sum=0)
except Exception, e:
	print 'Error: ', e
