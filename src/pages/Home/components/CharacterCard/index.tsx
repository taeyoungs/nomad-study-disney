import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Text } from 'components';

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

const Image = styled.img`
  border-radius: 100px;
  width: 120px;
  height: 120px;
  margin: 0 0 8px;
`;

const ImageFallback = styled.div`
  border-radius: 100px;
  width: 120px;
  height: 120px;
  background-color: ${color.skeleton};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 8px;
`;

interface CharacterCardProps {
  character: Character;
}

function CharacterCard({ character }: CharacterCardProps) {
  const { id, imageUrl, name } = character;

  return (
    <Card to={`/character/${id}`}>
      <Figure>
        {imageUrl ? (
          <Image src={imageUrl} alt={name} width={120} height={120} loading="lazy" />
        ) : (
          <ImageFallback>
            <Text as="div">No image</Text>
          </ImageFallback>
        )}
        <Text as="figcaption">{name}</Text>
      </Figure>
    </Card>
  );
}

export default CharacterCard;
