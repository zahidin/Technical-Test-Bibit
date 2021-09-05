const joi = require('joi');

const paramsId = joi.object({
  id: joi.string().required(),
});

module.exports = {
    paramsId
};
  
  