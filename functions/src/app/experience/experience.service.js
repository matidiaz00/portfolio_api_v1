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
exports.findAll = void 0;
const getEndpoint = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const headersRequest = { 'Authorization': `Bearer ${data.token}` };
    let query = '?';
    for (let val of data.query) {
        query += `${val.name}=${val.data}&`;
    }
    return yield fetch(`${data.endpoint}${query}`, { headers: headersRequest });
});
const findAll = (data) => {
    return getEndpoint(data);
    //.pipe( map(response => response.data) );
    //.pipe( map(response => response.data.experiences) );
};
exports.findAll = findAll;
