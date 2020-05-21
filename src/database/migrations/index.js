/* eslint-disable no-useless-catch */
import debug from 'debug';
import DB from '../config/db';

const DEBUG = debug('DB');

// create users table
const createUsers = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  CREATE TYPE user_gender AS ENUM ('male', 'female');
  CREATE TABLE IF NOT EXISTS users(
    id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    gender user_gender,
    job_role TEXT NOT NULL,
    address TEXT NOT NULL,
    department VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;

// create articles table
const createArticles = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  CREATE TABLE IF NOT EXISTS articles(
    id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;

// create gifs table
const createGifs = `
  CREATE TABLE IF NOT EXISTS gifs(
    id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;

// create comments table
const createComments = `
  CREATE TABLE IF NOT EXISTS comments(
    id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    gif_id UUID REFERENCES gifs(id),
    article_id UUID REFERENCES articles(id),
    body TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;

const autoUpdateFunction = `
  CREATE OR REPLACE FUNCTION update_modified_column()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_at = now();
      RETURN NEW;
    END;
    $$ language 'plpgsql';`;

const autoUpdateTrigger = (table) => `CREATE TRIGGER update_${table}_moddatetime
  BEFORE UPDATE ON ${table} FOR EACH ROW EXECUTE PROCEDURE update_modified_column();`;

export const migrate = async () => {
  const client = await DB.getClient();
  try {
    await client.query('BEGIN');
    await client.query(createUsers);
    await client.query(createArticles);
    await client.query(createGifs);
    await client.query(createComments);
    await client.query(autoUpdateFunction);
    await client.query(autoUpdateTrigger('users'));
    await client.query(autoUpdateTrigger('articles'));
    await client.query(autoUpdateTrigger('gifs'));
    await client.query(autoUpdateTrigger('comments'));
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
    DEBUG('Database migration completed successfully.');
    process.exit();
  }
};

export const reset = async () => {
  try {
    const client = await DB.getClient();
    await client.query('DROP TABLE IF EXISTS users CASCADE');
    await client.query('DROP TYPE IF EXISTS user_gender');
    await client.query('DROP TABLE IF EXISTS articles CASCADE');
    await client.query('DROP TABLE IF EXISTS gifs CASCADE');
    await client.query('DROP TABLE IF EXISTS comments CASCADE');
  } catch (error) {
    DEBUG(error);
    throw error;
  } finally {
    process.exit();
  }
};

require('make-runnable');
