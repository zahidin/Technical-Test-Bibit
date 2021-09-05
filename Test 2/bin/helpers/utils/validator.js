const joi = require('joi');
const validate = require('validate.js');
const wrapper = require('./wrapper');

const isValidPayload = (payload, constraint) => {
  const { value, error } = joi.validate(payload, constraint);
  if(!validate.isEmpty(error)){
    const message = error.details[0].message;
    return wrapper.error({ message: message, code: 400 });
  }
  return wrapper.data(value, 'success', 200);
};

module.exports = {
  isValidPayload
};
