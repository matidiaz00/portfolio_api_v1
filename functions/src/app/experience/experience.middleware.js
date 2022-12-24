"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_model_1 = require("../error/error.model");
const experience_model_1 = require("./experience.model");
const ExperienceMiddleware = (req, res, next) => {
    if (experience_model_1.ExperienceModel.guard(req.body)) {
        next();
    }
    else {
        const err = experience_model_1.ExperienceModel.validate(req.body);
        const customErr = new error_model_1.CustomError(400, err);
        console.error(customErr);
        res.status(customErr.status).send(customErr);
    }
};
exports.default = ExperienceMiddleware;
