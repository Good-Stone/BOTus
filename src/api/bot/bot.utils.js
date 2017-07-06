import _ from 'lodash';
import moment from 'moment-timezone';
import {
  PREFIX,
  ERROR_MESSAGES,
} from './bot.constants';

const log = require('debug')('bot.utils');

export function error(channel, message) {
  channel.send(`${_.sample(ERROR_MESSAGES)}\n*${message}*`);
  log(message);
}

export function parseMessage(message) {
  log(`Parsing ${message}`);

  let content = message.content;

  if (content.startsWith(PREFIX)) {
    content = content.split(' ');
    const COMMAND = content[0].replace(PREFIX, '');
    const params = content.slice(1);

    log(`command: ${COMMAND}, params: ${params}`);

    return { COMMAND, params };
  }

  return { params: content };
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

export function getTime(channel, timezone) {
  if (timezone.length > 1) return error(channel, 'Please specify only one timezone');

  const currentTime = moment.tz(timezone[0]);
  return channel.send(`Current time in ${timezone}: ${currentTime.format('h:mm:ss a')}`);
}
