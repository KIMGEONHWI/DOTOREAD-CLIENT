import OnBoarding1 from './components/OnBoardingPage/OnBoarding1';
import OnBoarding2 from './components/OnBoardingPage/OnBoarding2';
import OnBoarding3 from './components/OnBoardingPage/OnBoarding3';
import OnBoarding4 from './components/OnBoardingPage/OnBoarding4';
import Header from '@/pages/OnBoarding/components/OnBoardingPage/Header';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const OnBoardingPage = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<OnBoardingPageWrapper>
			<Header isScrolled={isScrolled} />
			<OnBoarding1 />
			<OnBoarding2 />
			<OnBoarding3 />
			<OnBoarding4 />
		</OnBoardingPageWrapper>
	);
};
export default OnBoardingPage;

const OnBoardingPageWrapper = styled.div`
	position: relative;
	width: 100vw;
	background-color: ${({ theme }) => theme.colors.background};
`;
