const GOOGLE_URL = import.meta.env.VITE_GOOGLE_URL;
const Login = () => {
	const handleClick = () => {
		window.location.href = `${GOOGLE_URL}`;
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
