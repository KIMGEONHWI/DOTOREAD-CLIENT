import CircleGraph from './components/CircleGraph';
import MainTitle from './components/MainTitle';
import styled from 'styled-components';

function MainPage() {
	return (
		<MainPageWrapper>
			<MainTitle />
			<CircleGraph />
		</MainPageWrapper>
	);
}

export default MainPage;

const MainPageWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	gap: 6.2rem;
	background-color: ${({ theme }) => theme.colors.background};
`;
