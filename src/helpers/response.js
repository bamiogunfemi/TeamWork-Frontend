export default class Response {
  /**
   * @description Response class constructor
   * @returns {object} Response object
   */
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.message = null;
    this.data = null;
  }

  /**
   * @param {number} statusCode
   * @param {string} message
   * @param {object} data
   * @returns {object} success response object
   */
  setSuccess(statusCode, message, data) {
    this.statusCode = statusCode;
    this.type = 'success';
    this.message = message;
    this.data = data;
  }

  /**
   * @param {number} statusCode
   * @param {string} message
   * @returns {object} error response object
   */
  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.type = 'error';
    this.message = message;
  }

  /**
   * @param {object} res
   * @returns {object} response method
   */
  send(res) {
    const result = {
      status: this.type,
      message: this.message,
      data: this.data,
    };

    if (this.type === 'success') {
      return res.status(this.statusCode).json(result);
    }
    return res.status(this.statusCode).json({
      status: this.type, message: this.message,
    });
  }
}
