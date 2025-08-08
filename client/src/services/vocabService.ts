import { http } from './http';
import type { VocabItem } from '../types/VocabItem';

export const vocabService = {
  list: () => http<VocabItem[]>('/api/words'),
  create: (payload: Omit<VocabItem, 'id'|'createdAt'|'createdBy'>) =>
    http<VocabItem>('/api/words', { method: 'POST', body: JSON.stringify(payload) }),
  detail: (id: string) => http<VocabItem>(`/api/words/${id}`),
};
