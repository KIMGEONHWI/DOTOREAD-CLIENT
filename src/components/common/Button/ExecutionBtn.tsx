import styled from 'styled-components';

interface ExecutionBtnProps {
	variant: string;
	isSelected: boolean;
	onClick?: () => void;
	children?: React.ReactNode;
}

const ExecutionBtn = ({ variant, isSelected, onClick, children }: ExecutionBtnProps) => {
	return (
		<StyledButton variant={variant} isSelected={isSelected} onClick={() => isSelected && onClick?.()}>
			{children || '실행'}
		</StyledButton>
	);
};

export default ExecutionBtn;

const StyledButton = styled.div<{ variant: string; isSelected: boolean }>`
	width: 127px;
	height: 48px;
	border-radius: 15px;
	border: 3px solid ${({ theme }) => theme.colors.orange1};
	background: ${({ theme, isSelected }) => (isSelected ? theme.colors.orange1 : theme.colors.orange2)};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: ${({ isSelected }) => (isSelected ? 'pointer' : 'not-allowed')};
	color: white;
	font-size: 16px;
	transition: background 0.3s ease;
`;
