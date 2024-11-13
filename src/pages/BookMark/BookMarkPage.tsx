import Classified from '@/assets/Classified.svg?react';
import EveryBookMark from '@/assets/EveryBookMark.svg?react';
import Unclassified from '@/assets/Unclassified.svg?react';
import Btn from '@/components/common/Button/Btn';
import SortBtn from '@/components/common/Button/SortBtn';
import { allBookmarks } from '@/constants/ListItems';
import BookMarkList from '@/pages/BookMark/BookMarkList';
import Navbar from '@/pages/BookMark/Navbar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

// svg 를 속성으로 넘겨줄 수 없어서 Title 컴포넌트를 이 폴더에 정의함

interface TitleProps {
	text: string;
	Icon: React.ElementType;
}

function Title({ text, Icon }: TitleProps) {
	return (
		<TitleWrapper>
			{Icon && <Icon />}
			<Category>{text}</Category>
		</TitleWrapper>
	);
}

function BookMarkPage() {
	const location = useLocation();
	// BookMarkSlide로부터 객체 받아온다.

	const { text, iconType, category } = location.state || { text: '', iconType: '', category: '' };
	const Icon = iconType === 'everyBookmark' ? EveryBookMark : iconType === 'unclassified' ? Unclassified : Classified;

	let filteredBookmarks = [];

	if (category === '모든 북마크') {
		filteredBookmarks = allBookmarks;
	} else {
		filteredBookmarks = allBookmarks.filter((bookmark) => bookmark.category === category);
	}

	const [isAiClassifyActive, setAiClassifyActive] = useState(false);
	const [isAllSelected, setAllSelected] = useState(false);

	const handleAiClassifyBtn = () => {
		setAiClassifyActive(!isAiClassifyActive);
		setAllSelected(false);
	};

	const handleChooseAllBtn = () => {
		setAllSelected(!isAllSelected);
	};

	// 화면 나가면 상태 초기화
	useEffect(() => {
		return () => {
			setAiClassifyActive(false);
			setAllSelected(false);
		};
	}, [location]);

	return (
		<BookMarkPageWrapper>
			<BackgroundBox>
				<Title text={text} Icon={Icon} />
				{category === '미분류' && (
					<BtnWrapperForAiClassify onClick={handleAiClassifyBtn}>
						<Btn id="aiClassify" />
					</BtnWrapperForAiClassify>
				)}
				{isAiClassifyActive && (
					<BtnWrapperForChooseAll onClick={handleChooseAllBtn}>
						<Btn id="chooseAll" />
					</BtnWrapperForChooseAll>
				)}
				<SortBtnWrapper>
					<SortBtn />
				</SortBtnWrapper>
				{!isAiClassifyActive && <Navbar />}
				<BookMarkList bookmarks={filteredBookmarks} isSelectable={isAiClassifyActive} isAllSelected={isAllSelected} />
			</BackgroundBox>
		</BookMarkPageWrapper>
	);
}

export default BookMarkPage;

const BookMarkPageWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	max-width: 100vw;
	min-height: 100vh;
`;

const BackgroundBox = styled.div`
	width: 134.6rem;
	height: 92.9rem;
	border-radius: 20px;
	background: ${({ theme }) => theme.colors.background_box};
	position: fixed;
	left: 44.2rem;
`;
const TitleWrapper = styled.div`
	position: absolute;
	left: 2.8rem;
	top: 2rem;
	display: flex;
	gap: 1rem;
	align-items: center;
`;
const BtnWrapperForAiClassify = styled.div`
	position: absolute;
	top: 3.7rem;
	left: 97.3rem;
	z-index: 10000;
`;

const BtnWrapperForChooseAll = styled.div`
	position: absolute;
	top: 3.7rem;
	left: 76.3rem;
	z-index: 10000;
`;

const SortBtnWrapper = styled.div`
	position: absolute;
	right: 3.4rem;
	top: 3.7rem;
	z-index: 1;
`;
const Category = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_38px};
	color: ${({ theme }) => theme.colors.white1};
`;
