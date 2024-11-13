import Carousel from './Carousel';
import styled from 'styled-components';

function CarouselWrapper() {
	return (
		<Wrapper>
			<CarouselTextFresh>FRESH ARTICLE</CarouselTextFresh>
			<FreshArticleWrapper>
				<Carousel listType="fresh" />
			</FreshArticleWrapper>
			<CarouselTextRotten>ROTTEN ARTICLE</CarouselTextRotten>
			<RottenAritcleWrapper>
				<Carousel listType="rotten" />
			</RottenAritcleWrapper>
		</Wrapper>
	);
}

export default CarouselWrapper;

const Wrapper = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
`;
const CarouselTextFresh = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
	color: ${({ theme }) => theme.colors.orange1};
	position: absolute;
	top: 0rem;
	left: 41rem;
`;
const CarouselTextRotten = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
	color: ${({ theme }) => theme.colors.orange1};
	position: absolute;
	top: 34.9rem;
	left: 41rem;
`;
const FreshArticleWrapper = styled.div`
	margin-top: 7rem;
`;
const RottenAritcleWrapper = styled.div`
	margin-top: 9rem;
`;
