// Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");
console.log('burger.js: creates functions for db' )

// pull in sequelize package
var Sequelize = require('sequelize');

// reference connection
var sequelize = require("../config/config.json")

var burger = sequelize.define('burger', attributes, {
          id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
              },
  burger_name: {
                type: Sequelize.STRING ,
                allowNull: false,
              },
  devoured: {
              type: Sequelize.BOOLEAN ,
              allowNull: false,
              defaultValue: false
            },
  date:  {
              type: Sequelize.DATE,  
              allowNull: false,
              defaultValue: Sequelize.NOW
           }
});

// sync with DB
Burger.sync();


// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };

// Export the database functions for the controller (burgersController.js).
module.exports = burger;