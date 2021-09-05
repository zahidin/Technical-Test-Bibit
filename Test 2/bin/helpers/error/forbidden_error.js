class ForbiddenError{
  constructor(param) {
    this.message = param.message || param || 'Forbidden';
    this.data = param.data;
    this.code = param.code;
  }
}

module.exports = ForbiddenError;
