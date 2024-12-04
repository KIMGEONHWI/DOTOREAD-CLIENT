import { useState } from 'react';
import styled from 'styled-components';

interface SearchBarProps {
	onSearch: (query: string) => void;
  }

  function SearchBar({ onSearch }: SearchBarProps) {
	const [query, setQuery] = useState<string>('');
  
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	  setQuery(e.target.value);
	};
  
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
	  if (e.key === 'Enter') {
		onSearch(query);
	  }
	};

	return (
		<SearchBarContainer>
			<SearchInput type="text" placeholder="검색하기" value={query} onChange={handleSearchChange}  onKeyDown={handleKeyDown}/>
		</SearchBarContainer>
	);
}

export default SearchBar;

const SearchBarContainer = styled.div`
	position: absolute;
	left: 29.7rem;
	top: 3.1rem;
	display: flex;
	align-items: center;
	width: 65.9rem;
	height: 4.8rem;
	padding-left: 1.8rem;
	border-radius: 15px;
	border: 3px solid #6a6a6a;
	backdrop-filter: blur(1.3951762914657593px);
`;

const SearchInput = styled.input`
	border: none;
	background: none;
	outline: none;
	${({ theme }) => theme.fonts.Pretendard_Medium_20px};

	&::placeholder {
		color: ${({ theme }) => theme.colors.gray3};
	}
	color: ${({ theme }) => theme.colors.white1};
`;
