import OnBoarding2center from '@/assets/OnBoarding2-center.svg?react';
import OnBoarding2left from '@/assets/OnBoarding2-left.svg?react';
import OnBoarding2right from '@/assets/OnBoarding2-right.svg?react';
import styled from 'styled-components';

const OnBoarding2 = () => {
	return (
		<OnBoarding2Wrapper>
			<Description>
				<TextTitle>북마크 정리에서 자유로워지세요</TextTitle>
				<SubDescription>
					간편한 수동 분류와 AI 기반 자동 분류를 통해 원하는 방식으로
					<br />
					북마크를 자유롭게 구성할 수 있습니다.
				</SubDescription>
				<Wrapper>
					<OnBoarding2left />
					<OnBoarding2right />
					<Center>
						<OnBoarding2center />
					</Center>
				</Wrapper>
			</Description>
		</OnBoarding2Wrapper>
	);
};

export default OnBoarding2;

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
const TextTitle = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_45px};
	color: ${({ theme }) => theme.colors.orange1};
	text-align: center;
	margin-bottom: 3.9rem;
`;

const SubDescription = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_25px};
	color: ${({ theme }) => theme.colors.white1};
	text-align: center;
`;

const Wrapper = styled.div`
	top: 10.8rem;
	position: relative;
	display: flex;
	gap: 8rem;
	height: 100%;
`;
const Center = styled.div`
	position: absolute;
	top: 29.7rem;
	left: 61.0004rem;
`;
