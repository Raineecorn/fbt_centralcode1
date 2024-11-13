'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FBT_Audit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FBT_Audit.init({
    audit_id: DataTypes.INTEGER,
    tracking_id: DataTypes.STRING,
    date_loaded: DataTypes.DATE,
    remarks: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FBT_Audit',
  });
  return FBT_Audit;
};