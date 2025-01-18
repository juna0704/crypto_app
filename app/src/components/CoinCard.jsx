import React from 'react';
import { VStack, Image, Text, Link } from '@chakra-ui/react';

const CoinCard = ({
	id,
	name,
	img,
	price,
	symbol,
	rank,
	currencySymbol = '₹',
}) => {
	return (
		<Link
			to={`/conis/${id}`}
			textDecoration='none'
			_hover={{ transform: 'scale(1.1)' }}
		>
			<VStack
				w={'52'}
				shadow={'lg'}
				p={'8'}
				borderRadius={'lg'}
				transition={'all 0.3s'}
				m={'4'}
				css={{
					'&:hover': {
						transform: 'scale(1.1)',
					},
				}}
			>
				<Image
					src={img}
					w={'10'}
					h={'10'}
					objectFit={'contain'}
					alt={'Exchange'}
				/>
				<Text textAlign='center' noOfLines={1}>
					{name}
				</Text>
				<Text noOfLines={1}>Symbol: {symbol}</Text>
				<Text noOfLines={1}>Rank: {rank}</Text>
				<Text textAlign='center' noOfLines={1}>
					Price: {price ? `${currencySymbol} ${price}` : 'NA'}
				</Text>
			</VStack>
		</Link>
	);
};

export default CoinCard;
