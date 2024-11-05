import { ButtonProps } from '@/constants/ButtonList';
import styled from 'styled-components';

const AiClassificationBtn = ({ text, onClick, isClicked, color, bordercolor, backgroundcolor }: ButtonProps) => {
	return (
		<BtnWrapper
			clicked={isClicked}
			onClick={onClick}
			color={color}
			bordercolor={bordercolor}
			backgroundcolor={backgroundcolor}
		>
			{text}
		</BtnWrapper>
	);
};

export default AiClassificationBtn;

const BtnWrapper = styled.button<{ clicked?: boolean; color: string; bordercolor: string; backgroundcolor: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 18.5rem;
	height: 3.7rem;
	border-radius: 15px;
	border: 3px solid ${({ theme, bordercolor }) => theme.colors[bordercolor]};
	background-color: ${({ theme, backgroundcolor, clicked }) =>
		clicked ? theme.colors.bookmark_click : theme.colors[backgroundcolor]};
	color: ${({ theme, color }) => theme.colors[color]};
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	cursor: pointer;
`;
