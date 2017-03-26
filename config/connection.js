// Set up MySQL connection.
var mysql = require("mysql");
console.log('connection.js');

var PORT = process.env.PORT || 3306;
console.log(PORT);

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
      port: PORT,
      host: "localhost",
      user: "root",
      password: 'root',
      database: "burgers_db"
    });
};

    // var connection = mysql.createConnection({
    //   port: 3306,
    //   host: "y06qcehxdtkegbeb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    //   user: "ces9iyuv5umtp5c8",
    //   password: 'mu7h5qdnify7oa6z',
    //   database: "pbvswpiz5xuii725"
    // });


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
