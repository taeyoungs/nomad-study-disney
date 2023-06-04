import styled from 'styled-components';

import { SkeletonBox } from 'components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 10px;
`;

function Skeleton() {
  const skeletons = Array.from({ length: 12 }, (_, idx) => idx);

  return (
    <Container>
      {skeletons.map((skeleton) => (
        <SkeletonBox key={skeleton} width={310} height={160} />
      ))}
    </Container>
  );
}

export default Skeleton;
