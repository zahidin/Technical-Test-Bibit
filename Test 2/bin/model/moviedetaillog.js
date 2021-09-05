'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieDetailLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MovieDetailLog.init({
    data: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'MovieDetailLog',
  });
  return MovieDetailLog;
};