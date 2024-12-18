import OnBoarding4footer from '@/assets/OnBoarding4footer.svg?react';
import styled, { css }  from 'styled-components';
import { useEffect, useState } from 'react';
import OnBoardleft from '@/assets/Onboarding4-1.svg?react'
import OnBoardrightTop from '@/assets/Onboarding4-11.svg?react'
import OnBoard4rightBottom from '@/assets/Onboarding4-2.svg?react'

const OnBoarding4 = () => {
	const [scrollY, setScrollY] = useState(0);

	// 스크롤 위치 감지
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<OnBoarding4Wrapper>
			<Description>
				<TextTitle isVisible={scrollY > 2700}>북마크를 공유하고 도토리를 기부하세요</TextTitle>
				<SubDescription  isVisible={scrollY > 2900}>
					사용자는 유용한 북마크를 다른 사람들과 공유하고
					<br />
					다른 사용자들이 올린 북마크를 가져올 수 있습니다.
					<br />
					활동을 통해 모은 도토리는 동물 보호 단체에 기부할 수 있습니다.
				</SubDescription>
				<Left isVisible={scrollY > 3100}>
					<OnBoardleft/>
				</Left>
				<RightTop  isVisible={scrollY > 3200}>
					<OnBoardrightTop/>
				</RightTop>
				<RightBottom  isVisible={scrollY > 3300}>
					<OnBoard4rightBottom/>
				</RightBottom>
				<Wrapper>
					<OnBoarding4footer />
				</Wrapper>
			</Description>
		</OnBoarding4Wrapper>
	);
};

export default OnBoarding4;

const fadeInAnimation = css`
	opacity: 1;
	transform: translateY(0);
`;

const OnBoarding4Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.background};
`;
const Description = styled.div`
	width: 100vw;
	position: absolute;
	top: 25.3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const TextTitle = styled.div<{ isVisible: boolean }>`
	${({ theme }) => theme.fonts.Pretendard_Semibold_45px};
	color: ${({ theme }) => theme.colors.orange1};
	text-align: center;
	margin-bottom: 3.9rem;

	opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out;

	${({ isVisible }) => isVisible && fadeInAnimation};
`;

const SubDescription = styled.div<{ isVisible: boolean }>`
	${({ theme }) => theme.fonts.Pretendard_Semibold_25px};
	color: ${({ theme }) => theme.colors.white1};
	text-align: center;
	margin-bottom: 6.8rem;

	opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out;

	${({ isVisible }) => isVisible && fadeInAnimation};
`;

const Wrapper = styled.div`
	width: 100vw;
	display :flex;
	justify-content: center;
	padding-bottom : 6.462rem;
	position : absolute;
	top : 80rem;
	background-color: ${({ theme }) => theme.colors.background};
`;
const Left=styled.div<{ isVisible: boolean }>`
position : absolute;
top : 21.8rem;
left: 30.9rem;

opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out;

	${({ isVisible }) => isVisible && fadeInAnimation};
`
const RightBottom=styled.div<{ isVisible: boolean }>`
position : absolute;
top : 45.751rem;
right: 41.564rem;

opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out;

	${({ isVisible }) => isVisible && fadeInAnimation};
`
const RightTop=styled.div<{ isVisible: boolean }>`
position : absolute;
top : 24.9rem;
right: 30.834rem;

opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out;

	${({ isVisible }) => isVisible && fadeInAnimation};
`