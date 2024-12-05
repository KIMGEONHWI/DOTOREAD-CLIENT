import AiClassificationBtn from '../common/Button/AiClassificationBtn';
import styled from 'styled-components';

interface DonateArticleProps {
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	title: string;
	text: string;
}

const DonateArticle = ({ icon: Icon, title, text }: DonateArticleProps) => {
	return (
		<DonateArticleWrapper>
			<Icon />
			<TextContainer>
				<Title>{title}</Title>
				<Text>{text}</Text>
				<AiClassificationBtnContainer>
					<AiClassificationBtn text="후원하기" color="white1" bordercolor="orange1" backgroundcolor="bookmark_click" />
				</AiClassificationBtnContainer>
			</TextContainer>
		</DonateArticleWrapper>
	);
};

export default DonateArticle;

const DonateArticleWrapper = styled.div`
	width: 71.4rem;
	height: 35.5rem;
	padding: 5.2rem 4.7rem 5.257rem 4.737rem;
	display: flex;
	border-radius: 20.928px;
	border: 3px solid ${({ theme }) => theme.colors.gray1};
	gap: 2.714rem;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const Title = styled.h2`
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
	color: ${({ theme }) => theme.colors.white1};
`;

const Text = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	color: ${({ theme }) => theme.colors.white1};
	width: 34.8rem;
`;

const AiClassificationBtnContainer = styled.div`
	margin-top: 3.1rem;
	margin-left: 17.3rem;
`;
