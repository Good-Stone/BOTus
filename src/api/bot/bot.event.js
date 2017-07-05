
import Botus from './bot.class';

import {
  EVENT_READY,
  EVENT_MESSAGE,
  WELCOME_MESSAGE,
} from './bot.constants';

const log = require('debug')('bot.event');

Botus.on(EVENT_READY, () => {
  log(`${WELCOME_MESSAGE} Nigga im alive`);
});

Botus.on(EVENT_MESSAGE, (message) => {
  log(message);
});

Botus.login(process.env.DISCORD_TOKEN);
