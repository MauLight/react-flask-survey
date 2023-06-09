"""empty message

Revision ID: 53b9bacaee38
Revises: 
Create Date: 2023-03-29 17:01:06.026711

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '53b9bacaee38'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=200), nullable=False),
    sa.Column('cohort', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('survey',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('q1', sa.String(length=200), nullable=False),
    sa.Column('q2', sa.String(length=200), nullable=False),
    sa.Column('q3', sa.Integer(), nullable=False),
    sa.Column('q4', sa.Integer(), nullable=False),
    sa.Column('q5', sa.Integer(), nullable=False),
    sa.Column('q6', sa.Integer(), nullable=False),
    sa.Column('q7', sa.Integer(), nullable=False),
    sa.Column('q8', sa.Integer(), nullable=False),
    sa.Column('q9', sa.Integer(), nullable=False),
    sa.Column('q10', sa.Integer(), nullable=False),
    sa.Column('q11', sa.Integer(), nullable=False),
    sa.Column('q12', sa.Integer(), nullable=False),
    sa.Column('q13', sa.Integer(), nullable=False),
    sa.Column('q14', sa.Integer(), nullable=False),
    sa.Column('q15', sa.Integer(), nullable=False),
    sa.Column('q16', sa.String(length=500), nullable=False),
    sa.Column('q17', sa.String(length=500), nullable=False),
    sa.Column('q18', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('survey')
    op.drop_table('user')
    # ### end Alembic commands ###
