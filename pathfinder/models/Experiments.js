var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "Experimental" model that matches up with DB
var Experiments = sequelize.define("experiments", {
  experimentName: {
    type: Sequelize.STRING
  },
  userID: {
    type: Sequelize.STRING
  }
}, {
  timestamps: true
});
// Syncs with DB
Experiments.sync();
// Makes the Experimental Model available for other files (will also create a table)
module.exports = Experiments;