'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Olympians', [{
      name: 'John Doe',
      id: 1,
      sex: "M",
      age: 23,
      height: 123,
      weight: 234,
      team: "US",
      sport: "Archery",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'John Doy',
      id: 2,
      sex: "M",
      age: 24,
      height: 111,
      weight: 222,
      team: "UK",
      sport: "Archery",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Olympians', null, {});
  }
};
