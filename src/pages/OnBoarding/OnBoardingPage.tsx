import styled from 'styled-components';

const OnBoardingPage = () => {
	return (
		<OnBoardingPageWrapper>
			<Header></Header>
		</OnBoardingPageWrapper>
	);
};
export default OnBoardingPage;

const OnBoardingPageWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.background};
`;
const Header = styled.header``;
