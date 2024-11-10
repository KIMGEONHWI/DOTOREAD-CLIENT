import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const MainPage = () => {
	const location = useLocation();

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		if (queryParams.get('loggedIn') === 'true') {
			handlePostLogin();
		} else {
			console.log('로그인 파라미터가 false 또는 없음');
		}
	}, [location]);

	const handlePostLogin = async () => {
		try {
			const response = await fetch(`${BASE_URL}/login-check`, {
				method: 'GET',
				credentials: 'include',
			});
			const loginData = await response.json();
			const accessToken = loginData.result.accessToken;
			localStorage.setItem('access-token', accessToken);
			console.log('Access token 저장 성공');
		} catch (error) {
			console.error('handlePostLogin 중 오류 발생:', error);
		}
	};

	return <div>MainPage</div>;
};

export default MainPage;
