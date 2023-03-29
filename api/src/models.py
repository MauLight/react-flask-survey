from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(200), unique=False, nullable=False)
    cohort = db.Column(db.Integer, unique=False, nullable=False)
    survey = db.relationship('Survey', cascade='all,delete', backref='user')

    def serialize(self):
        return {
            'id': self.id,
            'username': self.username
        }

    def serialize_with_survey(self):
        return {
            'id': self.id,
            'username': self.username,
            'survey': [answer.serialize() for answer in self.survey]
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Survey(db.Model):
    __tablename__ = 'survey'
    id = db.Column(db.Integer, primary_key=True)
    q1 = db.Column(db.String(200), unique=False, nullable=False)
    q2 = db.Column(db.String(200), unique=False, nullable=False)
    q3 = db.Column(db.Integer, unique=False, nullable=False)
    q4 = db.Column(db.Integer, unique=False, nullable=False)
    q5 = db.Column(db.Integer, unique=False, nullable=False)
    q6 = db.Column(db.Integer, unique=False, nullable=False)
    q7 = db.Column(db.Integer, unique=False, nullable=False)
    q8 = db.Column(db.Integer, unique=False, nullable=False)
    q9 = db.Column(db.Integer, unique=False, nullable=False)
    q10 = db.Column(db.Integer, unique=False, nullable=False)
    q11 = db.Column(db.Integer, unique=False, nullable=False)
    q12 = db.Column(db.Integer, unique=False, nullable=False)
    q13 = db.Column(db.Integer, unique=False, nullable=False)
    q14 = db.Column(db.Integer, unique=False, nullable=False)
    q15 = db.Column(db.Integer, unique=False, nullable=False)
    q16 = db.Column(db.String(500), unique=False, nullable=False)
    q17 = db.Column(db.String(500), unique=False, nullable=False)
    q18 = db.Column(db.Integer, unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'user.id', ondelete='CASCADE'), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'q1': self.q1,
            'q2': self.q2,
            'q3': self.q3,
            'q4': self.q4,
            'q5': self.q5,
            'q6': self.q6,
            'q7': self.q7,
            'q8': self.q8,
            'q9': self.q9,
            'q10': self.q10,
            'q11': self.q11,
            'q12': self.q12,
            'q13': self.q13,
            'q14': self.q14,
            'q15': self.q15,
            'q16': self.q16,
            'q17': self.q17,
            'q18': self.q18,
            'user_id': self.user_id
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
