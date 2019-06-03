'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    sport: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    Event.belongsToMany(models.Olympian, { through: models.OlympianEvent });
  };
  return Event;
};
