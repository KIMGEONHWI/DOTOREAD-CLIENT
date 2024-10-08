interface ListItem {
	id: string;
	name: string;
	hastag: string;
	url: string;
	date: string;
	category: 'classified' | 'unclassified';
}

const classifiedBookmarks: ListItem[] = [
	{
		id: '1',
		name: '[2D 게임]',
		hastag: '셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		category: 'classified',
	},
];

const unclassifiedBookmarks: ListItem[] = [
	{
		id: '1',
		name: '[2D 게임]',
		hastag: '셀피 메니저 만들기',
		url: 'https://udangtangtang-cording-oldcastle.tistory.com',
		date: '9월 10일',
		category: 'unclassified',
	},
];

const allBookmarks = [...classifiedBookmarks, ...unclassifiedBookmarks];

export { classifiedBookmarks, unclassifiedBookmarks, allBookmarks };
