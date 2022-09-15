"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
const error = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 100, "Error!!");
    });
};
exports.error = error;
