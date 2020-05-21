import { Pool } from 'pg';
import config from './config';

const DBPool = new Pool(config);

export default {
  query(text, params) {
    return DBPool.query(text, params);
  },
  getClient() {
    return DBPool.connect();
  },
};
