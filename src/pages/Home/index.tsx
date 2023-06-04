import { Text } from 'components/common';

import { color } from 'constants/common';

function Home() {
  return (
    <section>
      <Text as="h1" typography="3xlarge" color={color.white} align="center">
        Disney Characters
      </Text>
    </section>
  );
}

export default Home;
