'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _chalk = require('chalk');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug2.default)('app-routes');

// Routes

exports.default = function (app) {
  // logger
  app.use(function (req, res, next) {
    log((0, _chalk.blue)(new Date().toISOString()) + ' [' + (0, _chalk.red)(req.method) + '] ' + (0, _chalk.green)(req.url));
    next();
  });

  // Insert routes below
  app.use('/', function (req, res, next) {
    res.send({
      message: 'Unmatched route =(('
    });
  });
};
//# sourceMappingURL=routes.js.map