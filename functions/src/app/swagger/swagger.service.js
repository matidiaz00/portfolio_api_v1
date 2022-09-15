"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swagger = void 0;
const swagger = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 100, "Swagger!!!");
    });
};
exports.swagger = swagger;
