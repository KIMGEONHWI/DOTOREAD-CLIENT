import LineBetweenBookmark from '@/assets/LineBetweenBookmark.svg?react';
import { useBookmarkContext } from '@/contexts/BookmarkContext';
import Default from '@/pages/BookMark/Default';
import ListItem from '@/pages/BookMark/ListItem';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface Bookmark {
	id: string;
	title: string;
	url: string;
	date: string;
	img: string | null;
	folderId: number;
}

interface BookMarkListProps {
	bookmarks: Bookmark[];
	isSelectable: boolean;
	isAllSelected: boolean;
	setHasSelectedItems: (hasSelected: boolean) => void;
	selectedBookmarks: string[];
	setSelectedBookmarks: (selected: string[]) => void;
	category: string;
	iconType: string;
}

function BookMarkList({
	bookmarks,
	isSelectable,
	isAllSelected,
	setHasSelectedItems,
	selectedBookmarks,
	setSelectedBookmarks,
	category,
	iconType,
}: BookMarkListProps) {
	const { fetchBookmarks } = useBookmarkContext();
	const handleDeleteBookMark = async (bookmark: Bookmark) => {
		try {
			const accessToken = localStorage.getItem('access-token');
			if (!accessToken) {
				console.error('Access token not found');
				return;
			}

			await axios.delete(`${BASE_URL}/api/v1/bookmarks/${bookmark.id}`, {
				headers: {
					access: `${accessToken}`,
				},
			});
			console.log('bookmark deleted:', bookmark.id);

			if (category === '모든 북마크') {
				await fetchBookmarks('/api/v1/bookmarks/all?sortType=DESC');
			} else if (category === '미분류') {
				await fetchBookmarks('/api/v1/bookmarks/uncategorized?sortType=DESC');
			} else if (iconType === 'classified') {
				await fetchBookmarks(`/api/v1/bookmarks/all/${category}?sortType=DESC`);
			}
		} catch (error) {
			console.error('Error deleting bookmark', error);
		}
	};
	return (
		<BookMarkListWrapper>
			{bookmarks.length > 0 ? (
				bookmarks.map((bookmark, index) => (
					<React.Fragment key={bookmark.id}>
						<ListItem
							title={bookmark.title}
							img={bookmark.img}
							url={bookmark.url}
							date={bookmark.date}
							folderId={bookmark.folderId}
							isSelectable={isSelectable}
							isAllSelected={isAllSelected}
							setHasSelectedItems={setHasSelectedItems}
							onDelete={() => handleDeleteBookMark(bookmark)}
							selectedBookmarks={selectedBookmarks}
							setSelectedBookmarks={setSelectedBookmarks}
							bookmarkId={bookmark.id}
						/>
						{index < bookmarks.length - 1 && (
							<LineWrapper>
								<LineBetweenBookmark />
							</LineWrapper>
						)}
					</React.Fragment>
				))
			) : (
				<DefaultWrapperInBookMarkList>
					<Default message="북마크가 없습니다." />
				</DefaultWrapperInBookMarkList>
			)}
		</BookMarkListWrapper>
	);
}

export default BookMarkList;

const BookMarkListWrapper = styled.div`
	position: absolute;
	width: 132rem;
	left: 2.8rem;
	top: 14.9rem;
	max-height: 70rem;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0.7rem;
		height: 70rem;
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

const LineWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const DefaultWrapperInBookMarkList = styled.div``;
