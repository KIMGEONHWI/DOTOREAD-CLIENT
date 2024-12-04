import MoveToMyBookMark from '@/assets/MoveToMyBookMark.svg?react';
import ToMyBookMark from '@/assets/TomyBookmark.svg?react';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface ListItemProps {
	bookmarkId?: number; 
	title: string;
	url: string;
	formodal?: boolean;
}
const ListItem = ({ bookmarkId, title, url, formodal = false }: ListItemProps) => {
	const [hover, setHover] = useState(false);
	const handleToMyBookmarkClick = async () => {
		try {
		  const accessToken = localStorage.getItem('access-token');
		  console.log(accessToken);
	
		  const response = await axios.post(
			`${BASE_URL}/api/v1/collections/clone/${bookmarkId}`,
			{}, 
			{
				headers: { access: accessToken }
			}
		  );

		  if (response.status === 200) {
			console.log(`북마크(${bookmarkId})가 성공적으로 복사되었습니다.`);
		  }
		} catch (error: any) {
		  console.error('북마크 복사 중 에러:', error.response?.data || error.message);
		}
	  };
	return (
		<Display>
			<ItemContainer formodal={formodal}>
				<Wrapper>
					<Title>{title}</Title>
					<Url>{url}</Url>
				</Wrapper>
				{formodal && (
					<ToMyBookMark
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						onClick={handleToMyBookmarkClick}
						style={{ cursor: 'pointer' }}
					/>
				)}
				{hover ? <StyledMoveToMyBookMark /> : null}
			</ItemContainer>
		</Display>
	);
};

export default ListItem;
const Display = styled.div`
	position: relative;
`;
const ItemContainer = styled.div<{ formodal: boolean }>`
	width: ${({ formodal }) => (formodal ? '69.1rem' : '65rem')};
	height: 8.6rem;
	border-radius: 10px;
	border: 3px solid #3b3b3b;
	padding: 0.2rem 2.9rem;
	display: flex;
	gap: 0rem;
	align-items: center;
	background: ${({ theme }) => theme.colors.bookmark_hover};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.429rem;
`;

const Title = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_22px};
	color: ${({ theme }) => theme.colors.white1};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 58.6rem;
`;
const Url = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	color: ${({ theme }) => theme.colors.white2};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 58.6rem;
`;
const StyledMoveToMyBookMark = styled(MoveToMyBookMark)`
	position: absolute;
	top: -2.4rem;
	right: 0rem;
	z-index: 10;
`;
