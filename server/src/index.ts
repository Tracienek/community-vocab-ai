import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import vocabRoutes from './routes/vocabRoutes.js';

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(',') || '*' }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (_, res) => res.json({ ok: true }));

app.use('/api/auth', authRoutes);
app.use('/api/words', vocabRoutes);

const port = process.env.PORT || 3000;

connectDB(process.env.MONGO_URI as string)
  .then(() => {
    app.listen(port, () => console.log(`🚀 API running on http://localhost:${port}`));
  })
  .catch(err => {
    console.error('DB connection error:', err);
    process.exit(1);
  });
