"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserWithEmailAndPassword = exports.signInWithEmailAndPassword = exports.app = exports.client_auth = exports.auth = exports.db = exports.admin = void 0;
const admin = __importStar(require("firebase-admin"));
exports.admin = admin;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
Object.defineProperty(exports, "signInWithEmailAndPassword", { enumerable: true, get: function () { return auth_1.signInWithEmailAndPassword; } });
Object.defineProperty(exports, "createUserWithEmailAndPassword", { enumerable: true, get: function () { return auth_1.createUserWithEmailAndPassword; } });
const firebaseAccountCredentials = __importStar(require("./firebase.sdk.key.json"));
const FirebaseClientKey = __importStar(require("./firebase.sdk.client.key.json"));
const config_1 = __importDefault(require("./config"));
const serviceAccount = firebaseAccountCredentials;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: config_1.default.PROD ? config_1.default.API_URL : 'localhost:8080'
});
const db = admin.firestore();
exports.db = db;
const auth = admin.auth();
exports.auth = auth;
const app = (0, app_1.initializeApp)(FirebaseClientKey);
exports.app = app;
let client_auth;
exports.client_auth = client_auth;
if (!config_1.default.PROD) {
    exports.client_auth = client_auth = (0, auth_1.getAuth)();
    (0, auth_1.connectAuthEmulator)(client_auth, "http://localhost:9099", { disableWarnings: true });
    process.env['FIREBASE_AUTH_EMULATOR_HOST'] = 'localhost:9099';
    process.env['FIRESTORE_EMULATOR_HOST'] = 'localhost:8080';
}
else {
    exports.client_auth = client_auth = (0, auth_1.getAuth)(app);
}
