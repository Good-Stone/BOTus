'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = error;
exports.parseMessage = parseMessage;
exports.getRandomizedTeams = getRandomizedTeams;
exports.getRandomMeme = getRandomMeme;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _bot = require('./bot.constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = require('debug')('bot.utils');

function error(channel, message) {
  channel.send(_lodash2.default.sample(_bot.ERROR_MESSAGES) + '\n*' + message + '*');
  log(message);
}

function parseMessage(message) {
  log('Parsing ' + message);

  var content = message.content;

  if (content.startsWith(_bot.PREFIX)) {
    content = content.split(' ');
    var COMMAND = content[0].replace(_bot.PREFIX, '');
    var params = content.slice(1);

    log('command: ' + COMMAND + ', params: ' + params);

    return { COMMAND: COMMAND, params: params };
  }

  return { params: content };
}

function getRandomizedTeams(channel, players) {
  if (players.length !== 10) return error(channel, 'Invalid number of players');

  var randomized = _lodash2.default.chunk(_lodash2.default.shuffle(players), 5);
  log('randomized: ' + randomized);

  return channel.send('radiant: ' + randomized[0] + '\ndire: ' + randomized[1]);
}

function getRandomMeme(channel, images) {
  var imageUrl = _lodash2.default.sample(images);
  log(imageUrl);
  channel.send('', {
    file: imageUrl
  });
}
//# sourceMappingURL=bot.utils.js.map