import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { color } from 'constants/common';

const Main = styled.main`
  background-color: ${color.background};
  min-height: 100vh;
  height: 100%;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px 0 0;
`;

function Layout() {
  return (
    <Main>
      <Container>
        <Outlet />
      </Container>
    </Main>
  );
}

export default Layout;
