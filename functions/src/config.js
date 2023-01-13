"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const dotenv_1 = __importDefault(require("dotenv"));
// Parsing the env file.
dotenv_1.default.config({ path: (0, path_1.resolve)(__dirname, "../.env") });
// Loading process.env as ENV interface
const getConfig = () => {
    return {
        PROD: process.env.PROD === "true",
        API_URL: process.env.API_URL,
        LINKEDIN_ACCESS_TOKEN: process.env.LINKEDIN_ACCESS_TOKEN,
        NUBELA_ACCESS_TOKEN: process.env.NUBELA_ACCESS_TOKEN,
        LINKEDIN_USER: process.env.LINKEDIN_USER,
        ALOWED_ORIGINS: process.env.ALOWED_ORIGINS ? process.env.ALOWED_ORIGINS.split(",") : undefined,
        USER: process.env.USER ? JSON.parse(process.env.USER) : undefined
    };
};
// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.
const getSanitzedConfig = (config) => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in .env file`);
        }
    }
    return config;
};
const config = getConfig();
const sanitizedConfig = getSanitzedConfig(config);
exports.default = sanitizedConfig;
