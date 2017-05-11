# -*- coding: utf-8 -*-

import xlrd
from copy import deepcopy

XML_HEADER = '''<?xml version="1.0" encoding="UTF-8"?>
<openerp>
    <data>
%(meta_data)s
    </data>
</openerp>
'''

META_DATA_TEMPLATE = '''
        <!-- %(name)s-->
        <record id="meta_%(code)s" model="hr.payroll.meta.data">
            <field name="code">%(code)s</field>
            <field name="name">%(name)s</field>
            <field name="is_necessary" eval="%(is_necessary)s"/>
            <field name="is_only" eval="%(is_only)s"/>
            <field name="cumulative_item" eval="%(cumulative_item)s"/>
            <field name="value_type">%(value_type)s</field>
            <field name="active" eval="True"/>
            <field name="category_id" ref="%(category_id)s"/>
            <field name="description">%(description)s</field>
            <field name="parent_id" ref="%(parent_id)s"/>
        </record>
'''

META_DATA_MAP = {
    'name': '',
    'code': '',
    'is_necessary': False,
    'is_only': False,
    'cumulative_item': False,
    'value_type': '',
    # 'category_id': '',
    'description': '',
    'parent_id': '',
}

VALUE_TYPE_MAP = {
    u'数值': 'float',
    u'日期': 'date',
    u'文本': 'text',
    u'字符': 'text',
    u'整形': 'int',
    u'布尔': 'bool',
    u'时间': 'time',
}

BOOL_VALUE_MAP = {
    u't': True,
    u'f': False,
}

META_DATA_CATEGORY_MAP = {
    u'mdc001': 'payroll_setting.meta_data_category_1',
    u'mdc002': 'payroll_setting.meta_data_category_2',
    u'mdc003': 'payroll_setting.meta_data_category_3',
    u'mdc004': 'payroll_setting.meta_data_category_4',
    u'mdc005': 'payroll_setting.meta_data_category_5',
    u'mdc006': 'payroll_setting.meta_data_category_6',
    u'mdc007': 'payroll_setting.meta_data_category_7',
    u'mdc008': 'payroll_setting.meta_data_category_8',
    u'mdc009': 'payroll_setting.meta_data_category_9',
    u'mdc010': 'payroll_setting.meta_data_category_10',
    u'mdc011': 'payroll_setting.meta_data_category_11',
    u'mdc012': 'payroll_setting.meta_data_category_12',
    u'mdc013': 'payroll_setting.meta_data_category_13',
    u'mdc014': 'payroll_setting.meta_data_category_14',
    u'mdc015': 'payroll_setting.meta_data_category_15',
    u'mdc016': 'payroll_setting.meta_data_category_16',
    u'mdc017': 'payroll_setting.meta_data_category_17',
    u'mdc018': 'payroll_setting.meta_data_category_18',
    u'mdc019': 'payroll_setting.meta_data_category_19',
}


def get_excel_data():
    data = {}
    # file_name = '/Users/dongsk/Desktop/工作簿1.xlsx'
    file_name = '/Users/dongsk/Downloads/1静态数据准备.xlsx'
    file_data = xlrd.open_workbook(file_name)
    tables = file_data.sheets()
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

def create_meta_data():
    result = ''

    excel_data = get_excel_data()[u'元数据']
    codes = map(lambda x: str(x['code']), excel_data)
    print codes
    meta_data = ''
    for meta_data_dict in excel_data:
        temp_meta_data_dict = deepcopy(META_DATA_MAP)
        category_code = meta_data_dict[u'category_code']
        if category_code:
            temp_meta_data_dict['category_id'] = META_DATA_CATEGORY_MAP[category_code]
        else:
            temp_meta_data_dict['category_id'] = ''
        for k, v in meta_data_dict.items():
            if k in META_DATA_MAP:
                val = meta_data_dict[k]
                if k == u'value_type':
                    value = VALUE_TYPE_MAP[val]
                elif k in ['is_necessary', 'is_only', 'cumulative_item']:
                    value = BOOL_VALUE_MAP[val]
                else:
                    value = str(val.encode('utf8')).replace(' ', '_')
                temp_meta_data_dict[k] = value
        meta_data += META_DATA_TEMPLATE % temp_meta_data_dict
    result = XML_HEADER % {'meta_data': meta_data}

    try:
        fp = open('meta_data.xml', 'w')
        fp.write(result)
    except Exception, e:
        raise 'ERROR: ', e
    finally:
        fp.close()



if __name__ == '__main__':
    create_meta_data()


