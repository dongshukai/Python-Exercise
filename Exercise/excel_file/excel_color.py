# -*- coding: utf-8 -*-

import xlwt
#新建一个excel文件
file=xlwt.Workbook()
#新建一个sheet
table=file.add_sheet('sheet name',cell_overwrite_ok=True)
for i in range(0,256):
        stylei= xlwt.XFStyle()            #初始化样式
        patterni= xlwt.Pattern()          #为样式创建图案
        patterni.pattern=1                #设置底纹的图案索引，1为实心，2为50%灰色，对应为excel文件单元格格式中填充中的图案样式
        patterni.pattern_fore_colour=i    #设置底纹的前景色，对应为excel文件单元格格式中填充中的背景色
        patterni.pattern_back_colour=35   #设置底纹的背景色，对应为excel文件单元格格式中填充中的图案颜色
        stylei.pattern=patterni           #为样式设置图案
        table.write(i,0,i,stylei)         #使用样式

file.save('colour123.xls')

# for emp_key in all_employee:
        #     if emp_key in upload_employee_list and emp_key not in result_employee_list:
        #         upload_leave_data[emp_key] = []
        #     elif emp_key in result_employee_list and emp_key not in upload_employee_list:
        #         result_leave_data[emp_key] = []
        #     elif emp_key in common_employee:
        #         diff_data_dict[emp_key] = []
        #         upload_employee_values = employee_upload_data_dict[emp_key]
        #         for payitem_item in all_payitems:
        #             if payitem_item in upload_payitems_list and payitem_item not in result_payitems_list:
        #                 pass
        #             elif payitem_item in result_payitems_list and payitem_item not in upload_payitems_list:
        #                 pass
        #             elif payitem_item in common_payitems:
        #                 pass
        #             else:
        #                 raise UserError("Find Item <%s> not definded, check it and try again Please!" % (emp_key))
        #     else:
        #         raise UserError("Find Employee <%s> not definded, check it and try again Please!" % (emp_key))
        # for emp_key, result_values in employee_result_data_dict.items():
        #     diff_data_dict[emp_key] = []
        #     if emp_key in employee_upload_data_dict:
        #         upload_employee_values = employee_upload_data_dict[emp_key]
        #         for result_value in result_values:
        #             payitem_key = result_value[result_payitem_key]
        #             payitem_value = result_value['result']
        #             if payitem_key in upload_employee_values:
        #                 # 薪资结果应该只有数值,不会出现char等类型
        #                 upload_value = upload_employee_values[payitem_value]
        #                 # diff_data_dict[emp_key].update({payitem_key: float(payitem_value) - float(upload_value)})
        #                 diff_data_dict[emp_key].update({payitem_key: self.get_upload_result_diff(upload_value, payitem_value, 'float')})
        #             else:
        #                 result_leave_data = self.check_and_add_new_item(emp_key, {payitem_key: payitem_value}, result_leave_data)
        #     else:
        #         result_leave_data = self.check_and_add_new_item(emp_key, result_values, result_leave_data)



# def allocation_employee_to_payroll_group(self, cr, uid, ids, context=None):
#         group_obj = self.pool.get('hr.payroll.group')
#         find_group_ids = group_obj.search(cr, uid, [], context=context)
#         find_employee_ids = self.pool.get('hr.employee').search(cr, uid, [], context=context)
#         if len(find_employee_ids) < 5:
#             raise osv.except_osv(_('Error'), _('人数不足50000'))
#         for group_record in group_obj.browse(cr, uid, find_group_ids, context=context):
#             count = group_record.code.split('_')[-1]
#             try:
#                 count = int(count)
#             except Exception, e:
#                 count = 0
#             group_record.write({'employee_ids': [(6, 0, find_employee_ids[0:count])]})
#         return True
