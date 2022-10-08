// include mysql module
var mysql = require('mysql');
 
// create a connection variable with the details required
var con = mysql.createConnection({
  host: "localhost",    // ip address of server running mysql
  user: "arjun",    // user name to your mysql database
  password: "password"  // corresponding password
});
 
// connect to the database.
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});