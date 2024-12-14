import ListItem from './ListItem';
import ModalContent from './ModalContent';
import NicknameProfile from '@/assets/NicknameProfile.svg?react';
import CollectionModal from '@/components/common/Modal/CollectionModal';
import useModal from '@/hooks/useModal';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface Bookmark {
	bookmarkId: number;
	title: string;
	url: string;
}

interface Collections {
	collectionId: number;
	title: string;
	memo: string;
	createdAt: string;
	nickname: string | null;
	bookmarkSummaryDTOList: Bookmark[];
	likeCount: number;
	isLiked: boolean;
}

interface CollectionContentProps {
	collection: Collections;
}

function formatDate(dateStr: string) {
	const [year, month, day] = dateStr.split('-');
	console.log(year);
	return `${parseInt(month)}월 ${parseInt(day)}일`;
}

const Collection = ({ collection }: CollectionContentProps) => {
	const { isOpen: isModalOpen, openModal, closeModal } = useModal();
	const [modalData, setModalData] = useState<Collections | null>(null);
	const [isFetching, setIsFetching] = useState(false);

	const handleSeeMoreClick = async () => {
		setIsFetching(true);
		try {
			const accessToken = localStorage.getItem('access-token');
			const response = await axios.get(`${BASE_URL}/api/v1/collections/${collection.collectionId}`, {
				headers: { access: accessToken },
			});
			setModalData(response.data.result);
			openModal();
		} catch (error) {
			console.error('Error fetching collection details:', error);
		} finally {
			setIsFetching(false);
		}
	};

	console.log(modalData);

	return (
		<Container >
			<Header>
				<NicknameProfile />
				<NickName>{collection.nickname || '닉네임'}</NickName>
				<CreatedAt> {formatDate(collection.createdAt)}</CreatedAt>
			</Header>
			<ContentWrapper onClick={handleSeeMoreClick}>
				<Title>{collection.title}</Title>
				<Content>
					<Memo>{collection.memo}</Memo>
					<ListItemWrapper>
						{collection.bookmarkSummaryDTOList.map((bookmark) => (
							<ListItem key={bookmark.bookmarkId} title={bookmark.title} url={bookmark.url} formodal={false} />
						))}
					</ListItemWrapper>
				</Content>
				{collection.bookmarkSummaryDTOList.length >= 4 && (
					<SeeMore>{isFetching ? 'Loading...' : '북마크 더보기'}</SeeMore>
				)}
				</ContentWrapper>
			<CollectionModal isOpen={isModalOpen} onClose={closeModal}>
				{modalData ? <ModalContent collection={modalData} /> : <p>Loading content...</p>}
			</CollectionModal>
		</Container>
	);
};

export default Collection;

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
	margin-left: 1.2rem;
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
	cursor: pointer;
`;
