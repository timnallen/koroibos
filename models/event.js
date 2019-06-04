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
  return Event;
};
