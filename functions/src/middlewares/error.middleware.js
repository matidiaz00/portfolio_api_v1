"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_model_1 = require("./../models/error.model");
const ErrorMiddleware = (err, req, res, next) => {
    res.status(err.status).send(new error_model_1.CustomError(err.status, err.message));
};
