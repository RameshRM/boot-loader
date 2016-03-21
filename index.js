'use strict';
var kraken = require('kraken-js');

module.exports = function (app, options) {
  options = options || {};
  options.basedir = options.basedir || process.cwd();
  app.use(kraken(options || {}));
  return app;
};
