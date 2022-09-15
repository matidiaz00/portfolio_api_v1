"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const main = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 100, "Main!!!");
    });
};
exports.main = main;
