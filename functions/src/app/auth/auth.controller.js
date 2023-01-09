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
exports.CurrentUserController = exports.LogoutController = exports.LoginController = void 0;
const auth_service_1 = require("./auth.service");
const CurrentUserController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, auth_service_1.currentUser)(request.headers);
        response.json(res);
    }
    catch (err) {
        next(err);
    }
});
exports.CurrentUserController = CurrentUserController;
const LoginController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, auth_service_1.login)(request.body);
        response.json(res);
    }
    catch (err) {
        next(err);
    }
});
exports.LoginController = LoginController;
const LogoutController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, auth_service_1.logout)();
        response.json(res);
    }
    catch (err) {
        next(err);
    }
});
exports.LogoutController = LogoutController;
