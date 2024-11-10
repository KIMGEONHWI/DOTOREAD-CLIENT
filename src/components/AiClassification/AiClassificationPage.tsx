import AiClassificationBtn from '../common/Button/AiClassificationBtn';
import Btn from '../common/Button/Btn';
import ClassificationArticle from './ClassificationArticle';
import AiIcon from '@/assets/Ai.svg?react';
import { AiClassifiedList } from '@/constants/AiClassificationList';
import { Buttons } from '@/constants/ButtonList';
import { useState } from 'react';
import styled from 'styled-components';

const AiClassificationPage = () => {
	const [clickedFolders, setClickedFolders] = useState<Record<string, boolean>>({});

	const handleBoxClick = (folder: string) => {
		setClickedFolders((prev) => ({
			...prev,
			[folder]: !prev[folder],
		}));
	};

	const groupedByFolder = AiClassifiedList.reduce(
		(acc, article) => {
			if (!acc[article.folder]) {
				acc[article.folder] = [];
			}
			acc[article.folder].push(article);
			return acc;
		},
		{} as Record<string, typeof AiClassifiedList>,
	);

	return (
		<AiClassificationPageWrapper>
			<AiClassificationPageContent>
				<Header>
					<HeaderLeft>
						<AiIcon />
						<Title>Ai분류하기</Title>
					</HeaderLeft>
					<HeaderRight>
						<Btn id="finishClassify" />
						<Btn id="cancelClassify" />
					</HeaderRight>
				</Header>
				<ClassificationBtnBox>
					{Object.keys(groupedByFolder).map((folder) => {
						const defaultButtonProps = Buttons.find((button) => button.id === 'aiClassify') || {
							color: 'white1',
							bordercolor: 'gray2',
							backgroundcolor: 'gray1',
						};

						return (
							<AiClassificationBtn
								key={folder}
								text={folder}
								onClick={() => handleBoxClick(folder)}
								isClicked={clickedFolders[folder] || false}
								color={defaultButtonProps.color}
								bordercolor={defaultButtonProps.bordercolor}
								backgroundcolor={defaultButtonProps.backgroundcolor}
							/>
						);
					})}
				</ClassificationBtnBox>
				<ClassificationBoxWrapper>
					{Object.entries(groupedByFolder).map(([folder, articles]) => (
						<ClassificationBox
							key={folder}
							isClicked={clickedFolders[folder] || false}
							onClick={() => handleBoxClick(folder)}
						>
							<ClassificationBoxTitle>{folder}</ClassificationBoxTitle>
							<ClassificationArticleBox>
								{articles.map((article) => (
									<ClassificationArticle
										key={article.id}
										title={article.title}
										hashtag={article.hashtag}
										folder={article.folder}
										date={article.date}
										showDeleteIcon={true}
									/>
								))}
							</ClassificationArticleBox>
						</ClassificationBox>
					))}
				</ClassificationBoxWrapper>
			</AiClassificationPageContent>
		</AiClassificationPageWrapper>
	);
};

export default AiClassificationPage;

const AiClassificationPageWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	max-width: 100vw;
	min-height: 100vh;
`;

const AiClassificationPageContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 134.6rem;
	height: 92.9rem;
	padding: 3.3rem 2.4rem 0 2.4rem;
	border-radius: 20px;
	background: ${({ theme }) => theme.colors.background_box};
	position: fixed;
	left: 44.2rem;
`;

const Header = styled.div`
	display: flex;
	width: 134.6rem;
	height: 6.1rem;
	gap: 62.6rem;
`;

const HeaderLeft = styled.div`
	display: flex;
	align-items: center;
	padding-left: 1.7rem;
	gap: 1.054rem;
`;

const Title = styled.h1`
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Semibold_38px};
`;

const HeaderRight = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
`;

const ClassificationBoxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.1rem;

	max-height: 70rem;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0.7rem;
		height: 70rem;
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

const ClassificationBtnBox = styled.div`
	display: flex;
	width: 127.8rem;
	height: 9.3rem;
	padding: 2.7rem 0 2.9rem 0;
	overflow: hidden;
	gap: 1rem;
`;

const ClassificationBox = styled.div<{ isClicked: boolean }>`
	display: flex;
	flex-direction: column;
	width: 127.8rem;
	height: 29.2rem;
	border-radius: 20px;
	flex-shrink: 0;
	padding: 1.4rem 2.1rem;
	gap: 1.3rem;
	background-color: ${({ theme, isClicked }) => (isClicked ? theme.colors.orange4 : theme.colors.background_box)};
	overflow -x : hidden;
	cursor: pointer;
`;

const ClassificationBoxTitle = styled.h2`
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
`;

const ClassificationArticleBox = styled.div`
	display: flex;
	gap: 1.988rem;
	width: 100%;
	height: 21.3rem;
	overflow-x: auto;
	overflow-y: hidden;
	padding-bottom: 1rem;
	scrollbar-width: thin;

	&::-webkit-scrollbar {
		height: 8px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.gray2};
		border-radius: 4px;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}
`;
