import Acorn from '@/assets/Acorn.svg?react';
import BookMarkToolTip from '@/assets/BookMarkToolTip.svg?react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Storage() {
	const [current, setCurrent] = useState<number>(0); // 사용한 스토리지
	const [total, setTotal] = useState<number>(0); // 전체 스토리지
	const [showToolTip, setShowToolTip] = useState(false);

	useEffect(() => {
		const fetchStorageData = async () => {
			try {
				const accessToken = localStorage.getItem('access-token');
				const response = await fetch(`${BASE_URL}/api/v1/storages`, {
					method: 'GET',
					headers: {
						accept: '*/*',
						access: `${accessToken}`,
					},
				});
				const data = await response.json();

				if (data.isSuccess && data.result) {
					setTotal(data.result.ownStorage);
					setCurrent(Math.abs(data.result.usedStorage)); // 음수 제거
				} else {
					console.error('API 요청 실패:', data.message);
				}
			} catch (error) {
				console.error('fetchStorageData 중 오류 발생:', error);
			}
		};

		fetchStorageData();
	}, []);

	return (
		<StorageWrapper onMouseEnter={() => setShowToolTip(true)} onMouseLeave={() => setShowToolTip(false)}>
			<WrapperForDisplay>
				<Div>
					<Acorn />
					<StorageCount>
						{current}/{total}
					</StorageCount>
				</Div>
				{showToolTip && <BookMarkToolTipStyled />}
			</WrapperForDisplay>
		</StorageWrapper>
	);
}

export default Storage;

const StorageWrapper = styled.div`
	position: absolute;
	cursor: pointer;
`;

const WrapperForDisplay = styled.div`
	position: relative;
	top: 87.6rem;
`;

const StorageCount = styled.div`
	text-align: center;
	${({ theme }) => theme.fonts.Pretendard_Bold_20px};
	color: ${({ theme }) => theme.colors.orange1};
	top: 0.82rem;
	position: relative;
`;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const BookMarkToolTipStyled = styled(BookMarkToolTip)`
	position: absolute;
	left: 6.5rem;
	top: 3rem;
	z-index: 1000;
`;
