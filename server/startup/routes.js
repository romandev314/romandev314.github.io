const works = require('../routes/works');

module.exports = function (app) {
  app.use('/api/v1/works', works);
};