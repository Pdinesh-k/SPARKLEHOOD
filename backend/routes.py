from flask import Blueprint, request, jsonify
from models import db, Incident
from services import validate_severity, create_incident

incidents_bp = Blueprint('incidents', __name__)

@incidents_bp.route('/incidents', methods=['GET'])
def get_incidents():
    incidents = Incident.query.all()
    return jsonify([
        {
            'id': incident.id,
            'title': incident.title,
            'description': incident.description,
            'severity': incident.severity,
            'reported_at': incident.reported_at.isoformat()
        } for incident in incidents
    ])

@incidents_bp.route('/incidents', methods=['POST'])
def add_incident():
    data = request.get_json()
    if not all(key in data for key in ('title', 'description', 'severity')):
        return jsonify({'error': 'Missing required fields'}), 400
    if not validate_severity(data['severity']):
        return jsonify({'error': 'Invalid severity level'}), 400
    incident = create_incident(data['title'], data['description'], data['severity'])
    db.session.add(incident)
    db.session.commit()
    return jsonify({
        'id': incident.id,
        'title': incident.title,
        'description': incident.description,
        'severity': incident.severity,
        'reported_at': incident.reported_at.isoformat()
    }), 201

@incidents_bp.route('/incidents/<int:id>', methods=['GET'])
def get_incident(id):
    incident = Incident.query.get_or_404(id)
    return jsonify({
        'id': incident.id,
        'title': incident.title,
        'description': incident.description,
        'severity': incident.severity,
        'reported_at': incident.reported_at.isoformat()
    })

@incidents_bp.route('/incidents/<int:id>', methods=['DELETE'])
def delete_incident(id):
    incident = Incident.query.get_or_404(id)
    db.session.delete(incident)
    db.session.commit()
    return '', 204
