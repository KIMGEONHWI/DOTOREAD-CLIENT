import ListItem from '@/pages/BookMark/ListItem';

export interface ListItem {
	id: string;
	title: string;
	url: string;
	img: string | null;
	date: string;
	iconType: string;
	category: string;
	folderId: number;
}

interface ApiResponseItem {
	bookmarkId: number;
	title?: string;
	url: string;
	img?: string | null;
	createdAt: string;
	folder?: {
		id: number;
		name: string;
	};
}

export function transformApiResponseToItems(responseData: ApiResponseItem[]): ListItem[] {
	return responseData.map((item) => ({
		id: String(item.bookmarkId),
		title: item.title || '제목 없음',
		url: item.url,
		img: item.img || null,
		date: item.createdAt,
		iconType: 'unclassified',
		category: item.folder ? item.folder.name : '미분류',
		folderId: item.folder ? item.folder.id : 0,
	}));
}
