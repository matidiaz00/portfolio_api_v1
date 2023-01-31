"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_middleware_1 = require("./../app.middleware");
const express_1 = require("express");
const swagger_controller_1 = require("./swagger.controller");
const router = (0, express_1.Router)();
router.use('/', (0, app_middleware_1.CacheMiddleWare)('5 minutes'));
router.get('/', swagger_controller_1.SwaggerController);
exports.default = router;
