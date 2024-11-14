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
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, skipSnaps: false });

	const scrollPrev = useCallback(() => {
		if (emblaApi) {
			emblaApi.scrollPrev();
		} else {
			console.log('else');
		}
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) {
			emblaApi.scrollNext();
		} else {
			console.log('else');
		}
	}, [emblaApi]);

	useEffect(() => {
		console.log('emblaApi:', emblaApi);
		if (emblaApi) {
			const updateClasses = () => {
				const slides = emblaApi.slideNodes();
				const numSlides = slides.length;
				const selectedIndex = (emblaApi.selectedScrollSnap() + 1) % slides.length;
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
			emblaApi.on('select', updateClasses);
			updateClasses();
		}
	}, [emblaApi]);

	const articles = listType === 'fresh' ? FreshArticleList : RottenArticleList;

	return (
		<CarouselComponent>
			<PrevButton onClick={scrollPrev}>
				<ArrowLeft />
			</PrevButton>
			<CarouselContainer ref={emblaRef}>
				<Container>
					{articles.map((article) => (
						<Slide key={article.id}>
							<ClassificationArticle
								title={article.title}
								folder={article.folder}
								date={article.created_at}
								forcarousel={true}
								imageUrl={article.imageUrl}
								url={article.url}
							/>
						</Slide>
					))}
				</Container>
			</CarouselContainer>
			<NextButton onClick={scrollNext}>
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
`;

const Container = styled.div`
	display: flex;
	align-items: center;

	gap: 2.9rem;
`;

const Slide = styled.div`
	flex: 0 0 20%;
	position: relative;
	transition:
		transform 0.5s,
		filter 0.5s;
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
`;

const NextButton = styled.button`
	right: 14.918rem;
	position: absolute;
	top: 7rem;
	border: none;
	color: white;
	padding: 10px 20px;
	cursor: pointer;
	z-index: 2;
	pointer-events: auto;
`;
