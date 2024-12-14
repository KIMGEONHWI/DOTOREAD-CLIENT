import Modal from '../Modal/Modal';
import useModal from '@/hooks/useModal';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface BookMarkListBtnProps {
	text: string;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	onClick?: () => void;
	onDelete?: () => void;
}

function BookMarkListBtn({ text, leftIcon, rightIcon, onClick, onDelete }: BookMarkListBtnProps) {
	const [showDropdown, setShowDropdown] = useState(false);
	const { isOpen: isModalOpen, openModal, closeModal } = useModal();
	

	const handleIconClick = (event: React.MouseEvent) => {
		event.stopPropagation();
		setShowDropdown(!showDropdown);
	};

	const handleDeleteClick = (event: React.MouseEvent) => {
		event.stopPropagation();
		openModal();
		setShowDropdown(false);
	};

	return (
		<BookMarkListBtnWrapper onClick={onClick}>
			{leftIcon && <LeftIconWrapper>{leftIcon}</LeftIconWrapper>}
			<span>{text}</span>
			{rightIcon && (
				<RightIconWrapper onClick={handleIconClick}>
					{rightIcon}
					{showDropdown && (
						<DropdownMenu>
							<DropdownItem onClick={handleDeleteClick}>삭제하기</DropdownItem>
						</DropdownMenu>
					)}
				</RightIconWrapper>
			)}

			<Modal id="delete" isOpen={isModalOpen} onClose={closeModal} onConfirm={onDelete ?? (() => {})}>
				<Title>"{text}"폴더를 삭제하시겠습니까?</Title>
				<ModalText>북마크가 모두 미분류 폴더로 이동합니다.</ModalText>
			</Modal>
		</BookMarkListBtnWrapper>
	);
}

export default BookMarkListBtn;

const BookMarkListBtnWrapper = styled.button`
	display: flex;
	align-items: center;
	width: 24.2rem;
	height: 5.4rem;
	min-height: 5.4rem;
	border-radius: 15px;
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Semibold_22px};
	padding-left: 1.9rem;
	padding-right: 4rem;
	position: relative;
	z-index: 0;
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
	padding: 0.1rem;
	border-radius: 10px;
	transition:
		background-color 0.2s ease-in-out,
		transform 0.2s ease-in-out;

	&:hover {
		background-color: ${({ theme }) => theme.colors.gray2};
		transform: scale(1.1);
		cursor: pointer;
	}
`;

const DropdownMenu = styled.div`
	position: absolute;
	top: 2.5rem;
	right: 0;
	width: 8.2473rem;
	height: 3.5rem;
	background-color: ${({ theme }) => theme.colors.gray2};
	border-radius: 10px;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.5rem 0;

`;

const DropdownItem = styled.div`
	width: 100%;
	padding: 0.5rem;
	color: ${({ theme }) => theme.colors.white1};
	border-radius: 8px;
	text-align: center;
	cursor: pointer;
	z-index: 101;
	position: relative;
	&:hover {
		background-color: ${({ theme }) => theme.colors.gray3};
	}
	${({ theme }) => theme.fonts.Pretendard_Semibold_13px};
`;

const Divider = styled.div`
	width: 80%;
	height: 1px;
	background-color: ${({ theme }) => theme.colors.gray1};
	margin: 0.2rem 0;
`;

const Title = styled.h2`
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
	color: ${({ theme }) => theme.colors.white1};
`;

const ModalText = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_18px};
	color: ${({ theme }) => theme.colors.white1};
`;
