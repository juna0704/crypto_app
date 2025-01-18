import React from 'react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa6';

const ColorModeSwitcher = () => {
	const { toggleColorMode } = useColorMode();
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	return (
		<IconButton
			variant='ghost'
			color='current'
			onClick={toggleColorMode}
			icon={<SwitchIcon size={20} />}
			aria-label='Toggle color mode'
			className='rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800'
			title={useColorModeValue('Switch to dark mode', 'Switch to light mode')}
		/>
	);
};

export default ColorModeSwitcher;
