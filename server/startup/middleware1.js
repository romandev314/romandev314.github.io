const express = require("express");
const morgan = require('morgan');

module.exports = function (app) {
  app.use(express.static('public'));
  app.use(express.json()); // req.body
  app.use(express.urlencoded({
    extended: true
  })); // key=value&key=value

  if (app.get('env') === 'development') {
    app.use(morgan('dev'));
    console.log('Morgan enabled...');
  }
}