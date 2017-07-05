
const log = require('debug')('bot');
const Client = require('discord.js').Client;

export default class Bot extends Client {
  contructor() {
    this.login(process.env.DISCORD_TOKEN);
    log('Im Alive!');
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
