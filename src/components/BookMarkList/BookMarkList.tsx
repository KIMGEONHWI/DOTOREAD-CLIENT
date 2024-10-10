import Default from '../common/BookMarkList/Default';
import ListItem from '../common/BookMarkList/ListItem';
import styled from 'styled-components';

interface Bookmark {
	id: string;
	name: string;
	hashtag: string;
	url: string;
	date: string;
}
interface BookMarkListProps {
    bookmarks: Bookmark[];
}

function BookMarkList({ bookmarks }: BookMarkListProps) {
	return (
		<BookMarkListWrapper>
			{bookmarks.length > 0 ? (
				bookmarks.map((bookmark) => (
					<ListItem
						key={bookmark.id}
						name={bookmark.name}
						hashtag={bookmark.hashtag}
						url={bookmark.url}
						date={bookmark.date}
					/>
				))
			) : (
				<DefaultWrapper>
					<Default message="북마크가 없습니다." />
				</DefaultWrapper>
			)}
		</BookMarkListWrapper>
	);
}

export default BookMarkList;

const BookMarkListWrapper = styled.div`
	position: absolute;
	width: 133.6rem;
	left: 2.8rem;
	top: 14.9rem;
`;

const DefaultWrapper = styled.div`
	position: absolute;
`;
