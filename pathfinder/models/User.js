var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "User" model that matches up with DB
var User = sequelize.define("user", {
  userID: {
    type: Sequelize.INTEGER
  },
  username: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
}, {
  timestamps: true
});
// Syncs with DB
User.sync();
// Makes the User Model available for other files (will also create a table)
module.exports = User;