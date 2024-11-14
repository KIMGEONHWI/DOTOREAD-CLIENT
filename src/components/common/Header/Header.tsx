import Modal from '../Modal/Modal';
import SearchBar from './SearchBar';
import BellIcon from '@/assets/Bell.svg?react';
import HelpIcon from '@/assets/Help.svg?react';
import InformationIcon from '@/assets/Information.svg?react';
import LogoIcon from '@/assets/Logo.svg?react';
import PlusFileIcon from '@/assets/PlusFile.svg?react';
import { useBookmarkContext } from '@/contexts/BookmarkContext';
import useModal from '@/hooks/useModal';
import { useState } from 'react';
import styled from 'styled-components';

function Header() {
	const { addBookmark } = useBookmarkContext();
	const { isOpen: isModalOpen, openModal, closeModal } = useModal();
	const [url, setUrl] = useState('');

	const handleAddBookmark = async () => {
		await addBookmark(url);
		setUrl('');
		closeModal();
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
			<Modal id="plus" isOpen={isModalOpen} onClose={closeModal} onConfirm={handleAddBookmark}>
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
