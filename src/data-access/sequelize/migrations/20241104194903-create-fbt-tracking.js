'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fbt_tracking', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      sender: {
        type: Sequelize.STRING,
        allowNull: true
      },
      receiver: {
        type: Sequelize.STRING,
        allowNull: true
      },
      items: {
        type: Sequelize.STRING,
        allowNull: true
      },
      date_ordered: {
        type: Sequelize.DATE,
        allowNull: true
      },
      number_of_boxes: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      box_size: {
        type: Sequelize.STRING,
        allowNull: true
      },
      weight: {
        type: Sequelize.STRING, // Consider Sequelize.FLOAT if weight should be numeric
        allowNull: true
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      destination: {
        type: Sequelize.STRING,
        allowNull: true
      },
      date_loaded: {
        type: Sequelize.DATE,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('fbt_tracking');
  }
};
