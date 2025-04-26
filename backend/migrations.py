from app import create_app
from config import db
from models import Incident
from dotenv import load_dotenv
import os

load_dotenv()

def create_sample_data():
    sample_incidents = [
        {
            'title': 'Model Output Error',
            'description': 'The AI model produced unexpected results in production',
            'severity': 'High'
        },
        {
            'title': 'Data Privacy Violation',
            'description': 'Sensitive user data was exposed due to a configuration error',
            'severity': 'Medium'
        }
    ]
    app = create_app()
    with app.app_context():
        for incident_data in sample_incidents:
            incident = Incident(
                title=incident_data['title'],
                description=incident_data['description'],
                severity=incident_data['severity']
            )
            db.session.add(incident)
        db.session.commit()

if __name__ == '__main__':
    create_sample_data()