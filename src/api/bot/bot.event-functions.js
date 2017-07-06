import Botus from './bot.class';
import {
  WELCOME_MESSAGE,
  COMMAND_RANDOMIZE,
  COMMAND_GIFFME,
  IMAGES,
  GREETING_MORNING,
  GREETING_NOON,
  GREETING_EVENING,
} from './bot.constants';
import {
  error,
  parseMessage,
  getRandomizedTeams,
  getRandomMeme,
} from './bot.utils';

const log = require('debug')('bot.event-functions');

export function onReady() {
  log(`${WELCOME_MESSAGE} Nigga im alive`);

  // Loop for checking the current time
  setInterval(() => {
    const currentTime = new Date().toLocaleTimeString().split(':');
    const hour = parseInt(currentTime[0], 10);
    const minute = parseInt(currentTime[1], 10);
    const second = parseInt(currentTime[2], 10);
    log(hour, minute, second);

    // Morning, Noon, and Evening greeting
    if (hour === 7 && minute === 0 && second === 0) {
      Botus.channels.forEach((channel) => {
        if (channel.type === 'text') {
          channel.send(GREETING_MORNING);
        }
      });
    } else if (hour === 12 && minute === 0 && second === 0) {
      Botus.channels.forEach((channel) => {
        if (channel.type === 'text') {
          channel.send(GREETING_NOON);
        }
      });
    } else if (hour === 19 && minute === 0 && second === 0) {
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
      case COMMAND_GIFFME: getRandomMeme(message.channel, IMAGES);
        break;
      default: error(message.channel, `Invalid command ${COMMAND}`);
    }
  }
}
