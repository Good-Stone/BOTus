import {
  COMMAND_GIFFME,
} from './bot.constants';

const log = require('debug')('bot.utils');

export function randomize() {

}

export function parseMessage(message) {
  log(message.content);
  return {
    COMMAND: COMMAND_GIFFME,
    params: 'nigaga?',
  };
}

export function getRandomMeme() {

}
