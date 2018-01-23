
# A very simple Flask Hello World app for you to get started with...

from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

if __name__ == '__main__':
    socketio.run(app)


@app.route('/flasking_it')
def hello_world():
    return 'Hello from Flask!'

@socketio.on('json')
def handle_json(json):
    return 'Yes we have websocets up!'

