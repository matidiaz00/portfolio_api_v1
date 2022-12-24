"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_model_1 = require("./../models/error.model");
const ErrorMiddleware = (err, req, res, next) => {
    let customError = err;
    console.error(err);
    if (!(err instanceof error_model_1.CustomError)) {
        customError = new error_model_1.CustomError(500);
    }
    res.status(customError.status).send(customError);
};
exports.default = ErrorMiddleware;
