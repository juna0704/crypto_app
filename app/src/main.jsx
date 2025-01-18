import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from '@/components/ui/provider';
import ThemeToggle from './components/ThemeToggle';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const render = () => {
	root.render(
		<StrictMode>
			<Provider>
				<ThemeToggle />
				<App />
			</Provider>
		</StrictMode>
	);
};

render();

// HMR Support
if (import.meta.hot) {
	import.meta.hot.accept('./App', () => {
		render();
	});
}

export const server = 'https://api.coingecko.com/api/v3';
