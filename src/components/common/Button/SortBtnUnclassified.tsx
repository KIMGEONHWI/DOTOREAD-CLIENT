import LineIcon from '@/assets/LineForSortBtn.svg?react';
import SortIcon from '@/assets/SortIcon.svg?react';
import { useState,useEffect } from 'react';
import styled from 'styled-components';

interface SortBtnProps {
    onOptionChange: (option: string) => void;
  }

function SortBtnUnclassified({ onOptionChange }: SortBtnProps) {
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [option, setOption] = useState<string>('최신순');
  
	useEffect(() => {
		onOptionChange(option);
	  }, []); 

    const handleMouseEnter = (event: React.MouseEvent) => {
      event.stopPropagation();
      setShowOptions(true);
    };
  
    const handleMouseLeave = () => {
      setShowOptions(false);
    };
  
    const handleOptionClick = (selectedOption: string) => {
      setOption(selectedOption);
      setShowOptions(false);
      onOptionChange(selectedOption); // 선택한 옵션을 부모인 bookmarkpage전달
    };
  
    return (
      <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
		<SortBtnWrapper>
			<Content>
				<SortBy>{option}</SortBy>
				<Icon>
					<SortIcon  />
				</Icon>
			</Content>
			{showOptions && (
				<Options onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave} >
					<Option onClick={() => handleOptionClick('최신순')}>최신순</Option>
					<LineIcon />
					<Option onClick={() => handleOptionClick('오래된순')}>오래된순</Option>
				</Options>
			)}
		</SortBtnWrapper>
		</Wrapper>
	);
}

export default SortBtnUnclassified;

const Wrapper=styled.div`
	z-index: 10;
	height: 6rem;
`
const SortBtnWrapper = styled.button`
	box-sizing: border-box;
	position: relative;
	align-items: center;
	width: 12.7rem;
	height: 4.8rem;
	border-radius: 1.5rem;
	border: 0.3rem solid ${({ theme }) => theme.colors.gray2};
	background-color: ${({ theme }) => theme.colors.gray1};
`;

const Content = styled.div`
	display: flex;
	align-items: center;
`;

const SortBy = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	color: ${({ theme }) => theme.colors.white1};
	position: absolute;
	left: 1.8rem;
`;

const Icon = styled.div`
	position: absolute;
	right: 1.8rem;
`;

const Options = styled.div`
	background-color: ${({ theme }) => theme.colors.gray2};
	display: flex;
	flex-direction: column;
	width: 12.7rem;
	height: 9.6rem;
	border-radius: 1.5rem;
	justify-content: space-evenly;
	align-items: center;
	position: absolute;
	top: 5rem;
	left: 0;
	width: 100%;
	box-sizing: border-box;
`;

const Option = styled.p`
	${({ theme }) => theme.fonts.Pretendard_Medium_18px};
	color: ${({ theme }) => theme.colors.white1};
`;
