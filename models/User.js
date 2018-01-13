var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "User" model that matches up with DB
var User = sequelize.define("user", {
	firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
    lastname: {
        type: Sequelize.STRING,
        notEmpty: true
    },

    username: {
        type: Sequelize.STRING,
    },

    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    institution: {
    	type: Sequelize.STRING
	}
});
// Syncs with DB
User.sync();
// Makes the User Model available for other files (will also create a table)
module.exports = User;