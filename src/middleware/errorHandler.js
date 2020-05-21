import { config } from 'dotenv';
import debug from 'debug';

config();
const DEBUG = debug('dev');

export default (err, _, res, next) => {
  const isProduction = process.env.NODE_ENV === 'production';
  let errorMessage = {};

  if (res.headersSent) {
    return next(err);
  }
  if (!isProduction) {
    DEBUG(err.stack);
    errorMessage = err;
  }

  return res.status(err.status || 500).json({
    status: 'error',
    error: {
      message: err.message,
      ...(err.errors && { errors: err.errors }),
      ...(!isProduction && { trace: errorMessage }),
    },
  });
};
