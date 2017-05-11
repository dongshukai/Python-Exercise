# -*- coding: utf-8 -*-

a = {}

def aa(res, val, keys, pos=0):
    len_keys = len(keys)
    while pos < len_keys:
        if '' not in res:
            res[''] = []
        res[''].append(val)
        pos += 1
        if keys[pos] not in res:
            res[keys[pos]] = {}
        aa(res[keys[pos]], val, keys, pos)
    return res

data = {
    1: ['a', 'b', 'c', ''],
    2: ['a', 'b', 'c', 'd'],
    3: ['a', 'b', '', 'd1'],
    4: ['a', 'b', 'c1', '']
}

for res_id, keys in data.items():
    print aa(a, res_id, keys)