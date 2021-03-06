'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    sport: DataTypes.STRING
  }, {});

  Event.associate = function(models) {
    Event.hasMany(models.OlympianEvent, { onDelete: 'cascade' })
    Event.belongsToMany(models.Olympian, { through: models.OlympianEvent, foreign_key: models.EventId });
  };

  Event.eventsBySport = function() {
    return Event.findAll({
      attributes: [
        'sport',
        [sequelize.fn('array_agg', sequelize.col('title')), 'events']
      ],
      group: ['Event.sport']
    });
  };

  Event.eventById = function(id) {
    return Event.findOne({
      where: { id },
      attributes: ['title']
    });
  };

  return Event;
};
