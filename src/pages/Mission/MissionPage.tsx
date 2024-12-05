import DonateIcon from '@/assets/donate.svg?react';
import MissionIcon from '@/assets/dotorymission.svg?react';
import DonateArticle from '@/components/Mission/DonateArticle';
import MissionBox from '@/components/Mission/MissionBox';
import { DONATE_CONTENT } from '@/constants/DonateContents';
import { MISSION_CONTENTS } from '@/constants/MissonContents';
import styled from 'styled-components';

const MissionPage = () => {
	return (
		<MissionPageWrapper>
			<MissionPageTopContainer>
				<DonateTitleContainer>
					<DonateIcon />
					<DonateTitle>DONATE DOTORY</DonateTitle>
				</DonateTitleContainer>

				<DonateArticleContiner>
					{DONATE_CONTENT.map(({ id, icon: Icon, title, text }) => (
						<DonateArticle key={id} icon={Icon} title={title} text={text} />
					))}
				</DonateArticleContiner>
			</MissionPageTopContainer>
			<MissionPageBottomContainer>
				<DonateTitleContainer>
					<MissionIcon />
					<DonateTitle>DOTORY MISSION</DonateTitle>
				</DonateTitleContainer>

				<MissionBoxContainer>
					{MISSION_CONTENTS.map(({ content, goal, current }, index) => (
						<MissionBox key={index} content={content} goal={goal} current={current} />
					))}
				</MissionBoxContainer>
			</MissionPageBottomContainer>
		</MissionPageWrapper>
	);
};
export default MissionPage;

const MissionPageWrapper = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.background};
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding: 10.1rem 29.8rem;
	gap: 7.9rem;
`;

const MissionPageTopContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.7rem;
`;

const DonateTitleContainer = styled.div`
	display: flex;
	gap: 0.8rem;
`;

const DonateTitle = styled.h1`
	${({ theme }) => theme.fonts.Pretendard_Semibold_38px};
	color: ${({ theme }) => theme.colors.white1};
`;

const DonateArticleContiner = styled.div`
	display: flex;
	gap: 3.3rem;
`;

const MissionPageBottomContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.7rem;
`;

const MissionBoxContainer = styled.div`
	display: flex;
	gap: 3.1rem;
`;
