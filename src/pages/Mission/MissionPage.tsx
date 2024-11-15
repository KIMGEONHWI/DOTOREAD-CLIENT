import MissionPageComponent from '@/assets/MissionPageComponent.svg?react';
import styled from 'styled-components';

const MissionPage = () => {
	return (
		<MissionPageWrapper>
			<ComponentWrapper>
				<MissionPageComponent />
			</ComponentWrapper>
		</MissionPageWrapper>
	);
};
export default MissionPage;

const MissionPageWrapper = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.background};
	position: relative;
	z-index: 0;
	display: flex;
	position: relative;
	min-height: 100vh;
`;
const ComponentWrapper = styled.div`
	position: absolute;
	left: 29.8rem;
	top: 7.1rem;
`;
