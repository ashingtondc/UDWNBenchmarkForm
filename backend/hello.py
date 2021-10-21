from flask import Flask
from flask import request
from flask import Response
from flask_cors import CORS
from mongo_wrapper import Entry

app = Flask(__name__)
CORS(app)

@app.route('/data', methods=["POST"])
def upload_data():
    if request.method == "POST":
        data = request.get_json()
        print(data)
        upload_data = Entry().upload_data(data)
        if upload_data:
            return Response(status=200)
        else:
            return Response(status=400)

@app.route('/', methods=["GET"])
def hello():
    return "Hello World"
