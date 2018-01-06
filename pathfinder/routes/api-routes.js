var Control = require("../models/Control.js");
var Experimental = require("../models/Experimental.js");
var User = require("../models/User.js");

module.exports = function(app) {
	app.post("/api/control", function(req, res) {
    console.log("Control Data:");
    console.log(req.body);
    Control.create({
      question1: req.body.question1,
      question2: req.body.question2,
      question3: req.body.question3,
      question4: req.body.question4,
      question5: req.body.question5,
      question6: req.body.question6,
      question7: req.body.question7
    });
  });

	app.post("/api/treatment", function(req, res) {
    console.log("Treatment Data:");
    console.log(req.body);
    Experimental.create({
      question1: req.body.question1,
      question2: req.body.question2,
      question3: req.body.question3,
      question4: req.body.question4,
      question5: req.body.question5,
      question6: req.body.question6,
      question7: req.body.question7
    });
  });

  app.get("/api/control", function(req, res) {
    Control.findAll({})
    .then(function(data) {
      res.json(data);
    })
  })

  app.get("/api/treatment", function(req, res) {
    Experimental.findAll({})
    .then(function(data) {
      res.json(data);
    })
  })

  app.get("api/login", function(req, res) {
    User.findOne({ where: {email: req.body.email, password: req.body.password} })
    .then(function(data) {
      console.log(data);
      return data;
    })
  })
}