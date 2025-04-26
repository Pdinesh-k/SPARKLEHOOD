from datetime import datetime
from sqlalchemy import Enum
from config import db

class Incident(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    severity = db.Column(Enum('Low', 'Medium', 'High', name='severity_enum'), nullable=False)
    reported_at = db.Column(db.DateTime, default=datetime.utcnow)
