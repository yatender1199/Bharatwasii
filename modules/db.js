var mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bharatwasii'
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = connection;