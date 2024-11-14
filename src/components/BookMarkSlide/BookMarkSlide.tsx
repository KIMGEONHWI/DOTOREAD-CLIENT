import BookMarkListBtn from '../common/Button/BookMarkListBtn';
import Modal from '../common/Modal/Modal';
import CloudIcon from '@/assets/Cloud.svg?react';
import FolderIcon from '@/assets/Folder.svg?react';
import LeeterIcon from '@/assets/Letter.svg?react';
import LineIcon from '@/assets/Line.svg?react';
import LucidIcon from '@/assets/Lucide.svg?react';
import PlusIcon from '@/assets/Plus.svg?react';
import useModal from '@/hooks/useModal';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Folder {
	id: string;
	name: string;
}

interface BookMarkSlideProps {
	show: boolean;
}

function BookMarkSlide({ show }: BookMarkSlideProps) {
	const navigate = useNavigate();
	const { isOpen: isModalOpen, openModal, closeModal } = useModal();
	const [folderName, setFolderName] = useState('');
	const [folders, setFolders] = useState<Folder[]>([]);
	const BASE_URL = import.meta.env.VITE_BASE_URL;

	const fetchFolders = useCallback(async () => {
		try {
			const accessToken = localStorage.getItem('access-token');
			if (!accessToken) {
				console.error('Access token not found');
				return;
			}

			const response = await axios.get(`${BASE_URL}/api/v1/folders`, {
				headers: {
					access: `${accessToken}`,
				},
			});
			setFolders(response.data.result || []);
			console.log('Folders fetched:', response.data);
		} catch (error) {
			console.error('Error fetching folders:', error);
		}
	}, [BASE_URL]);

	useEffect(() => {
		if (show) {
			fetchFolders();
		}
	}, [show, fetchFolders]);

	const handleNavigate = (text: string, iconType: string, category: string) => {
		navigate('/bookmark', { state: { text, iconType, category } });
	};

	const handleAddFolder = async () => {
		try {
			const accessToken = localStorage.getItem('access-token');
			if (!accessToken) {
				console.error('Access token not found');
				return;
			}

			const data = { name: folderName };
			const response = await axios.post(`${BASE_URL}/api/v1/folders`, data, {
				headers: {
					access: `${accessToken}`,
				},
			});
			console.log('Folder created:', response.data);

			closeModal();
			setFolderName('');
			await fetchFolders();
		} catch (error) {
			console.error('Error creating folder:', error);
		}
	};

	const handleDeleteFolder = async (folderId: string) => {
		try {
			const accessToken = localStorage.getItem('access-token');
			if (!accessToken) {
				console.error('Access token not found');
				return;
			}

			await axios.delete(`${BASE_URL}/api/v1/folders/${folderId}`, {
				headers: {
					access: `${accessToken}`,
				},
			});
			console.log('Folder deleted:', folderId);

			await fetchFolders();
		} catch (error) {
			console.error('Error deleting folder:', error);
		}
	};

	return (
		<BookMarkSlideWrapper $show={show}>
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
				{folders.map((folder) => (
					<BookMarkListBtn
						key={folder.id}
						text={folder.name}
						leftIcon={<FolderIcon />}
						rightIcon={<LucidIcon />}
						onClick={() => handleNavigate(folder.name, 'classified', folder.id)}
						onDelete={() => handleDeleteFolder(folder.id)}
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

const BookMarkSlideWrapper = styled.div<{ $show: boolean }>`
	position: fixed;
	left: ${({ $show }) => ($show ? '12rem' : '-30rem')};
	top: 17.3rem;
	width: 28.2rem;
	height: 90.7rem;
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
	height: 40.35rem;
	padding-top: 4.1rem;
	padding-left: 2rem;
	padding-right: 2rem;
	gap: 2.1rem;
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
