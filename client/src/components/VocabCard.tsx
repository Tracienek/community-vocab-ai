import { Link } from 'react-router-dom';
import type { VocabItem } from '../types/VocabItem';

export default function VocabCard({ item }: { item: VocabItem }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title mb-0">{item.word}</h5>
          <small className="text-muted">{new Date(item.createdAt).toLocaleDateString()}</small>
        </div>
        <p className="mb-1"><b>Meaning:</b> {item.meaning}</p>
        <p className="mb-2"><i>Example:</i> {item.example}</p>
        <Link className="btn btn-sm btn-outline-primary" to={`/words/${item.id}`}>View</Link>
      </div>
    </div>
  );
}
