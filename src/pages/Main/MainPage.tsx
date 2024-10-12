import styled from 'styled-components';

function MainPage() {
	return <MainPageWrapper></MainPageWrapper>;
}

export default MainPage;

const MainPageWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	max-width: 100vw;
	height: 100vh;
`;
