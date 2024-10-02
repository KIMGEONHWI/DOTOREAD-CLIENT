import Storage from './Storage';
import Icons from '@/constants/icons';
import { useState } from 'react';
import styled from 'styled-components';

function SideBar() {
	const [clicked, setClicked] = useState<string>('home');
	return (
		<SideBarWrapper>
			<Menus>
				{Icons.map((icon) => (
					<Icon
						key={icon.id}
						as={clicked === icon.id ? icon.clicked : icon.default}
						onClick={() => setClicked(icon.id)}
					/>
				))}
			</Menus>
			<Storage current={5} total={20} />
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
