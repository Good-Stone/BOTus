
import { Client } from 'discord.js';

const log = require('debug')('bot');

export default class Bot {
  constructor() {
    this.client = new Client();
    this.client.login(process.env.DISCORD_TOKEN);
  }

  static sendMessage(channel, message) {
    channel.send(message);
    log(`Message sent! ${message}`);
  }

  static receiveMessage(channel, message) {
    // handle message nigga
    log(`Message received! ${message}`);
  }

}
