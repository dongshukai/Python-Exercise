# -*- coding: utf-8 -*-

XML_STRUCTURE = '''<?xml version="1.0" encoding="utf-8"?>
<openerp>
    <data noupdate="1">
        {0}
    </data>
</openerp>
'''

GROUP_CATEGORY = '''
        <record model="ir.module.category" id="module_{0}">
            <field name="name">{1}</field>
            <field name="sequence">5</field>
        </record>
'''

BASE_GROUP_READ = '''
        <record id="menu_{0}_read_group" model="res.groups">
            <field name="name">Menu {1} Read Group</field>
            <field name="category_id" ref="module_{2}"/>
        </record>
'''

BASE_GROUP_MANAGER = '''
        <record id="menu_{0}_manager_group" model="res.groups">
            <field name="name">Menu {1} Manager Group</field>
            <field name="category_id" ref="module_{2}"/>
            <field name="users" eval="[(4, ref('base.user_root'))]"/>
        </record>
'''

MODEL_ACCESS_READ = '''
        <record id="group_{0}_read_access" model="ir.model.access">
            <field name="name">{1} Read Access</field>
            <field name="model_id" ref="{2}"/>
            <field name="group_id" ref="menu_{3}_read_group"/>
            <field name="perm_read" eval="1"/>
            <field name="perm_create" eval="0"/>
            <field name="perm_write" eval="0"/>
            <field name="perm_unlink" eval="0"/>
        </record>
'''

MODEL_ACCESS_MANAGER = '''
        <record id="group_{0}_manager_access" model="ir.model.access">
            <field name="name">{1} Manager Access</field>
            <field name="model_id" ref="{2}"/>
            <field name="group_id" ref="menu_{3}_manager_group"/>
            <field name="perm_read" eval="1"/>
            <field name="perm_create" eval="1"/>
            <field name="perm_write" eval="1"/>
            <field name="perm_unlink" eval="1"/>
        </record>
'''