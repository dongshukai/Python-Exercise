# -*- coding:utf-8 -*-

import time


# 辗转相除法：
def commonDivisor1(num1, num2):
    if num1 < num2:
        temp = num1
        num1 = num2
        num2 = temp
         
    if num1 % num2 == 0:
        return num2
    else:
        num2 = num1 % num2
        return commonDivisor1(num1, num2)

# 更相减损法
def commonDivisor2(num1, num2):    
    if num1 == num2:
        return num1
    elif num1 < num2:
        temp = num1
        num1 = num2
        num2 = temp
    if num1 - num2 == num2:
        return num2
    else:
        temp = num1 
        num1 = num2
        num2 = temp - num2
        # print (num1, ' ', num2)
        return commonDivisor2(num1, num2)

# 分解质因数，之后求解
def commonDivisor3(num1, num2):
    if num1 == num2:
        return num1
    elif num1 < num2:
        temp = num1
        num1 = num2
        num2 = temp  
    # 求小于较小数字的所有素数   
    primeNum = getPrimeNumber1(num2)
    # print (primeNum)
    # 对较小的数字分解质因数，并将质因数保存在l2中
    l2 = []
    result = 1 
    while num2 != 1:
        for i in primeNum:
            if num2 % i != 0:
                continue
            else:
                l2.append(i)
                num2 = num2 / i 
    # print ('l2: ',l2)
    # 使用较大数字去除较小数字的质因数，看大数字中包含了哪些较小数字的质因数。
    # 将大数字也包含的相同的质因数相乘返回结果，即最大公约数
    for i in l2:
        if num1 % i == 0:
            result = result*i
            num1 = num1/i
    return result

# 分解质因数，之后求解
def commonDivisor4(num1, num2):
    if num1 == num2:
        return num1
    elif num1 < num2:
        temp = num1
        num1 = num2
        num2 = temp  
    # 求小于较小数字的所有素数   
    primeNum = getPrimeNumber2(num2)
    # print (primeNum)
    # 对较小的数字分解质因数，并将质因数保存在l2中
    l2 = []
    result = 1 
    while num2 != 1:
        for i in primeNum:
            if num2 % i != 0:
                continue
            else:
                l2.append(i)
                num2 = num2 / i 
    # print ('l2: ',l2)
    # 使用较大数字去除较小数字的质因数，看大数字中包含了哪些较小数字的质因数。
    # 将大数字也包含的相同的质因数相乘返回结果，即最大公约数
    for i in l2:
        if num1 % i == 0:
            result = result*i
            num1 = num1/i
    return result

# 列出小于num的所有奇数，首先去除可以被2整除的，再去除可以被3整除的，再去除可以被5整除的，以此类推...           
def getPrimeNumber1(num):
    l = [2]
    for i in range(3, num + 1, 2):
        l.append(i)
    j = min(l)
    while not j == l[-1]:
        for k in l:
            if (k % j == 0) and k != j:
                # print ('remove: ',k)
                l.remove(k)
        # print (l,' ',j)
        j = l[l.index(j)+1]
    return l

# 用生成器和filter求num以内的所有质数
def getPrimeNumber2(num):
    l = []
    for n in primes():
        if n < num:
            l.append(n)
        else:
            break
    return l

# 创建打印奇数的生成器
def _odd_iter():
    n = 1
    while True:
        n = n + 2
        yield n

# 创建过滤条件，即过滤掉可以被列表中下一个数字整除的数字，留下不可以被这个数整除的，即留下质数
def _not_divisible(n):
    return lambda x: x % n > 0

# 不断迭代生成列表，根据规则过滤掉列表中元素，留下质数
def primes():
    yield 2
    it = _odd_iter() # 初始序列
    while True:
        n = next(it) # 返回序列的第一个数
        yield n
        it = filter(_not_divisible(n), it) # 构造新序列
  
time1 = time.clock()
print (commonDivisor1(12355,525))
time2 = time.clock()
print (commonDivisor2(12355,525))
time3 = time.clock()
print (commonDivisor3(12355,525))
time4 = time.clock()
print (commonDivisor4(12355,525))
time5 = time.clock()

print ('辗转相除法用时： ', (time2-time1)*1000,'秒')
print ('更相减损法用时： ', (time3-time2)*1000,'秒')
print ('分解质因数法用时（用列表求质数）： ', (time4-time3)*1000,'秒')
print ('分解质因数法用时（用生成器求质数）： ', (time5-time4)*1000,'秒')