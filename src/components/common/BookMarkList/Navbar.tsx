import styled from 'styled-components';

function Navbar() {
	return (
		<NavbarWrapper>
			<Name>Name</Name>
			<Url>Url</Url>
			<Date>Date</Date>
		</NavbarWrapper>
	);
}

export default Navbar;

const NavbarWrapper = styled.div`
	width: 128.2rem;
	height: 3.7rem;
	background-color: ${({ theme }) => theme.colors.gray1};
	display: flex;
	align-items: center;
	position: absolute;
`;
const Name = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	color: ${({ theme }) => theme.colors.white1};
	margin-left: 14.7rem;
`;
const Url = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	color: ${({ theme }) => theme.colors.white1};
	margin-left: 31.3rem;
`;
const Date = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	color: ${({ theme }) => theme.colors.white1};
	margin-left: 55.2rem;
`;
