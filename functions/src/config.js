"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.USER_PASSWORD = exports.USER_EMAIL = exports.ALOWED_ORIGINS = exports.LINKEDIN_USER = exports.NUBELA_ACCESS_TOKEN = exports.LINKEDIN_ACCESS_TOKEN = exports.API_URL = void 0;
const params_1 = require("firebase-functions/params");
exports.API_URL = (0, params_1.defineString)('API_URL');
exports.LINKEDIN_ACCESS_TOKEN = (0, params_1.defineString)('LINKEDIN_ACCESS_TOKEN');
exports.NUBELA_ACCESS_TOKEN = (0, params_1.defineString)('NUBELA_ACCESS_TOKEN');
exports.LINKEDIN_USER = (0, params_1.defineString)('LINKEDIN_USER');
exports.ALOWED_ORIGINS = (0, params_1.defineString)('ALOWED_ORIGINS');
exports.USER_EMAIL = (0, params_1.defineString)('USER_EMAIL');
exports.USER_PASSWORD = (0, params_1.defineString)('USER_PASSWORD');
exports.config = {
    API_URL: exports.API_URL,
    LINKEDIN_ACCESS_TOKEN: exports.LINKEDIN_ACCESS_TOKEN,
    NUBELA_ACCESS_TOKEN: exports.NUBELA_ACCESS_TOKEN,
    LINKEDIN_USER: exports.LINKEDIN_USER,
    ALOWED_ORIGINS: exports.ALOWED_ORIGINS
};
