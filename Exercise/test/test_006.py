# -*- coding: utf-8 -*-

#! /usr/bin/env python
# -*- coding: utf-8 -*-

import Tkinter as tk

class TestUI(object):
    def __init__(self, master):
        self.root = master
        self.create_frame()

    def create_frame(self):
        '''
        create frame,left and right
        '''
        self.frm_left = tk.LabelFrame(self.root)
        self.frm_right = tk.LabelFrame(self.root)

        self.frm_left.grid(row=0, column=0, sticky="wesn")
        self.frm_right.grid(row=0, column=1, sticky="wesn")

        self.create_frm_left()
        self.create_frm_right()

    def create_frm_left(self):
        self.frm_left_label = tk.Label(self.frm_left,
                                       text="Test")
        self.frm_left_listbox = tk.Listbox(self.frm_left)
        self.frm_left_btn = tk.Button(self.frm_left,
                                      text="Test")

        self.frm_left_label.grid(row=0, column=0, padx=5, pady=5, sticky="w")
        self.frm_left_listbox.grid(
            row=1, column=0, padx=5, pady=5, sticky="wesn")
        self.frm_left_btn.grid(row=2, column=0, padx=5, pady=5, sticky="wesn")

        for i in range(5):
            self.frm_left_listbox.insert("end", i)

    def create_frm_right(self):
        self.frm_right_canvas = tk.Canvas(self.frm_right, bg="white")

        self.frm_right_canvas.grid(row=0, column=0, padx=5, pady=5, sticky="wesn")

if __name__ == '__main__':
    '''
    main loop
    '''
    root = tk.Tk()
    root.title("Test")
    TestUI(master=root)
    root.resizable(False, False)
    root.mainloop()
