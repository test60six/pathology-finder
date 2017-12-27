var Control = require("../models/Control.js");
var Experimental = require("../models/Experimental.js");
var User = require("../models/User.js");

module.exports = function(app) {
	app.post("/api/new", function(req, res) {
    console.log("Control Data:");
    console.log(req.body);
    Control.create({
      subject: req.body.subject,
      question1: req.body.question1,
      question2: req.body.question2,
      question3: req.body.question3,
      question4: req.body.question4,
      question5: req.body.question5,
      question6: req.body.question6,
      question7: req.body.question7
    });
  });
}