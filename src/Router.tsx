import Google from './Google';
import Login from './Login';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/login',
		children: [
			{ path: '', element: <Login /> },
			{ path: 'google', element: <Google /> },
		],
	},
	//   {
	//     path: "/2",
	//     element: <Page2 />,
	//   },
	//   {
	//     path: "/3",
	//     element: <Page3 />,
	//   },
]);
