const GOOGLE_URL = import.meta.env.VITE_GOOGLE_URL;
const Login = () => {
	const handleClick = () => {
		// 구글 로그인 페이지로 리다이렉트
		window.location.href = `${GOOGLE_URL}`;

		// 로그인 마치고 백엔드에서 설정한
		//redirect uri http:/localhost:5173?loggedIN=true 로 이동
		//라우터 설정한 <MainPage/>컴포넌트 렌더링
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
