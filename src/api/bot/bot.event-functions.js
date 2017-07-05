import {
  WELCOME_MESSAGE,
  COMMAND_RANDOMIZE,
} from './bot.constants';

import {
  randomize,
  parseMessage,
} from './bot.utils';

const log = require('debug')('bot.event-functions');
const botus = require('botus');

export function onReady() {
  log(`${WELCOME_MESSAGE} Nigga im alive`);
}

export function onReceivedMessage(message) {
  const { COMMAND, params } = parseMessage(message);

  log(parseMessage(message));
  switch (COMMAND) {
    case COMMAND_RANDOMIZE:
      {
        const teams = randomize(params);

        message.channel.send(`mga bobong radiant: ${teams[0]}\nmga bobong dire: ${teams[1]}`);
        break;
      }

    default:
      {
        log('Wat?');
      }
  }
}
