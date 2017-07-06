import _ from 'lodash';
import {
  ERROR_MESSAGES,
} from './bot.constants';

const log = require('debug')('bot.utils');

function error(channel, message) {
  channel.send(`${_.sample(ERROR_MESSAGES)}\n*${message}*`);
  log(message);
}

export function parseMessage(message) {
  log(`Parsing ${message}`);

  const content = message.content.split(' ');
  const COMMAND = content[0];
  const params = content.slice(1);

  log(`command: ${COMMAND}, params: ${params}`);

  return { COMMAND, params };
}

export function getRandomizedTeams(channel, players) {
  if (players.length !== 10) return error(channel, 'Invalid number of players');

  const randomized = _.chunk(_.shuffle(players), 5);
  log(`randomized: ${randomized}`);

  return channel.send(`radiant: ${randomized[0]}\ndire: ${randomized[1]}`);
}

export function getRandomMeme(channel, images) {
  const imageUrl = _.sample(images);
  log(imageUrl);
  channel.send('', {
    file: imageUrl,
  });
}
