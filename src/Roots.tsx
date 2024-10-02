import Header from './components/common/Header/Header';
import SideBar from './components/common/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

function Roots() {
	return (
		<>
			<Header />
			<SideBar />
			<Outlet />
		</>
	);
}

export default Roots;
