# -*- coding: utf-8 -*-

from tempaltes import *

PAYROLL_MODEL_NAME_LIST = [
	'hr_payroll_group',
	'hr_payroll_payitem',
	'hr_payroll_payitem_category',
	'hr_payroll_function',
	'hr_payroll_parameter',
	'hr_payroll_tax',
	# 'hr_payroll_period',
	'referencable_model',
	'reference_payitem',
]

PAYSLIP_MODEL_NAME_LIST = [
	'hr_payslip_run',
	'hr_payslip_group',
	'hr_payslip_payitem',
	'hr_payslip_payitem_import',
	'hr_payslip_payitem_input',
	'hr_payslip_function',
	'hr_payslip_parameter',
	'hr_payslip_period_result',
	'hr_payslip_rule_result',
	'hr_payslip_tax',
	'payroll_single_calculate',
	'hr_payroll_iit_flow',
	'hr_payroll_personal_account',
]

def create_ir_rule_xml():
	payroll_data = ""
	payslip_data = ""

	print 'GO...'
	for payroll in PAYROLL_MODEL_NAME_LIST:
		payroll_data += IR_RULE_TEMPLATE.format(payroll.replace('_', ' '), payroll.replace('hr_', ''),
			payroll.replace('hr_', '').replace('_', ' ').title(), payroll)

	payroll_xml_data = XML_HEAD.format(payroll_data)

	for payslip in PAYSLIP_MODEL_NAME_LIST:
		payslip_data += IR_RULE_TEMPLATE.format(payslip.replace('_', ' '), payslip.replace('hr_', ''),
			payslip.replace('hr_', '').replace('_', ' ').title(), payslip)

	payslip_xml_data = XML_HEAD.format(payslip_data)

	try:
		fp1 = open('payroll.xml', 'w')
		fp2 = open('payslip.xml', 'w')

		fp1.writelines(payroll_xml_data)
		fp2.writelines(payslip_xml_data)
		print 'Success...'

	except Exception, e:
		print 'Error: ',e
	finally:
		fp1.close()
		fp2.close()

if __name__ == "__main__":
	create_ir_rule_xml()
	print '...Done'






