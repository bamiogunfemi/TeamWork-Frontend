const dropUsersTable = 'DROP TABLE IF EXISTS users CASCADE; ';
const dropArticleTable = 'DROP TABLE IF EXISTS articles CASCADE; ';
const dropGifTable = 'DROP TABLE IF EXISTS gifs CASCADE; ';
const dropCommentTable = 'DROP TABLE IF EXISTS comments CASCADE; ';

const dropQuery = `${dropUsersTable}${dropArticleTable}${dropGifTable}${dropCommentTable}`;

export default dropQuery;
