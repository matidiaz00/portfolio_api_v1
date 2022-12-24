"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModel = void 0;
const runtypes_1 = require("runtypes");
const DataRecord = (0, runtypes_1.Record)({
    id: (0, runtypes_1.Optional)(runtypes_1.String),
    title: runtypes_1.String,
    description: runtypes_1.String,
    order: runtypes_1.Number
});
const DataRecordChildren = DataRecord.extend({
    items: (0, runtypes_1.Optional)((0, runtypes_1.Array)(DataRecord))
});
exports.DataModel = DataRecordChildren;
