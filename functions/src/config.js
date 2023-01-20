"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const params_1 = require("firebase-functions/params");
const PROD = (0, params_1.defineBoolean)('PROD');
const API_URL = (0, params_1.defineString)('API_URL');
const LINKEDIN_ACCESS_TOKEN = (0, params_1.defineString)('LINKEDIN_ACCESS_TOKEN');
const NUBELA_ACCESS_TOKEN = (0, params_1.defineString)('NUBELA_ACCESS_TOKEN');
const LINKEDIN_USER = (0, params_1.defineString)('LINKEDIN_USER');
const ALOWED_ORIGINS = (0, params_1.defineString)('ALOWED_ORIGINS');
const USER = (0, params_1.defineString)('USER');
const config = {
    PROD: PROD,
    API_URL: API_URL,
    LINKEDIN_ACCESS_TOKEN: LINKEDIN_ACCESS_TOKEN,
    NUBELA_ACCESS_TOKEN: NUBELA_ACCESS_TOKEN,
    LINKEDIN_USER: LINKEDIN_USER,
    ALOWED_ORIGINS: ALOWED_ORIGINS,
    USER: USER
};
exports.default = config;
