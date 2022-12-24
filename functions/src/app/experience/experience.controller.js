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
const environment_1 = require("../../environment/environment");
const experience_service_1 = require("./experience.service");
const official = {
    endpoint: 'https://api.linkedin.com/v2/me',
    query: [
        { name: 'fields', data: 'id' }, // si agregamos positions devuelve error de acceso
    ],
    token: environment_1.environment.LINKEDIN_ACCESS_TOKEN
};
const nubela = {
    endpoint: 'https://nubela.co/proxycurl/api/v2/linkedin',
    query: [
        { name: 'url', data: `https://www.linkedin.com/in/${environment_1.environment.LINKEDIN_USER}` },
        { name: 'use_cache', data: `if-present` }
    ],
    token: environment_1.environment.NUBELA_ACCESS_TOKEN
};
const ExperienceController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, experience_service_1.findAll)(nubela);
        response.send(res.data.experiences);
    }
    catch (err) {
        next(err);
    }
});
exports.default = ExperienceController;
