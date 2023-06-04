import styled from 'styled-components';

import { Text } from 'components';

import { color } from 'constants/common';

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

interface ErrorBoundaryFallbackProps {
  reset: () => void;
}

function ErrorBoundaryFallback({ reset }: ErrorBoundaryFallbackProps) {
  return (
    <Container>
      <img src="https://i.ibb.co/YDCKC7g/disney.png" alt="disney" width={100} height={100} />
      <Text as="h2" typography="2xlarge" color={color.white}>
        Something went wrong.
      </Text>
      <Text typography="large" color={color.white}>
        Please click the button below to request again.
      </Text>
      <button onClick={reset}>Try again</button>
    </Container>
  );
}

export default ErrorBoundaryFallback;
