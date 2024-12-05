import styled from 'styled-components';
import BookMarkItem from './BookMarkItem';
import { useState , useEffect} from 'react';
import axios from 'axios';
import Btn from '@/components/common/Button/Btn';
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface Bookmark {
    bookmarkId: number;
    title: string;
    url: string;
    img: string | null;
    createdAt: string;
}

const AddBookMark =()=>{
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedIds, setSelectedIds] = useState<number[]>([]); // 선택된 북마크 ID 저장
    const fetchBookmarks = async () => {
      setIsLoading(true);
      try {
        const accessToken = localStorage.getItem('access-token');

        const response = await axios.get(`${BASE_URL}/api/v1/bookmarks/all`, {
          params: {
            sortType: 'DESC', 
          },
          headers: {
            access: accessToken ,
          },
        });
  
        if (response.data.isSuccess) {
          setBookmarks(response.data.result);
        } else {
          console.error('북마크 데이터를 가져오지 못했습니다:', response.data.message);
        }
      } catch (error) {
        console.error('API 요청 중 에러 발생:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchBookmarks();
    }, []);
    
    const handleSelect = (bookmarkId: number) => {
		setSelectedIds((prev) =>
			prev.includes(bookmarkId) ? prev.filter((id) => id !== bookmarkId) : [...prev, bookmarkId]
		);
	};

    const handleAddBookmarks = async () => {
		try {
			const accessToken = localStorage.getItem('access-token');
			const response = await axios.post(
				`${BASE_URL}/api/v1/collections`,
				{
					bookmarkIds: selectedIds, // 선택된 북마크 ID 배열
				},
				{
					headers: {
						access: accessToken,
						'Content-Type': 'application/json',
					},
				}
			);

			if (response.data.isSuccess) {
				console.log('북마크 추가 성공:', response.data.message,selectedIds);
			} else {
				console.error('북마크 추가 실패:', response.data.message);
			}
		} catch (error) {
			console.error('북마크 추가 요청 중 에러 발생:', error);
		}
	};

    return(
    <AddBookMarkWrapper>
        <BtnWrapper>
        <Btn id="plus" onClick={handleAddBookmarks} />
        </BtnWrapper>
       <Content>
		<AddBookListWrapper>
            {isLoading ? ( <p>Loading...</p>) : bookmarks.length > 0 ? (
            bookmarks.map((bookmark) => (
          <BookMarkItem
            key={bookmark.bookmarkId}
            bookmarkId={bookmark.bookmarkId}
            title={bookmark.title}
            url={bookmark.url}
            img={bookmark.img}
            date={bookmark.createdAt}
            onSelect={handleSelect} 
			isSelected={selectedIds.includes(bookmark.bookmarkId)} 
          />
        ))
      ) : (
        <p>No bookmarks available.</p>
      )}
		</AddBookListWrapper>
		</Content>
    </AddBookMarkWrapper>
    );
}

export default AddBookMark;

const AddBookMarkWrapper=styled.div`
`
const BtnWrapper=styled.div`
    position:absolute;
    left: 51.9rem;
    top:11.3rem;`
const Content = styled.div`
    position: absolute;
    top:17.9rem;
	max-height: 36.5rem;
	overflow-y: auto;
	position: relative;
	&::-webkit-scrollbar {
		width: 0.7rem;
		height: 36.5rem;
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

const AddBookListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;