import { useSuspenseQuery } from '@suspensive/react-query';

import queryKeys from './queryKeys';

import { getCharacterDetail } from 'api/character';

interface UseCharacterDetailProps {
  id: number;
}

function useCharacterDetail({ id }: UseCharacterDetailProps) {
  return useSuspenseQuery({
    queryKey: queryKeys.characters.detail(id).queryKey,
    queryFn: getCharacterDetail,
  });
}

export default useCharacterDetail;
