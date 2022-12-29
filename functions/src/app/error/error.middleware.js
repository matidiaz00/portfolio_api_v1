"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_model_1 = require("./error.model");
const ErrorMiddleware = (err, req, res, next) => {
    let customError = err;
    if (!(err instanceof error_model_1.CustomError)) {
        const error = err.message ? err.message : err;
        customError = new error_model_1.CustomError(500, error);
    }
    res.status(customError.status).json(customError);
};
exports.default = ErrorMiddleware;
