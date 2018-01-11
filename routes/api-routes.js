// var Control = require("../models/Control.js");
// var Experimental = require("../models/Experimental.js");
var User = require("../models/User.js");
var Experiments = require("../models/Experiments.js");
var Data = require("../models/Data.js");
var passport   = require('passport')

module.exports = function(app) {
	app.post("/api/new_data", function(req, res) {
    console.log(req.body);
    Data.create(req.body);
  });

	// app.post("/api/treatment", function(req, res) {
 //    console.log("Treatment Data:");
 //    console.log(req.body);
 //    Experimental.create(req.body);
 //  });

  app.post("/api/experiments", function(req, res) {
    console.log(req.body);
    Experiments.create(req.body)
    .then(function(data) {
      return res.status(200).send();
    })
  });

  app.post("/api/new_data", function(req, res) {
    console.log(req.body);
    Data.create(req.body)
    .then(function(data) {
      return res.status(200).send();
    })
  });

  app.get("/api/experiments/:userID", function(req, res) {
    Experiments.findAll({ where: {userID: req.params} })
    .then(function(data) {
      res.json(data);
    })
  });

  // app.get("/api/treatment", function(req, res) {
  //   Experimental.findAll({})
  //   .then(function(data) {
  //     res.json(data);
  //   })
  // })

  app.get("/api/login", function(req, res) {
    User.findOne({ where: {email: req.body.email, password: req.body.password} })
    .then(function(data) {
      res.json(data);
    })
  })

//   app.post('/api/register', passport.authenticate('local-signup', {
//         successRedirect: '/dashboard',
 
//         failureRedirect: '/register'
//     }
// ));

  app.post('/api/login', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
 
        failureRedirect: '/register'
    }
 
));

  // app.get('/dashboard',isLoggedIn, authController.dashboard);

  // app.get('/logout',authController.logout);

  app.post("/api/register", function(req, res) {
    passport.authenticate('local-signup'),
    function(req, res) {
      const user = {email, password} = req.body;
      User.create(req.body)
      .then(function(data) {
        req.login(user, function(err) {
          console.log("inside req.login");
          if (err) { 
            console.log("has error", err);
            return err;
          }
          console.log("Success!");
          return res.status(200).send();
        });
      })
    }
  })

  function isLoggedIn(req, res, next) { 
    if (req.isAuthenticated())     
        return next();         
    res.redirect('/register');
  }
}