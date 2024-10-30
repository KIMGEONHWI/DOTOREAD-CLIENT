import { ReactNode } from 'react';
import styled from 'styled-components';

interface BookMarkListBtnProps {
	text: string;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	onClick?: () => void;
}

function BookMarkListBtn({ text, leftIcon, rightIcon, onClick }: BookMarkListBtnProps) {
	return (
		<BookMarkListBtnWrapper onClick={onClick}>
			{leftIcon && <LeftIconWrapper>{leftIcon}</LeftIconWrapper>}
			<span>{text}</span>
			{rightIcon && <RightIconWrapper>{rightIcon}</RightIconWrapper>}
		</BookMarkListBtnWrapper>
	);
}

export default BookMarkListBtn;

const BookMarkListBtnWrapper = styled.button`
	display: flex;
	align-items: center;
	width: 24.2rem;
	height: 5.4rem;
	border-radius: 15px;
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Semibold_22px};
	padding-left: 1.9rem;
	padding-right: 4rem;
	position: relative;

	&:hover {
		border: 2px solid ${({ theme }) => theme.colors.orange1};
		background-color: ${({ theme }) => theme.colors.orange2};
		color: ${({ theme }) => theme.colors.orange1};
	}
`;

const LeftIconWrapper = styled.div`
	display: flex;
	padding-right: 1.1rem;
`;

const RightIconWrapper = styled.div`
	position: absolute;
	right: 0rem;
	display: flex;
	align-items: center;
`;
