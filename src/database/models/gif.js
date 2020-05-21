import { Article } from './index';

export default class Gif extends Article {
  constructor(attributes) {
    super();
    this.id = attributes.id;
    this.title = attributes.title;
    this.imageUrl = attributes.imageUrl;
    this.authorId = attributes.authorId;
  }

  static table() {
    return 'gifs';
  }

  static get attributes() {
    return {
      id: 'id',
      title: 'title',
      imageUrl: 'image_url',
      authorId: 'user_id',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }

  static async all(options) {
    const rows = await super.all(options);
    const gifs = this.collect(rows);
    return gifs;
  }

  static collect(rows) {
    const gifs = rows.map((row) => {
      const gif = {};
      const deepValues = {};

      Object.entries(row).forEach((pairs) => {
        const [key, value] = pairs;
        if (key.includes('.')) {
          const [outerKey, innerKey] = key.split('.');
          deepValues[innerKey] = value;
          gif[outerKey] = deepValues;
        } else gif[key] = value;
      });
      return gif;
    });
    return gifs;
  }
}
