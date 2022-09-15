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
                if (userInfo.uid != 'RDuxbgSvGmUkw9CzkkvNOea8Dy13')
                    return next();
                else
                    new error_model_1.CustomError(401, 'You are not authorized to make this request');
            })
                .catch(err => new error_model_1.CustomError(401, { error: err, message: 'You are not authorized to make this request' }));
        }
        else
            return new error_model_1.CustomError(401, 'You are not authorized to make this request');
    }));
};
exports.default = AuthMiddleware;
