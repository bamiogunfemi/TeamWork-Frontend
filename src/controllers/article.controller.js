import { ApplicationError, NotFoundError } from '../helpers/error';
import { Article, Comment } from '../database/models';

export default {
  createArticle: async (req, res, next) => {
    const { user, body } = req;
    try {
      const article = await Article.create({
        article: body.article,
        title: body.title,
        authorId: user.id,
      });
      return res.status(201).json({ status: 'success', data: article });
    } catch (error) {
      return next(new ApplicationError(500, error.message));
    }
  },

  showArticle: async (req, res, next) => {
    const { params: { id } } = req;
    try {
      const article = await Article.find({ id });
      if (!article) return next(new NotFoundError('article not found'));

      return res.status(200).json({ status: 'success', data: article });
    } catch (error) {
      return next(new ApplicationError(500, error.message));
    }
  },

  updateArticle: async (req, res, next) => {
    const { params: { id }, body } = req;
    try {
      const article = await Article.find({ id });
      const updatedArticle = await article.update(body);
      return res.status(200).json({ status: 'success', data: updatedArticle });
    } catch (error) {
      return next(new ApplicationError(500, error.message));
    }
  },

  deleteArticle: async (req, res, next) => {
    const { params: { id } } = req;
    try {
      const article = await Article.find({ id });
      await article.delete(article);
      return res.status(200).json({ status: 'success', data: 'article deleted' });
    } catch (error) {
      return next(new ApplicationError(500, error.message));
    }
  },

  createComment: async (req, res, next) => {
    const { id } = req.params;
    const { user, body } = req;
    try {
      const article = await Article.find({ id });
      if (!article) return next(new NotFoundError());

      // console.log('*****', article);
      // console.log('*****', id);
      // console.log('*****', user.id);

      /* const comment = await Comment.create({
        // articleId: id,
        authorId: user.id,
        comment: body.comment,
      }); */

      console.log('*****', id);

      return res.status(201).json({ status: 'succcess'/* data: comment */ });
    } catch (error) {
      return next(new ApplicationError(500, error.message));
    }
  },
};
