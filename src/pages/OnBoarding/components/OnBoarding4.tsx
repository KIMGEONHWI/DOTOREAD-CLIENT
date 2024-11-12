import styled from 'styled-components';

const OnBoarding4 = () => {
	return <OnBoarding4Wrapper></OnBoarding4Wrapper>;
};

export default OnBoarding4;

const OnBoarding4Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.background};
	z-index: -1;
`;
