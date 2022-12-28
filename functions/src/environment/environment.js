"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
const package_json_1 = require("./../../package.json");
exports.environment = {
    production: false,
    url: 'http://localhost:5001',
    LINKEDIN_ACCESS_TOKEN: 'AQWoQ1m-3SCjPbf6Q_YCMOkrf5ShzaRcYEWw1E_rX8tFG8C4U3RJ-OLq8eu_qDxhwVCrAv48-y-XVWRnVqHlAQPNnL6xHyVjQ3hCZ1hIPwo8szufVrzDTq3f2QmfCvnpJNeGyVuXbSEfukNkay8ObrbgvRfMR7PdTudGSfTbaltVKpmJ96vzX-bfyOyZXLAdUkTw5ElaignP2mgHBc2naO4h_4aIzrJkxu8K0oozr0n2jXcqWSJXVIJMtsKvBkR980aGYeXXyXREk5R1iiWUGDanuoVRyMNAExqr_bGJsvBnJ4E994_c0SlDlI2_D8tAputGzktgnAaXd2_RRBnzo78v1hN3bw',
    NUBELA_ACCESS_TOKEN: '49ff05e7-e82a-4bf8-b661-35c08325cf63',
    LINKEDIN_USER: 'matidiaz',
    allowedOrigins: [
        'http://localhost:5001',
        'http://localhost:5000',
        'https://us-central1-matidiaz000.cloudfunctions.net',
        'https://matidiaz000.web.app',
        'https://matidiaz.com',
        'https://www.matidiaz.com'
    ],
    user: {
        email: 'matidiaz00@gmail.com',
        password: '1991R1k1s1m0'
    },
    name: package_json_1.name,
    version: package_json_1.version
};
