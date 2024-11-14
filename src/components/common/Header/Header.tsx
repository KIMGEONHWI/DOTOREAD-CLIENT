import Modal from '../Modal/Modal';
import SearchBar from './SearchBar';
import BellIcon from '@/assets/Bell.svg?react';
import HelpIcon from '@/assets/Help.svg?react';
import InformationIcon from '@/assets/Information.svg?react';
import LogoIcon from '@/assets/Logo.svg?react';
import PlusFileIcon from '@/assets/PlusFile.svg?react';
import { fetchAllBookmarks, fetchUnclassifiedBookmarks } from '@/constants/ListItems';
import useModal from '@/hooks/useModal';
import axios from 'axios';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Header() {
	// const navigate = useNavigate();
	const { isOpen: isModalOpen, openModal, closeModal } = useModal();
	const [url, setUrl] = useState('');

	// const returnBookMarkPage = (text: string, iconType: string, category: string) => {
	// 	navigate('/bookmark', { state: { text, iconType, category } });
	// };
	const addUrl = async () => {
		try {
			const accessToken = localStorage.getItem('access-token');
			if (!accessToken) {
				console.error('Access token not found');
				return;
			}
			const data = { url };
			const response = await axios.post(`${BASE_URL}/api/v1/bookmarks`, data, {
				headers: {
					access: `${accessToken}`,
				},
			});
			await fetchUnclassifiedBookmarks();
			await fetchAllBookmarks();
			console.log('bookmark created:', response.data);
			// returnBookMarkPage('모든 북마크', 'everyBookmark', '모든 북마크');
			closeModal();
		} catch (error) {
			console.error('Error creating folder:', error);
		}
	};
	return (
		<HeaderWrapper>
			<HeaderLeftContent>
				<LogoIcon />
				<SearchBar />
				<PlusFileIcon onClick={openModal} style={{ cursor: 'pointer' }} />
			</HeaderLeftContent>
			<HeaderRightContent>
				<BellIcon />
				<HelpIcon />
				<InformationIcon />
			</HeaderRightContent>

			{/* Modal */}
			<Modal id="plus" isOpen={isModalOpen} onClose={closeModal} onConfirm={addUrl}>
				{' '}
				<Title>URL로 북마크 추가하기</Title>
				<Input type="text" placeholder="http://" value={url} onChange={(e) => setUrl(e.target.value)} />
			</Modal>
		</HeaderWrapper>
	);
}

export default Header;

const HeaderWrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 17.3rem;
	padding: 7.6rem 16.3rem;
	background-color: ${({ theme }) => theme.colors.background};
`;

const HeaderLeftContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.8rem;
`;

const HeaderRightContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3.6rem;
`;

const Title = styled.h2`
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
	color: ${({ theme }) => theme.colors.white1};
`;

const Input = styled.input`
	width: 42.5rem;
	height: 4.5rem;
	padding: 10px;
	border: 3px solid ${({ theme }) => theme.colors.gray2};
	border-radius: 15px;
	background-color: ${({ theme }) => theme.colors.background_box};
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	outline: none;

	::placeholder {
		color: #555;
	}
`;
