"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customSwaggerCSS = exports.specs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for JSONPlaceholder',
        version: '1.0.0',
    },
};
const options = {
    swaggerDefinition,
    apis: ['./**/*.doc.*'],
};
const specs = (0, swagger_jsdoc_1.default)(options);
exports.specs = specs;
const customSwaggerCSS = "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css";
exports.customSwaggerCSS = customSwaggerCSS;
