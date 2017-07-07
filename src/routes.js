import debug from 'debug';
import { red, green, blue } from 'chalk';

const log = debug('app-routes');
const botRoutes = require('./api/bot/bot.routes').default;
// Routes

export default (app) => {
  // logger
  app.use((req, res, next) => {
    log(`${blue(new Date().toISOString())} [${red(req.method)}] ${green(req.url)}`);
    next();
  });

  // Insert routes below

  app.use('/api/bot', botRoutes);

  app.use('/', (req, res, next) => {
    res.send({
      message: 'Unmatched route =((',
    });

    next();
  });
};
