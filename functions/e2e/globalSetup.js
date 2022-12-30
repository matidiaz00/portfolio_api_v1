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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../src/index"));
const environment_1 = require("../src/environment/environment");
const req = supertest_1.default.agent(index_1.default);
const globalSetup = () => __awaiter(void 0, void 0, void 0, function* () {
    const resAuth = yield req.post('/auth/login').send(environment_1.environment.user);
    const accessToken = resAuth.body.stsTokenManager.accessToken;
    // Set reference to firebase token in order to close the server during teardown.
    //process.token = `Bearer ${accessToken}`;
});
exports.default = globalSetup;
