"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadersMiddleWare = void 0;
const HeadersMiddleWare = (req, res, next) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    return next();
};
exports.HeadersMiddleWare = HeadersMiddleWare;
