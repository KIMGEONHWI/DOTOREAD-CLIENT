import AiClassificationBtn from '../common/Button/AiClassificationBtn';
import Btn from '../common/Button/Btn';
import Modal from '../common/Modal/Modal';
import ClassificationArticle from './ClassificationArticle';
import AiIcon from '@/assets/Ai.svg?react';
import AiDefault from '@/assets/AiDefault.png';
import { Buttons } from '@/constants/ButtonList';
import { useAiClassificationContext } from '@/contexts/AiClassificationContext';
import { useFolders } from '@/contexts/FetchFoldersContext';
import useModal from '@/hooks/useModal';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AiClassificationPage = () => {
	const [clickedFolders, setClickedFolders] = useState<Record<string, boolean>>({});
	const { isOpen: isModalOpen, openModal, closeModal } = useModal();
	const [modalContent, setModalContent] = useState<string>('');
	const { classifiedData } = useAiClassificationContext();
	const navigate = useNavigate();
	const { fetchFolders } = useFolders();

	const handleBoxClick = (folder: string) => {
		setClickedFolders((prev) => ({
			...prev,
			[folder]: !prev[folder],
		}));
	};

	const handleConfirm = async () => {
		await fetchFolders();
		navigate('/bookmark');
	};

	const handleCancle = async () => {
		const BASE_URL = import.meta.env.VITE_BASE_URL;

		const bookmarkIds = classifiedData.map((article) => Number(article.bookmarkId));

		console.log(bookmarkIds);

		if (bookmarkIds.length === 0) {
			console.warn('No bookmarks selected for cancellation');
			return;
		}

		try {
			const accessToken = localStorage.getItem('access-token');
			if (!accessToken) {
				console.error('Access token not found');
				return;
			}
			const response = await axios.patch(
				`${BASE_URL}/api/v1/classify/cancel`,
				{
					bookmarkIds,
				},
				{
					headers: {
						access: `${accessToken}`,
					},
				},
			);
			console.log('Cancellation successful:', response.data);
			closeModal();
		} catch (error) {
			console.error('Error cancelling classification:', error);
		}
	};

	const handleFinishClassify = () => {
		setModalContent('AI 분류 완료하기');
		openModal();
	};

	const handleCancelClassify = () => {
		setModalContent('AI 분류 취소하기');
		openModal();
	};

	const groupedByFolder = classifiedData.reduce(
		(acc, article) => {
			const folderName = article.folder.name;
			if (!acc[folderName]) {
				acc[folderName] = [];
			}
			acc[folderName].push(article);
			return acc;
		},
		{} as Record<string, (typeof classifiedData)[0][]>,
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
						<Btn id="finishClassify" onClick={handleFinishClassify} />
						<Btn id="cancelClassify" onClick={handleCancelClassify} />
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
								{(articles as (typeof classifiedData)[0][]).map((article) => (
									<ClassificationArticle
										key={article.bookmarkId}
										img={article.img ?? AiDefault}
										title={article.title}
										folder={article.folder.name}
										date={article.createdAt}
										url={article.url}
										showDeleteIcon={true}
										bookmarkId={article.bookmarkId}
									/>
								))}
							</ClassificationArticleBox>
						</ClassificationBox>
					))}
				</ClassificationBoxWrapper>
			</AiClassificationPageContent>
			{/* Modal 컴포넌트 */}
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				id="ok"
				onConfirm={modalContent === 'AI 분류 완료하기' ? handleConfirm : handleCancle}
			>
				<ModalContent>
					<ModalTitle>{modalContent}</ModalTitle>
					<ModalText>
						{modalContent === 'AI 분류 완료하기'
							? '북마크가 모두 해당 폴더로 이동합니다.'
							: 'AI 분류 작업을 취소하시겠습니까?'}
					</ModalText>
				</ModalContent>
			</Modal>
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
	overflow-x: hidden;
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

const ModalContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding-top: 2rem;
`;

const ModalTitle = styled.h2`
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
	color: ${({ theme }) => theme.colors.white1};
`;

const ModalText = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_18px};
	color: ${({ theme }) => theme.colors.white1};
`;
