import _ from 'lodash';

const log = require('debug')('bot.utils');

export function randomize(players) {
  const randomized = _.chunk(_.shuffle(players), 5);
  log(`randomized: ${randomized}`);

  return randomized;
}

export function parseMessage(message) {
  log(`Parsing ${message}`);

  const content = message.content.split(' ');
  const COMMAND = content[0];
  const params = content.slice(1);

  log(`command: ${COMMAND}, params: ${params}`);

  return { COMMAND, params };
}
