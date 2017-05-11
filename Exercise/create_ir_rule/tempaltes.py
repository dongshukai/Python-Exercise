# -*- coding: utf-8 -*-

XML_HEAD = """<?xml version="1.0" encoding="UTF-8"?>
<openerp>
    <data>
        {0}
    </data>
</openerp>
"""

IR_RULE_TEMPLATE = """
        <!-- {0} -->
		<record model="ir.rule" id="ir_rule_{1}">
            <field name="name">Ir Rule {2}</field>
            <field name="model_id" ref="model_{3}"/>
            <field name="global" eval="True"/>
            <field name="domain_force">['|',('company_id','=',False),('company_id','child_of',[user.company_id.id])]</field>
        </record>
"""