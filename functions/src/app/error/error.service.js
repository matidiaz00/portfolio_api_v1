"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
const error_model_1 = require("./../../models/error.model");
const error = () => {
    return new Promise((resolve, reject) => {
        return new error_model_1.CustomError(500);
    });
};
exports.error = error;
