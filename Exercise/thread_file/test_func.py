# -*- coding: utf-8 -*-

from myThread import Mythread
from time import ctime, sleep
import xlrd
import xlwt
import openpyxl

def fib(x):
    sleep(0.005)
    if x < 2: return 1
    return (fib(x-2) + fib(x-1))

def fac(x):
    sleep(0.1)
    if x < 2: return 1
    return (x * fac(x-1))

def sum(x):
    sleep(0.1)
    if x < 2: return 1
    return (x + sum(x-1))

funcs = [fib, fac, sum]
n = 12

def main():
    nfuncs = range(len(funcs))

    print '*** SINGLE THREAD'
    for i in nfuncs:
        print 'Starting %s at: %s \n' % (funcs[i].__name__, ctime())
        print funcs[i](n)
        print '%s finished at: %s \n' % (funcs[i].__name__, ctime())

    print '\n*** MULTIPLE THREADS\n'
    threads = []
    for i in nfuncs:
        t = Mythread(funcs[i], (n, ), funcs[i].__name__)
        threads.append(t)

    for i in nfuncs:
        threads[i].start()

    for i in nfuncs:
        threads[i].join()
        print threads[i].getResult()

    print '\nall DONE\n'

def read_excel_file(file_name):
    data = {}
    if file_name.endswith('.xlsx') or file_name.endswith('.xls'):
        pass
    else:
        raise '不是Excel文件...'

    file_data = xlrd.open_workbook(file_name)

    tables = file_data.sheets()
    for table in tables:
        print "开始处理 ",table.name
        nrows = table.nrows    # 行数
        if nrows <= 1:
            print "文件 < %s > 没有内容" % (table.name)
            continue
        ncols = table.ncols     # 列数
        colnames = table.row_values(0)  # 第一行数据
        leave_none_list = []
        data[table.name] = []
        for rownum in range(1, nrows):
            data_dict = {}
            row = table.row_values(rownum)
            if row:
                for i in range(len(colnames)):
                    ccol = colnames[i]
                    rrow = row[i]
                    data_dict[ccol] = rrow
                data[table.name].append(data_dict)
        print table.name, "处理完成"

    return data

def split_excel_file():
    file_data = read_excel_file('员工-人力资源导入模版.xls')
    excel_data = file_data['sheet1']
    headers = excel_data[0].keys()
    count = 0
    i = 0
    for item in excel_data:
        if i % 100 == 0:
            book, table = None, None
            count += 1
            file_name = 'employee_%s.xls' % (count)
            book = xlwt.Workbook(encoding='utf-8')
            table = book.add_sheet(file_name, cell_overwrite_ok=True)
        for i, t in enumerate(headers):
            table.write(0, i, t)

        for item in excel_data:
            pass


if __name__ == '__main__':
    # main()
    split_excel_file()
