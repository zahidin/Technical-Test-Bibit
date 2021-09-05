class Unauthorized{
  constructor(param) {
    this.message = param.message || param || 'Unauthorized';
    this.data = param.data;
    this.code = param.code;
  }
}

module.exports = Unauthorized;
