# -*- coding: utf-8 -*-

from xml.etree import ElementTree as ET
import sys
import json
import os

from commont import *

def read_xml(file_name):
    try:
        xml_file = ET.parse(file_name)
        print "Read %s Success!"%file_name.split(os.sep)[-1]
        return xml_file
    except Exception, e:
        print "Error accendance: ", e
        return False

def read_file(file_name):
    file_data = {}
    try:
        fp = open(file_name, 'r')
        read_content = fp.read()
        if read_content:
            file_data = json.loads(read_content)
        else:
            file_data = {}
    except Exception, e:
        print "Error During open: ", e
        print "Create new json file next..."
        if isinstance(e, IOError) and e.strerror == 'No such file or directory':
            fp = open(file_name, 'a')
            fp.close()
            print "...Create file %s Success..." % (file_name.split(os.sep)[-1])
            read_file(file_name)
    finally:
        fp.close()
    return file_data

def start():
    print "sys.argv: ", sys.argv[1:]
    file_name, result_name, result_xml_name = get_args_to_format(sys.argv[1:])
    xml_content = read_xml(file_name)
    file_data = read_file(result_name)
    if 'model_code_id_dict' not in file_data:
        file_data['model_code_id_dict'] = {}
    if 'model_name_id_dict' not in file_data:
        file_data['model_name_id_dict'] = {}
    # model_code_id_dict = {}
    # model_name_id_dict = {}

    if xml_content:
        data = xml_content.findall('./data/record')
        for item in data:
            model_name = item.attrib.get('model')
            id_name = item.attrib.get('id')
            if model_name not in file_data['model_code_id_dict']:
                file_data['model_code_id_dict'][model_name] = {}
            if model_name not in file_data['model_name_id_dict']:
                file_data['model_name_id_dict'][model_name] = {}

            # Code
            field_codes = item.findall("./field[@name='code']")   # 合法数据,应该应该有且只有一个
            # field_code = field_codes[0] if field_codes else {}
            code = field_codes[0].text if field_codes else ''
            # code = field_code.text if field_code else ''
            if code:
                file_data['model_code_id_dict'][model_name][code] = id_name

            # Name
            field_names = item.findall("./field[@name='name']")   # 同上
            # field_name = field_names[0] if field_names else {}
            name = field_names[0].text if field_names else ''
            # name = field_name.text if field_name else ''
            if name:
                file_data['model_name_id_dict'][model_name][name] = id_name
    try:
        fp = open(result_name, 'w')
        file_json_data = json.dumps(file_data)
        fp.write(file_json_data)
        print "Success!"
    except Exception, e:
        print 'Error during write: ',e
    finally:
        fp.close()


if __name__ == '__main__':
    start()