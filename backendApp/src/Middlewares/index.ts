import express from 'express';

export default class Middlewares {
  applyBasicMiddlewares(app: express.Application) {
    app.use(express.json()).use(express.urlencoded()).use(this.addCorsHeaders());
  }
  addCorsHeaders() {
    return (_, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', '*');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
  }
}
