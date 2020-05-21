/* eslint-disable no-shadow */
import DB from '../config/db';

const extractParams = (fields) => {
  const keys = Object.keys(fields);
  let params = '';

  for (let index = 0; index < keys.length; index += 1) {
    const currentIndex = keys[index];
    const keyIndex = index + 1;
    params += `${currentIndex}=$${keyIndex}`;
    if (keyIndex !== keys.length) params += ' AND ';
  }
  return params;
};

export default class Model {
  async update(data) {
    const Model = this.constructor;
    const values = Model.extractValues(data);
    const queryString = Model.updateQuery(data);
    const params = [...values, this.id];
    const { rows } = await DB.query(queryString, params);
    const [row] = rows;
    const attributes = Model.mutateData(row);
    return new Model(attributes);
  }

  async delete() {
    const Model = this.constructor;
    const queryString = `DELETE FROM ${Model.table()} WHERE id=$1 RETURNING *`;
    const { rows } = await DB.query(queryString, [this.id]);
    const [row] = rows;
    return row;
  }

  static async find(columns) {
    const Model = this;
    Model.populateHiddenFields = true;
    const [row] = await this.where(columns);
    if (!row) return null;
    return new Model(row);
  }

  static async all(options) {
    const Model = this;
    Model.populateHiddenFields = false;
    const queryString = this.selectQuery(options);
    const { rows } = await DB.query(queryString);
    return rows;
  }

  static async where(columns, order = 'asc') {
    const Model = this;
    const params = extractParams(columns);
    const values = Object.values(columns);
    const queryString = `${Model.selectQuery()} WHERE ${params}
      ORDER BY created_at ${order}`;
    const { rows } = await DB.query(queryString, values);
    return rows;
  }

  static async create(data) {
    const Model = this;
    const queryString = Model.insertQuery(data);
    const values = Model.extractValues(data);
    const { rows } = await DB.query(queryString, values);
    const [row] = rows;
    const mutated = Model.mutateData(row);
    return new Model(mutated);
  }

  static insertQuery(data) {
    const Model = this;
    const { attributes } = Model;
    const columns = [];
    const values = [];
    let index = 0;

    Object.keys(data).forEach((key) => {
      const attribute = attributes[key];
      if (attribute) {
        index += 1;
        columns.push(attribute);
        values.push(`$${index}`);
      }
    });
    return `INSERT INTO ${Model.table()}(${columns})
      VALUES(${values}) RETURNING *`;
  }

  static updateQuery(data) {
    const Model = this;
    const { attributes } = Model;
    const columns = [];
    let index = 1;

    Object.keys(data).forEach((key) => {
      const attribute = attributes[key];
      if (attribute) {
        columns.push(`${attribute}=$${index}`);
        index += 1;
      }
    });

    return `UPDATE ${Model.table()} SET ${columns} WHERE id=$${index} RETURNING *`;
  }

  static selectQuery(options = {}) {
    const Model = this;
    const table = Model.table();
    let select = `SELECT ${Model.abstractFields}`;
    let from = ` FROM ${table}`;
    let query = '';

    // build query for JOIN clause
    const { join } = options;
    if (join && join.length > 0) {
      const {
        join: [builder],
      } = options;
      const { ref, fkey, fields } = builder;
      const joinFields = fields.map(
        (field) => `${ref}.${field} as "${builder.as}.${field}"`,
      );

      const abstractFields = Model.abstractFields.map(
        (field) => `${table}.${field}`,
      );
      select = `SELECT ${abstractFields}, ${joinFields}, ${joinFields}`;
      from += ` INNER JOIN ${ref} ON ${ref}.id = ${table}.${fkey}`;
    }

    // build query for WHERE clause
    const { where } = options;
    if (where && where.length > 2) {
      const {
        where: [lOperand, operator, rOperand],
      } = options;
      from += ` WHERE ${lOperand} ${operator} '${rOperand}'`;
    }

    // build query for ORDER BY clause
    const { orderBy } = options;
    if (orderBy && orderBy.length > 1) {
      const {
        orderBy: [column, direction],
      } = options;
      from += ` ORDER BY ${table}.${column} ${direction}`;
    }

    // build final query
    query += select;
    query += from;
    return query;
  }

  static get abstractFields() {
    const Model = this;
    const { attributes } = Model;
    const abstract = [];
    Object.entries(attributes).forEach((pairs) => {
      const [key, value] = pairs;
      if (!this.hiddenAttributes().includes(key)) {
        abstract.push(`${value} as "${key}"`);
      }
    });
    return [...abstract, ...(Model.additionalFields())];
  }

  static hiddenAttributes() {
    return [];
  }

  static get populateHiddenFields() {
    return this.populateHidden;
  }

  static set populateHiddenFields(value) {
    this.populateHidden = value;
  }

  static additionalFields() {
    if (this.populateHiddenFields) return this.hiddenAttributes();
    return [];
  }

  static extractValues(data) {
    const Model = this;
    const { attributes } = Model;
    const values = [];
    Object.entries(data).forEach((pairs) => {
      const [key, value] = pairs;
      if (attributes[key]) values.push(value);
    });
    return values;
  }

  static mutateData(data) {
    const Model = this;
    const { attributes } = Model;
    const mutated = {};
    Object.entries(attributes).forEach((pairs) => {
      const [key, param] = pairs;
      mutated[key] = data[param];
    });
    return mutated;
  }
}
