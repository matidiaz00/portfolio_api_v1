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
exports.setToken = void 0;
const environment_1 = require("../src/environment/environment");
const auth_service_1 = require("../src/app/auth/auth.service");
let token;
const setToken = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, auth_service_1.login)(environment_1.environment.user);
        token = `Bearer ${res.stsTokenManager.accessToken}`;
        return token;
    }
    catch (err) {
        console.error(err);
        return err;
    }
});
exports.setToken = setToken;
/*
import request from 'supertest';
import { environment } from '../src/environment/environment';
import api from '../src/index';
import Cookies from 'js-cookie';

const req = request.agent(api);

async () => {
  const res = await req.post('/auth/login').send(environment.user);
  const token = res.body.stsTokenManager.accessToken;
  console.log(token)
  Cookies.set('token', `Bearer ${token}`)
  const cook = Cookies.get('token');
  console.warn(cook)
};
*/ 
