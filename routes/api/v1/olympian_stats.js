var express = require("express");
var router = express.Router();
var pry = require("pryjs");
const sequelize = require('sequelize');
const Op = sequelize.Op
var Olympian = require('../../../models').Olympian;
var Event = require('../../../models').Event;
var OlympianEvent = require('../../../models').OlympianEvent;

router.get('/', async function(req, res, rext) {
  var olympian_stats = {};
  let competing_olympians = await Olympian.findAll();
  olympian_stats.total_competing_olympians = competing_olympians.length;
  let average_male = await Olympian.findAll({ where: { sex: 'M' }, attributes: [[sequelize.fn('AVG', sequelize.col('weight')), 'average_male_weight']] });
  let average_female = await Olympian.findAll({ where: { sex: 'F' }, attributes: [[sequelize.fn('AVG', sequelize.col('weight')), 'average_female_weight']] });
  let male_olympians = average_male[0].dataValues.average_male_weight
  let female_olympians = average_female[0].dataValues.average_female_weight
  olympian_stats.average_weight = {unit: 'kg', male_olympians: male_olympians, female_olympians: female_olympians};
  res.setHeader("Content-Type", "application/json");
  let age_stat = await Olympian.findAll({ attributes: [[sequelize.fn('AVG', sequelize.col('age')), 'average_age']] });
  olympian_stats.average_age = age_stat[0].dataValues.average_age;
  res.status(200).send({olympian_stats: olympian_stats});
});

module.exports = router;
