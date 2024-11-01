import Lucide from '@/assets/Lucide.svg?react';
import LucideGray from '@/assets/LucideGray.svg?react';
import LucideOrange from '@/assets/LucideOrange.svg?react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ListItemProps {
	name: string;
	hashtag: string;
	url: string;
	date: string;
	isSelectable: boolean;
	isAllSelected: boolean;
}

function ListItem({ name, hashtag, url, date, isSelectable, isAllSelected }: ListItemProps) {
	const [isClicked, setIsClicked] = useState(isAllSelected);
	const IconComponent = isClicked ? LucideOrange : isSelectable ? LucideGray : Lucide;
	const handleClick = () => {
		if (isSelectable) {
			setIsClicked(!isClicked);
		}
	};

	// AI 분류하기 버튼 다시 누르면 주황 박스, 주황 음영 풀리게
	useEffect(() => {
		return () => {
			setIsClicked(false);
		};
	}, [isSelectable]);

	// 다시 전체 선택 눌렀을 때 풀리게
	useEffect(() => {
		setIsClicked(isAllSelected);
	}, [isAllSelected]);

	return (
		<ListItemWrapper onClick={handleClick} isClicked={isClicked}>
			<Thumnail></Thumnail>
			<Name>[{name}]</Name>
			<Hastag>#{hashtag}</Hastag>
			<Url>{url}</Url>
			<Date>{date}</Date>
			<Icon>
				<IconComponent />
			</Icon>
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
const Hastag = styled.div`
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	position: absolute;
	left: 22.5rem;
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
`;
