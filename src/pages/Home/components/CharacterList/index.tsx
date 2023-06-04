import styled from 'styled-components';

import { useCharacterList } from 'hooks/api';

import CharacterCard from '../CharacterCard';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 10px;
`;

function CharacterList() {
  const { data: characters } = useCharacterList();

  return (
    <Container>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Container>
  );
}

export default CharacterList;
