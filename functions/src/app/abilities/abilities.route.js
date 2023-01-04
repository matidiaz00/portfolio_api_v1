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
/**
 * @swagger
 * /abilities:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.get('/', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), abilities_controller_1.default);
router.use('/categories', categories_route_1.default);
exports.default = router;
