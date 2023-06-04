import { useSuspenseQuery } from '@suspensive/react-query';

import { getCharacterList } from 'api/character';

import queryKeys from './queryKeys';

function useCharacterList() {
  return useSuspenseQuery({
    ...queryKeys.characters.all,
    queryFn: getCharacterList,
  });
}

export default useCharacterList;
