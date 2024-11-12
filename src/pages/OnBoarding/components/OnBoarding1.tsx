import BackgroundImage from '@/assets/OnBoardingBackground.svg?react';
import styled from 'styled-components';

const OnBoarding1 = () => {
	return <OnBoarding1Wrapper></OnBoarding1Wrapper>;
};
export default OnBoarding1;

const OnBoarding1Wrapper = styled(BackgroundImage)`
	display: flex;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	background: lightgray 50%;
`;
