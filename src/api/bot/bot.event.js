import Botus from './bot.class';

import {
  EVENT_READY,
  EVENT_RECEIVED_MESSAGE,
  EVENT_GUILD_MEMBER_ADD,
} from './bot.constants';

import {
  onReady,
  onReceivedMessage,
  onGuildMemberAdd,
} from './bot.event-functions';

// const log = require('debug')('bot.event');

Botus.on(EVENT_READY, onReady);
Botus.on(EVENT_RECEIVED_MESSAGE, onReceivedMessage);
Botus.on(EVENT_GUILD_MEMBER_ADD, onGuildMemberAdd);

Botus.login(process.env.DISCORD_TOKEN);
