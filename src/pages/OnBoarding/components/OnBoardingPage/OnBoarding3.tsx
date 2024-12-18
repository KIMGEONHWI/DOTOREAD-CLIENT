import OnBoarding3center from '@/assets/OnBoard3.svg?react';
import styled, { css }  from 'styled-components';
import OnBoard1 from '@/assets/Onboard3-1.svg?react'
import OnBoard2 from '@/assets/Onboard3-2.svg?react'
import OnBoard3 from '@/assets/Onboard3-3.svg?react'
import OnBoard4 from '@/assets/Onboard3-4.svg?react'
import { useEffect, useState } from 'react';

const OnBoarding3 = () => {
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
		<OnBoarding3Wrapper>
			<Description>
				<TextTitle isVisible={scrollY > 1500}>읽지 않은 북마크를 정리하며 도토리를 얻으세요</TextTitle>
				<SubDescription  isVisible={scrollY > 1700}>
					도토릿은 사용자가 저장한 북마크를 실제로 읽도록 돕습니다.
					<br />
					읽지 않은 북마크를 확인하고 미션을 통해 도토리를 얻으세요.
				</SubDescription>
				<Wrapper>
					<CenterSvg isVisible={scrollY > 1900}>			
					<OnBoarding3center />
					</CenterSvg>
					<LeftTopSvg isVisible={scrollY > 2100}>
						<OnBoard1 />
					</LeftTopSvg>
					<LeftBottomSvg isVisible={scrollY > 2200}>
						<OnBoard2 />
					</LeftBottomSvg>
					<RightTopSvg isVisible={scrollY > 2000}>
						<OnBoard3 />
					</RightTopSvg>
					<RightBottomSvg isVisible={scrollY > 2300}>
						<OnBoard4 />
					</RightBottomSvg>
				</Wrapper>
			</Description>
		</OnBoarding3Wrapper>
	);
};

export default OnBoarding3;

const fadeInAnimation = css`
	opacity: 1;
	transform: translateY(0);
`;

const OnBoarding3Wrapper = styled.div`
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
const Wrapper=styled.div`
	position: relative;`

const CenterSvg=styled.div<{ isVisible: boolean }>`
	opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out 0.2s;

	${({ isVisible }) => isVisible && fadeInAnimation};
`

const SubDescription = styled.div<{ isVisible: boolean }>`
	${({ theme }) => theme.fonts.Pretendard_Semibold_25px};
	color: ${({ theme }) => theme.colors.white1};
	text-align: center;
	margin-bottom: 7.9rem;

	opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out 0.2s;

	${({ isVisible }) => isVisible && fadeInAnimation};
`;


const LeftTopSvg = styled.div<{ isVisible: boolean }>`
	position: absolute;
	top: 20rem;
	left: -16.7rem;

	opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out 0.4s;

	${({ isVisible }) => isVisible && fadeInAnimation};
`;

const RightTopSvg = styled.div<{ isVisible: boolean }>`
	position: absolute;
	top: 5.5rem;
	left : 74.9rem;

	opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out 0.4s;

	${({ isVisible }) => isVisible && fadeInAnimation};
`;

const LeftBottomSvg = styled.div<{ isVisible: boolean }>`
	position: absolute;
	top: 40.8rem;
	left: 2.3rem;

	opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out 0.4s;

	${({ isVisible }) => isVisible && fadeInAnimation};
`;

const RightBottomSvg = styled.div<{ isVisible: boolean }>`
	position: absolute;
	top: 36.6rem;
	left: 66.194rem;

	opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease-in-out 0.4s;

	${({ isVisible }) => isVisible && fadeInAnimation};
`;

