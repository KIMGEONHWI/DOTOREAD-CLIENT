import BookMarkListBtn from '../common/Button/BookMarkListBtn';
import Modal from '../common/Modal/Modal';
import CloudIcon from '@/assets/Cloud.svg?react';
import FolderIcon from '@/assets/Folder.svg?react';
import LeeterIcon from '@/assets/Letter.svg?react';
import LineIcon from '@/assets/Line.svg?react';
import LucidIcon from '@/assets/Lucide.svg?react';
import PlusIcon from '@/assets/Plus.svg?react';
import { FOLDER_LIST } from '@/constants/FolderList';
import useModal from '@/hooks/useModal';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface BookMarkSlideProps {
	show: boolean;
}

function BookMarkSlide({ show }: BookMarkSlideProps) {
	const navigate = useNavigate();
	const { isOpen: isModalOpen, openModal, closeModal } = useModal();
	const [folderName, setFolderName] = useState('');

	const handleNavigate = (text: string, iconType: string, category: string) => {
		navigate('/bookmark', { state: { text, iconType, category } });
	};

	const BASE_URL = import.meta.env.VITE_BASE_URL;

	const handleAddFolder = async () => {
		try {
			const accessToken = localStorage.getItem('access-token');

			if (!accessToken) {
				console.error('Access token not found');
				return;
			}

			const data = {
				name: folderName,
			};

			console.log('전송 데이터:', data);

			const response = await axios.post(`${BASE_URL}/api/v1/folders`, data, {
				headers: {
					access: `${accessToken}`,
				},
				withCredentials: true,
			});

			console.log('Folder created:', response.data);
			closeModal();
		} catch (error) {
			console.error('Error creating folder:', error);
		}
	};

	console.log(import.meta.env.VITE_BASE_URL);

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
				{FOLDER_LIST.map((folder) => (
					<BookMarkListBtn
						key={folder.id}
						text={folder.text}
						leftIcon={<FolderIcon />}
						rightIcon={<LucidIcon />}
						onClick={() => handleNavigate(folder.text, 'classified', folder.text)}
					/>
				))}
			</FoldersContent>

			{/* Modal */}
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
