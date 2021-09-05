class ConflictError{
  constructor(param) {
    this.message = param.message || param || 'Conflict';
    this.data = param.data;
    this.code = param.code;
  }
}

module.exports = ConflictError;
