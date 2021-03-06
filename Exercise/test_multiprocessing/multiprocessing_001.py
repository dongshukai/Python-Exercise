#!/usr/bin/python
# -*- coding: utf-8 -*-

import Queue
myqueue = Queue.Queue(maxsize=0)

import threading
import urllib2
import time

hosts = ["http://1", "http://2", "http://3", "http://4", "http://5"]

queue = Queue.Queue()

class ThreadUrl(threading.Thread):
    """
    Threaded Url Grab
    """

    def __init__(self, queue, htint):
        threading.Thread.__init__(self)
        self.queue = queue
        self.Ht = htint     # 线程

    def run(self):
        while True:
            # grabs host from queue
            host = self.queue.get()     # get()方法从队头删除并返回一个项目
            print "线程ID %d --- %s" % (self.Ht, host)
            print self.queue.qsize()    # 返回队列的大小，近似值
            if self.queue.empty():  # 如果队列为空
                print "队列为空"
            # grabs urls of hosts and prints first 1024 bytes of page
            # url = urllib2.urlopen(host)
            # print url.read(1024)

            #signals to queue job is done
            self.queue.task_done()      # 退出

