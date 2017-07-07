'use strict';

var _bot = require('./bot.class');

var _bot2 = _interopRequireDefault(_bot);

var _bot3 = require('./bot.constants');

var _bot4 = require('./bot.event-functions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const log = require('debug')('bot.event');

_bot2.default.on(_bot3.EVENT_READY, _bot4.onReady);
_bot2.default.on(_bot3.EVENT_RECEIVED_MESSAGE, _bot4.onReceivedMessage);

_bot2.default.login(process.env.DISCORD_TOKEN);
//# sourceMappingURL=bot.event.js.map