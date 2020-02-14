const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: ''
});
con.connect(err => {
  if (err) {
    console.log(`Error connecting to Db -> ${err}`);
    return;
  }
  console.log('Connection established');
});

con.end(err => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});
