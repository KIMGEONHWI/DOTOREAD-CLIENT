import Login from './Login';
import MainPage from './MainPage';
import OnBoardingPage from './OnBoardingPage';
import AiClassificationPage from './components/AiClassification/AiClassificationPage';
import BookMarkPage from './pages/BookMark/BookMarkPage';
import Roots from '@/Roots';
import MainPage from '@/pages/Main/MainPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([

		path: '',
		element: <Roots />,
		children: [
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
