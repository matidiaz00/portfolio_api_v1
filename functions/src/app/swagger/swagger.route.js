"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_middleware_1 = require("./../app.middleware");
const express_1 = require("express");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_service_1 = require("./swagger.service");
const router = (0, express_1.Router)();
const options = {
    customCssUrl: swagger_service_1.customSwaggerCSS
};
router.use('/', swagger_ui_express_1.default.serve);
router.get('/', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), swagger_ui_express_1.default.setup(swagger_service_1.specs, options));
exports.default = router;
