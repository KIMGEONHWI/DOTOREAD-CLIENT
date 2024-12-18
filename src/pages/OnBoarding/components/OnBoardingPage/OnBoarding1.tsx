import BackgroundImage from '@/assets/Onboard1backgroudn.svg?react';
import styled, { keyframes }  from 'styled-components';
import Arrow from '@/assets/ArrowDown.svg?react'

const OnBoarding1 = () => {
	return (
		<OnBoarding1Wrapper>
			<Background />
			<Title>언제든 맛있게 꺼내먹는<br/>
			Read It Later 서비스</Title>
			<Wrapper>
				<Arrow/>
			</Wrapper>
		</OnBoarding1Wrapper>
	);
};

export default OnBoarding1;

const OnBoarding1Wrapper = styled.div`
	position: relative; 
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content:center;
`;

const Background = styled(BackgroundImage)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const Title = styled.div`
	position: relative; 
	z-index: 10; 
	${({ theme }) => theme.fonts.Pretendard_Bold_88px};
	color: ${({ theme }) => theme.colors.white1};
	top: 74.1rem;

`;

const bounceAnimation = keyframes`
	0%, 100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(15px);
	}
`;

const Wrapper = styled.div`
	position: absolute;
	top: 94.2rem;
	display: flex;
	justify-content: center;

	/* 애니메이션 적용 */
	animation: ${bounceAnimation} 1.5s infinite ease-in-out;
`;
