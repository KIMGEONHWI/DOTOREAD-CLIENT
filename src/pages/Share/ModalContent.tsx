import ListItem from './ListItem';
import FillHeart from '@/assets/FillHeart.svg?react';
import NicknameProfile from '@/assets/NicknameProfile.svg?react';
import NonfillHeart from '@/assets/NonfillHeart.svg?react';
import { useState } from 'react';
import styled from 'styled-components';

interface Collection {
	collectionId: number;
	title: string;
	memo: string;
	createdAt: string;
	nickname: string | null;
	bookmarkSummaryDTOList: Bookmark[];
}

interface ModalContentProps {
	collection: Collection;
}

interface Bookmark {
	bookmarkId: number;
	title: string;
	url: string;
}

function formatDate(dateStr: string) {
	const [month, day] = dateStr.split('-');
	return `${parseInt(month)}월 ${parseInt(day)}일`;
}

const ModalContent = ({ collection }: ModalContentProps) => {
	const [isLiked, setIsLiked] = useState(false);
	const [likeCount, setLikeCount] = useState(25);

	const toggleLike = () => {
		if (isLiked) {
			setLikeCount(likeCount - 1);
		} else {
			setLikeCount(likeCount + 1);
		}
		setIsLiked(!isLiked);
	};
	return (
		<ModalContainer>
			<Header>
				<NicknameProfile />
				<NickName>{collection.nickname || '닉네임 없음'}</NickName>
				<CreatedAt>{formatDate(collection.createdAt)}</CreatedAt>
			</Header>
			<ContentWrapper>
				<Wrapper>
					<Title>{collection.title}</Title>
					<Like onClick={toggleLike}>
						+{likeCount}{' '}
						{isLiked ? <FillHeart style={{ cursor: 'pointer' }} /> : <NonfillHeart style={{ cursor: 'pointer' }} />}
					</Like>
				</Wrapper>
				<Content>
					<Memo>{collection.memo}</Memo>
					<ListItemWrapper>
						{collection.bookmarkSummaryDTOList.map((bookmark) => (
							<ListItem key={bookmark.bookmarkId} title={bookmark.title} url={bookmark.url} formodal={true} />
						))}
					</ListItemWrapper>
				</Content>
			</ContentWrapper>
		</ModalContainer>
	);
};

export default ModalContent;

const ModalContainer = styled.div`
	width: 70.5rem;
	height: auto;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
	margin-top: 5.3rem;
`;

const NickName = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_25px};
	margin-left: 1rem;
	color: ${({ theme }) => theme.colors.white1};
`;

const CreatedAt = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_18px};
	position: absolute;
	right: 5.1rem;
	color: ${({ theme }) => theme.colors.white1};
`;

const ContentWrapper = styled.div`
	width: 100%;
	height: auto;
`;

const Wrapper = styled.div`
	width: 70.5rem;
	margin-bottom: 2.7rem;
	display: flex;
	align-items: center;
	position: relative;
`;
const Like = styled.div`
	color: ${({ theme }) => theme.colors.white1};
	display: flex;
	gap: 0.6rem;
	${({ theme }) => theme.fonts.Pretendard_Semibold_22px};
	position: absolute;
	right: 1.8rem;
	align-items: center;
`;
const Content = styled.div`
	max-height: 36.5rem;
	overflow-y: auto;
	position: relative;
	&::-webkit-scrollbar {
		width: 0.7rem;
		height: 36.5rem;
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
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Title = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
	color: ${({ theme }) => theme.colors.white1};

	margin-left: 1.2rem;
`;

const Memo = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Medium_20px};
	color: ${({ theme }) => theme.colors.white1};
	margin-bottom: 2rem;
	margin-left: 1.2rem;
`;
