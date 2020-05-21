import { Model, User } from './index';

export default class Article extends Model {
  constructor(attributes) {
    super();
    this.id = attributes.id;
    this.title = attributes.title;
    this.article = attributes.article;
    this.authorId = attributes.authorId;
    this.createdAt = attributes.createdAt;
    this.updatedAt = attributes.updatedAt;
  }

  belongsTo(user) {
    return (this.authorId === user.id);
  }

  static table() {
    return 'articles';
  }

  static get attributes() {
    return {
      id: 'id',
      title: 'title',
      article: 'body',
      authorId: 'user_id',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }

  static async all(options) {
    const rows = await super.all(options);
    const articles = this.collect(rows);
    return articles;
  }

  static collect(rows) {
    const articles = rows.map((row) => {
      const article = {};
      const deepValues = {};

      Object.entries(row).forEach((pairs) => {
        const [key, value] = pairs;
        if (key.includes('.')) {
          const [outerKey, innerKey] = key.split('.');
          deepValues[innerKey] = value;
          article[outerKey] = deepValues;
        } else article[key] = value;
      });
      return article;
    });
    return articles;
  }
}
