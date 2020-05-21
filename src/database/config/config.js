require('dotenv').config();

const env = process.env.ENV || process.env.NODE_ENV;

const DBConfig = {
  test: {
    user: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASS,
    database: process.env.TEST_DB_NAME,
  },
  dev: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  production: {
    connectionString: process.env.DATABASE_URL,
  },
  staging: {
    connectionString: process.env.DATABASE_URL,
  },
};

let credentials = DBConfig[env];
if (!credentials) {
  credentials = DBConfig.dev;
}

const config = credentials;

export default config;
