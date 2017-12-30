var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "Datapoint" model that matches up with DB
var Control = sequelize.define("control", {
  question1: {
    type: Sequelize.INTEGER
  },
  question2: {
    type: Sequelize.INTEGER
  },
  question3: {
    type: Sequelize.INTEGER
  },
  question4: {
    type: Sequelize.INTEGER
  },
  question5: {
    type: Sequelize.INTEGER
  },
  question6: {
    type: Sequelize.INTEGER
  },
  question7: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: true
});
// Syncs with DB
Control.sync();
// Makes the Control Model available for other files (will also create a table)
module.exports = Control;