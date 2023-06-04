import { QueryFunctionContext } from '@tanstack/react-query';

import queryKeys from 'hooks/api/queryKeys';

import { API_URL } from 'constants/api';
import { CharacterDetailSchema } from 'types/character';

import apiClient from '../apiClient';

const getCharacterDetail = async ({
  queryKey,
}: QueryFunctionContext<ReturnType<typeof queryKeys.characters.detail>['queryKey']>) => {
  const [, , id] = queryKey;

  const data = await apiClient.get(`${API_URL.BASE}/${id}`);

  return CharacterDetailSchema.parse(data);
};

export default getCharacterDetail;
