from flask import Flask
from config import Config, db
from routes import incidents_bp
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    CORS(app)  # Enable CORS for all routes
    with app.app_context():
        db.create_all()
    app.register_blueprint(incidents_bp)
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)