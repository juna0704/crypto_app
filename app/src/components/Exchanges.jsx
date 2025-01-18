import React, { useState, useEffect } from 'react';
import { Container, HStack, Text } from '@chakra-ui/react';
import axios from 'axios';
import Loader from './Loader';
import ExchangeCard from './ExchangeCard';

const Exchanges = () => {
	const [exchanges, setExchanges] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchExchanges = async () => {
			try {
				const { data } = await axios.get('http://localhost:5000/api/exchanges');
				setExchanges(data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching exchanges:', error);
				setError(error.message);
				setLoading(false);
			}
		};

		fetchExchanges();
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
					{exchanges && exchanges.length > 0 ? (
						exchanges.map((exchange) => (
							<ExchangeCard
								key={exchange.id}
								name={exchange.name}
								img={exchange.image}
								url={exchange.url}
								rank={exchange.trust_score_rank}
								year={exchange.year_established}
								country={exchange.country}
							/>
						))
					) : (
						<Text>No exchanges found</Text>
					)}
				</HStack>
			)}
		</Container>
	);
};

export default Exchanges;
