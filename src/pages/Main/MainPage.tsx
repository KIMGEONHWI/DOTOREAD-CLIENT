import Navbar from '@/components/common/BookMarkList/Navbar';
import styled from 'styled-components';

function MainPage() {
	return (
		<MainPageWrapper>
			<Navbar />
		</MainPageWrapper>
	);
}

export default MainPage;

const MainPageWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	max-width: 100vw;
	height: 100vh;
`;
