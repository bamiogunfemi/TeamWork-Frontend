import { Router } from 'express';
import articleController from '../controllers/article.controller';
import authMiddleware from '../middleware/auth';
import articleSchemas from '../validations/article.validation';
import validator from '../middleware/validator';

const article = Router();

const { verifyToken, isAuthor } = authMiddleware;
const {
  createSchema,
  readSchema,
  updateSchema,
  deleteSchema,
  createCommentSchema,
} = articleSchemas;
const {
  createArticle,
  showArticle,
  updateArticle,
  deleteArticle,
  createComment,
} = articleController;

article.post(
  '/',
  validator(createSchema),
  verifyToken,
  createArticle,
);

article.post(
  '/:id/comment',
  validator(createCommentSchema),
  verifyToken,
  createComment,
);

article.get(
  '/:id',
  validator(readSchema),
  verifyToken,
  showArticle,
);

article.patch(
  '/:id',
  validator(updateSchema),
  verifyToken,
  isAuthor,
  updateArticle,
);

article.delete(
  '/:id',
  validator(deleteSchema),
  verifyToken,
  isAuthor,
  deleteArticle,
);

export default article;
