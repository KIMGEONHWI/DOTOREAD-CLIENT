import SearchIcon from '@/assets/Search.svg?react';
import { useState } from 'react';
import styled from 'styled-components';

function SearchBar() {
	const [query, setQuery] = useState<string>('');

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	return (
		<SearchBarContainer>
			<SearchInput type="text" placeholder="Search" value={query} onChange={handleSearchChange} />
			<SearchIcon />
		</SearchBarContainer>
	);
}

export default SearchBar;

const SearchBarContainer = styled.div`
	display: flex;
	align-items: center;
	width: 51.7rem;
	height: 5.2rem;
	border-bottom: 2px solid #ff6600;
	padding-left: 5.25rem;
`;

const SearchInput = styled.input`
	flex: 1;
	border: none;
	background: none;
	outline: none;
	${({ theme }) => theme.fonts.Pretendard_Medium_20px};

	&::placeholder {
		color: ${({ theme }) => theme.colors.gray3};
	}
`;
