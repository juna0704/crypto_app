import React, { useState, useEffect } from 'react';
import { Container, HStack, Text } from '@chakra-ui/react';
import axios from 'axios';
import Loader from './Loader';
import CoinCard from './CoinCard';

const Coins = () => {
	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCoins = async () => {
			try {
				const { data } = await axios.get('http://localhost:5000/api/coins');
				setCoins(data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching Coins:', error);
				setError(error.message);
				setLoading(false);
			}
		};

		fetchCoins();
	}, []);

	if (error)
		return (
			<Container maxW={'container.xl'}>
				<Text>{error}</Text>
			</Container>
		);

	return (
		<Container maxW={'container.xl'}>
			{loading ? (
				<Loader />
			) : (
				<HStack wrap={'wrap'} spacing={4} justify={'center'}>
					{coins && coins.length > 0 ? (
						coins.map((coins) => (
							<CoinCard
								id={coins.id}
								key={coins.id}
								name={coins.name}
								symbol={coins.symbol}
								img={coins.image}
								price={coins.current_price}
								rank={coins.market_cap_rank}
							/>
						))
					) : (
						<Text>No Coins found</Text>
					)}
				</HStack>
			)}
		</Container>
	);
};

export default Coins;
