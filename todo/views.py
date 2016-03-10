from todo import app
from flask import render_template, jsonify


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/test/')
def test():
    return jsonify(result='ok')
