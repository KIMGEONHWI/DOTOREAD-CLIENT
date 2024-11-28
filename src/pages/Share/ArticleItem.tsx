import styled from 'styled-components';

interface ArticleItemProps {
	title: string;
	url: string;
}
const ArticleItem = ({ title, url }: ArticleItemProps) => {
	return (
		<Display>
			<ItemContainer >
				<Wrapper>
					<Title>{title}</Title>
					<Url>{url}</Url>
				</Wrapper>
			</ItemContainer>
		</Display>
	);
};

export default ArticleItem;
const Display = styled.div`
	position: relative;
`;
const ItemContainer = styled.div`
	width: 69.1rem;
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
