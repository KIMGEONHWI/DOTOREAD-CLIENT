import ArticleItem from './ArticleItem';
import PlusIcon from '@/assets/PlusIcon.svg?react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface ArticleContentProps {
	onPlusClick: () => void;
	collectionId: number | null;
	title: string;
	memo: string;
	setTitle: (value: string) => void;
	setMemo: (value: string) => void;
}

interface Bookmark {
	bookmarkId: number;
	title: string;
	url: string;
}

const ArticleContent = ({ collectionId, onPlusClick, title, memo, setTitle, setMemo }: ArticleContentProps) => {
	const currentDate = new Date();
	const month = currentDate.getMonth() + 1;
	const day = currentDate.getDate();
	const formattedDate = `${month}월 ${day}일`;

	const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const fetchBookmarks = async () => {
		if (!collectionId) return; // collectionId가 없으면 실행하지 않음
		setIsLoading(true);
		try {
			const accessToken = localStorage.getItem('access-token');
			const response = await axios.get(`${BASE_URL}/api/v1/collections/bookmarks/${collectionId}`, {
				params: { page: 1 },
				headers: { access: accessToken },
			});

			if (response.data.isSuccess) {
				setBookmarks(response.data.result.bookmarkSummaryDTOList || []);
			}
		} catch (error) {
			console.error('API 호출 중 오류:', error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (collectionId) fetchBookmarks();
	}, [collectionId]);

	return (
		<ModalContainer>
			<Header>
				<NewArticle>새 글 작성</NewArticle>
				<CreatedAt>{formattedDate}</CreatedAt>
			</Header>
			<ScrollWrapper>
				<InputTitleContainer>
					<Title>제목</Title>
					<InputTitle placeholder="ex) 취업정보 관련 사이트" value={title} onChange={(e) => setTitle(e.target.value)} />
				</InputTitleContainer>
				<InputContentContainer>
					<Content>내용</Content>
					<InputContent
						placeholder="ex) 국내 IT기업 개발직군의 채용일정이 매일 업데이트 됩니다."
						value={memo}
						onChange={(e) => setMemo(e.target.value)}
					/>
				</InputContentContainer>
				<ArticleWrapper>
					{isLoading ? (
						<p>Loading...</p>
					) : bookmarks.length > 0 ? (
						bookmarks.map((bookmark) => (
							<ArticleItem key={bookmark.bookmarkId} title={bookmark.title} url={bookmark.url} />
						))
					) : (
						<p>No bookmarks available.</p>
					)}
				</ArticleWrapper>
				<Plus onClick={onPlusClick}>
					<PlusIcon style={{ cursor: 'pointer' }} />
				</Plus>
			</ScrollWrapper>
		</ModalContainer>
	);
};

export default ArticleContent;

const ModalContainer = styled.div`
	width: 70.5rem;
	height: 100%;
	position: relative;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	top: 6.1rem;
	width: 67rem;
	justify-content: space-between;
	margin-left: 2rem;
`;

const NewArticle = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_22px};
	color: ${({ theme }) => theme.colors.white1};
`;

const CreatedAt = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_18px};
	color: ${({ theme }) => theme.colors.white1};
`;

const InputTitleContainer = styled.div`
	width: 69.1rem;
	height: 5.1rem;
	border-radius: 15px;
	border: 3px solid #3b3b3b;
	backdrop-filter: blur(1.3951762914657593px);
	margin-bottom: 0.6rem;
	display: flex;
	align-items: center;
`;

const Title = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Medium_20px};
	color: ${({ theme }) => theme.colors.white1};
	position: absolute;
	left: 2.2rem;
`;

const InputTitle = styled.textarea`
	color: ${({ theme }) => theme.colors.gray3};
	margin-left: 8rem;
	margin-top: 2.4rem;
	border: none;
	width: 59rem;
	background: transparent;
	resize: none;
	${({ theme }) => theme.fonts.Pretendard_Medium_20px};
	line-height: normal;
	&:focus {
		outline: none;
	}
`;

const InputContentContainer = styled.div`
	width: 69.1rem;
	height: 15.3rem;
	border-radius: 15px;
	border: 3px solid #3b3b3b;
	backdrop-filter: blur(1.3951762914657593px);
`;

const InputContent = styled.textarea`
	color: ${({ theme }) => theme.colors.gray3};
	margin-left: 8rem;
	margin-top: 1.8rem;
	border: none;
	width: 59rem;
	height: 11.3rem;
	background: transparent;
	resize: none;
	${({ theme }) => theme.fonts.Pretendard_Medium_20px};
	line-height: normal;
	&:focus {
		outline: none;
	}
`;

const Content = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Medium_20px};
	color: ${({ theme }) => theme.colors.white1};
	position: absolute;
	top: 2rem;
	left: 2.2rem;
`;

const ScrollWrapper = styled.div`
	width: 100%;
	max-height: 36.5rem;
	overflow-y: auto;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 11.3rem;
	&::-webkit-scrollbar {
		width: 0.7rem;
		height: 36.5rem;
	}

	&::-webkit-scrollbar-track {
		background: none;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 15px;
		cursor: pointer;
		height: 19.6rem;
		width: 0.7rem;
		background: ${({ theme }) => theme.colors.white2};
	}
`;

const Plus = styled.div`
	margin-top: 1.5rem;
`;

const ArticleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-top: 1.8rem;
`;
