import { createQueryKeyStore } from '@lukemorales/query-key-factory';

const queryKeys = createQueryKeyStore({
  characters: {
    all: () => [{ scope: 'character' }],
    detail: (id: number) => [{ scope: 'character', entity: 'detail', id }],
  },
});

export default queryKeys;
