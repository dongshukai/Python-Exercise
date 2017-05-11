# -*- coding: utf-8 -*-

from read_excel_file import read_excel_file as R_E_F

XML_HEAD = """<?xml version="1.0" encoding="UTF-8"?>
<openerp>
    <data noupdate="1">
        %(meta_data)s
    </data>
</openerp>
"""

METADATA_XML = """
        <record id="meta_%(code)s" model="hr.payroll.meta.data">
            <field name="code">%(code)s</field>
            <field name="name">%(name)s</field>
            <field name="is_necessary" eval="%(is_necessary)s"/>
            <field name="is_only" eval="%(is_only)s"/>
            <field name="value_type">%(value_type)s</field>
            <field name="active" eval="%(active)s"/>
            <field name="category_id" ref="payroll_setting.%(category_id)s"/>
            <field name="description">%(description)s</field>
            <field name="parent_id" ref="%(parent_id)s"/>
        </record>
"""

EXCEL_HEAD_MAP = {
    u'元数据类别': 'category_id',
    u'元数据编码': 'code',
    u'元数据中文名': 'name',
    u'元数据英文名': 'english_name',
    u'是否必须': 'is_necessary',
    u'是否唯一': 'is_only',
    u'数值类型': 'value_type',
    u'备注': 'description',
}

VALUE_TYPE_MAP = {
    u'浮点型': 'float',
    u'整型': 'int',
    u'布尔型': 'bool',
    u'日期型': 'date',
    u'时间型': 'time',
    u'文本型': 'text',
    u'是': True,
    u'否': False,
}

META_DATA_CATEGORY = {
    u'收入': 'meta_data_category_1',
    u'其他': 'meta_data_category_2',
    u'扣款': 'meta_data_category_3',
    u'企业社保福利': 'meta_data_category_4',
    u'个人社保福利': 'meta_data_category_5',
    u'应发工资': 'meta_data_category_6',
    u'个人所得税': 'meta_data_category_7',
    u'企业承担个税': 'meta_data_category_8',
    u'计税不发薪': 'meta_data_category_9',
    u'实发工资': 'meta_data_category_10',
    u'累计收入': 'meta_data_category_11',
    u'应税工资': 'meta_data_category_12',
}

def write_meta_data(excel_name=None):
    result = ''
    meta_data = ''

    if not excel_name:
        excel_name = 'People＋薪资模版.xlsx'

    excel_data = R_E_F(excel_name)
    # 元数据在第一个表格
    leave_no_map = []
    data = excel_data[u'元数据']
    # meta_data_dict = {}
    for meta_data_dict in data:
        new_meta_data_dict = {}
        for k, v in meta_data_dict.items():
            if k in EXCEL_HEAD_MAP:
                key = EXCEL_HEAD_MAP[k]
                if key in ['is_necessary', 'is_only', 'value_type']:
                    value = VALUE_TYPE_MAP[v]
                else:
                    value = v
                if value in META_DATA_CATEGORY:
                    value = META_DATA_CATEGORY[value]
                if isinstance(value, bool):
                    new_meta_data_dict[key] = value
                else:
                    new_meta_data_dict[key] = str(value.encode('utf8'))
            else:
                leave_no_map.append({k: v})
        new_meta_data_dict['active'] = True
        new_meta_data_dict['parent_id'] = ""

        meta_data += METADATA_XML % (new_meta_data_dict)
    result = XML_HEAD % {'meta_data': meta_data}

    try:
        fp = open('meta_data.xml', 'w')
        fp.write(result)
    except Exception, e:
        raise 'ERROR: ', e
    finally:
        fp.close()


if __name__ == '__main__':
    write_meta_data()


