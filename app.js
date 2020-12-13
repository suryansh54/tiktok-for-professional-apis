// Getting access to express framework
const express = require('express');
const cors = require('cors');

// Creating a expree app
const app = express();

// Getting access to router
const router = require('./routes/router');

// Necessary middleware so that we can use request body
app.use(express.json());
app.use(cors())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
// using router
app.use('/v1/api/', router);

// middleware used when no routes are matched
app.use('**', (req, res) => {
  res.status(400).json({
    status: 'ERROR',
    message: 'No such route found'
  });
});

// exporting express app
module.exports = app;
