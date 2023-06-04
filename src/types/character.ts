import z from 'zod';

export const CharacterSchema = z.object({
  id: z.number(),
  name: z.string(),
  imageUrl: z.string().optional(),
});
export type Character = z.infer<typeof CharacterSchema>;

export const CharacterListSchema = z.array(CharacterSchema);
export type CharacterList = z.infer<typeof CharacterListSchema>;

export const CharacterDetailSchema = CharacterSchema.extend({
  films: z.array(z.string()),
  sourceUrl: z.string(),
});
export type CharacterDetail = z.infer<typeof CharacterDetailSchema>;
