class InternalServerError{
  constructor(param) {
    this.message = param.message || param || 'Internal Server Error';
    this.data = param.data;
    this.code = param.code;
  }
}

module.exports = InternalServerError;
