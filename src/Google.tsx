import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Google = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const url = new URLSearchParams(window.location.search);
		const isSuccess = url.get('isSuccess');
		const message = url.get('message');

		if (isSuccess === 'true') {
			alert('로그인 성공: ' + message);
		} else {
			alert('로그인 실패: ' + message);
			navigate('/login');
		}
	}, [navigate]);

	return <div>Google</div>;
};

export default Google;
