import Header from './components/common/Header/Header';
import SideBar from './components/common/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

function Roots() {
	return (
		<>
			<SideBar />
			<Header />

			<Outlet />
		</>
	);
}

export default Roots;
