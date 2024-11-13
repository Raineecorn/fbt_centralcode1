'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fbt_entries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trackingNumber: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      senderName: {
        type: Sequelize.STRING
      },
      senderContactNumber: {
        type: Sequelize.STRING
      },
      receiverName: {
        type: Sequelize.STRING
      },
      receiverContactNumber: {
        type: Sequelize.STRING
      },
      senderEmail: {
        type: Sequelize.STRING
      },
      receiverEmail: {
        type: Sequelize.STRING
      },
      items: {
        type: Sequelize.STRING
      },
      senderAddress: {
        type: Sequelize.STRING
      },
      receiverAddress: {
        type: Sequelize.STRING
      },
      numberOfBoxes: {
        type: Sequelize.INTEGER
      },
      boxSize: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
      },
      dateLoaded: {
        type: Sequelize.DATEONLY
      },
      remarks: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fbt_entries');
  }
};