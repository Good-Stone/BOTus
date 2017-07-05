
import Discord from 'discord.js';

const log = require('debug')('bot');

export default class Bot extends Discord.Client {
  contructor() {
    super.login(process.env.DISCORD_TOKEN);
    log('Im Alive!');
  }
}
