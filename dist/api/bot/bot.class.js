'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _discord = require('discord.js');

var log = require('debug')('bot');

var botus = new _discord.Client();

/*

  Set Options for Discord Bot

*/

function initBot() {
  log('Init Bot');

  botus.sendMessage = function (channel, message, content) {
    //
    channel.send(content);
  };
}

initBot();
exports.default = botus;
//# sourceMappingURL=bot.class.js.map