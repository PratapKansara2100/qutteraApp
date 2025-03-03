import { Express, Router } from 'express';
import Handlers from '../handlers';
import Helpers from '../helpers';
import { error } from 'console';

export default function (apiRouter: Router, handlers: Handlers, helpers: Helpers) {
  apiRouter.post('/scan/:url', async (req, res, next) => {
    console.log('hitting');
    const urlToScan = req.params.url.trim().replace(/\s+/g, '');
    // type check the url to be a url string

    const endpointInfo = {
      success: {
        message: 'Successfully Queried queterra api.',
        statusCode: 200,
      },
      req,
    };

    try {
      const resp = await helpers.handleRoute(
        handlers.general.getScanFromQuttera(urlToScan),
        endpointInfo,
      );

      res.status(resp.statusCode).send(resp);
    } catch (error) {
      res.status(error.statusCode).send(error);
    }
  });

  apiRouter.get('/report/:url', async (req, res, next) => {
    console.log('hitting2');
    const urlToScan = req.params.url.trim().replace(/\s+/g, '');
    // type check the url to be a url string

    const endpointInfo = {
      success: {
        message: 'Successfully Queried queterra api.',
        statusCode: 200,
      },
      req,
    };

    try {
      const resp = await helpers.handleRoute(
        handlers.general.getReportFromQuttera(urlToScan),
        endpointInfo,
      );

      res.status(resp.statusCode).send(resp);
    } catch (error) {
      res.status(error.statusCode).send(error);
    }
  });
}
