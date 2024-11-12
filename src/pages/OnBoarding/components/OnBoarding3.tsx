import styled from 'styled-components';

const OnBoarding3 = () => {
	return <OnBoarding3Wrapper></OnBoarding3Wrapper>;
};

export default OnBoarding3;

const OnBoarding3Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.background};
	z-index: -1;
`;
