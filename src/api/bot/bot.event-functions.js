import moment from 'moment-timezone';
import Botus from './bot.class';
import {
  WELCOME_MESSAGE,
  COMMAND_RANDOMIZE,
  COMMAND_GIFFME,
  COMMAND_TIME,
  GREETING_MORNING,
  GREETING_NOON,
  GREETING_EVENING,
} from './bot.constants';
import {
  error,
  parseMessage,
  getRandomizedTeams,
  getRandomMeme,
  getTime,
} from './bot.utils';

const log = require('debug')('bot.event-functions');

export function onReady() {
  log(`${WELCOME_MESSAGE} Nigga im alive`);
  Botus.user.setGame('with my Pussy');

  // Loop for checking the current time
  setInterval(() => {
    const currentTime = moment.tz('Asia/Manila').format('h:mm:ss a');

    // Morning, Noon, and Evening greeting
    if (currentTime === '7:00:00 am') {
      Botus.channels.forEach((channel) => {
        if (channel.type === 'text') {
          channel.send(GREETING_MORNING);
        }
      });
    } else if (currentTime === '12:00:00 pm') {
      Botus.channels.forEach((channel) => {
        if (channel.type === 'text') {
          channel.send(GREETING_NOON);
        }
      });
    } else if (currentTime === '7:00:00 pm') {
      Botus.channels.forEach((channel) => {
        if (channel.type === 'text') {
          channel.send(GREETING_EVENING);
        }
      });
    }
  }, 1000);
}

export function onReceivedMessage(message) {
  const { COMMAND, params } = parseMessage(message);

  if (COMMAND) {
    log(`COMMAND: ${COMMAND}, params: ${params}`);

    switch (COMMAND) {
      case COMMAND_RANDOMIZE: getRandomizedTeams(message.channel, params);
        break;
      case COMMAND_GIFFME: getRandomMeme(message.channel);
        break;
      case COMMAND_TIME: getTime(message.channel, params);
        break;
      default: error(message.channel, `Invalid command ${COMMAND}`);
    }
  }
}

export function onGuildMemberAdd(member) {
  log(`"${member.user.tag}" has joined "${member.guild.name}"`);

  member.guild.defaultChannel.send(`Welcome to ${member.guild.name}`, {
    reply: member.user.id,
  });
}
