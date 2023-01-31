"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheMiddleWare = exports.ParserJSONMiddleWare = exports.ParserURLMiddleWare = exports.HeadersMiddleWare = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const apicache_1 = __importDefault(require("apicache"));
const EMULATOR = typeof process.env.FUNCTIONS_EMULATOR === 'boolean' ? process.env.FUNCTIONS_EMULATOR : (process.env.FUNCTIONS_EMULATOR === 'true');
const HeadersMiddleWare = (req, res, next) => {
    if (EMULATOR) {
        res.header('Access-Control-Allow-Origin', '*');
    }
    else {
        const origin = req.headers.origin;
        if (origin && process.env.ALOWED_ORIGINS && JSON.parse(process.env.ALOWED_ORIGINS).includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, api_key, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    return next();
};
exports.HeadersMiddleWare = HeadersMiddleWare;
exports.ParserURLMiddleWare = body_parser_1.default.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 5,
    type: 'application/x-www-form-urlencoding',
});
exports.ParserJSONMiddleWare = body_parser_1.default.json({
    limit: 1024 * 1024,
    type: 'application/json',
});
exports.CacheMiddleWare = apicache_1.default.middleware;
