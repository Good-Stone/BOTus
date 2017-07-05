'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomize = randomize;
exports.parseMessage = parseMessage;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = require('debug')('bot.utils');

function randomize(players) {
  var randomized = _lodash2.default.chunk(_lodash2.default.shuffle(players), 5);
  log('randomized: ' + randomized);

  return randomized;
}

function parseMessage(message) {
  log('Parsing ' + message);

  var content = message.content.split(' ');
  var COMMAND = content[0];
  var params = content.slice(1);

  log('command: ' + COMMAND + ', params: ' + params);

  return { COMMAND: COMMAND, params: params };
}
//# sourceMappingURL=bot.utils.js.map