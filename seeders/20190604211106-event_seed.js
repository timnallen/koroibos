'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Events', [{
      title: "Archery Men's Individual",
      id: 1,
      sport: 'Archery',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Archery Men's Team",
      sport: 'Archery',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Archery Women's Individual",
      sport: 'Archery',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Badminton Men's Doubles",
      sport: 'Badminton',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Badminton Men's Singles",
      sport: 'Badminton',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Badminton Women's Doubles",
      sport: 'Badminton',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
