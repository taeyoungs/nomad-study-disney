import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Text, Image } from 'components';

import { color } from 'constants/common';
import { Character } from 'types/character';

const Card = styled(Link)`
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  & figcaption {
    color: ${color.white};
  }

  &:hover {
    background-color: ${color.white};

    & figcaption {
      color: ${color.black};
    }
  }
`;

const Figure = styled.figure`
  padding: 6px 0;
`;

interface CharacterCardProps {
  character: Character;
}

function CharacterCard({ character }: CharacterCardProps) {
  const { id, imageUrl, name } = character;

  return (
    <Card to={`/character/${id}`}>
      <Figure>
        <Image image={imageUrl} alt={name} width={120} height={120} radius={100} loading="lazy" />
        <Text as="figcaption">{name}</Text>
      </Figure>
    </Card>
  );
}

export default CharacterCard;
