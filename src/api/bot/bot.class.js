import { Client } from 'discord.js';

const log = require('debug')('bot');

const botus = new Client();

/*

  Set Options for Discord Bot

*/

function initBot() {
  log('Init Bot');

  botus.sendMessage = (channel, message, content) => {
    //
    channel.send(content);
  };
}

initBot();
export default botus;
