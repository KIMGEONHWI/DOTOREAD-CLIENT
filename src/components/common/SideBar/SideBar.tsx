import Acorn from '@/assets/Acorn.svg?react';
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
import { useState } from 'react';
import styled from 'styled-components';

//svg를 컴포넌트화 할 때 svg?react 뒤에 붙이기

//React.ElementType
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

//map 함수 문법  as?
function SideBar() {
	const [clicked, setClicked] = useState<string>('home');
	return (
		<SideBarWrapper>
			<Menus>
				{icons.map((icon) => (
					<Icon
						key={icon.id}
						as={clicked === icon.id ? icon.clicked : icon.default}
						onClick={() => setClicked(icon.id)}
					/>
				))}
			</Menus>
			<StorageWrapper>
				<Acorn />
				<StorageCount>5/20</StorageCount>
			</StorageWrapper>
		</SideBarWrapper>
	);
}

export default SideBar;

const SideBarWrapper = styled.div`
	width: 12rem;
	height: 108rem;
	border-right: 0.35rem solid ${({ theme }) => theme.colors.gray1};
	background-color: ${({ theme }) => theme.colors.background};
	position: fixed;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Menus = styled.div`
	display: flex;
	width: 6.5rem;
	flex-direction: column;
	justify-content: center;
	gap: 3rem;
	top: 0.5em;
	position: relative;
`;

const Icon = styled.svg``;
const StorageWrapper = styled.div`
	top: 25.3rem;
	position: relative;
`;
const StorageCount = styled.div`
	text-align: center;
	${({ theme }) => theme.fonts.Pretendard_Bold_20px};
	color: ${({ theme }) => theme.colors.orange1};
	top: 0.82rem;
	position: relative;
`;
