class ServiceUnavailableError{
  constructor(param) {
    this.message = param.message || param || 'Service Unavailable';
    this.data = param.data;
    this.code = param.code;
  }
}

module.exports = ServiceUnavailableError;
