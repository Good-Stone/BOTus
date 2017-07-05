
// import {
//   EVENT_READY,
//   WELCOME_MESSAGE,
// } from './bot.constants';
//
const log = require('debug')('bot.event');
const Bot = require('./bot.class').default;

const botus = new Bot();
log(botus);

//
// botus.on(EVENT_READY, () => {
//   log(`${WELCOME_MESSAGE} Nigga im alive`);
// });
