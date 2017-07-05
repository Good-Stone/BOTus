
import {
  WELCOME_MESSAGE,
  COMMAND_RANDOMIZE,
} from './bot.constants';

import {
  randomize,
  parseMessage,
} from './bot.utils';

const log = require('debug')('bot.event-functions');

export function onReady() {
  log(`${WELCOME_MESSAGE} Nigga im alive`);
}

export function onReceivedMessage(message) {
  const { COMMAND, params } = parseMessage(message);
  switch (COMMAND) {
    case COMMAND_RANDOMIZE: randomize(params);
      break;
    default: log('Wat?');
  }
}
