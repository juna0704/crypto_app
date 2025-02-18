// import './style/App.css';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import CoinDetails from './components/CoinDetails';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/coins' element={<Coins />} />
					<Route path='/exchanges' element={<Exchanges />} />
					<Route path='/coins/:id' element={<CoinDetails />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
