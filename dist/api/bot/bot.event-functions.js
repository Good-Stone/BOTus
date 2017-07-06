'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onReady = onReady;
exports.onReceivedMessage = onReceivedMessage;

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _bot = require('./bot.class');

var _bot2 = _interopRequireDefault(_bot);

var _bot3 = require('./bot.constants');

var _bot4 = require('./bot.utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = require('debug')('bot.event-functions');

function onReady() {
  log(_bot3.WELCOME_MESSAGE + ' Nigga im alive');

  // Loop for checking the current time
  setInterval(function () {
    var currentTime = _momentTimezone2.default.tz('Asia/Manila').format('h:mm:ss a');

    // Morning, Noon, and Evening greeting
    if (currentTime === '7:00:00 am') {
      _bot2.default.channels.forEach(function (channel) {
        if (channel.type === 'text') {
          channel.send(_bot3.GREETING_MORNING);
        }
      });
    } else if (currentTime === '12:00:00 pm') {
      _bot2.default.channels.forEach(function (channel) {
        if (channel.type === 'text') {
          channel.send(_bot3.GREETING_NOON);
        }
      });
    } else if (currentTime === '7:00:00 pm') {
      _bot2.default.channels.forEach(function (channel) {
        if (channel.type === 'text') {
          channel.send(_bot3.GREETING_EVENING);
        }
      });
    }
  }, 1000);
}

function onReceivedMessage(message) {
  var _parseMessage = (0, _bot4.parseMessage)(message),
      COMMAND = _parseMessage.COMMAND,
      params = _parseMessage.params;

  if (COMMAND) {
    log('COMMAND: ' + COMMAND + ', params: ' + params);

    switch (COMMAND) {
      case _bot3.COMMAND_RANDOMIZE:
        (0, _bot4.getRandomizedTeams)(message.channel, params);
        break;
      case _bot3.COMMAND_GIFFME:
        (0, _bot4.getRandomMeme)(message.channel, _bot3.IMAGES);
        break;
      case _bot3.COMMAND_TIME:
        (0, _bot4.getTime)(message.channel, params);
        break;
      default:
        (0, _bot4.error)(message.channel, 'Invalid command ' + COMMAND);
    }
  }
}
//# sourceMappingURL=bot.event-functions.js.map