
import {
  WELCOME_MESSAGE,
  COMMAND_RANDOMIZE,
} from './bot.constants';

import {
  randomize,
  parsedMessage,
} from './bot.utils';

const log = require('debug')('bot.event-functions');

export function onReady() {
  log(`${WELCOME_MESSAGE} Nigga im alive`);
}

export function onReceivedMessage(message) {
  const { COMMAND, params } = parsedMessage(message);
  switch (COMMAND) {
    case COMMAND_RANDOMIZE: randomize(params);
      break;
    default: log('Wat?');
  }
}
