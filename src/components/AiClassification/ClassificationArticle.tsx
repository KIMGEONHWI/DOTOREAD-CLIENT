import AiDefault from '@/assets/AiDefault.png';
import AiDeleteIcon from '@/assets/Ai_Delete.svg?react';
import ArticleFolderIcon from '@/assets/Article_Folder.svg?react';
import axios from 'axios';
import styled from 'styled-components';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface ClassificationArticleProps {
	title: string;
	folder: string;
	date: string;
	showDeleteIcon?: boolean;
	forcarousel?: boolean;
	img?: string | null;
	url: string;
	bookmarkId: number;
}

const ClassificationArticle = ({
	title,
	folder,
	date,
	showDeleteIcon = false,
	forcarousel = false,
	img,
	url,
	bookmarkId,
}: ClassificationArticleProps) => {
	const handleArticleClick = () => {
		window.open(url, '_blank', 'noopener,noreferrer');
	};

	const handleDeleteClick = async (e: React.MouseEvent) => {
		e.stopPropagation();

		try {
			const accessToken = localStorage.getItem('access-token');
			if (!accessToken) {
				console.error('Access token not found');
				return;
			}

			await axios.patch(`${BASE_URL}/api/v1/classify/delete/${bookmarkId}`, null, {
				headers: {
					access: `${accessToken}`,
				},
			});

			console.log('Bookmark deleted successfully');
		} catch (error) {
			console.error('Failed to delete the bookmark', error);
		}
	};

	return (
		<ArticleWrapper onClick={handleArticleClick} $forcarousel={forcarousel} $img={img ?? AiDefault}>
			<StyledAiDeleteIcon $show={showDeleteIcon} onClick={handleDeleteClick} />
			<ArticleMini $forcarousel={forcarousel}>
				<ArticleMiniTop>
					<ArticleMiniTitle $forcarousel={forcarousel}>{title}</ArticleMiniTitle>
				</ArticleMiniTop>
				<ArticleMiniBottom>
					<ArticleMiniBottomLeft>
						<ArticleFolderIcon />
						<ArticleFolderName $forcarousel={forcarousel}>{folder}</ArticleFolderName>
					</ArticleMiniBottomLeft>
					<ArticleDate $forcarousel={forcarousel}>{date}</ArticleDate>
				</ArticleMiniBottom>
			</ArticleMini>
		</ArticleWrapper>
	);
};

export default ClassificationArticle;

const ArticleWrapper = styled.div<{ $forcarousel?: boolean; $img?: string | null }>`
	flex: 0 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.1rem 1.5rem;
	cursor: pointer;
	gap: ${({ $forcarousel }) => ($forcarousel ? '11.723rem' : '7.723rem')};
	width: ${({ $forcarousel }) => ($forcarousel ? '40rem' : '33.4118rem')};
	height: ${({ $forcarousel }) => ($forcarousel ? '25.5rem' : '21.3rem')};
	background: ${({ $img }) =>
		$img && $img !== 'null' ? `url(${$img}) center / cover no-repeat` : `url(${AiDefault}) center / cover no-repeat`};
	border-radius: ${({ $forcarousel }) => ($forcarousel ? '30px' : '20px')};
`;

const StyledAiDeleteIcon = styled(AiDeleteIcon)<{ $show: boolean }>`
	margin-left: 27.5rem;
	visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
`;

const ArticleMini = styled.div<{ $forcarousel?: boolean }>`
	display: flex;
	flex-direction: column;
	width: ${({ $forcarousel }) => ($forcarousel ? '36.3rem' : '30.3212rem')};
	height: ${({ $forcarousel }) => ($forcarousel ? '8.9rem' : '8.8541rem')};
	border-radius: ${({ $forcarousel }) => ($forcarousel ? '20px' : '15.137px')};
	padding: 0.973rem 0.996rem 0.707rem;
	gap: 2rem;
	background: ${({ theme }) => theme.colors.article_content};
`;

const ArticleMiniTop = styled.div`
	display: flex;
`;

const ArticleMiniTitle = styled.h3<{ $forcarousel?: boolean }>`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${({ theme }) => theme.colors.white1};
	${({ theme, $forcarousel }) =>
		$forcarousel ? theme.fonts.Pretendard_Semibold_22px : theme.fonts.Pretendard_Semibold_18px};
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

const ArticleFolderName = styled.div<{ $forcarousel?: boolean }>`
	${({ theme, $forcarousel }) =>
		$forcarousel ? theme.fonts.Pretendard_Semibold_13px : theme.fonts.Pretendard_Semibold_10px};
	color: ${({ theme }) => theme.colors.white1};
`;

const ArticleDate = styled.p<{ $forcarousel?: boolean }>`
	color: ${({ theme }) => theme.colors.white1};
	${({ theme, $forcarousel }) =>
		$forcarousel ? theme.fonts.Pretendard_Regular_12px : theme.fonts.Pretendard_Regular_9px};
`;
