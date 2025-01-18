from flask import Flask, send_from_directory
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    db.init_app(app)
    api = Api(app)

    CORS(app)
    
    CORS(app,resources={
        r"/api/*":{
            'origin':['http://localhost:5173'],
            'methods':['GET','POST','PUT','DELETE','OPTIONS'],
            'allow_headers': ['Content-Type','Authorization']
        }
    })



    # Import routes
    from app.routes import initialize_routes
    initialize_routes(api)
    
    # Create database tables
    with app.app_context():
        db.create_all()
        print("Database initialized!")
    
    # Handle favicon.ico
    @app.route('/favicon.ico')
    def favicon():
        return '', 204
    
    return app