"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpController = exports.LoginController = void 0;
const error_model_1 = require("../../models/error.model");
const auth_service_1 = require("./auth.service");
const LoginController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, auth_service_1.login)(request.body);
        return response.send(res);
    }
    catch (err) {
        return new error_model_1.CustomError(500, err);
    }
});
exports.LoginController = LoginController;
const SignUpController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, auth_service_1.signup)(request.body);
        return response.send(res);
    }
    catch (err) {
        return new error_model_1.CustomError(500, err);
    }
});
exports.SignUpController = SignUpController;
