import express from 'express';
import * as controller from './bot.controller';

const router = express.Router();

router.get('/add', controller.add);

export default router;
