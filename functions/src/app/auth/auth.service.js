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
exports.signup = exports.login = void 0;
const firebase_1 = require("../../firebase");
const error_model_1 = require("../error/error.model");
const environment_1 = require("../../environment/environment");
const login = (body) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, firebase_1.signInWithEmailAndPassword)(firebase_1.client_auth, body.email, body.password)
        .then((userCredential) => {
        if (userCredential.user.email === environment_1.environment.user.email)
            return userCredential.user;
        else
            return new error_model_1.CustomError(403, `El usuario ${userCredential.user.email} no tiene permisos para utilizar esta API.`);
    })
        .catch((err) => new error_model_1.CustomError(500, err));
});
exports.login = login;
const signup = (body) => __awaiter(void 0, void 0, void 0, function* () {
    return firebase_1.auth
        .createUser({
        email: body.email,
        emailVerified: false,
        phoneNumber: body.phone.toString(),
        password: body.password,
        displayName: body.name,
        photoURL: 'http://www.example.com/12345678/photo.png',
        disabled: false,
    })
        .then((userRecord) => userRecord)
        .catch((err) => new error_model_1.CustomError(500, err));
});
exports.signup = signup;
