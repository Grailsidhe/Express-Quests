const connection = require('./db-config');
const express = require('express');
const chalk = require('chalk')
const app = express();

const port = process.env.PORT || 5001;

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
  } else {
    console.log('connected to database with threadId :  ' + connection.threadId);
  }
});


// connection.promise().query('<SQL query>')
//  .then(([result]) => {
//   console.log('connected to database with threadId :  ' + connection.threadId);
//  }).catch((err) => {
//   console.error('error connecting: ' + err.stack);
//  });



app.get("/", (req, res) => {
  response.send("Welcome to Express");
});

app.get('/api/movies', (req, res) => {
  connection.query("SELECT * FROM movies", (err, result) => {
    if (err) {
      res.status(500).send('Error retrieving data from database');
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(port, () => {
  console.log(chalk.green.inverse(`Server listening on port ${port}`));
});