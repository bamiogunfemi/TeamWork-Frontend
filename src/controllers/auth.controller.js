/* eslint-disable import/named */
import { ApplicationError } from '../helpers/errors';
import { generateToken } from '../helpers/auth';
import User from '../database/models/user';

export default {
  signup: async (req, res, next) => {
    try {
      const user = await User.create(req.body);
      const token = generateToken(user);
      const newUser = user.getSafeDataValues();

      return res.status(201).json({ status: 'success', data: { newUser, token } });
    } catch (error) {
      return next(new ApplicationError(500, error));
    }
  },

  signin: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const isUser = await User.find({ email });
      if (!isUser || !await isUser.validatePassword(password)) {
        return next(new ApplicationError(401, 'email/password is invalid'));
      }

      const token = generateToken(isUser);
      const user = isUser.getSafeDataValues();
      return res.status(200).json({ status: 'success', data: { user, token } });
    } catch (error) {
      return next(new ApplicationError(500, error));
    }
  },
};
