'use strict';
var kraken = require('kraken-js');

module.exports = function (app, options) {
  app.use(kraken(options || {}));
  return app;
};
