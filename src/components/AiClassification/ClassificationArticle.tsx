import AiDeleteIcon from '@/assets/Ai_Delete.svg?react';
import ArticleFolderIcon from '@/assets/Article_Folder.svg?react';
import styled from 'styled-components';

interface ClassificationArticleProps {
	title: string;
	hashtag: string;
	folder: string;
	date: string;
	showDeleteIcon?: boolean;
	forCarousel?: boolean;
}

interface StyledAiDeleteIconProps {
	show: boolean;
}

const ClassificationArticle = ({
	title,
	folder,
	date,
	hashtag,
	showDeleteIcon = false,
	forCarousel = false,
}: ClassificationArticleProps) => {
	return (
		<ArticleWrapper forCarousel={forCarousel}>
			<StyledAiDeleteIcon show={showDeleteIcon} />
			<ArticleMini forCarousel={forCarousel}>
				<ArticleMiniTop>
					<ArticleMiniTitle forCarousel={forCarousel}>{title}</ArticleMiniTitle>
					<ArticleMiniHashtag forCarousel={forCarousel}>#{hashtag}</ArticleMiniHashtag>
				</ArticleMiniTop>
				<ArticleMiniBottom>
					<ArticleMiniBottomLeft>
						<ArticleFolderIcon />
						<ArticleFolderName forCarousel={forCarousel}>{folder}</ArticleFolderName>
					</ArticleMiniBottomLeft>
					<ArticleDate forCarousel={forCarousel}>{date}</ArticleDate>
				</ArticleMiniBottom>
			</ArticleMini>
		</ArticleWrapper>
	);
};

export default ClassificationArticle;

const ArticleWrapper = styled.div<{ forCarousel?: boolean }>`
	flex: 0 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.1rem 1.5rem;
	gap: ${({ forCarousel }) => (forCarousel ? '11.723rem' : '7.723rem')};

	width: ${({ forCarousel }) => (forCarousel ? '40rem' : '33.4118rem')};
	height: ${({ forCarousel }) => (forCarousel ? '25.5rem' : '21.3rem')};
	background: ${({ theme }) => theme.colors.white1};
	border-radius: ${({ forCarousel }) => (forCarousel ? '30px' : '20px')};
`;

const StyledAiDeleteIcon = styled(AiDeleteIcon)<StyledAiDeleteIconProps>`
	margin-left: 27.5rem;
	visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
`;

const ArticleMini = styled.div<{ forCarousel?: boolean }>`
	display: flex;
	flex-direction: column;
	width: ${({ forCarousel }) => (forCarousel ? '36.3rem' : '30.3212rem')};
	height: ${({ forCarousel }) => (forCarousel ? '8.9rem' : '8.8541rem')};
	border-radius: ${({ forCarousel }) => (forCarousel ? '20px' : '15.137px')};
	padding: 0.973rem 0.996rem 0.707rem;
	gap: 2rem;
	background: ${({ theme }) => theme.colors.article_content};
`;

const ArticleMiniTop = styled.div`
	display: flex;
`;

const ArticleMiniTitle = styled.h3<{ forCarousel?: boolean }>`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${({ theme }) => theme.colors.white1};
	${({ theme, forCarousel }) =>
		forCarousel ? theme.fonts.Pretendard_Semibold_22px : theme.fonts.Pretendard_Semibold_18px};
`;

const ArticleMiniHashtag = styled.p<{ forCarousel?: boolean }>`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${({ theme }) => theme.colors.white1};
	${({ theme, forCarousel }) =>
		forCarousel ? theme.fonts.Pretendard_Semibold_22px : theme.fonts.Pretendard_Semibold_18px};
`;

const ArticleMiniBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ArticleMiniBottomLeft = styled.div`
	display: flex;
	align-items: center;
`;

const ArticleFolderName = styled.div<{ forCarousel?: boolean }>`
	${({ theme, forCarousel }) =>
		forCarousel ? theme.fonts.Pretendard_Semibold_13px : theme.fonts.Pretendard_Semibold_10px};
	color: ${({ theme }) => theme.colors.white1};
`;

const ArticleDate = styled.p<{ forCarousel?: boolean }>`
	color: ${({ theme }) => theme.colors.white1};
	${({ theme, forCarousel }) =>
		forCarousel ? theme.fonts.Pretendard_Regular_12px : theme.fonts.Pretendard_Regular_9px};
`;
