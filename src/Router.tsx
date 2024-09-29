import Roots from '@/Roots';
import HomePage from '@/pages/Main/MainPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '',
		element: <Roots />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
		],
	},
]);
