const express = require("express");

module.exports = function (app) {
  app.use(express.static('public'));
  app.use(express.json()); // req.body
  app.use(express.urlencoded({
    extended: true
  })); // key=value&key=value
};