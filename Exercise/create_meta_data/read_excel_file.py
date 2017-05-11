# -*- coding: utf-8 -*-

import os
import xlrd


def read_excel_file(file_name):
    data = {}
    if not file_name.endswith('.xlsx') or file_name.endswith('.xls'):
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
