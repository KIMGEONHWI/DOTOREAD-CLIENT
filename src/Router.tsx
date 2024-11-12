import Login from './Login';
import MainPage from './MainPage';
import OnBoardingPage from './OnBoardingPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/main',
		element: <MainPage />,
	},
	{
		path: '/',
		element: <OnBoardingPage />,
	},
]);
