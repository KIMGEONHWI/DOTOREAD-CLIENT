import OnBoarding3center from '@/assets/OnBoarding3.svg?react';
import styled from 'styled-components';

const OnBoarding3 = () => {
	return (
		<OnBoarding3Wrapper>
			<Description>
				<TextTitle>읽지 않은 북마크를 정리하며 도토리를 얻으세요</TextTitle>
				<SubDescription>
					도토릿은 사용자가 저장한 북마크를 실제로 읽도록 돕습니다.
					<br />
					읽지 않은 북마크를 확인하고 미션을 통해 도토리를 얻으세요.
				</SubDescription>
				<OnBoarding3center />
			</Description>
		</OnBoarding3Wrapper>
	);
};

export default OnBoarding3;

const OnBoarding3Wrapper = styled.div`
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
	margin-bottom: 7.9rem;
`;
