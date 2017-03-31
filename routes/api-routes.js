console.log('api-routes.js routes for displaying and saving data')
// require burger model
var Book = require("../models/burger.js");



module.exports = function(app) {

	// get all burgers route
	app.get("api/all", function(req, res) {
		Burger.findAll({}).then(function(results){
			res.json(results);
		})
	})


	// get a specific burger route
	app.get("api/:burger", function (req, res) {
		if (req.params.burger) {
			Burger.findAll({
				where: {
					title: req.params.burger
				}
			}).then(function(results) {
				res.json(results);
				
			});
		}
	});


	// add a burger route
	app.post("api/new", function(req, res) {
		Burger.create({
			burger_name: req.body.burger_name,
			devoured: req.body.devoured,
			date: req.body.date
		})
	})
}