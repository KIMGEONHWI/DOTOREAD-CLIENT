import RectangelIcon from '@/assets/Rectangle.svg?react';
import SlashIcon from '@/assets/Slash.svg?react';
import styled from 'styled-components';

interface MainScoreProps {
	score: number;
	text: string;
}

const MainScore = ({ score, text }: MainScoreProps) => {
	return (
		<MainScoreWrapper>
			<RectangelIcon />
			<Score>{score}</Score>
			<SlashIcon />
			<Text>{text}</Text>
		</MainScoreWrapper>
	);
};

export default MainScore;

const MainScoreWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 34.4rem;
	height: 8.4126rem;
	gap: 1.5rem;
	border-radius: 49.976px;
	box-shadow: 0px 3.332px 3.332px 0px rgba(0, 0, 0, 0.25) inset;
	background-color: ${({ theme }) => theme.colors.white3};
`;

const Score = styled.p`
	color: ${({ theme }) => theme.colors.orange1};
	${({ theme }) => theme.fonts.Pretendard_Semibold_49px};
`;

const Text = styled.p`
	width: 9.8rem;
	height: 4.2rem;
	color: ${({ theme }) => theme.colors.background};
	${({ theme }) => theme.fonts.Pretendard_Semibold_18px};
`;
