import Acorn from '@/assets/Acorn.svg?react';
import BookMarkToolTip from '@/assets/BookMarkToolTip.svg?react';
import { useState } from 'react';
import styled from 'styled-components';

function Storage({ current, total }: { current: number; total: number }) {
	const [showToolTip, setShowToolTip] = useState(false);
	return (
		<StorageWrapper onMouseEnter={() => setShowToolTip(true)} onMouseLeave={() => setShowToolTip(false)}>
			<WrapperForDisplay>
				<Acorn />
				<StorageCount>
					{current}/{total}
				</StorageCount>
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
const BookMarkToolTipStyled = styled(BookMarkToolTip)`
	position: absolute;
	left: 6.5rem;
	top: 3rem;
	z-index: 1000;
`;
