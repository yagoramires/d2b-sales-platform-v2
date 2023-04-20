import { SearchIcon } from '../../../styles/components/icons';
import { Container, SearchButton, Input } from './styles';

const Search = () => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    alert('pesquisaste');
  };

  return (
    <Container onSubmit={handleSearch}>
      <Input placeholder='Pesquise por nome ou código' />
      <SearchButton type='submit'>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
};

export default Search;
