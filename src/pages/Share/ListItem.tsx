import ToMyBookMark from '@/assets/TomyBookmark.svg?react';
import styled from 'styled-components';

interface ListItemProps {
	title: string;
	url: string;
	formodal?: boolean;
}
const ListItem = ({ title, url, formodal = false }: ListItemProps) => {
	return (
		<ItemContainer formodal={formodal}>
			<Title>{title}</Title>
			<Url>{url}</Url>
			{formodal && <ToMyBookMark />}
		</ItemContainer>
	);
};

export default ListItem;

const ItemContainer = styled.div<{ formodal: boolean }>`
	width: ${({ formodal }) => (formodal ? '69.1rem' : '65rem')};
	width: 65rem;
	height: 8.6rem;
	border-radius: 10px;
	border: 3px solid #3b3b3b;
	padding: 0.2rem 2.9rem;
	display: flex;
	flex-direction: column;
	gap: 1.429rem;
	background: ${({ theme }) => theme.colors.bookmark_hover};
`;
const Title = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_22px};
	color: ${({ theme }) => theme.colors.white1};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
`;
const Url = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	color: ${({ theme }) => theme.colors.white2};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
`;
