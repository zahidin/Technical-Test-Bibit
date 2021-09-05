class GatewayTimeoutError{
  constructor(param) {
    this.message = param.message || param || 'Gateway Timeout';
    this.data = param.data;
    this.code = param.code;
  }
}

module.exports = GatewayTimeoutError;
