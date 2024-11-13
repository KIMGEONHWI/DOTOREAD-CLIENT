import Login from './Login';
import AiClassificationPage from './components/AiClassification/AiClassificationPage';
import BookMarkPage from './pages/BookMark/BookMarkPage';
import OnBoardingPage from './pages/OnBoarding/OnBoardingPage';
import OnBoardingStartPage from './pages/OnBoarding/OnBoardingStartPage';
import Roots from '@/Roots';
import MainPage from '@/pages/Main/MainPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		element: <Roots />,
		children: [
			{
				path: '/',
				element: <OnBoardingPage />,
			},
			{
				path: '/start',
				element: <OnBoardingStartPage />,
			},
			{
				path: '/main',
				element: <MainPage />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/bookmark',
				element: <BookMarkPage />,
			},
			{
				path: '/ai',
				element: <AiClassificationPage />,
			},
		],
	},
]);
