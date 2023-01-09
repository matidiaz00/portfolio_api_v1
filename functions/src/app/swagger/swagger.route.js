"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_middleware_1 = require("./../app.middleware");
const express_1 = require("express");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_service_1 = require("./swagger.service");
const auth_middleware_1 = require("./../auth/auth.middleware");
const swagger_controller_1 = require("./swagger.controller");
const router = (0, express_1.Router)();
router.use('/swagger.json', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), auth_middleware_1.AuthMiddleware);
router.get('/swagger.json', swagger_controller_1.SwaggerController);
router.use('/', swagger_ui_express_1.default.serve);
router.get('/', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), swagger_ui_express_1.default.setup(swagger_service_1.specs, swagger_service_1.options));
exports.default = router;
