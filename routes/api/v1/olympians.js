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
  Olympian.findAll({
    attributes: ['name', 'team', 'age', 'sport']
  })
    .then(olympians => {
      return olympians.map(function (olympian) {
        let formattedOlympian = {
          name: olympian.name,
          team: olympian.team,
          age: olympian.age,
          sport: olympian.sport,
          total_medals_won: 1
        };
        return formattedOlympian;
      })
    })
    .then(olympians => {
      res.status(200).send({olympians: olympians});
    })
    .catch(error => {
      console.log(error)
      res.status(500).send({ error })
    });
});

module.exports = router;
