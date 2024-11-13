// models/fbt_entry.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FBT_entry extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }
  FBT_entry.init({
    trackingNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true // Specify this as the primary key
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    senderName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senderContactNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    receiverName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    receiverContactNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senderEmail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    receiverEmail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    items: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senderAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    receiverAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numberOfBoxes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    boxSize: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    dateLoaded: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'FBT_entry',
    tableName: 'fbt_entry',
    timestamps: true
  });
  return FBT_entry;
};
