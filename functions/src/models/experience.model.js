"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceModel = void 0;
const runtypes_1 = require("runtypes");
const ExperienceRecordQuery = (0, runtypes_1.Record)({
    name: runtypes_1.String,
    data: runtypes_1.String
});
exports.ExperienceModel = (0, runtypes_1.Record)({
    endpoint: runtypes_1.String,
    query: (0, runtypes_1.Array)(ExperienceRecordQuery),
    token: runtypes_1.String
});
