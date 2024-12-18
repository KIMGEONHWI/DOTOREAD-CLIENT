import BookMarkListBtn from '../common/Button/BookMarkListBtn';
import Modal from '../common/Modal/Modal';
import CloudIcon from '@/assets/Cloud.svg?react';
import FolderIcon from '@/assets/Folder.svg?react';
import LeeterIcon from '@/assets/Letter.svg?react';
import LineIcon from '@/assets/Line.svg?react';
import LucidIcon from '@/assets/Lucide.svg?react';
import PlusIcon from '@/assets/Plus.svg?react';
import { useCurrentCategory } from '@/contexts/CurrentCategoryContext';
import { useFolders } from '@/contexts/FetchFoldersContext';
import useModal from '@/hooks/useModal';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface BookMarkSlideProps {
	fetchData?: () => void;
}

const BASE_URL = import.meta.env.VITE_BASE_URL;

function BookMarkSlide({ fetchData }: BookMarkSlideProps) {
	const { currentCategory } = useCurrentCategory();
	const navigate = useNavigate();
	const { folders, addFolder, deleteFolder, fetchFolders } = useFolders();
	const { isOpen: isModalOpen, openModal, closeModal } = useModal();
	const [folderName, setFolderName] = useState('');

	useEffect(() => {
		fetchFolders();
	}, [fetchFolders]);

	const handleAddFolder = async () => {
		if (!folderName.trim()) {
			console.error('Folder name is empty');
			return;
		}
		try {
			console.log('Adding folder...');
			await addFolder(folderName);
			console.log('Folder added successfully');
			await fetchFolders();
			setFolderName('');
		} catch (error) {
			console.error('Error adding folder:', error);
		}
	};

	const handleDeleteFolder = async (folderId: string) => {
		await deleteFolder(folderId);
	};

	const handleNavigate = (text: string, iconType: string, category: string) => {
		navigate('/bookmark', { state: { text, iconType, category } });
	};

	console.log('c', currentCategory);

	const handleDropToFolder = async (item: { id: string; title: string; url: string }, folderId: string) => {
		try {
			const accessToken = localStorage.getItem('access-token');
			await axios.patch(
				`${BASE_URL}/api/v1/classify/patch/${item.id}/${folderId}`,
				{},
				{
					headers: { access: accessToken },
				},
			);
			console.log(`${item.title}를 폴더 ${folderId}로 이동했습니다.`);
			console.log(folderId);
			fetchFolders();
			fetchData?.();

			window.location.reload();
		} catch (error) {
			console.error('북마크 이동 실패:', error);
		}
	};

	return (
		<BookMarkSlideWrapper>
			<BookMarksContent>
				<BookMarkTitle>BookMarks</BookMarkTitle>
				<BookMarkListBtn
					text="모든 북마크"
					leftIcon={<CloudIcon />}
					onClick={() => handleNavigate('모든 북마크', 'everyBookmark', '모든 북마크')}
				/>
				<BookMarkListBtn
					text="미분류"
					leftIcon={<LeeterIcon />}
					onClick={() => handleNavigate('미분류', 'unclassified', '미분류')}
				/>
			</BookMarksContent>
			<LineIcon />
			<FoldersContent>
				<FoldersTitle>
					Folders
					<PlusIcon onClick={openModal} style={{ cursor: 'pointer' }} />
				</FoldersTitle>
				{folders?.length > 0 &&
					folders.map((folder) => (
						<BookMarkListBtn
							key={folder?.id || Math.random()}
							text={folder?.name || 'Unnamed Folder'}
							leftIcon={<FolderIcon />}
							rightIcon={<LucidIcon />}
							onClick={() => handleNavigate(folder?.name || '', 'classified', folder?.id || '')}
							onDelete={() => folder?.id && handleDeleteFolder(folder.id)}
							onDropItem={(item) => handleDropToFolder(item, folder.id)}
						/>
					))}
			</FoldersContent>

			<Modal id="create" isOpen={isModalOpen} onClose={closeModal} onConfirm={handleAddFolder}>
				<Title>생성할 폴더 이름을 입력해주세요.</Title>
				<Input type="text" placeholder="폴더 이름" value={folderName} onChange={(e) => setFolderName(e.target.value)} />
			</Modal>
		</BookMarkSlideWrapper>
	);
}

export default BookMarkSlide;

const BookMarkSlideWrapper = styled.div`
	position: fixed;
	left: 12rem;
	top: 17.3rem;
	width: 28.2rem;
	height: 100vw;
	background-color: ${({ theme }) => theme.colors.background_box};
	transition: left 0.4s ease-in-out;
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-top-right-radius: 20px;
	border-top: 3.5px solid ${({ theme }) => theme.colors.gray1};
	border-right: 3.5px solid ${({ theme }) => theme.colors.gray1};
`;

const BookMarksContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 28.2rem;
	height: 25.8rem;
	padding-top: 7.7rem;
	padding-left: 2rem;
	padding-right: 2rem;
	gap: 2.1rem;
`;

const BookMarkTitle = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_18px};
	color: ${({ theme }) => theme.colors.white1};
`;

const FoldersContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 28.2rem;
	height: 30%;
	margin-top: 4.1rem;
	padding-left: 2rem;
	padding-right: 2rem;
	gap: 2.1rem;
	overflow: auto;
	&::-webkit-scrollbar {
		width: 0.7rem;
		height: 30%;
	}

	&::-webkit-scrollbar-track {
		background: none;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 15px;
		cursor: pointer;
		height: 19.6rem;
		width: 0.7rem;
		background: rgba(255, 255, 255, 0.4);
	}
`;

const FoldersTitle = styled.p`
	display: flex;
	${({ theme }) => theme.fonts.Pretendard_Semibold_18px};
	color: ${({ theme }) => theme.colors.white1};
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.h2`
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
	color: ${({ theme }) => theme.colors.white1};
`;

const Input = styled.input`
	width: 24.1rem;
	height: 4.5rem;
	padding: 10px;
	border: 3px solid ${({ theme }) => theme.colors.gray2};
	border-radius: 15px;
	background-color: ${({ theme }) => theme.colors.background_box};
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	text-align: center;
	outline: none;

	::placeholder {
		color: #555;
	}
`;
