import ArticleContent from './ArticleContent';
import Collection from './Collection';
import SearchBar from './SearchBar';
import Btn from '@/components/common/Button/Btn';
import NewArticleModal from '@/components/common/Modal/NewArticleModal';
import useModal from '@/hooks/useModal';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import AddBookMark from './AddBookMark';
import Vector from '@/assets/Vector.svg?react';

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
	const [isAddBookmarkModalOpen, setAddBookmarkModalOpen] = useState(false); // 두 번째 모달 상태
	const [searchParams] = useSearchParams();
	const [collections, setCollections] = useState<Collections[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState<string>('');

	const page = searchParams.get('page') || 1;

	// 첫 번째 모달에서 플러스 버튼 클릭 시 두 번째 모달로 전환
	const handleOpenAddBookmarkModal = () => {
		closeArticleModal(); // 첫 번째 모달 닫기
		setAddBookmarkModalOpen(true); // 두 번째 모달 열기
	};

	// 두 번째 모달에서 추가하기 버튼 클릭 시 첫 번째 모달로 돌아옴
	const handleAddBookmarks = () => {
		setAddBookmarkModalOpen(false); // 두 번째 모달 닫기
		openArticleModal(); // 첫 번째 모달 다시 열기
	};

	// 컬렉션 데이터를 가져오는 함수 (전체/검색)
	const fetchCollections = async () => {
		setIsLoading(true);
		try {
			const accessToken = localStorage.getItem('access-token');
			let response;

			if (searchQuery) {
				// 검색 API 호출
				response = await axios.get(`${BASE_URL}/api/v1/collections/search`, {
					params: { search: searchQuery, page },
					headers: { access: accessToken },
				});
			} else {
				// 전체 컬렉션 API 호출
				response = await axios.get(`${BASE_URL}/api/v1/collections`, {
					params: { page },
					headers: { access: accessToken },
				});
			}

			// 검색어가 있든 없든 결과를 동일하게 처리
			setCollections(response.data.result.collectionPreviewDTOList || []);
		} catch (error) {
			console.error('Error fetching collections:', error);
		} finally {
			setIsLoading(false);
		}
	};

	// 검색어가 변경되거나 페이지가 변경될 때 API 호출
	useEffect(() => {
		fetchCollections();
	}, [searchQuery, page]);

	// 검색어 입력 처리
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
					collections.map((collection) => (
						<Collection key={collection.collectionId} collection={collection} />
					))
				) : (
					<p>No collections available.</p>
				)}
			</CollectionWrapper>

			{/* 첫 번째 모달 */}
			<NewArticleModal isOpen={isArticleModalOpen} onClose={closeArticleModal}>
				<ArticleContent onPlusClick={handleOpenAddBookmarkModal} />
				<BtnSubmitWrapper>
					<Btn id="submit" onClick={closeArticleModal} />
				</BtnSubmitWrapper>
			</NewArticleModal>

			{/* 두 번째 모달 */}
			<NewArticleModal isOpen={isAddBookmarkModalOpen} onClose={() => setAddBookmarkModalOpen(false)}>
				<Wrapper>
					<Vector onClick={handleAddBookmarks} style={{ cursor: 'pointer' }} />
					<Title>북마크 가져오기</Title>
				</Wrapper>
				<Btns>
					<Button>모든 북마크</Button>
				</Btns>
				<AddBookMark />
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
