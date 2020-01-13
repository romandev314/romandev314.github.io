const mongoose = require('mongoose');
const db = 'mongodb://roma:roma314@ds361968.mlab.com:61968/roma';


module.exports = function () {
    mongoose.connect(db, {
    useCreateIndex: true,
      useUnifiedTopology: true,
    useNewUrlParser: true
  })
    .then(() => {
      console.log(`Connected to ${db}...`)
    })
}