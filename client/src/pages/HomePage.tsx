// client/src/pages/HomePage.tsx
import { useEffect, useState } from 'react';
import VocabCard from '../components/VocabCard';
import type { VocabItem } from '../types/VocabItem';
import { vocabService } from '../services/vocabService';

export default function HomePage() {
  const [items, setItems] = useState<VocabItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    vocabService.list()
      .then(setItems)
      .catch(e => setError(e.message || 'Failed to load'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="row g-3">
      {items.map(item => (
        <div className="col-12 col-md-6 col-lg-4" key={item.id}>
          <VocabCard item={item} />
        </div>
      ))}
    </div>
  );
}
