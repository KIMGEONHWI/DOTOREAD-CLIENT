import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GOOGLE_URL = import.meta.env.VITE_GOOGLE_URL;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Login = () => {
	const location = useLocation();
	const handleClick = () => {
		// 구글 로그인 페이지로 리다이렉트
		window.location.href = `${GOOGLE_URL}`;
	};

	// 로그인 마치고 http:/localhost:5173?loggedIN=true로 오면
	useEffect(() => {
		console.log('Login 컴포넌트 렌더링됨');
		console.log('location 객체:', location); // location 객체 로그
		console.log('location.search:', location.search); // 현재 검색 문자열 로그

		const queryParams = new URLSearchParams(location.search);
		console.log('쿼리 파라미터:', queryParams.toString());

		if (queryParams.get('loggedIn') === 'true') {
			console.log('로그인 파라미터가 true임, handlePostLogin 호출');
			handlePostLogin(); // 로그인 후 처리 호출
		} else {
			console.log('로그인 파라미터가 false 또는 없음');
		}
	}, [location.search]);

	const handlePostLogin = async () => {
		console.log('handlePostLogin 호출됨');
		try {
			const response = await fetch(`${BASE_URL}/login`, {
				method: 'GET',
				credentials: 'include', // 쿠키 받아오기
			});

			if (!response.ok) {
				throw new Error(`요청 실패: ${response.status} ${response.statusText}`);
			}

			// 헤더에서 accessToken 가져오기
			const accessToken = response.headers.get('access');
			// 쿠키에서 refreshToken 가져오기
			const refreshToken = getCookie('refresh');

			if (!accessToken || !refreshToken) {
				throw new Error('토큰을 찾을 수 없습니다.');
			}

			// accessToken을 로컬 스토리지에 저장
			localStorage.setItem('accessToken', accessToken);
			localStorage.setItem('refreshToken', refreshToken);

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

	return (
		<>
			<button onClick={handleClick} type="button">
				구글로 시작하기
			</button>
		</>
	);
};

export default Login;
