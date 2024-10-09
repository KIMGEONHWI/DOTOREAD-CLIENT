import Classified from '@/assets/Classified.svg?react';
import EveryBookMark from '@/assets/EveryBookMark.svg?react';
import Unclassified from '@/assets/Unclassified.svg?react';
import ListItem from '@/components/common/BookMarkList/ListItem';
import Navbar from '@/components/common/BookMarkList/Navbar';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

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
	const { text, iconType } = location.state || { text: '', iconType: '' };
	const Icon = iconType === 'everyBookmark' ? EveryBookMark : iconType === 'unclassified' ? Unclassified : Classified;

	return (
		<BookMarkPageWrapper>
			<BackgroundBox>
				<Title text={text} Icon={Icon} />
				{/* SortBtn 컴포넌트 자리 */}
				<Navbar />
				<ListItem />
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
const Category = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_38px};
	color: ${({ theme }) => theme.colors.white1};
`;
