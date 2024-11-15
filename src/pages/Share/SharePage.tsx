import SharePageComponent from '@/assets/SharePageComponent.svg?react';
import styled from 'styled-components';

const SharePage = () => {
	return (
		<SharePageWrapper>
			<ComponentWrapper>
				<SharePageComponent />
			</ComponentWrapper>
		</SharePageWrapper>
	);
};
export default SharePage;

const SharePageWrapper = styled.div`
	width: 100%;
	height: 1400px;
	background-color: ${({ theme }) => theme.colors.background};
	position: relative;
	z-index: 0;
	display: flex;
	position: relative;
`;
const ComponentWrapper = styled.div`
	position: absolute;
	left: 29.7rem;
	top: 6rem;
`;
