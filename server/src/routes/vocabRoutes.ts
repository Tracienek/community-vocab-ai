import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { list, create, getOne, upvote } from '../controllers/vocabController.js';

const router = Router();
router.get('/', list);
router.post('/', auth(), create);
router.get('/:id', getOne);
router.post('/:id/upvote', auth(), upvote);

export default router;
