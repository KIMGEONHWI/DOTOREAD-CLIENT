import DonateIcon from '@/assets/donate.svg?react';
import DonateArticle from '@/components/Mission/DonateArticle';
import { DONATE_CONTENT } from '@/constants/\bDonateContents';
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
