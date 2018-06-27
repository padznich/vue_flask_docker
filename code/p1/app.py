from flask import Blueprint
from flask import Flask
from flask import jsonify
from flask import render_template


app = Flask(__name__)
api = Blueprint('api', __name__)
main = Blueprint('main', __name__)


@api.route('/friends/')
def hello():
    return jsonify(
        {
            'id': "1",
            'name': "Bobby",
            'last': "Boone",
            'age': 25
        },
        {
            'id': "2",
            'name': "John",
            'last': "Boone",
            'age': 35,
        },
    )


@main.route('/')
def index():
    return render_template('index.html')


app.register_blueprint(api, url_prefix='/api')
app.register_blueprint(main, url_prefix='/main')


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
