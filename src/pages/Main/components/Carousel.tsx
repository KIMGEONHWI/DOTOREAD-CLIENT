import './Carousel.css';
import ClassificationArticle from '@/components/AiClassification/ClassificationArticle';
import { FreshArticleList } from '@/constants/FreshRottenList';
import { RottenArticleList } from '@/constants/FreshRottenList';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';

interface CarouselProps {
	listType: 'fresh' | 'rotten';
}
const Carousel = ({ listType }: CarouselProps) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

	useEffect(() => {
		if (emblaApi) {
			const updateClasses = () => {
				const slides = emblaApi.slideNodes();
				const selectedIndex = (emblaApi.selectedScrollSnap() + 1) % slides.length; // 모듈로 연산을 추가하여 범위를 벗어나지 않도록 보장
				const numSlides = slides.length;
				console.log(selectedIndex);
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
			emblaApi.on('select', updateClasses);
			emblaApi.on('reInit', updateClasses);
		}
	}, [emblaApi]);
	const articles = listType === 'fresh' ? FreshArticleList : RottenArticleList;
	return (
		<div className="embla" ref={emblaRef}>
			<div className="embla__container">
				{articles.map((article) => (
					<div className="embla__slide" key={article.id}>
						<ClassificationArticle
							title={article.title}
							hashtag={article.hashtag}
							folder={article.folder}
							date={article.date}
							forCarousel={true}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
