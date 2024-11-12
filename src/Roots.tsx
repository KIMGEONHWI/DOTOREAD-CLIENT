import Header from './components/common/Header/Header';
import SideBar from './components/common/SideBar/SideBar';
import { Outlet, useLocation } from 'react-router-dom';

function Roots() {
	const location = useLocation();

	// 온보딩 페이지일땐 Sidebar Header렌더링 안되게
	const isOnBoardingPage = location.pathname === '/';

	// 스타트 페이지일때도

	const isOnBoardingStartPage = location.pathname === '/start';
	return (
		<>
			{!isOnBoardingPage && !isOnBoardingStartPage && <SideBar />}
			{!isOnBoardingPage && !isOnBoardingStartPage && <Header />}
			<Outlet />
		</>
	);
}

export default Roots;
