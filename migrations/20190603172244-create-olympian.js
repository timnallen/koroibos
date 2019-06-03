'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Olympians', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      team: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      sport: {
        type: Sequelize.STRING
      },
      total_medals_won: {
        type: Sequelize.INTEGER
      },
      sex: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Olympians');
  }
};