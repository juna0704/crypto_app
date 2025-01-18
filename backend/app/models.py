from datetime import datetime
from app import db

class Exchange(db.Model):
    __tablename__ = 'exchanges'
    
    id = db.Column(db.String(50), primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    year_established = db.Column(db.Integer)
    country = db.Column(db.String(100))
    description = db.Column(db.Text)
    url = db.Column(db.String(200))
    image = db.Column(db.String(200))
    has_trading_incentive = db.Column(db.Boolean, default=False)
    trust_score = db.Column(db.Integer)
    trust_score_rank = db.Column(db.Integer)
    trade_volume_24h_btc = db.Column(db.Float)
    trade_volume_24h_btc_normalized = db.Column(db.Float)
    
    def __repr__(self):
        return f'<Exchange {self.name}>'

class Cryptocurrency(db.Model):
    __tablename__ = 'cryptocurrencies'
    
    id = db.Column(db.String(50), primary_key=True)
    symbol = db.Column(db.String(10), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    image = db.Column(db.String(200))
    current_price = db.Column(db.Float)
    market_cap = db.Column(db.BigInteger)
    market_cap_rank = db.Column(db.Integer)
    fully_diluted_valuation = db.Column(db.BigInteger)
    total_volume = db.Column(db.BigInteger)
    high_24h = db.Column(db.Float)
    low_24h = db.Column(db.Float)
    price_change_24h = db.Column(db.Float)
    price_change_percentage_24h = db.Column(db.Float)
    market_cap_change_24h = db.Column(db.Float)
    market_cap_change_percentage_24h = db.Column(db.Float)
    circulating_supply = db.Column(db.Float)
    total_supply = db.Column(db.Float)
    max_supply = db.Column(db.Float)
    ath = db.Column(db.Float)
    ath_change_percentage = db.Column(db.Float)
    ath_date = db.Column(db.DateTime)
    atl = db.Column(db.Float)
    atl_change_percentage = db.Column(db.Float)
    atl_date = db.Column(db.DateTime)
    last_updated = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __repr__(self):
        return f'<Cryptocurrency {self.name}>'
    

def import_sample_data():
    # Sample exchange data
    exchange = Exchange(
        id="binance",
        name="Binance",
        country="Cayman Islands",
        year_established=2017
    )
    
    # Sample cryptocurrency data
    crypto = Cryptocurrency(
        id="bitcoin",
        symbol="btc",
        name="Bitcoin"
    )
    
    # Add to database
    db.session.merge(exchange)
    db.session.merge(crypto)
    db.session.commit()