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
		</MainPageWrapper>
	);
};

export default MainPage;

const MainPageWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.background};
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
