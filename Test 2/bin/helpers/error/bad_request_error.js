class BadRequestError{
  constructor(param) {
    this.message = param.message || param || 'Bad Request';
    this.data = param.data;
    this.code = param.code;
  }
}

module.exports = BadRequestError;
