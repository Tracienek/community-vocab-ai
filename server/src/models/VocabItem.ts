import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IVocabItem extends Document {
  word: string;
  meaning: string;
  example: string;
  createdBy: Types.ObjectId;
  upvotes: number;
}

const vocabSchema = new Schema<IVocabItem>({
  word: { type: String, required: true, trim: true },
  meaning: { type: String, required: true, trim: true },
  example: { type: String, required: true, trim: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  upvotes: { type: Number, default: 0 }
}, { timestamps: true });

export const VocabItem = mongoose.model<IVocabItem>('VocabItem', vocabSchema);
