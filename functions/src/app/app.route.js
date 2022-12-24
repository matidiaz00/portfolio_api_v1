"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const error_model_1 = require("./../models/error.model");
const auth_route_1 = __importDefault(require("./auth/auth.route"));
const router = (0, express_1.Router)();
router.use('/auth', auth_route_1.default);
router.use('*', (request, response, next) => {
    const err = new error_model_1.CustomError(404, 'No se encontro la ruta a la que llamaste.');
    next(err);
});
exports.default = router;
