import AiDeleteIcon from '@/assets/Ai_Delete.svg?react';
import ArticleFolderIcon from '@/assets/Article_Folder.svg?react';
import styled from 'styled-components';

interface ClassificationArticleProps {
	title: string;
	hashtag: string;
	folder: string;
	date: string;
	showDeleteIcon?: boolean;
	forcarousel?: boolean;
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
	forcarousel = false,
}: ClassificationArticleProps) => {
	return (
		<ArticleWrapper forcarousel={forcarousel}>
			<StyledAiDeleteIcon show={showDeleteIcon} />
			<ArticleMini forcarousel={forcarousel}>
				<ArticleMiniTop>
					<ArticleMiniTitle forcarousel={forcarousel}>{title}</ArticleMiniTitle>
					<ArticleMiniHashtag forcarousel={forcarousel}>#{hashtag}</ArticleMiniHashtag>
				</ArticleMiniTop>
				<ArticleMiniBottom>
					<ArticleMiniBottomLeft>
						<ArticleFolderIcon />
						<ArticleFolderName forcarousel={forcarousel}>{folder}</ArticleFolderName>
					</ArticleMiniBottomLeft>
					<ArticleDate forcarousel={forcarousel}>{date}</ArticleDate>
				</ArticleMiniBottom>
			</ArticleMini>
		</ArticleWrapper>
	);
};

export default ClassificationArticle;

const ArticleWrapper = styled.div<{ forcarousel?: boolean }>`
	flex: 0 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.1rem 1.5rem;
	gap: ${({ forcarousel }) => (forcarousel ? '11.723rem' : '7.723rem')};

	width: ${({ forcarousel }) => (forcarousel ? '40rem' : '33.4118rem')};
	height: ${({ forcarousel }) => (forcarousel ? '25.5rem' : '21.3rem')};
	background: ${({ theme }) => theme.colors.white1};
	border-radius: ${({ forcarousel }) => (forcarousel ? '30px' : '20px')};
`;

const StyledAiDeleteIcon = styled(AiDeleteIcon)<StyledAiDeleteIconProps>`
	margin-left: 27.5rem;
	visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
`;

const ArticleMini = styled.div<{ forcarousel?: boolean }>`
	display: flex;
	flex-direction: column;
	width: ${({ forcarousel }) => (forcarousel ? '36.3rem' : '30.3212rem')};
	height: ${({ forcarousel }) => (forcarousel ? '8.9rem' : '8.8541rem')};
	border-radius: ${({ forcarousel }) => (forcarousel ? '20px' : '15.137px')};
	padding: 0.973rem 0.996rem 0.707rem;
	gap: 2rem;
	background: ${({ theme }) => theme.colors.article_content};
`;

const ArticleMiniTop = styled.div`
	display: flex;
`;

const ArticleMiniTitle = styled.h3<{ forcarousel?: boolean }>`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${({ theme }) => theme.colors.white1};
	${({ theme, forcarousel }) =>
		forcarousel ? theme.fonts.Pretendard_Semibold_22px : theme.fonts.Pretendard_Semibold_18px};
`;

const ArticleMiniHashtag = styled.p<{ forcarousel?: boolean }>`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${({ theme }) => theme.colors.white1};
	${({ theme, forcarousel }) =>
		forcarousel ? theme.fonts.Pretendard_Semibold_22px : theme.fonts.Pretendard_Semibold_18px};
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

const ArticleFolderName = styled.div<{ forcarousel?: boolean }>`
	${({ theme, forcarousel }) =>
		forcarousel ? theme.fonts.Pretendard_Semibold_13px : theme.fonts.Pretendard_Semibold_10px};
	color: ${({ theme }) => theme.colors.white1};
`;

const ArticleDate = styled.p<{ forcarousel?: boolean }>`
	color: ${({ theme }) => theme.colors.white1};
	${({ theme, forcarousel }) =>
		forcarousel ? theme.fonts.Pretendard_Regular_12px : theme.fonts.Pretendard_Regular_9px};
`;
