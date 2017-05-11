#!/usr/bin/python
# -*- coding: utf-8 -*-

class Queue(object):
    def __init__(self, size):
        self.size = size
        self.queue = []

    def __str__(self):
        return str(self.queue)

    # 获取队列的当前长度
    def getSize(self):
        return len(self.queue)

    # 入队, 如果队列满了返回-1或抛出异常，否则将元素插入队列尾
    def enqueue(self, items):
        if self.isfull():
            return -1
            # raise ("Queue is full")
        self.queue.append(items)

    # 出队， 如果队列空了返回-1或返回异常，否则返回队列头元素并将其从队列中移除
    def dequeue(self):
        if self.isempty():
            return -1
        firstElement = self.queue[0]
        self.queue.remove(firstElement)
        return firstElement

    # 判断队列满
    def isfull(self):
        if len(self.queue) == self.size:
            return True
        return False

    # 判断队列空
    def isempty(self):
        if len(self.queue) == 0:
            return True
        return False
