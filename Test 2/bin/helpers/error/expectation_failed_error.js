class ExpectationFailedError{
  constructor(param) {
    this.message = param.message || param || 'Expectation Failed';
    this.data = param.data;
    this.code = param.code;
  }
}

module.exports = ExpectationFailedError;
