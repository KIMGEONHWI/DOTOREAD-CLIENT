import Storage from '@/components/common/SideBar/Storage';
import Icons from '@/constants/Icons';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SideBar() {
	const [clicked, setClicked] = useState<string>('home');
	const navigate = useNavigate();

	const hanleIconClick = (iconId: string) => {
		switch (iconId) {
			case 'share':
				navigate('/share');
				break;
			case 'mission':
				navigate('/mission');
				break;
			case 'bookmark':
				navigate('/bookmark');
				break;
			default:
				navigate('/main');
				break;
		}
		setClicked(iconId);
	};

	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/bookmark' || location.pathname === '/ai') {
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
			<Storage />
		</SideBarWrapper>
	);
}

export default SideBar;

const SideBarWrapper = styled.div`
	width: 12rem;
	height: 100vh;
	border-right: 0.35rem solid ${({ theme }) => theme.colors.gray1};
	background-color: ${({ theme }) => theme.colors.background};
	position: fixed;
	z-index: 2;
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

const Icon = styled.svg`
	cursor: pointer;
`;
