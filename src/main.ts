import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import * as functions from "firebase-functions";
import * as express from "express";
import { HttpErrorsFilter } from './app/app.filter';
import { join } from 'path';

const server = express()
//const port = process.env.PORT || 3001;
const port = 3001;

export const createNestServer = async (expressInstance: any) => {
    const app = await NestFactory.create<NestExpressApplication>(
        AppModule,
        new ExpressAdapter(expressInstance)
    );
    app.useGlobalFilters(new HttpErrorsFilter());
    app.useStaticAssets(join(__dirname, 'views'));
    app.setBaseViewsDir(join(__dirname, 'views'));
    app.setViewEngine('html');
    await app.listen(port);
    return app.init();
};

createNestServer(server)
    .then(v => console.log(`Nest ready, open http://localhost:${port}/auth/login `))
    .catch(err => console.error('Nest broken', err));

export const api = functions.https.onRequest(server);