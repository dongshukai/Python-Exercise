# /usr/bin/env python
# -*- coding:utf-8 -*-

import os
import sys
import json

from template import *

# data = {'category1': ['menu1', 'menu2', 'menu3'], 'category2': ['menu4', 'menu5'],
#         'category3': ['menu6', 'menu7', 'menu8'],
#         }


def write_file():
    args = sys.argv[1:]
    if len(args) >= 1:
        file_name = args[0]
    else:
        file_name = 'my_menu.json'
    if len(args) >= 2:
        result_name = args[1]
    else:
        result_name = 'result.xml'

    try:
        fp = open(file_name, 'r')
        tt = json.loads(fp.read())
    except Exception, e:
        print "open file %s Error!" % file_name
        raise e
    finally:
        fp.close()

    context_data = ""
    if tt:
        for category_name, menu_list in tt.items():
            # 1. 根据category创建category_group
            category_title = category_name.replace('_', ' ').title()
            category_group = GROUP_CATEGORY.format(category_name, category_title)
            context_data += os.linesep + '<!-- %s-->' % category_title + category_group
            # 2. 根据menu name 创建菜单组
            for menu, model_name in menu_list:
                menu_title = menu.replace('_', ' ').title()
                temp_read_group = BASE_GROUP_READ.format(menu, menu_title, category_name)
                temp_manager_group = BASE_GROUP_MANAGER.format(menu, menu_title, category_name)
                # context_data += temp_group
                # 3. 将每个组的读写权限赋值
                read_access = MODEL_ACCESS_READ.format(menu, menu_title, model_name, menu)
                manager_access = MODEL_ACCESS_MANAGER.format(menu, menu_title, model_name, menu)
                context_data += temp_read_group + read_access + temp_manager_group + manager_access
        res = XML_STRUCTURE.format(context_data)

        try:
            fp = open(result_name, 'a')
            fp.writelines(res)
            print "Success!"
        except Exception, e:
            print "Error!"
            raise e
        finally:
            fp.close()


if __name__ == "__main__":
    write_file()
