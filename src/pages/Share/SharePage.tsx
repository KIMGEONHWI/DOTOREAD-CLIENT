import ArticleContent from './ArticleContent';
import Collection from './Collection';
import SearchBar from './SearchBar';
import Btn from '@/components/common/Button/Btn';
import NewArcticleModal from '@/components/common/Modal/NewArticleModal';
import { collectionPreviewDTOList } from '@/constants/CollectionList';
import useModal from '@/hooks/useModal';
// import axios from 'axios';
// import { useState } from 'react';
import styled from 'styled-components';

// const BASE_URL = import.meta.env.VITE_BASE_URL;

// interface CollectionContent {
// 	collectionId: number;
// 	title: string;
// 	memo: string;
// 	createdAt: string;
// 	nickname: string | null;
// }

// interface CollectionsResponse {
// 	result: {
// 		collectionPreviewDTOList: CollectionContent[];
// 	};
// }

const SharePage = () => {
	// const [collections, setCollections] = useState<Collection[]>([]);

	// const fetchCollections = async () => {
	// 	try {
	// 		const response = await axios.get<CollectionsResponse>(`${BASE_URL}/api/v1/collections?page=1`);
	// 		setCollections(response.data.result.collectionPreviewDTOList);
	// 	} catch (error) {
	// 		console.error('collection fetch error', error);
	// 	}
	// };
	// fetchCollections();
	const { isOpen: isModalOpen, openModal, closeModal } = useModal();
	return (
		<SharePageWrapper>
			<SearchBar />
			<BtnWrapper>
				<Btn id="newArticle" onClick={openModal} />
			</BtnWrapper>
			<CollectionWrapper>
				{collectionPreviewDTOList.map((collection) => (
					<Collection key={collection.collectionId} collection={collection} />
				))}
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
	position: relative;
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
