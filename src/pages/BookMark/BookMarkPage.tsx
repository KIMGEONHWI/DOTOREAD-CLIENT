import Classified from '@/assets/Classified.svg?react';
import EveryBookMark from '@/assets/EveryBookMark.svg?react';
import Unclassified from '@/assets/Unclassified.svg?react';
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
			<Title text={text} Icon={Icon} />
		</BookMarkPageWrapper>
	);
}

export default BookMarkPage;

const BookMarkPageWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	max-width: 100vw;
	min-height: 100vh;
`;
const TitleWrapper = styled.div`
	margin-left: 600px;
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;
const Category = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_38px};
	color: ${({ theme }) => theme.colors.white1};
`;
