"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticMiddleWare = exports.ParserJSONMiddleWare = exports.ParserURLMiddleWare = exports.HeadersMiddleWare = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path = __importStar(require("path"));
const HeadersMiddleWare = (req, res, next) => {
    const allowedOrigins = [
        'http://localhost:5001',
        'http://localhost:5000',
        'https://us-central1-matidiaz000.cloudfunctions.net',
        'https://matidiaz000.web.app',
        'https://matidiaz.com',
        'https://www.matidiaz.com'
    ];
    const origin = req.headers.origin;
    if (origin && allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, api_key, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS');
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
exports.StaticMiddleWare = express_1.default.static(path.join(__dirname, 'public'));
