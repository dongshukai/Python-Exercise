#!/usr/bin/python
# -*- coding: utf-8 -*-

from queue_001 import Queue

if __name__ == '__main__':
    queueTest = Queue(10)
    for i in range(10):
        queueTest.enqueue(i)

    print queueTest.isfull()

    print queueTest
    print queueTest.getSize()

    for i in range(5):
        print queueTest.dequeue()

    print queueTest.isempty()
    print queueTest
    print queueTest.getSize()
