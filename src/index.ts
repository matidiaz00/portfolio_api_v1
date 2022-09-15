"use strict";

import { https } from 'firebase-functions'
import MainRoute from './app/app.route'
import V1Route from './app/v1.route'
import express from 'express'
import { HeadersMiddleWare, ParserJSONMiddleWare, ParserURLMiddleWare, StaticMiddleWare } from './middlewares/main.middleware'
import ErrorMiddleware from './middlewares/errors.middleware';
import methodOverride from 'method-override';
import AuthMiddleware from './middlewares/auth.middleware';

const app = express();

app.use( HeadersMiddleWare, ParserJSONMiddleWare, ParserURLMiddleWare, StaticMiddleWare, methodOverride() );

app.use('/', MainRoute);

app.use( AuthMiddleware );

app.use('/v1', V1Route);

app.use( ErrorMiddleware );

export const api = https.onRequest(app)