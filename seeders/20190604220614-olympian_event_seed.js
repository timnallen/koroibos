'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OlympianEvents', [{
      OlympianId: 1,
      EventId: 1,
      medal: 'Gold',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      OlympianId: 2,
      medal: 'Silver',
      EventId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OlympianEvents', null, {});
  }
};
