import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const Login = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		window.location.href = `${BASE_URL}/login`;
	};
	
	// const handleClick = () => {
	// 	window.location.href = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?prompt=consent&response_type=code&client_id=760014069340-7d96as1ltt1d9qp4hfp0icujl6n94q9s.apps.googleusercontent.com&scope=profile%20email&state=14Aj1HNPWqs7KRuhG6l3XLj2dRvwO92SYOVzCLMNQxg%3D&redirect_uri=https%3A%2F%2Fapi.dotoread.shop%2Flogin%2Foauth2%2Fcode%2Fgoogle&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow`;
	// };


	const handleLogin = async () => {
		try {
			const response = await fetch(`${BASE_URL}/login/oauth1/code/google`, {
				method: 'GET',
			});
			const data = await response.json();
			if (data.isSuccess) {
				alert('로그인 성공' + data.message);
				navigate('/');
			} else {
				alert('로그인 실패' + data.message);
				navigate(`${BASE_URL}/login`);
			}
		} catch (error) {
			console.error('로그인 중 에러 발생', error);
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
