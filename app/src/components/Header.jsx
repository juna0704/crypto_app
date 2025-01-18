import React from 'react';
import { Link } from 'react-router-dom';
import { HStack, Button } from '@chakra-ui/react';

const Header = () => {
	return (
		<>
			<HStack p={'4'} shadow={'base'} backgroundColor={'grey'}>
				<Button variant={'unstyled'}>
					<Link to={'/'}>Home</Link>
				</Button>
				<Button variant={'unstyled'}>
					<Link to={'/coins'}>Coins</Link>
				</Button>
				<Button variant={'unstyled'}>
					<Link to={'/exchanges'}>Exchanges</Link>
				</Button>
				<Button variant={'unstyled'}>
					<Link to={'/coin/:id'}>CoinDetails</Link>
				</Button>
			</HStack>
		</>
	);
};
export default Header;
