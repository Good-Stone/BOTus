import {
  WELCOME_MESSAGE,
  COMMAND_RANDOMIZE,
  COMMAND_GIFFME,
  IMAGES,
} from './bot.constants';

import {
  randomize,
  parseMessage,
  getRandomMeme,
} from './bot.utils';

const log = require('debug')('bot.event-functions');

export function onReady() {
  log(`${WELCOME_MESSAGE} Nigga im alive`);
}

export function onReceivedMessage(message) {
  const { COMMAND, params } = parseMessage(message);
  switch (COMMAND) {
    case COMMAND_RANDOMIZE:
      {
        const teams = randomize(params);

        message.channel.send(`mga bobong radiant: ${teams[0]}\nmga bobong dire: ${teams[1]}`);
        break;
      }
    case COMMAND_GIFFME:
      {
        getRandomMeme(message.channel, IMAGES);
        break;
      }
    default:
      {
        log('Wat?');
      }
  }
}
