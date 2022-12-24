"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const firebase_functions_1 = require("firebase-functions");
const app_route_1 = __importDefault(require("./app/app.route"));
const v1_route_1 = __importDefault(require("./app/v1.route"));
const express_1 = __importDefault(require("express"));
const app_middleware_1 = require("./app/app.middleware");
const error_middleware_1 = __importDefault(require("./app/error/error.middleware"));
const method_override_1 = __importDefault(require("method-override"));
const app = (0, express_1.default)();
app.use(app_middleware_1.HeadersMiddleWare, app_middleware_1.ParserJSONMiddleWare, app_middleware_1.ParserURLMiddleWare, app_middleware_1.StaticMiddleWare, (0, method_override_1.default)());
app.use('/v1', v1_route_1.default);
app.use('/', app_route_1.default);
app.use(error_middleware_1.default);
exports.api = firebase_functions_1.https.onRequest(app);
