class NotFoundError{
  constructor(param) {
    this.message = param.message || param || 'Not Found';
    this.data = param.data;
    this.code = param.code;
  }
}

module.exports = NotFoundError;
