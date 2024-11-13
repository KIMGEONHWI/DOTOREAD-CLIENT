import Acorn from '@/assets/Acorn.svg?react';
import styled from 'styled-components';

function Storage({ current, total }: { current: number; total: number }) {
	return (
		<StorageWrapper>
			<WrapperForDisplay>
				<Acorn />
				<StorageCount>
					{current}/{total}
				</StorageCount>
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
