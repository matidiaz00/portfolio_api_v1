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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = exports.LoginMiddleware = void 0;
const error_model_1 = require("./../error/error.model");
const firebase_1 = require("./../../firebase");
const config_1 = __importDefault(require("./../../config"));
const auth_model_1 = require("./auth.model");
const getAuthToken = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        req.authToken = req.headers.authorization.split(' ')[1];
    }
    else {
        req.authToken = null;
    }
    return next();
};
const LoginMiddleware = (req, res, next) => {
    if (auth_model_1.LoginModel.guard(req.body)) {
        next();
    }
    else {
        const err = auth_model_1.LoginModel.validate(req.body);
        const customErr = new error_model_1.CustomError(400, err);
        res.status(customErr.status).json(customErr);
    }
};
exports.LoginMiddleware = LoginMiddleware;
const AuthMiddleware = (req, res, next) => {
    return getAuthToken(req, res, () => __awaiter(void 0, void 0, void 0, function* () {
        const { authToken } = req;
        if (authToken) {
            firebase_1.auth.verifyIdToken(authToken)
                .then((userInfo) => {
                if (userInfo.email === config_1.default.USER.email)
                    return next();
                else {
                    const message = 'Este usuario no esta autorizado para hacer esta llamada.';
                    const customErr = new error_model_1.CustomError(401, { error: userInfo, message: message });
                    res.status(customErr.status).json(customErr);
                }
            })
                .catch((err) => {
                const message = 'Este token no esta autorizado para hacer esta llamada.';
                const customErr = new error_model_1.CustomError(401, { error: err, message: message });
                res.status(customErr.status).json(customErr);
            });
        }
        else {
            const message = 'Necesitas usar un token para hacer esta llamada.';
            const customErr = new error_model_1.CustomError(401, message);
            res.status(customErr.status).json(customErr);
        }
    }));
};
exports.AuthMiddleware = AuthMiddleware;
