import { Router } from 'express';
import authMiddleware from '../middleware/auth';
import gifController from '../controllers/gif.controller';
import gifSchemas from '../validations/gif.validation';
import validator from '../middleware/validator';

const gif = Router();
const { verifyToken, isAuthor } = authMiddleware;
const { createGifSchema, readGifSchema, deleteGifSchema } = gifSchemas;
const { createGif, getGif, deleteGif } = gifController;

gif.post(
  '/',
  validator(createGifSchema),
  verifyToken,
  createGif,
);

gif.get(
  '/:id',
  validator(readGifSchema),
  verifyToken,
  getGif,
);

gif.delete(
  '/:id',
  validator(deleteGifSchema),
  verifyToken,
  isAuthor,
  deleteGif,
);

export default gif;
