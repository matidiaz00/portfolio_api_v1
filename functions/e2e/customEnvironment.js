"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("../src/environment/environment");
const node_fetch_1 = __importDefault(require("node-fetch"));
const getToken = () => __awaiter(void 0, void 0, void 0, function* () {
    const config = {
        method: "POST",
        Headers: { "User-Agent": "node-fetch" },
        body: JSON.stringify(environment_1.environment.user)
    };
    return (0, node_fetch_1.default)(`${environment_1.environment.url}/auth/login`, config)
        .then(res => res.json())
        .then(token => `Bearer ${token.body.stsTokenManager.accessToken}`)
        .catch(err => console.error(err));
});
// my-custom-environment
const jest_environment_node_1 = __importDefault(require("jest-environment-node"));
class CustomEnvironment extends jest_environment_node_1.default {
    constructor(config) {
        super(config);
    }
    setup() {
        const _super = Object.create(null, {
            setup: { get: () => super.setup }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.setup.call(this);
            const token = yield someSetupTasks();
            this.global.authToken = token;
        });
    }
    teardown() {
        const _super = Object.create(null, {
            teardown: { get: () => super.teardown }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.teardown.call(this);
            yield someTeardownTasks();
        });
    }
    runScript(script) {
        return super.runScript(script);
    }
}
