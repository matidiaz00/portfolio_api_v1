"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_model_1 = require("../../models/error.model");
const abilities_model_1 = require("../../models/abilities.model");
const AbilitiesMiddleware = (req, res, next) => {
    if (abilities_model_1.DataModel.guard(req.body)) {
        next();
    }
    else {
        const err = abilities_model_1.DataModel.validate(req.body);
        const customErr = new error_model_1.CustomError(400, err);
        console.error(customErr);
        res.status(customErr.status).send(customErr);
    }
};
exports.default = AbilitiesMiddleware;