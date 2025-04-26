from models import Incident

def validate_severity(severity):
    valid_severities = ['Low', 'Medium', 'High']
    return severity.title() in valid_severities

def create_incident(title, description, severity):
    return Incident(title=title, description=description, severity=severity)
