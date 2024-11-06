import ClassificationArticle from '@/components/AiClassification/ClassificationArticle';
import { RottenArticleList } from '@/constants/FreshRottenList';
import { FreshArticleList } from '@/constants/FreshRottenList';
import styled from 'styled-components';

function CarouselWrapper() {
	return (
		<Wrapper>
			<CarouselText>FRESH ARTICLE</CarouselText>
			<FreshArticleWrapper>
				{FreshArticleList.map((article) => (
					<ClassificationArticle
						key={article.id}
						title={article.title}
						hashtag={article.hashtag}
						folder={article.folder}
						date={article.date}
					/>
				))}
			</FreshArticleWrapper>
			<CarouselText>ROTTEN ARTICLE</CarouselText>
			<RottenAritcleWrapper>
				{RottenArticleList.map((article) => (
					<ClassificationArticle
						key={article.id}
						title={article.title}
						hashtag={article.hashtag}
						folder={article.folder}
						date={article.date}
					/>
				))}
			</RottenAritcleWrapper>
		</Wrapper>
	);
}

export default CarouselWrapper;

const Wrapper = styled.div``;
const CarouselText = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Semibold_30px};
	color: ${({ theme }) => theme.colors.orange1};
`;
const FreshArticleWrapper = styled.div``;
const RottenAritcleWrapper = styled.div``;
