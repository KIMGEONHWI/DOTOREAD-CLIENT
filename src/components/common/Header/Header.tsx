import Modal from '../Modal/Modal';
import SearchBar from './SearchBar';
import BellIcon from '@/assets/Bell.svg?react';
import HelpIcon from '@/assets/Help.svg?react';
import InformationIcon from '@/assets/Information.svg?react';
import LogoIcon from '@/assets/Logo.svg?react';
import MiniAcornIcon from '@/assets/MiniAcorn.svg?react';
import PlusFileIcon from '@/assets/PlusFile.svg?react';
import { useBookmarkContext } from '@/contexts/BookmarkContext';
import useModal from '@/hooks/useModal';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface DotoryHistory {
	id: string;
	content: string;
	acorn: number;
	addedAt: string;
}

function Header() {
	const { addBookmark } = useBookmarkContext();
	const { isOpen: isModalOpen, openModal, closeModal } = useModal();
	const [url, setUrl] = useState('');
	const [isBellOpen, setIsBellOpen] = useState(false);
	const [earn, setEarn] = useState<DotoryHistory[]>([]);

	const handleAddBookmark = async () => {
		await addBookmark(url);

		setUrl('');
		closeModal();
	};

	const toggleBellDropdown = () => setIsBellOpen((prev) => !prev);

	useEffect(() => {
		const getDotory = async () => {
			try {
				const accessToken = localStorage.getItem('access-token');
				const response = await axios.get(`${BASE_URL}/api/v1/acorns-use/history`, {
					params: { page: 1 },
					headers: { access: accessToken },
				});

				setEarn(response.data.result);
			} catch (error) {
				console.error('Error fetching missions:', error);
			}
		};

		getDotory();
	}, []);

	return (
		<HeaderWrapper>
			<HeaderLeftContent>
				<LogoIcon />
				<SearchBar />
				<PlusFileIcon onClick={openModal} style={{ cursor: 'pointer' }} />
			</HeaderLeftContent>
			<HeaderRightContent>
				<BellIcon onClick={toggleBellDropdown} style={{ cursor: 'pointer' }} />
				{isBellOpen && (
					<BellDropdown>
						<CloseButton onClick={toggleBellDropdown}>x</CloseButton>
						<DropDownTitleContainer>
							<MiniAcornIcon />
							<DropDownTitle>DOTORY HISTORY</DropDownTitle>
						</DropDownTitleContainer>
						<TotalDotoryContainer>
							<TotalDotory>TOTAL DOTORY</TotalDotory>
							<Total>50</Total>
						</TotalDotoryContainer>

						<HistoryContainer>
							{Array.isArray(earn) && earn.length > 0 ? (
								earn.map((item) => (
									<HistoryItem key={item.addedAt}>
										<TotalDotory>{item.content}</TotalDotory>
										<Total>{item.acorn}</Total>
									</HistoryItem>
								))
							) : (
								<p></p>
							)}
						</HistoryContainer>
					</BellDropdown>
				)}
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

const BellDropdown = styled.div`
	position: absolute;
	top: 12rem;
	right: 32.5rem;
	width: 38.2rem;
	height: 50.7rem;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 15px;
	border: 1.75px solid ${({ theme }) => theme.colors.gray1};
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
	padding: 4.8rem 4.5rem;
	color: ${({ theme }) => theme.colors.white1};
	z-index: 1000;
`;

const DropDownTitleContainer = styled.div`
	display: flex;
	gap: 0.517rem;
	align-items: center;
`;

const DropDownTitle = styled.h1`
	display: flex;
	${({ theme }) => theme.fonts.Pretendard_Semibold_22px};
`;

const TotalDotoryContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${({ theme }) => theme.colors.orange2};
	padding: 1.1rem 1.8rem;
	border-radius: 10px;
	border: solid 3px ${({ theme }) => theme.colors.orange1};
	margin-top: 1.2rem;
`;

const TotalDotory = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_13px};
`;

const Total = styled.p`
	color: ${({ theme }) => theme.colors.orange1};
	${({ theme }) => theme.fonts.Pretendard_Semibold_13px};
`;

const HistoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2.8rem;
`;

const HistoryItem = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.gray1};
	border: 3px solid ${({ theme }) => theme.colors.bookmark_hover};
	border-radius: 10px;
	padding: 1.1rem 1.8rem;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 1rem;
	right: 3.5rem;
	color: ${({ theme }) => theme.colors.white1};
	font-size: 3rem;
	cursor: pointer;
`;
