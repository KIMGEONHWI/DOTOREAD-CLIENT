import ArticleContent from './ArticleContent';
import Collection from './Collection';
import SearchBar from './SearchBar';
import Btn from '@/components/common/Button/Btn';
import NewArcticleModal from '@/components/common/Modal/NewArticleModal';
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
}

const SharePage = () => {
	const { isOpen: isModalOpen, openModal, closeModal } = useModal();
	const [searchParams] = useSearchParams();
	const [collections, setCollections] = useState<Collections[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const page = searchParams.get('page') || 1;

	useEffect(() => {
		const fetchCollections = async () => {
			setIsLoading(true);
			try {
				const accessToken = localStorage.getItem('access-token');
				const response = await axios.get(`${BASE_URL}/api/v1/collections`, {
					params: { page },
					headers: { access: accessToken },
				});
				setCollections(response.data.result.collectionPreviewDTOList);
			} catch (error) {
				console.error('Error fetching collections:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCollections();
	}, [page]);

	return (
		<SharePageWrapper>
			<SearchBar />
			<BtnWrapper>
				<Btn id="newArticle" onClick={openModal} />
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
			<NewArcticleModal isOpen={isModalOpen} onClose={closeModal}>
				<ArticleContent />
				<BtnSubmitWrapper>
					<Btn id="submit" onClick={closeModal} />
				</BtnSubmitWrapper>
			</NewArcticleModal>
		</SharePageWrapper>
	);
};

export default SharePage;

const SharePageWrapper = styled.div`
	width: 100%;
	height: 3500px;
	background-color: ${({ theme }) => theme.colors.background};
	position: relative;
	z-index: 0;
	display: flex;
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
