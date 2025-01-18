import React from 'react';
import { VStack, Image, Text, Link } from '@chakra-ui/react';

const ExchangeCard = ({ name, img, url, rank, year, country }) => {
	return (
		<Link
			href={url}
			target='_blank'
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
				<Text noOfLines={1}>Rank: {rank}</Text>
				<Text fontSize='xs' textAlign='center' noOfLines={1}>
					Country: {country ? `${country}` : 'NA'}
				</Text>
				<Text fontSize='xs' noOfLines={1}>
					Year: {year}
				</Text>
			</VStack>
		</Link>
	);
};

export default ExchangeCard;
