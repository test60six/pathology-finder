var User = require("../models/User.js");
var Experiments = require("../models/Experiments.js");
var Data = require("../models/Data.js");
var passport   = require('passport')

module.exports = function(app) {

  app.post("/api/register", function(req, res) {
      User.create(req.body)
      .then(function(data) {
          console.log("Success!");
          return res.status(200).send();
        });
      })

	app.post("/api/new_data", function(req, res) {
    console.log(req.body);
    Data.create(req.body)
    .then(function(data) {
      return res.status(200).send();
    })
  });

  app.post("/api/new_experiment", function(req, res) {
    console.log(req.body);
    Experiments.create(req.body)
    .then(function(data) {
      return res.status(200).send();
    })
  });

  app.get("/api/experiments/:userID", function(req, res) {
    Experiments.findAll({where: {userID: req.params.userID} })
    .then(function(data) {
      res.json(data);
    }).catch(function(err) {
      console.log(err);
    })
  });

  app.get("/api/experiments/:experimentName/:userID", function(req, res) {
    Experiments.findAll({ where: {experimentName: req.params.experimentName, userID: req.params.userID} })
    .then(function(data) {
      res.json(data);
    })
  })

  app.get("/api/data/:experimentName/:userID", function(req, res) {
    Data.findAll({ where: {experimentName: req.params.experimentName, userID: req.params.userID} })
    .then(function(data) {
      res.json(data);
    }).catch(function (err) {
      res.send(err);
    })
  });

  app.post("/api/loginUser", function(req, res) {
    User.findOne({ where: {email: req.body.email, password: req.body.password} })
    .then(function(data) {
      if(data === null) {
        res.send('User not found!');
      }
      else if(data !== null) {
        console.log(data.username);
        req.session.user = data.username;
        req.session.admin = true;
        console.log(req.session.user);
        res.send("Login Success!");
      }
    })
  })

  app.get('/logout', function (req, res) {
    req.logout();
    req.session.destroy();
    req.session = null;
    console.log("Logged Out")
    res.redirect('/login');
  });

  app.post("/api/getUser", function(req, res) {
    console.log(req.session.user);
    res.send(req.session.user);
  })
}