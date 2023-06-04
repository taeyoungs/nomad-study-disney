import styled from 'styled-components';

import { Image, Text } from 'components';

import { useCharacterDetail } from 'hooks/api';
import { color } from 'constants/common';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const ImageWrapper = styled.div`
  margin: 0 0 20px;
`;

const TitleWrapper = styled.div`
  margin: 0 0 30px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 6px;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50px;
  background-color: ${color.white};
  margin-right: 6px;
`;

const ExternalLink = styled.a`
  color: ${color.white};
  margin: 20px 0 0;

  &:hover {
    text-decoration: underline;
  }
`;

interface CharacterDetailProps {
  id: number;
}

function CharacterDetail({ id }: CharacterDetailProps) {
  const { data: character } = useCharacterDetail({ id });
  const { name, imageUrl, sourceUrl, films } = character;

  return (
    <Section>
      <ImageWrapper>
        <Image image={imageUrl} width={200} height={200} alt={name} radius={100} />
      </ImageWrapper>
      <TitleWrapper>
        <Text as="h1" color={color.white} typography="3xlarge">
          {name}'s Films
        </Text>
      </TitleWrapper>
      <ul>
        {films.map((film) => (
          <li key={film}>
            <TextWrapper>
              <Dot />
              <Text color={color.white} typography="large">
                {film}
              </Text>
            </TextWrapper>
          </li>
        ))}
      </ul>
      <ExternalLink href={sourceUrl} target="_blank" rel="noreferrer">
        <Text color={color.white} typography="large">
          More ...
        </Text>
      </ExternalLink>
    </Section>
  );
}

export default CharacterDetail;
