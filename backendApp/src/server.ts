import express, { Request, Response } from "express";
import http from 'http';

import routes from "./routes";
import Middlewares from "./Middlewares";
import Handlers from "./handlers";
import Helpers from "./helpers";
// need injectors 
// need helpers


const middlewares = new Middlewares()
const helpers = new Helpers()
/*======================================================
 * Initializing Server
 *======================================================*/
const app = express();

// Set the network port
const port = process.env.PORT || 3000;
app.set('port',port)
middlewares.applyBasicMiddlewares(app)
// add middlewares

// creating http server 
const server = http.createServer(app)

const handler = new Handlers(server, helpers)

/*======================================================
 * Add Routes to Router
 *======================================================*/
routes(app, middlewares, handler, helpers)


// Start the Express server
server.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});