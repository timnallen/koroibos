'use strict';
module.exports = (sequelize, DataTypes) => {
  const Olympian = sequelize.define('Olympian', {
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sport: DataTypes.STRING,
    total_medals_won: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER
  }, {});
  Olympian.associate = function(models) {
    // associations can be defined here
  };
  return Olympian;
};