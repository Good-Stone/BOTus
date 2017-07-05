'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onReady = onReady;
exports.onReceivedMessage = onReceivedMessage;

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
    var currentTime = new Date().toLocaleTimeString().split(':');
    var hour = parseInt(currentTime[0], 10);
    var minute = parseInt(currentTime[1], 10);
    var second = parseInt(currentTime[2], 10);
    log(hour, minute, second);

    // Morning, Noon, and Evening greeting
    if (hour === 7 && minute === 0 && second === 0) {
      _bot2.default.channels.forEach(function (channel) {
        if (channel.type === 'text') {
          channel.send(_bot3.GREETING_MORNING);
        }
      });
    } else if (hour === 12 && minute === 0 && second === 0) {
      _bot2.default.channels.forEach(function (channel) {
        if (channel.type === 'text') {
          channel.send(_bot3.GREETING_NOON);
        }
      });
    } else if (hour === 19 && minute === 0 && second === 0) {
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

  log((0, _bot4.parseMessage)(message));
  switch (COMMAND) {
    case _bot3.COMMAND_RANDOMIZE:
      {
        var teams = (0, _bot4.randomize)(params);

        message.channel.send('mga bobong radiant: ' + teams[0] + '\nmga bobong dire: ' + teams[1]);
        break;
      }
    case _bot3.COMMAND_GIFFME:
      {
        (0, _bot4.getRandomMeme)(message.channel, _bot3.IMAGES);
        break;
      }
    default:
      {
        log('Wat?');
      }
  }
}
//# sourceMappingURL=bot.event-functions.js.map