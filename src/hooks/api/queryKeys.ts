import { createQueryKeyStore } from '@lukemorales/query-key-factory';

const queryKeys = createQueryKeyStore({
  characters: {
    all: null,
    detail: (id: number) => [id],
  },
});

export default queryKeys;
