import AiClassificationPage from './components/AiClassification/AiClassificationPage';
import BookMarkPage from './pages/BookMark/BookMarkPage';
import OnBoardingPage from './pages/OnBoarding/OnBoardingPage';
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
				element: <OnBoardingPage />,
			},
			{
				path: '/main',
				element: <MainPage />,
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
