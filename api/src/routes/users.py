from flask import Blueprint, jsonify, request
from models import User
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

bpUser = Blueprint('bpUser', __name__)


@bpUser.route('/token', methods=['POST'])
def create_token():
    username = request.json.get("username", None)

    user = User.query.filter_by(username=username).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username"}), 401
    else:
        access_token = create_access_token(identity=user.id)
        return jsonify({"token": access_token, "username": user.id})


@bpUser.route('/user', methods=['POST'])
def post_new_user():
    username = request.json.get('username')
    cohort = request.json.get('cohort')

    user = User()
    user.username = username
    user.cohort = cohort
    user.save()
    return jsonify(user.serialize()), 200


@bpUser.route('/user', methods=['GET'])
@jwt_required()
def get_user():

    username = get_jwt_identity()

    credentials = {
        "user": username
    }

    return jsonify(credentials)


@bpUser.route('/users', methods=['GET'])
def all_users():
    users = User.query.all()
    users = list(map(lambda user: user.serialize_with_survey(), users))
    return jsonify(users), 200

@bpUser.route('/users/<int:id>', methods = ['GET'])
def user_by_id(id):
    user = User.query.get(id)
    return jsonify(user.serialize_with_survey()), 200