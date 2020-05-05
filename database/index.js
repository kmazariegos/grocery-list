const mysql = require('mysql') 

const db = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '',
  database: 'karlas_groceries'
})

db.connect(function(err) {
  if (err) {
    console.log(err)
  } else {
  console.log("Connected!");
  }
})

module.exports = db