import { matchedData, validationResult } from 'express-validator';
import { ApplicationError } from '../helpers/errors';

export default (schemas, status = 400) => {
  const validationCheck = async (req, res, next) => {
    const errors = validationResult(req);
    req = { ...req, ...matchedData(req) }; // eslint-disable-line

    if (!errors.isEmpty()) {
      const mappedErrs = Object
        .entries(errors.mapped())
        .reduce((acc, [key, value]) => {
          acc[key] = value.msg;
          return acc;
        }, {});

      const appError = new ApplicationError(status, 'validation error', mappedErrs);
      return next(appError);
    }
    return next();
  };
  return [...(schemas.length && [schemas]), validationCheck];
};
