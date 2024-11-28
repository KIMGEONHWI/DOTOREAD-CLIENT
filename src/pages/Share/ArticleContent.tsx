import PlusIcon from '@/assets/PlusIcon.svg?react';
import styled from 'styled-components';

const ArticleContent = () => {
	const currentDate = new Date();
	const month = currentDate.getMonth() + 1;
	const day = currentDate.getDate();
	const formattedDate = `${month}월 ${day}일`;
	return (
		<ModalContainer>
			<Header>
				<NewArticle>새 글 작성</NewArticle>
				<CreatedAt>{formattedDate}</CreatedAt>
			</Header>
			<InputTitleContainer>
				<Title>제목 입력하기</Title>
				<InputTitle placeholder="ex) 취업정보 관련 사이트" />
			</InputTitleContainer>
			<InputContentContainer>
				<Content>내용 입력하기</Content>
				<InputContent
					type="text"
					placeholder="ex) 국내 IT기업 개발직군의 채용일정이 매일 업데이트 됩니다. 
(외국지사가 있는 경우에도 국내 채용만 업데이트 합니다.)"
				/>
			</InputContentContainer>
			<Plus>
				<PlusIcon style={{ cursor: 'pointer' }} />
			</Plus>
		</ModalContainer>
	);
};

export default ArticleContent;
const ModalContainer = styled.div`
	width: 70.5rem;
	height: auto;
	position: relative;
`;
const Header = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	top: 6.1rem;
	width: 67rem;
	justify-content: space-between;
	margin-left: 2rem;
`;
const NewArticle = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_22px};
	color: ${({ theme }) => theme.colors.white1};
`;
const CreatedAt = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Semibold_18px};
	color: ${({ theme }) => theme.colors.white1};
`;
const Title = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Medium_20px};
	color: ${({ theme }) => theme.colors.white1};
	position: absolute;
	top: 0.7rem;
	left: 2.2rem;
`;
const Content = styled.div`
	${({ theme }) => theme.fonts.Pretendard_Medium_20px};
	color: ${({ theme }) => theme.colors.white1};
	position: absolute;
	top: 2rem;
	left: 2.2rem;
`;
const InputTitle = styled.textarea`
	color: ${({ theme }) => theme.colors.gray3};
	position: absolute;
	top: 0.7rem;
	left: 14.5rem;
	border: none;
	width: 49rem;
	background: transparent;
	${({ theme }) => theme.fonts.Pretendard_Medium_20px};
	line-height: normal;
	&:focus {
		outline: none;
	}
`;

const InputContent = styled.input`
	color: ${({ theme }) => theme.colors.gray3};
	position: absolute;
	top: 2rem;
	left: 14.5rem;
	border: none;
	width: 49rem;
	height: 11.3rem;
	background: transparent;
	${({ theme }) => theme.fonts.Pretendard_Medium_20px};
	line-height: normal;
	&:focus {
		outline: none;
	}
`;

const InputTitleContainer = styled.div`
	position: absolute;
	width: 69.1rem;
	height: 5.1rem;
	border-radius: 15px;
	border: 3px solid #3b3b3b;
	backdrop-filter: blur(1.3951762914657593px);
	top: 11.3rem;
`;
const InputContentContainer = styled.div`
	position: absolute;
	top: 17rem;
	width: 69.1rem;
	height: 15.3rem;
	border-radius: 15px;
	border: 3px solid #3b3b3b;
	backdrop-filter: blur(1.3951762914657593px);
`;
const Plus = styled.div`
	position: absolute;
	top: 35.3rem;
	left: 32rem;
`;
