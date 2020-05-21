import { ApplicationError, NotFoundError } from '../helpers/errors';
import { Gif } from '../database/models';

export default {
  createGif: async (req, res, next) => {
    const { user, body, file } = req;
    try {
      const gif = await Gif.create({
        title: body.title,
        imageUrl: file ? file.secure_url : null,
        authorId: user.id,
      });
      return res.status(201).json({ status: 'success', data: gif });
    } catch (error) {
      return next(new ApplicationError(500, error));
    }
  },

  getGif: async (req, res, next) => {
    const { id } = req.params;
    try {
      const gif = await Gif.find({ id });
      if (!gif) return next(new NotFoundError('gif post not found'));

      return res.status(200).json({ status: 'success', data: gif });
    } catch (error) {
      return next(new ApplicationError(500, error));
    }
  },

  deleteGif: async (req, res, next) => {
    const { id } = req.params;
    try {
      const gif = await Gif.find({ id });
      await gif.delete(gif);
      return res.status(200).json({ status: 'success', data: 'gif post deleted' });
    } catch (error) {
      return next(new ApplicationError(500, error));
    }
  },

  createComment: async (req, res, next) => {},
};
