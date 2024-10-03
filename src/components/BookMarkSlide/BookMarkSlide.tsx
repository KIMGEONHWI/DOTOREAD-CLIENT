import styled from 'styled-components';

interface BookMarkSlideProps {
	show: boolean;
}

function BookMarkSlide({ show }: BookMarkSlideProps) {
	return (
		<BookMarkSlideWrapper show={show}>
			<BookMarksContent />
			<FoldersContent />
		</BookMarkSlideWrapper>
	);
}

export default BookMarkSlide;

const BookMarkSlideWrapper = styled.div<{ show: boolean }>`
	position: fixed;
	left: ${({ show }) => (show ? '12rem' : '-30rem')};
	top: 17.3rem;
	width: 28.2rem;
	height: 90.7rem;
	background-color: ${({ theme }) => theme.colors.gray1};
	box-shadow: ${({ show }) => (show ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none')};
	transition: left 0.4s ease-in-out;
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-top-right-radius: 10px;
`;

const BookMarksContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const FoldersContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
