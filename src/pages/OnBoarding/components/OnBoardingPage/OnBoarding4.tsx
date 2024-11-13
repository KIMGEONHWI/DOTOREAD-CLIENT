import styled from 'styled-components';

const OnBoarding4 = () => {
	return (
		<OnBoarding4Wrapper>
			<Description>
				<TextTitle>북마크를 공유하고 도토리를 기부하세요</TextTitle>
				<SubDescription>
					사용자는 유용한 북마크를 다른 사람들과 공유하고
					<br />
					다른 사용자들이 올린 북마크를 가져올 수 있습니다.
					<br />
					활동을 통해 모은 도토리는 동물 보호 단체에 기부할 수 있습니다.
				</SubDescription>
			</Description>
		</OnBoarding4Wrapper>
	);
};

export default OnBoarding4;

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
	gap: 3.9rem;
`;
const TextTitle = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_45px};
	color: ${({ theme }) => theme.colors.orange1};
	text-align: center;
`;

const SubDescription = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_25px};
	color: ${({ theme }) => theme.colors.white1};
	text-align: center;
`;
