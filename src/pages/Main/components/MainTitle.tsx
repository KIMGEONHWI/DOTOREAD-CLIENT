import styled from 'styled-components';

function MainTitle() {
	return (
		<MainTitleWrapper>
			<MainTitleText>TODAY IS GOOD</MainTitleText>
			<MainTitleText>TIME TO DOTOREAD</MainTitleText>
		</MainTitleWrapper>
	);
}

export default MainTitle;

const MainTitleWrapper = styled.div`
	display: flex;
	width: 43.3rem;
	height: 15.9rem;
	flex-direction: column;
	justify-content: center;
	margin-left: 29.6rem;
	margin-top: 3.1rem;
`;

const MainTitleText = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_45px};
	color: ${({ theme }) => theme.colors.white1};
`;
