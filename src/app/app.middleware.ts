import express, { NextFunction, Response, Request } from "express";
import bodyParser from 'body-parser';
import * as path from 'path';
import { environment } from "./../environment/environment";

declare module 'express-serve-static-core' {
    interface Response {
        error: (code: number, message: string) => Response;
        success: (code: number, message: string, result: any) => Response
    }
}

export const HeadersMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    const origin: string | undefined = req.headers.origin;
    if (origin && environment.allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, api_key, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS');
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

export const StaticMiddleWare = express.static(path.join(__dirname, 'public'))