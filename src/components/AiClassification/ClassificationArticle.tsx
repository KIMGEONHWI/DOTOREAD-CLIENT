import AiDeleteIcon from '@/assets/Ai_Delete.svg?react';
import ArticleFolderIcon from '@/assets/Article_Folder.svg?react';
import styled from 'styled-components';

interface ClassificationArticleProps {
	title: string;
	hashtag: string;
	folder: string;
	date: string;
	showDeleteIcon?: boolean;
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
}: ClassificationArticleProps) => {
	return (
		<ArticleWrapper>
			<StyledAiDeleteIcon show={showDeleteIcon} />
			<ArticleMini>
				<ArticleMiniTop>
					<ArticleMiniTitle>{title}</ArticleMiniTitle>
					<ArticleMiniHashtag>#{hashtag}</ArticleMiniHashtag>
				</ArticleMiniTop>
				<ArticleMiniBottom>
					<ArticleMiniBottomLeft>
						<ArticleFolderIcon />
						<ArticleFolderName>{folder}</ArticleFolderName>
					</ArticleMiniBottomLeft>
					<ArticleDate>{date}</ArticleDate>
				</ArticleMiniBottom>
			</ArticleMini>
		</ArticleWrapper>
	);
};

export default ClassificationArticle;

const ArticleWrapper = styled.div`
	flex: 0 0 auto;
	display: flex;
	flex-direction: column;
	padding: 1.1rem 1.5rem;
	gap: 7.723rem;
	width: 33.4118rem;
	height: 21.3rem;
	background: ${({ theme }) => theme.colors.white1};
	border-radius: 20px;
`;

const StyledAiDeleteIcon = styled(AiDeleteIcon)<StyledAiDeleteIconProps>`
	margin-left: 27.5rem;
	visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
`;

const ArticleMini = styled.div`
	display: flex;
	flex-direction: column;
	width: 30.3212rem;
	height: 8.8541rem;
	border-radius: 15.137px;
	padding: 0.973rem 0.996rem 0.707rem;
	gap: 3rem;
	background: ${({ theme }) => theme.colors.article_content};
`;

const ArticleMiniTop = styled.div`
	display: flex;
`;

const ArticleMiniTitle = styled.h3`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Semibold_18px};
`;

const ArticleMiniHashtag = styled.p`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Semibold_18px};
`;

const ArticleMiniBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ArticleMiniBottomLeft = styled.div`
	display: flex;
`;

const ArticleFolderName = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_10px};
	color: ${({ theme }) => theme.colors.white1};
	padding-top: 0.5rem;
`;

const ArticleDate = styled.p`
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Regular_9px};
`;
