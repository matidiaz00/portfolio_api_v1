import express, { NextFunction, Response, Request } from "express";
import bodyParser from "body-parser";
import * as path from "path";
import apicache from "apicache";
import { ALOWED_ORIGINS } from "./../config";

const EMULATOR: boolean = true//typeof process.env.FUNCTIONS_EMULATOR === 'boolean' ? process.env.FUNCTIONS_EMULATOR : (process.env.FUNCTIONS_EMULATOR === 'true');

declare module 'express-serve-static-core' {
    interface Response {
        error: (code: number, message: string) => Response;
        success: (code: number, message: string, result: any) => Response
    }
}

export const HeadersMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    if (EMULATOR) {
        res.header('Access-Control-Allow-Origin', '*');
    } else {
        const origin: string | undefined = req.headers.origin;
        if (origin && ALOWED_ORIGINS && JSON.parse(ALOWED_ORIGINS.toString()).includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, api_key, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    return next();
}

export const ParserURLMiddleWare = bodyParser.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 5,
    type: 'application/x-www-form-urlencoding',
})

export const ParserJSONMiddleWare = bodyParser.json({
    limit: 1024 * 1024,
    type: 'application/json',
})

export const CacheMiddleWare = apicache.middleware;