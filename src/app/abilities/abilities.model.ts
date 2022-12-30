import { Static, Number, String, Array, Record, Optional } from "runtypes";

const DataRecord = Record({
    id: Optional(String),
    title: String,
    description: String,
    order: Number
});

const DataRecordChildren = DataRecord.extend({
    items: Optional(
        Array(DataRecord)
    )
});  

export const DataModel = DataRecordChildren;

export type DataType = Static<typeof DataModel>;