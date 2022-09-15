"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const package_json_1 = require("../../package.json");
const targetPath = './environments/environment.ts';
const environment = Object.assign(Object.assign({ production: true }, Object(process.env.ENVIRONMENT)), { name: package_json_1.name, version: package_json_1.version });
const envConfigFile = `export const environment = ${environment};`;
(0, fs_1.writeFile)(targetPath, envConfigFile, 'utf8', (err) => {
    if (err) {
        return console.error(err);
    }
});
