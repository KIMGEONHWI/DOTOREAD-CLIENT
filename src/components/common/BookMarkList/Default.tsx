import styled from 'styled-components';

interface DefaultProps {
	message: string;
}

function Default({ message }: DefaultProps) {
	return (
		<DefaultWrapper>
			<Notify>{message}</Notify>
		</DefaultWrapper>
	);
}

export default Default;

const DefaultWrapper = styled.div`
	width: 128.2rem;
	height: 58.1rem;
	border-radius: 10px;
	border: 3.5px dashed ${({ theme }) => theme.colors.gray1};
	margin-left: 600px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Notify = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
	color: ${({ theme }) => theme.colors.white1};
`;
