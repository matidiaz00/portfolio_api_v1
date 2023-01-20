"use strict";

import { https } from "firebase-functions";
import compression from "compression";
import MainRoute from "./app/app.route";
import V1Route from "./app/v1.route";
import express from "express";
import { HeadersMiddleWare, ParserJSONMiddleWare, ParserURLMiddleWare, StaticMiddleWare } from "./app/app.middleware";
import ErrorsMiddleware from "./app/error/error.middleware";
import methodOverride from "method-override";

const app = express();

app.use( compression(), HeadersMiddleWare, ParserJSONMiddleWare, ParserURLMiddleWare, StaticMiddleWare, methodOverride() );

app.use('/v1', V1Route);

app.use('/', MainRoute);

app.use( ErrorsMiddleware );

const api = https.onRequest(app)

export { api, app };