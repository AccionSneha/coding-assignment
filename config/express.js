const cors = require('cors');
const express = require('express');
const routes = require('../index.route');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors({
  origin: function (origin, callback) {
    callback(null, origin);
  },
  credentials: true
}));

app.use('/api', routes);

app.use((err, req, res, next) =>
  res.status(err.status).json({
    message: err.message,
    stack: err.stack
  })
);

module.exports = app;