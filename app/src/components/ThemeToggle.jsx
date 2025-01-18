import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
// import { Switch } from '@/components/ui/switch';
// import { Card, CardContent } from '@/components/ui/card';
import '@/style/ThemeToggle.css';

const ThemeToggle = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.classList.toggle('dark', savedTheme === 'dark');
		} else {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
			setTheme(prefersDark ? 'dark' : 'light');
			document.documentElement.classList.toggle('dark', prefersDark);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.classList.toggle('dark');
	};

	return (
		<Button
			variant='outline'
			size='sm'
			onClick={toggleTheme}
			className='gap-2'
			backgroundColor='grey'
			position={'fixed'}
			top={'4'}
			right={'4'}
			bg={'bg.emphasized'}
			borderRadius={'full'}
		>
			{theme === 'light' ? (
				<>
					<FaMoon />
				</>
			) : (
				<>
					<FaSun />
				</>
			)}
		</Button>
	);
};

export default ThemeToggle;
