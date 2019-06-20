var express = require("express");
var router = express.Router();
var pry = require("pryjs");
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
    const medalists = await OlympianEvent.medalistsByEvent(req.params.id);
    res.status(200).send({ event: eventById.title, medalists: medalists })
  } catch (error) {
    console.log(error)
    res.status(500).send({ error });
  }
});

module.exports = router;
