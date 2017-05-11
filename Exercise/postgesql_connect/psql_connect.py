# -*- coding: utf-8 -*-

import psycopg2

from my_info_config import *

# 数据库链接参数
# database = 'ciic-518'
# user = 'dongsk'
# password = '123456'
# host = 'localhost'
# port = 5432

def my_print(text):
    print '*'*45
    print text
    print '*'*45

def connect_db(exce_sql, fetch_type='fetchall'):
    try:
        conn = psycopg2.connect(database=database, user=user, password=password, host=host, port=port)
        cur = conn.cursor()
        cur.execute(exce_sql)

        if fetch_type == 'fetchall':
            data = cur.fetchall()
        elif fetch_type == 'fetchmany':
            pass
        elif fetch_type == 'fetchone':
            data = cur.fetchone()
        elif fetch_type == 'title':
            data = cur.description
        else:
            pass
    except Exception, e:
        raise 'Error: ', e
    finally:
        conn.commit()
        cur.close()
        conn.close()

    return data

def get_table_headers(tablename):
    data = connect_db("SELECT * FROM %s WHERE id=0;" % (tablename), 'title')
    return map(lambda x: x[0] and x[0] not in BLACTLIST_FIELDS, data)



