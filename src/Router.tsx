import Roots from '@/Roots';
import HomePage from '@/pages/Home/HomePage';
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
