from flask import Blueprint, jsonify, request

bpMain = Blueprint('bpMain', __name__)

@bpMain.route('/')
def main():
    return jsonify({
        'message': 'API test OK'
    }), 200


#@bpMain.route('api/users', methods = ['GET'])
#def users():
#    users = [{'id':1, 'name': 'Mau'}]
#    return jsonify(users), 200

#@bpMain.route('api/users/<int:id>', methods = ['GET'])
#def user_by_id(id):
#    users = [{'id': 1, 'name': 'Mau'}]
#    user = list(map(lambda user: user if user['id'] == id else None, users))
#    return jsonify(user[0]), 200