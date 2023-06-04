import { Suspense } from '@suspensive/react';
import { QueryErrorBoundary } from '@suspensive/react-query';
import styled from 'styled-components';

import { Text, ErrorBoundaryFallback } from 'components';

import { color } from 'constants/common';

import { CharacterList, CharacterListFallback } from './components';

const Wrapper = styled.div`
  margin: 0 0 20px;
`;

function Home() {
  return (
    <section>
      <Wrapper>
        <Text as="h1" typography="3xlarge" color={color.white} align="center">
          Disney Characters
        </Text>
      </Wrapper>
      <QueryErrorBoundary fallback={({ reset }) => <ErrorBoundaryFallback reset={reset} />}>
        <Suspense fallback={<CharacterListFallback />}>
          <CharacterList />
        </Suspense>
      </QueryErrorBoundary>
    </section>
  );
}

export default Home;
