interface ListItem {
	id: string;
	name: string;
	hashtag: string;
	url: string;
	date: string;
	iconType: string;
	category: string;
}

// 분류된 FoldersList
const classifiedBookmarks: ListItem[] = [
	{
		id: '1',
		name: '2D 게임',
		hashtag: '유니티 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'classified',
		category: '유니티',
	},
	{
		id: '2',
		name: '3D 게임',
		hashtag: 'bbb 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'classified',
		category: 'bbb',
	},
];

//미분류
const unclassifiedBookmarks: ListItem[] = [
	{
		id: '1',
		name: '2D 게임',
		hashtag: '미분류됨 1 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: '2',
		name: '2D 게임',
		hashtag: '미분류됨 2 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
];

//모든 북마크
const allBookmarks = [...classifiedBookmarks, ...unclassifiedBookmarks];

export { classifiedBookmarks, unclassifiedBookmarks, allBookmarks };
