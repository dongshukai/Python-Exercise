#!/usr/bin/python
# -*- coding:utf-8 -*-

# import sys
# import os
# import commands

# text = commands.getoutput('ifconfig')
# print text
# print "Done"

import socket
localIP = socket.gethostbyname(socket.gethostname())    # 得到本地ip
print "local ip:%s " % localIP



