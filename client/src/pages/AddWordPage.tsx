import { useState } from 'react';
import { fixSentence } from '../lib/fixSentence';
// import { vocabService } from '../services/vocabService';

export default function AddWordPage() {
  const [word,setWord]=useState('');
  const [meaning,setMeaning]=useState('');
  const [example,setExample]=useState('');
  const [loading,setLoading]=useState(false);

  const onFix = async () => {
    setLoading(true);
    try { setExample(await fixSentence(example)); } finally { setLoading(false); }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // await vocabService.create({ word, meaning, example });
    alert('Submitted (mock).');
    setWord(''); setMeaning(''); setExample('');
  };

  return (
    <div>
      <h4 className="mt-4 mb-3">Add a new word</h4>
      <form onSubmit={onSubmit} style={{ maxWidth: 520 }}>
        <div className="mb-3">
          <label className="form-label">Word</label>
          <input className="form-control" value={word} onChange={e=>setWord(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Meaning</label>
          <input className="form-control" value={meaning} onChange={e=>setMeaning(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Example sentence</label>
          <textarea className="form-control" rows={3} value={example} onChange={e=>setExample(e.target.value)} />
          <button type="button" className="btn btn-outline-secondary btn-sm mt-2" onClick={onFix} disabled={loading}>
            {loading ? 'Fixing…' : 'AI fix sentence'}
          </button>
        </div>
        <button className="btn btn-primary" type="submit">Save</button>
      </form>
    </div>
  );
}
