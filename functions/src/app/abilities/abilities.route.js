"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_middleware_1 = require("./../app.middleware");
const express_1 = require("express");
const abilities_controller_1 = __importDefault(require("./abilities.controller"));
const categories_route_1 = __importDefault(require("./categories/categories.route"));
const router = (0, express_1.Router)();
router.get('/all', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), abilities_controller_1.default);
router.use('/', categories_route_1.default);
exports.default = router;
