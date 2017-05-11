
# -*- coding: utf-8 -*-

from socket import *

HOST = '192.168.190.129'
# HOST = 'localhost'
PORT = 21567
BUFSIZ = 1024
ADDR = (HOST, PORT)

tcpCliSock = socket(AF_INET, SOCK_STREAM)
tcpCliSock.connect(ADDR)

while True:
    data = raw_input('> ')
    if not data:
        print "Not Data"
        break
    print "data:", data
    tcpCliSock.send(data)
    data1 = tcpCliSock.recv(BUFSIZ)
    if not data1:
        print "Not Data 2"
        break
    print "data1: ", data1
tcpCliSock.close()

