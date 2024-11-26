import CollectionContent from './CollectionContent';
import SearchBar from './SearchBar';
import Btn from '@/components/common/Button/Btn';
import { collectionPreviewDTOList } from '@/constants/CollectionList';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface Collection {
	collectionId: number;
	title: string;
	memo: string;
	createdAt: string;
	nickname: string | null;
}

interface CollectionsResponse {
	result: {
		collectionPreviewDTOList: Collection[];
	};
}

const SharePage = () => {
	const [collections, setCollections] = useState<Collection[]>([]);

	const fetchCollections = async () => {
		try {
			const response = await axios.get<CollectionsResponse>(`${BASE_URL}/api/v1/collections?page=1`);
			setCollections(response.data.result.collectionPreviewDTOList);
		} catch (error) {
			console.error('collection fetch error', error);
		}
	};
	// fetchCollections();

	return (
		<SharePageWrapper>
			<SearchBar />
			<BtnWrapper>
				<Btn id="newArticle" />
			</BtnWrapper>
			<CollectionWrapper>
				{collectionPreviewDTOList.map((collection) => (
					<CollectionContent key={collection.collectionId} collection={collection} />
				))}
			</CollectionWrapper>
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
