import { useEffect, useState } from 'react';
import VocabCard from '../components/VocabCard';
import type { VocabItem } from '../types/VocabItem';
// import { vocabService } from '../services/vocabService';

export default function HomePage() {
  const [items, setItems] = useState<VocabItem[]>([]);

  useEffect(() => {
    // TODO: thay mock bằng API thật: vocabService.list().then(setItems)
    setItems([
      { id:'1', word:'serendipity', meaning:'the occurrence of events by chance in a happy way', example:'It was pure serendipity.', createdBy:'demo', createdAt:new Date().toISOString() },
      { id:'2', word:'meticulous', meaning:'very careful and with great attention to detail', example:'She keeps meticulous records.', createdBy:'demo', createdAt:new Date().toISOString() },
    ]);
  }, []);

  return (
    <div>
      <h4 className="mt-4 mb-3">Community Vocabulary</h4>
      {items.map(it => <VocabCard key={it.id} item={it} />)}
      {items.length === 0 && <p className="text-muted">No words yet.</p>}
    </div>
  );
}
