import { ListItem } from '@/constants/ListItems';
import { createContext, useContext } from 'react';

export interface BookmarkContextType {
	bookmarks: ListItem[];
	fetchBookmarks: (endpoint: string) => Promise<void>;
	addBookmark: (url: string, currentCategory: string) => Promise<void>;
}

export const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const useBookmarkContext = () => {
	const context = useContext(BookmarkContext);
	if (!context) {
		throw new Error('useBookmarkContext는 BookmarkProvider 내에서만 사용 가능합니다.');
	}
	return context;
};
