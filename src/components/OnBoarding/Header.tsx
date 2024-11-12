import LogoIcon from '@/assets/LogoOnBoarding.svg?react';
import Btn from '@/components/common/Button/Btn';
import styled from 'styled-components';

interface HeaderScrollProps {
	isScrolled: boolean;
}
const Header = ({ isScrolled }: HeaderScrollProps) => {
	return (
		<HeaderWrapper isScrolled={isScrolled}>
			<LogoIcon />
			<Btn id="start" />
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.header<HeaderScrollProps>`
	display: flex;
	align-items: center;
	gap: 115.023rem;
	justify-content: center;
	width: 100vw;
	height: 13.8rem;
	flex-shrink: 0;
	position: fixed;
	top: 0;
	background: ${({ isScrolled }) => (isScrolled ? 'rgba(118, 118, 118, 0.75)' : 'rgba(118, 118, 118, 0)')};
	transition: background 0.3s ease;
	z-index: 1;
`;
