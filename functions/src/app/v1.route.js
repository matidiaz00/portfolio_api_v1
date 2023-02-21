"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const abilities_route_1 = __importDefault(require("./abilities/abilities.route"));
const experience_route_1 = __importDefault(require("./experience/experience.route"));
const router = (0, express_1.Router)();
router.use('/abilities', abilities_route_1.default);
router.use('/experience', experience_route_1.default);
exports.default = router;
