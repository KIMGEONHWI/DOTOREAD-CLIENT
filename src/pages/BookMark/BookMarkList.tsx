import LineBetweenBookmark from '@/assets/LineBetweenBookmark.svg?react';
import Default from '@/pages/BookMark/Default';
import ListItem from '@/pages/BookMark/ListItem';
import React from 'react';
import styled from 'styled-components';

interface Bookmark {
	id: string;
	name: string;
	hashtag: string;
	url: string;
	date: string;
}
// 북마크 하나당 선택 가능 여부가 아니라 전체 리스트의 선택 가능여부이기에
interface BookMarkListProps {
	bookmarks: Bookmark[];
	isSelectable: boolean;
	isAllSelected: boolean;
}

function BookMarkList({ bookmarks, isSelectable, isAllSelected }: BookMarkListProps) {
	return (
		<BookMarkListWrapper>
			{bookmarks.length > 0 ? (
				bookmarks.map((bookmark, index) => (
					<React.Fragment key={bookmark.id}>
						<ListItem
							name={bookmark.name}
							hashtag={bookmark.hashtag}
							url={bookmark.url}
							date={bookmark.date}
							isSelectable={isSelectable}
							isAllSelected={isAllSelected}
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
