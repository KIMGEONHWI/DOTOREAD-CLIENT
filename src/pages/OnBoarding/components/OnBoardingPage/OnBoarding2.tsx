import OnBoarding2center from '@/assets/OnBoarding2-center.svg?react';
import OnBoarding2left from '@/assets/OnBoarding2-left.svg?react';
import OnBoarding2right from '@/assets/OnBoarding2-right.svg?react';
import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';

const OnBoarding2 = () => {
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
		<OnBoarding2Wrapper>
			<Description>
				<TextTitle isVisible={scrollY > 100}>북마크 정리에서 자유로워지세요</TextTitle>
				<SubDescription isVisible={scrollY > 300}>
					간편한 수동 분류와 AI 기반 자동 분류를 통해 원하는 방식으로
					<br />
					북마크를 자유롭게 구성할 수 있습니다.
				</SubDescription>
				<Wrapper>
					<OnBoarding2Left isVisible={scrollY > 500} />
					<OnBoarding2Right isVisible={scrollY > 700} />
					<Center isVisible={scrollY > 900}>
						<OnBoarding2center />
					</Center>
				</Wrapper>
			</Description>
		</OnBoarding2Wrapper>
	);
};

export default OnBoarding2;

const fadeInAnimation = css`
	opacity: 1;
	transform: translateY(0);
`;

const OnBoarding2Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.background};
`;

const Description = styled.div`
	position: absolute;
	width: 100vw;
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

	opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out 0.2s;

	${({ isVisible }) => isVisible && fadeInAnimation};
`;

const Wrapper = styled.div`
	top: 10.8rem;
	position: relative;
	display: flex;
	gap: 8rem;
	height: 100%;
`;

const OnBoarding2Left = styled(OnBoarding2left)<{ isVisible: boolean }>`
	opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out 0.4s;

	${({ isVisible }) => isVisible && fadeInAnimation};
`;

const OnBoarding2Right = styled(OnBoarding2right)<{ isVisible: boolean }>`
	opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out 0.6s;

	${({ isVisible }) => isVisible && fadeInAnimation};
`;

const Center = styled.div<{ isVisible: boolean }>`
	position: absolute;
	top: 29.7rem;
	left: 61.0004rem;

	opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out 0.8s;

	${({ isVisible }) => isVisible && fadeInAnimation};
`;
