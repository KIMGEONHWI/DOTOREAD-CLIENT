import CircleProgressBar from './PrgressCircle';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function CircleGraph() {
	const [readBookmark, setReadBookmark] = useState<number>(0); // 읽은 북마크
	const [bookmark, setBookmark] = useState<number>(0); // 전체 북마크

	useEffect(() => {
		const fetchBookmarkData = async () => {
			try {
				const accessToken = localStorage.getItem('access-token');
				const response = await fetch(`${BASE_URL}/api/v1/read-bookmarks`, {
					method: 'GET',
					headers: {
						accept: '*/*',
						access: `${accessToken}`,
					},
				});
				const data = await response.json();

				if (data.isSuccess && data.result) {
					const totalBookmarks = Math.abs(data.result.bookmark); // 음수값을 양수로 변환
					const read = data.result.readBookmark;
					setBookmark(totalBookmarks);
					setReadBookmark(read);
				} else {
					console.error('API 요청 실패:', data.message);
				}
			} catch (error) {
				console.error('fetchBookmarkData 중 오류 발생:', error);
			}
		};

		fetchBookmarkData();
	}, []);

	return (
		<CircleGraphWrapper>
			<CircleProgressBar
				progress={readBookmark} // 현재 읽은 북마크
				total={bookmark} // 전체 북마크
				size={300} // 원형 크기
			/>
		</CircleGraphWrapper>
	);
}

export default CircleGraph;

const CircleGraphWrapper = styled.div``;
