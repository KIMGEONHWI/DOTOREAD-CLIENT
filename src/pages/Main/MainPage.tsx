import CarouselWrapper from './components/CarouselWrapper';
import CircleGraph from './components/CircleGraph';
import MainScore from './components/MainScore';
import MainTitle from './components/MainTitle';
import { SCORE } from '@/constants/Score';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const MainPage = () => {
	const location = useLocation();
	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		if (queryParams.get('loggedIn') === 'true') {
			handlePostLogin();
		} else {
			console.log('로그인 파라미터가 false 또는 없음');
		}
	}, [location]);

	const handlePostLogin = async () => {
		try {
			const response = await fetch(`${BASE_URL}/login-check`, {
				method: 'GET',
				credentials: 'include',
			});
			const loginData = await response.json();
			const accessToken = loginData.result.accessToken;
			localStorage.setItem('access-token', accessToken);
			console.log('Access token 저장 성공');
		} catch (error) {
			console.error('handlePostLogin 중 오류 발생:', error);
		}
	};
	return (
		<MainPageWrapper>
			<MainPageBanner>
				<MainTitle />
				<CircleGraph />
				<MainScoreBox>
					{SCORE.map(({ id, score, text }) => (
						<MainScore key={id} score={score} text={text} />
					))}
				</MainScoreBox>
			</MainPageBanner>
			<ArticleDashboard>
				<CarouselWrapper />
			</ArticleDashboard>
		</MainPageWrapper>
	);
};

export default MainPage;

const MainPageWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.background};
	position: relative;
	z-index: 0;
`;

const MainPageBanner = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 27.5rem;
	padding: 2.488rem 29.6rem;
	gap: 9.7rem;
`;

const MainScoreBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 11rem;
	gap: 1.154rem;
`;

const ArticleDashboard = styled.div`
	margin-top: 10.9rem;
	background: linear-gradient(0deg, #efefef -9.72%, #6d6d6d 22.83%, #343434 79.73%, #000 100%);
	position: relative;
	z-index: -10;
	padding-bottom: 11.9rem;
`;
