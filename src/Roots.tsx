import Header from './components/common/Header/Header';
import { Outlet } from 'react-router-dom';

function Roots() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default Roots;
