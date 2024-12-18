import Classified from '@/assets/Classified.svg?react';
import EveryBookMark from '@/assets/EveryBookMark.svg?react';
import Unclassified from '@/assets/Unclassified.svg?react';
import BookMarkSlide from '@/components/BookMarkSlide/BookMarkSlide';
import Btn from '@/components/common/Button/Btn';
import ExecutionBtn from '@/components/common/Button/ExecutionBtn';
import SortBtn from '@/components/common/Button/SortBtn';
import SortBtnFolder from '@/components/common/Button/SortBtnFolder';
import SortBtnUnclassified from '@/components/common/Button/SortBtnUnclassified';
import { useAiClassificationContext } from '@/contexts/AiClassificationContext';
import { useBookmarkContext } from '@/contexts/BookmarkContext';
import { useCurrentCategory } from '@/contexts/CurrentCategoryContext';
import BookMarkList from '@/pages/BookMark/BookMarkList';
import Navbar from '@/pages/BookMark/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface TitleProps {
	text: string;
	Icon: React.ElementType;
}

function Title({ text, Icon }: TitleProps) {
	return (
		<TitleWrapper>
			{Icon && <Icon />}
			<Category>{text}</Category>
		</TitleWrapper>
	);
}

function BookMarkPage() {
	const { currentCategory, setCurrentCategory } = useCurrentCategory();
	const location = useLocation();
	const navigate = useNavigate();
	const { bookmarks, fetchBookmarks } = useBookmarkContext();
	const defaultState = { text: '모든 북마크', iconType: 'everyBookmark', category: '모든 북마크' };
	const { text, iconType, category } = location.state || defaultState;
	const Icon = iconType === 'everyBookmark' ? EveryBookMark : iconType === 'unclassified' ? Unclassified : Classified;

	const [sortOption, setSortOption] = useState<string>('최신순');

	useEffect(() => {
		const { category } = location.state || { category: '모든 북마크' };
		setCurrentCategory(category);
	}, [location, setCurrentCategory]);

	const fetchData = async () => {
		const sortType = sortOption === '최신순' ? 'DESC' : 'ASC';
		if (category === '모든 북마크') {
			await fetchBookmarks(`/api/v1/bookmarks/all?sortType=${sortType}`);
		} else if (category === '미분류') {
			await fetchBookmarks(`/api/v1/bookmarks/uncategorized?sortType=${sortType}`);
		} else if (iconType === 'classified') {
			await fetchBookmarks(`/api/v1/bookmarks/all/${category}?sortType=${sortType}`);
		}
	};

	useEffect(() => {
		fetchData();
	}, [category, iconType, sortOption, currentCategory]);

	const [isAiClassifyActive, setAiClassifyActive] = useState(false);
	const [isAllSelected, setAllSelected] = useState(false);
	const [hasSelectedItems, setHasSelectedItems] = useState(false);
	const [selectedBookmarks, setSelectedBookmarks] = useState<string[]>([]);
	const { setClassifiedData } = useAiClassificationContext();

	const handleAiClassifyBtn = () => {
		setAiClassifyActive(!isAiClassifyActive);
		setAllSelected(false);
		setHasSelectedItems(false);
	};

	const handleChooseAllBtn = () => {
		const newSelectionState = !isAllSelected;
		setAllSelected(newSelectionState);
		setHasSelectedItems(newSelectionState);
		if (newSelectionState) {
			setSelectedBookmarks(bookmarks.map((bookmark) => bookmark.id));
		} else {
			setSelectedBookmarks([]);
		}
	};

	const handleAiClassify = async () => {
		try {
			const accessToken = localStorage.getItem('access-token');
			if (!accessToken) {
				console.error('Access token not found');
				return;
			}

			const userId = parseInt(accessToken);
			if (selectedBookmarks.length === 0) {
				console.warn('No bookmarks selected for classification');
				return;
			}

			const response = await axios.post(
				`${BASE_URL}/api/v1/classify/ai`,
				{
					bookmarkIds: selectedBookmarks,
					userId,
				},
				{
					headers: {
						access: `${accessToken}`,
					},
				},
			);

			console.log('AI classification response:', response.data);
			setClassifiedData(response.data.result);
			navigate('/ai');
		} catch (error) {
			console.error('Error classifying bookmarks with AI', error);
		}
	};

	useEffect(() => {
		return () => {
			setAiClassifyActive(false);
			setAllSelected(false);
			setHasSelectedItems(false);
		};
	}, [location]);

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = '';
		};
	}, []);

	return (
		<BookMarkPageWrapper>
			<BookMarkSlide fetchData={fetchData} />
			<BackgroundBox>
				<Title text={text} Icon={Icon} />
				{category === '미분류' && (
					<BtnWrapperForAiClassify onClick={handleAiClassifyBtn}>
						<Btn id="aiClassify" />
					</BtnWrapperForAiClassify>
				)}
				{isAiClassifyActive && (
					<>
						<BtnWrapperForChooseAll onClick={handleChooseAllBtn}>
							<Btn id="chooseAll" />
						</BtnWrapperForChooseAll>

						<BtnWrapperExecutionBtn>
							<ExecutionBtn variant="#FF5733" isSelected={hasSelectedItems} onClick={handleAiClassify}>
								실행
							</ExecutionBtn>
						</BtnWrapperExecutionBtn>
					</>
				)}
				<SortBtnWrapper>
					{category === '미분류' ? (
						<SortBtnUnclassified onOptionChange={setSortOption} />
					) : category === '모든 북마크' ? (
						<SortBtn onOptionChange={setSortOption} />
					) : (
						<SortBtnFolder onOptionChange={setSortOption} />
					)}
				</SortBtnWrapper>
				{!isAiClassifyActive && <Navbar />}
				<BookMarkList
					iconType={iconType}
					category={category}
					bookmarks={bookmarks}
					isSelectable={isAiClassifyActive}
					isAllSelected={isAllSelected}
					setHasSelectedItems={setHasSelectedItems}
					selectedBookmarks={selectedBookmarks}
					setSelectedBookmarks={setSelectedBookmarks}
				/>
			</BackgroundBox>
		</BookMarkPageWrapper>
	);
}

export default BookMarkPage;

const BookMarkPageWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	max-width: 100vw;
	min-height: 100vh;
`;

const BackgroundBox = styled.div`
	width: 134.6rem;
	height: 92.9rem;
	border-radius: 20px;
	background: ${({ theme }) => theme.colors.background_box};
	position: fixed;
	left: 44.2rem;
	overflow: auto;
`;

const TitleWrapper = styled.div`
	position: absolute;
	left: 2.8rem;
	top: 2rem;
	display: flex;
	gap: 1rem;
	align-items: center;
`;

const BtnWrapperExecutionBtn = styled.div`
	position: absolute;
	top: 3.7rem;
	left: 105rem;
	z-index: 1000;
`;

const BtnWrapperForAiClassify = styled.div`
	position: absolute;
	top: 3.7rem;
	left: 84rem;
	z-index: 10000;
`;

const BtnWrapperForChooseAll = styled.div`
	position: absolute;
	top: 3.7rem;
	left: 63rem;
	z-index: 10000;
`;

const SortBtnWrapper = styled.div`
	position: absolute;
	right: 3.4rem;
	top: 3.7rem;
	z-index: 1;
`;

const Category = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_38px};
	color: ${({ theme }) => theme.colors.white1};
`;
