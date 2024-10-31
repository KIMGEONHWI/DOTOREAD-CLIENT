import styled from 'styled-components';

interface AiClassificationBtnProps {
	text: string;
	onClick?: () => void;
	isClicked: boolean;
}

const AiClassificationBtn = ({ text, onClick, isClicked }: AiClassificationBtnProps) => {
	return (
		<BtnWrapper clicked={isClicked} onClick={onClick}>
			{text}
		</BtnWrapper>
	);
};

export default AiClassificationBtn;

const BtnWrapper = styled.button<{ clicked: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 18.5rem;
	height: 3.7rem;
	border-radius: 15px;
	border: 3px solid ${({ theme, clicked }) => (clicked ? theme.colors.orange1 : theme.colors.gray2)};
	background-color: ${({ theme, clicked }) => (clicked ? theme.colors.bookmark_click : theme.colors.background_box)};
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	cursor: pointer;
`;
