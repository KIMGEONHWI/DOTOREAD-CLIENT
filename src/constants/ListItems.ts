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
// 유니티 폴더 아이콘 눌렀을때 북마크 없습니다 잘 뜨는지 확인하기 위해 주석 처리해뒀습니다.
const classifiedBookmarks: ListItem[] = [
	// {
	// 	id: 'c1',
	// 	name: '2D 게임',
	// 	hashtag: '유니티 셀피 메니저 만들기',
	// 	url: 'https://udangtangtang-cording-oldcastle.tistory.com',
	// 	date: '9월 10일',
	// 	iconType: 'classified',
	// 	category: '유니티',
	// },
	{
		id: 'c2',
		name: '3D 게임',
		hashtag: 'bbb 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'classified',
		category: 'bbb',
	},
	// {
	// 	id: 'c3',
	// 	name: '2D 게임',
	// 	hashtag: '유니티 셀피 메니저 만들기',
	// 	url: 'https://udangtangtang-cording-oldcastle.tistory.com',
	// 	date: '9월 10일',
	// 	iconType: 'classified',
	// 	category: '유니티',
	// },
	{
		id: 'c4',
		name: '3D 게임',
		hashtag: 'bbb 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'classified',
		category: 'bbb',
	},
	// {
	// 	id: 'c5',
	// 	name: '2D 게임',
	// 	hashtag: '유니티 셀피 메니저 만들기',
	// 	url: 'https://udangtangtang-cording-oldcastle.tistory.com',
	// 	date: '9월 10일',
	// 	iconType: 'classified',
	// 	category: '유니티',
	// },
	{
		id: 'c6',
		name: '3D 게임',
		hashtag: 'bbb 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'classified',
		category: 'bbb',
	},
	// {
	// 	id: 'c7',
	// 	name: '2D 게임',
	// 	hashtag: '유니티 셀피 메니저 만들기',
	// 	url: 'https://udangtangtang-cording-oldcastle.tistory.com',
	// 	date: '9월 10일',
	// 	iconType: 'classified',
	// 	category: '유니티',
	// },
	{
		id: 'c8',
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
		id: 'u1',
		name: '2D 게임',
		hashtag: '미분류됨 1 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: 'u2',
		name: '2D 게임',
		hashtag: '미분류됨 2 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: 'u3',
		name: '2D 게임',
		hashtag: '미분류됨 2 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: 'u4',
		name: '2D 게임',
		hashtag: '미분류됨 2 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: 'u5',
		name: '2D 게임',
		hashtag: '미분류됨 2 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: 'u6',
		name: '2D 게임',
		hashtag: '미분류됨 2 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: 'u7',
		name: '2D 게임',
		hashtag: '미분류됨 2 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: 'u8',
		name: '2D 게임',
		hashtag: '미분류됨 2 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: 'u9',
		name: '2D 게임',
		hashtag: '미분류됨 2 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: 'u11',
		name: '2D 게임',
		hashtag: '미분류됨 2 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: 'u12',
		name: '2D 게임',
		hashtag: '미분류됨 2 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: 'u13',
		name: '2D 게임',
		hashtag: '미분류됨 2 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: 'u14',
		name: '2D 게임',
		hashtag: '미분류됨 2 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: 'u15',
		name: '2D 게임',
		hashtag: '미분류됨 2 셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		iconType: 'unclassified',
		category: '미분류',
	},
	{
		id: 'u16',
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
