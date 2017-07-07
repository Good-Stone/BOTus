import {
  addUrls,
} from './bot.utils';

const log = require('debug')('bot.controller');
//  curl -i localhost:8000/api/bot/add?urls=http://i.imgur.com/3WJbSiF.jpg
export function add(req, res) {
  const { urls } = req.query;

  if (!urls) res.send({ message: 'wtf?' });
  const u = urls.split(',');
  addUrls(u);
  res.end();
}

export function remove(req, res) {
  log(req.query);
  res.end();
}
