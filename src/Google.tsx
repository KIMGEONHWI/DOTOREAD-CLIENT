import React, { useEffect, useState } from 'react';

const Google = () => {
	const [error, setError] = useState<unknown | null>(null);

	useEffect(() => {
		//현재 url 에서 인가 코드 추출
		const url = new URLSearchParams(window.location.search);
		const authorizationCode = url.get('code');

		if (authorizationCode) {
			sendCodeToBackend(authorizationCode);
		} else {
			console.log('인가 코드 받지 못했습니다');
		}
	}, []);
	//unknown 타입은 해당 타입을 검증하거나 확정해야 함
	const sendCodeToBackend = async (authorizationcode: string) => {
		try {
			const response = await fetch('', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ authorizationcode }),
			});
			const data = await response.json();
			if (response.ok) {
				console.log('엑세스 토큰', data.access_token);
				console.log('리프레시 토큰', data.refresh_token);
			} else {
				throw new Error(data.message);
			}
		} catch (e) {
			if (e instanceof Error) {
				setError(e.message);
				console.log(e);
			} else {
				console.log(e);
			}
		}
	};
	return <div>Google</div>;
};

export default Google;
