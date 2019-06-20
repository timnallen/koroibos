'use strict';
const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = (sequelize, DataTypes) => {
  const OlympianEvent = sequelize.define('OlympianEvent', {
    medal: DataTypes.STRING,
    EventId: DataTypes.INTEGER,
    OlympianId: DataTypes.INTEGER
  }, {});

  OlympianEvent.associate = function(models) {
    OlympianEvent.belongsTo(models.Olympian);
    OlympianEvent.belongsTo(models.Event);
  };

  OlympianEvent.medalistsByEvent = function(id) {
    const olympiansWithMedal = OlympianEvent.findAll({
      where: {
        EventId: id,
        medal: {[Op.not]: 'NA'}
      },
      attributes: [
        'medal'
      ],
      include: [{
        model: require('../models').Olympian,
        attributes: [
          'name',
          'team',
          'age'
        ]
      }]
    });

    return olympiansWithMedal.map(function (olympian) {
      return {
        name: olympian.Olympian.name,
        team: olympian.Olympian.team,
        age: olympian.Olympian.age,
        medal: olympian.medal
      }
    });
  };

  return OlympianEvent;
};
