var express = require("express");
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require("body-parser");
var User = require("./models/User.js");
var env = require('dotenv').load();
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Passport Setup
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session());
// Static directory
app.use(express.static("public"));
// Routes
// =============================================================
require("./routes/api-routes.js")(app);
// passport strategies
require('./config/passport.js')(passport, User);
// test route
app.get('/test', function(req, res) {
	res.send('Welcome to Passport with Sequelize');
});
// starting our Express app
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});