var express = require("express");
var router = express.Router();
var pry = require("pryjs");
const sequelize = require('sequelize');
const Op = sequelize.Op
var Olympian = require('../../../models').Olympian;
var Event = require('../../../models').Event;
var OlympianEvent = require('../../../models').OlympianEvent;

router.get("/", async function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  try {
    const events = await Event.findAll({
      attributes: [
        'sport',
        [sequelize.fn('array_agg', sequelize.col('title')), 'events']
      ],
      group: ['Event.sport']
    });
    res.status(200).send({ events });
  } catch (error) {
    console.log(error)
    res.status(500).send({ error });
  }
});

router.get("/:id/medalists", async function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  try {
    res.status(200).send({})
  } catch (error) {
    console.log(error)
    res.status(500).send({ error });
  }
});

module.exports = router;
