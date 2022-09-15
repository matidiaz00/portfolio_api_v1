"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("./auth/auth.route"));
const error_route_1 = __importDefault(require("./error/error.route"));
const main_route_1 = __importDefault(require("./main/main.route"));
const router = (0, express_1.Router)();
router.use('/', main_route_1.default);
router.use('/error', error_route_1.default);
router.use('/auth', auth_route_1.default);
exports.default = router;
