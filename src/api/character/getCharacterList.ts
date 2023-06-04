import { API_URL } from 'constants/api';

import apiClient from '../apiClient';

import { CharacterListSchema } from 'types/character';

const getCharacterList = async () => {
  const data = await apiClient.get(API_URL.BASE);

  return CharacterListSchema.parse(data);
};

export default getCharacterList;
