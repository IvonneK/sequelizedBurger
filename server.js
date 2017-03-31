// Ivonne.Komis
// sequelizedBurger app 

console.log("server.js");
// 
var express = require("express");
var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

var port = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + "app/public"));

// setup express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// static app directory
app.use(express.static("app/public"));


// // Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controller.js");

// Routes ik upd
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// app.use("/", routes);

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});