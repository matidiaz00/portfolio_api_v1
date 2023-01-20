"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.api = void 0;
const functions = __importStar(require("firebase-functions"));
//import { https } from "firebase-functions";
const compression_1 = __importDefault(require("compression"));
const app_route_1 = __importDefault(require("./app/app.route"));
const v1_route_1 = __importDefault(require("./app/v1.route"));
const express_1 = __importDefault(require("express"));
const app_middleware_1 = require("./app/app.middleware");
const error_middleware_1 = __importDefault(require("./app/error/error.middleware"));
const method_override_1 = __importDefault(require("method-override"));
const app = (0, express_1.default)();
exports.app = app;
app.use((0, compression_1.default)(), app_middleware_1.HeadersMiddleWare, app_middleware_1.ParserJSONMiddleWare, app_middleware_1.ParserURLMiddleWare, app_middleware_1.StaticMiddleWare, (0, method_override_1.default)());
app.use('/v1', v1_route_1.default);
app.use('/', app_route_1.default);
app.use(error_middleware_1.default);
//const api = functions.region(process.env.REGION).https.onCall(app);
const api = functions.https.onRequest(app);
exports.api = api;
