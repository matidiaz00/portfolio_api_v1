import { Static, String, Array, Record } from "runtypes";

const ExperienceRecordQuery = Record({
    name: String,
    data: String
});

export const ExperienceModel = Record({
    endpoint: String,
    query: Array(ExperienceRecordQuery),
    token: String
});

export type ExperienceType = Static<typeof ExperienceModel>;