var express = require("express");
var session    = require('express-session');
var bodyParser = require("body-parser");
var User = require("./models/User.js");
var env = require('dotenv').load();
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: false
}));
// Routes
// ============================================================
require("./routes/api-routes.js")(app);

//Authorization check 
var auth = function(req, res, next) {
	if (req.session && req.session.user) {
		return next();
	}
	else {
		return res.sendStatus(401);
	}
};

// Login endpoint
app.get('/login', function (req, res) {
  if (!req.query.username || !req.query.password) {
    res.send('login failed');    
  } else if(req.query.username === "amy" || req.query.password === "amyspassword") {
    req.session.user = "amy";
    req.session.admin = true;
    res.send("login success!");
  }
});

// app.get('/', function(req, res) {
// 	sess=req.session;
// })

// app.get('/form', auth, function (req, res) {
//     res.send("You can only see this after you've logged in.");
// });

// app.get('/dashboard', auth, function (req, res) {
//     res.send("You can only see this after you've logged in.");
// });

// app.get('/results', auth, function (req, res) {
//     res.send("You can only see this after you've logged in.");
// });

// // test route
// app.get('/test', function(req, res) {
// 	res.send('Welcome to Passport with Sequelize');
// });
// starting our Express app
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});