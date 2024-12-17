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
			<SearchIcon style={{ cursor: 'pointer' }} />
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
	padding-left: 1.4rem;
	gap: 27rem;
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
