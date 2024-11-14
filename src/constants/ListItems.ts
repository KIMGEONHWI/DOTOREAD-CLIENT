import ListItem from '@/pages/BookMark/ListItem';

const BASE_URL = import.meta.env.VITE_BASE_URL;
export default interface ListItem {
	id: string;
	title: string;
	url: string;
	img: string | null;
	date: string;
	iconType: string;
	category: string;
}

function transformApiResponseToItems(responseData: any[]): ListItem[] {
	return responseData.map((item) => ({
		id: String(item.bookmarkId),
		title: item.title || '제목 없음',
		url: item.url,
		img: item.img || null,
		date: item.createdAt,
		iconType: 'unclassified',
		category: item.folder ? item.folder.name : '미분류',
	}));
}

// 미분류
const unclassifiedBookmarks: ListItem[] = [];

export async function fetchUnclassifiedBookmarks() {
	console.log(' fetchUnclassifiedBookmarks 실행');
	const accessToken = localStorage.getItem('access-token');

	if (!accessToken) {
		console.error('Access token not found in LocalStorage');
		return;
	}
	try {
		const response = await fetch(`${BASE_URL}/api/v1/bookmarks/uncategorized?sortType=DESC`, {
			method: 'GET',
			headers: {
				access: `${accessToken}`,
			},
		});
		const data = await response.json();
		if (data.isSuccess) {
			unclassifiedBookmarks.length = 0;
			unclassifiedBookmarks.push(...transformApiResponseToItems(data.result));
			console.log('unclassifiedBookmarks:', allBookmarks);
		} else {
			console.error('Failed to fetch all bookmarks:', data.message);
		}
	} catch (error) {
		console.error('Error fetching unclassified bookmarks:', error);
	}
}
fetchUnclassifiedBookmarks();

//모든 북마크
const allBookmarks: ListItem[] = [];

export async function fetchAllBookmarks() {
	const accessToken = localStorage.getItem('access-token');
	if (!accessToken) {
		console.error('Access token not found in LocalStorage');
		return;
	}
	try {
		const response = await fetch(`${BASE_URL}/api/v1/bookmarks/all?sortType=DESC`, {
			method: 'GET',
			headers: {
				access: `${accessToken}`,
			},
		});
		const data = await response.json();
		if (data.isSuccess) {
			allBookmarks.length = 0;
			allBookmarks.push(...transformApiResponseToItems(data.result));
			console.log('All bookmarks:', allBookmarks);
		} else {
			console.error('Failed to fetch all bookmarks:', data.message);
		}
	} catch (error) {
		console.error('Error fetching all bookmarks:', error);
	}
}
fetchAllBookmarks();

export { transformApiResponseToItems, unclassifiedBookmarks, allBookmarks };
export type { ListItem };
