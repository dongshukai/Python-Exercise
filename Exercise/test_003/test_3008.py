# -*- coding: utf-8 -*-


L = [3, 2, 5, 4, 6, 9, 1, 10, 56, 43, 23, 45, 66]
len_L = len(L)

# res = []
# for idx in xrange(len(L)):
#     t = L[idx]
#     for v in L[:len_L - idx]:
#         if t < v:
#             t = v
#     res.append(t)

# print "结果：%s" % res
i = 0
while i < len_L:
    for idx in xrange(len(L) - 1):
        if L[idx] > L[idx + 1]:
            L[idx], L[idx + 1] = L[idx+1], L[idx]
    print "L%d: %s" % (i, L)
    i += 1
print "L结果：%s" % L

