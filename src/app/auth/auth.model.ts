import { Static, String, Record, Number } from "runtypes";

export const LoginModel = Record({
    email: String,
    password: String
});

export const SignUpModel = Record({
    email: String,
    password: String,
    phone: Number,
    name: String
});

export type LoginType = Static<typeof LoginModel>;

export type SignUpType = Static<typeof SignUpModel>;