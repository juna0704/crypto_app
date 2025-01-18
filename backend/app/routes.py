from flask import jsonify
from flask_restful import Resource, reqparse, fields, marshal_with
from app.models import Exchange, Cryptocurrency
from app import db

class RootResource(Resource):
    def get(self):
        return {
            "message": "Welcome to Crypto API",
            "endpoints": {
                "exchanges": "/api/exchanges",
                "cryptocurrencies": "/api/coins",
                "test": "/test"
            }
        }

class TestResource(Resource):
    def get(self):
        return {"message": "API is working!"}


exchange_fields = {
    'id': fields.String,
    'name': fields.String,
    'year_established': fields.Integer,
    'country': fields.String,
    'description': fields.String,
    'url': fields.String,
    'image': fields.String,
    'has_trading_incentive': fields.Boolean,
    'trust_score': fields.Integer,
    'trust_score_rank': fields.Integer,
    'trade_volume_24h_btc': fields.Float,
    'trade_volume_24h_btc_normalized': fields.Float
}

crypto_fields = {
    'id': fields.String,
    'symbol': fields.String,
    'name': fields.String,
    'image': fields.String,
    'current_price': fields.Float,
    'market_cap': fields.Integer,
    'market_cap_rank': fields.Integer,
    'fully_diluted_valuation': fields.Integer,
    'total_volume': fields.Integer,
    'high_24h': fields.Float,
    'low_24h': fields.Float,
    'price_change_24h': fields.Float,
    'price_change_percentage_24h': fields.Float,
    'market_cap_change_24h': fields.Float,
    'market_cap_change_percentage_24h': fields.Float,
    'circulating_supply': fields.Float,
    'total_supply': fields.Float,
    'max_supply': fields.Float,
    'ath': fields.Float,
    'ath_change_percentage': fields.Float,
    'atl': fields.Float,
    'atl_change_percentage': fields.Float
}

class ExchangeResource(Resource):
    @marshal_with(exchange_fields)
    def get(self, exchange_id=None):
        if exchange_id:
            return Exchange.query.get_or_404(exchange_id)
        return Exchange.query.all()

    @marshal_with(exchange_fields)
    def post(self):
        data = reqparse.RequestParser().parse_args()
        exchange = Exchange(**data)
        db.session.add(exchange)
        db.session.commit()
        return exchange, 201

    def delete(self, exchange_id):
        exchange = Exchange.query.get_or_404(exchange_id)
        db.session.delete(exchange)
        db.session.commit()
        return '', 204

class CryptocurrencyResource(Resource):
    @marshal_with(crypto_fields)
    def get(self, crypto_id=None):
        if crypto_id:
            return Cryptocurrency.query.get_or_404(crypto_id)
        return Cryptocurrency.query.all()

    @marshal_with(crypto_fields)
    def post(self):
        data = reqparse.RequestParser().parse_args()
        crypto = Cryptocurrency(**data)
        db.session.add(crypto)
        db.session.commit()
        return crypto, 201

    def delete(self, crypto_id):
        crypto = Cryptocurrency.query.get_or_404(crypto_id)
        db.session.delete(crypto)
        db.session.commit()
        return '', 204
    

class TestResource(Resource):
    def get(self):
        return {"message": "API is working!"}
    
    
class ExchangeResource(Resource):
    @marshal_with(exchange_fields)
    def get(self, exchange_id=None):
        print(f"Getting exchange data. ID: {exchange_id}")  # Debug print
        if exchange_id:
            return Exchange.query.get_or_404(exchange_id)
        return Exchange.query.all()



def initialize_routes(api):
    # Add root endpoint
    api.add_resource(RootResource, '/')
    
    # Add test endpoint
    api.add_resource(TestResource, '/test')
    
    # Your existing routes
    api.add_resource(ExchangeResource, '/api/exchanges', '/api/exchanges/<string:exchange_id>')
    api.add_resource(CryptocurrencyResource, '/api/coins', '/api/coins/<string:crypto_id>')