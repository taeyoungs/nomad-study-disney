import { useNavigate } from 'react-router-dom';
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

function NotFound() {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/', { replace: true });
  };

  return (
    <Container>
      <img src="https://i.ibb.co/YDCKC7g/disney.png" alt="disney" width={100} height={100} />
      <Text as="h2" typography="2xlarge" color={color.white}>
        Page Not Found
      </Text>
      <Text typography="large" color={color.white}>
        We looked everywhere for this page.
      </Text>
      <Text typography="large" color={color.white}>
        Are you sure the website URL is correct?
      </Text>
      <Text typography="large" color={color.white}>
        Get in touch with the site owner
      </Text>
      <button onClick={handleClickButton}>Go Back Home</button>
    </Container>
  );
}

export default NotFound;
