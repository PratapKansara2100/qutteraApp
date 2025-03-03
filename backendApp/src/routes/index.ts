import express from 'express';

import Helpers from '../helpers';
import General from './general';
import Middlewares from '../Middlewares';
import Handlers from '../handlers';

export default function (
  router: express.Router,
  middlewares: Middlewares,
  handlers: Handlers,
  helpers: Helpers,
) {
  const apiRouter = express.Router();
  router.use('/api', apiRouter);

  router.use('/', (req, res) => {
    console.log('req, req', req);
    res.status(200).send('Nothing to see here');
  });

  // apiRouter.use(middlewares.<>) // can be used to add some extre middleware functionality

  General(apiRouter, handlers, helpers);
}
