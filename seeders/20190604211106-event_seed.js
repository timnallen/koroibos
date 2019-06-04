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
      id: 2,
      sport: 'Archery',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Archery Women's Individual",
      id: 3,
      sport: 'Archery',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Badminton Men's Doubles",
      id: 4,
      sport: 'Badminton',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Badminton Men's Singles",
      id: 5,
      sport: 'Badminton',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Badminton Women's Doubles",
      id: 6,
      sport: 'Badminton',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
