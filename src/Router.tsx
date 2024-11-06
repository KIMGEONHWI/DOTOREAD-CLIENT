import Login from './Login';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/login',
		children: [{ path: '', element: <Login /> }],
	},
	//   {
	//     path: "/1",
	//     element: <Page1 />,
	//   },
	//   {
	//     path: "/3",
	//     element: <Page3 />,
	//   },
]);
