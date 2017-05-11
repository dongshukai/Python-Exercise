# -*- coding: utf-8 -*-


def a(num, result=[]):
    id = num
    for k in [1, 2]:
        result.append((k, id))
        while id:
            id -= 1
            a(id)
    return result

print a(2)
