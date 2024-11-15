import BackgroundImage from '@/assets/OnBoarding1Background.svg?react';
import styled from 'styled-components';

const OnBoarding1 = () => {
	return <OnBoarding1Wrapper></OnBoarding1Wrapper>;
};
export default OnBoarding1;

const OnBoarding1Wrapper = styled(BackgroundImage)`
	display: flex;
	width: 100%;
	height: 100vh;
	background-size: cover;
	background-position: center;
`;
