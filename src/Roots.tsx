import Header from './components/common/Header/Header';
import SideBar from './components/common/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

//function 으로 하는 이유? outlet 기능
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
