import BookMarkIcon from '@/assets/BookMark.svg?react';
import BookMarkIconClicked from '@/assets/BookMarkClicked.svg?react';
import HomeIcon from '@/assets/Home.svg?react';
import HomeIconClicked from '@/assets/HomeClicked.svg?react';
import MissionIcon from '@/assets/Mission.svg?react';
import MissionIconclicked from '@/assets/MissionClicked.svg?react';
import MyPageIcon from '@/assets/MyPage.svg?react';
import MyPageIconClicked from '@/assets/MyPageClicked.svg?react';
import ShareIcon from '@/assets/Share.svg?react';
import ShareIconClicked from '@/assets/ShareClicked.svg?react';

interface Icon {
	id: string;
	default: React.ElementType;
	clicked: React.ElementType;
}

const icons: Icon[] = [
	{ id: 'home', default: HomeIcon, clicked: HomeIconClicked },
	{ id: 'bookmark', default: BookMarkIcon, clicked: BookMarkIconClicked },
	{ id: 'share', default: ShareIcon, clicked: ShareIconClicked },
	{ id: 'mission', default: MissionIcon, clicked: MissionIconclicked },
	{ id: 'mypage', default: MyPageIcon, clicked: MyPageIconClicked },
];

export default icons;
