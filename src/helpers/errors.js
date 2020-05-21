/* eslint-disable max-classes-per-file */
export class ApplicationError extends Error {
  constructor(status, message = 'an error occurred', errors) {
    super(message);
    this.status = status || 500;
    this.message = message;
    this.errors = errors;
  }
}

export class NotFoundError extends ApplicationError {
  constructor(message) {
    super(404, message || 'resource not found');
  }
}
