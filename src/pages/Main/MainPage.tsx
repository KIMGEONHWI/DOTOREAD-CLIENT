import CarouselWrapper from './components/Carouselwrapper';
import CircleGraph from './components/CircleGraph';
import MainScore from './components/MainScore';
import MainTitle from './components/MainTitle';
import { SCORE } from '@/constants/Score';
import styled from 'styled-components';

const MainPage = () => {
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
	position: relative; /* position을 relative 또는 다른 값으로 설정 */
	z-index: -10;
	padding-bottom: 11.9rem;
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
`;
