import Lucide from '@/assets/Lucide.svg?react';
import LucideGray from '@/assets/LucideGray.svg?react';
import LucideOrange from '@/assets/LucideOrange.svg?react';
import Modal from '@/components/common/Modal/Modal';
import useModal from '@/hooks/useModal';
import { useEffect, useState } from 'react';
import styled from 'styled-components';


interface ListItemProps {
	title: string;
	url: string;
	img: string | null;
	folderId: string;
	date: string;
	isSelectable: boolean;
	isAllSelected: boolean;
	onDelete?: () => void;
	setHasSelectedItems: (hasSelected: boolean) => void;
}

function ListItem({
	title,
	url,
	date,
	img,
	isSelectable,
	isAllSelected,
	onDelete,
	setHasSelectedItems,
}: ListItemProps) {
	const [isClicked, setIsClicked] = useState(isAllSelected);
	const IconComponent = isClicked ? LucideOrange : isSelectable ? LucideGray : Lucide;
	const [showDropdown, setShowDropdown] = useState(false);
	const { isOpen: isModalOpen, openModal, closeModal } = useModal();

	const handleClick = () => {
		if (isSelectable) {
			const newClickedState = !isClicked;
			setIsClicked(newClickedState);
			setHasSelectedItems(newClickedState || isAllSelected);
		}
	};
	const handleIconClick = (event: React.MouseEvent) => {
		event.stopPropagation();
		setShowDropdown(!showDropdown);
	};
	const handleDeleteClick = (event: React.MouseEvent) => {
		event.stopPropagation();
		openModal();
		setShowDropdown(false);
	};

	const onConfirmDelete = () => {
		if (onDelete) {
			onDelete();
		}
		closeModal();
	};
	useEffect(() => {
		setIsClicked(isAllSelected);
	}, [isAllSelected]);

	return (
		<ListItemWrapper onClick={handleClick} isClicked={isClicked}>
			<Thumnail style={{ backgroundImage: `url(${img})` }}></Thumnail>
			<Name>[{title}]</Name>
			<Url>{url}</Url>
			<Date>{date}</Date>
			<Icon>
				<IconComponent onClick={handleIconClick} />
				{showDropdown && (
					<DropdownMenu>
						<DropdownItem onClick={handleDeleteClick}>삭제하기</DropdownItem>
					</DropdownMenu>
				)}
			</Icon>

			<Modal id="delete" isOpen={isModalOpen} onClose={closeModal} onConfirm={onConfirmDelete}>
				<Title>"북마크를 삭제하시겠습니까?</Title>
			</Modal>
		</ListItemWrapper>
	);
}

export default ListItem;

const ListItemWrapper = styled.div<{ isClicked: boolean }>`
	width: 128.2rem;
	height: 7.8rem;
	border-radius: 10px;
	background-color: ${({ theme, isClicked }) =>
		isClicked ? theme.colors.bookmark_click : theme.colors.background_box};
	margin: 0.6rem 0;
	&:hover {
		background-color: ${({ theme, isClicked }) =>
			isClicked ? theme.colors.bookmark_click : theme.colors.bookmark_hover};
	}
	cursor: pointer;
	display: flex;
	align-items: center;
	position: relative;
`;

const Thumnail = styled.div`
	width: 9.5rem;
	height: 6.2rem;
	border-radius: 10px;
	background: ${({ theme }) => theme.colors.thumnail};
	position: absolute;
	left: 0.8rem;
`;

const Name = styled.div`
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	position: absolute;
	left: 14.7rem;
`;

const Url = styled.div`
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	position: absolute;
	left: 50.9rem;
`;

const Date = styled.div`
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	position: absolute;
	left: 109.5rem;
`;

const Icon = styled.div`
	position: absolute;
	right: 2.5rem;
	&:hover {
		background-color: ${({ theme }) => theme.colors.gray2};
		transform: scale(1.1);
		cursor: pointer;
	}
	border-radius: 10px;
	transition:
		background-color 0.2s ease-in-out,
		transform 0.2s ease-in-out;
	padding: 0.1rem;
`;
const DropdownMenu = styled.div`
	position: absolute;
	top: 2.5rem;
	right: 0;
	width: 8.2473rem;
	height: 3.3rem;
	background-color: ${({ theme }) => theme.colors.gray2};
	border-radius: 10px;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
	z-index: 100;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const DropdownItem = styled.div`
	width: 100%;
	padding: 0.5rem;
	color: ${({ theme }) => theme.colors.white1};
	border-radius: 8px;
	text-align: center;
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.gray3};
	}
	${({ theme }) => theme.fonts.Pretendard_Semibold_13px};
`;
const Title = styled.h2`
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
	color: ${({ theme }) => theme.colors.white1};
`;