'use strict';
module.exports = (sequelize, DataTypes) => {
  const Olympian = sequelize.define('Olympian', {
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sport: DataTypes.STRING,
    sex: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER
  }, {});
  Olympian.associate = function(models) {
    Olympian.belongsToMany(models.Event, { through: models.OlympianEvent });
  };
  return Olympian;
};
