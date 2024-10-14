import Classified from '@/assets/Classified.svg?react';
import EveryBookMark from '@/assets/EveryBookMark.svg?react';
import Unclassified from '@/assets/Unclassified.svg?react';
import Navbar from '@/components/common/BookMarkList/Navbar';
import Btn from '@/components/common/Button/Btn';
import SortBtn from '@/components/common/Button/SortBtn';
import { allBookmarks } from '@/constants/ListItems';
import BookMarkList from '@/pages/BookMark/BookMarkList';
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
	const { text, iconType, category } = location.state || { text: '', iconType: '', category: '' };
	const Icon = iconType === 'everyBookmark' ? EveryBookMark : iconType === 'unclassified' ? Unclassified : Classified;

	let filteredBookmarks = [];
	if (category === '모든 북마크') {
		filteredBookmarks = allBookmarks;
	} else {
		filteredBookmarks = allBookmarks.filter((bookmark) => bookmark.category === category);
	}

	return (
		<BookMarkPageWrapper>
			<BackgroundBox>
				<Title text={text} Icon={Icon} />

				<Btn id="aiClassify" />
				<SortBtnWrapper>
					<SortBtn />
				</SortBtnWrapper>
				<Navbar />
				<BookMarkList bookmarks={filteredBookmarks} />
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
