import { Request, Response } from 'express';
import { VocabItem } from '../models/VocabItem.js';

export async function list(req: Request, res: Response) {
  const items = await VocabItem.find().sort({ createdAt: -1 }).limit(100).populate('createdBy', 'username');
  res.json(items.map(i => ({
    id: i._id, word: i.word, meaning: i.meaning, example: i.example,
    createdBy: (i as any).createdBy?.username || 'unknown', createdAt: i.createdAt, upvotes: i.upvotes
  })));
}

export async function create(req: Request, res: Response) {
  const { word, meaning, example } = req.body;
  if (!word || !meaning || !example) return res.status(400).json({ message: 'Missing fields' });
  const doc = await VocabItem.create({ word, meaning, example, createdBy: req.user!.id });
  res.status(201).json({
    id: doc._id, word: doc.word, meaning: doc.meaning, example: doc.example,
    createdBy: req.user!.username, createdAt: doc.createdAt, upvotes: doc.upvotes
  });
}

export async function getOne(req: Request, res: Response) {
  const doc = await VocabItem.findById(req.params.id);
  if (!doc) return res.status(404).json({ message: 'Not found' });
  res.json({
    id: doc._id, word: doc.word, meaning: doc.meaning, example: doc.example,
    createdBy: doc.createdBy.toString(), createdAt: doc.createdAt, upvotes: doc.upvotes
  });
}

export async function upvote(req: Request, res: Response) {
  const doc = await VocabItem.findByIdAndUpdate(req.params.id, { $inc: { upvotes: 1 } }, { new: true });
  if (!doc) return res.status(404).json({ message: 'Not found' });
  res.json({ id: doc._id, upvotes: doc.upvotes });
}
