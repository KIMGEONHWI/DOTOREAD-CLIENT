import ArrowLeftSvg from '@/assets/arrow-left.svg?react';
import ArrowRightSvg from '@/assets/arrow-right.svg?react';
import ClassificationArticle from '@/components/AiClassification/ClassificationArticle';
import { FreshArticleList, RottenArticleList } from '@/constants/FreshRottenList';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';
import styled from 'styled-components';

interface CarouselProps {
	listType: 'fresh' | 'rotten';
}

const Carousel = ({ listType }: CarouselProps) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

	useEffect(() => {
		if (emblaApi) {
			const updateClasses = () => {
				const slides = emblaApi.slideNodes();
				const numSlides = slides.length;
				const selectedIndex = (emblaApi.selectedScrollSnap() + 2) % slides.length;
				slides.forEach((slide, index) => {
					slide.classList.remove('is-selected', 'is-prev', 'is-next');
					if (index === selectedIndex) {
						slide.classList.add('is-selected');
					}
					if (index === (selectedIndex - 1 + numSlides) % numSlides) {
						slide.classList.add('is-prev');
					}
					if (index === (selectedIndex + 1) % numSlides) {
						slide.classList.add('is-next');
					}
				});
			};
			updateClasses();
		}
	}, [emblaApi]);

	const articles = listType === 'fresh' ? FreshArticleList : RottenArticleList;

	return (
		<CarouselComponent>
			<PrevButton>
				<ArrowLeft />
			</PrevButton>
			<CarouselContainer ref={emblaRef}>
				<Container>
					{articles.map((article) => (
						<Slide key={article.id}>
							<ClassificationArticle
								title={article.title}
								hashtag={article.hashtag}
								folder={article.folder}
								date={article.date}
								forcarousel={true}
							/>
						</Slide>
					))}
				</Container>
			</CarouselContainer>
			<NextButton>
				<ArrowRight />
			</NextButton>
		</CarouselComponent>
	);
};

export default Carousel;
const CarouselComponent = styled.div`
	position: relative;
`;
const CarouselContainer = styled.div`
	overflow: hidden;
	width: 100%;
	position: relative;
`;

const Container = styled.div`
	display: flex;
	will-change: transform;
	align-items: center;
	margin: 0 auto;
	gap: 2.9rem;
`;

const Slide = styled.div`
	flex: 0 0 21%;

	position: relative;
	overflow: hidden;
	transition:
		transform 0.3s,
		filter 0.3s;
	filter: brightness(50%);

	&.is-selected,
	&.is-prev,
	&.is-next {
		filter: brightness(100%);
	}
`;
const ArrowLeft = styled(ArrowLeftSvg)`
	cursor: pointer;
`;
const ArrowRight = styled(ArrowRightSvg)`
	cursor: pointer;
`;
const PrevButton = styled.button`
	left: 31.3rem;
	position: absolute;
	top: 7rem;
	border: none;
	color: white;
	padding: 10px 20px;
	cursor: pointer;
	z-index: 1;
	pointer-events: auto;
	background-color: red;
`;

const NextButton = styled.button`
	right: 14.918rem;
	position: absolute;
	width: 20rem;
	height: 20rem;
	top: 7rem;
	border: none;
	color: white;
	padding: 10px 20px;
	cursor: pointer;
	z-index: 2;
	pointer-events: auto;
	background-color: red;
`;
