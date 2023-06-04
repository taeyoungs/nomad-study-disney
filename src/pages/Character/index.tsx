import { Link, useParams } from 'react-router-dom';
import { QueryErrorBoundary } from '@suspensive/react-query';
import { Suspense } from '@suspensive/react';
import styled from 'styled-components';

import { ErrorBoundaryFallback, Text } from 'components';
import { NotFound } from 'pages';

import { color } from 'constants/common';

import { CharacterDetail } from './components';

const StyledLink = styled(Link)`
  text-align: center;
`;

function Character() {
  const { id } = useParams();

  if (!id) {
    return <NotFound />;
  }

  return (
    <div>
      <StyledLink to="/">
        <Text typography="2xlarge" color={color.white}>
          ←
        </Text>
      </StyledLink>
      <QueryErrorBoundary fallback={({ reset }) => <ErrorBoundaryFallback reset={reset} />}>
        <Suspense fallback={<div>Loading ...</div>}>
          <CharacterDetail id={+id} />
        </Suspense>
      </QueryErrorBoundary>
    </div>
  );
}

export default Character;
