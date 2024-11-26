import ListItem from './ListItem';
import NicknameProfile from '@/assets/NicknameProfile.svg?react';
import styled from 'styled-components';

interface Collection {
	collectionId: number;
	title: string;
	memo: string;
	createdAt: string;
	nickname: string | null;
	bookmarkSummaryDTOList: Bookmark[];
}

interface CollectionContentProps {
	collection: Collection;
}

interface Bookmark {
	bookmarkId: number;
	title: string;
	url: string;
}

function formatDate(dateStr: string) {
	const [year, month, day] = dateStr.split('-');
	return `${parseInt(month)}월 ${parseInt(day)}일`;
}

const CollectionContent = ({ collection }: CollectionContentProps) => {
	return (
		<Container>
			<Header>
				<NicknameProfile />
				<NickName>{collection.nickname || '닉네임'}</NickName>
				<CreatedAt> {formatDate(collection.createdAt)}</CreatedAt>
			</Header>
			<ContentWrapper>
				<Title>{collection.title}</Title>
				<Content>
					<Memo>{collection.memo}</Memo>
					<ListItemWrapper>
						{collection.bookmarkSummaryDTOList.map((bookmark) => (
							<ListItem key={bookmark.bookmarkId} title={bookmark.title} url={bookmark.url} />
						))}
					</ListItemWrapper>
				</Content>
				<SeeMore>북마크 더보기</SeeMore>
			</ContentWrapper>
		</Container>
	);
};

export default CollectionContent;

const Container = styled.div`
	width: 71.4rem;
	height: 58.3rem;
	position: relative;
`;
const Header = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.551rem;
	margin-left: 2.1rem;
	position: relative;
`;

const CreatedAt = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_18px};
	color: ${({ theme }) => theme.colors.white1};
	position: absolute;
	right: 0;
`;

const NickName = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_25px};
	color: ${({ theme }) => theme.colors.white1};
	margin-left: 0.951rem;
`;

const ContentWrapper = styled.div`
	width: 71.4rem;
	height: 52.7rem;
	border-radius: 20px;
	background: ${({ theme }) => theme.colors.background_box};
`;

const Content = styled.div`
	max-height: 36.8rem;
	width: 66.5rem;
	overflow-y: auto;
	position: absolute;
	top: 15rem;
	left: 3.1rem;
	&::-webkit-scrollbar {
		width: 0.7rem;
		height: 36.8rem;
	}

	&::-webkit-scrollbar-track {
		background: none;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 15px;
		cursor: pointer;
		height: 19.6rem;
		width: 0.7rem;
		background: ${({ theme }) => theme.colors.white2};
	}
`;

const ListItemWrapper = styled.div`
	margin-top: 2.5rem;
	display: flex;
	flex-direction: column;
	gap: 1.4rem;
`;

const Title = styled.div`
	position: absolute;
	display: flex;
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
	color: ${({ theme }) => theme.colors.white1};
	left: 4.3rem;
	margin-top: 2.9rem;
`;
const Memo = styled.div`
	height: 4.8rem;
	${({ theme }) => theme.fonts.Pretendard_Medium_20px};
	color: ${({ theme }) => theme.colors.white1};

	padding-right: 4.3rem;
`;
const SeeMore = styled.div`
	position: absolute;
	top: 54rem;
	right: 3.3rem;
	text-decoration-line: underline;
	text-decoration-style: solid;
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	color: ${({ theme }) => theme.colors.white2};
`;
