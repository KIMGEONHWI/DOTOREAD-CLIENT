import Default from '@/components/common/BookMarkList/Default';
import styled from 'styled-components';

function MainPage() {
	return (
		<MainPageWrapper>
			<Default message={'북마크'} />
		</MainPageWrapper>
	);
}

export default MainPage;

const MainPageWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	max-width: 100vw;
	height: 100vh;
`;
