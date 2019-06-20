var express = require("express");
var router = express.Router();
var pry = require("pryjs");
const sequelize = require('sequelize');
const Op = sequelize.Op
var Olympian = require('../../../models').Olympian;
var Event = require('../../../models').Event;
var OlympianEvent = require('../../../models').OlympianEvent;

router.get('/', async function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  try {
    var stats = {
      totalAge: 0,
      males: 0,
      females: 0,
      maleWeight: 0,
      femaleWeight: 0
    }
    var olympians = await Olympian.findAll();

    for (var i = 0; i < olympians.length; i++) {
      stats.totalAge += olympians[i].age;
      if (olympians[i].sex === 'M') {
        stats.maleWeight += olympians[i].weight
        stats.males++
      } else {
        stats.femaleWeight += olympians[i].weight
        stats.females++
      }
    }

    var olympian_stats = statFormatter(olympians, stats);

    res.status(200).send({olympian_stats: olympian_stats});
  } catch (error) {
    console.log(error)
    res.status(500).send({ error });
  }
});

function statFormatter(olympians, stats) {
  return {
    total_competing_olympians: olympians.length,
    average_weight: {
      unit: "kg",
      male_olympians: Math.round(stats.maleWeight / stats.males),
      female_olympians: Math.round(stats.femaleWeight / stats.females)
    },
    average_age: Math.round(stats.totalAge / olympians.length)
  };
};

module.exports = router;
