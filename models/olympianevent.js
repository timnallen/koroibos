'use strict';
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
  return OlympianEvent;
};
