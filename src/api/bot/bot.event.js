
import Botus from './bot.class';

import {
  EVENT_READY,
  EVENT_RECEIVED_MESSAGE,
} from './bot.constants';

import {
  onReady,
  onReceivedMessage,
} from './bot.event-functions';

// const log = require('debug')('bot.event');

Botus.on(EVENT_READY, onReady);
Botus.on(EVENT_RECEIVED_MESSAGE, onReceivedMessage);

Botus.login(process.env.DISCORD_TOKEN);
