const GOOGLE_URL = import.meta.env.VITE_GOOGLE_URL;
// const BASE_URL = import.meta.env.VITE_BASE_URL;
const Login = () => {
	const handleClick = () => {
		window.location.href = `${GOOGLE_URL}`;
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
