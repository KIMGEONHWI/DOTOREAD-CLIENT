import AddBookMark from './AddBookMark';
import ArticleContent from './ArticleContent';
import Collection from './Collection';
import SearchBar from './SearchBar';
import Vector from '@/assets/Vector.svg?react';
import Btn from '@/components/common/Button/Btn';
import NewArticleModal from '@/components/common/Modal/NewArticleModal';
import useModal from '@/hooks/useModal';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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

const SharePage = () => {
	const { isOpen: isArticleModalOpen, openModal: openArticleModal, closeModal: closeArticleModal } = useModal();
	const [isAddBookmarkModalOpen, setAddBookmarkModalOpen] = useState(false);
	const [searchParams] = useSearchParams();
	const [collections, setCollections] = useState<Collections[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [collectionId, setCollectionId] = useState<number | null>(null);
	const [title, setTitle] = useState<string>('');
	const [memo, setMemo] = useState<string>('');

	const page = searchParams.get('page') || 1;

	// Handle form submission
	const handleSubmit = async () => {
		if (!collectionId) {
			console.log('collectionID 없음');
			return;
		}
		try {
			const accessToken = localStorage.getItem('access-token');
			const response = await axios.patch(
				`${BASE_URL}/api/v1/collections/${collectionId}`,
				{ title, memo }, // Request body
				{
					headers: { access: accessToken },
				},
			);

			if (response.data.isSuccess) {
				console.log('데이터가 성공적으로 저장되었습니다:', response.data);
				closeArticleModal(); // Close modal after successful submission
			} else {
				console.error('데이터 저장 실패:', response.data.message);
			}
		} catch (error) {
			console.error('API 호출 중 오류:', error);
		}
	};

	console.log('숭실', setTitle);

	const handleOpenAddBookmarkModal = () => {
		closeArticleModal();
		setAddBookmarkModalOpen(true);
	};

	const handleCollectionCreate = (newCollectionId: number) => {
		setCollectionId(newCollectionId);
		setAddBookmarkModalOpen(false);
		openArticleModal();
	};

	const fetchCollections = async () => {
		setIsLoading(true);
		try {
			const accessToken = localStorage.getItem('access-token');
			let response;

			if (searchQuery) {
				response = await axios.get(`${BASE_URL}/api/v1/collections/search`, {
					params: { search: searchQuery, page },
					headers: { access: accessToken },
				});
			} else {
				response = await axios.get(`${BASE_URL}/api/v1/collections`, {
					params: { page },
					headers: { access: accessToken },
				});
			}

			setCollections(response.data.result.collectionPreviewDTOList || []);
		} catch (error) {
			console.error('Error fetching collections:', error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchCollections();
	}, [searchQuery, page]);

	const handleSearch = (query: string) => {
		setSearchQuery(query);
	};

	return (
		<SharePageWrapper>
			<SearchBar onSearch={handleSearch} />
			<BtnWrapper>
				<Btn id="newArticle" onClick={openArticleModal} />
			</BtnWrapper>
			<CollectionWrapper>
				{isLoading ? (
					<p>Loading...</p>
				) : collections.length > 0 ? (
					collections.map((collection) => <Collection key={collection.collectionId} collection={collection} />)
				) : (
					<p>No collections available.</p>
				)}
			</CollectionWrapper>

			<NewArticleModal isOpen={isArticleModalOpen} onClose={closeArticleModal}>
				<ArticleContent
					collectionId={collectionId}
					onPlusClick={handleOpenAddBookmarkModal}
					title={title}
					memo={memo}
					setTitle={setTitle}
					setMemo={setMemo}
				/>
				<BtnSubmitWrapper>
					<Btn id="submit" onClick={handleSubmit} />
				</BtnSubmitWrapper>
			</NewArticleModal>

			<NewArticleModal isOpen={isAddBookmarkModalOpen} onClose={() => setAddBookmarkModalOpen(false)}>
				<Wrapper>
					<Vector
						onClick={() => {
							openArticleModal();
						}}
						style={{ cursor: 'pointer' }}
					/>
					<Title>북마크 가져오기</Title>
				</Wrapper>
				<Btns>
					<Button>모든 북마크</Button>
				</Btns>
				<AddBookMark onCollectionCreate={handleCollectionCreate} />
			</NewArticleModal>
		</SharePageWrapper>
	);
};

export default SharePage;

const SharePageWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.background};
	position: relative;
	z-index: 0;
	display: flex;
	overflow-y: auto;
`;

const BtnWrapper = styled.div`
	position: absolute;
	top: 3.1rem;
	right: 16.2rem;
`;

const CollectionWrapper = styled.div`
	position: absolute;
	top: 14.9rem;
	left: 29.7rem;
	flex-wrap: wrap;
	gap: 3.3rem;
	display: flex;
`;

const BtnSubmitWrapper = styled.div`
	position: absolute;
	top: 51.2rem;
`;

const Wrapper = styled.div`
	position: absolute;
	top: 6.3rem;
	left: 3rem;
	display: flex;
	gap: 0.6rem;
`;

const Title = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_22px};
	color: ${({ theme }) => theme.colors.white1};
`;

const Button = styled.button`
	box-sizing: border-box;
	align-items: center;
	width: 12.7rem;
	height: 4.8rem;
	border-radius: 1.5rem;
	border: 0.3rem solid ${({ theme }) => theme.colors.gray2};
	background-color: ${({ theme }) => theme.colors.gray1};
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	color: ${({ theme }) => theme.colors.white1};
`;

const Btns = styled.div`
	display: flex;
	gap: 36.2rem;
	position: absolute;
	top: 11.3rem;
	left: 3rem;
`;
