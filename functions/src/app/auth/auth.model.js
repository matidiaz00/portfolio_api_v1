"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpModel = exports.LoginModel = void 0;
const runtypes_1 = require("runtypes");
exports.LoginModel = (0, runtypes_1.Record)({
    email: runtypes_1.String,
    password: runtypes_1.String
});
exports.SignUpModel = (0, runtypes_1.Record)({
    email: runtypes_1.String,
    password: runtypes_1.String,
    phone: runtypes_1.Number,
    name: runtypes_1.String
});
