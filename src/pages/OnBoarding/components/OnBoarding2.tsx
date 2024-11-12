import styled from 'styled-components';

const OnBoarding2 = () => {
	return <OnBoarding2Wrapper></OnBoarding2Wrapper>;
};

export default OnBoarding2;

const OnBoarding2Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.background};
	z-index: -1;
`;
