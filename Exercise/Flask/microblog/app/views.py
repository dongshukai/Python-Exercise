# -*- coding: utf-8 -*-
from flask import render_template, flash, redirect, Flask, request, url_for
from app import app
from .forms import LoginForm

@app.route('/')
@app.route('/index')
def index():
    user = {'nickname': 'Kevin'}
    posts = [
        {
            'author': {'nickname': u'吉吉'},
            'body': u'孔雀东南飞,五里一徘徊'
        },
        {
            'author': {'nickname': 'Susan'},
            'body': 'The Avengers movie was so cool!'
        }
    ]
    return render_template("index.html", title='Home',
                           user=user, posts=posts)

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Login requested for OpenID="' + form.openid.data + '", remember_me=' + str(form.remember_me.data))
        return redirect('/index')

    return render_template('login.html', title='Sign In', form=form, providers=app.config['OPENID_PROVIDERS'])
