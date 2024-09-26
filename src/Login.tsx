import { useState } from 'react';

// 로그인 버튼 누를때 내 애플리케이션 고유 식별자인 CLIENT_ID와 기타 정보를 담아 Google OAuth 인가 URL을 만든다.
// 인가 코드 받으면 기존 /login/google Google컴포로 redirect
// 백에게 인가 코드 보내주기
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const AUTHORIZE_URI = import.meta.env.VITE_GOOGLE_AUTHORIZE_URI; // 구글 서버 인증 주소
//여기 const REDIRECT_URI = `${window.location.origin}`; 하면 redirec_uri 에러뜨던데 이유가 뭘까
const REDIRECT_URI = `${window.location.origin}/login/google`;

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
