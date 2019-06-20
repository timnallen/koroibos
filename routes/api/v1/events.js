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
    const events = await Event.eventsBySport();
    res.status(200).send({ events });
  } catch (error) {
    console.log(error)
    res.status(500).send({ error });
  }
});

router.get("/:id/medalists", async function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  try {
    const eventById = await Event.eventById(req.params.id);
    const olympiansWithMedal = await OlympianEvent.findAll({
      where: {
        EventId: req.params.id,
        medal: {[Op.not]: 'NA'}
      },
      attributes: [
        'medal'
      ],
      include: [{
        model: Olympian,
        attributes: [
          'name',
          'team',
          'age'
        ]
      }]
    });
    const medalists = olympiansWithMedal.map(function (olympian) {
      return {
        name: olympian.Olympian.name,
        team: olympian.Olympian.team,
        age: olympian.Olympian.age,
        medal: olympian.medal
      }
    });
    res.status(200).send({ event: eventById.title, medalists: medalists })
  } catch (error) {
    console.log(error)
    res.status(500).send({ error });
  }
});

module.exports = router;
