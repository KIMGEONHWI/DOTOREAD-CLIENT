import { useState } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL;
// 로그인 버튼 누를때 내 애플리케이션 고유 식별자인 CLIENT_ID ,REDIRECT_URI 등의 기타 정보를 담아 Google OAuth 인가 URL을 만든다.
// 로그인 완료되면 /login/google Google컴포로 redirect
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const AUTHORIZE_URI = import.meta.env.VITE_GOOGLE_AUTHORIZE_URI;
const REDIRECT_URI = `${BASE_URL}/login/google`;

const Login = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<unknown>(null);
	const createGoogleAuthUrl = () => {
		//js 내장객체 URLSearchParams를 이용해 쿼리 문자열을 생성후
		//구글 서버 인증 주소 뒤에 추가해 google OAuth 인가 URL을 만든다.
		const params = new URLSearchParams({
			client_id: CLIENT_ID,
			redirect_uri: REDIRECT_URI,
			response_type: 'code',
			scope: 'openid email profile',
			access_type: 'offline',
			prompt: 'consent',
		});
		return `${AUTHORIZE_URI}?${params.toString()}`;
	};
	const handleClick = async () => {
		try {
			setLoading(true);
			const googleLoginUrl = createGoogleAuthUrl();
			window.location.href = googleLoginUrl;
		} catch (e) {
			setError(e);
			console.log('구글 인가 url로 이동 안됨', e);
		}
	};
	const buttonStyle = {
		width: '20rem',
	};
	return (
		<>
			<button onClick={handleClick} style={buttonStyle} type="button">
				구글로 시작하기
			</button>
		</>
	);
};

export default Login;
