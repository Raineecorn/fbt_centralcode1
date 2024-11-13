'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FBT_Tracking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FBT_Tracking.init({
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type:DataTypes.STRING},
    sender: DataTypes.STRING,
    receiver: DataTypes.STRING,
    items: DataTypes.STRING,
    date_ordered: DataTypes.DATE,
    number_of_boxes: DataTypes.INTEGER,
    box_size: DataTypes.STRING,
    weight: DataTypes.STRING,
    address: DataTypes.STRING,
    destination: DataTypes.STRING,
    date_loaded: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'FBT_Tracking',
  });
  return FBT_Tracking;
};