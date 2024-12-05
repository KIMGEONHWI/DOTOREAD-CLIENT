import styled from 'styled-components';
import LucideGray from '@/assets/LucideGray.svg?react';
import LucideOrange from '@/assets/LucideOrange.svg?react';
interface BookMarkItemProps {
	bookmarkId: number; 
	title: string;
	url: string;
    img: string | null;
    date: string;
	onSelect: (bookmarkId: number) => void;
	isSelected: boolean; 
}

const BookMarkItem = ({bookmarkId,title, url, img,date,onSelect, isSelected}: BookMarkItemProps) => {
	const handleIconClick = () => {
		onSelect(bookmarkId); // 부모 컴포넌트로 선택 상태 전달
		console.log(bookmarkId)
	};

	return (
			<BookMarkContainer>
                <Thumnail img={img}></Thumnail>
				<Wrapper>
					<Title>{title}</Title>
					<Url>{url}</Url>
                    <Date>{date}</Date>
				</Wrapper> 
                <SelectIcon onClick={handleIconClick}>
                	{isSelected ? <LucideOrange /> : <LucideGray />}
            	</SelectIcon>
			</BookMarkContainer>
	);
};

export default BookMarkItem;

const BookMarkContainer = styled.div`
    position: relative;
	width: 69.1rem;
	height: 8.6rem;
	border-radius: 10px;
	border: 3px solid #3b3b3b;
	padding: 0.2rem;
	display: flex;
	gap: 0rem;
	align-items: center;
	background: ${({ theme }) => theme.colors.bookmark_hover};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.429rem;
    position: absolute;
    left: 13.2rem;
`;

const Title = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_22px};
	color: ${({ theme }) => theme.colors.white1};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 50rem;
`;
const Url = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	color: ${({ theme }) => theme.colors.white2};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 41rem;
`;
const Thumnail = styled.div<{ img: string | null }>`
	width: 9.5rem;
	height: 6.2rem;
	border-radius: 10px;
	background: ${({ theme, img }) =>
		img && img !== 'null' ? `url(${img}) center/contain no-repeat` : theme.colors.thumnail};
	position: absolute;
	left: 0.8rem;
`;
const Date = styled.div`
	color: ${({ theme }) => theme.colors.white1};
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	position: absolute;
	left: 42.6rem;
    bottom: 0rem;
`;
const SelectIcon=styled.div`
    position: absolute;
    right: 1.3rem;`
