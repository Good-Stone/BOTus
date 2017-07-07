'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _chalk = require('chalk');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var log = (0, _debug2.default)('server');
var PORT = process.env.PORT || 8000;

// Load the routes
require('./routes').default(app);
require('./api/bot/bot.event.js');
// Start the server
app.listen(PORT, function () {
  return log('Server listening on port ' + (0, _chalk.green)(PORT));
});

exports.default = app;
//# sourceMappingURL=server.js.map