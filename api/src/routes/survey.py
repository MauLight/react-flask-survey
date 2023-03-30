from flask import Blueprint, jsonify, request
from models import Survey

bpSurvey = Blueprint('bpSurvey', __name__)


@bpSurvey.route('/survey', methods=['POST'])
def post_new_user():
    q1 = request.json.get('q1')
    q2 = request.json.get('q2')
    q3 = request.json.get('q3')
    q4 = request.json.get('q4')
    q5 = request.json.get('q5')
    q6 = request.json.get('q6')
    q7 = request.json.get('q7')
    q8 = request.json.get('q8')
    q9 = request.json.get('q9')
    q10 = request.json.get('q10')
    q11 = request.json.get('q11')
    q12 = request.json.get('q12')
    q13 = request.json.get('q13')
    q14 = request.json.get('q14')
    q15 = request.json.get('q15')
    q16 = request.json.get('q16')
    q17 = request.json.get('q17')
    q18 = request.json.get('q18')
    user_id = request.json.get('user_id')

    survey = Survey()
    survey.q1 = q1
    survey.q2 = q2
    survey.q3 = q3
    survey.q4 = q4
    survey.q5 = q5
    survey.q6 = q6
    survey.q7 = q7
    survey.q8 = q8
    survey.q9 = q9
    survey.q10 = q10
    survey.q11 = q11
    survey.q12 = q12
    survey.q13 = q13
    survey.q14 = q14
    survey.q15 = q15
    survey.q16 = q16
    survey.q17 = q17
    survey.q18 = q18
    survey.user_id = user_id
    survey.save()
    return jsonify(survey.serialize()), 200
