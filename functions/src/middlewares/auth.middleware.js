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
const error_model_1 = require("../models/error.model");
const firebase_1 = require("../firebase");
const environment_1 = require("../environment/environment");
const getAuthToken = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        req.authToken = req.headers.authorization.split(' ')[1];
    }
    else {
        req.authToken = null;
    }
    return next();
};
const AuthMiddleware = (req, res, next) => {
    return getAuthToken(req, res, () => __awaiter(void 0, void 0, void 0, function* () {
        const { authToken } = req;
        if (authToken) {
            firebase_1.auth.verifyIdToken(authToken)
                .then(userInfo => {
                if (userInfo.uid != environment_1.environment.FIREBASE_USER_UID)
                    return next();
                else {
                    const message = 'Este usuario no esta autorizado para hacer esta llamada.';
                    const customErr = new error_model_1.CustomError(401, { error: userInfo, message: message });
                    console.error(customErr);
                    res.status(customErr.status).send(customErr);
                }
            })
                .catch(err => {
                const message = 'Este token no esta autorizado para hacer esta llamada.';
                const customErr = new error_model_1.CustomError(401, { error: err, message: message });
                console.error(customErr);
                res.status(customErr.status).send(customErr);
            });
        }
        else {
            const message = 'Necesitas usar un token para hacer esta llamada.';
            const customErr = new error_model_1.CustomError(401, message);
            console.error(customErr);
            res.status(customErr.status).send(customErr);
        }
    }));
};
exports.default = AuthMiddleware;
