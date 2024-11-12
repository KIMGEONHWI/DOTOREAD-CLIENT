import BookMarkSlide from '@/components/BookMarkSlide/BookMarkSlide';
import Storage from '@/components/common/SideBar/Storage';
import Icons from '@/constants/Icons';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SideBar() {
	const [clicked, setClicked] = useState<string>('home');
	const navigate = useNavigate();

	const hanleIconClick = (iconId: string) => {
		if (iconId != 'bookmark') {
			navigate('/main');
		}
		setClicked(iconId);
	};

	const location = useLocation();
	useEffect(() => {
		if (location.pathname === '/bookmark') {
			setClicked('bookmark');
		}
	}, [location.pathname]);

	return (
		<SideBarWrapper>
			<Menus>
				{Icons.map((icon) => (
					<Icon
						key={icon.id}
						as={clicked === icon.id ? icon.clicked : icon.default}
						onClick={() => hanleIconClick(icon.id)}
					/>
				))}
			</Menus>
			<Storage current={5} total={20} />
			<BookMarkSlide show={clicked === 'bookmark'} />
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
	z-index: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Menus = styled.div`
	display: flex;
	width: 6.5rem;
	flex-direction: column;
	gap: 3rem;
	top: 17.8rem;
	position: relative;
`;

const Icon = styled.svg``;
