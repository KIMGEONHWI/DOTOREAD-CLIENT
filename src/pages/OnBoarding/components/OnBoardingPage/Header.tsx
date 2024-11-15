import LogoIcon from '@/assets/LogoOnBoarding.svg?react';
import Btn from '@/components/common/Button/Btn';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderScrollProps {
	isScrolled: boolean;
}
const Header = ({ isScrolled }: HeaderScrollProps) => {
	const navigate = useNavigate();
	const handleStartClick = () => {
		navigate('/start');
	};
	return (
		<HeaderWrapper isScrolled={isScrolled}>
			<LogoIcon />
			<Btn id="start" onClick={handleStartClick} />
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.header.withConfig({
	shouldForwardProp: (prop) => prop !== 'isScrolled',
})<HeaderScrollProps>`
	display: flex;
	align-items: center;
	gap: 115.023rem;
	justify-content: center;
	width: 100vw;
	height: 13.8rem;
	flex-shrink: 0;
	position: fixed;
	top: 0;
	background: ${({ isScrolled }) => (isScrolled ? 'rgba(118, 118, 118, 0.20)' : 'rgba(118, 118, 118, 0)')};
	transition: background 0.7s ease;
	z-index: 1;
`;
