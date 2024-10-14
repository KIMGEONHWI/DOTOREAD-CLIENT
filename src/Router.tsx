import BookMarkPage from './pages/BookMark/BookMarkPage';
import Roots from '@/Roots';
import MainPage from '@/pages/Main/MainPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '',
		element: <Roots />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/bookmark',
				element: <BookMarkPage />,
			},
		],
	},
]);
