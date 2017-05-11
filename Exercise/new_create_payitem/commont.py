# -*- coding: utf-8 -*-

import sys
import xml.dom.minidom as OPEN_XML
from xml.etree import ElementTree as ET

def get_args_to_format(*args):
    # args = sys.argv[1:]
    print args
    args = args[0]
    if len(args) >= 1:
        file_name = args[0]
    else:
        file_name = 'People＋标准资项结构.xlsx'
    if len(args) >= 2:
        result_name = args[1]
    else:
        result_name = 'result.xml'
    if len(args) >= 3:
        xml_name = args[2]
    else:
        xml_name = 'test_result.xml'

    return file_name, result_name, xml_name

def find_xml_code(file_name, code):
    # 打开XML文档
    dom = OPEN_XML.parse(file_name)
    # 得到文档元素对象
    root = dom.documentElement
    per = ET.parse('file_name')
    p = per.findall('./record/field')

# TITLE_FIELD_MAP = {
#     u'薪资项类别': 'category',
#     u'启用？': 'active',
#     u'数据来源类型': 'source',
#     u'数据类型': 'value_type',
#     u'是否在工资单显示': 'appears_on_payslip',
#     u'精度控制方式': 'float_round',
#     u'薪资项中文名': 'name',
#     u'薪资项编码': 'code',
#     u'薪资项英文名': 'english_name',
#     u'计算公式': 'amount_python_compute',
#     u'计算公式说明': 'note',
# }
TITLE_FIELD_MAP = {
    u'名称': 'name',
    u'编码': 'code',
    u'元数据/编码': 'meta_data_code',
    u'元数据/名称': 'meta_data_name',
    u'类别/名称': 'category',
    u'数据源': 'source',
    u'值类型': 'value_type',
    u'范围': 'scope',
    u'Python代码': 'amount_python_compute',
    u'差异汇总项/代码': 'ref_payitem_id',
    u'差异汇总项/名称': 'ref_payitem_id',
    u'显示序列': 'sequence',
    u'薪资组/代码': 'group_id',
    u'有效': 'active',
    u'默认值': 'default_value',
    u'固定值': 'fixed_value',
    u'计算精度': 'calculate_precision',
    u'Standard Payitem': 'is_standard_payitem',
    u'计算顺序': 'evaluation_sequence',
}

SELECT_FIELD_MAP = {
    u'数据源': {u'固定项': 'fixed', u'引用项': 'reference', u'计算项': 'formula', u'输入项': 'import'},
    u'值类型': {u'数值': 'float', u'字符': 'char', u'日期': 'date', u'整数': 'integer', u'时间': 'time', u'日期时间': 'datetime'},
    u'范围': {u'公司': 'company', u'集团': 'enterprise', u'全局': 'global'},

}

# SELECT_FIELD_MAP = {
#     u'启用？': {u'是': True, u'否': False},
#     u'数据来源类型': {u'固定项': 'fixed', u'可变项': 'import', u'公式项': 'formula', u'系统逻辑项': 'reference', u'计算项': 'formula', u'系统逻辑': 'reference'},   # 缺少input类型
#     u'数据类型': {u'数值': 'float', u'文本': 'char', u'布尔': 'bool', u'日期': 'date', u'时间': 'time', u'日期时间': 'datetime'}, # 没有布尔类型的字段
#     u'精度控制方式': {u'全进到分': '', u'四舍五入到分': '', u'四舍五入到角': '', u'见分进角': ''},    # 没有对应的字段控制
#     u'是否在工资单显示': {u'是': True, u'否': False},
# }

REF_FIELD_MAP = {
    u'类别/名称': 'hr.payroll.payitem.category',
}

# REF_FIELD_MAP = {
#     u'薪资项类别': 'hr.payroll.payitem.category',
# }


STANDARD_PAYROLL_STRUCTURE = """<?xml version="1.0" encoding="utf-8"?>
<openerp>
    <data>
        <record id="standard_payroll_group" model="hr.payroll.group">
            <field name="name">%(group_name)s</field>
            <field name="code">%(group_code)s</field>
            <field name="is_standard_group" eval="%(is_standard_group)s"/>
        </record>

        %(payroll_payitem_data)s
    </data>
</openerp>
"""

PAYITEM_DATA_CONTENT = """
    <!-- %(code)s-->
        <record id="standard_payitem_%(code)s" model="hr.payroll.payitem">
            <field name="meta_data" ref="payroll_setting.%(meta_data)s" />
            <field name="category" ref="payroll_setting.%(category)s" />
            <field name="name">%(name)s</field>
            <field name="code">%(code)s</field>
            <field name="source">%(source)s</field>
            <field name="value_type">%(value_type)s</field>
            <field name="scope">company</field>
            <field name="amount_python_compute">%(amount_python_compute)s</field>
            <field name="ref_payitem" ref="payroll_setting.%(ref_payitem)s"/>
            <field name="sequence">%(sequence)s</field>
            <field name="evaluation_sequence">%(evaluation_sequence)s</field>
            <field name="group_id" ref="standard_payroll_group" />
            <field name="active" eval="%(active)s" />
            <field name="default_value">0.0</field>
            <field name="fixed_value">0.0</field>
            <field name="is_standard_payitem" eval="%(is_standard_payitem)s" />
        </record>
"""

META_DATA_TEMPLATE = """
    <!-- %(code)s-->
        <record id="meta_%(code_id)s" model="hr.payroll.meta.data">
            <field name="code">%(code)s</field>
            <field name="name">%(name)s</field>
            <field name="is_necessary" eval="False"/>
            <field name="is_only" eval="False"/>
            <field name="value_type">float</field>
            <field name="active" eval="True"/>
            <field name="category_id" ref=""/>
            <field name="description"></field>
            <field name="parent_id" ref=""/>
        </record>
"""

PAYROLL_CATEGORY_TEMPLATE = """
    <!-- %(name)s-->
        <record id="payitem_category_%(num)s" model="hr.payroll.payitem.category">
            <field name="name">%(name)s</field>
        </record>
"""


MODEL_TEMPLATE_MAP = {
    'hr.payroll.meta.data': META_DATA_TEMPLATE,
    'hr.payroll.payitem.category': PAYROLL_CATEGORY_TEMPLATE,

}

MODEL_FILENAME_MAP = {
    'hr.payroll.meta.data': './payroll_data/hr_payroll_meta_data.xml',
    'hr.payroll.payitem.category': './payroll_data/hr_payroll_payitem_category.xml',

}

MODEL_TEMPLATE_ID_MAP = {
    'hr.payroll.meta.data': "meta_%(code)s",
    'hr.payroll.payitem.category': "payitem_category_%(num)s"
}
