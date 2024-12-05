import DotoryDefaultIcon from '@/assets/DotoryDeafault.svg?react';
import DotoryFillIcon from '@/assets/DotoryFill.svg?react';
import LineShortIcon from '@/assets/LineShort.svg?react';
import React from 'react';
import styled from 'styled-components';

interface MissionBoxProps {
	content: string;
	goal: number;
	current: number;
}

const MissionBox = ({ content, goal, current }: MissionBoxProps) => {
	const filledIcons = Array(current).fill(<DotoryFillIcon />);
	const defaultIcons = Array(goal - current).fill(<DotoryDefaultIcon />);
	const icons = [...filledIcons, ...defaultIcons];

	return (
		<MissionBoxWrapper>
			<Title>{content}</Title>
			<BottomContainer>
				<LineShortIcon />
				<DotoryContainer>{icons.map((icon, index) => React.cloneElement(icon, { key: index }))}</DotoryContainer>
			</BottomContainer>
		</MissionBoxWrapper>
	);
};

export default MissionBox;

const MissionBoxWrapper = styled.div`
	width: 34.2rem;
	height: 19.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3.4rem 2rem 4.175rem;
	background-color: ${({ theme }) => theme.colors.background_box};
	border-radius: 30px;
	border: 3px solid ${({ theme }) => theme.colors.gray2};
	gap: 1.8rem;
`;

const Title = styled.p`
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Semibold_22px};
`;

const BottomContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.9rem;
`;

const DotoryContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2.1rem;
`;
