# /usr/bin/env python
# -*- coding:utf-8 -*-

import os
import sys
import json
import xlrd
from commont import *
# import subprocess

import commands

reload(sys)
sys.setdefaultencoding('utf-8')

def open_excel(file_name):
    try:
        if file_name.endswith('.xlsx') or file_name.endswith('.xls'):
            data = xlrd.open_workbook(file_name)
            return data
        else:
            print "Please select the Excel file!"
            return False
    except Exception, e:
        print "There has an error during open the excel file, Please check it!"
        return False

def add_payoll_payitem_category_xml(json_data, model_name, model_dict, name, file_name='./payroll_data/hr_payroll_payitem_category.xml'):
    model_x_id_dict = json_data[model_dict]
    num = len(model_x_id_dict[model_name]) + 1
    try:
        fp = open(file_name, 'a')
        xml_content = PAYROLL_CATEGORY_TEMPLATE % ({'name': name, 'num': num})
        fp.write(xml_content)
    except Exception, e:
        print 'Add Payroll Category Error: ',e
    finally:
        fp.close()
        print "Add %d Done!" % num

    if model_name == 'hr.payroll.payitem.category':
        json_data[model_dict][model_name].update({name: "payitem_category_%s" % num})
    return json_data

def add_xml_content_directir(json_data, model_name, key_dict, file_name=False):
    if not file_name and model_name in MODEL_FILENAME_MAP:
        file_name = MODEL_FILENAME_MAP[model_name]
    else:
        file_name = 'add_new_xml_context.xml'
    if model_name in MODEL_TEMPLATE_MAP:
        template = MODEL_TEMPLATE_MAP[model_name]
    else:
        print "Please Add Template content for ", model_name
        raise "Please Add Template content for ", model_name

    code_id = key_dict['code'].replace(' ', '_')

    try:
        fp = open(file_name, 'a')
        key_dict.update({'code_id': code_id})
        xml_content = template % (key_dict)
        fp.write(xml_content)
    except Exception, e:
        print 'Add Payroll Category Error: ',e
    finally:
        fp.close()
        print "Add %s Done!" % key_dict.values()

    # TODO 直接调用脚本语言再执行一次make_xml_to_json.py的脚本
    # subprocess.Popen(['/usr/bin/python', ''])
    if model_name == 'hr.payroll.meta.data':
        json_data['model_code_id_dict'][model_name].update({key_dict['code']: MODEL_TEMPLATE_ID_MAP[model_name]%({'code': code_id})})
        json_data['model_name_id_dict'][model_name].update({key_dict['name']: MODEL_TEMPLATE_ID_MAP[model_name]%({'code': code_id})})
    return json_data

def read_excel_data(file_data, json_data):
    # data = open_excel(file_name)
    table = file_data.sheets()[0]
    nrows = table.nrows     # 行数
    if nrows <= 1:        
        print "not find content in the excel file!"
        return False
    ncols = table.ncols     # 列数
    colnames = table.row_values(0)  # 某一行数据
    # 取第一行数据找到对应的字段翻译进行替换
    col_map_name = map(lambda x: TITLE_FIELD_MAP.get(x, x), colnames)
    data_list = []
    leave_none_list = []
    for rownum in range(1, nrows):
        code, name = '', ''
        row = table.row_values(rownum)
        if row:
            row_dict = {
                'name': '',
                'code': '',
                'english_name': '',
                'source': 'import',
                'value_type': 'float',
                'ref_payitem': '',
                'sequence': 5,
                'category': '',
                'active': True,
                'meta_data': ''
            }
            for i in range(len(col_map_name)):
                row_dict.update({'amount_python_compute': 'result = 0',})
                # 取每个字段的值直接转换为对应的字段值
                ccol = colnames[i]
                rrow = row[i]
                row_val = False
                # 硬转换方式,抓取字段读取内容直接转换
                if ccol in SELECT_FIELD_MAP and rrow in SELECT_FIELD_MAP[ccol]:
                    row_val = SELECT_FIELD_MAP[ccol][rrow]
                    # else:
                    #     leave_none_list.append((ccol, rrow))
                elif ccol in REF_FIELD_MAP:
                    model_name = REF_FIELD_MAP[ccol]
                    if rrow in json_data['model_name_id_dict'][model_name]:
                        row_val = json_data['model_name_id_dict'][model_name][rrow]
                    else:
                        # 创建新的xml类型
                        json_data = add_payoll_payitem_category_xml(json_data, model_name, 'model_name_id_dict', rrow)
                        row_val = json_data['model_name_id_dict'][model_name][rrow]
                else:
                    if col_map_name[i] == 'code':
                        code = rrow
                    if col_map_name[i] == 'name':
                        name = rrow
                    row_val = rrow
                row_dict[col_map_name[i]] = row_val

            # 处理元数据的对应关系
            if code in json_data['model_code_id_dict']['hr.payroll.meta.data']:
                row_dict['meta_data'] = json_data['model_code_id_dict']['hr.payroll.meta.data'][code]
            elif name in json_data['model_name_id_dict']['hr.payroll.meta.data']:
                row_dict['meta_data'] = json_data['model_name_id_dict']['hr.payroll.meta.data'][name]
            else:
                # 说明不存在, 要新建
                json_data = add_xml_content_directir(json_data, 'hr.payroll.meta.data', {'name':name, 'code':code})
                row_dict['meta_data'] = json_data['model_code_id_dict']['hr.payroll.meta.data'][code]

            data_list.append(row_dict)
    if leave_none_list:
        print leave_none_list, 'is no map, check and handle it!'
    else:
        print 'Read Excel Success!...\n Continue write xml'
    return data_list


def write_file():
    all_file_name = get_args_to_format(sys.argv[1:])
    file_name, result_name = all_file_name[0], all_file_name[1]
    # file_name, result_name = get_args_to_format(sys.argv[1:])   # 获取从命令行取得的文件名和要保存的文件名
    data = open_excel(file_name)
    if data:
        json_file_name = 'payroll_json_data.json'
        json_file = json.loads(open(json_file_name, 'r').read())
        excel_data = read_excel_data(data, json_file)
        if excel_data:
            # 写到XML文件中
            payroll_payitem_data = ""
            for i, t in enumerate(excel_data):
                t['sequence'] = i
                payroll_payitem_data += PAYITEM_DATA_CONTENT % (t)
            xml_context = STANDARD_PAYROLL_STRUCTURE % ({'payroll_payitem_data': payroll_payitem_data})
            try:
                fp = open(result_name, 'w')
                fp.writelines(xml_context)
                print 'Success!...'
            except Exception, e:
                print "Error: ",e
            finally:
                fp.close()


if __name__ == "__main__":
    write_file()
