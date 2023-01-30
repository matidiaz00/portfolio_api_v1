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
exports.findAll = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const error_model_1 = require("./../error/error.model");
//: ExperienceType
const getEndpoint = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const headersRequest = { 'Authorization': `Bearer ${data.token}`, 'Accept': 'application/json', "User-Agent": "node-fetch" };
    let query = '?';
    for (let val of data.query) {
        query += `${val.name}=${val.data}&`;
    }
    return yield (0, node_fetch_1.default)(`${data.endpoint}${query}`, { method: "GET", headers: headersRequest });
});
const findAll = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield getEndpoint(data)
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => new error_model_1.CustomError(500, err));
});
exports.findAll = findAll;
