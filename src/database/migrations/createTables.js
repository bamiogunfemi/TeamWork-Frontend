const createUsersTable = `
CREATE TABLE IF NOT EXISTS users(
    id UUID PRIMARY KEY,
    firstname VARCHAR(128) NOT NULL,
    lastname VARCHAR(128) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    address VARCHAR(128) NOT NULL,
    gender  VARCHAR(6) NOT NULL,
    password TEXT NOT NULL,
    jobRole VARCHAR(50) DEFAULT 'unverified' NOT NULL,
    dept VARCHAR(50) NOT NULL,
    isadmin BOOLEAN DEFAULT false NOT NULL
);`;

const articleTable = `
CREATE TABLE IF NOT EXISTS articles(
    id UUID PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    body TEXT NOT NULL
);`;

const gifTable = `
CREATE TABLE IF NOT EXISTS gifs(
    id UUID PRIMARY KEY,
    createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    url VARCHAR(255) NOT NULL
);`;

const commentTable = `
CREATE TABLE IF NOT EXISTS comments(
    id UUID PRIMARY KEY,
    createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    gifId VARCHAR(255) NOT NULL
);`;

const createTables = `
${createUsersTable}${articleTable}${gifTable}${commentTable}`;

export default createTables;
