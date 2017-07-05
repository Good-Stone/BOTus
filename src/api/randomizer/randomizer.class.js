
import _ from 'lodash';

const log = require('debug')('randomizer');

export default class Randomizer {
  static randomize(n, array) {
    log('Randomizing dem Araizes');
    log(n, array);
    _.shuffle(array);
  }
}
