import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const MainPage = () => {
	const location = useLocation();
	// 로그인 마치고 http:/localhost:5173?loggedIN=true로 왔는지 확인
	useEffect(() => {
		console.log('location.search:', location.search); // 현재 검색 문자열 로그

		const queryParams = new URLSearchParams(location.search);
		console.log('쿼리 파라미터:', queryParams.toString());

		if (queryParams.get('loggedIn') === 'true') {
			console.log('로그인 파라미터가 true임, handlePostLogin 호출');
			handlePostLogin(); // 로그인 후 처리 호출
		} else {
			console.log('로그인 파라미터가 false 또는 없음');
		}
	}, [location]);

	const handlePostLogin = async () => {
		console.log('handlePostLogin 호출됨');
		try {
			// api 추가로 필요한가?
			const response = await fetch(`${BASE_URL}/login`, {
				method: 'GET',
				credentials: 'include', // 쿠키 받아오기
			});
			if (response.ok) {
				alert(response);
			}
			if (!response.ok) {
				alert('응답 안옴');
			}

			// 쿠키에서 refreshToken 가져오기
			const refreshToken = getCookie('refresh');
			const accessToken = getCookie('access');

			if (!accessToken || !refreshToken) {
				console.log('토근 없다');
			}
			if (accessToken && refreshToken) {
				// accessToken을 로컬 스토리지에 저장
				localStorage.setItem('accessToken', accessToken);
				localStorage.setItem('refreshToken', refreshToken);
			}

			console.log('토큰 저장 완료:', { accessToken, refreshToken });
		} catch (error) {
			console.error('handlePostLogin 중 오류 발생:', error);
		}
	};

	// 쿠키에서 특정 값을 가져오는 함수
	const getCookie = (name: string): string | undefined => {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop()?.split(';')?.[0];
	};

	return <div>MainPage</div>;
};

export default MainPage;
