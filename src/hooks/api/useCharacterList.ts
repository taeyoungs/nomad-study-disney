import { useSuspenseQuery } from '@suspensive/react-query';

import { getCharacterList } from 'api/character';

import queryKeys from './queryKeys';

function useCharacterList() {
  return useSuspenseQuery({
    queryKey: queryKeys.characters.all().queryKey,
    queryFn: getCharacterList,
  });
}

export default useCharacterList;
